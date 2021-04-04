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

const {vueAddress} = require('../config/repo-config')

const createProjectAction = async (project) =>{
    //1.clone项目
    await download(vueAddress,project,{clone:true});
    //2.执行npm install
    //3.运行 npm run serve
    //4.打开浏览器
}

module.exports = {
    createProjectAction
}