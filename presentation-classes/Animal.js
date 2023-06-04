class Animal {
    constructor(age, gender, phylum) {
        this.age = age;
        this.gender = gender;
        this.phylum = phylum;
    }

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
    constructor(call, colour) {
        super(call);
        this.colour = colour;
    }

    makeSound() {
        console.log("Roar!");
      }
    
    lionInfo(){
        return this.isMammal(true);
    }
}

class Bear extends Animal {
    constructor(call, colour) {
        super(call);
        this.colour = colour;
    }

    makeSound() {
        console.log("Growl!");
      }

    isMammal(){
        return "A bear is a mammal"
    }
    
    bearInfo(){
        return this.isMammal(true);
    }
}

const lion = new Lion("Roar", "brown");
const bear = new Bear("Roar", "brown");

console.log(lion.lionInfo())
console.log(bear.bearInfo())