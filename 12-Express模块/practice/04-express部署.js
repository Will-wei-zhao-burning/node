/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-04 16:01:41
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-05 15:19:44
 */
const express = require('express');

const userRouter = express.Router();

const app =express();

app.use(express.static('./dist'));

app.listen(8000,()=>{
    console.log("服务器启动成功！")
})