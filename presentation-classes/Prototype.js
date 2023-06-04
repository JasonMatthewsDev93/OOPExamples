function Parent(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Parent objects
  const myFather = new Parent("John", "Doe", 50, "blue");
  const myMother = new Parent("Sally", "Rally", 48, "green");
  
  console.log(myFather, myMother)
  
  //Is the same as
  
  class Siblings{
    //Needed?
      constructor(first, last, age, eye) {
          this.first = first;
          this.last = last;
          this.age = age;
          this.eye = eye;
      }
      
      createSiblingObject(first, last, age, eye) {
          return {
              first: first,
              last: last,
              age:age,
              eye:eye
          }
      }
  }
  
  const myBrother = new Siblings;
  const mySister = new Siblings;
  
  console.log(myBrother.createSiblingObject("Dylan", "Rally", 28, "blue"));
  console.log(mySister.createSiblingObject("Amy", "Rally", 28, "blue"));