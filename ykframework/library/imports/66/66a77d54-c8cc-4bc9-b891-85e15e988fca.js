"use strict";
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