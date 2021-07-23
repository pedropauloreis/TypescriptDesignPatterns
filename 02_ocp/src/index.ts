import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import IVehicleCar from "./vehicles/IVehicleCar";
import Motorcycle from "./vehicles/Motorcycle";



const type = TypeVehicle.CAR;


let vehicle;

if (type === TypeVehicle.CAR) {
    vehicle = new Car("Amarelo",2022,2.0,4,4);
} else if (type === TypeVehicle.MOTORCYCLE){
    vehicle = new Motorcycle("Amarelo",2022,2.0);
}