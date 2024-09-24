import type {Human} from "./types.ts";

export function helloYou(name: string): string {
    if (name === "") {
        throw new Error("Name cannot be empty");
    }
    return `Hello, ${name}!`;
}

export function repeatHelloYou(name: string, times: number): string {
    if (name === "") {
        throw new Error("Name cannot be empty");
    }
    if (times < 1) {
        throw new Error("Times must be greater than 0");
    }
    let message = "";
    for (let i = 0; i < times; i++) {
        message += helloYou(name) + "\n";
    }
    return message;
}

export function helloWorld(): string {
    return helloYou("World");
}

export function helloHuman(human: Human): string {
    if (human.firstname === "") {
        throw new Error("Firstname cannot be empty");
    }
    if (human.lastname === "") {
        throw new Error("Lastname cannot be empty");
    }
    if (human.birthyear.toString().length !== 4) {
        throw new Error("Birthyear must be a 4-digtest number");
    }
    return helloYou(`${human.firstname} ${human.lastname}! You are ${new Date().getFullYear() - human.birthyear} years old`);
}