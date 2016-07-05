import test from 'ava';
import fn from './';

test('parse simple input', t => {
  const input = `|===\n| english\n| 한글\n|===`;
  const output = fn(input);
  t.true(input === output);
});
