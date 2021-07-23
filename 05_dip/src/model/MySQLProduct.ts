import IDbProduct from "./IDBProduct";

export default class MySQLProduct implements IDbProduct {
    getProductById(productId: number):string {
        return `MySQL: exibindo dados do produto ${productId}`;
    }
}