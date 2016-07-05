'use strict';

const RE_TABLE = /\|===\s+([^]*)\n\|===/u;

module.exports = input => {
  const match = RE_TABLE.exec(input);
  if (match) {
    const cells = match[1].replace(/^\| /, '').split(/\| /);
    console.log(cells);
    return input;
  }
  return null;
};
