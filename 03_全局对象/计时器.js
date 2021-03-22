/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-22 14:10:52
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-22 14:15:36
 */
setTimeout(()=>{
    console.log('settimeout')
},1000);

setInterval(()=>{
    console.log('setInterval')
},1000);

setImmediate(()=>{
    console.log('Immediate')
})