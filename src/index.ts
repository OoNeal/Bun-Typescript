import {Starship} from "./Travelling/Starship.ts";
import {Planet} from "./Travelling/Planet.ts";
import {calculateFlightDurationFromEarth} from "./utils/flightCalculator.ts";
import {TimeStatus} from "./utils/TimeStatus.ts";
import {Cart} from "./Cart/Cart.ts";
import {Citron} from "./Cart/Citron.ts";
import {HuileOlive} from "./Cart/HuileOlive.ts";
import {Sucre} from "./Cart/Sucre.ts";
import {TomatesCerise} from "./Cart/TomateCerise.ts";

function logWithSeparator(message: string): void {
    console.log("--------------------------------------");
    console.log("\n" + message + "\n");
    console.log("--------------------------------------");
}

let planets: Planet[];
planets = [
    new Planet("Mercure", 92000000),
    new Planet("Venus", 41000000),
    new Planet("Mars", 78000000),
    new Planet("Jupiter", 628000000),
    new Planet("Saturne", 1275000000),
    new Planet("Uranus", 2724000000),
    new Planet("Neptune", 4351000000),
];

let startShip = new Starship("Prometheus", 100000);

logWithSeparator("Etape 1");
console.log('startShip:', startShip.ref + " " + startShip.speed + " " + startShip.status + "");

logWithSeparator("Etape 3");
console.log('Planets :', planets);
planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log("Planets sorted by distance from Earth:");
planets.forEach(planet => {
    console.log(planet.name + " " + planet.distanceFromEarth + "km");
});
console.log("\n");

planets.sort((a, b) => a.name.localeCompare(b.name));
console.log("Planets sorted by name:");
planets.forEach(planet => {
    console.log(planet.name + " " + planet.distanceFromEarth + "km");
});
console.log("\n");

planets.sort((a, b) => b.name.localeCompare(a.name));
console.log("Planets sorted by name in reverse order:");
planets.forEach(planet => {
    console.log(planet.name + " " + planet.distanceFromEarth + "km");
});
console.log("\n");

let sum = planets.reduce((acc, planet) => acc + planet.distanceFromEarth, 0);
let avg = sum / planets.length;
console.log("Average distance from Earth: " + avg.toFixed(2) + "km");

logWithSeparator("Etape 4");
planets.forEach(planet => {
    console.log("Flight duration for " + planet.name + " :");
    console.log(calculateFlightDurationFromEarth(planet, startShip, TimeStatus.HOURS));
    console.log(calculateFlightDurationFromEarth(planet, startShip, TimeStatus.DAYS));
    console.log("\n");
})

logWithSeparator("Etape 5");

const cart = new Cart();

const citron = new Citron("Citron", 0.5, 2);
const huileOlive = new HuileOlive("Huile d'olive", 5, 1.5);
const sucre = new Sucre("Sucre", 0.5);
const tomatesCerise = new TomatesCerise("Tomates cerise", 3.5, 1.5);

cart.add(citron, 2, 0.5, "unit");
cart.add(huileOlive, 1.5, 5, "liter");
cart.add(sucre, 0.5, sucre.pricePerKg, "kg");
cart.add(citron, 5, 0.5, "unit");
cart.add(sucre, 3, sucre.pricePerKg, "kg");
cart.add(tomatesCerise, 1.5, 3.5, "kg");

console.log(`Number of product types in the cart: ${cart.getNumberOfProducts()}`);
console.log(`Amount for tomatoes: ${cart.calculateAmountByProduct("Tomates cerise")}`);
console.log(`Total amount: ${cart.calculateAmount().toFixed(2)} €`);
console.log(`Details: \n${cart.displayDetails().join("\n")}`);