
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/event/EventDispatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5944CSYIBO5IibIqPshE9o', 'EventDispatcher');
// YK/core/event/EventDispatcher.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = require("./Event");
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.dicEventListener = new Map();
        this.onceList = new Array();
    }
    EventDispatcher.prototype.on = function (type, listener, caller, priority, once) {
        var arr;
        if (this.hasEventListener(type)) {
            arr = this.dicEventListener.get(type);
        }
        else {
            arr = new Array();
            this.dicEventListener.set(type, arr);
        }
        this.insertEventBin(arr, type, listener, caller, priority, !!once);
        return this;
    };
    EventDispatcher.prototype.once = function (type, listener, caller, priority) {
        this.on(type, listener, caller, priority, true);
        return this;
    };
    EventDispatcher.prototype.off = function (type, listener, caller) {
        this.removeListener(type, listener, caller);
        return this;
    };
    EventDispatcher.prototype.offAll = function (type) {
        if (!!type && this.hasEventListener(type)) {
            this.dicEventListener.delete(type);
        }
        else {
            this.dicEventListener.clear();
        }
        return this;
    };
    EventDispatcher.prototype.offAllCaller = function (caller) {
        var arr = new Array();
        this.dicEventListener.forEach(function (v) {
            for (var i = 0; i < v.length; i++) {
                var eventBin = v[i];
                if (eventBin.thisObject == caller) {
                    arr.push(eventBin);
                }
            }
        });
        for (var i = 0; i < arr.length; i++) {
            var e = arr[i];
            this.removeListener(e.type, e.listener, e.thisObject);
        }
        return this;
    };
    EventDispatcher.prototype.hasEventListener = function (type) {
        return this.dicEventListener.has(type);
    };
    EventDispatcher.prototype.dispatchEvent = function (ev) {
        ev.target = this;
        this.notifyListener(ev);
    };
    EventDispatcher.prototype.dispatchEventWith = function (type, data) {
        if (this.hasEventListener(type)) {
            var event = Event_1.Event.create(Event_1.Event, type);
            event.data = data;
            this.dispatchEvent(event);
            Event_1.Event.release(event);
        }
        return true;
    };
    EventDispatcher.prototype.insertEventBin = function (list, type, listener, thisObject, priority, dispatchOnce) {
        priority = +priority | 0;
        var insertIndex = -1;
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var bin = list[i];
            if (bin.listener == listener && bin.thisObject == thisObject && bin.target == this) {
                return false;
            }
            if (insertIndex == -1 && bin.priority < priority) {
                insertIndex = i;
            }
        }
        var eventBin = {
            type: type, listener: listener, thisObject: thisObject, priority: priority,
            target: this, dispatchOnce: !!dispatchOnce
        };
        if (insertIndex !== -1) {
            list.splice(insertIndex, 0, eventBin);
        }
        else {
            list.push(eventBin);
        }
        return true;
    };
    EventDispatcher.prototype.removeListener = function (type, listener, caller) {
        if (this.hasEventListener(type)) {
            this.removeEventBin(this.dicEventListener.get(type), listener, caller);
        }
    };
    EventDispatcher.prototype.removeEventBin = function (list, listener, caller) {
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var bin = list[i];
            if (bin.listener == listener && bin.thisObject == caller && bin.target == this) {
                list.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    EventDispatcher.prototype.notifyListener = function (event) {
        var list = this.dicEventListener.get(event.type);
        if (!list) {
            return;
        }
        var length = list.length;
        if (length == 0) {
            return;
        }
        for (var i = 0; i < length; i++) {
            var eventBin = list[i];
            eventBin.listener.call(eventBin.thisObject, event);
            if (eventBin.dispatchOnce) {
                this.onceList.push(eventBin);
            }
            if (event.isPropagationImmediateStopped) {
                break;
            }
        }
        while (this.onceList.length) {
            var eventBin = this.onceList.pop();
            eventBin.target.off(eventBin.type, eventBin.listener, eventBin.thisObject);
        }
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXGV2ZW50XFxFdmVudERpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUVoQztJQUFBO1FBRVkscUJBQWdCLEdBQWlDLElBQUksR0FBRyxFQUEyQixDQUFDO1FBQ3BGLGFBQVEsR0FBb0IsSUFBSSxLQUFLLEVBQVksQ0FBQztJQTRJOUQsQ0FBQztJQTFJRyw0QkFBRSxHQUFGLFVBQUcsSUFBWSxFQUFFLFFBQWtCLEVBQUUsTUFBVyxFQUFFLFFBQWlCLEVBQUUsSUFBYztRQUMvRSxJQUFJLEdBQW9CLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQVksRUFBRSxRQUFrQixFQUFFLE1BQVcsRUFBRSxRQUFpQjtRQUNqRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNkJBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxRQUFrQixFQUFFLE1BQVc7UUFDN0MsSUFBSSxD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LEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0EvSUEsQUErSUMsSUFBQTtBQS9JWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4vRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xyXG5cclxuICAgIHByaXZhdGUgZGljRXZlbnRMaXN0ZW5lcjogTWFwPHN0cmluZywgQXJyYXk8RXZlbnRCaW4+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxFdmVudEJpbj4+KCk7XHJcbiAgICBwcml2YXRlIG9uY2VMaXN0OiBBcnJheTxFdmVudEJpbj4gPSBuZXcgQXJyYXk8RXZlbnRCaW4+KCk7XHJcblxyXG4gICAgb24odHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24sIGNhbGxlcjogYW55LCBwcmlvcml0eT86IG51bWJlciwgb25jZT86IGJvb2xlYW4pOiBFdmVudERpc3BhdGNoZXIge1xyXG4gICAgICAgIGxldCBhcnI6IEFycmF5PEV2ZW50QmluPjtcclxuICAgICAgICBpZiAodGhpcy5oYXNFdmVudExpc3RlbmVyKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIGFyciA9IHRoaXMuZGljRXZlbnRMaXN0ZW5lci5nZXQodHlwZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyID0gbmV3IEFycmF5PEV2ZW50QmluPigpO1xyXG4gICAgICAgICAgICB0aGlzLmRpY0V2ZW50TGlzdGVuZXIuc2V0KHR5cGUsIGFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5zZXJ0RXZlbnRCaW4oYXJyLCB0eXBlLCBsaXN0ZW5lciwgY2FsbGVyLCBwcmlvcml0eSwgISFvbmNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbmNlKHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uLCBjYWxsZXI6IGFueSwgcHJpb3JpdHk/OiBudW1iZXIpOiBFdmVudERpc3BhdGNoZXIge1xyXG4gICAgICAgIHRoaXMub24odHlwZSwgbGlzdGVuZXIsIGNhbGxlciwgcHJpb3JpdHksIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbiwgY2FsbGVyOiBhbnkpOiBFdmVudERpc3BhdGNoZXIge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIGNhbGxlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmQWxsKHR5cGU/OiBzdHJpbmcpOiBFdmVudERpc3BhdGNoZXIge1xyXG4gICAgICAgIGlmICghIXR5cGUgJiYgdGhpcy5oYXNFdmVudExpc3RlbmVyKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGljRXZlbnRMaXN0ZW5lci5kZWxldGUodHlwZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaWNFdmVudExpc3RlbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZkFsbENhbGxlcihjYWxsZXI6IGFueSk6IEV2ZW50RGlzcGF0Y2hlciB7XHJcbiAgICAgICAgbGV0IGFycjogQXJyYXk8RXZlbnRCaW4+ID0gbmV3IEFycmF5PEV2ZW50QmluPigpO1xyXG4gICAgICAgIHRoaXMuZGljRXZlbnRMaXN0ZW5lci5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudEJpbiA9IHZbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRCaW4udGhpc09iamVjdCA9PSBjYWxsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChldmVudEJpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZSA9IGFycltpXTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihlLnR5cGUsIGUubGlzdGVuZXIsIGUudGhpc09iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0V2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljRXZlbnRMaXN0ZW5lci5oYXModHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hFdmVudChldjogRXZlbnQpIHtcclxuICAgICAgICBldi50YXJnZXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXIoZXYpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoRXZlbnRXaXRoKHR5cGU6IHN0cmluZywgZGF0YT86IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0V2ZW50TGlzdGVuZXIodHlwZSkpIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50OiBFdmVudCA9IEV2ZW50LmNyZWF0ZShFdmVudCwgdHlwZSk7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICBFdmVudC5yZWxlYXNlKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnNlcnRFdmVudEJpbihsaXN0OiBhbnlbXSwgdHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24sIHRoaXNPYmplY3Q6IGFueSxcclxuICAgICAgICBwcmlvcml0eT86IG51bWJlciwgZGlzcGF0Y2hPbmNlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHByaW9yaXR5ID0gK3ByaW9yaXR5IHwgMDtcclxuICAgICAgICBsZXQgaW5zZXJ0SW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmluID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGJpbi5saXN0ZW5lciA9PSBsaXN0ZW5lciAmJiBiaW4udGhpc09iamVjdCA9PSB0aGlzT2JqZWN0ICYmIGJpbi50YXJnZXQgPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnNlcnRJbmRleCA9PSAtMSAmJiBiaW4ucHJpb3JpdHkgPCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBldmVudEJpbjogRXZlbnRCaW4gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgdGhpc09iamVjdDogdGhpc09iamVjdCwgcHJpb3JpdHk6IHByaW9yaXR5LFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMsIGRpc3BhdGNoT25jZTogISFkaXNwYXRjaE9uY2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoaW5zZXJ0SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluc2VydEluZGV4LCAwLCBldmVudEJpbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGV2ZW50QmluKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbiwgY2FsbGVyOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNFdmVudExpc3RlbmVyKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRCaW4odGhpcy5kaWNFdmVudExpc3RlbmVyLmdldCh0eXBlKSwgbGlzdGVuZXIsIGNhbGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnRCaW4obGlzdDogYW55W10sIGxpc3RlbmVyOiBGdW5jdGlvbiwgY2FsbGVyOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmluID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKGJpbi5saXN0ZW5lciA9PSBsaXN0ZW5lciAmJiBiaW4udGhpc09iamVjdCA9PSBjYWxsZXIgJiYgYmluLnRhcmdldCA9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcihldmVudDogRXZlbnQpIHtcclxuICAgICAgICBsZXQgbGlzdDogQXJyYXk8RXZlbnRCaW4+ID0gdGhpcy5kaWNFdmVudExpc3RlbmVyLmdldChldmVudC50eXBlKTtcclxuICAgICAgICBpZiAoIWxpc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnRCaW4gPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBldmVudEJpbi5saXN0ZW5lci5jYWxsKGV2ZW50QmluLnRoaXNPYmplY3QsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudEJpbi5kaXNwYXRjaE9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25jZUxpc3QucHVzaChldmVudEJpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzUHJvcGFnYXRpb25JbW1lZGlhdGVTdG9wcGVkKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodGhpcy5vbmNlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50QmluID0gdGhpcy5vbmNlTGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgZXZlbnRCaW4udGFyZ2V0Lm9mZihldmVudEJpbi50eXBlLCBldmVudEJpbi5saXN0ZW5lciwgZXZlbnRCaW4udGhpc09iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHByaXZhdGVcclxuICog5LqL5Lu25L+h5oGv5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QmluIHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGxpc3RlbmVyOiBGdW5jdGlvbjtcclxuICAgIHRoaXNPYmplY3Q6IGFueTtcclxuICAgIHByaW9yaXR5OiBudW1iZXI7XHJcbiAgICB0YXJnZXQ6IEV2ZW50RGlzcGF0Y2hlcjtcclxuICAgIGRpc3BhdGNoT25jZTogYm9vbGVhbjtcclxufVxyXG4iXX0=