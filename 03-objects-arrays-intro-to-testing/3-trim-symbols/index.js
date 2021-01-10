/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string || size === 0) {
    return '';
  }

  if (!size) {
    return string;
  }

  const result = string.split('').reduce((resObj, current) => {
    if (resObj.str[resObj.str.length - 1] === current) {
      resObj.count = resObj.count + 1;
    } else {
      resObj.count = 1;
    }

    if (size >= resObj.count) {
      resObj.str = resObj.str + current;
    }

    return resObj;
  }, { str: '', count: 0 });

  return result.str;
}
