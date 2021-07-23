import IVehicle from "./IVehicle";
import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle{

    public constructor(
        color: string,
        year: number,
        engine: number,
    ) {
        this.configurationMotrscycle(color, year, engine);
    }

    startVehicle(): void {
        console.log("Ligando os motores");
    }
    configurationMotrscycle(color: string, year: number, engine: number) {
        console.log(`Moto da cor ${color}, do ano ${year} e com motor de ${engine}`);
        this.startVehicle();
    }

}