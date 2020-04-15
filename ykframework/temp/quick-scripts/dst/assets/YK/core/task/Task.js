
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
    Task.prototype.execute = function (owner) {
        if (owner === void 0) { owner = null; }
        this.mProgress = 0;
        if (!this.isRunning) {
            TimeDelay_1.TimeDelay.instance.addUpdate(this.update, this, [owner]);
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
            TimeDelay_1.TimeDelay.instance.removeUpdate(this.update, this);
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
        this.onStop();
    };
    Task.prototype.reset = function () {
        this.latch = false;
        this.mStatus = Status.None;
        TimeDelay_1.TimeDelay.instance.removeUpdate(this.update, this);
        this.onReset();
        this.onForcedStop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHRhc2tcXFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUErQztBQUcvQyxJQUFZLE1BS1g7QUFMRCxXQUFZLE1BQU07SUFDZCxtQ0FBUSxDQUFBO0lBQ1IseUNBQU8sQ0FBQTtJQUNQLHlDQUFPLENBQUE7SUFDUCx5Q0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUtqQjtBQUVEO0lBQUE7UUFFYyxZQUFPLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBOEd4QixDQUFDO0lBeEdHLHNCQUFXLDBCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR00sMEJBQVcsR0FBbEI7UUFFSSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQVcsd0JBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVywwQkFBUTthQUFuQjtZQUNJLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFTSwwQkFBVyxHQUFsQixVQUFtQixRQUFjO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxzQkFBTyxH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O0lBRVMsd0JBQVMsR0FBbkI7SUFDQSxDQUFDO0lBRVMsdUJBQVEsR0FBbEI7SUFDQSxDQUFDO0lBRVMscUJBQU0sR0FBaEI7SUFDQSxDQUFDO0lBRVMsc0JBQU8sR0FBakI7SUFFQSxDQUFDO0lBRVMsMkJBQVksR0FBdEI7SUFDQSxDQUFDO0lBQ0wsV0FBQztBQUFELENBakhBLEFBaUhDLElBQUE7QUFqSHFCLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZURlbGF5IH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVEZWxheVwiO1xyXG5pbXBvcnQgeyBGdW5jIH0gZnJvbSBcIi4uL3V0aWxzL0xpc3RlbmVyXCI7XHJcblxyXG5leHBvcnQgZW51bSBTdGF0dXMge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBSdW5uaW5nLFxyXG4gICAgU3VjY2VzcyxcclxuICAgIEZhaWx1cmVcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhc2sge1xyXG4gICAgcHJpdmF0ZSBsYXRjaDogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBtU3RhdHVzOiBTdGF0dXMgPSBTdGF0dXMuTm9uZTtcclxuICAgIHByb3RlY3RlZCBtRXJyID0gXCJcIjtcclxuICAgIHByb3RlY3RlZCBtUHJvZ3Jlc3M6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBtT3duZXJTeXN0ZW06IGFueTtcclxuICAgIHByb3RlY3RlZCBtU3RhcnRlZFRpbWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBvbkZpbmlzaDogRnVuYztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubVByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZWxhcHNlZFRpbWUoKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNjLmRpcmVjdG9yLmdldFRvdGFsVGltZSgpIC0gdGhpcy5tU3RhcnRlZFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzdGF0dXMoKTogU3RhdHVzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tU3RhdHVzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRhc2tOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBlcnJJbmZvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubUVycjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzUnVubmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT0gU3RhdHVzLlJ1bm5pbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENvbXBsZXRlKGNhbGxiYWNrOiBGdW5jKTogVGFzayB7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjdXRlKG93bmVyOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5tUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgVGltZURlbGF5Lmluc3RhbmNlLmFkZFVwZGF0ZSh0aGlzLnVwZGF0ZSwgdGhpcywgW293bmVyXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpY2sob3duZXI6IGFueSk6IFN0YXR1cyB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IFN0YXR1cy5SdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5sYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WmguaenOS7u+WKoee7k+adn+S6hui3s+i/h+i/meS4gOW4py8vXHJcbiAgICAgICAgaWYgKHRoaXMubGF0Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1TdGFydGVkVGltZSA9IGNjLmRpcmVjdG9yLmdldFRvdGFsVGltZSgpO1xyXG4gICAgICAgIHRoaXMubVN0YXR1cyA9IFN0YXR1cy5SdW5uaW5nO1xyXG4gICAgICAgIHRoaXMubU93bmVyU3lzdGVtID0gb3duZXI7XHJcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGUoKTtcclxuICAgICAgICBpZiAoU3RhdHVzLlJ1bm5pbmcgPT0gdGhpcy5tU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZShvd25lcjogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGljayhvd25lcikgIT0gU3RhdHVzLlJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25GaW5pc2ggIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmluaXNoLnJ1bihbdGhpcy5zdGF0dXMgPT0gU3RhdHVzLlN1Y2Nlc3NdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBUaW1lRGVsYXkuaW5zdGFuY2UucmVtb3ZlVXBkYXRlKHRoaXMudXBkYXRlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuZEFjdGlvbihzdWNjZXNzID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSBTdGF0dXMuUnVubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLm9uRm9yY2VkU3RvcCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGF0Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubVN0YXR1cyA9IHN1Y2Nlc3MgPyBTdGF0dXMuU3VjY2VzcyA6IFN0YXR1cy5GYWlsdXJlO1xyXG4gICAgICAgIHRoaXMubVByb2dyZXNzID0gdGhpcy5tU3RhdHVzID09IFN0YXR1cy5TdWNjZXNzID8gMSA6IDA7XHJcblxyXG4gICAgICAgIHRoaXMub25TdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubGF0Y2ggPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubVN0YXR1cyA9IFN0YXR1cy5Ob25lO1xyXG4gICAgICAgIFRpbWVEZWxheS5pbnN0YW5jZS5yZW1vdmVVcGRhdGUodGhpcy51cGRhdGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZXNldCgpO1xyXG4gICAgICAgIHRoaXMub25Gb3JjZWRTdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRXhlY3V0ZSgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RvcCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZXNldCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRm9yY2VkU3RvcCgpIHtcclxuICAgIH1cclxufSJdfQ==