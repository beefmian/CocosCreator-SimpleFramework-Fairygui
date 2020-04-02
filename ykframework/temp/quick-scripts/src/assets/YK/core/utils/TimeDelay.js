"use strict";
cc._RF.push(module, '5a385fCWnBDxJSURsva7nxI', 'TimeDelay');
// YK/core/utils/TimeDelay.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Listener_1 = require("./Listener");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeDelay = /** @class */ (function (_super) {
    __extends(TimeDelay, _super);
    function TimeDelay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mUpdateListener = new Listener_1.Listener();
        /**
         * 当前事件执行的次数
         */
        _this.repeat = 0;
        _this.items = new Array();
        _this.toAdd = new Array();
        _this.toRemove = new Array();
        _this.pool = new Array();
        _this.lastTime = 0;
        _this.deltaTime = 0;
        return _this;
    }
    TimeDelay_1 = TimeDelay;
    Object.defineProperty(TimeDelay, "instance", {
        get: function () {
            if (this.mInstance == null && !TimeDelay_1.isQuiting) {
                var no = new cc.Node("_TimeDelay");
                cc.game.addPersistRootNode(no);
                this.mInstance = no.addComponent(TimeDelay_1);
            }
            return this.mInstance;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * 添加一个每帧回调
     */
    TimeDelay.prototype.AddUpdate = function (callback, thisObj, callbackParam) {
        if (callbackParam === void 0) { callbackParam = null; }
        if (!this.mUpdateListener.has(callback, thisObj)) {
            this.mUpdateListener.add(callback, thisObj, callbackParam);
        }
        else {
            console.warn("repeat add  update");
        }
    };
    /**
     * 移除一个每帧回调
     */
    TimeDelay.prototype.RemoveUpdate = function (callback, thisObj) {
        if (this.mUpdateListener.has(callback, thisObj)) {
            this.mUpdateListener.remove(callback, thisObj);
        }
    };
    TimeDelay.prototype.GetFromPool = function () {
        var t;
        if (this.pool.length > 0) {
            t = this.pool.pop();
        }
        else
            t = new TimeDelayData();
        return t;
    };
    TimeDelay.prototype.ReturnToPool = function (t) {
        t.set(0, 0, null, null, null);
        t.elapsed = 0;
        t.deleted = false;
        this.pool.push(t);
    };
    TimeDelay.prototype.Exists = function (callback, thisObj) {
        var t = this.toAdd.find(function (value, index, obj) {
            return value.callback == callback && value.thisObj == thisObj;
        });
        if (t != null) {
            return true;
        }
        t = this.items.find(function (value, index, obj) {
            return value.callback == callback && value.thisObj == thisObj;
        });
        if (t != null && !t.deleted) {
            return true;
        }
        return false;
    };
    TimeDelay.prototype.Add = function (interval, repeat, callback, thisObj, callbackParam) {
        if (callbackParam === void 0) { callbackParam = null; }
        var t;
        t = this.items.find(function (value, index, obj) {
            return value.callback == callback && value.thisObj == thisObj;
        });
        if (t == null) {
            t = this.toAdd.find(function (value, index, obj) {
                return value.callback == callback && value.thisObj == thisObj;
            });
        }
        if (t == null) {
            t = this.GetFromPool();
            this.toAdd.push(t);
        }
        t.set(interval, repeat, callback, thisObj, callbackParam);
        t.deleted = false;
        t.elapsed = 0;
    };
    TimeDelay.prototype.Remove = function (callback, thisObj) {
        var findindex = -1;
        var t = this.toAdd.find(function (value, index, obj) {
            if (value.callback == callback && value.thisObj == thisObj) {
                findindex = index;
                return true;
            }
            else {
                return false;
            }
        });
        if (t != null) {
            this.toAdd.splice(findindex, 1);
            this.ReturnToPool(t);
        }
        t = this.items.find(function (value, index, obj) { return value.callback == callback && value.thisObj == thisObj; });
        if (t != null)
            t.deleted = true;
    };
    TimeDelay.prototype.start = function () {
        this.lastTime = Date.now();
    };
    TimeDelay.prototype.update = function (dt) {
        if (this.mUpdateListener != null) {
            this.mUpdateListener.run();
        }
        this.deltaTime = (Date.now() - this.lastTime) / 1000;
        this.lastTime = Date.now();
        for (var index = 0; index < this.items.length; index++) {
            var t = this.items[index];
            if (t.deleted) {
                this.toRemove.push(t);
                continue;
            }
            t.elapsed += this.deltaTime;
            if (t.elapsed < t.interval) {
                continue;
            }
            t.elapsed = 0;
            if (t.repeat > 0) {
                t.repeat--;
                if (t.repeat == 0) {
                    t.deleted = true;
                    this.toRemove.push(t);
                }
            }
            this.repeat = t.repeat;
            if (t.callback != null) {
                try {
                    t.callback.call(t.thisObj, t.param);
                }
                catch (error) {
                    t.deleted = true;
                }
            }
        }
        var len = this.toRemove.length;
        while (len) {
            var t_1 = this.toRemove.pop();
            var index_1 = this.items.indexOf(t_1);
            if (t_1.deleted && index_1 != -1) {
                this.items.splice(index_1, 1);
                this.ReturnToPool(t_1);
            }
            len--;
        }
        len = this.toAdd.length;
        while (len) {
            var t_2 = this.toAdd.pop();
            this.items.push(t_2);
            len--;
        }
    };
    var TimeDelay_1;
    TimeDelay.isQuiting = false;
    TimeDelay.mInstance = null;
    TimeDelay = TimeDelay_1 = __decorate([
        ccclass
    ], TimeDelay);
    return TimeDelay;
}(cc.Component));
exports.TimeDelay = TimeDelay;
var TimeDelayData = /** @class */ (function () {
    function TimeDelayData() {
    }
    TimeDelayData.prototype.set = function (interval, repeat, callback, thisObj, param) {
        this.interval = interval;
        this.repeat = repeat;
        this.callback = callback;
        this.param = param;
        this.thisObj = thisObj;
    };
    return TimeDelayData;
}());
exports.TimeDelayData = TimeDelayData;

cc._RF.pop();