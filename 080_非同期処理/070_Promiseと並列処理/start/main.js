function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      reject(val);
    }, val * 500);
  });
}

// 配列の中に渡された sleep の promise インスタンスがすべて完了したときに then に処理が移行する
// Promise.all([sleep(2), sleep(3), sleep(4)]).then(function(data){
//   console.log(data);
// });

// 配列の中に渡された sleep の promise インスタンスのどれか一つが完了した時点で then に処理が移行する
// Promise.race([sleep(2), sleep(3), sleep(4)]).then(function(data){
//   console.log(data);
// });

// 配列の中に渡された sleep の promise インスタンスがすべて完了したときに then に処理が移行する
// 処理が成功したか失敗したかわかりませんということになる？？
// Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(data){
//   // resolve -> status: "fulfilled"
//   // reject  -> status: "rejected"
//   console.log(data);
// });
// Promise.all だと catch に処理が移行するが、
// Promise.allSettled だと catch に処理が移行しない then に移行する
// そして status の状態を確認していく必要がある
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(data){
  console.log(data);
}).catch(function(e){
  console.error(e);
});



// sleep(0).then(function(val) {
//   return Promise.all([sleep(2), sleep(3), sleep(4)]);
// }).then(function(val) {
//   console.log(val);
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
