import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvencedLive extends Live { 

    constructor(platform: IPlatform){
        super(platform);
        
    }
    
    subtitles(): void {
        console.log("Legendas ativadas na transmissão.")
    }

    comments(): void {
        console.log("Comentários liberados na transmissão.")
    }

}