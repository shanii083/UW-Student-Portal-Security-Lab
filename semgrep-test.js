
// BAD: eval executes JavaScript code
const unsafeResult = eval("2 + 2");

// GOOD: JSON.parse safely parses valid JSON
const safeResult = JSON.parse('{"value":4}');
