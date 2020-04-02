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

    onLoad () {
        fgui.addLoadHandler();
        fgui.GRoot.create();
    }

    start() {
        //TimeDelay.instance.AddUpdate(this.testupdate, this, ["nmsl"]);
        //YK.TimeDelay.instance.Add(1, 2, this.timers, this, ['caonibaba']);
        // example.TaskTest.test();
        example.ResMgrTest.test();
        //example.SceneTest.test();
        //example.EventTest.test();
        //example.TestUI.test();
    } 

    // update (dt) {}

    private testupdate(args: any) {
        console.log("on update = ", args);
    }

    private timers(args: any) {
        console.log("on timers = ", args);
    }
}
