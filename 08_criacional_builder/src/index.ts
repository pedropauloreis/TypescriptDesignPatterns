import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director:Director = new Director(builder);

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle();

console.log(`Foi criado um veículo do tipo ${sedan.vehicleType} com ${sedan.wheelsTotal} todas.`);

director.constructTruck();

const truck: Vehicle = builder.getVehicle();
console.log(`Foi criado um veículo do tipo ${truck.vehicleType} com ${truck.wheelsTotal} todas.`);


director.constructMotorcycle();

const motorcycle: Vehicle = builder.getVehicle();
console.log(`Foi criado um veículo do tipo ${motorcycle.vehicleType} com ${motorcycle.wheelsTotal} todas.`);