// const a = new String('hello');
// 一般的には以下のようにかく、これでもオブジェクトは実行される
// 暗黙的にラッパーオブジェクト new String('hello');が呼び出されるようになっている
const a = 'hello'.toUpperCase(); //  こうやって呼び出すこともできる
console.log(a); // HELLO

// const b = new Number(100);
const b = 100;
console.log(b.toExponential()); // Primitive Valueに100が格納されている
// 1e+2 10の2乗 = 100