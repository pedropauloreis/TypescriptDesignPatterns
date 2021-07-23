import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";


const creditcard = new CreditCard();
creditcard.validate();
creditcard.collectPayment();

const debitcard = new DebitCard;
debitcard.validate();
debitcard.collectPayment();


const rewardscard = new NubankRewards;
rewardscard.validate();
rewardscard.collectPayment();