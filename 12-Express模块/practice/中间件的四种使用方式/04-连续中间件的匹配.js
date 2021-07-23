/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-04 14:36:24
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-04 15:21:09
 */
const express = require('express');

const app = express();

//匹配method为get，路径为/home 的请求
app.get('/home',(req,res,next)=>{
    console.log("home1");
    next();
},(req,res,next)=>{
    console.log("home2");
    next();
},(req,res,next)=>{
    console.log("home3");
    next();
},(req,res,next)=>{
    console.log("home4");
    res.end("加载完成")
},
)

app.listen(8000,()=>{
    console.log("express初体验服务器启动成功~");
})