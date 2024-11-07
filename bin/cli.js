#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const create = require('../lib/create');

async function init() {
  program
    .version('1.0.0')
    .command('create <project-name>')
    .description('create a new React project')
    .action(async (projectName) => {
      const answers = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'install',
          message: 'Install dependencies after creation?',
          default: true
        }
      ]);
      
      create(projectName, answers);
    });
    
  program.parse(process.argv);
}

init().catch((error) => {
  console.error(error);
  process.exit(1);
});