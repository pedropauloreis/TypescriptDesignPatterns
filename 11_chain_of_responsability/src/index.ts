import * as readline from "readline";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import CheckWeakPasswordMiddleware from "./middlewares/CheckWeakPasswordMiddleware";
import Server from "./servers/Server";

declare var process;

const server = new Server();

function setPromptQuestions() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o email: ", email => {
        rl.question("Digite a sua senha:", password => {
            server.logIn(email, password);
            rl.close();
        })
    });

    //rl.on("close", setPromptQuestions)
    rl.on("close", () => {
        setPromptQuestions();
    })

    
}

const weakPasswordMiddleware = new CheckWeakPasswordMiddleware();

const permissionMiddleware = new CheckPermissionMiddleware();
permissionMiddleware.linkWith(weakPasswordMiddleware);

const userMiddleware = new CheckUserMiddleware();
userMiddleware.linkWith(permissionMiddleware);

server.setFirstMiddleware(userMiddleware);

setPromptQuestions();
