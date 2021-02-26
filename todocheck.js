"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Todocheck = void 0;
var todoManager_1 = require("./todoManager");
var Todocheck = /** @class */ (function (_super) {
    __extends(Todocheck, _super);
    function Todocheck(date) {
        var _this = _super.call(this, "check") || this;
        _this.date = "";
        _this.date = date;
        return _this;
    }
    Todocheck.prototype.getTaskWithDate = function () {
        return "task = " + this.task + " date = " + this.date;
    };
    return Todocheck;
}(todoManager_1.TodoManager));
exports.Todocheck = Todocheck;
