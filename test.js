'use strict';

import test from 'ava';
import {table} from './';

test('parse simple table', t => {
  const input = `|===\n| english\n| 한글\n|===`;
  const output = table(input);
  t.true(input === output);
});

