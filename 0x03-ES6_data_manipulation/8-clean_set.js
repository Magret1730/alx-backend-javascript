export default function cleanSet(set, startString) {
  // Check if startString is empty or not a string
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter the set values that start with startString and map them
  const result = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}
