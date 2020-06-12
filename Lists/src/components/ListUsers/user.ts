
interface I_Users<ID, Name, Age, Email, Password> {
    id: ID
    name: Name
    age: Age
    email: Email
    password: Password,
    stores: Array<object>
}
const enum ID {
    Primary = 1
}
namespace BaseListUsers {
    export abstract class Users<ID, Name, Age, Email, Password> implements I_Users<ID, Name, Age, Email, Password> {
        id: ID
        name: Name
        age: Age
        email: Email
        password: Password
        stores: Array<object>
        constructor(
            id: ID,
            name: Name,
            age: Age,
            email: Email,
            password: Password,
            stores: Array<object>
        ) {
            this.id = id
            this.name = name
            this.age = age
            this.email = email
            this.password = password
            this.stores = stores
        }
    }
}
namespace ListUsersWithHTML {
    export class ObjectUser<ID, Name, Age, Email, Password> extends BaseListUsers.Users<ID, Name, Age, Email, Password>
    {
        id: ID
        name: Name
        age: Age
        email: Email
        password: Password
        stores: Array<object>

        constructor(id: ID, name: Name, age: Age, email: Email, password: Password, stores: Array<object>) {
            super(id, name, age, email, password, stores)
            this.id = id
            this.name = name
            this.age = age
            this.email = email
            this.password = password
            this.stores = stores
        }
    }
}
// comentario 
const created = new ListUsersWithHTML.ObjectUser<number, string, number, string, string | number>
    (ID.Primary, 'Felipe', 19, 'profissionalf.andre@gmail.com', 2323131, [{
        main: 'Adaga 9201',
        second: 'Lojinha do zé',
        extra: 'Loja do xin'
    }])
console.log(created)