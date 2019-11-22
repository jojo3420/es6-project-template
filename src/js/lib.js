// src/js/lib.js
// ES6 모듈
export const pi = Math.PI;

/* ES7: 지수 연산자: ** */
export const power = (x, y) =>  x ** y;

// ES6 클래스
export class Foo {
    // stage 3: 클래스 필드 정의 제안
    #privateNum = 10;

    foo() {
        // stage 4: 객체 Rest/Spread 프로퍼티
        const {a, b, ...x} = { ...{a: 1, b: 2}, c: 3, d: 4};
        return {a, b, x};
    }
    bar() {
        return this.#privateNum;
    }

}








