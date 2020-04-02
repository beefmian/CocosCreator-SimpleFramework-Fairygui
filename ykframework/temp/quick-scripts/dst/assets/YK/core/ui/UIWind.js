
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/ui/UIWind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fe7eXEM3BFCZVTGP4YY0tM', 'UIWind');
// YK/core/ui/UIWind.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIConfig_1 = require("./UIConfig");
var Listener_1 = require("../utils/Listener");
var UIPackage = fgui.UIPackage;
var LoadFGUIPack = /** @class */ (function () {
    function LoadFGUIPack(packName) {
        this.finish = null;
        this.fileName = UIConfig_1.UIConfig.packRootUrl + "/" + packName;
    }
    LoadFGUIPack.prototype.load = function (callback, thisObj) {
        this.finish = Listener_1.Func.create(callback, thisObj);
        fgui.UIPackage.loadPackage(this.fileName, this.loadDone.bind(this));
    };
    LoadFGUIPack.prototype.loadDone = function () {
        this.loaded = true;
        if (this.finish != null) {
            this.loaded = true;
            this.finish.run();
        }
    };
    return LoadFGUIPack;
}());
exports.LoadFGUIPack = LoadFGUIPack;
var UIWind = /** @class */ (function (_super) {
    __extends(UIWind, _super);
    function UIWind(packName, resName) {
        var _this = _super.call(this) || this;
        _this.mCloseBtnName = "BtnClose";
        _this.packName = packName;
        _this.resName = resName;
        _this.url = "ui://" + packName + "/" + resName;
        _this.addUISource(new LoadFGUIPack(packName));
        return _this;
    }
    UIWind.add = function (wind) {
        this.mWinds.set(wind.url, wind);
    };
    UIWind.remove = function (wind) {
        if (this.mWinds.has(wind.url)) {
            this.mWinds.delete(wind.url);
            wind.dispose();
        }
    };
    UIWind.show = function (url, param) {
        if (this.mWinds.has(url)) {
            var wind = this.mWinds.get(url);
            wind.data = param;
            if (wind.isShowing) {
                wind.onShown();
            }
            else {
                wind.show();
            }
        }
        else {
            console.error("显示窗口失败没有注册窗口 url:" + url);
        }
    };
    UIWind.hide = function (url, param) {
        if (this.mWinds.has(url)) {
            var wind = this.mWinds.get(url);
            if (wind.isShowing) {
                wind.data = param;
                wind.hide();
            }
        }
        else {
            console.error("隐藏窗口失败没有注册窗口 url:" + url);
        }
    };
    UIWind.hideAll = function (filter) {
        if (filter === void 0) { filter = null; }
        this.mWinds.forEach(function (v, k) {
            if (v.isShowing && (filter == null || filter.findIndex(function (a) { return a == v.url; }) == -1)) {
                v.hide();
            }
        });
    };
    UIWind.delAll = function (filter) {
        if (filter === void 0) { filter = null; }
        var needDel = new Array();
        this.mWinds.forEach(function (v, k) {
            if (filter == null || filter.findIndex(function (a) { return a == v.url; }) == -1) {
                needDel.push(v.url);
            }
        });
        for (var i = 0; i < needDel.length; i++) {
            this.remove(this.mWinds.get(needDel[i]));
        }
    };
    UIWind.prototype.onInit = function () {
        console.log("显示成功");
        var windObj = UIPackage.createObjectFromURL(this.url);
        if (windObj == null) {
            console.error("创建窗口失败 url" + this.url);
            return;
        }
        this.contentPane = windObj.asCom;
        this.width = fairygui.GRoot.inst.width;
        this.height = fairygui.GRoot.inst.height;
        this.centerOn(fgui.GRoot.inst, true);
        if (this.mCloseBtnName != null && this.mCloseBtnName.length != 0) {
            var btnClose = this.contentPane.getChild(this.mCloseBtnName);
            if (btnClose && (btnClose.asCom || btnClose.asButton)) {
                this.closeButton = btnClose;
            }
        }
    };
    UIWind.mWinds = new Map();
    return UIWind;
}(fgui.Window));
exports.UIWind = UIWind;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHVpXFxVSVdpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFxQztBQUNyQyw4Q0FBeUM7QUFFekMsSUFBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUVsQztJQU1JLHNCQUFZLFFBQVE7UUFIcEIsV0FBTSxHQUFTLElBQUksQ0FBQztRQUloQixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFDMUQsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxRQUFrQixFQUFFLE9BQVk7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLG9DQUFZO0FBd0J6QjtJQUE0QiwwQkFBVztJQVVuQyxnQkFBWSxRQUFRLEVBQUUsT0FBTztRQUE3QixZQUNJLGlCQUFPLFNBTVY7UUFUa0IsbUJBQWEsR0FBRyxVQUFVLENBQUM7UUFJMUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLE9BQU8sR0FB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UUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQy9CO1NBQ0o7SUFDTCxDQUFDO0lBNUZ1QixhQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUErRi9ELGFBQUM7Q0FqR0QsQUFpR0MsQ0FqRzJCLElBQUksQ0FBQyxNQUFNLEdBaUd0QztBQWpHWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJQ29uZmlnIH0gZnJvbSBcIi4vVUlDb25maWdcIlxyXG5pbXBvcnQgeyBGdW5jIH0gZnJvbSBcIi4uL3V0aWxzL0xpc3RlbmVyXCI7XHJcbmltcG9ydCBJVUlTb3VyY2UgPSBmZ3VpLklVSVNvdXJjZTtcclxuaW1wb3J0IFVJUGFja2FnZSA9IGZndWkuVUlQYWNrYWdlO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRGR1VJUGFjayBpbXBsZW1lbnRzIElVSVNvdXJjZSB7XHJcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gICAgbG9hZGVkOiBib29sZWFuO1xyXG4gICAgZmluaXNoOiBGdW5jID0gbnVsbDtcclxuIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhY2tOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IFVJQ29uZmlnLnBhY2tSb290VXJsICsgXCIvXCIgKyBwYWNrTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKGNhbGxiYWNrOiBGdW5jdGlvbiwgdGhpc09iajogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maW5pc2ggPSBGdW5jLmNyZWF0ZShjYWxsYmFjaywgdGhpc09iaik7XHJcbiAgICAgICAgZmd1aS5VSVBhY2thZ2UubG9hZFBhY2thZ2UodGhpcy5maWxlTmFtZSwgdGhpcy5sb2FkRG9uZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRG9uZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluaXNoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaC5ydW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVSVdpbmQgZXh0ZW5kcyBmZ3VpLldpbmRvdyB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgbVdpbmRzID0gbmV3IE1hcDxzdHJpbmcsIFVJV2luZD4oKTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFja05hbWU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVzTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCByZWFkb25seSBtQ2xvc2VCdG5OYW1lID0gXCJCdG5DbG9zZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhY2tOYW1lLCByZXNOYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhY2tOYW1lID0gcGFja05hbWU7XHJcbiAgICAgICAgdGhpcy5yZXNOYW1lID0gcmVzTmFtZTtcclxuICAgICAgICB0aGlzLnVybCA9IGB1aTovLyR7cGFja05hbWV9LyR7cmVzTmFtZX1gO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFVJU291cmNlKG5ldyBMb2FkRkdVSVBhY2socGFja05hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZCh3aW5kOiBVSVdpbmQpIHtcclxuICAgICAgICB0aGlzLm1XaW5kcy5zZXQod2luZC51cmwsIHdpbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlKHdpbmQ6IFVJV2luZCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1XaW5kcy5oYXMod2luZC51cmwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubVdpbmRzLmRlbGV0ZSh3aW5kLnVybCk7XHJcbiAgICAgICAgICAgIHdpbmQuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3codXJsOiBzdHJpbmcsIHBhcmFtPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubVdpbmRzLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgIGxldCB3aW5kID0gdGhpcy5tV2luZHMuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIHdpbmQuZGF0YSA9IHBhcmFtO1xyXG4gICAgICAgICAgICBpZiAod2luZC5pc1Nob3dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmQub25TaG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZC5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5pi+56S656qX5Y+j5aSx6LSl5rKh5pyJ5rOo5YaM56qX5Y+jIHVybDpcIiArIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZSh1cmw6IHN0cmluZywgcGFyYW0/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5tV2luZHMuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgbGV0IHdpbmQgPSB0aGlzLm1XaW5kcy5nZXQodXJsKTtcclxuICAgICAgICAgICAgaWYgKHdpbmQuaXNTaG93aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kLmRhdGEgPSBwYXJhbTtcclxuICAgICAgICAgICAgICAgIHdpbmQuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIumakOiXj+eql+WPo+Wksei0peayoeacieazqOWGjOeql+WPoyB1cmw6XCIgKyB1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhpZGVBbGwoZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubVdpbmRzLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgaWYgKHYuaXNTaG93aW5nICYmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIuZmluZEluZGV4KGEgPT4gYSA9PSB2LnVybCkgPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICB2LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsQWxsKGZpbHRlcjogQXJyYXk8c3RyaW5nPiA9IG51bGwpIHtcclxuICAgICAgICBsZXQgbmVlZERlbCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgdGhpcy5tV2luZHMuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyLmZpbmRJbmRleChhID0+IGEgPT0gdi51cmwpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZWVkRGVsLnB1c2godi51cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVlZERlbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLm1XaW5kcy5nZXQobmVlZERlbFtpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pi+56S65oiQ5YqfXCIpO1xyXG4gICAgICAgIGxldCB3aW5kT2JqID0gVUlQYWNrYWdlLmNyZWF0ZU9iamVjdEZyb21VUkwodGhpcy51cmwpO1xyXG4gICAgICAgIGlmICh3aW5kT2JqID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIm+W7uueql+WPo+Wksei0pSB1cmxcIiArIHRoaXMudXJsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRlbnRQYW5lID0gd2luZE9iai5hc0NvbTtcclxuICAgICAgICB0aGlzLndpZHRoID0gZmFpcnlndWkuR1Jvb3QuaW5zdC53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGZhaXJ5Z3VpLkdSb290Lmluc3QuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2VudGVyT24oZmd1aS5HUm9vdC5pbnN0LCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5tQ2xvc2VCdG5OYW1lICE9IG51bGwgJiYgdGhpcy5tQ2xvc2VCdG5OYW1lLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBidG5DbG9zZSA9IHRoaXMuY29udGVudFBhbmUuZ2V0Q2hpbGQodGhpcy5tQ2xvc2VCdG5OYW1lKTtcclxuICAgICAgICAgICAgaWYgKGJ0bkNsb3NlICYmIChidG5DbG9zZS5hc0NvbSB8fCBidG5DbG9zZS5hc0J1dHRvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBidG5DbG9zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbiJdfQ==