import type {Planet} from "../Travelling/Planet.ts";
import type {Starship} from "../Travelling/Starship.ts";
import {TimeStatus} from "./TimeStatus.ts";

export function calculateFlightDurationFromEarth(planet: Planet, starship: Starship, unity? : TimeStatus): string {
    let duration = planet.distanceFromEarth / starship.speed;
    switch (unity) {
        case TimeStatus.HOURS:
            return duration + " hours";
        case TimeStatus.DAYS:
            return duration / 24 + " days";
        default:
            return duration + " hours";
    }
}