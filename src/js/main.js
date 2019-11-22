// scr/js/main.js
// ES6 모듈
import {pi, power, Foo} from './lib';

console.log('pi:', pi);
console.log('3의 3제곱:', power(3, 3));

const foo = new Foo();
console.log(foo.foo());
console.log(foo.bar());
