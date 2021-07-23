import IVehicle from "./IVehicle";

export default interface IVehicleMotorcycle extends IVehicle{
    configurationMotrscycle(
        color: string,
        year: number,
        engine: number,
    )
}