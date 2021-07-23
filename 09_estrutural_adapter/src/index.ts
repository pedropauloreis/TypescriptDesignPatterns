import MercadoPAgoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPaypalPayment"
import PayPal from "./paypal/Paypal";

//const payment: IPayPalPayment = new PayPal();
//const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayment = new MercadoPAgoAdapter(new MercadoPago());

payment.paypalPayment();
payment.paypalReceive();

