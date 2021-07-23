import { start } from "repl";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport {
    startTransport(): void {
        const vehicle = this.createTransport();
        vehicle.startRoute();
    }

    protected abstract createTransport(): IVehicle;
    
}