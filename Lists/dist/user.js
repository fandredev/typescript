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
var ID;
(function (ID) {
    ID[ID["Primary"] = 1] = "Primary";
})(ID || (ID = {}));
var BaseListUsers;
(function (BaseListUsers) {
    var Users = /** @class */ (function () {
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
    var LU = /** @class */ (function (_super) {
        __extends(LU, _super);
        function LU(id, name, age, email, password, stores) {
            var _this = _super.call(this, id, name, age, email, password, stores) || this;
            _this.id = id;
            _this.name = name;
            _this.age = age;
            _this.email = email;
            _this.password = password;
            _this.stores = stores;
            return _this;
        }
        return LU;
    }(BaseListUsers.Users));
    ListUsersWithHTML.LU = LU;
})(ListUsersWithHTML || (ListUsersWithHTML = {}));
var created = new ListUsersWithHTML.LU(ID.Primary, 'Felipe', 19, 'profissionalf.andre@gmail.com', 'SA&&%%12?sq', [{
        main: 'Adaga 9201',
        second: 'Lojinha do zé',
        extra: 'Loja do xin'
    }]);
console.log(created);
