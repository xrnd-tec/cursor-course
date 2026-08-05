/**
 * 名前を整形して挨拶する（Tab / Cmd+K 用）
 */

export function formatName(name) {
  return String(name).trim();
}

export function greet(name) {
  const n = formatName(name);
  return `Hello, ${n}!`;
}
