import * as YK from "../../YK"

export class EventTest {
    private static eventDis: EventDispatcher;

    static test() {
        this.eventDis = new EventDispatcher();
        this.testListener();
        this.testSend();
    }

    static testListener() {
        this.eventDis.on(CustomizeEvent.testId, this.testListener1, this, 1);
        this.eventDis.on(CustomizeEvent.testId, this.testListener2, this, 2);

    }

    static testSend() {
        YK.TimeDelay.instance.add(1, 0, () => {
            let ev = YK.Event.create(CustomizeEvent, CustomizeEvent.testId);
            this.eventDis.dispatchEvent(ev);
        }, this);
    }

    static testListener1(ev: YK.Event) {
        console.log("testListener1", ev)
    }

    static testListener2(ev: YK.Event) {
        console.log("testListener2", ev)
    }
}

export class CustomizeEvent extends YK.Event {
    static testId = "testId";
}

export class EventDispatcher extends YK.EventDispatcher {

}