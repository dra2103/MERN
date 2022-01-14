class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

// Ninja UNIT Cards*********************************

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    drinksake() {
        this.power += 10;
        console.log("Banzi!! Health is now", this.health);
    }



    attack(target) {
        if (target instanceof Unit) {
            target.res += this.power;
        } else {
            throw new Error("Target must be a Ninja");
        }
    }
}

// Effects Cards******************************
class Effect extends Card {
    constructor(name, cost, magnitude, text, stat) {
        super(name, cost);
        this.magnitude = magnitude;
        this.text = text;
        this.stat = stat;
    }

    play(effect) {
        if (effect instanceof Unit) {
            if (this.stat === "resilience") {
                effect.res += this.magnitude;
                console.log(effect.name + " " + this.text);
            } else if (this.stat === "power") {
                effect.power += this.magnitude;
                console.log(effect.name + " " + this.text);
            }
        } else {
            throw new Error("target must be a Ninja");
        }
    }

    unhandeledProm(effect) {
        if (effect instanceof Unit) {
            if (this.stat === "resilience") {
            this.res -= effect.magnitude;
            console.log(effect.name + " " + this.text);
            }
        } else {
            throw new Error("target must be a Ninja");
        }
    }


}


const RedBeltNinja = new Unit("Daniel", 3, 3, 4);
const BlackBeltNinja = new Unit("Jun", 4, 5, 4);
console.log(RedBeltNinja);
console.log(BlackBeltNinja);
const HardAlgorithm = new Effect("Hard Algorith", 2,3,"increases resiliance by 3","resilience" );
const UnhandledPromis = new Effect("Unhandled Promise Rejection",1,2,"reduce resiliance by 2","resilience");
const PairProgramming = new Effect("Pair Programming",3,2,"increases power by 2","power");

console.log(HardAlgorithm);
HardAlgorithm.play(RedBeltNinja);
console.log(RedBeltNinja);
UnhandledPromis.unhandeledProm(RedBeltNinja);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja)
console.log(BlackBeltNinja)

