"use strict";
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