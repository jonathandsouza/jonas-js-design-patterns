abstract class Hero {

    private _name: string;
    private _movementSpeed: number;
    private _baseDamage: number;

    abstract taunt(): void;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get movementSpeed(): number {
        return this._movementSpeed;
    }

    set movementSpeed(movementSpeed: number) {
        this._movementSpeed = movementSpeed;
    }

    get baseDamage(): number {
        return this._baseDamage;
    }

    set baseDamage(baseDamage: number) {
        this._baseDamage = baseDamage;
    }


}

class BloodSeeker extends Hero {


    constructor() {
        super();
        this.name = "Blood Seeker";
        this.baseDamage = 55;
        this.movementSpeed = 430;
    }


    taunt() {
        return "i seek blood";
    }

}

class AntiMage extends Hero {

    constructor() {
        super();
        this.name = "Anti Mage";
        this.baseDamage = 53;
        this.movementSpeed = 250;
    }


    taunt() {
        return "Thy life in mana spent.";
    }

}

class HeroFactory {

    getHero(name: string): Hero {

        if (name == "Anti Mage") {
            return new AntiMage();
        }

        if (name == "Blood Seeker") {
            return new AntiMage();
        }

    }
}

(function main() {

    var heroFactory: HeroFactory = new HeroFactory();

    var hero: Hero = heroFactory.getHero("Anti Mage");

    console.log(hero.taunt());

})();
