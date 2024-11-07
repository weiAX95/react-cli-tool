// lib/utils.js
const fs = require('fs-extra');
const chalk = require('chalk');
const ora = require('ora');

const log = {
  info: (msg) => console.log(chalk.blue(msg)),
  success: (msg) => console.log(chalk.green(msg)),
  error: (msg) => console.log(chalk.red(msg)),
  warn: (msg) => console.log(chalk.yellow(msg))
};

// 返回一个 ora 实例
const spinner = (msg) => ora(msg);

module.exports = {
  log,
  spinner,
  writeFile: (file, content) => {
    fs.ensureFileSync(file);
    fs.writeFileSync(file, content);
  },
  mkdir: (dir) => {
    fs.ensureDirSync(dir);
  }
};