/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-04 14:36:24
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-04 14:59:42
 */
const express = require('express');

const app = express();

//匹配method为get，路径为/home 的请求
app.get('/home',(req,res,next)=>{
    res.end("home界面");
})

app.listen(8000,()=>{
    console.log("express初体验服务器启动成功~");
})