"use strict";
cc._RF.push(module, '69371Q+3BBImK/ZttSLsstU', 'TaskList');
// YK/core/task/TaskList.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Task_1 = require("./Task");
var ActionsExecutionMode;
(function (ActionsExecutionMode) {
    ActionsExecutionMode[ActionsExecutionMode["RunInSequence"] = 0] = "RunInSequence";
    ActionsExecutionMode[ActionsExecutionMode["RunInParallel"] = 1] = "RunInParallel";
})(ActionsExecutionMode = exports.ActionsExecutionMode || (exports.ActionsExecutionMode = {}));
var TaskList = /** @class */ (function (_super) {
    __extends(TaskList, _super);
    function TaskList(executionMode) {
        var _this = _super.call(this) || this;
        _this.actions = new Array();
        _this.finished = new Array();
        _this.executionMode = ActionsExecutionMode.RunInSequence;
        _this.executionMode = executionMode;
        return _this;
    }
    Object.defineProperty(TaskList.prototype, "progress", {
        get: function () {
            var cur = 0;
            for (var i = 0; i < this.actions.length; i++) {
                cur += this.actions[i].progress;
            }
            return cur / this.actions.length;
        },
        enumerable: true,
        configurable: true
    });
    TaskList.prototype.onExecute = function () {
        this.mCurIndex = 0;
        this.finished.splice(0, this.finished.length);
        this.mProgress = 0;
    };
    TaskList.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        if (this.actions.length == 0) {
            this.endAction();
            return;
        }
        switch (this.executionMode) {
            case ActionsExecutionMode.RunInParallel:
                this.checkParallelTask();
                break;
            case ActionsExecutionMode.RunInSequence:
                this.checkInSequenceTask();
                break;
        }
    };
    TaskList.prototype.checkParallelTask = function () {
        var _loop_1 = function (i) {
            if (this_1.finished.findIndex(function (a) { return a == i; }) != -1)
                return "continue";
            var status = this_1.actions[i].tick(this_1.mOwnerSystem);
            if (status == Task_1.Status.Failure) {
                this_1.mErr = this_1.actions[i].errInfo;
                this_1.endAction(false);
                return { value: void 0 };
            }
            if (status == Task_1.Status.Success)
                this_1.finished.push(i);
        };
        var this_1 = this;
        for (var i = 0; i < this.actions.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (this.finished.length == this.actions.length)
            this.endAction();
    };
    TaskList.prototype.checkInSequenceTask = function () {
        for (var i = this.mCurIndex; i < this.actions.length; i++) {
            var status = this.actions[i].tick(this.mOwnerSystem);
            if (status == Task_1.Status.Failure) {
                this.endAction(false);
                return;
            }
            if (status == Task_1.Status.Running) {
                this.mCurIndex = i;
                return;
            }
        }
        this.endAction();
    };
    TaskList.prototype.onReset = function () {
        for (var i = 0; i < this.actions.length; i++) {
            this.actions[i].reset();
        }
        this.mCurIndex = 0;
        this.finished.splice(0, this.finished.length);
    };
    TaskList.prototype.addTask = function (task) {
        this.actions.push(task);
        return this;
    };
    return TaskList;
}(Task_1.Task));
exports.TaskList = TaskList;

cc._RF.pop();