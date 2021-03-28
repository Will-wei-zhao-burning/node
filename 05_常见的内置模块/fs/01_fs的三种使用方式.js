/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-28 14:31:27
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-28 14:46:59
 */

const fs = require('fs');
const filepath = './1.txt'
//同步，会阻塞
const info = fs.statSync(filepath);
console.log(info);
console.log('后续执行的代码！');


//异步
fs.stat(filepath,(err,info)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(info);
})
console.log('后续执行的代码！');

//Promise的方式
fs.promises.stat(filepath).then(info=>{
    console.log(info);
}).catch(err=>{
    console.log(err);
})
console.log('后续执行的代码！');