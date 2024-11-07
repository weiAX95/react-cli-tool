// lib/create.js
const path = require('path');
const { execSync } = require('child_process');
const { log, spinner: createSpinner, writeFile, mkdir } = require('./utils');
const { getTemplates } = require('./templates');

async function create(projectName, options) {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, projectName);
  
  const spin = createSpinner('Creating project...').start();
  
  try {
    // 创建项目目录
    mkdir(targetDir);
    
    // 创建目录结构
    const dirs = [
      'src/components',
      'src/hooks',
      'src/pages',
      'src/states',
      'src/styles',
      'test',
      'docs',
      'config'
    ];
    
    dirs.forEach(dir => mkdir(path.join(targetDir, dir)));
    
    // 获取并写入所有模板文件
    const templates = getTemplates();
    Object.entries(templates).forEach(([filename, content]) => {
      writeFile(path.join(targetDir, filename), content);
    });
    
    spin.succeed('Project structure created!');
    
    // 修改 package.json 中的项目名称
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJson = require(packageJsonPath);
    packageJson.name = projectName;
    writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    
    // 安装依赖
    if (options.install) {
      const installSpin = createSpinner('Installing dependencies...').start();
      process.chdir(targetDir);
      try {
        execSync('npm install', { stdio: 'inherit' });
        installSpin.succeed('Dependencies installed!');
      } catch (error) {
        installSpin.fail('Failed to install dependencies');
        throw error;
      }
    }
    
    // 打印成功信息
    log.success(`
      Project ${projectName} created successfully!
      
      To get started:
      cd ${projectName}
      ${options.install ? '' : 'npm install'}
      npm start
    `);
    
  } catch (error) {
    spin.fail('Failed to create project');
    log.error(error);
    process.exit(1);
  }
}

module.exports = create;