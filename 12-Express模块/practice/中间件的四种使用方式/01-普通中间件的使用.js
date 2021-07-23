/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-04 14:14:45
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-04 14:34:10
 */
const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("注册第01个普通中间件");
    next();
})

app.use((req,res,next)=>{
    console.log("注册第02个普通中间件");
    next();
})

app.use((req,res,next)=>{
    console.log("注册第03个普通中间件");
    res.end("end")
})


//开启监听
app.listen(8000,()=>{
    console.log("服务器启动成功")
})