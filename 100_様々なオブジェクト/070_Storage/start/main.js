const obj = {a:0};
const json = JSON.stringify(obj);
localStorage.setItem('key', json);

// 同期的な処理となる
// 使用できるメソッドの名前を忘れたら ConsoleからlocalStorageの__proto__を見るとヒントがある
const result = localStorage.getItem('key');
const obj2 = JSON.parse(result);
console.log(obj2);
console.log('end');