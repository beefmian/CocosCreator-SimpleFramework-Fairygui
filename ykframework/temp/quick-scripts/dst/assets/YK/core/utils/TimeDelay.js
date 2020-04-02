
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHV0aWxzXFxUaW1lRGVsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRTVDO0lBQStCLDZCQUFZO0lBRDNDO1FBQUEscUVBMExDO1FBM0tXLHFCQUFlLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUF1Qm5EOztXQUVHO1FBQ0ksWUFBTSxHQUFXLENBQUMsQ0FBQTtRQUNqQixXQUFLLEdBQXlCLElBQUksS0FBSyxFQUFpQixDQUFBO1FBQ3hELFdBQUssR0FBeUIsSUFBSSxLQUFLLEVBQWlCLENBQUE7UUFDeEQsY0FBUSxHQUF5QixJQUFJLEtBQUssRUFBaUIsQ0FBQTtRQUMzRCxVQUFJLEdBQXlCLElBQUksS0FBSyxFQUFpQixDQUFBO1FBZ0Z2RCxjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQ3BCLGVBQVMsR0FBVyxDQUFDLENBQUE7O0lBNERqQyxDQUFDO2tCQXpMWSxTQUFTO0lBSWxCLHNCQUFrQixxQkFBUTthQUExQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFTLENBQUMsU0FBUyxFQUFFO2dCQUNoRCxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ2xDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFTLENBQUMsQ0FBQTthQUM5QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUdrRCxDQUFDO0lBRXBEOztPQUVHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsUUFBa0IsRUFBRSxPQUFZLEVBQUUsYUFBeUI7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O1FBQ0QsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQ3ZCLE9BQU8sR0FBRyxFQUFFO1lBQ1IsSUFBSSxHQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQTtZQUNsQixHQUFHLEVBQUUsQ0FBQTtTQUNSO0lBQ0wsQ0FBQzs7SUFyTGEsbUJBQVMsR0FBWSxLQUFLLENBQUM7SUFDMUIsbUJBQVMsR0FBYyxJQUFJLENBQUE7SUFIakMsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQXlMckI7SUFBRCxnQkFBQztDQXpMRCxBQXlMQyxDQXpMOEIsRUFBRSxDQUFDLFNBQVMsR0F5TDFDO0FBekxZLDhCQUFTO0FBMkx0QjtJQUFBO0lBZ0JBLENBQUM7SUFQVSwyQkFBRyxHQUFWLFVBQVcsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsUUFBdUIsRUFBRSxPQUFZLEVBQUUsS0FBVTtRQUMxRixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUMxQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIsIEZ1bmMgfSBmcm9tIFwiLi9MaXN0ZW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRpbWVEZWxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc1F1aXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3RhdGljIG1JbnN0YW5jZTogVGltZURlbGF5ID0gbnVsbFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubUluc3RhbmNlID09IG51bGwgJiYgIVRpbWVEZWxheS5pc1F1aXRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IG5vID0gbmV3IGNjLk5vZGUoXCJfVGltZURlbGF5XCIpXHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKG5vKTtcclxuICAgICAgICAgICAgdGhpcy5tSW5zdGFuY2UgPSBuby5hZGRDb21wb25lbnQoVGltZURlbGF5KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tSW5zdGFuY2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtVXBkYXRlTGlzdGVuZXI6IExpc3RlbmVyID0gbmV3IExpc3RlbmVyKCk7O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq5q+P5bin5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRVcGRhdGUoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0aGlzT2JqOiBhbnksIGNhbGxiYWNrUGFyYW06IGFueSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIXRoaXMubVVwZGF0ZUxpc3RlbmVyLmhhcyhjYWxsYmFjaywgdGhpc09iaikpIHtcclxuICAgICAgICAgICAgdGhpcy5tVXBkYXRlTGlzdGVuZXIuYWRkKGNhbGxiYWNrLCB0aGlzT2JqLCBjYWxsYmFja1BhcmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJyZXBlYXQgYWRkICB1cGRhdGVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOenu+mZpOS4gOS4quavj+W4p+Wbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmVtb3ZlVXBkYXRlKGNhbGxiYWNrOiBGdW5jdGlvbiwgdGhpc09iajogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubVVwZGF0ZUxpc3RlbmVyLmhhcyhjYWxsYmFjaywgdGhpc09iaikpIHtcclxuICAgICAgICAgICAgdGhpcy5tVXBkYXRlTGlzdGVuZXIucmVtb3ZlKGNhbGxiYWNrLCB0aGlzT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeS6i+S7tuaJp+ihjOeahOasoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVwZWF0OiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxUaW1lRGVsYXlEYXRhPiA9IG5ldyBBcnJheTxUaW1lRGVsYXlEYXRhPigpXHJcbiAgICBwcml2YXRlIHRvQWRkOiBBcnJheTxUaW1lRGVsYXlEYXRhPiA9IG5ldyBBcnJheTxUaW1lRGVsYXlEYXRhPigpXHJcbiAgICBwcml2YXRlIHRvUmVtb3ZlOiBBcnJheTxUaW1lRGVsYXlEYXRhPiA9IG5ldyBBcnJheTxUaW1lRGVsYXlEYXRhPigpXHJcbiAgICBwcml2YXRlIHBvb2w6IEFycmF5PFRpbWVEZWxheURhdGE+ID0gbmV3IEFycmF5PFRpbWVEZWxheURhdGE+KClcclxuICAgIHByaXZhdGUgR2V0RnJvbVBvb2woKTogVGltZURlbGF5RGF0YSB7XHJcbiAgICAgICAgbGV0IHQ6IFRpbWVEZWxheURhdGE7XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHQgPSB0aGlzLnBvb2wucG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0ID0gbmV3IFRpbWVEZWxheURhdGEoKTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFJldHVyblRvUG9vbCh0OiBUaW1lRGVsYXlEYXRhKSB7XHJcbiAgICAgICAgdC5zZXQoMCwgMCwgbnVsbCwgbnVsbCwgbnVsbClcclxuICAgICAgICB0LmVsYXBzZWQgPSAwXHJcbiAgICAgICAgdC5kZWxldGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnBvb2wucHVzaCh0KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgRXhpc3RzKGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrLCB0aGlzT2JqOiBhbnkpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXMudG9BZGQuZmluZCgodmFsdWU6IFRpbWVEZWxheURhdGEsIGluZGV4OiBudW1iZXIsIG9iajogQXJyYXk8VGltZURlbGF5RGF0YT4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGxiYWNrID09IGNhbGxiYWNrICYmIHZhbHVlLnRoaXNPYmogPT0gdGhpc09ialxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdCA9IHRoaXMuaXRlbXMuZmluZCgodmFsdWU6IFRpbWVEZWxheURhdGEsIGluZGV4OiBudW1iZXIsIG9iajogQXJyYXk8VGltZURlbGF5RGF0YT4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGxiYWNrID09IGNhbGxiYWNrICYmIHZhbHVlLnRoaXNPYmogPT0gdGhpc09ialxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHQgIT0gbnVsbCAmJiAhdC5kZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGQoaW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0OiBudW1iZXIsIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrLCB0aGlzT2JqOiBhbnksIGNhbGxiYWNrUGFyYW06IGFueSA9IG51bGwpIHtcclxuICAgICAgICBsZXQgdDogVGltZURlbGF5RGF0YTtcclxuICAgICAgICB0ID0gdGhpcy5pdGVtcy5maW5kKCh2YWx1ZTogVGltZURlbGF5RGF0YSwgaW5kZXg6IG51bWJlciwgb2JqOiBBcnJheTxUaW1lRGVsYXlEYXRhPikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiYgdmFsdWUudGhpc09iaiA9PSB0aGlzT2JqXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0ID0gdGhpcy50b0FkZC5maW5kKCh2YWx1ZTogVGltZURlbGF5RGF0YSwgaW5kZXg6IG51bWJlciwgb2JqOiBBcnJheTxUaW1lRGVsYXlEYXRhPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGxiYWNrID09IGNhbGxiYWNrICYmIHZhbHVlLnRoaXNPYmogPT0gdGhpc09ialxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0ID0gdGhpcy5HZXRGcm9tUG9vbCgpXHJcbiAgICAgICAgICAgIHRoaXMudG9BZGQucHVzaCh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuc2V0KGludGVydmFsLCByZXBlYXQsIGNhbGxiYWNrLCB0aGlzT2JqLCBjYWxsYmFja1BhcmFtKVxyXG4gICAgICAgIHQuZGVsZXRlZCA9IGZhbHNlXHJcbiAgICAgICAgdC5lbGFwc2VkID0gMFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW1vdmUoY2FsbGJhY2s6IFRpbWVyQ2FsbGJhY2ssIHRoaXNPYmo6IGFueSkge1xyXG4gICAgICAgIGxldCBmaW5kaW5kZXggPSAtMVxyXG4gICAgICAgIGxldCB0ID0gdGhpcy50b0FkZC5maW5kKCh2YWx1ZTogVGltZURlbGF5RGF0YSwgaW5kZXg6IG51bWJlciwgb2JqOiBBcnJheTxUaW1lRGVsYXlEYXRhPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuY2FsbGJhY2sgPT0gY2FsbGJhY2sgJiYgdmFsdWUudGhpc09iaiA9PSB0aGlzT2JqKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5kaW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9BZGQuc3BsaWNlKGZpbmRpbmRleCwgMSlcclxuICAgICAgICAgICAgdGhpcy5SZXR1cm5Ub1Bvb2wodClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQgPSB0aGlzLml0ZW1zLmZpbmQoKHZhbHVlOiBUaW1lRGVsYXlEYXRhLCBpbmRleDogbnVtYmVyLCBvYmo6IEFycmF5PFRpbWVEZWxheURhdGE+KSA9PiB7IHJldHVybiB2YWx1ZS5jYWxsYmFjayA9PSBjYWxsYmFjayAmJiB2YWx1ZS50aGlzT2JqID09IHRoaXNPYmogfSlcclxuICAgICAgICBpZiAodCAhPSBudWxsKVxyXG4gICAgICAgICAgICB0LmRlbGV0ZWQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbGFzdFRpbWU6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgZGVsdGFUaW1lOiBudW1iZXIgPSAwXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5tVXBkYXRlTGlzdGVuZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1VcGRhdGVMaXN0ZW5lci5ydW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWx0YVRpbWUgPSAoRGF0ZS5ub3coKSAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMFxyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpXHJcblxyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAodC5kZWxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvUmVtb3ZlLnB1c2godClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0LmVsYXBzZWQgKz0gdGhpcy5kZWx0YVRpbWVcclxuICAgICAgICAgICAgaWYgKHQuZWxhcHNlZCA8IHQuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHQuZWxhcHNlZCA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAodC5yZXBlYXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0LnJlcGVhdC0tXHJcbiAgICAgICAgICAgICAgICBpZiAodC5yZXBlYXQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuZGVsZXRlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvUmVtb3ZlLnB1c2godClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlcGVhdCA9IHQucmVwZWF0XHJcbiAgICAgICAgICAgIGlmICh0LmNhbGxiYWNrICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5jYWxsYmFjay5jYWxsKHQudGhpc09iaiwgdC5wYXJhbSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5kZWxldGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLnRvUmVtb3ZlLmxlbmd0aFxyXG4gICAgICAgIHdoaWxlIChsZW4pIHtcclxuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnRvUmVtb3ZlLnBvcCgpXHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0KVxyXG4gICAgICAgICAgICBpZiAodC5kZWxldGVkICYmIGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuUmV0dXJuVG9Qb29sKHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGVuLS1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGVuID0gdGhpcy50b0FkZC5sZW5ndGhcclxuICAgICAgICB3aGlsZSAobGVuKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy50b0FkZC5wb3AoKVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godClcclxuICAgICAgICAgICAgbGVuLS1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZURlbGF5RGF0YSB7XHJcbiAgICBwdWJsaWMgcmVwZWF0OiBudW1iZXJcclxuICAgIHB1YmxpYyBpbnRlcnZhbDogbnVtYmVyXHJcbiAgICBwdWJsaWMgcGFyYW06IGFueVxyXG4gICAgcHVibGljIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrXHJcbiAgICBwdWJsaWMgdGhpc09iajogYW55XHJcbiAgICBwdWJsaWMgZGVsZXRlZDogYm9vbGVhblxyXG4gICAgcHVibGljIGVsYXBzZWQ6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBzZXQoaW50ZXJ2YWw6IG51bWJlciwgcmVwZWF0OiBudW1iZXIsIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrLCB0aGlzT2JqOiBhbnksIHBhcmFtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWxcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdFxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMucGFyYW0gPSBwYXJhbVxyXG4gICAgICAgIHRoaXMudGhpc09iaiA9IHRoaXNPYmpcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGltZXJDYWxsYmFjayA9IChwYXJhbTogYW55KSA9PiB2b2lkIl19