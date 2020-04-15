"use strict";
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