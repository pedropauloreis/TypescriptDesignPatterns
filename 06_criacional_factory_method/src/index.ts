import Transport from "./transporte/Transport";
import BicycleTransport from "./transporte/vehicles/BicycleTransport";
import CarTransport from "./transporte/vehicles/CarTransport";
import Motorcycletransport from "./transporte/vehicles/MotorcycleTransport";

declare var process;

let transport: Transport;

if(process.argv.includes("--uber")) {
    transport = new CarTransport();
}else if (process.argv.includes("--log")) {
    transport = new Motorcycletransport();
}
else if (process.argv.includes("--eats")) {
    transport = new BicycleTransport();
}
else{
    console.error("Selecione o tipo de entrega. --uber / --log / --eats")
}

if(transport)
{
    transport.startTransport();
}

