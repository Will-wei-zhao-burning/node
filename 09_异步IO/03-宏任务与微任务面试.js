/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-05-28 21:11:18
 * @LastEditors: BurNing
 * @LastEditTime: 2021-05-28 21:21:39
 */
setTimeout(function () {
    console.log("set1");
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      new Promise(function (resolve) {
        resolve();
      }).then(function () {
        console.log("then4");
      });
      console.log("then2");
    });
  });
  
  new Promise(function (resolve) {
    console.log("pr1");
    resolve();
  }).then(function () {
    console.log("then1");
  });
  
  setTimeout(function () {
    console.log("set2");
  });
  
  console.log(2);
  
  queueMicrotask(() => {
    console.log("queueMicrotask1")
  });
  
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    console.log("then3");
  });