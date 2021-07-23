import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import LimeTRansport from "./vehicles/factories/LimeTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";


const currentCompany = Company.LIME;
let factory: ITransportFactory;

switch(currentCompany)
{
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    
    case Company.UBER:
        factory = new UberTransport();
        break;

    case Company.LIME:
        factory = new LimeTRansport();
        break;

    default:
        console.error("Companhia desconhecida");
        break;
}

const client = new Client(factory);

client.startRoute();
