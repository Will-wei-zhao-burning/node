/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-04-04 17:18:33
 * @LastEditors: BurNing
 * @LastEditTime: 2021-04-04 17:28:49
 */
const program = require('commander');

const {createProjectAction} = require('./action')

const createCommands = () =>{
    program
    .command('create <project>')
    .description('clone a repo into a folder')
    .action(
        createProjectAction()
    )
}

module.exports = {createCommands}