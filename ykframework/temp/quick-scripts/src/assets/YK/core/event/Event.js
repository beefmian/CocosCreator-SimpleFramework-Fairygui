"use strict";
cc._RF.push(module, 'e7b0dCkjJtHzIiTFmgPeFgm', 'Event');
// YK/core/event/Event.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event(type, data) {
        this.type = type;
        this.data = data;
    }
    Event.prototype.stopImmediatePropagation = function () {
        this.isPropagationImmediateStopped = true;
    };
    Event.prototype.clean = function () {
        this.data = this.target = null;
        this.isPropagationImmediateStopped = false;
    };
    Event.create = function (EventClass, type) {
        var eventPool;
        var hasEventPool = EventClass.hasOwnProperty("eventPool");
        if (hasEventPool) {
            eventPool = EventClass.eventPool;
        }
        if (!eventPool) {
            eventPool = EventClass.eventPool = [];
        }
        if (eventPool.length) {
            var event = eventPool.pop();
            event.type = type;
            return event;
        }
        return new EventClass(type);
    };
    Event.dispatchEvent = function (target, type, data) {
        var event = Event.create(Event, type);
        event.data = data;
        target.dispatchEvent(event);
        Event.release(event);
    };
    Event.release = function (event) {
        event.clean();
        var EventClass = Object.getPrototypeOf(event).constructor;
        EventClass.eventPool.push(event);
    };
    return Event;
}());
exports.Event = Event;

cc._RF.pop();