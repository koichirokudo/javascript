function Person1(name, age) {
    this.name = name;
    this.age = age;
}

Person1.hello = function () {
    console.log('static:hello');
}
Person1.hello();

Object.defineProperty(Person1.prototype, 'name', {
    // getter
    get: function () {
        console.log('hello');
        return this._name;
    },
    // setter
    set: function (val) {
        this._name = val;
    }
});

const p1 = new Person1('Bob', 23);

// console.log(p1.name);
// p1.name = 'Tom';
// console.log(p1.name);

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // getter
    get name() {
        console.log('hello');
        return this._name;
    }
    // setter
    set name(val) {
        this._name = val;
    }
    // static クラス内で使用できる静的メソッド
    static hello() {
        console.log('static:hello');
    }
}

Person2.hello(); // インスタンス化をしていないため this は使用不可

const p2 = new Person2('Bob', 23);