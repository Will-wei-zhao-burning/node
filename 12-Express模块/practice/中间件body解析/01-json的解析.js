/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-04 15:26:37
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-04 15:31:51
 */
const express = require('express');

const app = express();
//解析json的中间件
app.use(express.json());

app.post('/home',(req,res,next)=>{
    console.log(req.body);
    res.end("登录成功")
})
//监听8000端口
app.listen(8000,()=>{
    console.log("服务器启动成功");
})