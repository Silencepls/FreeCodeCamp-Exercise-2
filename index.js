function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


let duck = new Bird();

Bird.prototype.constructor = Bird;

console.log(duck.constructor);
let beagle = new Dog();

console.log(beagle.constructor);