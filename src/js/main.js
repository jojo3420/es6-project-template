// scr/js/main.js
// ES6 모듈

// eslint-disable-next-line import/named
import { pi, power, Foo } from './lib';


console.log('pi:', pi);
console.log('3의 3제곱:', power(3, 3));

const foo = new Foo();
console.log(foo.foo());
console.log(foo.bar());


// 브라우저에서 Polyfill 이 필요한 코드 : Promise()
console.log('Promise(): ', new Promise((resolve) => {
  setTimeout(() => resolve(1), 100);
}));

// polyfill 이 필요한 코드 : Object.assign()
console.log('Object.assign():', { x: 1, y: 2 });

// polyfill 이 필요한 코드 : Array.from()
console.log('Array.from(): ', Array.from([1, 2, 3], (v) => v + v));
