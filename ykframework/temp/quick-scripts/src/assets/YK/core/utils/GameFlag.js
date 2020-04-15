"use strict";
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