import * as YK from "../../YK";

export class ResMgrTest {
    static test() {
        let group = new YK.LoadGroup();
        group.add("example/example")
            .add("example/testimg")
            .onCompletion(() => {
                this.init();
            }, this).start();
    }

    static init() {
        var CanvasNode = cc.find('Canvas');

        let img = YK.ResMgr.instance.getRes("example/testimg")
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame(img);
        CanvasNode.addChild(node);

        let obj = YK.ResMgr.instance.getRes("example/example")
        var newPrefab = cc.instantiate(obj);
        CanvasNode.addChild(newPrefab);

    }
}