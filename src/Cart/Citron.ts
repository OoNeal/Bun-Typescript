import type {IProduct} from "./interfaces/IProduct";

export class Citron implements IProduct {
    name: string;
    unitPrice: number;
    quantity: number;

    constructor(name: string, unitPrice: number, quantity: number) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    getPrice(): number {
        return this.unitPrice * this.quantity;
    }
}