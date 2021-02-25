// マクロタスクよりマイクロタスクが先に実行される
// 非同期処理
// マクロタスクはマイクロタスクより後に実行される
setTimeout(function task1() {
  console.log('task1');
});
// マイクロタスク
new Promise(function promise(resolve) {
  // 同期処理なので１番最初に表示される
  console.log('promise');
  resolve();
}).then(function job1() {
  // 非同期処理
  // 3番目に表示される マイクロタスクで実行されるタスクだから
  console.log('job1');
});

// 同期処理なので2番目に表示される
console.log('global end');

// マイクロタスクは順番が回ってきたらすべてのジョブを実行する
// マクロタスクは順番が回ってきたら、１つだけ実行する
