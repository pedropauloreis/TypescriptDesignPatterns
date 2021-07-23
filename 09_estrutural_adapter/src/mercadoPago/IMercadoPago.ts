import Token from "../utils/Token";

export default interface IMercadoPago {

        autenticarToken(): Token;
        enviarPagamento(): void;
        receberPagamento(): void;

}