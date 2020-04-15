
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
            var v = cur / this.actions.length;
            v = isNaN(v) ? 0 : v;
            if (this.actions.length == 0)
                v = 1;
            return v;
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
                if (this_1.actions[i].onFinish != null)
                    this_1.actions[i].onFinish.run(true);
                return { value: void 0 };
            }
            if (status == Task_1.Status.Success) {
                this_1.finished.push(i);
                if (this_1.actions[i].onFinish != null)
                    this_1.actions[i].onFinish.run(true);
            }
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
                if (this.actions[i].onFinish != null)
                    this.actions[i].onFinish.run(false);
                return;
            }
            if (status == Task_1.Status.Running) {
                this.mCurIndex = i;
                return;
            }
            else {
                if (this.actions[i].onFinish != null)
                    this.actions[i].onFinish.run(true);
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
    TaskList.prototype.clear = function () {
        this.reset();
        this.onForcedStop();
        this.actions.splice(0, this.actions.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHRhc2tcXFRhc2tMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBcUM7QUFFckMsSUFBWSxvQkFHWDtBQUhELFdBQVksb0JBQW9CO0lBQzVCLGlGQUFhLENBQUE7SUFDYixpRkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUcvQjtBQUVEO0lBQThCLDRCQUFJO0lBK0Y5QixrQkFBWSxhQUFtQztRQUEvQyxZQUNJLGlCQUFPLFNBRVY7UUFqR00sYUFBTyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUE7UUFDM0IsY0FBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUE7UUFDOUIsbUJBQWEsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLENBQUE7UUE4RnJELEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBOztJQUN0QyxDQUFDO0lBNUZELHNCQUFXLDhCQUFRO2FBQW5CO1lBQ0ksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7YUFDbEM7WUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7WUFDakMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbkMsT0FBTyxDQUFDLENBQUE7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TSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0ExR0EsQUEwR0MsQ0ExRzZCLFdBQUksR0EwR2pDO0FBMUdZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdHVzLCBUYXNrIH0gZnJvbSBcIi4vVGFza1wiXHJcblxyXG5leHBvcnQgZW51bSBBY3Rpb25zRXhlY3V0aW9uTW9kZSB7XHJcbiAgICBSdW5JblNlcXVlbmNlLFxyXG4gICAgUnVuSW5QYXJhbGxlbFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza0xpc3QgZXh0ZW5kcyBUYXNrIHtcclxuICAgIHB1YmxpYyBhY3Rpb25zID0gbmV3IEFycmF5PFRhc2s+KClcclxuICAgIHB1YmxpYyBmaW5pc2hlZCA9IG5ldyBBcnJheTxudW1iZXI+KClcclxuICAgIHB1YmxpYyBleGVjdXRpb25Nb2RlID0gQWN0aW9uc0V4ZWN1dGlvbk1vZGUuUnVuSW5TZXF1ZW5jZVxyXG4gICAgcHJpdmF0ZSBtQ3VySW5kZXg6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBnZXQgcHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgbGV0IGN1ciA9IDBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjdXIgKz0gdGhpcy5hY3Rpb25zW2ldLnByb2dyZXNzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2ID0gY3VyIC8gdGhpcy5hY3Rpb25zLmxlbmd0aFxyXG4gICAgICAgIHYgPSBpc05hTih2KSA/IDAgOiB2XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9ucy5sZW5ndGggPT0gMCkgdiA9IDFcclxuICAgICAgICByZXR1cm4gdlxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkV4ZWN1dGUoKSB7XHJcbiAgICAgICAgdGhpcy5tQ3VySW5kZXggPSAwXHJcbiAgICAgICAgdGhpcy5maW5pc2hlZC5zcGxpY2UoMCwgdGhpcy5maW5pc2hlZC5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5tUHJvZ3Jlc3MgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLm9uVXBkYXRlKClcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQWN0aW9uKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5leGVjdXRpb25Nb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uc0V4ZWN1dGlvbk1vZGUuUnVuSW5QYXJhbGxlbDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQYXJhbGxlbFRhc2soKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zRXhlY3V0aW9uTW9kZS5SdW5JblNlcXVlbmNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0luU2VxdWVuY2VUYXNrKClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tQYXJhbGxlbFRhc2soKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmluaXNoZWQuZmluZEluZGV4KGEgPT4gYSA9PSBpKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmFjdGlvbnNbaV0udGljayh0aGlzLm1Pd25lclN5c3RlbSlcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBTdGF0dXMuRmFpbHVyZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tRXJyID0gdGhpcy5hY3Rpb25zW2ldLmVyckluZm9cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQWN0aW9uKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uc1tpXS5vbkZpbmlzaCAhPSBudWxsKSB0aGlzLmFjdGlvbnNbaV0ub25GaW5pc2gucnVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gU3RhdHVzLlN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWQucHVzaChpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uc1tpXS5vbkZpbmlzaCAhPSBudWxsKSB0aGlzLmFjdGlvbnNbaV0ub25GaW5pc2gucnVuKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpbmlzaGVkLmxlbmd0aCA9PSB0aGlzLmFjdGlvbnMubGVuZ3RoKSB0aGlzLmVuZEFjdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0luU2VxdWVuY2VUYXNrKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1DdXJJbmRleDsgaSA8IHRoaXMuYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRoaXMuYWN0aW9uc1tpXS50aWNrKHRoaXMubU93bmVyU3lzdGVtKVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBTdGF0dXMuRmFpbHVyZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRBY3Rpb24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb25zW2ldLm9uRmluaXNoICE9IG51bGwpIHRoaXMuYWN0aW9uc1tpXS5vbkZpbmlzaC5ydW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBTdGF0dXMuUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tQ3VySW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbnNbaV0ub25GaW5pc2ggIT0gbnVsbCkgdGhpcy5hY3Rpb25zW2ldLm9uRmluaXNoLnJ1bih0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kQWN0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZXNldCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNbaV0ucmVzZXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tQ3VySW5kZXggPSAwXHJcbiAgICAgICAgdGhpcy5maW5pc2hlZC5zcGxpY2UoMCwgdGhpcy5maW5pc2hlZC5sZW5ndGgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRhc2sodGFzazogVGFzayk6IFRhc2tMaXN0IHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaCh0YXNrKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhlY3V0aW9uTW9kZTogQWN0aW9uc0V4ZWN1dGlvbk1vZGUpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5leGVjdXRpb25Nb2RlID0gZXhlY3V0aW9uTW9kZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldCgpXHJcbiAgICAgICAgdGhpcy5vbkZvcmNlZFN0b3AoKVxyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5zcGxpY2UoMCwgdGhpcy5hY3Rpb25zLmxlbmd0aClcclxuICAgIH1cclxufSJdfQ==