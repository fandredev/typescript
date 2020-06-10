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
exports.__esModule = true;
var base_1 = require("./base");
var N_Disease;
(function (N_Disease) {
    var Covid = /** @class */ (function (_super) {
        __extends(Covid, _super);
        function Covid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Covid;
    }(base_1.Base));
    N_Disease.Covid = Covid;
})(N_Disease || (N_Disease = {}));
var date = new Date();
var createdRegistry = new N_Disease.Covid('covid 19', 'América', 'Brazil', 'São Paulo', 'WHO', 739503, 304930, 396737, 38406, date.toString());
console.log(createdRegistry);
