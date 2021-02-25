'use strict'; // エラーとならないところをエラーとする
// const obj = {prop: 0}; // オブジェクトリテラルだと初期値が true
const obj = {}

// Object.defineProperty(obj, 'prop', { // definePropertyだと初期値が false
//     value: 0,
//     writable: true
// })

Object.defineProperty(obj, 'prop', { // definePropertyだと初期値が false
    enumerable: true
})
delete obj.prop; // Cannot delete property 'prop' of #<Object>

// obj.prop = 1;
console.log(obj.prop);
// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

// console.log(descriptor);