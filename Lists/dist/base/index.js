"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseListUsers = void 0;
var BaseListUsers;
(function (BaseListUsers) {
    var Users = /** @class */ (function () {
        function Users(id, name, age, email, password) {
            this.id = id;
            this.name = name;
            this.age = age;
            this.email = email;
            this.password = password;
        }
        return Users;
    }());
    BaseListUsers.Users = Users;
})(BaseListUsers = exports.BaseListUsers || (exports.BaseListUsers = {}));
