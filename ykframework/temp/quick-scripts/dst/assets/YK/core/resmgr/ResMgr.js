
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/resmgr/ResMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHJlc21nclxcUmVzTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFFekM7SUFBQTtRQUdXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFJRDtJQUFBO1FBQ1csYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7SUFpQzNELENBQUM7SUEvQlUsdUJBQUcsR0FBVixVQUFXLEdBQVcsRUFBRSxJQUFhLEVBQUUsWUFBbUI7UUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7UUFDdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFjLEVBQUUsS0FBYSxFQUFFLEdBQW1CO1lBQ25GLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsUUFBYTtRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFF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QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE5R2MsZ0JBQVMsR0FBVyxJQUFJLENBQUM7SUErRzVDLGFBQUM7Q0F0SEQsQUFzSEMsSUFBQTtBQXRIWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmMgfSBmcm9tIFwiLi4vdXRpbHMvTGlzdGVuZXJcIjtcclxuXHJcbmNsYXNzIFJlc0luZm8ge1xyXG4gICAgcHVibGljIHVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc0tlZXBNZW1vcnkgPSBmYWxzZTtcclxufVxyXG5cclxudHlwZSByZXNEaWNUeXBlID0geyBba2V5OiBzdHJpbmddOiBSZXNJbmZvIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkR3JvdXAge1xyXG4gICAgcHVibGljIFByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIG5lZWRMb2FkOiBBcnJheTxSZXNJbmZvPiA9IG5ldyBBcnJheTxSZXNJbmZvPigpO1xyXG5cclxuICAgIHB1YmxpYyBhZGQodXJsOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcsIGlzS2VlcE1lbW9yeSA9IHRydWUpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm5lZWRMb2FkLmZpbmRJbmRleCgodmFsdWU6IFJlc0luZm8sIGluZGV4OiBudW1iZXIsIG9iajogQXJyYXk8UmVzSW5mbz4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnVybCA9PSB1cmxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGluZm8gPSBuZXcgUmVzSW5mbygpO1xyXG4gICAgICAgICAgICBpbmZvLmlzS2VlcE1lbW9yeSA9IGlzS2VlcE1lbW9yeTtcclxuICAgICAgICAgICAgaW5mby51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgIGluZm8udHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubmVlZExvYWQucHVzaChpbmZvKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNvbXBsZXRpb24oY2FsbGJhY2s6IEZ1bmN0aW9uLCB0aGlzT2JqczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSBuZXcgRnVuYyhjYWxsYmFjaywgdGhpc09ianMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbUNvbXBsZXRpb24oY2FsbGJhY2s6IEZ1bmN0aW9uLCB0aGlzT2JqczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSXRlbSA9IG5ldyBGdW5jKGNhbGxiYWNrLCB0aGlzT2Jqcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIFJlc01nci5pbnN0YW5jZS5sb2FkR3JvdXAodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEl0ZW06IEZ1bmM7XHJcbiAgICBwdWJsaWMgZmluaXNoOiBGdW5jO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzTWdyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChSZXNNZ3IubUluc3RhbmNlID09IG51bGwpIFJlc01nci5tSW5zdGFuY2UgPSB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtT2xkUmVzOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgcmVzRGljOiBNYXA8c3RyaW5nLCBSZXNJbmZvPiA9IG5ldyBNYXA8c3RyaW5nLCBSZXNJbmZvPigpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbUluc3RhbmNlOiBSZXNNZ3IgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFJlc01nciB7XHJcbiAgICAgICAgaWYgKHRoaXMubUluc3RhbmNlID09IG51bGwpIG5ldyBSZXNNZ3IoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tSW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzKHVybCkge1xyXG4gICAgICAgIHJldHVybiBjYy5sb2FkZXIuZ2V0UmVzKHVybClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEdyb3VwKGxvYWRzOiBMb2FkR3JvdXApIHtcclxuXHJcbiAgICAgICAgbGV0IHVybHM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIGxvYWRzLm5lZWRMb2FkLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vdXJscy5wdXNoKHsgdXJsOiBlbGVtZW50LnVybCwgdHlwZTogZWxlbWVudC50eXBlIH0pXHJcbiAgICAgICAgICAgIHVybHMucHVzaChlbGVtZW50LnVybClcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVybHM9XCIsdXJscylcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0FycmF5KHVybHMsIChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGNjLkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRzLlByb2dyZXNzID0gY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50ICogMTAwXHJcbiAgICAgICAgICAgIGlmIChsb2Fkcy5sb2FkSXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsb2Fkcy5sb2FkSXRlbS5ydW4oW2xvYWRzLlByb2dyZXNzXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXNvdXJjZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHJlc291cmNlW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IGxvYWRzLm5lZWRMb2FkW2luZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaW5mby5hc3NldCA9IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaW5mby5pc0ZHVUlQYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaW5mby5mdWxsVXJsPVwiICsgaW5mby5mdWxsVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKGluZm8uZnVsbFVybClcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlc0RpYy5oYXMoaW5mby51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzRGljLnNldChpbmZvLnVybCwgaW5mbylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb2Fkcy5maW5pc2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZHMuZmluaXNoLnJ1bigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCh1cmw6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0aGlzT2JqczogYW55KSB7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlQ2FsbCA9IG5ldyBGdW5jKGNhbGxiYWNrLCB0aGlzT2Jqcyk7XHJcbiAgICAgICAgbGV0IHU6IGFueSA9IHt9O1xyXG4gICAgICAgIGxldCBsb2FkSW5mbzogUmVzSW5mbyA9IG5ldyBSZXNJbmZvKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAodXJsKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGxvYWRJbmZvLnVybCA9IHVybDtcclxuICAgICAgICAgICAgbG9hZEluZm8uaXNLZWVwTWVtb3J5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdSA9IHVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2FkSW5mbyA9IHU7XHJcbiAgICAgICAgICAgIHUudHlwZSA9IHVybC50eXBlO1xyXG4gICAgICAgICAgICB1LnVybCA9IHVybC51cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlc0RpYy5oYXMobG9hZEluZm8udXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzRGljLnNldChsb2FkSW5mby51cmwsIGxvYWRJbmZvKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlQ2FsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVDYWxsLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeK5pS+6LWE5rqQXHJcbiAgICAgKiBAcGFyYW0gZm9yY2VkIOaYr+WQpuW8uuWItumHiuaUvuaJgOaciVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9wKGZvcmNlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGZvcmNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1PbGRSZXMuc3BsaWNlKDAsIHRoaXMubU9sZFJlcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXNEaWMuZm9yRWFjaCgodjogUmVzSW5mbywga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubU9sZFJlcy5wdXNoKGtleSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1PbGRSZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tT2xkUmVzLnBvcCgpO1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IHRoaXMucmVzRGljLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBpZiAoaW5mbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc0RpYy5kZWxldGUoaW5mby51cmwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UodXJsKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZvcmNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc0RpYy5jbGVhcigpO1xyXG4gICAgICAgICAgICAvL+mHiuaUvuacquWujOaIkFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWOi+WFpeimgemHiuaUvueahOi1hOa6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHVzaCgpIHtcclxuICAgICAgICB0aGlzLnJlc0RpYy5mb3JFYWNoKCh2OiBSZXNJbmZvLCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXYuaXNLZWVwTWVtb3J5KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tT2xkUmVzLnB1c2goa2V5KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19