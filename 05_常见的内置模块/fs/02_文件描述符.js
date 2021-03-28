/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-28 14:47:20
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-28 15:18:55
 */
const fs = require('fs');

fs.open('./1.txt',(err,fd)=>{
    if(err){
        console.log(err);
        return 
    }
    console.log(fd);
})