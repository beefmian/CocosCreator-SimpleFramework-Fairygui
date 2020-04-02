"use strict";
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