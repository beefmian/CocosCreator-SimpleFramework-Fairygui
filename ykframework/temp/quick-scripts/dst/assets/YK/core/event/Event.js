
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/event/Event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXGV2ZW50XFxFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFlSSxlQUFtQixJQUFZLEVBQUUsSUFBVTtRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBWk0sd0NBQXdCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBRVMscUJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBT2EsWUFBTSxHQUFwQixVQUFzQyxVQUF5RCxFQUFFLElBQVk7UUFDekcsSUFBSSxTQUFrQixDQUFDO1FBQ3ZCLElBQUksWUFBWSxHQUFJLFVBQWtCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25FLElBQUksWUFBWSxFQUFFO1lBQ2QsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksS0FBSyxHQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVhLG1CQUFhLEdBQTNCLFVBQTRCLE1BQXVCLEVBQUUsSUFBWSxFQUFFLElBQVU7UUFDekUsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFYSxhQUFPLEdBQXJCLFVBQXNCLEtBQVk7UUFDOUIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsSUFBSSxVQUFVLEdBQVEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDL0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcIi4vRXZlbnREaXNwYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnQge1xyXG4gICAgcHVibGljIHRhcmdldDogRXZlbnREaXNwYXRjaGVyO1xyXG4gICAgcHVibGljIGRhdGE6IGFueTtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXNQcm9wYWdhdGlvbkltbWVkaWF0ZVN0b3BwZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzUHJvcGFnYXRpb25JbW1lZGlhdGVTdG9wcGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2xlYW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNQcm9wYWdhdGlvbkltbWVkaWF0ZVN0b3BwZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlPFQgZXh0ZW5kcyBFdmVudD4oRXZlbnRDbGFzczogeyBuZXcodHlwZTogc3RyaW5nKTogVDsgZXZlbnRQb29sPzogRXZlbnRbXSB9LCB0eXBlOiBzdHJpbmcpOiBUIHtcclxuICAgICAgICBsZXQgZXZlbnRQb29sOiBFdmVudFtdO1xyXG4gICAgICAgIGxldCBoYXNFdmVudFBvb2wgPSAoRXZlbnRDbGFzcyBhcyBhbnkpLmhhc093blByb3BlcnR5KFwiZXZlbnRQb29sXCIpO1xyXG4gICAgICAgIGlmIChoYXNFdmVudFBvb2wpIHtcclxuICAgICAgICAgICAgZXZlbnRQb29sID0gRXZlbnRDbGFzcy5ldmVudFBvb2w7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWV2ZW50UG9vbCkge1xyXG4gICAgICAgICAgICBldmVudFBvb2wgPSBFdmVudENsYXNzLmV2ZW50UG9vbCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnRQb29sLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQ6IFQgPSA8VD5ldmVudFBvb2wucG9wKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRDbGFzcyh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoRXZlbnQodGFyZ2V0OiBFdmVudERpc3BhdGNoZXIsIHR5cGU6IHN0cmluZywgZGF0YT86IGFueSkge1xyXG4gICAgICAgIGxldCBldmVudCA9IEV2ZW50LmNyZWF0ZShFdmVudCwgdHlwZSk7XHJcbiAgICAgICAgZXZlbnQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIEV2ZW50LnJlbGVhc2UoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVsZWFzZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5jbGVhbigpO1xyXG4gICAgICAgIGxldCBFdmVudENsYXNzOiBhbnkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZXZlbnQpLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIEV2ZW50Q2xhc3MuZXZlbnRQb29sLnB1c2goZXZlbnQpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==