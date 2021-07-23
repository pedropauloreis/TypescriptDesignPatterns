import Transport from "../Transport";
import Motorcycle from "./Motorcycle";
import IVehicle from "./interfaces/IVehicle";

export default class Motorcycletransport extends Transport {
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }
}