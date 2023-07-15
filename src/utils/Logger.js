import chalk from 'chalk';
import { loggerDateFormatter } from './helpers/index.js';

export class Logger {
  static _getLogHeader() {
    const timestamp = loggerDateFormatter();
    const appInfo = chalk.green(`[App] ${process.pid}`);
    const logHeader = `${appInfo}  - ${timestamp}  `;
    return logHeader;
  }

  static log(message) {
    const logHeader = Logger._getLogHeader();
    console.log(logHeader, chalk.green(`[LOG] ${message}`));
  }

  static info(message) {
    const logHeader = Logger._getLogHeader();
    console.log(logHeader, chalk.yellow(`[INFO] ${message}`));
  }

  static error(message) {
    const logHeader = Logger._getLogHeader();
    console.error(logHeader, chalk.red(`[ERROR] ${message}`));
  }
}
