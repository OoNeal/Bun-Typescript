import type {IProduct} from "./interfaces/IProduct";

export class TomatesCerise implements IProduct {
    name: string;
    pricePerKg: number;
    weight: number;

    constructor(name: string, pricePerKg: number, weight: number) {
        this.name = name;
        this.pricePerKg = pricePerKg;
        this.weight = weight;
    }

    getPrice(): number {
        return this.pricePerKg * this.weight;
    }
}