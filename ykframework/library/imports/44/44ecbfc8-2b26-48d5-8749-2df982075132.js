"use strict";
cc._RF.push(module, '44ecb/IKyZI1YdJLfmCB1Ey', 'ResMgr');
// YK/core/resmgr/ResMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Listener_1 = require("../utils/Listener");
var ResInfo = /** @class */ (function () {
    function ResInfo() {
        this.isKeepMemory = false;
    }
    return ResInfo;
}());
var LoadGroup = /** @class */ (function () {
    function LoadGroup() {
        this.Progress = 0;
        this.needLoad = new Array();
    }
    LoadGroup.prototype.add = function (url, type, isKeepMemory) {
        if (isKeepMemory === void 0) { isKeepMemory = true; }
        var index = this.needLoad.findIndex(function (value, index, obj) {
            return value.url == url;
        });
        if (index == -1) {
            var info = new ResInfo();
            info.isKeepMemory = isKeepMemory;
            info.url = url;
            info.type = type;
            this.needLoad.push(info);
        }
        return this;
    };
    LoadGroup.prototype.onCompletion = function (callback, thisObjs) {
        this.finish = new Listener_1.Func(callback, thisObjs);
        return this;
    };
    LoadGroup.prototype.onItemCompletion = function (callback, thisObjs) {
        this.loadItem = new Listener_1.Func(callback, thisObjs);
        return this;
    };
    LoadGroup.prototype.start = function () {
        ResMgr.instance.loadGroup(this);
    };
    return LoadGroup;
}());
exports.LoadGroup = LoadGroup;
var ResMgr = /** @class */ (function () {
    function ResMgr() {
        this.mOldRes = new Array();
        this.resDic = new Map();
        if (ResMgr.mInstance == null)
            ResMgr.mInstance = this;
    }
    Object.defineProperty(ResMgr, "instance", {
        get: function () {
            if (this.mInstance == null)
                new ResMgr();
            return this.mInstance;
        },
        enumerable: true,
        configurable: true
    });
    ResMgr.prototype.getRes = function (url) {
        return cc.loader.getRes(url);
    };
    ResMgr.prototype.loadGroup = function (loads) {
        var _this = this;
        var urls = new Array();
        loads.needLoad.forEach(function (element) {
            //urls.push({ url: element.url, type: element.type })
            urls.push(element.url);
        });
        console.log("urls=", urls);
        cc.loader.loadResArray(urls, function (completedCount, totalCount, item) {
            loads.Progress = completedCount / totalCount * 100;
            if (loads.loadItem != null) {
                loads.loadItem.run([loads.Progress]);
            }
        }, (function (error, resource) {
            if (error == null) {
                for (var index = 0; index < resource.length; index++) {
                    var element = resource[index];
                    var info = loads.needLoad[index];
                    //info.asset = element
                    // if (info.isFGUIPack) {
                    //     console.log("info.fullUrl=" + info.fullUrl)
                    //     fgui.UIPackage.addPackage(info.fullUrl)
                    // }
                    if (!_this.resDic.has(info.url)) {
                        _this.resDic.set(info.url, info);
                    }
                }
            }
            else {
                console.error(error);
            }
            if (loads.finish != null) {
                loads.finish.run();
            }
        }));
    };
    ResMgr.prototype.load = function (url, callback, thisObjs) {
        var _this = this;
        var completeCall = new Listener_1.Func(callback, thisObjs);
        var u = {};
        var loadInfo = new ResInfo();
        if (typeof (url) == "string") {
            loadInfo.url = url;
            loadInfo.isKeepMemory = true;
            u = url;
        }
        else {
            loadInfo = u;
            u.type = url.type;
            u.url = url.url;
        }
        cc.loader.loadRes(url, function (error, resource) {
            if (error == null) {
                if (!_this.resDic.has(loadInfo.url)) {
                    _this.resDic.set(loadInfo.url, loadInfo);
                }
                if (completeCall != null) {
                    completeCall.run();
                }
            }
            else {
                console.error(error);
            }
        });
    };
    /**
     * 释放资源
     * @param forced 是否强制释放所有
     */
    ResMgr.prototype.pop = function (forced) {
        var _this = this;
        if (forced === void 0) { forced = false; }
        if (forced) {
            this.mOldRes.splice(0, this.mOldRes.length);
            this.resDic.forEach(function (v, key) {
                _this.mOldRes.push(key);
            });
        }
        while (this.mOldRes.length > 0) {
            var url = this.mOldRes.pop();
            var info = this.resDic.get(url);
            if (info != null) {
                this.resDic.delete(info.url);
            }
            cc.loader.release(url);
        }
        if (forced) {
            this.resDic.clear();
            //释放未完成
        }
    };
    /**
     * 压入要释放的资源
     */
    ResMgr.prototype.push = function () {
        var _this = this;
        this.resDic.forEach(function (v, key) {
            if (!v.isKeepMemory)
                _this.mOldRes.push(key);
        });
    };
    ResMgr.mInstance = null;
    return ResMgr;
}());
exports.ResMgr = ResMgr;

cc._RF.pop();