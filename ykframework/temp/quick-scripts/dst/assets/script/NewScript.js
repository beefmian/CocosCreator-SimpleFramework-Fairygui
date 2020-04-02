
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        fgui.addLoadHandler();
        fgui.GRoot.create();
    };
    NewClass.prototype.start = function () {
        //TimeDelay.instance.AddUpdate(this.testupdate, this, ["nmsl"]);
        //YK.TimeDelay.instance.Add(1, 2, this.timers, this, ['caonibaba']);
        // example.TaskTest.test();
        example.ResMgrTest.test();
        //example.SceneTest.test();
        //example.EventTest.test();
        //example.TestUI.test();
    };
    // update (dt) {}
    NewClass.prototype.testupdate = function (args) {
        console.log("on update = ", args);
    };
    NewClass.prototype.timers = function (args) {
        console.log("on timers = ", args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxOZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBR2xGLDZDQUErQztBQUd6QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBbUNDO1FBL0JHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUE0QjNCLENBQUM7SUExQkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLGdFQUFnRTtRQUNoRSxvRUFBb0U7UUFDcEUsMkJBQTJCO1FBQzNCLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQix3QkFBd0I7SUFDNUIsQ0FBQztJQUVELGlCQUFpQjtJQUVULDZCQUFVLEdBQWxCLFVBQW1CLElBQVM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLHlCQUFNLEdBQWQsVUFBZSxJQUFTO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuaW1wb3J0ICogYXMgZXhhbXBsZSBmcm9tIFwiLi4vWUsvZXhhbXBsZS9pbmRleFwiO1xyXG5pbXBvcnQgKiBhcyBZSyBmcm9tIFwiLi4vWUsvWUtcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBmZ3VpLmFkZExvYWRIYW5kbGVyKCk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5jcmVhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL1RpbWVEZWxheS5pbnN0YW5jZS5BZGRVcGRhdGUodGhpcy50ZXN0dXBkYXRlLCB0aGlzLCBbXCJubXNsXCJdKTtcclxuICAgICAgICAvL1lLLlRpbWVEZWxheS5pbnN0YW5jZS5BZGQoMSwgMiwgdGhpcy50aW1lcnMsIHRoaXMsIFsnY2FvbmliYWJhJ10pO1xyXG4gICAgICAgIC8vIGV4YW1wbGUuVGFza1Rlc3QudGVzdCgpO1xyXG4gICAgICAgIGV4YW1wbGUuUmVzTWdyVGVzdC50ZXN0KCk7XHJcbiAgICAgICAgLy9leGFtcGxlLlNjZW5lVGVzdC50ZXN0KCk7XHJcbiAgICAgICAgLy9leGFtcGxlLkV2ZW50VGVzdC50ZXN0KCk7XHJcbiAgICAgICAgLy9leGFtcGxlLlRlc3RVSS50ZXN0KCk7XHJcbiAgICB9IFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXN0dXBkYXRlKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gdXBkYXRlID0gXCIsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGltZXJzKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gdGltZXJzID0gXCIsIGFyZ3MpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==