import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar{

    public constructor(
        color: string,
        year: number,
        engine: number,
        setats: number
    ) {
        this.configurationCar(color, year, engine, setats);
    }

    startVehicle(): void {
        console.log("Ligando os motores");
    }
    configurationCar(color: string, year: number, engine: number, setats: number): void {
        console.log(`Carro da cor ${color}, do ano ${year}, com motor de ${engine} e ${setats} assentos`);
        this.startVehicle();
    }


}