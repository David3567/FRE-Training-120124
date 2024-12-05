console.clear();
/**
 * @class
 * what is javascript, ECMAScript
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data
 * Object Data or reference Data
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 *
 * @class
 * loop in JS: array, object
 * MyForeach, MyMap, MyFilter, MyReduce
 *
 * destructure
 *
 * rest parameter vs. spread operator
 *
 * object copy
 *
 * @class
 * iife
 * closure
 * currying
 *
 * this
 * call, apply, bind
 *
 * arrow function
 *
 * event loop
 *
 * @class
 * XHR
 * callback function; callback hell
 * Promise
 * MyPromise
 * MyFetch
 *
 * @class
 * todolist:
 *   MVC
 *   NodeList vs. HTMLCollection
 *   Event bubbling
 *
 * @class
 * JQuery
 */

// what is javascript, ECMAScript
// javascript vs. nodejs vs. ECMAScript ES6
//
// Primitive Data
// Object Data or reference Data
//
// coercion
// equality == vs. ===
//
// var vs. let vs. const
//
// oop: Object oriented programming in JS
// encapsulation; inheritance; Poly-morph-ism; abstraction;
// constructer function, prototype chain
//* Primitive Data
//* var vs. let vs. const

// number, string, boolean, undefined,
// var num = 4;
// // var num = '4';
// console.log(typeof num); //

// var val = num;

//* referance data, object
// var obj = {
//   name: 'Dio',
// };
// var arr = [1, 2, 3];
// var objcopy = obj;

// function foo(num) {
//   num = 6;
// }
// foo(num);
// console.log(num);

// function bar(obj) {
//   obj[0] = 'Jojo';
// }
// bar(arr);
// console.log(arr);

//* copy object, clone object;
// shallow vs. deep clone
// ... spread operator vs. rest parameter;

// var obj = {
//   name: 'David',
//   arr: [1, 2, 3],
//   // date: new Date(),
//   // foo: function() {}
// };

// var obj1 = obj;
// var obj2 = {...obj};

// obj2.name = 'Jojo';
// obj2.arr[1] = 'Dio';
// console.log(obj);

// // JSON
// console.log(obj);
// var mark = JSON.stringify(obj);
// console.log(mark);
// var mark1 = mark;
// console.log(JSON.parse(mark1));

// // structuredClone
// var mark2 = structuredClone(obj);
// console.log(mark2);

// 3rd library;

// * coercion

// var v = 'test' * '1'; // 'test1'
// console.log(typeof v);  // {value: NaN, type: number}
// console.log(true + false); // true && false
// console.log(100 - '12' + '12'); //

// 0, '', undefined, null, ' ', false, NaN
// var arr = [1, 'test', true, 0, {}, undefined, null];
// for (let i = 0; i < arr.length; i++) {
//   if (!!arr[i]) {
//     console.log(arr[i]);
//   }
// }

// var v = {}; // !!, ??

// if (!2) {
//   console.log('hello');
// }
// console.log(typeof !!2);

// == vs. ===
// console.log(1 == '1');
// console.log(null == undefined);
// console.log(NaN == NaN);
// console.log(true == 1);

//* var vs. let vs. const (ES6: let and const)
//         scope      hoisting    reassign
// var     function   y           y
// let     block      n           y
// const   block      n           n
// function ?         ?           n

// console.log(v); // undefined
// const v = [90];
// v[0] = 4567;
// if (true) {
//   console.log(v);
// }
// for, while, if, block

// function(require, export, module, __filename, __dirName) {

// }

// const arr = [];
// const obj = {};

// const link = 'https://www.google.com';
// a = 564;

// foo();

// if (true) {
//   function foo() {
//     console.log( 33);
//   }
// }

// * class in js (ES6)
// oop

// class Person {
//   #name = 'TT';
//   age = 56;

//   get name() {
//     console.log('getting #name');
//     return this.#name;
//   }
//   set name(newname) {

//     console.log('setting #name'); // rerender page;
//     this.#name = newname;
//   }

// constructor(name, age) {
//   this.#name = name;
//   this.age = age;
// }

//   constructor() {}

//   run(param) {
//     console.log(this.#name + ' is running');
//     console.log(this.#name, 'is running');
//     console.log(`${this.#name} is running`);
//   }

//   static walk() {
//     console.log('walking');
//   }
// } // "" '' ``

function Person(name, age) {
	let _name = name;
	let _age = age;

  Object.defineProperty(this, 'name', {
    get: function() {
      console.log('getting #name');
      return _name;
    }, 
    set: function(newname) {
      _name = newname
    }
  })
}

function foo() {}

Person.prototype.run = function () {
	console.log(`${this.name} is running`);
};

Person.walk = function () {
	console.log("walking");
};

const p = new Person("Jojo", 20);
p.name = 'David';
console.log(p.name);
p.run();

Person.walk();
// Promise.all()

// const e = new Person("Jojo", 20);
// console.log(e);

// * mutable vs. immutable
// let obj = {
//   name: 'TT',
//   age: 234
// }

// obj = {
//   ...obj,
//   name: 'DD'
// }

// obj.name = 'DD';

// Array.prototype.myForEach = function() {
//   console.log('this is myForEach!');
// }
