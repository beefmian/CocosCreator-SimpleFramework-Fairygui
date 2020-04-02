
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHV0aWxzXFxMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFSSxjQUFZLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBVztRQUFYLHFCQUFBLEVBQUEsV0FBVztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNwQixDQUFDO0lBRU0sV0FBTSxHQUFiLFVBQWMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFXO1FBQVgscUJBQUEsRUFBQSxXQUFXO1FBQ3BDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBTUQsa0JBQUcsR0FBSCxVQUFJLElBQWtCO1FBQWxCLHFCQUFBLEVBQUEsV0FBa0I7UUFDbEIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLG9CQUFJO0FBeUJqQjtJQUFBO1FBQ0ksU0FBSSxHQUFnQixJQUFJLEtBQUssRUFBUSxDQUFDO0lBeUMxQyxDQUFDO0lBdkNVLGVBQU0sR0FBYixVQUFjLElBQUksRUFBRSxPQUFjO1FBQWQsd0JBQUEsRUFBQSxjQUFjO1FBQzlCLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDOUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxJQUFJLEVBQUUsT0FBYyxFQUFFLElBQVc7UUFBM0Isd0JBQUEsRUFBQSxjQUFjO1FBQUUscUJBQUEsRUFBQSxXQUFXO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLElBQUksRUFBRSxPQUFjO1FBQWQsd0JBQUEsRUFBQSxjQUFjO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxJQUFjLEVBQUUsT0FBWTtRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBRTtnQkFDNUMsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdELHNCQUFHLEdBQUgsVUFBSSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFdBQWtCO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDakI7SUFDTCxDQUFDO0lBQ0wsZUFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRnVuYyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnVuYywgdGhpc09iaiwgYXJncyA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xyXG4gICAgICAgIHRoaXMudGhpc09iaiA9IHRoaXNPYmo7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJnc1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUoZnVuYywgdGhpc09iaiwgYXJncyA9IG51bGwpOiBGdW5jIHtcclxuICAgICAgICBsZXQgZiA9IG5ldyBGdW5jKGZ1bmMsIHRoaXNPYmosIGFyZ3MpO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcmdzOiBhbnlbXTtcclxuICAgIHB1YmxpYyBmdW5jOiBGdW5jdGlvbjtcclxuICAgIHB1YmxpYyByZWFkb25seSB0aGlzT2JqOiBhbnk7XHJcblxyXG4gICAgcnVuKGFyZ3M6IGFueVtdID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChhcmdzID09IG51bGwpIHtcclxuICAgICAgICAgICAgYXJncyA9IHRoaXMuYXJncztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuYy5jYWxsKHRoaXMudGhpc09iaiwgYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lciB7XHJcbiAgICBmdW5jOiBBcnJheTxGdW5jPiA9IG5ldyBBcnJheTxGdW5jPigpO1xyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUoZnVuYywgdGhpc09iaiA9IG51bGwpOiBMaXN0ZW5lciB7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKCk7XHJcbiAgICAgICAgbGlzdGVuZXIuYWRkKGZ1bmMsIHRoaXNPYmopO1xyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoZnVuYywgdGhpc09iaiA9IG51bGwsIGFyZ3MgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhmdW5jLCB0aGlzT2JqKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmMucHVzaChuZXcgRnVuYyhmdW5jLCB0aGlzT2JqLCBhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShmdW5jLCB0aGlzT2JqID0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmZ1bmMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGZ1biA9IHRoaXMuZnVuY1tpXTtcclxuICAgICAgICAgICAgaWYgKGZ1bi5mdW5jID09IGZ1bmMgJiYgZnVuLnRoaXNPYmogPT0gdGhpc09iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mdW5jLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhcyhmdW5jOiBGdW5jdGlvbiwgdGhpc09iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZnVuYy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgZnVuID0gdGhpcy5mdW5jW2ldO1xyXG4gICAgICAgICAgICBpZiAoZnVuLmZ1bmMgPT0gZnVuYyAmJiBmdW4udGhpc09iaiA9PSB0aGlzT2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJ1bihhcmdzOiBhbnlbXSA9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZnVuYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZnVuYzogRnVuYyA9IHRoaXMuZnVuY1tpXTtcclxuICAgICAgICAgICAgZnVuYy5ydW4oYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=