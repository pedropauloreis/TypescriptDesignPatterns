import Client from "./Client";

export default class Notify{
    constructor(private client:Client){

    }
    sendEmail(): boolean {
        console.log(this.client.Email);
        return true;
    }
}