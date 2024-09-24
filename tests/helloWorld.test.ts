import {describe, expect, test} from "bun:test";
import { helloYou, repeatHelloYou, helloWorld, helloHuman } from "../src/hello-funcs.ts";
import type { Human } from "../src/types";

describe("helloYou", () => {
    test("should return a greeting message", () => {
        expect(helloYou("Alice")).toBe("Hello, Alice!");
    });

    test("should throw an error if name is empty", () => {
        expect(() => helloYou("")).toThrow("Name cannot be empty");
    });
});

describe("repeatHelloYou", () => {
    test("should return a repeated greeting message", () => {
        expect(repeatHelloYou("Alice", 3)).toBe("Hello, Alice!\nHello, Alice!\nHello, Alice!\n");
    });

    test("should throw an error if name is empty", () => {
        expect(() => repeatHelloYou("", 3)).toThrow("Name cannot be empty");
    });

    test("should throw an error if times is less than 1", () => {
        expect(() => repeatHelloYou("Alice", 0)).toThrow("Times must be greater than 0");
    });
});

describe("helloWorld", () => {
    test("should return a greeting message for the world", () => {
        expect(helloWorld()).toBe("Hello, World!");
    });
});

describe("helloHuman", () => {
    test("should return a greeting message for a human", () => {
        const human: Human = { firstname: "John", lastname: "Doe", birthyear: 1990 };
        expect(helloHuman(human)).toBe("Hello, John Doe! You are " + (new Date().getFullYear() - 1990) + " years old!");
    });

    test("should throw an error if firstname is empty", () => {
        const human: Human = { firstname: "", lastname: "Doe", birthyear: 1990 };
        expect(() => helloHuman(human)).toThrow("Firstname cannot be empty");
    });

    test("should throw an error if lastname is empty", () => {
        const human: Human = { firstname: "John", lastname: "", birthyear: 1990 };
        expect(() => helloHuman(human)).toThrow("Lastname cannot be empty");
    });

    test("should throw an error if birthyear is not a 4-digtest number", () => {
        const human: Human = { firstname: "John", lastname: "Doe", birthyear: 90 };
        expect(() => helloHuman(human)).toThrow("Birthyear must be a 4-digtest number");
    });
});