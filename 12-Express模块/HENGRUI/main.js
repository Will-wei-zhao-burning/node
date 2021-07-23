/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-02 14:23:35
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-15 19:34:01
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
            fs.writeFile(`./export/${item.date}-${item.writter}-${item.markNum}-${Date.now()}.txt`,JSON.stringify(item),{flag:''},err=>{
                if(err) throw err;
                console.log(`文件${index+1}被保存`);
            })
        })
    })
    console.log("ww")
    res.end("Heelo");
})

app.get("/main",(req,res)=>{
    //原始方法
    /*  req.on("data",(data)=>{
        const items = JSON.parse(data.toString());
        
        items.selectData.map((item,index)=>{
            fs.writeFile(`./export/${item.date}-${item.writter}-${item.markNum}-${Date.now()}.txt`,JSON.stringify(item),{flag:''},err=>{
                if(err) throw err;
                console.log(`文件${index+1}被保存`);
            })
        })
    }) */
    const read = fs.createReadStream("./logItems.json",{
    });
    read.on("data",date=>{
        const data = JSON.parse(date.toString().trim());
        res.json({data:data});
        //console.log(JSON.parse(date.toString().trim()));
    })
    
})

app.post("/main",(req,res)=>{
    req.on("data",(data)=>{
        const logitems = JSON.parse(data.toString()).logItems;
        fs.writeFile("./logItems.json",JSON.stringify(logitems),{flag:''},err=>{
            if(err){
                console.log(err);
            }
        })
    })
    res.end("Heelo");
})
