export default class Vehicle {
    public constructor(
        private color: string,
        private year: number,
        private engine: number,
        private seats: number,
        private doors: number
    ){}

    car():void {
        console.log(`Criando um carro: ${this.color}, ${this.year}, ${this.engine} potência, ${this.doors} portas, ${this.seats} assentos`);
        this.startVehicle();
    }

    motorcycle(): void {
        console.log(`Criando uma moto: ${this.color}, ${this.year}, ${this.engine} cilindradas.`);
        this.startVehicle();
    }


    startVehicle(): void {
        console.log('Ligando os motores');
    }
}