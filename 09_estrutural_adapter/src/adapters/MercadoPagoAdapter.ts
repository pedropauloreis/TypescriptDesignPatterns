import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPAgoAdapter implements IPayPalPayment {
    
        
    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando o Payonner utilizando os métodos e padrões do PayPal.")
    }
    
    authToken(): Token {
        return this.mercadoPago.autenticarToken();
    }
    paypalPayment(): void {
        return this.mercadoPago.enviarPagamento();
    }
    paypalReceive(): void {
        return this.mercadoPago.receberPagamento();
    }

}