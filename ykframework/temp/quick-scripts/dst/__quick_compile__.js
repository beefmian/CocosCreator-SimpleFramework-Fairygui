
(function () {
var scripts = [{"deps":{"./assets/YK/example/index":15,"./assets/YK/example/event/EventTest":5,"./assets/YK/example/resmgr/ResMgrTest":3,"./assets/YK/example/scene/SceneTest":6,"./assets/YK/example/scene/Scene":16,"./assets/YK/example/statemechine/StateMechineTest":9,"./assets/YK/example/task/TaskTest":7,"./assets/YK/example/ui/TestUI":17,"./assets/script/NewScript":2,"./assets/YK/YK":1,"./assets/YK/core/event/EventDispatcher":24,"./assets/YK/core/resmgr/ResMgr":10,"./assets/YK/core/scene/Scene":8,"./assets/YK/core/statemechine/StateMachine":12,"./assets/YK/core/statemechine/IState":19,"./assets/YK/core/task/TaskList":18,"./assets/YK/core/task/Task":11,"./assets/YK/core/ui/UIConfig":21,"./assets/YK/core/ui/UIWind":13,"./assets/YK/core/utils/GameUtils":20,"./assets/YK/core/utils/Listener":14,"./assets/YK/core/utils/TimeDelay":22,"./assets/YK/core/utils/GameFlag":23,"./assets/YK/core/event/Event":4},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./core/utils/GameFlag":23,"./core/utils/Listener":14,"./core/resmgr/ResMgr":10,"./core/event/Event":4,"./core/utils/TimeDelay":22,"./core/event/EventDispatcher":24,"./core/task/Task":11,"./core/task/TaskList":18,"./core/statemechine/IState":19,"./core/statemechine/StateMachine":12,"./core/scene/Scene":8,"./core/ui/UIWind":13,"./core/ui/UIConfig":21},"path":"preview-scripts/assets/YK/YK.js"},{"deps":{"../YK/example/index":15,"../YK/YK":1},"path":"preview-scripts/assets/script/NewScript.js"},{"deps":{"../../YK":1},"path":"preview-scripts/assets/YK/example/resmgr/ResMgrTest.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/event/Event.js"},{"deps":{"../../YK":1},"path":"preview-scripts/assets/YK/example/event/EventTest.js"},{"deps":{"../../YK":1,"./Scene":16},"path":"preview-scripts/assets/YK/example/scene/SceneTest.js"},{"deps":{"../../YK":1},"path":"preview-scripts/assets/YK/example/task/TaskTest.js"},{"deps":{"../statemechine/StateMachine":12,"../task/TaskList":18,"../utils/Listener":14,"../utils/TimeDelay":22},"path":"preview-scripts/assets/YK/core/scene/Scene.js"},{"deps":{},"path":"preview-scripts/assets/YK/example/statemechine/StateMechineTest.js"},{"deps":{"../utils/Listener":14},"path":"preview-scripts/assets/YK/core/resmgr/ResMgr.js"},{"deps":{"../utils/TimeDelay":22},"path":"preview-scripts/assets/YK/core/task/Task.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/statemechine/StateMachine.js"},{"deps":{"./UIConfig":21,"../utils/Listener":14},"path":"preview-scripts/assets/YK/core/ui/UIWind.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/utils/Listener.js"},{"deps":{"./task/TaskTest":7,"./scene/Scene":16,"./resmgr/ResMgrTest":3,"./scene/SceneTest":6,"./event/EventTest":5,"./ui/TestUI":17,"./statemechine/StateMechineTest":9},"path":"preview-scripts/assets/YK/example/index.js"},{"deps":{"../../YK":1},"path":"preview-scripts/assets/YK/example/scene/Scene.js"},{"deps":{"../../YK":1},"path":"preview-scripts/assets/YK/example/ui/TestUI.js"},{"deps":{"./Task":11},"path":"preview-scripts/assets/YK/core/task/TaskList.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/statemechine/IState.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/utils/GameUtils.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/ui/UIConfig.js"},{"deps":{"./Listener":14},"path":"preview-scripts/assets/YK/core/utils/TimeDelay.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/utils/GameFlag.js"},{"deps":{"./Event":4},"path":"preview-scripts/assets/YK/core/event/EventDispatcher.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

if (typeof global === 'undefined') {
    window.global = window;
}

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;
        
            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
        
            return path;
        });

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    