/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-28 16:52:13
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-28 17:16:37
 */
const Events = require('events');

const event1 = new Events();

const listener1 = function(){
    console.log('fashe事件被调用',arguments)
}

event1.on('fashe',listener1);

event1.emit('fashe','will','by')