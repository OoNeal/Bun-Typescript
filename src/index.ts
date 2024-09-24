import {repeatHelloYou} from "./hello-funcs.ts";

try {
    const message = repeatHelloYou("John", 1);
    console.log(message);
} catch (error) {
    console.error(error);
}