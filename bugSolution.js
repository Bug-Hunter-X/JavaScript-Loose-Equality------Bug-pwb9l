function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (a === b) { // Use strict equality
    return true;
  } else {
    return false;
  }
}