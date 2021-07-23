import Db from "../model/Db";
import DB from "../model/Db";
import IDbProduct from "../model/IDBProduct"
import MongoDbProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {

    private static type: Db = Db.MONGODB;

    public static create(): IDbProduct{
        if (DbProductFactory.type === Db.MYSQL){
            return new MySQLProduct();
        }
        else if (DbProductFactory.type === Db.MONGODB){
            return new MongoDbProduct();
        }
    
    }

}