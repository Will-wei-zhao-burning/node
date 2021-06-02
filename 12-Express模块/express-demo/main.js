/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-02 14:23:35
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-02 17:08:46
 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');
//创建服务器
const app = express();

app.listen(9000,()=>{
    console.log('express服务器启动成功');
})
app.use(cors())
app.post("/export",(req,res)=>{
    //原始方法
     req.on("data",(data)=>{
        const items = JSON.parse(data.toString());
        /* console.log(items); */
        items.selectData.map((item,index)=>{
            fs.writeFile(`./${item.date}-${item.writter}-${item.markNum}.txt`,JSON.stringify(item),err=>{
                if(err) throw err;
                console.log(`文件${index+1}被保存`);
            })
        })
    })
    console.log("ww")
    res.end("Heelo");
})