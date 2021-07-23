import DbProductFactory from "../factory/DbProductFactory";

export default class Payment{

    pay(productID: number): void{
        const dbPoduct = DbProductFactory.create();
        const product = dbPoduct.getProductById(productID);
        console.log(product);

    }
}