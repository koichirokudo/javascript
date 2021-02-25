class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = new Person('Bob', 23);
console.log(bob); // Object
// 実質同じ意味。クラスはあくまでもコンスタクタがクラス表記でかけるようにした
// ものです！ ES6 以降はクラス表記で書くことだが以下の仕組みで成り立っているため
// 理解することは重要です！

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function () {
//     console.log('hello ' + this.name);
// }