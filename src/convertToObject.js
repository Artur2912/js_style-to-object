'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};
  const lines = sourceString.split(';').filter(line => line !== '');

  for (const line of lines) {
    const [key, value] = line.split(':');

    obj[key.trim()] = value.trim();
  }

  return obj;
}

module.exports = convertToObject;
