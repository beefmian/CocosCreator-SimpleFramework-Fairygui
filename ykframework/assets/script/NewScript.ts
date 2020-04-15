// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


import * as example from "../YK/example/index";
import * as YK from "../YK/YK";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        fgui.addLoadHandler();
        fgui.GRoot.create();
    }

    start() {
        // YK.TimeDelay.instance.addUpdate(this.testupdate, this, "args1", "args2", "args3");
        // YK.TimeDelay.instance.add(1, 2, this.timers, this, 'args1', 'args2');
        //example.TaskTest.test();
        //example.ResMgrTest.test();
        example.SceneTest.test();
        //example.EventTest.test();
        //example.TestUI.test();
    }

    // update (dt) {}

    private update_count = 10;
    private testupdate(args1: any, args2: any, args3: any) {
        console.log("on update11 = ", args1, args2, args3);
        this.update_count--;
        if (this.update_count < 0) {
            YK.TimeDelay.instance.removeUpdate(this.testupdate, this);
        }
    }

    private timers(args1: any, args2: any) {
        console.log("on timers = ", args1, args2);
    }
}
