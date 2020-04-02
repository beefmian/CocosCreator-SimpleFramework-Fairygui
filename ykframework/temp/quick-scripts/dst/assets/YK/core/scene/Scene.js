
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/core/scene/Scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45ff4SGnn5JeKEla+nuXrQ+', 'Scene');
// YK/core/scene/Scene.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TaskList_1 = require("../task/TaskList");
var StateMachine_1 = require("../statemechine/StateMachine");
var TimeDelay_1 = require("../utils/TimeDelay");
var Listener_1 = require("../utils/Listener");
var SceneMgr = /** @class */ (function () {
    function SceneMgr() {
    }
    Object.defineProperty(SceneMgr, "current", {
        get: function () {
            return this.mSceneStateMachine.curState == null ? null : this.mSceneStateMachine.curState;
        },
        enumerable: true,
        configurable: true
    });
    SceneMgr.go = function (sceneId, param) {
        if (param === void 0) { param = null; }
        this.mSceneStateMachine.switchState(sceneId, param);
    };
    SceneMgr.addScene = function (scene) {
        this.mSceneStateMachine.registerState(scene);
    };
    SceneMgr.removeScene = function (sceneId) {
        this.mSceneStateMachine.removeState(sceneId);
    };
    SceneMgr.init = function () {
        TimeDelay_1.TimeDelay.instance.AddUpdate(this.onUpdate, this);
    };
    SceneMgr.onUpdate = function () {
        this.mSceneStateMachine.update();
    };
    SceneMgr.mSceneStateMachine = new StateMachine_1.default();
    return SceneMgr;
}());
var Scene = /** @class */ (function () {
    function Scene() {
        this.mSceneTask = new TaskList_1.TaskList(TaskList_1.ActionsExecutionMode.RunInParallel);
        this.mSceneTask.setComplete(Listener_1.Func.create(this.onTaskFinish, this));
    }
    Scene.init = function () {
        SceneMgr.init();
    };
    Scene.go = function (sceneId, param) {
        if (param === void 0) { param = null; }
        SceneMgr.go(sceneId, param);
    };
    Scene.add = function (scene) {
        SceneMgr.addScene(scene);
    };
    Scene.remove = function (sceneId) {
        SceneMgr.removeScene(sceneId);
    };
    Object.defineProperty(Scene.prototype, "stateId", {
        get: function () {
            return this.sceneId;
        },
        enumerable: true,
        configurable: true
    });
    Scene.prototype.onEnter = function (prevState, param) {
        this.onSceneEnter(prevState, param);
        this.mSceneTask.execute(this);
    };
    Scene.prototype.onExit = function (nextState, param) {
        this.mSceneTask.reset();
        this.mSceneTask.endAction(false);
        this.onLeaveScene(nextState, param);
    };
    Scene.prototype.addSceneTask = function (task) {
        this.mSceneTask.addTask(task);
        return this;
    };
    Scene.prototype.onUpdate = function () {
    };
    Scene.prototype.onTaskFinish = function () {
    };
    Scene.prototype.onSceneEnter = function (prevState, param) {
    };
    Scene.prototype.onLeaveScene = function (nextState, param) {
    };
    return Scene;
}());
exports.Scene = Scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHNjZW5lXFxTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQWtFO0FBRWxFLDZEQUF3RDtBQUN4RCxnREFBK0M7QUFDL0MsOENBQXlDO0FBRXpDO0lBQUE7SUEwQkEsQ0FBQztJQXZCRyxzQkFBa0IsbUJBQU87YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFpQixDQUFDO1FBQ3ZHLENBQUM7OztPQUFBO0lBRWEsV0FBRSxHQUFoQixVQUFpQixPQUFlLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxZQUFpQjtRQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRWEsaUJBQVEsR0FBdEIsVUFBdUIsS0FBWTtRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFYSxvQkFBVyxHQUF6QixVQUEwQixPQUFlO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVhLGFBQUksR0FBbEI7UUFDSSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRWMsaUJBQVEsR0FBdkI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQXhCYywyQkFBa0IsR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQztJQXlCM0QsZUFBQztDQTFCRCxBQTBCQyxJQUFBO0FBRUQ7SUEwQkk7UUFGVSxlQUFVLEdBQUcsSUFBSSxtQkFBUSxDQUFDLCtCQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBR3BFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUExQk0sVUFBSSxHQUFYO1FBQ0ksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxRQUFFLEdBQVQsVUFBVSxPQUFlLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxZQUFpQjtRQUN4QyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sU0FBRyxHQUFWLFVBQVcsS0FBWTtRQUNuQixRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxZQUFNLEdBQWIsVUFBYyxPQUFlO1FBQ3pCLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNCQUFJLDBCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFVRCx1QkFBTyxHQUFQLFVBQVEsU0FBaUIsRUFBRSxLQUFVO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsS0FBVTtRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sNEJBQVksR0FBbkIsVUFBb0IsSUFBVTtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQVEsR0FBUjtJQUNBLENBQUM7SUFFUyw0QkFBWSxHQUF0QjtJQUVBLENBQUM7SUFFUyw0QkFBWSxHQUF0QixVQUF1QixTQUFnQixFQUFFLEtBQVU7SUFFbkQsQ0FBQztJQUVTLDRCQUFZLEdBQXRCLFVBQXVCLFNBQWdCLEVBQUUsS0FBVTtJQUNuRCxDQUFDO0lBQ0wsWUFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRHFCLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlbWVjaGluZS9JU3RhdGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uc0V4ZWN1dGlvbk1vZGUsIFRhc2tMaXN0IH0gZnJvbSBcIi4uL3Rhc2svVGFza0xpc3RcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi90YXNrL1Rhc2tcIjtcclxuaW1wb3J0IFN0YXRlTWFjaGluZSBmcm9tIFwiLi4vc3RhdGVtZWNoaW5lL1N0YXRlTWFjaGluZVwiO1xyXG5pbXBvcnQgeyBUaW1lRGVsYXkgfSBmcm9tIFwiLi4vdXRpbHMvVGltZURlbGF5XCI7XHJcbmltcG9ydCB7IEZ1bmMgfSBmcm9tIFwiLi4vdXRpbHMvTGlzdGVuZXJcIjtcclxuXHJcbmNsYXNzIFNjZW5lTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIG1TY2VuZVN0YXRlTWFjaGluZSA9IG5ldyBTdGF0ZU1hY2hpbmUoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1TY2VuZVN0YXRlTWFjaGluZS5jdXJTdGF0ZSA9PSBudWxsID8gbnVsbCA6IHRoaXMubVNjZW5lU3RhdGVNYWNoaW5lLmN1clN0YXRlIGFzIFNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ28oc2NlbmVJZDogbnVtYmVyLCBwYXJhbTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubVNjZW5lU3RhdGVNYWNoaW5lLnN3aXRjaFN0YXRlKHNjZW5lSWQsIHBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZFNjZW5lKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgICAgIHRoaXMubVNjZW5lU3RhdGVNYWNoaW5lLnJlZ2lzdGVyU3RhdGUoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlU2NlbmUoc2NlbmVJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tU2NlbmVTdGF0ZU1hY2hpbmUucmVtb3ZlU3RhdGUoc2NlbmVJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIFRpbWVEZWxheS5pbnN0YW5jZS5BZGRVcGRhdGUodGhpcy5vblVwZGF0ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tU2NlbmVTdGF0ZU1hY2hpbmUudXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuZSBpbXBsZW1lbnRzIElTdGF0ZSB7XHJcblxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgU2NlbmVNZ3IuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnbyhzY2VuZUlkOiBudW1iZXIsIHBhcmFtOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgU2NlbmVNZ3IuZ28oc2NlbmVJZCwgcGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGQoc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgU2NlbmVNZ3IuYWRkU2NlbmUoc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmUoc2NlbmVJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgU2NlbmVNZ3IucmVtb3ZlU2NlbmUoc2NlbmVJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXRlSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IHNjZW5lSWQoKTogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBtU2NlbmVUYXNrID0gbmV3IFRhc2tMaXN0KEFjdGlvbnNFeGVjdXRpb25Nb2RlLlJ1bkluUGFyYWxsZWwpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubVNjZW5lVGFzay5zZXRDb21wbGV0ZShGdW5jLmNyZWF0ZSh0aGlzLm9uVGFza0ZpbmlzaCwgdGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXIocHJldlN0YXRlOiBJU3RhdGUsIHBhcmFtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU2NlbmVFbnRlcihwcmV2U3RhdGUgYXMgU2NlbmUsIHBhcmFtKTtcclxuICAgICAgICB0aGlzLm1TY2VuZVRhc2suZXhlY3V0ZSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdChuZXh0U3RhdGU6IElTdGF0ZSwgcGFyYW06IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubVNjZW5lVGFzay5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMubVNjZW5lVGFzay5lbmRBY3Rpb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMub25MZWF2ZVNjZW5lKG5leHRTdGF0ZSBhcyBTY2VuZSwgcGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTY2VuZVRhc2sodGFzazogVGFzayk6IFNjZW5lIHtcclxuICAgICAgICB0aGlzLm1TY2VuZVRhc2suYWRkVGFzayh0YXNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25UYXNrRmluaXNoKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TY2VuZUVudGVyKHByZXZTdGF0ZTogU2NlbmUsIHBhcmFtOiBhbnkpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTGVhdmVTY2VuZShuZXh0U3RhdGU6IFNjZW5lLCBwYXJhbTogYW55KSB7XHJcbiAgICB9XHJcbn0iXX0=