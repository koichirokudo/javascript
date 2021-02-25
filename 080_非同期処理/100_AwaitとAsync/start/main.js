function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}
// async は関数コンテキストのみで実行ができる（グローバルコンテキストでは実行できない）
async function init() {
  let val = await sleep(0); // resolveが呼ばれるまで実行されず、resolveで渡された引数が変数に代入される val = 1
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  throw new Error();
  return val;
}

// init(); // promise が返却される

// thenの引数として、valが渡ってくる
init().then(function(val) {
  console.log('hello ' + val);
}).catch(function(e){
  console.error(e);
})
// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
