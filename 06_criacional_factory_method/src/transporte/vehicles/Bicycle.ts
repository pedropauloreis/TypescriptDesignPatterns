import IVehicle from "./interfaces/IVehicle";

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a jornada de bicicleta");
    }
    getCargo(): void {
        console.log("Pacote acomodado na bicicleta.");
    }

}