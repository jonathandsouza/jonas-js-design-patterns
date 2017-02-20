/*
 Name: Abstract factory DP

 Description:

 *  Provides an interface for creating families of related or dependent objects without specifying their concrete classes


 */


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BOC : Enemy ship building

abstract class EnemyShipBuilding {

    protected abstract makeEnemyShip(type: string): EnemyShip;

    orderTheShip(type: string): EnemyShip {
        return this.makeEnemyShip(type);
    }

}

class UFOEnemyShipBuilding extends EnemyShipBuilding {

    protected makeEnemyShip(type: string): EnemyShip {

        let enemyShip: EnemyShip = null;

        if (type === "UFO") {

            let shipPartsFactory: EnemyShipFactory = new UFOEnemyShipFactory();
            console.log(shipPartsFactory);
            enemyShip = new UFOEnemyShip(shipPartsFactory);
            enemyShip.name = "UFO grunt ship"


        }
        else if (type === "UFO BOSS") {

            let shipPartsFactory: EnemyShipFactory = new UFOBossEnemyShipFactory();

            enemyShip = new UFOBossEnemyShip(shipPartsFactory);

            enemyShip.name = "UFO Boss ship"

        }

        return enemyShip;

    }

}

// EOC : Enemy ship building

// BOC Enemy Ship factory

interface  EnemyShipFactory {
    addESWeapon(): ESWeapon;
    addESEngine(): ESEngine;
}

class UFOEnemyShipFactory implements EnemyShipFactory {
    addESWeapon(): ESWeapon {
        return new ESUFOWeapon();
    }

    addESEngine(): ESEngine {
        return new ESUFOEngine();
    }

}

class UFOBossEnemyShipFactory implements EnemyShipFactory {
    addESWeapon(): ESWeapon {
        return new ESBossUFOWeapon();
    }

    addESEngine(): ESEngine {
        return new ESBossUFOEngine();
    }

}
// EOC Enemy Ship factory


// BOC Enemy Ship
abstract class EnemyShip {

    abstract displaySpecs();

    private _name: string;
    private _weapon: ESWeapon;
    private _engine: ESEngine;


    abstract makeShip();

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(weapon: ESWeapon) {
        this._weapon = weapon;
    }


    get engine() {
        return this._engine;
    }

    set engine(engine: ESEngine) {
        this._engine = engine;
    }


}

class UFOEnemyShip extends EnemyShip {

    _enemyShipFactory: EnemyShipFactory = null;

    constructor(enemyShipFactory: EnemyShipFactory) {

        super();

        this._enemyShipFactory = enemyShipFactory;
        this.makeShip();
    }

    displaySpecs() {
        console.log('name: ', this.name);
        console.log('engine: ', this.engine);
        console.log('weapon: ', this.weapon);
    }

    makeShip() {

        this.engine = this._enemyShipFactory.addESEngine();
        this.weapon = this._enemyShipFactory.addESWeapon();

    }

}

class UFOBossEnemyShip extends EnemyShip {

    _enemyShipFactory: EnemyShipFactory = null;

    constructor(enemyShipFactory: EnemyShipFactory) {

        super();

        this._enemyShipFactory = enemyShipFactory;
    }

    displaySpecs() {
        console.log(this.name);
    }

    makeShip() {

        this.engine = this._enemyShipFactory.addESEngine();
        this.weapon = this._enemyShipFactory.addESEngine();

    }

}
// EOC Enemy Ship


//BOC Weapon

interface ESWeapon {

    name: string;

}

class ESUFOWeapon implements ESWeapon {
    name: string = '20 dps';

}

class ESBossUFOWeapon implements ESWeapon {
    name: string = '100 dps';

}

//EOC Weapon


//BOC Engine


interface ESEngine {

    name: string;

}

class ESUFOEngine implements ESEngine {
    name: string = '20 mph';

}

class ESBossUFOEngine implements ESEngine {
    name: string = '100 mph';

}

//EOC Engine


////////////////////////////////////////////////////////////////////////////////////////////////////////////


function abstractFactoryDP(): void {

    let makeUFO: EnemyShipBuilding = new UFOEnemyShipBuilding();


    let gruntShip: EnemyShip = makeUFO.orderTheShip("UFO");
    gruntShip.displaySpecs();


    // let theBoss: EnemyShip = makeUFO.orderTheShip("UFO BOSS");
    // theBoss.displaySpecs();


}
abstractFactoryDP();