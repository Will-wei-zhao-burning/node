/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-04-04 17:25:02
 * @LastEditors: BurNing
 * @LastEditTime: 2021-04-04 17:26:35
 */
//node自带模块
const { promisify} = require('util');

//第三方库download git repo下载代码wi
const download = promisify(require('download-git-repo'));
const open = require('open');

const {vueAddress} = require('../config/repo-config')
const {commandSpawn} = require('../utils/terminal')

const createProjectAction = async (project) =>{
    
    //1.clone项目
    await download(vueAddress,project,{clone:true});
    console.log('burning help!')
    //2.执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command,['install'],{cwd:`./${project}`})
    console.log('burning help you!')
    //3.运行 npm run serve
    commandSpawn(command,['run','serve'],{cwd:`./${project}`})
    //4.打开浏览器
    open('http://localihost:8080/')
}

module.exports = {
    createProjectAction
}