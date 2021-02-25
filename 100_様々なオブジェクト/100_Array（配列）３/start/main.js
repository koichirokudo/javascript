const arry = [1, 2, 3, 4, 5];

// 配列内の値をひとつにまとめる
// accu に return の変数を入れて、 curr に次の値が入る
// curr にすべての値が入ってくる
const result = arry.reduce(function (accu, curr) {
    console.log(accu, curr);
    return accu + curr * 2;
},0); // 正しく計算したいときには、初期値を設定すること

console.log(result);