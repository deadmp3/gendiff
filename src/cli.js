import program from 'commander';
import { version } from '../package.json';

export default () => program.version(version)
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
