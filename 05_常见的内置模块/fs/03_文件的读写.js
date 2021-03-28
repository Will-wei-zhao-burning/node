const fs = require('fs');

/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-28 15:16:21
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-28 15:18:36
 */
fs.readFile('./1.txt',{encoding:'utf-8'},(err,data)=>{
    console.log(data);
})