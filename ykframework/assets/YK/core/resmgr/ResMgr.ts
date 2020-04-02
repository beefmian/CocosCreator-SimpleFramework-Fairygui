import { Func } from "../utils/Listener";

class ResInfo {
    public url: string;
    public type: string;
    public isKeepMemory = false;
}

type resDicType = { [key: string]: ResInfo }

export class LoadGroup {
    public Progress: number = 0;
    public needLoad: Array<ResInfo> = new Array<ResInfo>();

    public add(url: string, type?: string, isKeepMemory = true) {
        let index = this.needLoad.findIndex((value: ResInfo, index: number, obj: Array<ResInfo>) => {
            return value.url == url
        });
        if (index == -1) {
            let info = new ResInfo();
            info.isKeepMemory = isKeepMemory;
            info.url = url;
            info.type = type;
            this.needLoad.push(info)
        }
        return this
    }

    public onCompletion(callback: Function, thisObjs: any) {
        this.finish = new Func(callback, thisObjs);
        return this
    }

    public onItemCompletion(callback: Function, thisObjs: any) {
        this.loadItem = new Func(callback, thisObjs);
        return this
    }


    public start() {
        ResMgr.instance.loadGroup(this)
    }

    public loadItem: Func;
    public finish: Func;
}

export class ResMgr {
    constructor() {
        if (ResMgr.mInstance == null) ResMgr.mInstance = this
    }

    private mOldRes: Array<string> = new Array<string>();
    private resDic: Map<string, ResInfo> = new Map<string, ResInfo>();
    private static mInstance: ResMgr = null;

    public static get instance(): ResMgr {
        if (this.mInstance == null) new ResMgr();
        return this.mInstance
    }

    public getRes(url) {
        return cc.loader.getRes(url)
    }

    public loadGroup(loads: LoadGroup) {

        let urls: Array<any> = new Array<any>();
        loads.needLoad.forEach(element => {
            //urls.push({ url: element.url, type: element.type })
            urls.push(element.url)
        });
        console.log("urls=",urls)
        cc.loader.loadResArray(urls, (completedCount: number, totalCount: number, item: cc.Asset) => {
            loads.Progress = completedCount / totalCount * 100
            if (loads.loadItem != null) {
                loads.loadItem.run([loads.Progress])
            }
        }, ((error: Error, resource: any[]) => {
            if (error == null) {
                for (let index = 0; index < resource.length; index++) {
                    let element = resource[index];
                    let info = loads.needLoad[index]
                    //info.asset = element
                    // if (info.isFGUIPack) {
                    //     console.log("info.fullUrl=" + info.fullUrl)
                    //     fgui.UIPackage.addPackage(info.fullUrl)
                    // }
                    if (!this.resDic.has(info.url)) {
                        this.resDic.set(info.url, info)
                    }
                }
            }
            else {
                console.error(error)
            }
            if (loads.finish != null) {
                loads.finish.run()
            }
        }))
    }

    public load(url: any, callback: Function, thisObjs: any) {
        let completeCall = new Func(callback, thisObjs);
        let u: any = {};
        let loadInfo: ResInfo = new ResInfo();
        if (typeof (url) == "string") {
            loadInfo.url = url;
            loadInfo.isKeepMemory = true;
            u = url;
        } else {
            loadInfo = u;
            u.type = url.type;
            u.url = url.url;
        }
        cc.loader.loadRes(url, (error: Error, resource: any) => {
            if (error == null) {
                if (!this.resDic.has(loadInfo.url)) {
                    this.resDic.set(loadInfo.url, loadInfo)
                }
                if (completeCall != null) {
                    completeCall.run();
                }
            } else {
                console.error(error)
            }
        });
    }

    /**
     * 释放资源
     * @param forced 是否强制释放所有
     */
    public pop(forced = false) {
        if (forced) {
            this.mOldRes.splice(0, this.mOldRes.length);

            this.resDic.forEach((v: ResInfo, key: string) => {
                this.mOldRes.push(key)
            });
        }
        while (this.mOldRes.length > 0) {
            let url = this.mOldRes.pop();
            let info = this.resDic.get(url);
            if (info != null) {
                this.resDic.delete(info.url)
            }
            cc.loader.release(url)
        }

        if (forced) {
            this.resDic.clear();
            //释放未完成
        }
    }

    /**
     * 压入要释放的资源
     */
    public push() {
        this.resDic.forEach((v: ResInfo, key: string) => {
            if (!v.isKeepMemory)
                this.mOldRes.push(key)
        });
    }
}