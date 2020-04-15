
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/utils/Listener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHV0aWxzXFxMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFSSxjQUFZLElBQUksRUFBRSxPQUFPO1FBQUUsY0FBWTthQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7WUFBWiw2QkFBWTs7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUVNLFdBQU0sR0FBYixVQUFjLElBQUksRUFBRSxPQUFPO1FBQUUsY0FBWTthQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7WUFBWiw2QkFBWTs7UUFDckMsSUFBSSxDQUFDLFFBQU8sSUFBSSxZQUFKLElBQUksV0FBQyxJQUFJLEVBQUUsT0FBTyxTQUFLLElBQUksS0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQU1ELGtCQUFHLEdBQUg7UUFBSSxjQUFZO2FBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtZQUFaLHlCQUFZOzs7UUFDWixJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFDRCxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsSUFBSSxZQUFDLElBQUksQ0FBQyxPQUFPLFNBQUssSUFBSSxHQUFFO0lBQ2pELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxvQkFBSTtBQXlCakI7SUFBQTtRQUNJLFNBQUksR0FBZ0IsSUFBSSxLQUFLLEVBQVEsQ0FBQztJQXlDMUMsQ0FBQztJQXZDVSxlQUFNLEdBQWIsVUFBYyxJQUFJLEVBQUUsT0FBYztRQUFkLHdCQUFBLEVBQUEsY0FBYztRQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksSUFBSSxFQUFFLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFBRSxjQUFZO2FBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtZQUFaLDZCQUFZOztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQUssSUFBSSxZQUFKLElBQUksV0FBQyxJQUFJLEVBQUUsT0FBTyxTQUFLLElBQUksTUFBRSxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxJQUFJLEVBQUUsT0FBYztRQUFkLHdCQUFBLEVBQUEsY0FBYztRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBRTtnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksSUFBYyxFQUFFLE9BQVk7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUU7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRCxzQkFBRyxHQUFIO1FBQUksY0FBWTthQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7WUFBWix5QkFBWTs7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksRUFBUSxJQUFJLEVBQUM7U0FDcEI7SUFDTCxDQUFDO0lBQ0wsZUFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRnVuYyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnVuYywgdGhpc09iaiwgLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcclxuICAgICAgICB0aGlzLnRoaXNPYmogPSB0aGlzT2JqO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3NcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlKGZ1bmMsIHRoaXNPYmosIC4uLmFyZ3M6IGFueSk6IEZ1bmMge1xyXG4gICAgICAgIGxldCBmID0gbmV3IEZ1bmMoZnVuYywgdGhpc09iaiwgLi4uYXJncyk7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFyZ3M6IGFueVtdO1xyXG4gICAgcHVibGljIGZ1bmM6IEZ1bmN0aW9uO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHRoaXNPYmo6IGFueTtcclxuXHJcbiAgICBydW4oLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgYXJncyA9IHRoaXMuYXJncztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuYy5jYWxsKHRoaXMudGhpc09iaiwgLi4uYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lciB7XHJcbiAgICBmdW5jOiBBcnJheTxGdW5jPiA9IG5ldyBBcnJheTxGdW5jPigpO1xyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUoZnVuYywgdGhpc09iaiA9IG51bGwpOiBMaXN0ZW5lciB7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKCk7XHJcbiAgICAgICAgbGlzdGVuZXIuYWRkKGZ1bmMsIHRoaXNPYmopO1xyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoZnVuYywgdGhpc09iaiA9IG51bGwsIC4uLmFyZ3M6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXMoZnVuYywgdGhpc09iaikpIHtcclxuICAgICAgICAgICAgdGhpcy5mdW5jLnB1c2gobmV3IEZ1bmMoZnVuYywgdGhpc09iaiwgLi4uYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoZnVuYywgdGhpc09iaiA9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5mdW5jLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBmdW4gPSB0aGlzLmZ1bmNbaV07XHJcbiAgICAgICAgICAgIGlmIChmdW4uZnVuYyA9PSBmdW5jICYmIGZ1bi50aGlzT2JqID09IHRoaXNPYmopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVuYy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXMoZnVuYzogRnVuY3Rpb24sIHRoaXNPYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmZ1bmMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGZ1biA9IHRoaXMuZnVuY1tpXTtcclxuICAgICAgICAgICAgaWYgKGZ1bi5mdW5jID09IGZ1bmMgJiYgZnVuLnRoaXNPYmogPT0gdGhpc09iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBydW4oLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZ1bmMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZ1bmM6IEZ1bmMgPSB0aGlzLmZ1bmNbaV07XHJcbiAgICAgICAgICAgIGZ1bmMucnVuKC4uLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19