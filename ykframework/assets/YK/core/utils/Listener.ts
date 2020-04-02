export class Func {

    constructor(func, thisObj, args = null) {
        this.func = func;
        this.thisObj = thisObj;
        this.args = args
    }

    static create(func, thisObj, args = null): Func {
        let f = new Func(func, thisObj, args);
        return f;
    }

    public args: any[];
    public func: Function;
    public readonly thisObj: any;

    run(args: any[] = null) {
        if (args == null) {
            args = this.args;
        }
        return this.func.call(this.thisObj, args);
    }
}

export class Listener {
    func: Array<Func> = new Array<Func>();

    static create(func, thisObj = null): Listener {
        let listener = new Listener();
        listener.add(func, thisObj);
        return listener;
    }

    add(func, thisObj = null, args = null) {
        if (!this.has(func, thisObj)) {
            this.func.push(new Func(func, thisObj, args));
        }
    }

    remove(func, thisObj = null) {
        for (let i = this.func.length - 1; i >= 0; i--) {
            let fun = this.func[i];
            if (fun.func == func && fun.thisObj == thisObj) {
                this.func.splice(i, 1);
                break;
            }
        }
    }

    has(func: Function, thisObj: any): boolean {
        for (let i = this.func.length - 1; i >= 0; i--) {
            let fun = this.func[i];
            if (fun.func == func && fun.thisObj == thisObj) {
                return true;
            }
        }
        return false;
    }


    run(args: any[] = null) {
        for (let i = 0; i < this.func.length; i++) {
            let func: Func = this.func[i];
            func.run(args)
        }
    }
}