import * as YK from "../../YK";
class LogTask extends YK.Task {
    private readonly log: string;

    constructor(log: string) {
        super();
        this.log = log;
    }

    protected onExecute() {
        super.onExecute();
        YK.TimeDelay.instance.Add(1, 1, () => {
            this.endAction(true);
        }, this);
        console.log(Date.now(), this.log);
    }
}
export class TaskTest {
    static test() {
        console.log("开始任务系统测试")
        let parallel = new YK.TaskList(YK.ActionsExecutionMode.RunInParallel);
        let sequence = new YK.TaskList(YK.ActionsExecutionMode.RunInSequence);
        sequence.addTask(new LogTask("顺序测试1"))
            .addTask(new LogTask("顺序测试2"))
            .addTask(new LogTask("顺序测试3"));

        parallel.addTask(new LogTask("并行测试1"))
            .addTask(new LogTask("并行测试2"))
            .addTask(new LogTask("并行测试3"));

        let task = new YK.TaskList(YK.ActionsExecutionMode.RunInParallel)
            .addTask(sequence)
            .addTask(parallel)
            .execute(null, YK.Func.create(() => {
                console.log("任务完成");
            }, this));
    }
}

