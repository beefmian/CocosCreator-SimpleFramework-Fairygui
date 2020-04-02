
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/task/TaskList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHRhc2tcXFRhc2tMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBb0M7QUFFcEMsSUFBWSxvQkFHWDtBQUhELFdBQVksb0JBQW9CO0lBQzVCLGlGQUFhLENBQUE7SUFDYixpRkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUcvQjtBQUVEO0lBQThCLDRCQUFJO0lBb0Y5QixrQkFBWSxhQUFtQztRQUEvQyxZQUNJLGlCQUFPLFNBRVY7UUF0Rk0sYUFBTyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7UUFDNUIsY0FBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDL0IsbUJBQWEsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7UUFtRnRELEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOztJQUN2QyxDQUFDO0lBakZELHNCQUFXLDhCQUFRO2FBQW5CO1lBQ0ksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDbkM7WUFDRCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVTLDRCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENB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LElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBTUwsZUFBQztBQUFELENBeEZBLEFBd0ZDLENBeEY2QixXQUFJLEdBd0ZqQztBQXhGWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RhdHVzLCBUYXNrfSBmcm9tIFwiLi9UYXNrXCI7XHJcblxyXG5leHBvcnQgZW51bSBBY3Rpb25zRXhlY3V0aW9uTW9kZSB7XHJcbiAgICBSdW5JblNlcXVlbmNlLFxyXG4gICAgUnVuSW5QYXJhbGxlbFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza0xpc3QgZXh0ZW5kcyBUYXNrIHtcclxuICAgIHB1YmxpYyBhY3Rpb25zID0gbmV3IEFycmF5PFRhc2s+KCk7XHJcbiAgICBwdWJsaWMgZmluaXNoZWQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHVibGljIGV4ZWN1dGlvbk1vZGUgPSBBY3Rpb25zRXhlY3V0aW9uTW9kZS5SdW5JblNlcXVlbmNlO1xyXG4gICAgcHJpdmF0ZSBtQ3VySW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGN1ciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3VyICs9IHRoaXMuYWN0aW9uc1tpXS5wcm9ncmVzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1ciAvIHRoaXMuYWN0aW9ucy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRXhlY3V0ZSgpIHtcclxuICAgICAgICB0aGlzLm1DdXJJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5maW5pc2hlZC5zcGxpY2UoMCwgdGhpcy5maW5pc2hlZC5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMubVByb2dyZXNzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIub25VcGRhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmV4ZWN1dGlvbk1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zRXhlY3V0aW9uTW9kZS5SdW5JblBhcmFsbGVsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1BhcmFsbGVsVGFzaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uc0V4ZWN1dGlvbk1vZGUuUnVuSW5TZXF1ZW5jZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJblNlcXVlbmNlVGFzaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tQYXJhbGxlbFRhc2soKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmluaXNoZWQuZmluZEluZGV4KGEgPT4gYSA9PSBpKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5hY3Rpb25zW2ldLnRpY2sodGhpcy5tT3duZXJTeXN0ZW0pO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IFN0YXR1cy5GYWlsdXJlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1FcnIgPSB0aGlzLmFjdGlvbnNbaV0uZXJySW5mbztcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQWN0aW9uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBTdGF0dXMuU3VjY2VzcykgdGhpcy5maW5pc2hlZC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maW5pc2hlZC5sZW5ndGggPT0gdGhpcy5hY3Rpb25zLmxlbmd0aCkgdGhpcy5lbmRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSW5TZXF1ZW5jZVRhc2soKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubUN1ckluZGV4OyBpIDwgdGhpcy5hY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5hY3Rpb25zW2ldLnRpY2sodGhpcy5tT3duZXJTeXN0ZW0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBTdGF0dXMuRmFpbHVyZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRBY3Rpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IFN0YXR1cy5SdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1DdXJJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZXNldCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNbaV0ucmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubUN1ckluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmZpbmlzaGVkLnNwbGljZSgwLCB0aGlzLmZpbmlzaGVkLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRhc2sodGFzazogVGFzayk6IFRhc2tMaXN0IHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaCh0YXNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleGVjdXRpb25Nb2RlOiBBY3Rpb25zRXhlY3V0aW9uTW9kZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5leGVjdXRpb25Nb2RlID0gZXhlY3V0aW9uTW9kZTtcclxuICAgIH1cclxufSJdfQ==