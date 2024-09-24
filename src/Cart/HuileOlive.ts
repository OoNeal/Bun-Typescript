import type {IProduct} from "./interfaces/IProduct";

export class HuileOlive implements IProduct {
    name: string;
    pricePerLiter: number;
    volume: number;

    constructor(name: string, pricePerLiter: number, volume: number) {
        this.name = name;
        this.pricePerLiter = pricePerLiter;
        this.volume = volume;
    }

    getPrice(): number {
        return this.pricePerLiter * this.volume;
    }
}