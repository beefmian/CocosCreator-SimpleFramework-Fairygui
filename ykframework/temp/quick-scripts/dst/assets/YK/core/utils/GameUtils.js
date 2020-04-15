
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/utils/GameUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHV0aWxzXFxHYW1lVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUEyQkEsQ0FBQztJQXpCRyxPQUFPO0lBQ0EsZUFBSyxHQUFaLFVBQWEsRUFBRSxFQUFFLEVBQUU7UUFFZixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRS9DLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFHYSxlQUFLLEdBQW5CLFVBQW9CLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUN2RCxJQUFJLEtBQUssR0FBRyxHQUFHO1lBQ1gsS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUNYLElBQUksS0FBSyxHQUFHLEdBQUc7WUFDaEIsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNoQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRWEsZ0JBQU0sR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdhbWVVdGlscyB7XHJcblxyXG4gICAgLy8g5ZCR6YeP5aS56KeSXHJcbiAgICBzdGF0aWMgQW5nbGUobWEsIG1iKSB7XHJcblxyXG4gICAgICAgIGxldCB2MSA9IChtYS54ICogbWIueCkgKyAobWEueSAqIG1iLnkpICsgKG1hLnogKiBtYi56KTtcclxuICAgICAgICBsZXQgbWFfdmFsID0gTWF0aC5zcXJ0KG1hLnggKiBtYS54ICsgbWEueSAqIG1hLnkgKyBtYS56ICogbWEueik7XHJcbiAgICAgICAgbGV0IG1iX3ZhbCA9IE1hdGguc3FydChtYi54ICogbWIueCArIG1iLnkgKiBtYi55ICsgbWIueiAqIG1iLnopO1xyXG4gICAgICAgIGxldCBjb3NNID0gdjEgLyAobWFfdmFsICogbWJfdmFsKTtcclxuICAgICAgICBsZXQgYW5nbGVBTUIgPSBNYXRoLmFjb3MoY29zTSkgKiAxODAgLyBNYXRoLlBJO1xyXG5cclxuICAgICAgICByZXR1cm4gYW5nbGVBTUI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodmFsdWUgPCBtaW4pXHJcbiAgICAgICAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KVxyXG4gICAgICAgICAgICB2YWx1ZSA9IG1heDtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb20obSwgbik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtIC0gbikgKyBuKTtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==