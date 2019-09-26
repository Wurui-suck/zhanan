// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var code = document.querySelector('#code');
var style = document.querySelector('#style');
var string = "/*\u57FA\u4F6C\u6D9B\uFF0C\u4F60\u5C31\u662F\u4E2A\u5434\u9510\n\u73B0\u5728\u7ED9\u4F60\u770B\u770B\u600E\u4E48\u753B\u6770\u5C3C\u9F9F*/\n/*\u5148\u627E\u4E2A\u5730\u65B9\u628A\u5199\u4EE3\u7801\u7684\u4F4D\u7F6E\u56FA\u5B9A\u4E0B*/\n#code{\n   border:1px red solid;\n}\n/*\u7136\u540E\u5C31\u5728\u4E0B\u9762\u753B\u6770\u5C3C\u9F9F\u5427*/\n\n/*\u5148\u628A\u80CC\u666F\u989C\u8272\u8BBE\u5B9A\u4E00\u4E0B*/\n#demo{\n    background: rgb(156, 213, 231);\n    display:flex;\n    justify-content:center;\n    align-items: center;\n    position:relative;\n}\n/*\u89C4\u5B9A\u4E2A\u5730\u65B9\u753B\u6770\u5C3C\u9F9F\u5427\uFF01*/\n#preview{\n    height: 400px;\n    width: 400px; \n    position: absolute;\n    border:1px red solid;\n}\n/*\u7136\u540E\u753B\u4E24\u4E2A\u773C\u775B\u5427*/\n.eye {\n    height: 120px;\n    width: 90px;\n    border-top-left-radius: 50% 50%;\n    border-top-right-radius: 50% 50%;\n    border-bottom-left-radius: 50% 15%;\n    border-bottom-right-radius: 50% 15%;\n    background:black;\n}\n.eye.right {\n    transform: rotate(-5deg);\n}\n.eye.left {\n    transform: rotate(5deg);\n}\n/*\u52A0\u4E0A\u773C\u77B3*/\n.iris-right2 {\n    height: 80px;\n    width: 80px;\n    background: rgb(125, 41, 35);\n    border-radius: 50%;\n}\n\n.iris-left2 {\n    height: 80px;\n    width: 80px;\n    background: rgb(125, 41, 35);\n    border-radius: 50%;\n}\n\n.iris-right3 {\n    height: 60px;\n    width: 45px;\n    background: white;\n    border-radius: 50%;\n    transform: rotate(27deg);\n}\n\n.iris-left3 {\n    height: 60px;\n    width: 45px;\n    background: white;\n    border-radius: 50%;\n    transform: rotate(36deg);\n}\n\n.iris-right4 {\n    height: 35px;\n    width: 8px;\n    background: white;\n    border-radius: 50%;\n    transform: rotate(-15deg)\n}\n\n.iris-left4 {\n    height: 32px;\n    width: 8px;\n    background: white;\n    border-radius: 50%;\n    transform: rotate(-25deg)\n}\n\n.iris-right5 {\n    height: 10px;\n    width: 4px;\n    background: white;\n    border-radius: 50%;\n    transform: rotate(-15deg)\n}\n\n.iris-left5 {\n    height: 10px;\n    width: 4px;\n    background: white;\n    border-radius: 50%;\n    transform: rotate(-25deg)\n}\n.iris-right1 {\n    height: 100px;\n    width: 70px;\n    background: black;\n    border-radius: 50%;\n    transform: rotate(3deg);\n}\n\n.iris-left1 {\n    height: 100px;\n    width: 70px;\n    background: black;\n    border-radius: 50%;\n    transform: rotate(17deg);\n}\n/*\u52A0\u4E0A\u7709\u6BDB*/\n.brow-left {\n    height: 10px;\n    width: 35px;\n    border: 1px solid;\n    border-color: black transparent transparent transparent;\n    border-radius: 50%;\n    transform: rotate(40deg);\n}\n\n.brow-right {\n    height: 10px;\n    width: 35px;\n    border: 1px solid;\n    border-color: black transparent transparent transparent;\n    border-radius: 50%;\n    transform: rotate(-40deg);\n}\n/*\u518D\u6765\u753B\u753B\u9F3B\u5B50*/\n.nose-left {\n    height: 0px;\n    width: 15px;\n    border-style: solid;\n    border-color: rgb(44, 49, 42) transparent transparent transparent;\n    border-width: 1px;\n    transform: rotate(-38deg) translateX(20px);\n}\n.nose-right {\n    height: 0px;\n    width: 15px;\n    border-style: solid;\n    border-color: rgb(44, 49, 42) transparent transparent transparent;\n    border-width: 1px;\n    transform: rotate(38deg) translateX(-20px);\n}\n/*\u7136\u540E\u662F\u6700\u9EBB\u70E6\u7684\u5634\u5DF4*/\n/*\u5148\u753B\u4E0A\u5634\u5507\u5427*/\n.mouse-top.left {\n    height: 10px;\n    width: 180px;\n    background: rgb(76, 48, 47);\n    border-top-left-radius: 75% 100%;\n    border-top-right-radius: 25% 100%;\n}\n.mouse-top.right {\n    height: 10px;\n    width: 180px;\n    background: rgb(76, 48, 47);\n    border-top-right-radius: 75% 100%;\n    border-top-left-radius: 25% 100%;\n}  \n/*\u7136\u540E\u662F\u4E0B\u5634\u5507*/\n\n.mouse-bottom.left {\n    height: 70px;\n    width: 180px;\n    background: rgb(76, 48, 47);\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 100%;\n}\n.mouse-bottom.right {\n    height: 70px;\n    width: 180px;\n    background: rgb(76, 48, 47);\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 100%;\n}\n/*\u6700\u540E\u518D\u52A0\u4E0A\u5C0F\u820C\u5934*/\n.tr {\n    height: 180px;\n    width: 300px;\n    background: rgba(190, 69, 58, 1);\n    border-radius: 50%;\n}\n\n.br {\n    background: rgba(190, 69, 58, 1);\n    height: 180px;\n    width: 300px;\n    border-radius: 50%;\n}\n.tf {\n    height: 180px;\n    width: 300px;\n    background: rgba(190, 69, 58, 1);\n    border-radius: 50%;\n}\n\n.bf {\n    height: 180px;\n    width: 300px;\n    background: rgba(190, 69, 58, 1);\n    border-radius: 50%;\n    overflow: hidden;\n}\n.sr {\n    height: 60px;\n    width: 113px;\n    background: rgb(247, 145, 140);\n    border-bottom-right-radius: 60% 45%;\n    border-top-right-radius: 60% 55%;\n    border-bottom-left-radius: 1%;\n    border-top-left-radius: 40% 50%;\n}\n\n.sl {\n    height: 70px;\n    width: 180px;\n    background: rgb(247, 145, 140);\n    border-bottom-right-radius: 0%;\n    border-top-right-radius: 60% 55%;\n    border-bottom-left-radius: 1%;\n    border-top-left-radius: 40% 50%;\n}\n\n/*\u6700\u540E\u518D\u628A\u8FB9\u6846\u53BB\u6389\uFF0Cgay\u6D9B\u4F60\u7684\u6770\u5C3C\u9F9F\u5C31\u505A\u597D\u5566*/\n#preview{\n    border:none;\n}\n\n";
var string2 = "";
var n = 0;

var step = function step() {
  setTimeout(function () {
    if (string[n] === '\n') {
      string2 += '<br>';
    }

    if (string[n] === ' ') {
      string2 += '&nbsp';
    } else {
      string2 += string[n];
    }

    style.innerHTML = string.substring(0, n);
    code.innerHTML = string2;
    code.scrollTo(0, 9999);
    n += 1;

    if (n < string.length) {
      step();
    }
  }, 0);
};

step();
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53376" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=main.1f19ae8e.js.map