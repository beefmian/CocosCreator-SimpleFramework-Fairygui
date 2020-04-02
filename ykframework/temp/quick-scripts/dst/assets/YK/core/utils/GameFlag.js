
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/utils/GameFlag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0abaiCPjdKKpj+Th2o8hoL', 'GameFlag');
// YK/core/utils/GameFlag.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameFlag = /** @class */ (function () {
    function GameFlag(flag) {
        if (flag === void 0) { flag = 0; }
        /// <summary>
        /// 标志量
        /// </summary>
        this.mValue = 0;
        this.mValue = flag;
    }
    Object.defineProperty(GameFlag.prototype, "Value", {
        get: function () {
            return this.mValue;
        },
        set: function (v) {
            this.mValue = v;
        },
        enumerable: true,
        configurable: true
    });
    GameFlag.prototype.Add = function (flag) {
        this.mValue |= flag;
        return this;
    };
    GameFlag.prototype.Remove = function (flag) {
        this.mValue &= ~flag;
        return this;
    };
    GameFlag.prototype.Has = function (flag) {
        return (this.mValue & flag) != 0;
    };
    return GameFlag;
}());
exports.GameFlag = GameFlag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHV0aWxzXFxHYW1lRmxhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFpQkksa0JBQW1CLElBQVE7UUFBUixxQkFBQSxFQUFBLFFBQVE7UUFmM0IsYUFBYTtRQUNiLE9BQU87UUFDUCxjQUFjO1FBQ04sV0FBTSxHQUFVLENBQUMsQ0FBQztRQWN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUN0QixDQUFDO0lBYkQsc0JBQVcsMkJBQUs7YUFBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEIsQ0FBQzthQUVELFVBQWlCLENBQUM7WUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNuQixDQUFDOzs7T0FMQTtJQVlNLHNCQUFHLEdBQVYsVUFBVyxJQUFJO1FBRVgsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUE7UUFDbkIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRU0seUJBQU0sR0FBYixVQUFjLElBQUk7UUFFZCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ3BCLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxJQUFJO1FBRVgsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHYW1lRmxhZ1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5qCH5b+X6YePXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJpdmF0ZSBtVmFsdWU6bnVtYmVyID0gMDtcclxuICAgIFxyXG4gICAgcHVibGljIGdldCBWYWx1ZSgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1WYWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgVmFsdWUodilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1WYWx1ZSA9IHZcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZmxhZyA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tVmFsdWUgPSBmbGFnXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZChmbGFnKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubVZhbHVlIHw9IGZsYWdcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgUmVtb3ZlKGZsYWcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tVmFsdWUgJj0gfmZsYWdcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBIYXMoZmxhZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMubVZhbHVlICYgZmxhZykgIT0gMFxyXG4gICAgfVxyXG59Il19