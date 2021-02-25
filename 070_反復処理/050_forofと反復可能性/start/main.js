const arry = ['a', 'b', 'c'];

arry[4] = 'e';

Object.prototype.method = function(){}

Object.defineProperty(arry, 0, {
    enumerable: false
})

const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);
// 設定されていない値も undefined で出力される
// for of の場合は enumerable を false にしても出力される
// for of はオブジェクトに格納されるイテレータの挙動に依存する
for (let v of arry) {
    console.log(v);
}