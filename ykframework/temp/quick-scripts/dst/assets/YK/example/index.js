
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/YK/example/index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '344321EuZVDGrmpvFSzg0h4', 'index');
// YK/example/index.ts

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./task/TaskTest"));
__export(require("./resmgr/ResMgrTest"));
__export(require("./scene/Scene"));
__export(require("./scene/SceneTest"));
__export(require("./event/EventTest"));
__export(require("./ui/TestUI"));
__export(require("./statemechine/StateMechineTest"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWUtcXGV4YW1wbGVcXGluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBQ3BDLG1DQUE2QjtBQUM3Qix1Q0FBaUM7QUFDakMsdUNBQWtDO0FBQ2xDLGlDQUE0QjtBQUM1QixxREFBK0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi90YXNrL1Rhc2tUZXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Jlc21nci9SZXNNZ3JUZXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NjZW5lL1NjZW5lXCJcclxuZXhwb3J0ICogZnJvbSBcIi4vc2NlbmUvU2NlbmVUZXN0XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vZXZlbnQvRXZlbnRUZXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VpL1Rlc3RVSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdGF0ZW1lY2hpbmUvU3RhdGVNZWNoaW5lVGVzdFwiIl19