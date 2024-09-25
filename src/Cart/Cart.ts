import type {IProduct} from "./interfaces/IProduct";
import { v4 as uuidv4 } from 'uuid';

interface OrderLine {
    id: string;
    product: IProduct;
    quantity: number;
    unitPrice: number;
    unit: string;
}

export class Cart {
    private orderLines: OrderLine[] = [];

    add(product: IProduct, quantity: number, unitPrice: number, unit: string): void {
        const existingOrderLine = this.orderLines.find(orderLine => orderLine.product.name === product.name);
        if (existingOrderLine) {
            existingOrderLine.quantity += quantity;
        } else {
            const orderLine: OrderLine = {
                id: uuidv4(),
                product,
                quantity,
                unitPrice,
                unit
            };
            this.orderLines.push(orderLine);
        }
    }

    calculateAmountByProduct(productName: string): number {
        return this.orderLines
            .filter(orderLine => orderLine.product.name === productName)
            .reduce((total, orderLine) => total + orderLine.product.getPrice(), 0);
    }

    calculateAmount(): number {
        return (this.orderLines.reduce((total, orderLine) => total + orderLine.product.getPrice(), 0));
    }

    displayDetails(): string[] {
        return this.orderLines.map(orderLine => {
            return `ID: ${orderLine.id}, Name: ${orderLine.product.name}, Unit Price: ${orderLine.unitPrice}, Unit: ${orderLine.unit}, Quantity: ${orderLine.quantity}, Amount: ${orderLine.product.getPrice()}`;
        });
    }

    getNumberOfProducts(): number {
        return this.orderLines.length;
    }
}