const targetObj = { a: 0 };

// handler
// targetObj オブジェクトを操作する際に実行されるメソッドが格納されているオブジェクト
const handler = {
  // set, get, delete はすべてトラップと呼ばれる
  // オブジェクトの変更があった際に実行されるメソッド
  // 第1引数：targetObj のオブジェクト
  // 第2引数：アクセスされたプロパティの名前
  // 第3引数：新しい値(set)
  // 第4引数：Proxy オブジェクトが渡ってくる (pxy)
  set: function (target, prop, value, receiver) {
    // 値を変更する前に何らかの処理が実行できる
    console.log(`[set]: ${prop}`);
    // target[prop] = value; // ここで初めて 0 → 1 となる
    // 値の変更をさせないとかできる
    // throw new Error('cannot add prop.');
  },
  get: function (target, prop, receiver) {
    console.log(receiver);
    // 値が見つからなかったときに独自で設定した値を返す
    if(target.hasOwnProperty(prop)){
      return target[prop];
    } else {
      return '-1';
    }
    // 値を取得が行われたときに検知する
    // console.log(`[get]: ${prop}`);
    // return target[prop];
  },
  deleteProperty: function (target, prop, receiver) {
    // 値が削除された際に検知する
    console.log(`[delete]: ${prop}`);
    return target[prop];
  }
}
// 一般的なオブジェクトをプロキシ経由で値を参照・変更することにより
// 独自の操作ができるようになる
const pxy = new Proxy(targetObj, handler)
pxy.a = 1; // [set]: a
pxy.a; // [get]: a
delete pxy.a; // [delete]: a
console.log(pxy.b);