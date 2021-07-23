import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkwind();
        this.getCargo();
        console.log("Drone decolando");
    }
    getCargo(): void {
        console.log("Pegamos a carga do Drone, estamos prontos!");
    }
    checkwind(): void {
        console.log("Vento a 15km/h, no Limite!");
    }

}