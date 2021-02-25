const arry = [1, 2, 3, 4, 5];

// コールバック関数を渡すことで一つずつの要素に処理を行うことができる
arry.forEach(function(v, i, arry){
    console.log(v); // 要素を出力
});

// 配列の要素の値をもとに、新しい配列を生成する
const newArry = arry.map(function(v, i, arry){
    return v * 2;
});
console.log(arry, newArry);

// return に続く値が true なら新しい配列に追加、false は追加されない
const filterArry = arry.filter(function(v, i, arry) {
    return i > 1;
});
console.log(filterArry);