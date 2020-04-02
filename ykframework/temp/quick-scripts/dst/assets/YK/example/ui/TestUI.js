
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/example/ui/TestUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66a771UyMxLybiRheFemI/K', 'TestUI');
// YK/example/ui/TestUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var YK = require("../../YK");
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestUI.test = function () {
        YK.UIConfig.packRootUrl = "fgui";
        YK.UIWind.add(new wind1());
        YK.UIWind.add(new wind2());
        wind1.show();
    };
    return TestUI;
}(YK.UIWind));
exports.TestUI = TestUI;
var wind1 = /** @class */ (function (_super) {
    __extends(wind1, _super);
    function wind1() {
        return _super.call(this, "MainPack", "Wind1") || this;
    }
    wind1.show = function () {
        _super.show.call(this, "ui://MainPack/Wind1");
    };
    wind1.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.contentPane.getChild("btnShow").asButton.onClick(function () {
            wind2.show();
        }, this);
    };
    return wind1;
}(YK.UIWind));
var wind2 = /** @class */ (function (_super) {
    __extends(wind2, _super);
    function wind2() {
        return _super.call(this, "MainPack", "Wind2") || this;
    }
    wind2.show = function () {
        _super.show.call(this, "ui://MainPack/Wind2");
    };
    return wind2;
}(YK.UIWind));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXHVpXFxUZXN0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUUvQjtJQUE0QiwwQkFBUztJQUFyQzs7SUFTQSxDQUFDO0lBUlUsV0FBSSxHQUFYO1FBRUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBRWpDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0IsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FUQSxBQVNDLENBVDJCLEVBQUUsQ0FBQyxNQUFNLEdBU3BDO0FBVFksd0JBQU07QUFXbkI7SUFBb0IseUJBQVM7SUFLekI7ZUFDSSxrQkFBTSxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFOTSxVQUFJLEdBQVg7UUFDSSxPQUFNLElBQUksWUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFNUyxzQkFBTSxHQUFoQjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNsRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCbUIsRUFBRSxDQUFDLE1BQU0sR0FnQjVCO0FBRUQ7SUFBb0IseUJBQVM7SUFJekI7ZUFDSSxrQkFBTSxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFMTSxVQUFJLEdBQVg7UUFDSSxPQUFNLElBQUksWUFBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFJTCxZQUFDO0FBQUQsQ0FQQSxBQU9DLENBUG1CLEVBQUUsQ0FBQyxNQUFNLEdBTzVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWUsgZnJvbSBcIi4uLy4uL1lLXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdFVJIGV4dGVuZHMgWUsuVUlXaW5kIHtcclxuICAgIHN0YXRpYyB0ZXN0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFlLLlVJQ29uZmlnLnBhY2tSb290VXJsID0gXCJmZ3VpXCI7XHJcblxyXG4gICAgICAgIFlLLlVJV2luZC5hZGQobmV3IHdpbmQxKCkpO1xyXG4gICAgICAgIFlLLlVJV2luZC5hZGQobmV3IHdpbmQyKCkpO1xyXG4gICAgICAgIHdpbmQxLnNob3coKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3Mgd2luZDEgZXh0ZW5kcyBZSy5VSVdpbmQge1xyXG4gICAgc3RhdGljIHNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvdyhcInVpOi8vTWFpblBhY2svV2luZDFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJNYWluUGFja1wiLCBcIldpbmQxXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudFBhbmUuZ2V0Q2hpbGQoXCJidG5TaG93XCIpLmFzQnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kMi5zaG93KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIHdpbmQyIGV4dGVuZHMgWUsuVUlXaW5kIHtcclxuICAgIHN0YXRpYyBzaG93KCkge1xyXG4gICAgICAgIHN1cGVyLnNob3coXCJ1aTovL01haW5QYWNrL1dpbmQyXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJNYWluUGFja1wiLCBcIldpbmQyXCIpO1xyXG4gICAgfVxyXG59Il19