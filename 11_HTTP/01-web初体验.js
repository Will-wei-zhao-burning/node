/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-30 14:56:43
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-30 15:47:21
 */
const http = require('http');
//创建方式一
const server = http.createServer((req,res)=>{
    res.end("Hello world!")
})
//创建方式二
const serve1 = new http.Server((req,res)=>{
    res.end("Hello Will!")});

server.listen(8000,'localhost',()=>{
    console.log("启动成功");
})
serve1.listen(8001,'localhost',()=>{
    console.log("启动成功");
})