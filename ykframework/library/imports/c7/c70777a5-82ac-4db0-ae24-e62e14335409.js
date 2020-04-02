"use strict";
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