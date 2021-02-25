new Promise(function promise(resolve) {
  console.log('promise'); // 1

  setTimeout(function task1() {
    console.log('task1'); // 3
    resolve();
  });

}).then(function job1() {
  console.log('job1'); // 4 resolveの実行を待つため
  setTimeout(function task1() {
    console.log('task2');
    queueMicrotask(function job4 () {
      console.log('job4');
    });
  });

  queueMicrotask(function job4 () {
    console.log('job4');
  });

}).then(function job2() {
  console.log('job2');
}).then(function job3() {
  console.log('job3');
})

console.log('global end'); // 2