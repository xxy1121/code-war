const fs = require("fs-extra");
const shell = require("shelljs");
const chalk = require('chalk');
const SHA256 = require("crypto-js/sha256");
const log = console.log;
const userList = require('../config/user-list.json')
// 把开发者写入user-list.json
function writeUser(data) {
  return new Promise((resolve, reject) => {
    if (userList.some(i=>i._id===data._id)) {
      resolve()
    }else{
      userList.push(data)
      fs.outputJSON(`./config/user-list.json`, userList, {spaces: 2}, err => {
        if(err) {
          reject()
        }else{
          resolve()
        }
      })
    }
  })
}
function createDir(cb) {
  let username = shell.exec('git config user.name').stdout.replace('\n', '')
  let email = shell.exec('git config user.email').stdout.replace('\n', '')
  let nickname = process.argv[3] && process.argv[3].split("--")[1]
  if (!username) {
    log(chalk.red('git user.name is null!!'))
    cb()
  } else 
  if (!email) {
    log(chalk.red('git user.email is null!!'))
    cb()
  }
  if (!nickname) {
    log(chalk.red('nickname is null!!'))
    cb()
  }
  else {
    let userData = {
      "_id": SHA256(`${username}${email}`).toString().slice(0, 12),
      "name": username,
      "active": true,
      "email": email,
      "nickname": nickname,
      "clean": false
    }
    writeUser(userData).then(res => {
      // 写入成功
      fs.mkdir(`./answer/${username}`, err => {
        if (err) {
          log(chalk.red('file already exists！！'))
        }else{
          log(chalk.green('Directory created！！'))
        }
      })
    }).catch(err => {
      // 写入失败
      log(chalk.red('Directory creation failed！！'))
    })
    cb();
  }
}
// 生成开发目录
exports.createDir = createDir;
