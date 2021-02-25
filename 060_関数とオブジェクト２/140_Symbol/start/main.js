const s = Symbol('hello'); // Sysmbol(hello)
const s2 = Symbol('hello');
console.log(s === s2); // false
console.log(typeof s); // symbol

const str = new String('Tom');
console.log(str);

// ES5
String.prototype[s] = function() {
    return 'hello ' + this;
}
// Symbol(hello)と同じ名前だが、異なる値を持ったプロパティになる
// String.prototype[s2] = function() {

// }


const tom = 'Tom';
console.log(tom[s]());