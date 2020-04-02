
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/example/task/TaskTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXHRhc2tcXFRhc2tUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0I7SUFBc0IsMkJBQU87SUFHekIsaUJBQVksR0FBVztRQUF2QixZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7SUFDbkIsQ0FBQztJQUVTLDJCQUFTLEdBQW5CO1FBQUEsaUJBT0M7UUFORyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixVQUFVO1FBQ1YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCcUIsRUFBRSxDQUFDLElBQUksR0FnQjVCO0FBQ0Q7SUFBQTtJQW9CQSxDQUFDO0lBbkJVLGFBQUksR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRW5DLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRW5DLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO2FBQzVELE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDakIsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUNqQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWUsgZnJvbSBcIi4uLy4uL1lLXCI7XHJcbmNsYXNzIExvZ1Rhc2sgZXh0ZW5kcyBZSy5UYXNrIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubG9nID0gbG9nO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkV4ZWN1dGUoKSB7XHJcbiAgICAgICAgc3VwZXIub25FeGVjdXRlKCk7XHJcbiAgICAgICAgLy9ZSy5UaW1lclxyXG4gICAgICAgIFlLLlRpbWVEZWxheS5pbnN0YW5jZS5BZGQoMSwgMSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEFjdGlvbih0cnVlKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhEYXRlLm5vdygpLCB0aGlzLmxvZyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRhc2tUZXN0IHtcclxuICAgIHN0YXRpYyB0ZXN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5Lu75Yqh57O757uf5rWL6K+VXCIpXHJcbiAgICAgICAgbGV0IHBhcmFsbGVsID0gbmV3IFlLLlRhc2tMaXN0KFlLLkFjdGlvbnNFeGVjdXRpb25Nb2RlLlJ1bkluUGFyYWxsZWwpO1xyXG4gICAgICAgIGxldCBzZXF1ZW5jZSA9IG5ldyBZSy5UYXNrTGlzdChZSy5BY3Rpb25zRXhlY3V0aW9uTW9kZS5SdW5JblNlcXVlbmNlKTtcclxuICAgICAgICBzZXF1ZW5jZS5hZGRUYXNrKG5ldyBMb2dUYXNrKFwi6aG65bqP5rWL6K+VMVwiKSlcclxuICAgICAgICAgICAgLmFkZFRhc2sobmV3IExvZ1Rhc2soXCLpobrluo/mtYvor5UyXCIpKVxyXG4gICAgICAgICAgICAuYWRkVGFzayhuZXcgTG9nVGFzayhcIumhuuW6j+a1i+ivlTNcIikpO1xyXG5cclxuICAgICAgICBwYXJhbGxlbC5hZGRUYXNrKG5ldyBMb2dUYXNrKFwi5bm26KGM5rWL6K+VMVwiKSlcclxuICAgICAgICAgICAgLmFkZFRhc2sobmV3IExvZ1Rhc2soXCLlubbooYzmtYvor5UyXCIpKVxyXG4gICAgICAgICAgICAuYWRkVGFzayhuZXcgTG9nVGFzayhcIuW5tuihjOa1i+ivlTNcIikpO1xyXG5cclxuICAgICAgICBsZXQgdGFzayA9IG5ldyBZSy5UYXNrTGlzdChZSy5BY3Rpb25zRXhlY3V0aW9uTW9kZS5SdW5JblBhcmFsbGVsKVxyXG4gICAgICAgICAgICAuYWRkVGFzayhzZXF1ZW5jZSlcclxuICAgICAgICAgICAgLmFkZFRhc2socGFyYWxsZWwpXHJcbiAgICAgICAgICAgIC5leGVjdXRlKG51bGwsIFlLLkZ1bmMuY3JlYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Lu75Yqh5a6M5oiQXCIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==