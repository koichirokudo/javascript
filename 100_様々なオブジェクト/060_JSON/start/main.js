const obj = {a: 0, b: 1, c: 2};
function replacer(prop, value) {
    if(value < 1) {
        return;
    }
    return value;
}
// Object → JSON
// const json = JSON.stringify(obj, replacer); // 不要なプロパティを排除してjsonにする
const json = JSON.stringify(obj, ["a", "b"]); // これでもできる
console.log(json);

// JSON → Object
const obj2 = JSON.parse(json);
console.log(obj2);