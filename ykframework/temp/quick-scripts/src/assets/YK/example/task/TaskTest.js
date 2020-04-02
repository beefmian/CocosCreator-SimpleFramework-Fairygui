"use strict";
cc._RF.push(module, '2a09alK69RFgZYPGyrx1xvk', 'TaskTest');
// YK/example/task/TaskTest.ts

Object.defineProperty(exports, "__esModule", { value: true });
var YK = require("../../YK");
var LogTask = /** @class */ (function (_super) {
    __extends(LogTask, _super);
    function LogTask(log) {
        var _this = _super.call(this) || this;
        _this.log = log;
        return _this;
    }
    LogTask.prototype.onExecute = function () {
        var _this = this;
        _super.prototype.onExecute.call(this);
        //YK.Timer
        YK.TimeDelay.instance.Add(1, 1, function () {
            _this.endAction(true);
        }, this);
        console.log(Date.now(), this.log);
    };
    return LogTask;
}(YK.Task));
var TaskTest = /** @class */ (function () {
    function TaskTest() {
    }
    TaskTest.test = function () {
        console.log("开始任务系统测试");
        var parallel = new YK.TaskList(YK.ActionsExecutionMode.RunInParallel);
        var sequence = new YK.TaskList(YK.ActionsExecutionMode.RunInSequence);
        sequence.addTask(new LogTask("顺序测试1"))
            .addTask(new LogTask("顺序测试2"))
            .addTask(new LogTask("顺序测试3"));
        parallel.addTask(new LogTask("并行测试1"))
            .addTask(new LogTask("并行测试2"))
            .addTask(new LogTask("并行测试3"));
        var task = new YK.TaskList(YK.ActionsExecutionMode.RunInParallel)
            .addTask(sequence)
            .addTask(parallel)
            .execute(null, YK.Func.create(function () {
            console.log("任务完成");
        }, this));
    };
    return TaskTest;
}());
exports.TaskTest = TaskTest;

cc._RF.pop();