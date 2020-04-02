
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/YK.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c675sV625PLZDp7NeD4bUI', 'YK');
// YK/YK.ts

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./core/utils/GameFlag"));
__export(require("./core/utils/Listener"));
__export(require("./core/utils/TimeDelay"));
__export(require("./core/event/Event"));
__export(require("./core/event/EventDispatcher"));
__export(require("./core/resmgr/ResMgr"));
__export(require("./core/task/Task"));
__export(require("./core/task/TaskList"));
__export(require("./core/statemechine/IState"));
__export(require("./core/statemechine/StateMachine"));
__export(require("./core/scene/Scene"));
__export(require("./core/ui/UIConfig"));
__export(require("./core/ui/UIWind"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXFlLLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyQ0FBcUM7QUFDckMsMkNBQXFDO0FBQ3JDLDRDQUFzQztBQUV0Qyx3Q0FBa0M7QUFDbEMsa0RBQTZDO0FBQzdDLDBDQUFxQztBQUNyQyxzQ0FBaUM7QUFDakMsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQyxzREFBaUQ7QUFFakQsd0NBQW1DO0FBQ25DLHdDQUFtQztBQUNuQyxzQ0FBaUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZS91dGlscy9HYW1lRmxhZydcclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlL3V0aWxzL0xpc3RlbmVyJ1xyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUvdXRpbHMvVGltZURlbGF5J1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2V2ZW50L0V2ZW50J1xyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUvZXZlbnQvRXZlbnREaXNwYXRjaGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlL3Jlc21nci9SZXNNZ3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUvdGFzay9UYXNrJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlL3Rhc2svVGFza0xpc3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUvc3RhdGVtZWNoaW5lL0lTdGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9zdGF0ZW1lY2hpbmUvU3RhdGVNYWNoaW5lJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9zY2VuZS9TY2VuZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZS91aS9VSUNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZS91aS9VSVdpbmQnO1xyXG4iXX0=