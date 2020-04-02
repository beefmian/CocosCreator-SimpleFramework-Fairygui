"use strict";
cc._RF.push(module, '040c0t2iMpGEpEm8xzOnh7K', 'Listener');
// YK/core/utils/Listener.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Func = /** @class */ (function () {
    function Func(func, thisObj, args) {
        if (args === void 0) { args = null; }
        this.func = func;
        this.thisObj = thisObj;
        this.args = args;
    }
    Func.create = function (func, thisObj, args) {
        if (args === void 0) { args = null; }
        var f = new Func(func, thisObj, args);
        return f;
    };
    Func.prototype.run = function (args) {
        if (args === void 0) { args = null; }
        if (args == null) {
            args = this.args;
        }
        return this.func.call(this.thisObj, args);
    };
    return Func;
}());
exports.Func = Func;
var Listener = /** @class */ (function () {
    function Listener() {
        this.func = new Array();
    }
    Listener.create = function (func, thisObj) {
        if (thisObj === void 0) { thisObj = null; }
        var listener = new Listener();
        listener.add(func, thisObj);
        return listener;
    };
    Listener.prototype.add = function (func, thisObj, args) {
        if (thisObj === void 0) { thisObj = null; }
        if (args === void 0) { args = null; }
        if (!this.has(func, thisObj)) {
            this.func.push(new Func(func, thisObj, args));
        }
    };
    Listener.prototype.remove = function (func, thisObj) {
        if (thisObj === void 0) { thisObj = null; }
        for (var i = this.func.length - 1; i >= 0; i--) {
            var fun = this.func[i];
            if (fun.func == func && fun.thisObj == thisObj) {
                this.func.splice(i, 1);
                break;
            }
        }
    };
    Listener.prototype.has = function (func, thisObj) {
        for (var i = this.func.length - 1; i >= 0; i--) {
            var fun = this.func[i];
            if (fun.func == func && fun.thisObj == thisObj) {
                return true;
            }
        }
        return false;
    };
    Listener.prototype.run = function (args) {
        if (args === void 0) { args = null; }
        for (var i = 0; i < this.func.length; i++) {
            var func = this.func[i];
            func.run(args);
        }
    };
    return Listener;
}());
exports.Listener = Listener;

cc._RF.pop();