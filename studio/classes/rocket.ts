import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";
import { Payload} from '../Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    };
    sumMass(items: Payload[] ): number {
        // Returns the sum of all items using each item's massKg property
        let total: number = 0;
        for (let i: number = 0; i<items.length; i++) {
            total += items[i].massKg
        }
        return total;
    };
    currentMassKg(): number {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let astroLoad: number = this.sumMass(this.astronauts);
        let cargoLoad: number = this.sumMass(this.cargoItems);
        return astroLoad + cargoLoad;
    };
    canAdd(item: Payload): boolean {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    };
    addCargo(cargo: Cargo): boolean {
        // Uses this.canAdd() to see if another item can be added. If true, adds cargo to this.cargoItems and returns true. If false, returns false.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    };
    addAstronaut(astronaut: Astronaut): boolean {
        // Uses this.canAdd() to see if another astronaut can be added. If true, adds astronaut to this.astronauts and returns true. If false, returns false
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    };
    
};