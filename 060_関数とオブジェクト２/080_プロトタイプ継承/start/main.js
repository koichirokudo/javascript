function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log('hello ' + this.name);
}

function Japanese(name, age, gender) {
    Person.call(this, name, age);
    this.gender = gender;
}
// Object.create の第一引数で渡した Person を prototype に持つ
// 空のオブジェクトを作成し、__proto__ も格納したオブジェクトを代入する
/**
 * Person {}
 * __proto__: 
 *    hello: ƒ ()
 *    constructor: ƒ Person(name, age)
 *    __proto__: Object
*/
// ある関数の prototype を別の関数のプロトタイプチェーンに追加することを
// プロトタイプ継承という
Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function () {
    console.log('konnitiha ' + this.name);
}

Japanese.prototype.bye = function () {
    console.log('sayounara' + this.name);
}
const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

taro.hello();
taro.bye();