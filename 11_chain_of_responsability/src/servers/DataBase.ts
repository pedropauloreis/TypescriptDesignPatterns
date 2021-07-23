import PermissionType from "./PermissionType";

interface IDataBaseItem {
    email: string;
    password: string;
    permission: PermissionType;
}

const DataBase: IDataBaseItem[] = [
    {
        email: "master@exemplo.com.br",
        password: "12345678",
        permission: PermissionType.ADMIN,
    },
    {
        email: "usuario@exemplo.com.br",
        password: "123456",
        permission: PermissionType.USER,
    },
    
];

export default DataBase;
