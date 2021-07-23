import IPaymentInstrument from "./IPaymentInstrument";


export default class NubankRewards implements IPaymentInstrument {

    validate(): void {
        console.log("Validação pontos do programa Rewards");
    }
    collectPayment(): void {
        console.log("Pagando pelo Rewards");
    }
    
}