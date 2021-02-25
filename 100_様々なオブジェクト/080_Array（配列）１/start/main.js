const arry = [1, 2, 3, 4, 5];
arry.push(6); // 配列末尾に値を追加
console.log(arry);

const result = arry.pop(); // 配列末尾の値を取り出す
console.log(arry, result);

const result1 = arry.shift() // 配列先頭の値を取り出す 
console.log(arry, result1);

const result2 = arry.unshift(0) // 配列先頭に値を追加する
console.log(arry, result2); // 配列の追加された長さが戻ってくる

// 第3引数から、切り取られた値の位置に代入（置き換え）ができる
const result3 = arry.splice(0, 3, 1, 2, 3); // 指定した長さの配列を切り出す
console.log(arry, result3);

// arry2 に arry と 6, 7, 8が結合された新しい配列が生成される
const arry2 = arry.concat([6, 7, 8]);
console.log(arry2);

// スプレッド演算子を用いた配列結合
// 前方にも後方にも結合できるので、これを使ったほうがいい
const arry3 = [0, ...arry, 6, 7, 8];
console.log(arry3);