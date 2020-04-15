
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
        TimeDelay_1.TimeDelay.instance.addUpdate(this.onUpdate, this);
    };
    SceneMgr.onUpdate = function () {
        this.mSceneStateMachine.update();
    };
    SceneMgr.mSceneStateMachine = new StateMachine_1.default();
    return SceneMgr;
}());
var Scene = /** @class */ (function () {
    function Scene() {
        var _this = this;
        this.mSceneTask = new TaskList_1.TaskList(TaskList_1.ActionsExecutionMode.RunInParallel);
        this.mSequenceTask = null;
        this.mParallelTask = null;
        this.mSceneTask.setComplete(Listener_1.Func.create(function () {
            _this.onTaskFinish();
            _this.mSceneTask.actions.splice(0, _this.mSceneTask.actions.length);
        }, this));
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
    Scene.prototype.addSceneTask = function (task, executionMode) {
        if (executionMode === void 0) { executionMode = TaskList_1.ActionsExecutionMode.RunInSequence; }
        if (executionMode == TaskList_1.ActionsExecutionMode.RunInParallel) {
            if (this.mParallelTask != null) {
                this.mParallelTask.addTask(task);
            }
            else {
                this.mParallelTask = new TaskList_1.TaskList(executionMode);
                this.mParallelTask.addTask(task);
                this.mParallelTask.addTask(this.mSequenceTask);
            }
        }
        else {
            if (this.mSequenceTask != null) {
                this.mSequenceTask.addTask(task);
            }
            else {
                this.mSequenceTask = new TaskList_1.TaskList(executionMode);
                this.mSequenceTask.addTask(task);
                this.mSceneTask.addTask(this.mSequenceTask);
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGNvcmVcXHNjZW5lXFxTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQWtFO0FBRWxFLDZEQUF3RDtBQUN4RCxnREFBK0M7QUFDL0MsOENBQXlDO0FBRXpDO0lBQUE7SUEwQkEsQ0FBQztJQXZCRyxzQkFBa0IsbUJBQU87YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFpQixDQUFDO1FBQ3ZHLENBQUM7OztPQUFBO0lBRWEsV0FBRSxHQUFoQixVQUFpQixPQUFlLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxZQUFpQjtRQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRWEsaUJBQVEsR0FBdEIsVUFBdUIsS0FBWTtRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFYSxvQkFBVyxHQUF6QixVQUEwQixPQUFlO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVhLGFBQUksR0FBbEI7UUFDSSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRWMsaUJBQVEsR0FBdkI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQXhCYywyQkFBa0IsR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQztJQXlCM0QsZUFBQztDQTFCRCxBQTBCQyxJQUFBO0FBRUQ7SUEwQkk7UUFBQSxpQkFLQztRQVBTLGVBQVUsR0FBRyxJQUFJLG1CQUFRLENBQUMsK0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFvQmhFLGtCQUFhLEdBQWEsSUFBSSxDQUFDO1FBQy9CLGtCQUFhLEdBQWEsSUFBSSxDQUFDO1FBbEJuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQTdCTSxVQUFJLEdBQVg7UUFDSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLFFBQUUsR0FBVCxVQUFVLE9BQWUsRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQ3hDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxTQUFHLEdBQVYsVUFBVyxLQUFZO1FBQ25CLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLFlBQU0sR0FBYixVQUFjLE9BQWU7UUFDekIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksMEJBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQWFELHVCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLEtBQVU7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sU0FBaUIsRUFBRSxLQUFVO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFLTSw0QkFBWSxHQUFuQixVQUFvQixJQUFVLEVBQUUsYUFBd0U7UUFBeEUsOEJBQUEsRUFBQSxnQkFBc0MsK0JBQW9CLENBQUMsYUFBYTtRQUNwRyxJQUFJLGFBQWEsSUFBSSwrQkFBb0IsQ0FBQyxhQUFhLEVBQUU7WUFDckQsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1CQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDbEQ7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1CQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHRCx3QkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUVTLDRCQUFZLEdBQXRCO0lBRUEsQ0FBQztJQUVTLDRCQUFZLEdBQXRCLFVBQXVCLFNBQWdCLEVBQUUsS0FBVTtJQUVuRCxDQUFDO0lBRVMsNEJBQVksR0FBdEIsVUFBdUIsU0FBZ0IsRUFBRSxLQUFVO0lBQ25ELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FuRkEsQUFtRkMsSUFBQTtBQW5GcUIsc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGVtZWNoaW5lL0lTdGF0ZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zRXhlY3V0aW9uTW9kZSwgVGFza0xpc3QgfSBmcm9tIFwiLi4vdGFzay9UYXNrTGlzdFwiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL3Rhc2svVGFza1wiO1xyXG5pbXBvcnQgU3RhdGVNYWNoaW5lIGZyb20gXCIuLi9zdGF0ZW1lY2hpbmUvU3RhdGVNYWNoaW5lXCI7XHJcbmltcG9ydCB7IFRpbWVEZWxheSB9IGZyb20gXCIuLi91dGlscy9UaW1lRGVsYXlcIjtcclxuaW1wb3J0IHsgRnVuYyB9IGZyb20gXCIuLi91dGlscy9MaXN0ZW5lclwiO1xyXG5cclxuY2xhc3MgU2NlbmVNZ3Ige1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbVNjZW5lU3RhdGVNYWNoaW5lID0gbmV3IFN0YXRlTWFjaGluZSgpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubVNjZW5lU3RhdGVNYWNoaW5lLmN1clN0YXRlID09IG51bGwgPyBudWxsIDogdGhpcy5tU2NlbmVTdGF0ZU1hY2hpbmUuY3VyU3RhdGUgYXMgU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnbyhzY2VuZUlkOiBudW1iZXIsIHBhcmFtOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5tU2NlbmVTdGF0ZU1hY2hpbmUuc3dpdGNoU3RhdGUoc2NlbmVJZCwgcGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkU2NlbmUoc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5tU2NlbmVTdGF0ZU1hY2hpbmUucmVnaXN0ZXJTdGF0ZShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVTY2VuZShzY2VuZUlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1TY2VuZVN0YXRlTWFjaGluZS5yZW1vdmVTdGF0ZShzY2VuZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgVGltZURlbGF5Lmluc3RhbmNlLmFkZFVwZGF0ZSh0aGlzLm9uVXBkYXRlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1TY2VuZVN0YXRlTWFjaGluZS51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjZW5lIGltcGxlbWVudHMgSVN0YXRlIHtcclxuXHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICBTY2VuZU1nci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdvKHNjZW5lSWQ6IG51bWJlciwgcGFyYW06IGFueSA9IG51bGwpIHtcclxuICAgICAgICBTY2VuZU1nci5nbyhzY2VuZUlkLCBwYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZChzY2VuZTogU2NlbmUpIHtcclxuICAgICAgICBTY2VuZU1nci5hZGRTY2VuZShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZShzY2VuZUlkOiBudW1iZXIpIHtcclxuICAgICAgICBTY2VuZU1nci5yZW1vdmVTY2VuZShzY2VuZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdGVJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgc2NlbmVJZCgpOiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG1TY2VuZVRhc2sgPSBuZXcgVGFza0xpc3QoQWN0aW9uc0V4ZWN1dGlvbk1vZGUuUnVuSW5QYXJhbGxlbCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tU2NlbmVUYXNrLnNldENvbXBsZXRlKEZ1bmMuY3JlYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblRhc2tGaW5pc2goKTtcclxuICAgICAgICAgICAgdGhpcy5tU2NlbmVUYXNrLmFjdGlvbnMuc3BsaWNlKDAsIHRoaXMubVNjZW5lVGFzay5hY3Rpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgfSwgdGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW50ZXIocHJldlN0YXRlOiBJU3RhdGUsIHBhcmFtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU2NlbmVFbnRlcihwcmV2U3RhdGUgYXMgU2NlbmUsIHBhcmFtKTtcclxuICAgICAgICB0aGlzLm1TY2VuZVRhc2suZXhlY3V0ZSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhpdChuZXh0U3RhdGU6IElTdGF0ZSwgcGFyYW06IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubVNjZW5lVGFzay5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMubVNjZW5lVGFzay5lbmRBY3Rpb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMub25MZWF2ZVNjZW5lKG5leHRTdGF0ZSBhcyBTY2VuZSwgcGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbVNlcXVlbmNlVGFzazogVGFza0xpc3QgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtUGFyYWxsZWxUYXNrOiBUYXNrTGlzdCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGFkZFNjZW5lVGFzayh0YXNrOiBUYXNrLCBleGVjdXRpb25Nb2RlOiBBY3Rpb25zRXhlY3V0aW9uTW9kZSA9IEFjdGlvbnNFeGVjdXRpb25Nb2RlLlJ1bkluU2VxdWVuY2UpOiBTY2VuZSB7XHJcbiAgICAgICAgaWYgKGV4ZWN1dGlvbk1vZGUgPT0gQWN0aW9uc0V4ZWN1dGlvbk1vZGUuUnVuSW5QYXJhbGxlbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tUGFyYWxsZWxUYXNrICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubVBhcmFsbGVsVGFzay5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tUGFyYWxsZWxUYXNrID0gbmV3IFRhc2tMaXN0KGV4ZWN1dGlvbk1vZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tUGFyYWxsZWxUYXNrLmFkZFRhc2sodGFzayk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1QYXJhbGxlbFRhc2suYWRkVGFzayh0aGlzLm1TZXF1ZW5jZVRhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubVNlcXVlbmNlVGFzayAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1TZXF1ZW5jZVRhc2suYWRkVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubVNlcXVlbmNlVGFzayA9IG5ldyBUYXNrTGlzdChleGVjdXRpb25Nb2RlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubVNlcXVlbmNlVGFzay5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tU2NlbmVUYXNrLmFkZFRhc2sodGhpcy5tU2VxdWVuY2VUYXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblRhc2tGaW5pc2goKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblNjZW5lRW50ZXIocHJldlN0YXRlOiBTY2VuZSwgcGFyYW06IGFueSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25MZWF2ZVNjZW5lKG5leHRTdGF0ZTogU2NlbmUsIHBhcmFtOiBhbnkpIHtcclxuICAgIH1cclxufSJdfQ==