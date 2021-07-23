import * as chalk from "chalk";
import Middleware from "../middlewares/Middleware";

export default class Server {
    
    private firstMiddleware: Middleware;
    public setFirstMiddleware(middleware: Middleware): void {
        this.firstMiddleware = middleware;
    }

    logIn(email: string, password: string): boolean {
        
        if(this.firstMiddleware.check(email, password))
        {
            console.log(chalk.green("Usuário autorizado com sucesso!"));
            return true;
        }

        console.log(chalk.red("Usuário não autorizado com sucesso!"));
        return false;
    }

}