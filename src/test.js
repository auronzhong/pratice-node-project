'use strict';

/**
 * pracice Node.js project
 *
 *@author auronzhong <auronzhong@gmail.com>
 */



// $.method('user.add').call({
//   name: 'hello2',
//   email: 'xxxxx2@qq.com',
//   password: '123456',
//   nickname: '测试1',
//   about: '好厉害啊',
// }, console.log);


// $.method('user.get').call({
//   name: 'hello2',
// }, console.log);


$.method('user.update').call({
  name: 'hello2',
  nickname: '我是测试1',
}, console.log);
