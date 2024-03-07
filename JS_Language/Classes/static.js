// if we want to add common methods in a class we can use static keyword

class Sample {
    static author = "gowtham";
    static printVoila() {
        console.log('Voiiiiila');
    }
}

console.log(Sample.author);
Sample.printVoila();

// staic methods are not callable in the objects
const sampleInstance = new Sample();
// sampleInstance.printVoila(); // this line will throw error

// static properties and methods are inherited

class ChildSample extends Sample {
}

console.log(ChildSample.author);
ChildSample.printVoila();

// creating a static is the same as assigning them to the class method
// like this Sample.printvoila = () => {...}