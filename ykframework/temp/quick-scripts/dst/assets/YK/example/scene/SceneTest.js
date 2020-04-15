
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/example/scene/SceneTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        YK.TimeDelay.instance.add(1, 1, function () {
            YK.Scene.go(Scene_1.Scene2.id, "测试2");
        }, this);
    };
    return SceneTest;
}());
exports.SceneTest = SceneTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXHNjZW5lXFxTY2VuZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixpQ0FBeUM7QUFFekM7SUFBQTtJQVlBLENBQUM7SUFYaUIsY0FBSSxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxjQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksY0FBTSxFQUFFLENBQUMsQ0FBQztRQUUzQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWUsgZnJvbSBcIi4uLy4uL1lLXCI7XHJcbmltcG9ydCB7IFNjZW5lMSwgU2NlbmUyIH0gZnJvbSBcIi4vU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZVRlc3Qge1xyXG4gICAgcHVibGljIHN0YXRpYyB0ZXN0KCkge1xyXG4gICAgICAgIFlLLlNjZW5lLmluaXQoKTtcclxuICAgICAgICBZSy5TY2VuZS5hZGQobmV3IFNjZW5lMSgpKTtcclxuICAgICAgICBZSy5TY2VuZS5hZGQobmV3IFNjZW5lMigpKTtcclxuXHJcbiAgICAgICAgWUsuU2NlbmUuZ28oMSwgXCLmtYvor5UxXCIpO1xyXG4gICAgICAgIFlLLlRpbWVEZWxheS5pbnN0YW5jZS5hZGQoMSwgMSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBZSy5TY2VuZS5nbyhTY2VuZTIuaWQsIFwi5rWL6K+VMlwiKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbn0iXX0=