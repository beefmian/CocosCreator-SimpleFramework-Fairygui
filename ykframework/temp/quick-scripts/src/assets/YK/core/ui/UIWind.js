"use strict";
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