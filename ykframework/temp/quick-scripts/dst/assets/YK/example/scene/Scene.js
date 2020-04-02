
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/example/scene/Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6905IiB1lJrYSZWdxg2fKz', 'Scene');
// YK/example/scene/Scene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var YK = require("../../YK");
var Scene1 = /** @class */ (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Scene1.prototype, "sceneId", {
        get: function () {
            return Scene1.id;
        },
        enumerable: true,
        configurable: true
    });
    Scene1.prototype.onSceneEnter = function (prevState, param) {
        console.log("进入场景1", prevState, "参数", param);
    };
    Scene1.prototype.onLeaveScene = function (nextState, param) {
        console.log("离开场景1", nextState, "参数", param);
    };
    Scene1.id = 1;
    return Scene1;
}(YK.Scene));
exports.Scene1 = Scene1;
var Scene2 = /** @class */ (function (_super) {
    __extends(Scene2, _super);
    function Scene2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Scene2.prototype, "sceneId", {
        get: function () {
            return Scene2.id;
        },
        enumerable: true,
        configurable: true
    });
    Scene2.prototype.onSceneEnter = function (prevState, param) {
        console.log("进入场景2", prevState, "参数", param);
    };
    Scene2.prototype.onLeaveScene = function (nextState, param) {
        console.log("离开场景2", nextState, "参数", param);
    };
    Scene2.id = 2;
    return Scene2;
}(YK.Scene));
exports.Scene2 = Scene2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXHNjZW5lXFxTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBRS9CO0lBQTRCLDBCQUFRO0lBQXBDOztJQWNBLENBQUM7SUFaRyxzQkFBSSwyQkFBTzthQUFYO1lBQ0ksT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRVMsNkJBQVksR0FBdEIsVUFBdUIsU0FBbUIsRUFBRSxLQUFVO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVTLDZCQUFZLEdBQXRCLFVBQXVCLFNBQW1CLEVBQUUsS0FBVTtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTdDLENBQUM7SUFaYSxTQUFFLEdBQUcsQ0FBQyxDQUFDO0lBYXpCLGFBQUM7Q0FkRCxBQWNDLENBZDJCLEVBQUUsQ0FBQyxLQUFLLEdBY25DO0FBZFksd0JBQU07QUFnQm5CO0lBQTRCLDBCQUFRO0lBQXBDOztJQVlBLENBQUM7SUFWRyxzQkFBSSwyQkFBTzthQUFYO1lBQ0ksT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ1MsNkJBQVksR0FBdEIsVUFBdUIsU0FBbUIsRUFBRSxLQUFVO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVTLDZCQUFZLEdBQXRCLFVBQXVCLFNBQW1CLEVBQUUsS0FBVTtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFWYSxTQUFFLEdBQUcsQ0FBQyxDQUFDO0lBV3pCLGFBQUM7Q0FaRCxBQVlDLENBWjJCLEVBQUUsQ0FBQyxLQUFLLEdBWW5DO0FBWlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBZSyBmcm9tIFwiLi4vLi4vWUtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZTEgZXh0ZW5kcyBZSy5TY2VuZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlkID0gMTtcclxuICAgIGdldCBzY2VuZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFNjZW5lMS5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TY2VuZUVudGVyKHByZXZTdGF0ZTogWUsuU2NlbmUsIHBhcmFtOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeWcuuaZrzFcIixwcmV2U3RhdGUsXCLlj4LmlbBcIixwYXJhbSlcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25MZWF2ZVNjZW5lKG5leHRTdGF0ZTogWUsuU2NlbmUsIHBhcmFtOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuemu+W8gOWcuuaZrzFcIixuZXh0U3RhdGUsXCLlj4LmlbBcIixwYXJhbSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZTIgZXh0ZW5kcyBZSy5TY2VuZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGlkID0gMjtcclxuICAgIGdldCBzY2VuZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFNjZW5lMi5pZDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNjZW5lRW50ZXIocHJldlN0YXRlOiBZSy5TY2VuZSwgcGFyYW06IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5Zy65pmvMlwiLHByZXZTdGF0ZSxcIuWPguaVsFwiLHBhcmFtKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxlYXZlU2NlbmUobmV4dFN0YXRlOiBZSy5TY2VuZSwgcGFyYW06IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi56a75byA5Zy65pmvMlwiLG5leHRTdGF0ZSxcIuWPguaVsFwiLHBhcmFtKVxyXG4gICAgfVxyXG59Il19