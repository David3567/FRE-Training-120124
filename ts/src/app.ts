console.log("hello");
const num: number = 2;
console.log(num);

function Log(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value;
	descriptor.value = function (...args: any[]) {
		console.log(`Calling ${propertyKey} with args:`, args);
		return originalMethod.apply(this, args);
	};
	return descriptor;
}

class Example {
	@Log
	greet(name: string): string {
		return `Hello, ${name}!`;
	}
}

const example = new Example();
console.log(example.greet("Alice"));
