"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function loggedMethodDecoratorFactory(header) {
    function loggedMethodDecorator(_target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        function replacementMethod(...args) {
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
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
__decorate([
    loggedMethodDecoratorFactory("....")
], Person.prototype, "greet", null);
const p = new Person("Meo");
p.greet();
