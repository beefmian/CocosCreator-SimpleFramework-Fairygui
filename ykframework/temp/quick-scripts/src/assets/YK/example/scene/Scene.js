"use strict";
cc._RF.push(module, 'e6905IiB1lJrYSZWdxg2fKz', 'Scene');
// YK/example/scene/Scene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var YK = require("../../YK");
var Scene1 = /** @class */ (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Scene1.prototype, "sceneId", {
        get: function () {
            return Scene1.id;
        },
        enumerable: true,
        configurable: true
    });
    Scene1.prototype.onSceneEnter = function (prevState, param) {
        console.log("进入场景1", prevState, "参数", param);
    };
    Scene1.prototype.onLeaveScene = function (nextState, param) {
        console.log("离开场景1", nextState, "参数", param);
    };
    Scene1.id = 1;
    return Scene1;
}(YK.Scene));
exports.Scene1 = Scene1;
var Scene2 = /** @class */ (function (_super) {
    __extends(Scene2, _super);
    function Scene2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Scene2.prototype, "sceneId", {
        get: function () {
            return Scene2.id;
        },
        enumerable: true,
        configurable: true
    });
    Scene2.prototype.onSceneEnter = function (prevState, param) {
        console.log("进入场景2", prevState, "参数", param);
    };
    Scene2.prototype.onLeaveScene = function (nextState, param) {
        console.log("离开场景2", nextState, "参数", param);
    };
    Scene2.id = 2;
    return Scene2;
}(YK.Scene));
exports.Scene2 = Scene2;

cc._RF.pop();