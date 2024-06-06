#!/user/bin/env node

const { execSync } = require("child_process");
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: `inherit` });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitProjectLink = "https://github.com/alideel/testing.git";
const gitCheckoutCommand = `git clone --depth 1 ${gitProjectLink} ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`get the main project as package : ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("very good, you can start now ");
console.log(`cd ${repoName} && npm start`);
