/*
    Name: Strategy DP.

    Problem :  We want to give Bird the ability to fly, an easy approach would be to create a method in Animal
    called fly (which returns weather an animal can fly ) and hope all sub classes override this method. This however
    is not a good approach as there is a chance that it might not get overridden, hence causing un-expected behaviour

     Solution: We abstract out the flight capability into an abstraction (Interface in this instance) and create getters/setters
     to initialize the functionality. This approach is also known as composition.

*/
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



