export default class Client {

    private _email: string;

    set Email(value: string) {
        this._email = value;
    }
    get Email():string {
        return this._email;
    }

    create(): void {

    }
    read(): void {
        
    }
    update(): void {
        
    }
    delete(): void {
        
    }

    // O MÉTODO DE ENVIAR EMAIL DEVE ESTAR EM UMA CLASSE SEPARADA POIS VIOLA O PRINCÍPIO DE RESPONSABILIDADE ÚNICA
    // TRANSPORTADO PARA A CLASSE NOTIFY.TS
    
    // sendEmail(): boolean {
    //     return true;
    // }
}