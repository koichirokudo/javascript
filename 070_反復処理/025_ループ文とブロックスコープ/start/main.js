// ブロックスコープ外で宣言されたものは、同じ変数を使う（変わらない）
// なのでsetTimeout実行後（1秒後）に j の値はすべてのループが完了した
// ときの j の値になる
var j; // let j; 
for(let i = 0; i < 5; i++){
    // loop ごとにスコープが切り替わるため、const でもエラーにならない
    // 各ループごとに、異なる変数のjとなる 0, 2, 4, 6, 8
    j = i * 2;
    setTimeout(function(){
        console.log(j);
    }, 1000);
}