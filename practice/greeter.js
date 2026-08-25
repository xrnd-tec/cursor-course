/**
 * Formats a name and greets (for Tab and Ctrl+K practice)
 */

export function formatName(name) {
  return String(name).trim();
}

export function greet(name) {
  const n = formatName(name);
  return `Hello, ${n}!`;
}
