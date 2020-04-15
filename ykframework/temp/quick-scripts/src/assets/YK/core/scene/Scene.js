"use strict";
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