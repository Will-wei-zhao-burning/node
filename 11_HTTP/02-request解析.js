/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-30 15:53:15
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-30 15:54:18
 */
const http = require('http');
//创建方式一
const server = http.createServer((req,res)=>{
    res.end("Hello world!")
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
})
server.listen(8000,'localhost',()=>{
    console.log("启动成功");
})