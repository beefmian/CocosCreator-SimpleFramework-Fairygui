
(function () {
var scripts = [{"deps":{"./assets/YK/example/index":15,"./assets/YK/example/event/EventTest":2,"./assets/YK/example/resmgr/ResMgrTest":7,"./assets/YK/example/scene/SceneTest":5,"./assets/YK/example/scene/Scene":19,"./assets/YK/example/statemechine/StateMechineTest":6,"./assets/YK/example/task/TaskTest":13,"./assets/YK/example/ui/TestUI":8,"./assets/script/NewScript":1,"./assets/YK/YK":3,"./assets/YK/core/event/Event":12,"./assets/YK/core/resmgr/ResMgr":4,"./assets/YK/core/scene/Scene":10,"./assets/YK/core/statemechine/StateMachine":18,"./assets/YK/core/statemechine/IState":9,"./assets/YK/core/task/TaskList":11,"./assets/YK/core/task/Task":17,"./assets/YK/core/ui/UIWind":16,"./assets/YK/core/ui/UIConfig":20,"./assets/YK/core/utils/Listener":21,"./assets/YK/core/utils/TimeDelay":14,"./assets/YK/core/utils/GameFlag":23,"./assets/YK/core/event/EventDispatcher":22},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../YK/example/index":15},"path":"preview-scripts/assets/script/NewScript.js"},{"deps":{"../../YK":3},"path":"preview-scripts/assets/YK/example/event/EventTest.js"},{"deps":{"./core/utils/GameFlag":23,"./core/event/Event":12,"./core/utils/TimeDelay":14,"./core/utils/Listener":21,"./core/task/Task":17,"./core/event/EventDispatcher":22,"./core/resmgr/ResMgr":4,"./core/task/TaskList":11,"./core/statemechine/IState":9,"./core/ui/UIConfig":20,"./core/scene/Scene":10,"./core/statemechine/StateMachine":18,"./core/ui/UIWind":16},"path":"preview-scripts/assets/YK/YK.js"},{"deps":{"../utils/Listener":21},"path":"preview-scripts/assets/YK/core/resmgr/ResMgr.js"},{"deps":{"../../YK":3,"./Scene":19},"path":"preview-scripts/assets/YK/example/scene/SceneTest.js"},{"deps":{},"path":"preview-scripts/assets/YK/example/statemechine/StateMechineTest.js"},{"deps":{"../../YK":3},"path":"preview-scripts/assets/YK/example/resmgr/ResMgrTest.js"},{"deps":{"../../YK":3},"path":"preview-scripts/assets/YK/example/ui/TestUI.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/statemechine/IState.js"},{"deps":{"../task/TaskList":11,"../utils/TimeDelay":14,"../utils/Listener":21,"../statemechine/StateMachine":18},"path":"preview-scripts/assets/YK/core/scene/Scene.js"},{"deps":{"./Task":17},"path":"preview-scripts/assets/YK/core/task/TaskList.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/event/Event.js"},{"deps":{"../../YK":3},"path":"preview-scripts/assets/YK/example/task/TaskTest.js"},{"deps":{"./Listener":21},"path":"preview-scripts/assets/YK/core/utils/TimeDelay.js"},{"deps":{"./task/TaskTest":13,"./event/EventTest":2,"./scene/Scene":19,"./ui/TestUI":8,"./resmgr/ResMgrTest":7,"./scene/SceneTest":5,"./statemechine/StateMechineTest":6},"path":"preview-scripts/assets/YK/example/index.js"},{"deps":{"./UIConfig":20,"../utils/Listener":21},"path":"preview-scripts/assets/YK/core/ui/UIWind.js"},{"deps":{"../utils/TimeDelay":14},"path":"preview-scripts/assets/YK/core/task/Task.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/statemechine/StateMachine.js"},{"deps":{"../../YK":3},"path":"preview-scripts/assets/YK/example/scene/Scene.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/ui/UIConfig.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/utils/Listener.js"},{"deps":{"./Event":12},"path":"preview-scripts/assets/YK/core/event/EventDispatcher.js"},{"deps":{},"path":"preview-scripts/assets/YK/core/utils/GameFlag.js"}];
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
    