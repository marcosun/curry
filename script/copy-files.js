/* eslint-disable */
import path from 'path';
import fse from 'fs-extra';

const ENV = process.env.NODE_ENV;

async function copyFile(file) {
  let buildPath;

  if (ENV === 'production') {
    buildPath = path.resolve(__dirname, '../build/', path.basename(file));
  } else {
    buildPath = path.resolve(__dirname, '../demo/node_modules/js-component-seed/', path.basename(file));
  }
  
  console.log(`Copying ${file} to ${buildPath}`);

  try {
    await fse.copy(file, buildPath);
    console.log(`${file} OK!`);
  } catch(e) {
    console.error(`${file} FAILED!!!`);
  }
}

async function run() {
  await ['README.md', 'LICENSE', 'package.json'].map(file => copyFile(file));
}

run();
