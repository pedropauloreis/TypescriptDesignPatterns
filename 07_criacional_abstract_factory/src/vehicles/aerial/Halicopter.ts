import { threadId } from "worker_threads";
import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkwind();
        this.getCargo();
        console.log("Helicoptero iniciando a decolagem.");
    }
    getCargo(): void {
        console.log("Passageiros OK, protegidos da hélice.");
    }
    checkwind(): void {
        console.log("Ventos a 30km/h, sudoeste, ventos ok");
    }
    
}