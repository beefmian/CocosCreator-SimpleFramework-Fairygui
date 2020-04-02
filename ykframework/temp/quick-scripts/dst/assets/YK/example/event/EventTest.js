
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/example/event/EventTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXGV2ZW50XFxFdmVudFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE4QjtBQUU5QjtJQUFBO0lBaUNBLENBQUM7SUE5QlUsY0FBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLHNCQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFTSxrQkFBUSxHQUFmO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM1QixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULHNDQUFzQztRQUN0Qyx1RUFBdUU7UUFDdkUsdUNBQXVDO1FBQ3ZDLE1BQU07SUFDVixDQUFDO0lBRU0sdUJBQWEsR0FBcEIsVUFBcUIsRUFBWTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRU0sdUJBQWEsR0FBcEIsVUFBcUIsRUFBWTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLDhCQUFTO0FBbUN0QjtJQUFvQyxrQ0FBUTtJQUE1Qzs7SUFFQSxDQUFDO0lBRFUscUJBQU0sR0FBRyxRQUFRLENBQUM7SUFDN0IscUJBQUM7Q0FGRCxBQUVDLENBRm1DLEVBQUUsQ0FBQyxLQUFLLEdBRTNDO0FBRlksd0NBQWM7QUFJM0I7SUFBcUMsbUNBQWtCO0lBQXZEOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxFQUFFLENBQUMsZUFBZSxHQUV0RDtBQUZZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWUsgZnJvbSBcIi4uLy4uL1lLXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFRlc3Qge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXZlbnREaXM6IEV2ZW50RGlzcGF0Y2hlcjtcclxuXHJcbiAgICBzdGF0aWMgdGVzdCgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50RGlzID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICAgICAgIHRoaXMudGVzdExpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy50ZXN0U2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXN0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudERpcy5vbihDdXN0b21pemVFdmVudC50ZXN0SWQsIHRoaXMudGVzdExpc3RlbmVyMSwgdGhpcywgMSk7XHJcbiAgICAgICAgdGhpcy5ldmVudERpcy5vbihDdXN0b21pemVFdmVudC50ZXN0SWQsIHRoaXMudGVzdExpc3RlbmVyMiwgdGhpcywgMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXN0U2VuZCgpIHtcclxuICAgICAgICBZSy5UaW1lRGVsYXkuaW5zdGFuY2UuQWRkKDEsIDAsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV2ID0gWUsuRXZlbnQuY3JlYXRlKEN1c3RvbWl6ZUV2ZW50LCBDdXN0b21pemVFdmVudC50ZXN0SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzLmRpc3BhdGNoRXZlbnQoZXYpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIC8vIExheWEudGltZXIubG9vcCgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBldiA9IFlLLkV2ZW50LmNyZWF0ZShDdXN0b21pemVFdmVudCwgQ3VzdG9taXplRXZlbnQudGVzdElkKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5ldmVudERpcy5kaXNwYXRjaEV2ZW50KGV2KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGVzdExpc3RlbmVyMShldjogWUsuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RMaXN0ZW5lcjFcIiwgZXYpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRlc3RMaXN0ZW5lcjIoZXY6IFlLLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0TGlzdGVuZXIyXCIsIGV2KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9taXplRXZlbnQgZXh0ZW5kcyBZSy5FdmVudCB7XHJcbiAgICBzdGF0aWMgdGVzdElkID0gXCJ0ZXN0SWRcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciBleHRlbmRzIFlLLkV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG59Il19