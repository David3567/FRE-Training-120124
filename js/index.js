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

//   run(param) {
//     console.log(this.#name + ' is running');
//     console.log(this.#name, 'is running');
//     console.log(`${this.#name} is running`);
//   }

//   // printCompany() {
//   //   console.log(this.company);
//   // }

//   static walk() {
//     console.log('walking');
//   }
// } // "" '' ``

// class Employee extends Person {
// 	constructor(name, age, company) {
// 		super(name, age);
// 		this.company = company;
// 	}
//   run() {
//     console.log(this.company, this.name, this.age);
//   }
// }

// function Person(name, age) {
// 	let _name = name;
// 	this.age = age;

//   Object.defineProperty(this, 'name', {
//     get: function() {
//       console.log('getting #name');
//       return _name;
//     },
//     set: function(newname) {
//       _name = newname
//     }
//   })
// }

// * Prototype!!
// Person.prototype.run = function () {
// 	console.log(`${this.name} is running`);
// };

// console.log(new Person('we', 12));

// function Employee(name, age, company) {
//   // super(name, age);
//   Person.call(this, name, age);
//   this.company = company;
// }

// const e = new Employee("Jojo", 20, "Jump");

// Employee.prototype = {...Person.prototype};
// __proto__
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.__proto__ = Person.prototype;
// Employee.prototype.constructor = Employee;
// e.run();
// console.log(e);
// const rr = new Employee("Jojo", 20, "Jump");

// Person.walk = function () {
// 	console.log("walking");
// };

// const p = new Person("Jojo", 20);
// p.name = 'David';
// console.log(p.name);
// p.run();

// Person.walk();

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

//* loop

// console.log(arr['0']);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 2) {
//     break;
//   }
//   console.log(arr[i], i, arr);
// }

// @for (ele of arr) { //* of
//   <div>{{ele}}</div>;
// }

//* for obj
// const obj = {
//   name: 'Jojo',
//   age: 23
// }
// for (const key in obj) { //* in
//   console.log(key);
//   console.log(obj[key]);
// }

// Array.prototype.myForEach = function (fn) {
// 	for (let i = 0; i < this.length; i++) {
// 		fn(this[i], i, this);
// 	}
// };
// // new Array(3)

// const arr = [12, 2, 3];
// console.log(
// 	arr.forEach(function (ele, i, arrself) {
// 		// console.log(ele, i, arrself);
// 		return ele;
// 	})
// );

// //* map vs. forEach
// Array.prototype.myMap = function (fn) {
// 	const res = [];
// 	for (let i = 0; i < this.length; i++) {
// 		res.push(fn(this[i], i, this));
// 	}
// 	return res;
// };
// console.log(
// 	arr.myMap(function (ele, i, arrself) {
// 		return ele + 12;
// 	})
// );

// //* filter
// Array.prototype.myFilter = function (fn) {
// 	const res = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if (fn(this[i], i, this)) {
// 			res.push(this[i]);
// 		}
// 	}
// 	return res;
// };
// console.log(
// 	arr.myFilter(function (ele, i, arrself) {
// 		return ele < 12;
// 	})
// );

//* reduce
// const str = "abc"; // 'aabbcc';
// function ABC() {
// 	let return_str = ""; // acc
// 	for (let i = 0; i < str.length; i++) {
// 		return_str += str[i] + str[i];
// 	}
// 	return return_str;
// }
// // str.split('') // ['a', 'b', 'c'];
// const tar = str.split('').reduce(function(acc, ele, i, arrself) {
//   return acc + ele + ele;
// }, '')
// console.log(tar);

// const numbers = [175, 50, 25];
// Array.prototype.myReduce = function (fn, initacc) {

// };
// console.log(
//   numbers.reduce(function(acc, cur) {
//     console.log('for loop');
//     return acc - cur;
//   })
// ); // 

//* obj ===> arr: entries, keys, values
// const obj = {
//   name: 'tt', 
//   age: 34
// }
// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// // ^ interview question~~~~~~~~~~~~~~~
// const names = [
// 	{ userid: 2, name: "Velen" },
// 	{ userid: 56, name: "Illidan" },
// 	{ userid: 23, name: "Muradin" },
// 	{ userid: 12, name: "Sylvanas" },
// 	{ userid: 44, name: "Cenarius" },
// 	{ userid: 4, name: "Gul'Dan" },
// ];
// const roles = [
// 	{ userid: 2, role: "Mage" },
// 	{ userid: 4, role: "Worlock" },
// 	{ userid: 56, role: "Demon Hunter" },
// 	{ userid: 66, role: "Druid" },
// 	{ userid: 87, role: "Shaman" },
// 	{ userid: 12, role: "Hunter" },
// ];

// function solution(...args) {
//   const arr = args.reduce(function(acc, cur) {
//     return [...acc, ...cur];
//   }, []);

//   const map = {};
//   arr.forEach(function(ele, i) {
//     map[ele.userid] = {
//       ...{userid: null, name: null, role: null},
//       ...map[ele.userid],
//       ...ele,
//     }
//   });

//   console.log(Object.values(map));
// }
// solution(names, roles);

// [
//   { userid: 2, name: "Velen", role: "Mage" },
//   { userid: 44, name: "Cenarius", role: null },
//   { userid: 87, name: null, role: "Shaman" },
// ]

//* rest parameter vs. spread operator
//* spread operator: string, array, object, set
// const arr = [1, 2, 3];
// // const tar = [0, ...arr, 45];
// const str = 'abcc';
// // str.split('') // ['a', 'b', 'c'];
// console.log([...'abcdefg']);
// console.log([...new Set([...str])]);
// // const tar = str.split('')
// // console.log(tar);

// function foo(ele1, ele2, ...args) {
//   console.log(args);
//   // for (let i = 0; i < arguments.length; i++) {
//   //   console.log(arguments[i]);
//   // }
//   // arguments.forEach()
// }

// foo(1, 2, 3, 4, 5, 6, 7)

//* destructure

// const a = 1;
// const b = 3;
// const [a, b] = [1, 3];

// const obj = {
//   subobj: {
//     name: 'YY'
//   }, 
//   age: 33
// }
// const {subobj: {name: newName}, age} = obj;

// console.log(newName, age);

// console.log(module);

// module.exports = obj;