import program from 'commander';
import genDiff from '.';
import { version } from '../package.json';

export default () => program.version(version)
  .option('-f, --format [type]', 'Output format')
  .arguments('<before> <after>')
  .action((before, after) => console.log(genDiff(before, after)))
  .parse(process.argv);
