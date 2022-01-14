class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health
        this.speed = 3;
        this.strength = 3
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log('Ninjas name: ',this.name)
        console.log('strength: ',this.strength)
        console.log('speed: ',this.speed)
        console.log('health: ',this.health)
    }

    drinksake(){
        this.health += 10
        console.log('Banzi!! Health is now', this.health);

    }
}
const ninja1 = new Ninja("Hyabusa", 65);
ninja1.drinksake();
ninja1.sayName();
ninja1.showStats();
