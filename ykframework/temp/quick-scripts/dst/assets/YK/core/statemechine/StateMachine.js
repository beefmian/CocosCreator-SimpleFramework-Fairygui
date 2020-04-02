
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/statemechine/StateMachine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '394d9Z5iIBAAamXnlr2q6Mi', 'StateMachine');
// YK/core/statemechine/StateMachine.ts

Object.defineProperty(exports, "__esModule", { value: true });
var StateMachine = /** @class */ (function () {
    function StateMachine() {
        this.mStateDic = new Map();
    }
    Object.defineProperty(StateMachine.prototype, "curState", {
        get: function () {
            return this.mCurState;
        },
        enumerable: true,
        configurable: true
    });
    StateMachine.prototype.stop = function () {
        if (this.curState != null) {
            this.curState.onExit(null, null);
            this.mCurState = null;
        }
    };
    StateMachine.prototype.registerState = function (state) {
        if (state == null)
            return;
        if (this.mStateDic.has(state.stateId))
            return;
        this.mStateDic.set(state.stateId, state);
    };
    StateMachine.prototype.removeState = function (stateId) {
        if (this.mStateDic.has(stateId))
            this.mStateDic.delete(stateId);
        if (this.curState != null && this.curState.stateId == stateId) {
            this.mCurState.onExit(null);
            this.mCurState = null;
        }
    };
    StateMachine.prototype.switchState = function (stateId, param) {
        if (this.curState != null && this.curState.stateId == stateId)
            return;
        if (!this.mStateDic.has(stateId)) {
            console.error("没有找对应的状态：stateid =" + stateId);
            return;
        }
        var nextState = this.mStateDic.get(stateId);
        if (this.curState != null)
            this.curState.onExit(nextState, param);
        nextState.onEnter(this.mCurState == null ? null : this.curState, param);
        this.mCurState = nextState;
    };
    StateMachine.prototype.update = function () {
        if (this.curState != null)
            this.curState.onUpdate();
    };
    return StateMachine;
}());
exports.default = StateMachine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHN0YXRlbWVjaGluZVxcU3RhdGVNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUNJO1FBR1EsY0FBUyxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUZuRSxDQUFDO0lBS0Qsc0JBQVcsa0NBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFTSwyQkFBSSxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7U0FDeEI7SUFDTCxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLEtBQUssSUFBSSxJQUFJO1lBQUUsT0FBTztRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFBRSxPQUFPO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFNUMsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLE9BQWU7UUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBRTtZQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtTQUN4QjtJQUVMLENBQUM7SUFFTSxrQ0FBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsS0FBVTtRQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLE9BQU87WUFBRSxPQUFPO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLE9BQU07U0FDVDtRQUNELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7SUFDOUIsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDdkQsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVN0YXRlfSBmcm9tIFwiLi9JU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlTWFjaGluZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1TdGF0ZURpYzogTWFwPG51bWJlciwgSVN0YXRlPiA9IG5ldyBNYXA8bnVtYmVyLCBJU3RhdGU+KCk7XHJcbiAgICBwcml2YXRlIG1DdXJTdGF0ZTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1clN0YXRlKCk6IElTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubUN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1clN0YXRlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJTdGF0ZS5vbkV4aXQobnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMubUN1clN0YXRlID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJTdGF0ZShzdGF0ZTogSVN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5tU3RhdGVEaWMuaGFzKHN0YXRlLnN0YXRlSWQpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tU3RhdGVEaWMuc2V0KHN0YXRlLnN0YXRlSWQsIHN0YXRlKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlU3RhdGUoc3RhdGVJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubVN0YXRlRGljLmhhcyhzdGF0ZUlkKSkgdGhpcy5tU3RhdGVEaWMuZGVsZXRlKHN0YXRlSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1clN0YXRlICE9IG51bGwgJiYgdGhpcy5jdXJTdGF0ZS5zdGF0ZUlkID09IHN0YXRlSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tQ3VyU3RhdGUub25FeGl0KG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLm1DdXJTdGF0ZSA9IG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2l0Y2hTdGF0ZShzdGF0ZUlkOiBudW1iZXIsIHBhcmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJTdGF0ZSAhPSBudWxsICYmIHRoaXMuY3VyU3RhdGUuc3RhdGVJZCA9PSBzdGF0ZUlkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm1TdGF0ZURpYy5oYXMoc3RhdGVJZCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuayoeacieaJvuWvueW6lOeahOeKtuaAge+8mnN0YXRlaWQgPVwiICsgc3RhdGVJZCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV4dFN0YXRlID0gdGhpcy5tU3RhdGVEaWMuZ2V0KHN0YXRlSWQpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1clN0YXRlICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuY3VyU3RhdGUub25FeGl0KG5leHRTdGF0ZSwgcGFyYW0pO1xyXG4gICAgICAgIG5leHRTdGF0ZS5vbkVudGVyKHRoaXMubUN1clN0YXRlID09IG51bGwgPyBudWxsIDogdGhpcy5jdXJTdGF0ZSwgcGFyYW0pO1xyXG4gICAgICAgIHRoaXMubUN1clN0YXRlID0gbmV4dFN0YXRlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJTdGF0ZSAhPSBudWxsKSB0aGlzLmN1clN0YXRlLm9uVXBkYXRlKClcclxuICAgIH1cclxufSAiXX0=