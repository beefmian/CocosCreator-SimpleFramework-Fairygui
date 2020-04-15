"use strict";
cc._RF.push(module, '79560n8imtAqqvyJkY5i+qV', 'GameUtils');
// YK/core/utils/GameUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    // 向量夹角
    GameUtils.Angle = function (ma, mb) {
        var v1 = (ma.x * mb.x) + (ma.y * mb.y) + (ma.z * mb.z);
        var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
        var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
        var cosM = v1 / (ma_val * mb_val);
        var angleAMB = Math.acos(cosM) * 180 / Math.PI;
        return angleAMB;
    };
    GameUtils.clamp = function (value, min, max) {
        if (value < min)
            value = min;
        else if (value > max)
            value = max;
        return value;
    };
    GameUtils.random = function (m, n) {
        var num = Math.floor(Math.random() * (m - n) + n);
        return num;
    };
    return GameUtils;
}());
exports.GameUtils = GameUtils;

cc._RF.pop();