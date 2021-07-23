import ILandVehicle from "./interfaces/ILandVehicle";

export default class Bycicle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta iniciando passeio alugado.");
    }
    getCargo(): void {
        console.log("Cliente já desbloqueou a bicileta.");
    }

    
}