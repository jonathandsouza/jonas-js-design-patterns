abstract class Animal {

    private _name: string;

    private _flightCapability: Flys;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get flightCapability(): Flys {
        return this._flightCapability;
    }

    set flightCapability(fly: Flys) {
        this._flightCapability = fly;
    }


    public sayName() {
        console.log(this._name);
    }

}


class Dog extends Animal {

    constructor(name: string, flightCapability: Flys) {
        super();
        this.name = name;
        this.flightCapability = flightCapability;
    }

}


class Bird extends Animal {

    constructor(name: string, flightCapability: Flys) {
        super();
        this.name = name;
        this.flightCapability = flightCapability;
    }

}


interface  Flys {
    fly: () => string;
}


class CantFly implements Flys {

    fly(): string {
        return "cant Fly"
    }

}

class CanFly implements Flys {

    fly(): string {
        return "can Fly"
    }

}


function main() {

    let tweety: Animal = new Bird("tweety", new CanFly());

    let sparky: Animal = new Dog("sparky", new CantFly());

    tweety.sayName();
    sparky.sayName();

    console.log(tweety.flightCapability.fly());
    console.log(sparky.flightCapability.fly());


};
main();



