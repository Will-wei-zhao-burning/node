/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-28 10:17:57
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-28 10:31:46
 */
const str ="Hello!"
const buffer = new Buffer.from(str);
console.log(buffer);
const decode = buffer.toString('utf8');
const decode16 = buffer.toString('utf16le');
console.log(decode);
console.log(decode16);