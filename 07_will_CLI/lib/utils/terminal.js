/* 执行终端命令 封装*/

const { spawn } = require('child_process')


const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args);
        //输出流
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on("close", () => {
            resolve();
        })
    })
}

module.exports = {
    commandSpawn
}