function genIterator(max = 10) {
    let i = 0;

    // iterator
    return {
        next: function () {
            if(i >= max) {
                return {
                    done: true
                }
            } else {
                return {
                    done: false,
                    value: i++
                }
            }
        }
    }
}

const it = genIterator(10);

let a = it.next();

// while(!a.done) {
//     console.log(a.value);
//     a = it.next();
// }

// 反復可能オブジェクトを作成する
const obj = {
    [Symbol.iterator]: genIterator.bind(null, 10)
}
for(const i of obj) {
    console.log(i);
}

// 反復可能オブジェクトにsetを渡すこともできる
const s = new Set(obj);
console.log(s);