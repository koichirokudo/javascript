import defaultVal, {publicVal as val, publicFn as fn} from './moduleA.js';
console.log(val);
fn();

// export は {} をつける
// export default は {} なし