'use strict';

const RE_TABLE = /\|===\s+([^]*)\n\|===/u;

module.exports = input => {
  const match = RE_TABLE.exec(input);
  if (!match) {
    return null;
  }

  const cells = match[1].replace(/^\|[ \t]+/, '').split(/\|[ \t]+/);
  console.log(cells);
  return input;
};

