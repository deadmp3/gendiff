import fs from 'fs';
import gendiff from '../src';

test('test', () => {
  const fileBefore = '__tests__/__fixtures__/before.json';
  const fileAfter = '__tests__/__fixtures__/after.json';
  const result = fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf8');
  console.log(result);
  expect(gendiff(fileBefore, fileAfter)).toEqual(result);
});
