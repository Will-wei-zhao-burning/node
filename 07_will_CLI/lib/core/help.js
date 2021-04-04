/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-04-04 17:13:05
 * @LastEditors: BurNing
 * @LastEditTime: 2021-04-04 17:15:45
 */

const program = require('commander');

const helpOptions = () => {
    //增加自己的options
    program.option('-d --dest <dest>', 'a des folder');
    
    //修改帮助选项
    console.log('Hi,will!');
}

module.exports={
    helpOptions
}