"use strict";
cc._RF.push(module, '85fd4zoNDVNRpBdcEC9pthb', 'SceneTest');
// YK/example/scene/SceneTest.ts

Object.defineProperty(exports, "__esModule", { value: true });
var YK = require("../../YK");
var Scene_1 = require("./Scene");
var SceneTest = /** @class */ (function () {
    function SceneTest() {
    }
    SceneTest.test = function () {
        YK.Scene.init();
        YK.Scene.add(new Scene_1.Scene1());
        YK.Scene.add(new Scene_1.Scene2());
        YK.Scene.go(1, "测试1");
        YK.TimeDelay.instance.Add(1, 1, function () {
            YK.Scene.go(Scene_1.Scene2.id, "测试2");
        }, this);
        // Laya.timer.once(1000, this, () => {
        //     YK.Scene.go(Scene2.id, "测试2");
        // });
    };
    return SceneTest;
}());
exports.SceneTest = SceneTest;

cc._RF.pop();