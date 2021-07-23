import IPlatform from "./IPlatform";

export default class Youtube implements IPlatform{

    constructor(){
        this.configureRMTP();
        console.log("Youtube: Transmissão foi iniciada.")
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: Configurando o broadcasting.");
    }
    authToken(): void {
        console.log("Youtube: Autorizando a aplicação.");
    }

    
}