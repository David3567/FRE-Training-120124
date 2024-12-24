console.log("hello");
// const num: number = 3;
// console.log(num);

// * ~~~~~~~~~~ basic
// const num: number = 3;
// const str: string = 'test';
// let n;
// n = "5";

// * ~~~~~~~~~~ function
// type Person = { name: string; age?: number };
// type FnType = (num: number, ...args: any[]) => Person;

// const foo: FnType = function (num: number) {
// 	let obj: Person = {
// 		name: "Jojo",
// 		age: num ? num : 12,
// 	};
// 	return obj;
// };
// foo(undefined);

// * ~~~~~~~~~~ oop: abstract
// abstract class Tool {
//   abstract hello(n: number): [];

//   world() {
//     console.log('world');
//   }
// }
// class AA extends Tool {
//   hello(n: number): [] {
//     // throw new Error("Method not implemented.");
//     return []
//   }
// }
// const a = new AA();
// a.world()

// * ~~~~~~~~~~ type
// type Todo = {
// 	userId: number;
// 	id: number;
// };
// type Todoplus = Todo & {
// 	title: string;
// 	completed: boolean;
// } & string;

// const todo: Todoplus = {
//   userId: 12,
//   id: 12,
//   title: 'str',
//   completed: true
// }

// * ~~~~~~~~~~ union
// type antra = 'developer' | 'sales';

// let a: number | string | [] = '';
// a = 67;
// a = [];

// * ~~~~~~~~~~ interface
// interface Todo {
// 	userId: number;
// 	id: number;
// }
// interface Todoplus extends Todo {
// 	title: string;
// 	completed: boolean;
// }
// const todo: Todoplus = {
//   // userId: 12,
//   id: 12,
//   title: 'str',
//   completed: true
// }
// interface Something {
//   [key: string]: number;
// }
// const todo: Something = {
//   // userId: 12,
//   id: 12,
//   title: +'str',
//   completed:+true
// }

// * ~~~~~ any, unknow
// let aa: any = 23;
// aa = 'a';
// aa = true;
// console.log(aa.name);
// // aa: {name: string} = {
// //   name: 'hello'
// // }

// let bb: unknown = 23;
// bb = 'a';
// bb = true;
// console.log(bb.name);
// bb = {
//   name: 'hello'
// }

// * ~~~~~~~~~~ enum
// const DirectionEnum = {
//   Up: "UP",
//   Down: "DOWN",
//   Left: "LEFT",
//   Right: "RIGHT"
// };

// let d: string = DirectionEnum.Up; // No type checking; any string is allowed!
// d = "INVALID"; // This is valid but wrong!

// enum DirectionEnum {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }
// let d: DirectionEnum = DirectionEnum.Up; // No type checking; any string is allowed!
// d = DirectionEnum.Down; // This is valid but wrong!

// enum Role {
// 	Admin = 1,
// 	SuperUser,
// 	User,
// 	aa = 67,
// 	bb,
// 	cc,
// }

// console.log(Role["cc"]); // 3

// function move(direction: DirectionEnum) {
//   console.log(`Moving ${direction}`);
// }

// move(DirectionEnum.Up); // Works
// move("INVALID"); // Error

// * ~~~~~~~~~~ generic

// function toNumberArr(x: number, y: number): number[] {
//     return [x, y];
// }
// function toStringArr(x: string, y: string): string[] {
//     return [x, y];
// }

// function toArray<T, R>(x: T, y: R): [T, R] {
//     return [x, y];
// }
// toArray<string, number>('4', 5);

// console.log(toArray<number, string>(5, "dio"));

// interface Queue<T> {
//     enqueue(item: T): void;
//     dequeue(): T;
//     getqueue(): T[];
// }
// class MyQueue<T> implements Queue<T>{
// // class MyQueue<T> {
//     queue: T[];
//     constructor(queue: T[]) {
//         this.queue = queue;
//     }
//     enqueue(item: T): void {
//         throw new Error("Method not implemented.");
//     }
//     dequeue(): T {
//         return this.queue.shift();
//     }
//     getqueue(): T[] {
//         return this.queue;
//     }
// }

// Math.max()

// const queue = new MyQueue<number>([]);

// * ~~~~~~~~~ public, private, protect, readonly
// class Person {
// 	public name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }
// class Person {
//   readonly url = ''

// 	constructor(public name: string) {}
// }
// const p = new Person("hello");
// console.log(p);

// class Employee extends Person {

// }

// * ~~~~~~~~~~ set decorator for a class
// function component(target: Function) {
// 	target.prototype.id = 100;
// }

// @component
// class Emplyee {
// 	id: number;

// 	print(str: string) {
// 		console.log(str + this.id);
// 	}
// }
// const e = new Emplyee();
// e.print("test decorator ");

// function course(name: string) {
// 	return function (target: Function) {
// 		target.prototype.hello = function () {
// 			console.log(name + " teach Angular 2");
// 		};
// 	};
// }

// @course("David")
// class Person {
// 	firstName: string;

// 	constructor(firstName: string) {
// 		this.firstName = firstName;
// 	}
// 	hello(num: number) {
// 		console.log(num, this.firstName);
// 	}
// }
// const p = new Person("David");
// p.hello(5);

// * ~~~~~~~~~~ set decorator for a function
// function Time(
// 	target: any,
// 	propertyKey: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	const originalMethod = descriptor.value;

// 	// Modify the method
// 	descriptor.value = function (...args: any[]) {
// 		console.log(`Starting execution of ${propertyKey}`);
// 		const start = performance.now();

// 		// Call the original method
// 		const result = originalMethod.apply(this, args);

// 		const end = performance.now();
// 		console.log(
// 			`Execution of ${propertyKey} finished. Time taken: ${(
// 				end - start
// 			).toFixed(2)}ms`
// 		);
// 		return result;
// 	};

// 	return descriptor;
// }

// class Example {
// 	@Time
// 	slowMethod(seconds: number) {
// 		console.log(`Simulating a slow operation...`);
// 		const start = Date.now();
// 		while (Date.now() - start < seconds * 1000) {
// 			// Busy-wait for the given time (not recommended for production, for demo only)
// 		}
// 		console.log(`Finished operation.`);
// 	}
// }

// const example = new Example();
// example.slowMethod(2);

// Logs:
// Starting execution of slowMethod
// Simulating a slow operation...
// Finished operation.
// Execution of slowMethod finished. Time taken: 2000.XXms

// * ~~~~~~~~~~ set decorator for a property
// function LogProperty(target: any, propertyKey: string) {
// 	let value = target[propertyKey];

// 	Object.defineProperty(target, propertyKey, {
// 		get: () => {
// 			console.log(
// 				`Getter for ${propertyKey} called, returning: ${value}`
// 			);
// 			return "David";
// 		},
// 		set: (newValue: any) => {
// 			console.log(
// 				`Setter for ${propertyKey} called, setting: ${newValue}`
// 			);
// 			value = newValue;
// 		},
// 		enumerable: true,
// 		configurable: true,
// 	});
// }

// class User {
// 	@LogProperty
// 	public name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// const user = new User("Alice");
// user.name = "Bob"; // Logs: Setter for name called, setting: Bob
// console.log(user.name); // Logs: Getter for name called, returning: Bob

// * ~~~~~~~~~~ set decorator for an argument
function LogParameter(
	target: any,
	propertyKey: string,
	parameterIndex: number
) {
	console.log(
		`Parameter in ${propertyKey} at index ${parameterIndex} is decorated`
	);
}

class Greeter {
	greet(@LogParameter name: string): void {
		console.log(`Hello, ${name}!`);
	}
}

const greeter = new Greeter();
greeter.greet("John");
