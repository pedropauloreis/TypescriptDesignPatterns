import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
    startRoute(): void {
        this.checkwind();
        this.getCargo();
        console.log("Avião decolando");
    }
    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos!");
    }
    checkwind(): void {
        console.log("Vento a 25km/h, ventos ok!");
    }

}