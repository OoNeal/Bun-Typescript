import type {IProduct} from "./interfaces/IProduct";

export class Sucre implements IProduct {
    name: string;
    pricePerKg: number;
    weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.pricePerKg = Math.round((Math.random() * 10) * 100) / 100;
        this.weight = weight;
    }

    getPrice(): number {
        return this.pricePerKg * this.weight;
    }
}