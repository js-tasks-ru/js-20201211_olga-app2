/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  switch (param) {
    case 'asc':
      return sortLocale(arr, 1);
    case 'desc':
      return sortLocale(arr, -1);
    default:
      console.error('Error in sortStrings');
      return arr;
  }

  function sortLocale(arr, direction) {
    return [...arr].sort((string1, string2) =>
      direction * string1.localeCompare(string2, ['ru', 'en'], {caseFirst: 'upper'}));
  }
}
