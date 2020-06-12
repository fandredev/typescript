"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseListUsers;
(function (BaseListUsers) {
    var Users = (function () {
        function Users(id, name, age, email, password, stores) {
            this.id = id;
            this.name = name;
            this.age = age;
            this.email = email;
            this.password = password;
            this.stores = stores;
        }
        return Users;
    }());
    BaseListUsers.Users = Users;
})(BaseListUsers || (BaseListUsers = {}));
var ListUsersWithHTML;
(function (ListUsersWithHTML) {
    var ObjectUser = (function (_super) {
        __extends(ObjectUser, _super);
        function ObjectUser(id, name, age, email, password, stores) {
            var _this = _super.call(this, id, name, age, email, password, stores) || this;
            _this.id = id;
            _this.name = name;
            _this.age = age;
            _this.email = email;
            _this.password = password;
            _this.stores = stores;
            return _this;
        }
        return ObjectUser;
    }(BaseListUsers.Users));
    ListUsersWithHTML.ObjectUser = ObjectUser;
})(ListUsersWithHTML || (ListUsersWithHTML = {}));
var created = new ListUsersWithHTML.ObjectUser(1, 'Felipe', 19, 'profissionalf.andre@gmail.com', 2323131, [{
        main: 'Adaga 9201',
        second: 'Lojinha do zé',
        extra: 'Loja do xin'
    }]);
console.log(created);
