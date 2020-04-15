
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/utils/TimeDelay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    TimeDelay.prototype.addUpdate = function (callback, thisObj) {
        var callbackParam = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            callbackParam[_i - 2] = arguments[_i];
        }
        var _a;
        if (!this.mUpdateListener.has(callback, thisObj)) {
            (_a = this.mUpdateListener).add.apply(_a, [callback, thisObj].concat(callbackParam));
        }
        else {
            console.warn("repeat add  update");
        }
    };
    /**
     * 移除一个每帧回调
     */
    TimeDelay.prototype.removeUpdate = function (callback, thisObj) {
        if (this.mUpdateListener.has(callback, thisObj)) {
            this.mUpdateListener.remove(callback, thisObj);
        }
    };
    TimeDelay.prototype.getFromPool = function () {
        var t;
        if (this.pool.length > 0) {
            t = this.pool.pop();
        }
        else
            t = new TimeDelayData();
        return t;
    };
    TimeDelay.prototype.returnToPool = function (t) {
        t.set(0, 0, null, null, null);
        t.elapsed = 0;
        t.deleted = false;
        this.pool.push(t);
    };
    TimeDelay.prototype.exists = function (callback, thisObj) {
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
    TimeDelay.prototype.add = function (interval, repeat, callback, thisObj) {
        var callbackParam = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            callbackParam[_i - 4] = arguments[_i];
        }
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
            t = this.getFromPool();
            this.toAdd.push(t);
        }
        t.set.apply(t, [interval, repeat, callback, thisObj].concat(callbackParam));
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
            this.returnToPool(t);
        }
        t = this.items.find(function (value, index, obj) { return value.callback == callback && value.thisObj == thisObj; });
        if (t != null)
            t.deleted = true;
    };
    TimeDelay.prototype.start = function () {
        this.lastTime = Date.now();
    };
    TimeDelay.prototype.update = function (dt) {
        var _a;
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
                    (_a = t.callback).call.apply(_a, [t.thisObj].concat(t.param));
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
                this.returnToPool(t_1);
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
    TimeDelayData.prototype.set = function (interval, repeat, callback, thisObj) {
        var param = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            param[_i - 4] = arguments[_i];
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHV0aWxzXFxUaW1lRGVsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRTVDO0lBQStCLDZCQUFZO0lBRDNDO1FBQUEscUVBMExDO1FBM0tXLHFCQUFlLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUF1Qm5EOztXQUVHO1FBQ0ksWUFBTSxHQUFXLENBQUMsQ0FBQTtRQUNqQixXQUFLLEdBQXlCLElBQUksS0FBSyxFQUFpQixDQUFBO1FBQ3hELFdBQUssR0FBeUIsSUFBSSxLQUFLLEVBQWlCLENBQUE7UUFDeEQsY0FBUSxHQUF5QixJQUFJLEtBQUssRUFBaUIsQ0FBQTtRQUMzRCxVQUFJLEdBQXlCLElBQUksS0FBSyxFQUFpQixDQUFBO1FBZ0Z2RCxjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3BCLGVBQVMsR0FBVyxDQUFDLENBQUE7O0lBNERqQyxDQUFDO2tCQXpMWSxTQUFTO0lBSWxCLHNCQUFrQixxQkFBUTthQUExQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNoRCxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ2xDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFTLENBQUMsQ0FBQTthQUM5QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUdrRCxDQUFDO0lBRXBEOztPQUVHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsUUFBa0IsRUFBRSxPQUFZO1FBQUUsdUJBQXFC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LENBQUMsQ0FBQTtnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFDLENBQUMsQ0FBQTthQUN2QjtZQUNELEdBQUcsRUFBRSxDQUFBO1NBQ1I7UUFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDdkIsT0FBTyxHQUFHLEVBQUU7WUFDUixJQUFJLEdBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFBO1lBQ2xCLEdBQUcsRUFBRSxDQUFBO1NBQ1I7SUFDTCxDQUFDOztJQXJMYSxtQkFBUyxHQUFZLEtBQUssQ0FBQztJQUMxQixtQkFBUyxHQUFjLElBQUksQ0FBQTtJQUhqQyxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBeUxyQjtJQUFELGdCQUFDO0NBekxELEFBeUxDLENBekw4QixFQUFFLENBQUMsU0FBUyxHQXlMMUM7QUF6TFksOEJBQVM7QUEyTHRCO0lBQUE7SUFnQkEsQ0FBQztJQVBVLDJCQUFHLEdBQVYsVUFBVyxRQUFnQixFQUFFLE1BQWMsRUFBRSxRQUF1QixFQUFFLE9BQVk7UUFBRSxlQUFhO2FBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtZQUFiLDhCQUFhOztRQUM3RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUMxQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIsIEZ1bmMgfSBmcm9tIFwiLi9MaXN0ZW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRpbWVEZWxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1F1aXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3RhdGljIG1JbnN0YW5jZTogVGltZURlbGF5ID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubUluc3RhbmNlID09IG51bGwgJiYgIVRpbWVEZWxheS5pc1F1aXRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IG5vID0gbmV3IGNjLk5vZGUoXCJfVGltZURlbGF5XCIpXHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKG5vKTtcclxuICAgICAgICAgICAgdGhpcy5tSW5zdGFuY2UgPSBuby5hZGRDb21wb25lbnQoVGltZURlbGF5KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tSW5zdGFuY2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtVXBkYXRlTGlzdGVuZXI6IExpc3RlbmVyID0gbmV3IExpc3RlbmVyKCk7O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq5q+P5bin5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRVcGRhdGUoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0aGlzT2JqOiBhbnksIC4uLmNhbGxiYWNrUGFyYW06IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tVXBkYXRlTGlzdGVuZXIuaGFzKGNhbGxiYWNrLCB0aGlzT2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1VcGRhdGVMaXN0ZW5lci5hZGQoY2FsbGJhY2ssIHRoaXNPYmosIC4uLmNhbGxiYWNrUGFyYW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInJlcGVhdCBhZGQgIHVwZGF0ZVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5LiA5Liq5q+P5bin5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVVcGRhdGUoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0aGlzT2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5tVXBkYXRlTGlzdGVuZXIuaGFzKGNhbGxiYWNrLCB0aGlzT2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1VcGRhdGVMaXN0ZW5lci5yZW1vdmUoY2FsbGJhY2ssIHRoaXNPYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN5LqL5Lu25omn6KGM55qE5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXBlYXQ6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PFRpbWVEZWxheURhdGE+ID0gbmV3IEFycmF5PFRpbWVEZWxheURhdGE+KClcclxuICAgIHByaXZhdGUgdG9BZGQ6IEFycmF5PFRpbWVEZWxheURhdGE+ID0gbmV3IEFycmF5PFRpbWVEZWxheURhdGE+KClcclxuICAgIHByaXZhdGUgdG9SZW1vdmU6IEFycmF5PFRpbWVEZWxheURhdGE+ID0gbmV3IEFycmF5PFRpbWVEZWxheURhdGE+KClcclxuICAgIHByaXZhdGUgcG9vbDogQXJyYXk8VGltZURlbGF5RGF0YT4gPSBuZXcgQXJyYXk8VGltZURlbGF5RGF0YT4oKVxyXG4gICAgcHJpdmF0ZSBnZXRGcm9tUG9vbCgpOiBUaW1lRGVsYXlEYXRhIHtcclxuICAgICAgICBsZXQgdDogVGltZURlbGF5RGF0YTtcclxuICAgICAgICBpZiAodGhpcy5wb29sLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdCA9IHRoaXMucG9vbC5wb3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHQgPSBuZXcgVGltZURlbGF5RGF0YSgpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0dXJuVG9Qb29sKHQ6IFRpbWVEZWxheURhdGEpIHtcclxuICAgICAgICB0LnNldCgwLCAwLCBudWxsLCBudWxsLCBudWxsKVxyXG4gICAgICAgIHQuZWxhcHNlZCA9IDBcclxuICAgICAgICB0LmRlbGV0ZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucG9vbC5wdXNoKHQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBleGlzdHMoY2FsbGJhY2s6IFRpbWVyQ2FsbGJhY2ssIHRoaXNPYmo6IGFueSkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy50b0FkZC5maW5kKCh2YWx1ZTogVGltZURlbGF5RGF0YSwgaW5kZXg6IG51bWJlciwgb2JqOiBBcnJheTxUaW1lRGVsYXlEYXRhPikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiYgdmFsdWUudGhpc09iaiA9PSB0aGlzT2JqXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0ID0gdGhpcy5pdGVtcy5maW5kKCh2YWx1ZTogVGltZURlbGF5RGF0YSwgaW5kZXg6IG51bWJlciwgb2JqOiBBcnJheTxUaW1lRGVsYXlEYXRhPikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiYgdmFsdWUudGhpc09iaiA9PSB0aGlzT2JqXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodCAhPSBudWxsICYmICF0LmRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChpbnRlcnZhbDogbnVtYmVyLCByZXBlYXQ6IG51bWJlciwgY2FsbGJhY2s6IFRpbWVyQ2FsbGJhY2ssIHRoaXNPYmo6IGFueSwgLi4uY2FsbGJhY2tQYXJhbTogYW55KSB7XHJcbiAgICAgICAgbGV0IHQ6IFRpbWVEZWxheURhdGE7XHJcbiAgICAgICAgdCA9IHRoaXMuaXRlbXMuZmluZCgodmFsdWU6IFRpbWVEZWxheURhdGEsIGluZGV4OiBudW1iZXIsIG9iajogQXJyYXk8VGltZURlbGF5RGF0YT4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGxiYWNrID09IGNhbGxiYWNrICYmIHZhbHVlLnRoaXNPYmogPT0gdGhpc09ialxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdCA9IHRoaXMudG9BZGQuZmluZCgodmFsdWU6IFRpbWVEZWxheURhdGEsIGluZGV4OiBudW1iZXIsIG9iajogQXJyYXk8VGltZURlbGF5RGF0YT4pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jYWxsYmFjayA9PSBjYWxsYmFjayAmJiB2YWx1ZS50aGlzT2JqID09IHRoaXNPYmpcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdCA9IHRoaXMuZ2V0RnJvbVBvb2woKVxyXG4gICAgICAgICAgICB0aGlzLnRvQWRkLnB1c2godCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0LnNldChpbnRlcnZhbCwgcmVwZWF0LCBjYWxsYmFjaywgdGhpc09iaiwgLi4uY2FsbGJhY2tQYXJhbSlcclxuICAgICAgICB0LmRlbGV0ZWQgPSBmYWxzZVxyXG4gICAgICAgIHQuZWxhcHNlZCA9IDBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlKGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrLCB0aGlzT2JqOiBhbnkpIHtcclxuICAgICAgICBsZXQgZmluZGluZGV4ID0gLTFcclxuICAgICAgICBsZXQgdCA9IHRoaXMudG9BZGQuZmluZCgodmFsdWU6IFRpbWVEZWxheURhdGEsIGluZGV4OiBudW1iZXIsIG9iajogQXJyYXk8VGltZURlbGF5RGF0YT4pID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmNhbGxiYWNrID09IGNhbGxiYWNrICYmIHZhbHVlLnRoaXNPYmogPT0gdGhpc09iaikge1xyXG4gICAgICAgICAgICAgICAgZmluZGluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvQWRkLnNwbGljZShmaW5kaW5kZXgsIDEpXHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuVG9Qb29sKHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ID0gdGhpcy5pdGVtcy5maW5kKCh2YWx1ZTogVGltZURlbGF5RGF0YSwgaW5kZXg6IG51bWJlciwgb2JqOiBBcnJheTxUaW1lRGVsYXlEYXRhPikgPT4geyByZXR1cm4gdmFsdWUuY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiYgdmFsdWUudGhpc09iaiA9PSB0aGlzT2JqIH0pXHJcbiAgICAgICAgaWYgKHQgIT0gbnVsbClcclxuICAgICAgICAgICAgdC5kZWxldGVkID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIGRlbHRhVGltZTogbnVtYmVyID0gMFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubVVwZGF0ZUxpc3RlbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5tVXBkYXRlTGlzdGVuZXIucnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVsdGFUaW1lID0gKERhdGUubm93KCkgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDBcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKHQuZGVsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b1JlbW92ZS5wdXNoKHQpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdC5lbGFwc2VkICs9IHRoaXMuZGVsdGFUaW1lXHJcbiAgICAgICAgICAgIGlmICh0LmVsYXBzZWQgPCB0LmludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0LmVsYXBzZWQgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHQucmVwZWF0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdC5yZXBlYXQtLVxyXG4gICAgICAgICAgICAgICAgaWYgKHQucmVwZWF0ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0LmRlbGV0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b1JlbW92ZS5wdXNoKHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXBlYXQgPSB0LnJlcGVhdFxyXG4gICAgICAgICAgICBpZiAodC5jYWxsYmFjayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuY2FsbGJhY2suY2FsbCh0LnRoaXNPYmosIC4uLnQucGFyYW0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuZGVsZXRlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGVuID0gdGhpcy50b1JlbW92ZS5sZW5ndGhcclxuICAgICAgICB3aGlsZSAobGVuKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy50b1JlbW92ZS5wb3AoKVxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodClcclxuICAgICAgICAgICAgaWYgKHQuZGVsZXRlZCAmJiBpbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHVyblRvUG9vbCh0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxlbi0tXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxlbiA9IHRoaXMudG9BZGQubGVuZ3RoXHJcbiAgICAgICAgd2hpbGUgKGxlbikge1xyXG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMudG9BZGQucG9wKClcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHQpXHJcbiAgICAgICAgICAgIGxlbi0tXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVEZWxheURhdGEge1xyXG4gICAgcHVibGljIHJlcGVhdDogbnVtYmVyXHJcbiAgICBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlclxyXG4gICAgcHVibGljIHBhcmFtOiBhbnlbXVxyXG4gICAgcHVibGljIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrXHJcbiAgICBwdWJsaWMgdGhpc09iajogYW55XHJcbiAgICBwdWJsaWMgZGVsZXRlZDogYm9vbGVhblxyXG4gICAgcHVibGljIGVsYXBzZWQ6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBzZXQoaW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0OiBudW1iZXIsIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrLCB0aGlzT2JqOiBhbnksIC4uLnBhcmFtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWxcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdFxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMucGFyYW0gPSBwYXJhbVxyXG4gICAgICAgIHRoaXMudGhpc09iaiA9IHRoaXNPYmpcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGltZXJDYWxsYmFjayA9ICguLi5wYXJhbTogYW55KSA9PiB2b2lkIl19