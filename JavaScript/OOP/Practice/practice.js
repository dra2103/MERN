const user1 = {
    name: "Kermit",
    email: "kermit@sesame.org",
    friend: {
        name: "Miss Peggy",
        email: "piggy@sesame.org"
        // the above friend is a memory line that 
    }
}

// This is a class, classes always have constructors, constructor runs everytime we creat an instance
class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
        console.log('You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.');
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!"
    }
}

// this will create an instance
const car = new Vehicle("BMW","M5","Silver");
car.drive();
console.log(car.miles);


// inheritance of a class child M5 class
class M5 extends Vehicle{
    constructor(color) {
        super("BMW","M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }

} 

const m5 = new M5("silver");
m5.childFunction();
