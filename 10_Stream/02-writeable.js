/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-29 22:16:10
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-29 22:45:54
 */
const fs = require('fs');

/* fs.readFile('./foo.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        fs.writeFile('./fow.txt',data,(err)=>{
            console.log(err);
        })
    }
}) */

const writer = fs.createWriteStream('./foo.txt',{
    flags:'r+',
    start:4
});

writer.write('你好啊',err=>{
    console.log(err);
})

//pipe的使用
const reader = fs.createReadStream('./foo.txt');
const writercopy = fs.createWriteStream('./foz.txt');
reader.pipe(writercopy);