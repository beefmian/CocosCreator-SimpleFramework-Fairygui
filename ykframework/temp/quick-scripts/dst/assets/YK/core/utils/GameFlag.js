
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
    Object.defineProperty(GameFlag.prototype, "value", {
        get: function () {
            return this.mValue;
        },
        set: function (v) {
            this.mValue = v;
        },
        enumerable: true,
        configurable: true
    });
    GameFlag.prototype.add = function (flag) {
        if (!this.has(flag))
            this.mValue |= flag;
        return this;
    };
    GameFlag.prototype.remove = function (flag) {
        if (this.has(flag))
            this.mValue &= ~flag;
        return this;
    };
    GameFlag.prototype.has = function (flag) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHV0aWxzXFxHYW1lRmxhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFjSSxrQkFBbUIsSUFBUTtRQUFSLHFCQUFBLEVBQUEsUUFBUTtRQWIzQixhQUFhO1FBQ2IsT0FBTztRQUNQLGNBQWM7UUFDTixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBV3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQ3RCLENBQUM7SUFWRCxzQkFBVywyQkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0QixDQUFDO2FBRUQsVUFBaUIsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLENBQUM7OztPQUpBO0lBVU0sc0JBQUcsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSx5QkFBTSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxJQUFJO1FBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHYW1lRmxhZyB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5qCH5b+X6YePXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHJpdmF0ZSBtVmFsdWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1WYWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdmFsdWUodikge1xyXG4gICAgICAgIHRoaXMubVZhbHVlID0gdlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihmbGFnID0gMCkge1xyXG4gICAgICAgIHRoaXMubVZhbHVlID0gZmxhZ1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoZmxhZykge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXMoZmxhZykpXHJcbiAgICAgICAgICAgIHRoaXMubVZhbHVlIHw9IGZsYWc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGZsYWcpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXMoZmxhZykpXHJcbiAgICAgICAgICAgIHRoaXMubVZhbHVlICY9IH5mbGFnO1xyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyhmbGFnKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm1WYWx1ZSAmIGZsYWcpICE9IDBcclxuICAgIH1cclxufSJdfQ==