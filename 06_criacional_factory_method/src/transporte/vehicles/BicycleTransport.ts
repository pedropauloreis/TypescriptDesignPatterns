import Transport from "../Transport";
import Bicycle from "./Bicycle";
import IVehicle from "./interfaces/IVehicle";

export default class BicycleTransport extends Transport {
    protected createTransport (): IVehicle {
        return new Bicycle();
    }
}