import {StarshipStatus} from "./StarshipStatus.ts";
import { v4 as uuidv4 } from 'uuid';
import * as validator from "validator";

export class Starship {
    id: string;
    ref: string;
    speed: number;
    status: StarshipStatus;

    constructor(ref: string, speed: number, id?: string) {
        if (id) {
            if (!validator.isUUID(id)) {
                id = uuidv4();
            }
        } else {
            id = uuidv4();
        }
        this.id = id;
        this.ref = ref;
        this.speed = speed;
        this.status = StarshipStatus.PARKED;
    }

    takeOff() {
        if(this.status !== StarshipStatus.PARKED) {
            throw new Error("Starship is not parked");
        }
        this.status = StarshipStatus.TAKING_OFF;
    }

    park() {
        if(this.status !== StarshipStatus.LANDING) {
            throw new Error("Starship is not landing");
        }
        this.status = StarshipStatus.PARKED;
    }

    fly() {
        if(this.status !== StarshipStatus.TAKING_OFF) {
            throw new Error("Starship is not taking off");
        }
        this.status = StarshipStatus.FLYING;
    }

    land() {
        if(this.status !== StarshipStatus.FLYING) {
            throw new Error("Starship is not flying");
        }
        this.status = StarshipStatus.LANDING;
    }
}