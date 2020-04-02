
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/example/resmgr/ResMgrTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00b45RXSa5EJ5AgrSliRhCU', 'ResMgrTest');
// YK/example/resmgr/ResMgrTest.ts

Object.defineProperty(exports, "__esModule", { value: true });
var YK = require("../../YK");
var ResMgrTest = /** @class */ (function () {
    function ResMgrTest() {
    }
    ResMgrTest.test = function () {
        var _this = this;
        var group = new YK.LoadGroup();
        group.add("example/example")
            .add("example/testimg")
            .onCompletion(function () {
            _this.init();
        }, this).start();
    };
    ResMgrTest.init = function () {
        var CanvasNode = cc.find('Canvas');
        var img = YK.ResMgr.instance.getRes("example/testimg");
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame(img);
        CanvasNode.addChild(node);
        var obj = YK.ResMgr.instance.getRes("example/example");
        var newPrefab = cc.instantiate(obj);
        CanvasNode.addChild(newPrefab);
    };
    return ResMgrTest;
}());
exports.ResMgrTest = ResMgrTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXHJlc21nclxcUmVzTWdyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBRS9CO0lBQUE7SUF3QkEsQ0FBQztJQXZCVSxlQUFJLEdBQVg7UUFBQSxpQkFPQztRQU5HLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7YUFDdkIsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2FBQ3RCLFlBQVksQ0FBQztZQUNWLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLGVBQUksR0FBWDtRQUNJLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN0RCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbkMsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFlLIGZyb20gXCIuLi8uLi9ZS1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc01nclRlc3Qge1xyXG4gICAgc3RhdGljIHRlc3QoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IFlLLkxvYWRHcm91cCgpO1xyXG4gICAgICAgIGdyb3VwLmFkZChcImV4YW1wbGUvZXhhbXBsZVwiKVxyXG4gICAgICAgICAgICAuYWRkKFwiZXhhbXBsZS90ZXN0aW1nXCIpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuXHJcbiAgICAgICAgbGV0IGltZyA9IFlLLlJlc01nci5pbnN0YW5jZS5nZXRSZXMoXCJleGFtcGxlL3Rlc3RpbWdcIilcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgdmFyIHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGltZyk7XHJcbiAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgbGV0IG9iaiA9IFlLLlJlc01nci5pbnN0YW5jZS5nZXRSZXMoXCJleGFtcGxlL2V4YW1wbGVcIilcclxuICAgICAgICB2YXIgbmV3UHJlZmFiID0gY2MuaW5zdGFudGlhdGUob2JqKTtcclxuICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKG5ld1ByZWZhYik7XHJcblxyXG4gICAgfVxyXG59Il19