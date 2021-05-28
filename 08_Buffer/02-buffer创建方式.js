/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-28 11:32:23
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-28 11:45:52
 */
const buffer = new Buffer.alloc(10);
buffer[1] = 0x66;
console.log(buffer);
