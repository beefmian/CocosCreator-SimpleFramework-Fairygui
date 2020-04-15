"use strict";
cc._RF.push(module, '040c0t2iMpGEpEm8xzOnh7K', 'Listener');
// YK/core/utils/Listener.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Func = /** @class */ (function () {
    function Func(func, thisObj) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.func = func;
        this.thisObj = thisObj;
        this.args = args;
    }
    Func.create = function (func, thisObj) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var f = new (Func.bind.apply(Func, [void 0, func, thisObj].concat(args)))();
        return f;
    };
    Func.prototype.run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        if (args == null || args.length < 1) {
            args = this.args;
        }
        return (_a = this.func).call.apply(_a, [this.thisObj].concat(args));
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
    Listener.prototype.add = function (func, thisObj) {
        if (thisObj === void 0) { thisObj = null; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (!this.has(func, thisObj)) {
            this.func.push(new (Func.bind.apply(Func, [void 0, func, thisObj].concat(args)))());
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
    Listener.prototype.run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < this.func.length; i++) {
            var func = this.func[i];
            func.run.apply(func, args);
        }
    };
    return Listener;
}());
exports.Listener = Listener;

cc._RF.pop();