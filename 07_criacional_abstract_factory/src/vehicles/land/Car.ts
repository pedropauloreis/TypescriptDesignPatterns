import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro iniciando a viagem.");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros, estão todos acomodados no carro.");
    }
    
}