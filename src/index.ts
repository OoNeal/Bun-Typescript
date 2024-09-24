import {Starship} from "./Travelling/Starship.ts";
import {Planet} from "./Travelling/Planet.ts";
import {calculateFlightDurationFromEarth} from "./utils/flightCalculator.ts";
import {TimeStatus} from "./utils/TimeStatus.ts";
import {Cart} from "./Cart/Cart.ts";
import {Citron} from "./Cart/Citron.ts";
import {HuileOlive} from "./Cart/HuileOlive.ts";
import {Sucre} from "./Cart/Sucre.ts";
import {TomatesCerise} from "./Cart/TomateCerise.ts";

let startShip = new Starship("Prometheus", 100000);
console.log("Etape 1");
console.log('startShip :', startShip.ref + " " + startShip.speed + " " + startShip.status + "\n");

let planets: Planet[];
planets = [
    new Planet("Earth", 0),
    new Planet("Mars", 1000000),
    new Planet("Jupiter", 5000000),
    new Planet("Saturn", 10000000),
    new Planet("Uranus", 20000000),
    new Planet("Neptune", 30000000),
    new Planet("Pluto", 40000000)
];
console.log("\n" + "Etape 3");
console.log('planets :', planets);
planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log("planets sorted by distance from Earth :" + planets + "\n");
planets.sort((a, b) => a.name.localeCompare(b.name));
console.log("planets sorted by name :" + planets+ "\n");
planets.sort((a, b) => b.name.localeCompare(a.name));
console.log("planets sorted by name in reverse order :" + planets);

let sum = planets.reduce((acc, planet) => acc + planet.distanceFromEarth, 0);
let avg = sum / planets.length;
console.log("average distance from Earth :" + avg + "\n");

console.log("\n" + "Etape 4");
let flightInDays = calculateFlightDurationFromEarth(planets[1], startShip, TimeStatus.DAYS);
console.log("Flight duration to Pluto in days :" + flightInDays + "\n");
let flightInHours = calculateFlightDurationFromEarth(planets[1], startShip);
console.log("Flight duration to Pluto in hours :" + flightInHours + "\n");

console.log("\n" + "Etape 5");

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
console.log(`Total amount: ${cart.calculateAmount()}`);
console.log(`Details: ${cart.displayDetails().join("\n")}`);