import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle {
    private _vehicleType: VehicleType;
    private _engine: Engine;
    private _transmission: Transmission;
    private _seats: number;
    private _wheels: Wheel[] = [];

    addWheel(wheel: Wheel): void {
        this._wheels.push(wheel);
    }

    get vehicleType(): VehicleType {return this._vehicleType;};
    set vehicleType(value: VehicleType) {this._vehicleType = value;};

    get engine(): Engine {return this._engine};
    set engine(value) {this._engine = value;}

    get transmission(): Transmission {return this._transmission};
    set transmission(value) {this._transmission = value;}

    get seats(): number {return this._seats};
    set seats(value) {this._seats = value;}

    get wheels(): Wheel[] {return this._wheels};
    get wheelsTotal(): number {return this._wheels.length};
    
}