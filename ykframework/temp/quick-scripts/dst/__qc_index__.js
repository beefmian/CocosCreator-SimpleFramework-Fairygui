
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/YK/YK');
require('./assets/YK/core/event/Event');
require('./assets/YK/core/event/EventDispatcher');
require('./assets/YK/core/resmgr/ResMgr');
require('./assets/YK/core/scene/Scene');
require('./assets/YK/core/statemechine/IState');
require('./assets/YK/core/statemechine/StateMachine');
require('./assets/YK/core/task/Task');
require('./assets/YK/core/task/TaskList');
require('./assets/YK/core/ui/UIConfig');
require('./assets/YK/core/ui/UIWind');
require('./assets/YK/core/utils/GameFlag');
require('./assets/YK/core/utils/GameUtils');
require('./assets/YK/core/utils/Listener');
require('./assets/YK/core/utils/TimeDelay');
require('./assets/YK/example/event/EventTest');
require('./assets/YK/example/index');
require('./assets/YK/example/resmgr/ResMgrTest');
require('./assets/YK/example/scene/Scene');
require('./assets/YK/example/scene/SceneTest');
require('./assets/YK/example/statemechine/StateMechineTest');
require('./assets/YK/example/task/TaskTest');
require('./assets/YK/example/ui/TestUI');
require('./assets/script/NewScript');

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