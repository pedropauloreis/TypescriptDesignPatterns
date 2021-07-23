export default interface IVehicle {
    startVehicle(): void;
    configurationCar(
        color: string,
        year: number,
        engine: number,
        setats: number,
    ): void;
    configurationMotrscycle(
        color: string,
        year: number,
        engine: number,
    )
}