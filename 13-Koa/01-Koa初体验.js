/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-06-05 16:26:09
 * @LastEditors: BurNing
 * @LastEditTime: 2021-06-05 16:40:37
 */
const Koa  = require('koa');

const app = new Koa();

app.use((ctx,next)=>{
    ctx.response.body = "Hllo World!";
})

app.listen(8000,()=>{
    console.log("Koa服务器启动成功");
})