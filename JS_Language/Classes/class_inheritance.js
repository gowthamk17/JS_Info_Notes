// extend keyworkd is used to inherit 
// basicaly it sets extending classes prototype to parent's prototype

class ClassA {
    constructor() {}
    parentMethod() {
        console.log('parentMethod');
    }
};

class ClassB extends ClassA {
    childMethod() {
        console.log('childMethod');
    }
};

const classBInstance = new ClassB();
classBInstance.childMethod();
classBInstance.parentMethod();

console.log(Object.getPrototypeOf(classBInstance)); // points to classA

// extending methods if parent and child both have the same name we 
// can use super to call parent's method inside child
class parentClass {
    someMethod() {
        console.log('from parent');
    }
};

class childClass extends parentClass {
    someMethod() {
        super.someMethod();
        console.log('from chlid');
    }
};

const childInstance = new childClass();
childInstance.someMethod();

/* so in the constructor of the childclass we need to add super first then proceed
because setting this to an obj is usually done by constructor but for extending classes
it's constructor expect it's parent to do so it won't create it which will cause us an error */

class parentClass1 {
    constructor(){}
}
class childClass1 extends parentClass1 {
    constructor() {
        super(); // without this line it's object will throw error
    }
}
const childClass1Instance = new childClass1();