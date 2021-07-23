import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import Bycicle from "../land/Bicycle";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTRansport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Bycicle();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }
    
}