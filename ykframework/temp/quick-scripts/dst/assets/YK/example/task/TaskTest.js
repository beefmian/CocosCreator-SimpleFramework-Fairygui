
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
        YK.TimeDelay.instance.add(1, 1, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXHRhc2tcXFRhc2tUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFDL0I7SUFBc0IsMkJBQU87SUFHekIsaUJBQVksR0FBVztRQUF2QixZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7SUFDbkIsQ0FBQztJQUVTLDJCQUFTLEdBQW5CO1FBQUEsaUJBTUM7UUFMRyxpQkFBTSxTQUFTLFdBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM1QixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsY0FBQztBQUFELENBZkEsQUFlQyxDQWZxQixFQUFFLENBQUMsSUFBSSxHQWU1QjtBQUVEO0lBQUE7SUFvQkEsQ0FBQztJQW5CVSxhQUFJLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QixPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVuQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QixPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVuQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQzthQUM1RCxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQ2pCLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDakIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFlLIGZyb20gXCIuLi8uLi9ZS1wiO1xyXG5jbGFzcyBMb2dUYXNrIGV4dGVuZHMgWUsuVGFzayB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvZzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxvZyA9IGxvZztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FeGVjdXRlKCkge1xyXG4gICAgICAgIHN1cGVyLm9uRXhlY3V0ZSgpO1xyXG4gICAgICAgIFlLLlRpbWVEZWxheS5pbnN0YW5jZS5hZGQoMSwgMSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEFjdGlvbih0cnVlKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhEYXRlLm5vdygpLCB0aGlzLmxvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrVGVzdCB7XHJcbiAgICBzdGF0aWMgdGVzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW8gOWni+S7u+WKoeezu+e7n+a1i+ivlVwiKVxyXG4gICAgICAgIGxldCBwYXJhbGxlbCA9IG5ldyBZSy5UYXNrTGlzdChZSy5BY3Rpb25zRXhlY3V0aW9uTW9kZS5SdW5JblBhcmFsbGVsKTtcclxuICAgICAgICBsZXQgc2VxdWVuY2UgPSBuZXcgWUsuVGFza0xpc3QoWUsuQWN0aW9uc0V4ZWN1dGlvbk1vZGUuUnVuSW5TZXF1ZW5jZSk7XHJcbiAgICAgICAgc2VxdWVuY2UuYWRkVGFzayhuZXcgTG9nVGFzayhcIumhuuW6j+a1i+ivlTFcIikpXHJcbiAgICAgICAgICAgIC5hZGRUYXNrKG5ldyBMb2dUYXNrKFwi6aG65bqP5rWL6K+VMlwiKSlcclxuICAgICAgICAgICAgLmFkZFRhc2sobmV3IExvZ1Rhc2soXCLpobrluo/mtYvor5UzXCIpKTtcclxuXHJcbiAgICAgICAgcGFyYWxsZWwuYWRkVGFzayhuZXcgTG9nVGFzayhcIuW5tuihjOa1i+ivlTFcIikpXHJcbiAgICAgICAgICAgIC5hZGRUYXNrKG5ldyBMb2dUYXNrKFwi5bm26KGM5rWL6K+VMlwiKSlcclxuICAgICAgICAgICAgLmFkZFRhc2sobmV3IExvZ1Rhc2soXCLlubbooYzmtYvor5UzXCIpKTtcclxuXHJcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgWUsuVGFza0xpc3QoWUsuQWN0aW9uc0V4ZWN1dGlvbk1vZGUuUnVuSW5QYXJhbGxlbClcclxuICAgICAgICAgICAgLmFkZFRhc2soc2VxdWVuY2UpXHJcbiAgICAgICAgICAgIC5hZGRUYXNrKHBhcmFsbGVsKVxyXG4gICAgICAgICAgICAuZXhlY3V0ZShudWxsLCBZSy5GdW5jLmNyZWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS7u+WKoeWujOaIkFwiKTtcclxuICAgICAgICAgICAgfSwgdGhpcykpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=