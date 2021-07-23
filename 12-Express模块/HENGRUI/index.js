/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-15 19:33:36
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-15 19:33:37
 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');
//创建服务器
const app = express();

app.listen(8020,()=>{
    console.log('express服务器启动成功');
})
app.use("",express)
app.use(cors())