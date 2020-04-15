
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e7e2ZXsC9NLYhl/XxlYxco', 'NewScript');
// script/NewScript.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var example = require("../YK/example/index");
var YK = require("../YK/YK");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        // update (dt) {}
        _this.update_count = 10;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        fgui.addLoadHandler();
        fgui.GRoot.create();
    };
    NewClass.prototype.start = function () {
        // YK.TimeDelay.instance.addUpdate(this.testupdate, this, "args1", "args2", "args3");
        // YK.TimeDelay.instance.add(1, 2, this.timers, this, 'args1', 'args2');
        //example.TaskTest.test();
        //example.ResMgrTest.test();
        example.SceneTest.test();
        //example.EventTest.test();
        //example.TestUI.test();
    };
    NewClass.prototype.testupdate = function (args1, args2, args3) {
        console.log("on update11 = ", args1, args2, args3);
        this.update_count--;
        if (this.update_count < 0) {
            YK.TimeDelay.instance.removeUpdate(this.testupdate, this);
        }
    };
    NewClass.prototype.timers = function (args1, args2) {
        console.log("on timers = ", args1, args2);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxOZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBR2xGLDZDQUErQztBQUMvQyw2QkFBK0I7QUFFekIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQXdDQztRQXBDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFtQnZCLGlCQUFpQjtRQUVULGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQVk5QixDQUFDO0lBL0JHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxxRkFBcUY7UUFDckYsd0VBQXdFO1FBQ3hFLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QiwyQkFBMkI7UUFDM0Isd0JBQXdCO0lBQzVCLENBQUM7SUFLTyw2QkFBVSxHQUFsQixVQUFtQixLQUFVLEVBQUUsS0FBVSxFQUFFLEtBQVU7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUVPLHlCQUFNLEdBQWQsVUFBZSxLQUFVLEVBQUUsS0FBVTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QzVCO0lBQUQsZUFBQztDQXZDRCxBQXVDQyxDQXZDcUMsRUFBRSxDQUFDLFNBQVMsR0F1Q2pEO2tCQXZDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBleGFtcGxlIGZyb20gXCIuLi9ZSy9leGFtcGxlL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIFlLIGZyb20gXCIuLi9ZSy9ZS1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZmd1aS5hZGRMb2FkSGFuZGxlcigpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWUsuVGltZURlbGF5Lmluc3RhbmNlLmFkZFVwZGF0ZSh0aGlzLnRlc3R1cGRhdGUsIHRoaXMsIFwiYXJnczFcIiwgXCJhcmdzMlwiLCBcImFyZ3MzXCIpO1xyXG4gICAgICAgIC8vIFlLLlRpbWVEZWxheS5pbnN0YW5jZS5hZGQoMSwgMiwgdGhpcy50aW1lcnMsIHRoaXMsICdhcmdzMScsICdhcmdzMicpO1xyXG4gICAgICAgIC8vZXhhbXBsZS5UYXNrVGVzdC50ZXN0KCk7XHJcbiAgICAgICAgLy9leGFtcGxlLlJlc01nclRlc3QudGVzdCgpO1xyXG4gICAgICAgIGV4YW1wbGUuU2NlbmVUZXN0LnRlc3QoKTtcclxuICAgICAgICAvL2V4YW1wbGUuRXZlbnRUZXN0LnRlc3QoKTtcclxuICAgICAgICAvL2V4YW1wbGUuVGVzdFVJLnRlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlX2NvdW50ID0gMTA7XHJcbiAgICBwcml2YXRlIHRlc3R1cGRhdGUoYXJnczE6IGFueSwgYXJnczI6IGFueSwgYXJnczM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gdXBkYXRlMTEgPSBcIiwgYXJnczEsIGFyZ3MyLCBhcmdzMyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfY291bnQtLTtcclxuICAgICAgICBpZiAodGhpcy51cGRhdGVfY291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIFlLLlRpbWVEZWxheS5pbnN0YW5jZS5yZW1vdmVVcGRhdGUodGhpcy50ZXN0dXBkYXRlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lcnMoYXJnczE6IGFueSwgYXJnczI6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gdGltZXJzID0gXCIsIGFyZ3MxLCBhcmdzMik7XHJcbiAgICB9XHJcbn1cclxuIl19