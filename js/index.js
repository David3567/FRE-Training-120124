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

function Employee(name, age, company) {
	// super(name, age);
	// Person.call(this, name, age);
	Person.apply(this, [name, age]);
	this.company = company;
}

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
	// [1, 2].filter((ele, i, arrself) => {
	// 	return ele < 12;
	// })
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

// * this --> obj, function

// const obj = {
// 	name: "Dio",
// 	age: 200,

// 	foo: function () {
//     "use strict";
// 		console.log("foo: ", this); // <------

// 		const bar = function () {
// 			console.log("bar: ", this);
// 		}

// 		// (function () {
// 		// 	console.log("bar: ", this);
// 		// }).call(this);

// 		// (function () {
// 		// 	console.log("bar: ", this);
// 		// }).apply(this);

// 		// const bar = () => {
// 		// 	console.log("bar: ", this); // <------
// 		// };
// 		bar();
// 	},
// };
// obj.foo();

// class Person {
//   name;

//   foo() {
//     console.log(this.name);
//   }
// }
// * call, apply, bind
// const obj = {
//     pi: 3.14159265,
//     getPi() {
//         return this.pi;
//     }
// }
// function printPi(num1, num2) { // 100 args
//   console.log('from print: ', this.pi, num1, num2);
// }
// printPi(12, 45);
// printPi.call(obj, 12, 45); // 1 + 100 args = 101
// printPi.apply(obj, [12, 45]); // 1 + 1 args = 2 + [100]

// const printPiBindObj = printPi.bind(obj);
// printPiBindObj(12, 24);

// console.log('this: ', this);

// function bar() {
//   console.log('global: ', this);
// }
// bar();

// * arrow function
// const bar = () => {};

// * iife
// (function () {
//   console.log('foo');
// })(); // ())

// (() => {
//   console.log('bar');
// })();

// * closure
// const sum = (a, b) => a + b;
// const cb = (a, b, c, d) => a * b + c - d;

// const fn = limitedFunction(3, sum); // n = 3

// fn(3, 4) // 7 // n = 2
// fn(3, 9) // 12 // n = 1
// fn(36, 4) // 40 // n = 0
// fn(6, 4) // 10
// fn(3, 4) // 7
// fn(3, 4) // 7
// fn(3, 4) // over limited!
// fn(3, 4) // over limited!

// const fncopy = limitedFunction(7, cb); // n = 7
// fncopy(3, 4, 5, 6); // 11 // 6
// fncopy(3, 4, 5, 6); // 11
// fncopy(3, 4, 5, 6); // 11
// fncopy(3, 4, 5, 6); // 11
// fncopy(3, 4, 5, 6); // 11
// fncopy(3, 4, 5, 6); // 11
// fncopy(3, 4, 5, 6); // 11
// fncopy(3, 4, 5, 6); // 11

// function limitedFunction(num, callback) {
//   let n = num;

//   return function(...args) { // rest parameter
//     if (n > 0) {
//       console.log(callback(...args)); // spread operators
//       n--;
//     } else {
//       console.log('over limited!');
//     }
//   }
// }

// * high order function;

// * currying
// const callback1 = (a) => a + 2; // 7
// const callback2 = (b) => b * 2; // 14
// const callback3 = (c) => c + 2; // 12

// console.log( runAll(callback1, callback2, callback3)(5) ); // 12

// function runAll(...callbacks) {

//   return function(init) {
//     // let num = init;

//     // while (callbacks.length) {
//     //   const fn = callbacks.shift(); // push: [1, 2, 3] <---- pop: [1, 2] ----> shift: <---- [2, 3] unshift: ---> [1, 2, 3]
//     //   num = fn(num);
//     // }

//     // return num;
//     return callbacks.reduce((acc, fn) => fn(acc), init);
//   }
// }

// function foo(n) {
//   return function(m) {
//     return n + m;
//   }
// }
// const bar = foo(4);
// console.log(bar(5)); // 9

// * event loop
// console.log(module.exports {})

// for (var i = 0; i < 5; i++) {
//   (function(v) {
//     setTimeout(() => console.log(v), (9 - v) * 1000);
//   })(i);
// } // 0, 1, 2, 3, 4

// call stack: [() => console.log(v)] v = 0

// async api: () => console.log(v) 5s v = 0
// () => console.log(i) 4s v =  1
// () => console.log(i) 3s v = 2
//() => console.log(i) 2
//() => console.log(i) 1

// task queue: [
//  () => console.log(v) 0, v = 0
// () => console.log(i) 1s
//() => console.log(i)
//() => console.log(i)
//() => console.log(i)
//]

// * XHR
// function getUser(id, callback) {
// 	const baseUrl = "https://jsonplaceholder.typicode.com";
// 	const userUrl = "users";

// 	const xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// Typical action to be performed when the document is ready:
// 			callback(JSON.parse(xhttp.responseText));
// 		}
// 	};
// 	xhttp.open("GET", [baseUrl, userUrl, id].join("/"), true); //``
// 	xhttp.send();
// }

// function print(ele) {
//   console.log(ele);
// }

// // 6, 2, 7, 1, 3, 4....
// getUser(6, (ele) => {
// 	print(ele);
// 	getUser(2, (ele2) => {
// 		print(ele2);
// 		getUser(7, (ele7) => {
// 			print(ele7);
// 		});
// 	});
// });
// getUser(6, print);
// getUser(2, print);
// getUser(7, print);

function getUser(id) {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const userUrl = "users";

	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				// Typical action to be performed when the document is ready:
				resolve(JSON.parse(xhttp.responseText));
			}
		};
		xhttp.open("GET", [baseUrl, userUrl, id].join("/"), true); //``
		xhttp.send();
	});
}
function print(ele) {
	console.log(ele);
}
// getUser(6)
// 	.then((ele) => {
// 		print(ele);
// 		return getUser(2);
// 	})
// 	.then((ele) => {
// 		print(ele);
// 		return getUser(7);
// 	})
// 	.then((ele) => {
// 		print(ele);
// 	});

// Promise.all([getUser(6), getUser(2), getUser(7)]).then(console.log); // 6s

// * async await;

// (async () => {
//   const ele6 = await getUser(6); // 5s
//   print(ele6);
//   const ele2 = await getUser(2);  // 4s
//   print(ele2);
//   const ele7 = await getUser(7); // 6s
//   print(ele7);
// })(); // 15s

// * callback function; callback hell
// const foo = () => console.log('foo');
// const randomNumber = () => Math.floor((Math.random() * 6));

// const callFnInRandomTime = (callback) => {
//     const timer = randomNumber();
//     console.log(`${timer}s`);

//     setTimeout(callback, timer * 1000);
// }

// callFnInRandomTime(() => {
//   callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//       callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//           callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//               callFnInRandomTime(() => {
//                 callFnInRandomTime(() => {
//                   callFnInRandomTime(() => {
//                     callFnInRandomTime(() => {
//                       foo();
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// * Promise (ES6)

// * MyPromise
// class MyPromise {
// 	thenqueue = [];
// 	catchqueue = [];

// 	constructor(executor) {
// 		try {
// 			executor(this.resolve.bind(this), this.reject); // run executor
// 		} catch (error) {
// 			this.reject("error heppends");
// 		}
// 	}

// 	resolve(resEle) {
// 		try {
// 			let init = resEle;
// 			// console.log("hello resolve", resEle, this);

// 			setTimeout(() => {
// 				// console.log('then queue: ', this.thenqueue);

// 				while (this.thenqueue.length) {
// 					const fn = this.thenqueue.shift();
// 					init = fn(init);
// 				}
// 			}, 0);
// 		} catch (error) {
// 			this.catch();
// 		}
// 	}

// 	reject = () => {
// 		console.log("hello reject", this);
// 	};

// 	then(thenfn) {
// 		this.thenqueue.push(thenfn);
// 		return this;
// 	}

// 	static resolve(resData) {
// 		return new MyPromise((res, rej) => {
// 			res(resData);
// 		});
// 	}
// 	static reject(rejData) {
// 		return new MyPromise((res, rej) => {
// 			rej(rejData);
// 		});
// 	}

// 	static all(promiseArr) {
// 		return new MyPromise((res, rej) => {
// 			const ln = promiseArr.length;
// 			const resArr = new Array(ln);
//       let counter = 0;

// 			promiseArr.forEach((p, i) => {
//         if (p instanceof MyPromise) {
//           p.then((ele) => {
//             resArr[i] = ele;
//             counter++;
//             if (counter === ln) {
//               res(resArr);
//             }
//           });
//         } else {
//           resArr[i] = p;
//           counter++;
//           if (counter === ln) {
//             res(resArr);
//           }
//         }
// 			});
// 		});
// 	}
// }

// const promise1 = MyPromise.resolve(13);
// const promise2 = 34;
// // const promise2 = MyPromise.resolve(42);
// // const promise3 = MyPromise.resolve(512);
// // Math.max()
// const promise3 = new MyPromise((resolve, reject) => {
// 	setTimeout(() => resolve("foo"), 100);
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });

// [3, 42, "foo"]

// console.log("hello before");

// const promise = new Promise((resolve, reject) => {
// 	// console.log("hello Promise!");
// 	if (true) {
// 		resolve(3);
// 	} else {
// 		reject(6);
// 	}
// })
// 	.then((ele) => {
// 		console.log(ele);
// 		throw new Error("error!");
// 		return ele + 1;
// 	})
// 	.then((ele) => {
// 		console.log(ele);
// 		return ele + 2;
// 	})
// 	.then((ele) => {
// 		console.log(ele);
// 		return ele + 3;
// 	})
// 	.then((ele) => {
// 		console.log(ele);
// 		return ele + 4;
// 	})
// 	.then((ele) => {
// 		console.log(ele);
// 		return ele + 5;
// 	})
// 	.catch((ele) => {
// 		console.log(ele);
// 	});

// console.log("hello after");

// .then((ele) => {
//   console.log(ele);
// });

// * MyFetch

function myFetch(url, options) {
	let method = options && options.method ? options.method : "GET";

	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.open(method, url, true); //``

		if (options && options.headers) {
			Object.entries(options.headers).forEach(([key, val]) => {
				xhttp.setRequestHeader(key, val);
			});
		}

		xhttp.onreadystatechange = function () {
			if (
				this.readyState == 4 &&
				this.status >= 200 &&
				this.status < 300
			) {
				resolve({
					json: function () {
						return JSON.parse(xhttp.responseText);
					},
				});
			}
		};
		options && options.body ? xhttp.send(options.body) : xhttp.send();
	});
}

myFetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json));

// myFetch('https://jsonplaceholder.typicode.com/posts/3')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const cb = (val, num, obj, str) => {
//   return function(ele, i, arr) {
//     return ele + val
//   }
// }


// [1, 2, 3].map(cb(7, 4, {}, 'ssersf'))