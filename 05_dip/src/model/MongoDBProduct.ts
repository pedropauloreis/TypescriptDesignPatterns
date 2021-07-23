import IDbProduct from "./IDBProduct";

export default class MongoDbProduct implements IDbProduct {
    getProductById(productId: number): string {
        return `MongoDB: exibindo dados do produto ${productId}`;
    }
    
}