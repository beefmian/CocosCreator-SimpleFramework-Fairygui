
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
        YK.TimeDelay.instance.add(1, 0, function () {
            var ev = YK.Event.create(CustomizeEvent, CustomizeEvent.testId);
            _this.eventDis.dispatchEvent(ev);
        }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXGV2ZW50XFxFdmVudFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE4QjtBQUU5QjtJQUFBO0lBNkJBLENBQUM7SUExQlUsY0FBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLHNCQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFFTSxrQkFBUSxHQUFmO1FBQUEsaUJBS0M7UUFKRyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM1QixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSx1QkFBYSxHQUFwQixVQUFxQixFQUFZO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFTSx1QkFBYSxHQUFwQixVQUFxQixFQUFZO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxnQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksOEJBQVM7QUErQnRCO0lBQW9DLGtDQUFRO0lBQTVDOztJQUVBLENBQUM7SUFEVSxxQkFBTSxHQUFHLFFBQVEsQ0FBQztJQUM3QixxQkFBQztDQUZELEFBRUMsQ0FGbUMsRUFBRSxDQUFDLEtBQUssR0FFM0M7QUFGWSx3Q0FBYztBQUkzQjtJQUFxQyxtQ0FBa0I7SUFBdkQ7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLEVBQUUsQ0FBQyxlQUFlLEdBRXREO0FBRlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBZSyBmcm9tIFwiLi4vLi4vWUtcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50VGVzdCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBldmVudERpczogRXZlbnREaXNwYXRjaGVyO1xyXG5cclxuICAgIHN0YXRpYyB0ZXN0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnREaXMgPSBuZXcgRXZlbnREaXNwYXRjaGVyKCk7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLnRlc3RTZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRlc3RMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmV2ZW50RGlzLm9uKEN1c3RvbWl6ZUV2ZW50LnRlc3RJZCwgdGhpcy50ZXN0TGlzdGVuZXIxLCB0aGlzLCAxKTtcclxuICAgICAgICB0aGlzLmV2ZW50RGlzLm9uKEN1c3RvbWl6ZUV2ZW50LnRlc3RJZCwgdGhpcy50ZXN0TGlzdGVuZXIyLCB0aGlzLCAyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRlc3RTZW5kKCkge1xyXG4gICAgICAgIFlLLlRpbWVEZWxheS5pbnN0YW5jZS5hZGQoMSwgMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXYgPSBZSy5FdmVudC5jcmVhdGUoQ3VzdG9taXplRXZlbnQsIEN1c3RvbWl6ZUV2ZW50LnRlc3RJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnREaXMuZGlzcGF0Y2hFdmVudChldik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRlc3RMaXN0ZW5lcjEoZXY6IFlLLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0TGlzdGVuZXIxXCIsIGV2KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXN0TGlzdGVuZXIyKGV2OiBZSy5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdExpc3RlbmVyMlwiLCBldilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6ZUV2ZW50IGV4dGVuZHMgWUsuRXZlbnQge1xyXG4gICAgc3RhdGljIHRlc3RJZCA9IFwidGVzdElkXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGNoZXIgZXh0ZW5kcyBZSy5FdmVudERpc3BhdGNoZXIge1xyXG5cclxufSJdfQ==