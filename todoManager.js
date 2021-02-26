"use strict";
exports.__esModule = true;
exports.TodoManager = void 0;
var TodoManager = /** @class */ (function () {
    function TodoManager(task) {
        // this is used to access the data from a class
        this.task = task;
    }
    // the function into a class
    TodoManager.prototype.getTask = function () {
        return this.task;
    };
    return TodoManager;
}());
exports.TodoManager = TodoManager;
