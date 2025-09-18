'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const lines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (const line of lines) {
    const index = line.indexOf(':');

    if (index === -1) {
      continue;
    }

    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();

    if (key) {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
