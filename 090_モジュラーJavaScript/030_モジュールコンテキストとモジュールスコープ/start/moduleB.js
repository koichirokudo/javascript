import './moduleA.js'; // 単に moduleAを実行したい場合は、 from の記載は不要らしい
// モジュールコンテキスト
console.log(this); // undefined

function fn() {
    console.log(this);
}
fn(); // undefined

const obj = {
    fn
}
obj.fn(); // オブジェクトが取得できる


// グローバルオブジェクトも取得できる
console.log(window.d);