const s = Symbol();
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]: 'value4' // 変数をプロパティの値として使用できる
}

Object.prototype.method = function () {

}

// Object.defineProperty(Object.prototype, 'method', {
// 	enumerable: false // true だと for in で出力される
// });

// // prop1 を列挙しない（出力しない）
// Object.defineProperty(obj, 'prop1', {
// 	// enumerable: false // true だと for in で出力される
// });
// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
const e = Object.getOwnPropertyDescriptor(obj, s);

console.log(e);

// for in の中では、 enumerable は false となり method は出力されない
for (let key in obj) {
	// definePropertyでenumerableを設定しない場合は以下のようにすると
	// 列挙対象から外れる
	// if(obj.hasOwnProperty(key)){
		console.log(key, obj[key]); // prop1 value1 ...
	// }
}
