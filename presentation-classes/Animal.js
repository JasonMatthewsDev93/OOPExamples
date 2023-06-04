class Animal {
    #age
    constructor(age, gender, phylum) {
        this.#age = age;
        this.gender = gender;
        this.phylum = phylum;
    }

    // get age() {
    //     return this.#age;
    // }
    
    // set age(age) {
    // this.#age = age;
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
        super();
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
    constructor(call, colour) {
        super();
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
    
    bearInfo(){
        return this.isMammal(true);
    }
}

const lion = new Lion("Roar", "brown", 7);
const bear = new Bear("Roar", "brown");

console.log(lion.lionInfo());
console.log(lion.makeSound());
console.log(lion.getLionAge())
lion.age = 183
console.log(lion.getLionAge())
console.log(bear.bearInfo());