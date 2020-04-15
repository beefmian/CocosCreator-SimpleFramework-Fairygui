
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
            urls.push(element.url);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHJlc21nclxcUmVzTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFFekM7SUFBQTtRQUdXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFJRDtJQUFBO1FBQ1csYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7SUFpQzNELENBQUM7SUEvQlUsdUJBQUcsR0FBVixVQUFXLEdBQVcsRUFBRSxJQUFhLEVBQUUsWUFBbUI7UUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7UUFDdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFjLEVBQUUsS0FBYSxFQUFFLEdBQW1CO1lBQ25GLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsUUFBYTtRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFF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QztDQXBIRCxBQW9IQyxJQUFBO0FBcEhZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuYyB9IGZyb20gXCIuLi91dGlscy9MaXN0ZW5lclwiO1xyXG5cclxuY2xhc3MgUmVzSW5mbyB7XHJcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzS2VlcE1lbW9yeSA9IGZhbHNlO1xyXG59XHJcblxyXG50eXBlIHJlc0RpY1R5cGUgPSB7IFtrZXk6IHN0cmluZ106IFJlc0luZm8gfVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRHcm91cCB7XHJcbiAgICBwdWJsaWMgUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbmVlZExvYWQ6IEFycmF5PFJlc0luZm8+ID0gbmV3IEFycmF5PFJlc0luZm8+KCk7XHJcblxyXG4gICAgcHVibGljIGFkZCh1cmw6IHN0cmluZywgdHlwZT86IHN0cmluZywgaXNLZWVwTWVtb3J5ID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubmVlZExvYWQuZmluZEluZGV4KCh2YWx1ZTogUmVzSW5mbywgaW5kZXg6IG51bWJlciwgb2JqOiBBcnJheTxSZXNJbmZvPikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudXJsID09IHVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IG5ldyBSZXNJbmZvKCk7XHJcbiAgICAgICAgICAgIGluZm8uaXNLZWVwTWVtb3J5ID0gaXNLZWVwTWVtb3J5O1xyXG4gICAgICAgICAgICBpbmZvLnVybCA9IHVybDtcclxuICAgICAgICAgICAgaW5mby50eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5uZWVkTG9hZC5wdXNoKGluZm8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29tcGxldGlvbihjYWxsYmFjazogRnVuY3Rpb24sIHRoaXNPYmpzOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaCA9IG5ldyBGdW5jKGNhbGxiYWNrLCB0aGlzT2Jqcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtQ29tcGxldGlvbihjYWxsYmFjazogRnVuY3Rpb24sIHRoaXNPYmpzOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxvYWRJdGVtID0gbmV3IEZ1bmMoY2FsbGJhY2ssIHRoaXNPYmpzKTtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgUmVzTWdyLmluc3RhbmNlLmxvYWRHcm91cCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSXRlbTogRnVuYztcclxuICAgIHB1YmxpYyBmaW5pc2g6IEZ1bmM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNNZ3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFJlc01nci5tSW5zdGFuY2UgPT0gbnVsbCkgUmVzTWdyLm1JbnN0YW5jZSA9IHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1PbGRSZXM6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgcHJpdmF0ZSByZXNEaWM6IE1hcDxzdHJpbmcsIFJlc0luZm8+ID0gbmV3IE1hcDxzdHJpbmcsIFJlc0luZm8+KCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtSW5zdGFuY2U6IFJlc01nciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogUmVzTWdyIHtcclxuICAgICAgICBpZiAodGhpcy5tSW5zdGFuY2UgPT0gbnVsbCkgbmV3IFJlc01ncigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1JbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLmxvYWRlci5nZXRSZXModXJsKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkR3JvdXAobG9hZHM6IExvYWRHcm91cCkge1xyXG5cclxuICAgICAgICBsZXQgdXJsczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgbG9hZHMubmVlZExvYWQuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdXJscy5wdXNoKGVsZW1lbnQudXJsKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQXJyYXkodXJscywgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogY2MuQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgbG9hZHMuUHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQgKiAxMDBcclxuICAgICAgICAgICAgaWYgKGxvYWRzLmxvYWRJdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRzLmxvYWRJdGVtLnJ1bihbbG9hZHMuUHJvZ3Jlc3NdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKChlcnJvcjogRXJyb3IsIHJlc291cmNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc291cmNlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gcmVzb3VyY2VbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0gbG9hZHMubmVlZExvYWRbaW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbmZvLmFzc2V0ID0gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChpbmZvLmlzRkdVSVBhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJpbmZvLmZ1bGxVcmw9XCIgKyBpbmZvLmZ1bGxVcmwpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoaW5mby5mdWxsVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVzRGljLmhhcyhpbmZvLnVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNEaWMuc2V0KGluZm8udXJsLCBpbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvYWRzLmZpbmlzaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsb2Fkcy5maW5pc2gucnVuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKHVybDogYW55LCBjYWxsYmFjazogRnVuY3Rpb24sIHRoaXNPYmpzOiBhbnkpIHtcclxuICAgICAgICBsZXQgY29tcGxldGVDYWxsID0gbmV3IEZ1bmMoY2FsbGJhY2ssIHRoaXNPYmpzKTtcclxuICAgICAgICBsZXQgdTogYW55ID0ge307XHJcbiAgICAgICAgbGV0IGxvYWRJbmZvOiBSZXNJbmZvID0gbmV3IFJlc0luZm8oKTtcclxuICAgICAgICBpZiAodHlwZW9mICh1cmwpID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgbG9hZEluZm8udXJsID0gdXJsO1xyXG4gICAgICAgICAgICBsb2FkSW5mby5pc0tlZXBNZW1vcnkgPSB0cnVlO1xyXG4gICAgICAgICAgICB1ID0gdXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvYWRJbmZvID0gdTtcclxuICAgICAgICAgICAgdS50eXBlID0gdXJsLnR5cGU7XHJcbiAgICAgICAgICAgIHUudXJsID0gdXJsLnVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVzRGljLmhhcyhsb2FkSW5mby51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNEaWMuc2V0KGxvYWRJbmZvLnVybCwgbG9hZEluZm8pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVDYWxsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNhbGwucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph4rmlL7otYTmupBcclxuICAgICAqIEBwYXJhbSBmb3JjZWQg5piv5ZCm5by65Yi26YeK5pS+5omA5pyJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3AoZm9yY2VkID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoZm9yY2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubU9sZFJlcy5zcGxpY2UoMCwgdGhpcy5tT2xkUmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc0RpYy5mb3JFYWNoKCh2OiBSZXNJbmZvLCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tT2xkUmVzLnB1c2goa2V5KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoaXMubU9sZFJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLm1PbGRSZXMucG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gdGhpcy5yZXNEaWMuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIGlmIChpbmZvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzRGljLmRlbGV0ZShpbmZvLnVybClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSh1cmwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm9yY2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzRGljLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIC8v6YeK5pS+5pyq5a6M5oiQXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y6L5YWl6KaB6YeK5pS+55qE6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwdXNoKCkge1xyXG4gICAgICAgIHRoaXMucmVzRGljLmZvckVhY2goKHY6IFJlc0luZm8sIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdi5pc0tlZXBNZW1vcnkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1PbGRSZXMucHVzaChrZXkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=