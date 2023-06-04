class Animal {
    #age
    constructor(age, gender, phylum) {
        this.#age = age;
        this.gender = gender;
        this.phylum = phylum;
    }

    //Encapsulation
    // get age() {
    //     return this.#age;
    // }
    
    // set age(age) {
    //     this.#age = age;
    // }

    isMammal(yesNo) {
        if(yesNo) {
            return "Is a Mammal";
        }

        return "Is not a mammal";
    }

    makeSound() {
        throw new Error("Must implement this method")
    }
}

class Lion extends Animal {
    constructor(call, colour, age) {
        super(age);
        this.call = call;
        this.colour = colour;
    }

    makeSound() {
        console.log("Roar!");
    }

    getLionAge() {
        // this.age = 98;
        return this.age;
      }
 
    lionInfo(){
        return this.isMammal(true);
    }
}

class Bear extends Animal {
    constructor(call, colour, age) {
        super(age);
        this.call = call;
        this.colour = colour;
    }

    makeSound() {
        console.log("Growl!");
    }

    //Polymorphism
    isMammal(){
        return "A bear is a mammal";
    }
    
    getBearAge() {
        return this.age
    }

    bearInfo(){
        return this.isMammal(true);
    }
}

module.exports = {
    Animal,
    Lion,
    Bear
}

const lion = new Lion("Roar", "brown", 7);
const bear = new Bear("Roar", "brown", 25);

console.log(lion.lionInfo());
console.log(lion.makeSound());
console.log(lion.getLionAge())
lion.age = 183
console.log(lion.getLionAge())
console.log(bear.bearInfo());
console.log(bear.getBearAge())