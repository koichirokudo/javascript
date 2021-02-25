// let a = (1 + 2) * 3;
let a = 0;
console.log(a);


// let b = ++a; 1,1
// let b;
// a = b = 1;

// let b = a++; 1,0
a = (b = a) + 1;
console.log(a, b);

function fn() {
    let a = 0;
    return a++;
}

console.log(!fn() * 5); // 暗黙な変換が発生して false -> 0 true ->1 に変換される
