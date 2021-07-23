/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-04 15:27:12
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-04 15:46:33
 */
const express = require('express');

const app = express();
//解析urlencoded的中间件
app.use(express.urlencoded({extended: true}));

app.post('/home',(req,res,next)=>{
    console.log(req.body);
    res.end("登录成功")
})
//监听8000端口
app.listen(8000,()=>{
    console.log("服务器启动成功");
})