/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-29 21:59:33
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-29 22:18:51
 */
const fs = require('fs');
/* 原始的方法 
缺点:1.一次性读取，当文件很大时会很耗时；
     2.只想读取部分数据；
     3.指定读取开始结束的位置； 
 */
fs.readFile('./foo.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
/* 
Steam流式读取
createReadStream
*/
const read = fs.createReadStream("./foo.txt",{
    start:3,
    end:6,
    highWaterMark:2
});

read.on("data",data=>{
    read.pause();
    console.log(data.toString())
    setTimeout(()=>{
        read.resume();
    },2000)
})