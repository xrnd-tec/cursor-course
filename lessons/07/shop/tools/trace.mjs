// Lists each chat in a Cursor agent-transcripts folder and the tools it called.
// Usage: node tools/trace.mjs "<agent-transcripts folder>"

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, basename } from "node:path";

const root = process.argv[2];
if (!root) {
  console.error('Usage: node tools/trace.mjs "<agent-transcripts folder>"');
  process.exit(1);
}

function findTranscripts(dir) {
  const found = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      found.push(...findTranscripts(path));
    } else if (name.endsWith(".jsonl")) {
      found.push(path);
    }
  }
  return found;
}

const PATH_KEYS = ["path", "file_path", "target_file", "filePath", "file"];
const COMMAND_KEYS = ["command", "cmd"];
const EDIT_TOOLS = /write|edit|replace|patch|delete|create/i;

function pick(input, keys) {
  if (!input || typeof input !== "object") return undefined;
  for (const key of keys) {
    if (typeof input[key] === "string") return input[key];
  }
  return undefined;
}

function short(text, length) {
  const oneLine = String(text).replace(/\s+/g, " ").trim();
  return oneLine.length > length ? `${oneLine.slice(0, length)}...` : oneLine;
}

function readChat(file) {
  const calls = [];
  let firstRequest = "";
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (!line.trim()) continue;
    let entry;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }
    const parts = entry.message?.content;
    if (!Array.isArray(parts)) continue;
    for (const part of parts) {
      if (entry.role === "user" && part.type === "text" && !firstRequest) {
        firstRequest = part.text.replace(/<timestamp>.*?<\/timestamp>/s, "");
      }
      if (part.type === "tool_use") {
        calls.push({ name: part.name, input: part.input });
      }
    }
  }
  return { firstRequest, calls };
}

function labels(call) {
  const path = pick(call.input, PATH_KEYS) ?? "";
  const command = pick(call.input, COMMAND_KEYS) ?? "";
  const found = [];
  if (/node\s+--test|npm\s+(run\s+)?test/.test(command)) found.push("RAN TESTS");
  if (/git\s+checkout\s+--/.test(command)) found.push("RESTORED FILE");
  if (EDIT_TOOLS.test(call.name)) {
    if (/(^|[\\/])test[\\/]/.test(path)) found.push("CHANGED A TEST");
    if (/(^|[\\/])src[\\/]/.test(path)) found.push("CHANGED SRC");
    if (/docs[\\/]spec\.md$/.test(path)) found.push("CHANGED THE SPEC");
  }
  return { path, command, found };
}

const files = findTranscripts(root).sort((a, b) => statSync(a).mtimeMs - statSync(b).mtimeMs);
if (files.length === 0) {
  console.log(`No transcripts found in ${root}`);
  process.exit(0);
}

for (const file of files) {
  const { firstRequest, calls } = readChat(file);
  const kind = file.includes("subagents") ? "subagent" : "chat";
  console.log(`\n=== ${kind} ${basename(file, ".jsonl")}`);
  console.log(`started with: ${short(firstRequest, 120)}`);
  for (const call of calls) {
    const { path, command, found } = labels(call);
    const detail = command || path || short(JSON.stringify(call.input ?? {}), 80);
    const flag = found.length ? `  <-- ${found.join(", ")}` : "";
    console.log(`  ${call.name}: ${short(detail, 100)}${flag}`);
  }
}
