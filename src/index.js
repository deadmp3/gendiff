import fs from 'fs';
import _ from 'lodash';

export default (before, after) => {
  const objBefore = JSON.parse(fs.readFileSync(before, 'utf8'));
  const objAfter = JSON.parse(fs.readFileSync(after, 'utf8'));
  return [...Object.keys(objBefore), ...Object.keys(objAfter)].map((el) => objAfter)
};
