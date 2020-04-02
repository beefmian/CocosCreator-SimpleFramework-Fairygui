"use strict";
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