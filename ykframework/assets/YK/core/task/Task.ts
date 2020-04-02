import { TimeDelay } from "../utils/TimeDelay";
import { Func } from "../utils/Listener";

export enum Status {
    None = 0,
    Running,
    Success,
    Failure
}

export abstract class Task {
    private latch: boolean;
    private mStatus: Status = Status.None;
    protected mErr = "";
    protected mProgress: number;
    protected mOwnerSystem: any;
    protected mStartedTime: number;
    protected onFinish: Func;

    public get progress(): number {
        return this.mProgress;
    }


    public elapsedTime(): number {

        return cc.director.getTotalTime() - this.mStartedTime;
    }

    public get status(): Status {
        return this.mStatus;
    }


    public get taskName(): string {
        return "";
    }

    public get errInfo(): string {
        return this.mErr;
    }

    public get isRunning(): boolean {
        return this.status == Status.Running;
    }

    public setComplete(callback: Func): Task {
        this.onFinish = callback;
        return this;
    }

    public execute(owner: any = null, callback: Func = null) {
        this.mProgress = 0;
        this.onFinish = callback;
        if (!this.isRunning) {
            TimeDelay.instance.AddUpdate(this.update, this, [owner])
        }
    }

    public tick(owner: any): Status {
        if (this.status == Status.Running) {
            this.onUpdate();
            this.latch = false;
            return this.mStatus;
        }
        //如果任务结束了跳过这一帧//
        if (this.latch) {
            this.latch = false;
            return this.mStatus;
        }
        this.mStartedTime = cc.director.getTotalTime();
        this.mStatus = Status.Running;
        this.mOwnerSystem = owner;
        this.onExecute();
        if (Status.Running == this.mStatus) {
            this.onUpdate();
        }
        return this.mStatus;
    }

    private update(owner: any) {
        if (this.tick(owner) != Status.Running) {
            if (this.onFinish != null){
                this.onFinish.run([this.status == Status.Success]);
            }
        }
    }

    public endAction(success = true) {
        if (this.status != Status.Running) {
            this.onForcedStop();
            return;
        }
        this.latch = true;
        this.mStatus = success ? Status.Success : Status.Failure;
        this.mProgress = this.mStatus == Status.Success ? 1 : 0;
        TimeDelay.instance.RemoveUpdate(this.update, this);
        this.onStop();
    }

    public reset() {
        this.mStatus = Status.None;
        this.onReset();
    }

    protected onExecute() {
    }

    protected onUpdate() {
    }

    protected onStop() {
    }

    protected onReset() {

    }

    protected onForcedStop() {
    }
}