/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-04 15:27:12
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-04 15:57:54
 */
const express = require('express');
const multer = require('multer');


const app = express();
//使用multer
const upload = multer();
//解析from-data的中间件
app.use(upload.any());

app.post('/home',(req,res,next)=>{
    console.log(req.body);
    res.end("登录成功")
})
//监听8000端口
app.listen(8000,()=>{
    console.log("服务器启动成功");
})