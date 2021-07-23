import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client();
cliente.Email = "ppreis@gmail.com";

const notificacao = new Notify(cliente);
notificacao.sendEmail();
