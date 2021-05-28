/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-28 12:12:37
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-28 12:20:28
 */
const sharp = require('sharp');
const fs = require('fs');

sharp('./图片6.png')
.resize(200)
.toBuffer()
.then(data=>{
    fs.writeFile('文件.png', data, 'utf8', err=>console.log(err));
})