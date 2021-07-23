import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPago";

export default class MercadoPago implements IMercadoPago{

    private token: Token;

    autenticarToken(): Token {
        return new Token();
    }
    enviarPagamento(): void {
        this.token = this.autenticarToken();
        console.log(`TOKEN: ${this.token.getToken()}`);
        console.log("Enviando pagamentos via Mercado Pago");
    }
    receberPagamento(): void {
        console.log("Recebendo pagamentos via Mercado Pago");
    }
    
}