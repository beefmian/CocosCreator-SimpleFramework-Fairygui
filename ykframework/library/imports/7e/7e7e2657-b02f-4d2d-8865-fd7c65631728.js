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