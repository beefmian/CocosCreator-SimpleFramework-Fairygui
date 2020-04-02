"use strict";
cc._RF.push(module, 'cc3a3Ve1k1M0oGqSBnWAPGq', 'EventTest');
// YK/example/event/EventTest.ts

Object.defineProperty(exports, "__esModule", { value: true });
var YK = require("../../YK");
var EventTest = /** @class */ (function () {
    function EventTest() {
    }
    EventTest.test = function () {
        this.eventDis = new EventDispatcher();
        this.testListener();
        this.testSend();
    };
    EventTest.testListener = function () {
        this.eventDis.on(CustomizeEvent.testId, this.testListener1, this, 1);
        this.eventDis.on(CustomizeEvent.testId, this.testListener2, this, 2);
    };
    EventTest.testSend = function () {
        var _this = this;
        YK.TimeDelay.instance.Add(1, 0, function () {
            var ev = YK.Event.create(CustomizeEvent, CustomizeEvent.testId);
            _this.eventDis.dispatchEvent(ev);
        }, this);
        // Laya.timer.loop(1000, this, () => {
        //     let ev = YK.Event.create(CustomizeEvent, CustomizeEvent.testId);
        //     this.eventDis.dispatchEvent(ev);
        // });
    };
    EventTest.testListener1 = function (ev) {
        console.log("testListener1", ev);
    };
    EventTest.testListener2 = function (ev) {
        console.log("testListener2", ev);
    };
    return EventTest;
}());
exports.EventTest = EventTest;
var CustomizeEvent = /** @class */ (function (_super) {
    __extends(CustomizeEvent, _super);
    function CustomizeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomizeEvent.testId = "testId";
    return CustomizeEvent;
}(YK.Event));
exports.CustomizeEvent = CustomizeEvent;
var EventDispatcher = /** @class */ (function (_super) {
    __extends(EventDispatcher, _super);
    function EventDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventDispatcher;
}(YK.EventDispatcher));
exports.EventDispatcher = EventDispatcher;

cc._RF.pop();