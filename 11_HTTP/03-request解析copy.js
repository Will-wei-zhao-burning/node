/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-30 15:53:15
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-30 17:09:50
 */
const http = require('http');
const qs = require('querystring');
//创建方式一
const server = http.createServer((req,res)=>{
    const url = new URL(req.url,'https://example.org/');
    if(url.pathname=="/login"){
        //获取query
        console.log(url.search);
        console.log(qs.parse(url.search.substr(1)));
        res.end("成功");
    }
})
server.listen(8000,'localhost',()=>{
    console.log("启动成功");
})