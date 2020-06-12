"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const enum_1 = require("./enum");
var ListUsersWithHTML;
(function (ListUsersWithHTML) {
    class LU extends base_1.BaseListUsers.Users {
        constructor(id, name, age, email, password) {
            super(id, name, age, email, password);
            this.id = id;
            this.name = name;
            this.age = age;
            this.email = email;
            this.password = password;
        }
    }
    ListUsersWithHTML.LU = LU;
})(ListUsersWithHTML || (ListUsersWithHTML = {}));
const created = new ListUsersWithHTML.LU(enum_1.ID.Primary, 'Felipe', 19, 'profissionalf.andre@gmail.com', 'SA&&%%12?sq');
console.log(created);
//# sourceMappingURL=user.js.map