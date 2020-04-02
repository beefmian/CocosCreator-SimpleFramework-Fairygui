
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/task/Task.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7077elgqxNsK4k5i4UM1QJ', 'Task');
// YK/core/task/Task.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TimeDelay_1 = require("../utils/TimeDelay");
var Status;
(function (Status) {
    Status[Status["None"] = 0] = "None";
    Status[Status["Running"] = 1] = "Running";
    Status[Status["Success"] = 2] = "Success";
    Status[Status["Failure"] = 3] = "Failure";
})(Status = exports.Status || (exports.Status = {}));
var Task = /** @class */ (function () {
    function Task() {
        this.mStatus = Status.None;
        this.mErr = "";
    }
    Object.defineProperty(Task.prototype, "progress", {
        get: function () {
            return this.mProgress;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.elapsedTime = function () {
        return cc.director.getTotalTime() - this.mStartedTime;
    };
    Object.defineProperty(Task.prototype, "status", {
        get: function () {
            return this.mStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "taskName", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "errInfo", {
        get: function () {
            return this.mErr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "isRunning", {
        get: function () {
            return this.status == Status.Running;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.setComplete = function (callback) {
        this.onFinish = callback;
        return this;
    };
    Task.prototype.execute = function (owner, callback) {
        if (owner === void 0) { owner = null; }
        if (callback === void 0) { callback = null; }
        this.mProgress = 0;
        this.onFinish = callback;
        if (!this.isRunning) {
            TimeDelay_1.TimeDelay.instance.AddUpdate(this.update, this, [owner]);
        }
    };
    Task.prototype.tick = function (owner) {
        if (this.status == Status.Running) {
            this.onUpdate();
            this.latch = false;
            return this.mStatus;
        }
        //如果任务结束了跳过这一帧//
        if (this.latch) {
            this.latch = false;
            return this.mStatus;
        }
        this.mStartedTime = cc.director.getTotalTime();
        this.mStatus = Status.Running;
        this.mOwnerSystem = owner;
        this.onExecute();
        if (Status.Running == this.mStatus) {
            this.onUpdate();
        }
        return this.mStatus;
    };
    Task.prototype.update = function (owner) {
        if (this.tick(owner) != Status.Running) {
            if (this.onFinish != null) {
                this.onFinish.run([this.status == Status.Success]);
            }
        }
    };
    Task.prototype.endAction = function (success) {
        if (success === void 0) { success = true; }
        if (this.status != Status.Running) {
            this.onForcedStop();
            return;
        }
        this.latch = true;
        this.mStatus = success ? Status.Success : Status.Failure;
        this.mProgress = this.mStatus == Status.Success ? 1 : 0;
        TimeDelay_1.TimeDelay.instance.RemoveUpdate(this.update, this);
        this.onStop();
    };
    Task.prototype.reset = function () {
        this.mStatus = Status.None;
        this.onReset();
    };
    Task.prototype.onExecute = function () {
    };
    Task.prototype.onUpdate = function () {
    };
    Task.prototype.onStop = function () {
    };
    Task.prototype.onReset = function () {
    };
    Task.prototype.onForcedStop = function () {
    };
    return Task;
}());
exports.Task = Task;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHRhc2tcXFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUErQztBQUcvQyxJQUFZLE1BS1g7QUFMRCxXQUFZLE1BQU07SUFDZCxtQ0FBUSxDQUFBO0lBQ1IseUNBQU8sQ0FBQTtJQUNQLHlDQUFPLENBQUE7SUFDUCx5Q0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUtqQjtBQUVEO0lBQUE7UUFFWSxZQUFPLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM1QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBMkd4QixDQUFDO0lBckdHLHNCQUFXLDBCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR00sMEJBQVcsR0FBbEI7UUFFSSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQVcsd0JBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVywwQkFBUTthQUFuQjtZQUNJLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFTSwwQkFBVyxHQUFsQixVQUFtQixRQUFjO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxzQkFBTyxH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aEI7SUFDQSxDQUFDO0lBRVMsc0JBQU8sR0FBakI7SUFFQSxDQUFDO0lBRVMsMkJBQVksR0FBdEI7SUFDQSxDQUFDO0lBQ0wsV0FBQztBQUFELENBOUdBLEFBOEdDLElBQUE7QUE5R3FCLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZURlbGF5IH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVEZWxheVwiO1xyXG5pbXBvcnQgeyBGdW5jIH0gZnJvbSBcIi4uL3V0aWxzL0xpc3RlbmVyXCI7XHJcblxyXG5leHBvcnQgZW51bSBTdGF0dXMge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBSdW5uaW5nLFxyXG4gICAgU3VjY2VzcyxcclxuICAgIEZhaWx1cmVcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhc2sge1xyXG4gICAgcHJpdmF0ZSBsYXRjaDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbVN0YXR1czogU3RhdHVzID0gU3RhdHVzLk5vbmU7XHJcbiAgICBwcm90ZWN0ZWQgbUVyciA9IFwiXCI7XHJcbiAgICBwcm90ZWN0ZWQgbVByb2dyZXNzOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgbU93bmVyU3lzdGVtOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgbVN0YXJ0ZWRUaW1lOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgb25GaW5pc2g6IEZ1bmM7XHJcblxyXG4gICAgcHVibGljIGdldCBwcm9ncmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1Qcm9ncmVzcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGVsYXBzZWRUaW1lKCk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIHJldHVybiBjYy5kaXJlY3Rvci5nZXRUb3RhbFRpbWUoKSAtIHRoaXMubVN0YXJ0ZWRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3RhdHVzKCk6IFN0YXR1cyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubVN0YXR1cztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCB0YXNrTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZXJySW5mbygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1FcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc1J1bm5pbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzID09IFN0YXR1cy5SdW5uaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb21wbGV0ZShjYWxsYmFjazogRnVuYyk6IFRhc2sge1xyXG4gICAgICAgIHRoaXMub25GaW5pc2ggPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZShvd25lcjogYW55ID0gbnVsbCwgY2FsbGJhY2s6IEZ1bmMgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5tUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMub25GaW5pc2ggPSBjYWxsYmFjaztcclxuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIFRpbWVEZWxheS5pbnN0YW5jZS5BZGRVcGRhdGUodGhpcy51cGRhdGUsIHRoaXMsIFtvd25lcl0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aWNrKG93bmVyOiBhbnkpOiBTdGF0dXMge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSBTdGF0dXMuUnVubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubVN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lpoLmnpzku7vliqHnu5PmnZ/kuobot7Pov4fov5nkuIDluKcvL1xyXG4gICAgICAgIGlmICh0aGlzLmxhdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubVN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tU3RhcnRlZFRpbWUgPSBjYy5kaXJlY3Rvci5nZXRUb3RhbFRpbWUoKTtcclxuICAgICAgICB0aGlzLm1TdGF0dXMgPSBTdGF0dXMuUnVubmluZztcclxuICAgICAgICB0aGlzLm1Pd25lclN5c3RlbSA9IG93bmVyO1xyXG4gICAgICAgIHRoaXMub25FeGVjdXRlKCk7XHJcbiAgICAgICAgaWYgKFN0YXR1cy5SdW5uaW5nID09IHRoaXMubVN0YXR1cykge1xyXG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1TdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGUob3duZXI6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpY2sob3duZXIpICE9IFN0YXR1cy5SdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uRmluaXNoICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkZpbmlzaC5ydW4oW3RoaXMuc3RhdHVzID09IFN0YXR1cy5TdWNjZXNzXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuZEFjdGlvbihzdWNjZXNzID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSBTdGF0dXMuUnVubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLm9uRm9yY2VkU3RvcCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGF0Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubVN0YXR1cyA9IHN1Y2Nlc3MgPyBTdGF0dXMuU3VjY2VzcyA6IFN0YXR1cy5GYWlsdXJlO1xyXG4gICAgICAgIHRoaXMubVByb2dyZXNzID0gdGhpcy5tU3RhdHVzID09IFN0YXR1cy5TdWNjZXNzID8gMSA6IDA7XHJcbiAgICAgICAgVGltZURlbGF5Lmluc3RhbmNlLlJlbW92ZVVwZGF0ZSh0aGlzLnVwZGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5tU3RhdHVzID0gU3RhdHVzLk5vbmU7XHJcbiAgICAgICAgdGhpcy5vblJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRXhlY3V0ZSgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RvcCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZXNldCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRm9yY2VkU3RvcCgpIHtcclxuICAgIH1cclxufSJdfQ==