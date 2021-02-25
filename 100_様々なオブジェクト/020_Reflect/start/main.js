class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1,2);
console.log(obj1);
// 関数表記ができる
const obj2 = Reflect.construct(C, [1,2]); // new C(1, 2);と同じ
console.log(obj2);

console.log('a' in obj1); // ob1 に a プロパティがあるか? true
console.log('c' in obj1); // false

// in と同じ意味
// コールバック関数では 'a' in obj1 だとエラーになるから
// 以下のように関数表記にしてやる必要がある
console.log(Reflect.has(obj1, 'a')) // true 
console.log(Reflect.has(obj1, 'c')) // false

// 静的メソッド
Object.defineProperty  // エラーが発生した場合はtry catchで書く必要がある
Reflect.defineProperty // 戻り値がboolになっている　ES6以降はこちらで書くこと


const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this)
    return this._hello();
  },
}
tom.hello; // hello Tom
Reflect.get(tom, 'hello', bob); // hello bob 第３引数は bind と同じ感じで値を束縛できる