/*
function memoize(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("target: ", _target);
  console.log("propertyKey: ", _propertyKey);
  console.log("descriptor: ", descriptor);
  // a reference to our original method
  const originalMethod = descriptor.value;

  // hash map to cache function call results
  let cache = new Map();

  descriptor.value = function (...args: any[]) {
    // create a string key for the map by joining all args with ','
    console.log("args:", args);
    const argsKey = args.join(",");
    // if key found return from cache
    if (cache.has(argsKey)) {
      return cache.get(argsKey);
    }

    // calculate result from original method
    const result = originalMethod.apply(this, args);

    // add new value to cache
    cache.set(argsKey, result);
    return result;
  };

  return descriptor;
}

class MyClass {
  // this is our decorator
  @memoize
  // recursive implementation of the fibonacci algorithm
  public fibonacci(num: number): number {
    if (num <= 1) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
}

// create new instance of MyClass
const myInstance = new MyClass();

// print the first 12 fibonacci numbers
for (let i = 0; i < 12; i++) {
  console.log(myInstance.fibonacci(i));..
}
*/

function loggedMethodDecoratorFactory(header: string): any {
  function loggedMethodDecorator(
    _target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    const originalMethod = descriptor.value;
    function replacementMethod(this: any, ...args: any[]) {
      console.log(`${header} Entering method: ${propertyKey} ${header}`);
      const result = originalMethod.call(this, ...args);
      console.log(`${header} Exiting method: ${propertyKey} ${header}`);
      return result;
    }
    descriptor.value = replacementMethod;
    return descriptor;
  }
  return loggedMethodDecorator;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethodDecoratorFactory("....")
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person("Meo");
p.greet();
