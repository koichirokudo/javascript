function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
const result = bob.hasOwnProperty('name');
console.log(result);

// bob のプロパティまたはそのオブジェクトが保持している
// __proto__ にプロパティまたはメソッドが格納されているか確認できる
// プロトタイプチェーンも含めて確認ができる
console.log('name' in bob); // true
console.log('hasOwnProperty' in bob); // true
console.log('bye' in bob); // false
