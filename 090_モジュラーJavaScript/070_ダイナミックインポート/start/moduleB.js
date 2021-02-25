// いままでのモジュール
import { publicVal, publicFn } from './moduleA.js';
publicFn();

// ダイナミックインポート（必要になったときに、非同期で呼び出せるし、高速）
// webpack bable のソフトウェアで使用可能にしてやるか、
// 対応可能なブラウザか確認すること
// import('./moduleA.js').then(function(modules) {
//     console.log(modules);
//     modules.publicFn();
// })

async function fn() {
    const modules = await import('./moduleA.js');
    modules.publicFn();
}
fn();