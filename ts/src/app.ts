console.log("hello");
const num: number = 2;
console.log(num);

// * ~~~~~~~~~~ set decorator for a class
// function component(target: Function) {
//     target.prototype.id = 100;
// }

// @component
// class Emplyee {
//     id: number;

//     print(str: string) {
//         console.log(str + this.id);
//     }
// }
// const e = new Emplyee();
// e.print("test decorator");

// function course(name: string) {
//     return function (target: Function) {
//         target.prototype.course = function () {
//             console.log(name + " teach Angular 2");
//         };
//     };
// }

// @course("David")
// class Person {
//     firstName: string;

//     constructor(firstName: string) {
//         this.firstName = firstName;
//     }
//     course(num: number) {
//         console.log(num);
//     }
// }
// const p = new Person("David");
// p.course(5);

// * ~~~~~~~~~~ set decorator for a function
// function Time(
// 	target: any,
// 	propertyKey: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	const originalMethod = descriptor.value;

// Modify the method
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
// function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
//   console.log(`Parameter in ${propertyKey} at index ${parameterIndex} is decorated`);
// }

// class Greeter {
//   greet(@LogParameter name: string): void {
//       console.log(`Hello, ${name}!`);
//   }
// }

// const greeter = new Greeter();
// greeter.greet("John");
