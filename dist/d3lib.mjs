var Ly = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function eN(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var no = {}, tN = {
  get exports() {
    return no;
  },
  set exports(u) {
    no = u;
  }
}, Nv = {}, Qr = {}, nN = {
  get exports() {
    return Qr;
  },
  set exports(u) {
    Qr = u;
  }
}, Ut = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fT;
function rN() {
  if (fT)
    return Ut;
  fT = 1;
  var u = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), y = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), D = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), A = Symbol.iterator;
  function B(R) {
    return R === null || typeof R != "object" ? null : (R = A && R[A] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = Object.assign, fe = {};
  function ye(R, F, ne) {
    this.props = R, this.context = F, this.refs = fe, this.updater = ne || K;
  }
  ye.prototype.isReactComponent = {}, ye.prototype.setState = function(R, F) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, F, "setState");
  }, ye.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function Ue() {
  }
  Ue.prototype = ye.prototype;
  function oe(R, F, ne) {
    this.props = R, this.context = F, this.refs = fe, this.updater = ne || K;
  }
  var se = oe.prototype = new Ue();
  se.constructor = oe, te(se, ye.prototype), se.isPureReactComponent = !0;
  var Se = Array.isArray, G = Object.prototype.hasOwnProperty, Pe = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function gt(R, F, ne) {
    var ve, pe = {}, Le = null, Te = null;
    if (F != null)
      for (ve in F.ref !== void 0 && (Te = F.ref), F.key !== void 0 && (Le = "" + F.key), F)
        G.call(F, ve) && !je.hasOwnProperty(ve) && (pe[ve] = F[ve]);
    var De = arguments.length - 2;
    if (De === 1)
      pe.children = ne;
    else if (1 < De) {
      for (var Me = Array(De), Ge = 0; Ge < De; Ge++)
        Me[Ge] = arguments[Ge + 2];
      pe.children = Me;
    }
    if (R && R.defaultProps)
      for (ve in De = R.defaultProps, De)
        pe[ve] === void 0 && (pe[ve] = De[ve]);
    return { $$typeof: u, type: R, key: Le, ref: Te, props: pe, _owner: Pe.current };
  }
  function pt(R, F) {
    return { $$typeof: u, type: R.type, key: F, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function ot(R) {
    return typeof R == "object" && R !== null && R.$$typeof === u;
  }
  function be(R) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ne) {
      return F[ne];
    });
  }
  var vt = /\/+/g;
  function ge(R, F) {
    return typeof R == "object" && R !== null && R.key != null ? be("" + R.key) : F.toString(36);
  }
  function Ve(R, F, ne, ve, pe) {
    var Le = typeof R;
    (Le === "undefined" || Le === "boolean") && (R = null);
    var Te = !1;
    if (R === null)
      Te = !0;
    else
      switch (Le) {
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case u:
            case s:
              Te = !0;
          }
      }
    if (Te)
      return Te = R, pe = pe(Te), R = ve === "" ? "." + ge(Te, 0) : ve, Se(pe) ? (ne = "", R != null && (ne = R.replace(vt, "$&/") + "/"), Ve(pe, F, ne, "", function(Ge) {
        return Ge;
      })) : pe != null && (ot(pe) && (pe = pt(pe, ne + (!pe.key || Te && Te.key === pe.key ? "" : ("" + pe.key).replace(vt, "$&/") + "/") + R)), F.push(pe)), 1;
    if (Te = 0, ve = ve === "" ? "." : ve + ":", Se(R))
      for (var De = 0; De < R.length; De++) {
        Le = R[De];
        var Me = ve + ge(Le, De);
        Te += Ve(Le, F, ne, Me, pe);
      }
    else if (Me = B(R), typeof Me == "function")
      for (R = Me.call(R), De = 0; !(Le = R.next()).done; )
        Le = Le.value, Me = ve + ge(Le, De++), Te += Ve(Le, F, ne, Me, pe);
    else if (Le === "object")
      throw F = String(R), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function xt(R, F, ne) {
    if (R == null)
      return R;
    var ve = [], pe = 0;
    return Ve(R, ve, "", "", function(Le) {
      return F.call(ne, Le, pe++);
    }), ve;
  }
  function Xe(R) {
    if (R._status === -1) {
      var F = R._result;
      F = F(), F.then(function(ne) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ne);
      }, function(ne) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ne);
      }), R._status === -1 && (R._status = 0, R._result = F);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var Ee = { current: null }, ue = { transition: null }, ke = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: ue, ReactCurrentOwner: Pe };
  return Ut.Children = { map: xt, forEach: function(R, F, ne) {
    xt(R, function() {
      F.apply(this, arguments);
    }, ne);
  }, count: function(R) {
    var F = 0;
    return xt(R, function() {
      F++;
    }), F;
  }, toArray: function(R) {
    return xt(R, function(F) {
      return F;
    }) || [];
  }, only: function(R) {
    if (!ot(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Ut.Component = ye, Ut.Fragment = d, Ut.Profiler = E, Ut.PureComponent = oe, Ut.StrictMode = m, Ut.Suspense = k, Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, Ut.cloneElement = function(R, F, ne) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var ve = te({}, R.props), pe = R.key, Le = R.ref, Te = R._owner;
    if (F != null) {
      if (F.ref !== void 0 && (Le = F.ref, Te = Pe.current), F.key !== void 0 && (pe = "" + F.key), R.type && R.type.defaultProps)
        var De = R.type.defaultProps;
      for (Me in F)
        G.call(F, Me) && !je.hasOwnProperty(Me) && (ve[Me] = F[Me] === void 0 && De !== void 0 ? De[Me] : F[Me]);
    }
    var Me = arguments.length - 2;
    if (Me === 1)
      ve.children = ne;
    else if (1 < Me) {
      De = Array(Me);
      for (var Ge = 0; Ge < Me; Ge++)
        De[Ge] = arguments[Ge + 2];
      ve.children = De;
    }
    return { $$typeof: u, type: R.type, key: pe, ref: Le, props: ve, _owner: Te };
  }, Ut.createContext = function(R) {
    return R = { $$typeof: y, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: S, _context: R }, R.Consumer = R;
  }, Ut.createElement = gt, Ut.createFactory = function(R) {
    var F = gt.bind(null, R);
    return F.type = R, F;
  }, Ut.createRef = function() {
    return { current: null };
  }, Ut.forwardRef = function(R) {
    return { $$typeof: T, render: R };
  }, Ut.isValidElement = ot, Ut.lazy = function(R) {
    return { $$typeof: j, _payload: { _status: -1, _result: R }, _init: Xe };
  }, Ut.memo = function(R, F) {
    return { $$typeof: D, type: R, compare: F === void 0 ? null : F };
  }, Ut.startTransition = function(R) {
    var F = ue.transition;
    ue.transition = {};
    try {
      R();
    } finally {
      ue.transition = F;
    }
  }, Ut.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ut.useCallback = function(R, F) {
    return Ee.current.useCallback(R, F);
  }, Ut.useContext = function(R) {
    return Ee.current.useContext(R);
  }, Ut.useDebugValue = function() {
  }, Ut.useDeferredValue = function(R) {
    return Ee.current.useDeferredValue(R);
  }, Ut.useEffect = function(R, F) {
    return Ee.current.useEffect(R, F);
  }, Ut.useId = function() {
    return Ee.current.useId();
  }, Ut.useImperativeHandle = function(R, F, ne) {
    return Ee.current.useImperativeHandle(R, F, ne);
  }, Ut.useInsertionEffect = function(R, F) {
    return Ee.current.useInsertionEffect(R, F);
  }, Ut.useLayoutEffect = function(R, F) {
    return Ee.current.useLayoutEffect(R, F);
  }, Ut.useMemo = function(R, F) {
    return Ee.current.useMemo(R, F);
  }, Ut.useReducer = function(R, F, ne) {
    return Ee.current.useReducer(R, F, ne);
  }, Ut.useRef = function(R) {
    return Ee.current.useRef(R);
  }, Ut.useState = function(R) {
    return Ee.current.useState(R);
  }, Ut.useSyncExternalStore = function(R, F, ne) {
    return Ee.current.useSyncExternalStore(R, F, ne);
  }, Ut.useTransition = function() {
    return Ee.current.useTransition();
  }, Ut.version = "18.2.0", Ut;
}
var Fv = {}, aN = {
  get exports() {
    return Fv;
  },
  set exports(u) {
    Fv = u;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dT;
function iN() {
  return dT || (dT = 1, function(u, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.2.0", m = Symbol.for("react.element"), E = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), D = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), ye = Symbol.iterator, Ue = "@@iterator";
      function oe(b) {
        if (b === null || typeof b != "object")
          return null;
        var M = ye && b[ye] || b[Ue];
        return typeof M == "function" ? M : null;
      }
      var se = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Se = {
        transition: null
      }, G = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, gt = null;
      function pt(b) {
        gt = b;
      }
      je.setExtraStackFrame = function(b) {
        gt = b;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var b = "";
        gt && (b += gt);
        var M = je.getCurrentStack;
        return M && (b += M() || ""), b;
      };
      var ot = !1, be = !1, vt = !1, ge = !1, Ve = !1, xt = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: Se,
        ReactCurrentOwner: Pe
      };
      xt.ReactDebugCurrentFrame = je, xt.ReactCurrentActQueue = G;
      function Xe(b) {
        {
          for (var M = arguments.length, W = new Array(M > 1 ? M - 1 : 0), X = 1; X < M; X++)
            W[X - 1] = arguments[X];
          ue("warn", b, W);
        }
      }
      function Ee(b) {
        {
          for (var M = arguments.length, W = new Array(M > 1 ? M - 1 : 0), X = 1; X < M; X++)
            W[X - 1] = arguments[X];
          ue("error", b, W);
        }
      }
      function ue(b, M, W) {
        {
          var X = xt.ReactDebugCurrentFrame, he = X.getStackAddendum();
          he !== "" && (M += "%s", W = W.concat([he]));
          var it = W.map(function(Oe) {
            return String(Oe);
          });
          it.unshift("Warning: " + M), Function.prototype.apply.call(console[b], console, it);
        }
      }
      var ke = {};
      function R(b, M) {
        {
          var W = b.constructor, X = W && (W.displayName || W.name) || "ReactClass", he = X + "." + M;
          if (ke[he])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", M, X), ke[he] = !0;
        }
      }
      var F = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(b) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(b, M, W) {
          R(b, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(b, M, W, X) {
          R(b, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(b, M, W, X) {
          R(b, "setState");
        }
      }, ne = Object.assign, ve = {};
      Object.freeze(ve);
      function pe(b, M, W) {
        this.props = b, this.context = M, this.refs = ve, this.updater = W || F;
      }
      pe.prototype.isReactComponent = {}, pe.prototype.setState = function(b, M) {
        if (typeof b != "object" && typeof b != "function" && b != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, b, M, "setState");
      }, pe.prototype.forceUpdate = function(b) {
        this.updater.enqueueForceUpdate(this, b, "forceUpdate");
      };
      {
        var Le = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Te = function(b, M) {
          Object.defineProperty(pe.prototype, b, {
            get: function() {
              Xe("%s(...) is deprecated in plain JavaScript React classes. %s", M[0], M[1]);
            }
          });
        };
        for (var De in Le)
          Le.hasOwnProperty(De) && Te(De, Le[De]);
      }
      function Me() {
      }
      Me.prototype = pe.prototype;
      function Ge(b, M, W) {
        this.props = b, this.context = M, this.refs = ve, this.updater = W || F;
      }
      var dt = Ge.prototype = new Me();
      dt.constructor = Ge, ne(dt, pe.prototype), dt.isPureReactComponent = !0;
      function Yt() {
        var b = {
          current: null
        };
        return Object.seal(b), b;
      }
      var Ce = Array.isArray;
      function Pt(b) {
        return Ce(b);
      }
      function Cn(b) {
        {
          var M = typeof Symbol == "function" && Symbol.toStringTag, W = M && b[Symbol.toStringTag] || b.constructor.name || "Object";
          return W;
        }
      }
      function On(b) {
        try {
          return In(b), !1;
        } catch {
          return !0;
        }
      }
      function In(b) {
        return "" + b;
      }
      function An(b) {
        if (On(b))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(b)), In(b);
      }
      function Gr(b, M, W) {
        var X = b.displayName;
        if (X)
          return X;
        var he = M.displayName || M.name || "";
        return he !== "" ? W + "(" + he + ")" : W;
      }
      function qr(b) {
        return b.displayName || "Context";
      }
      function Xn(b) {
        if (b == null)
          return null;
        if (typeof b.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
          return b.displayName || b.name || null;
        if (typeof b == "string")
          return b;
        switch (b) {
          case S:
            return "Fragment";
          case E:
            return "Portal";
          case T:
            return "Profiler";
          case y:
            return "StrictMode";
          case A:
            return "Suspense";
          case B:
            return "SuspenseList";
        }
        if (typeof b == "object")
          switch (b.$$typeof) {
            case D:
              var M = b;
              return qr(M) + ".Consumer";
            case k:
              var W = b;
              return qr(W._context) + ".Provider";
            case j:
              return Gr(b, b.render, "ForwardRef");
            case K:
              var X = b.displayName || null;
              return X !== null ? X : Xn(b.type) || "Memo";
            case te: {
              var he = b, it = he._payload, Oe = he._init;
              try {
                return Xn(Oe(it));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Sr = Object.prototype.hasOwnProperty, Kr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, ya, ur;
      ur = {};
      function Xr(b) {
        if (Sr.call(b, "ref")) {
          var M = Object.getOwnPropertyDescriptor(b, "ref").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return b.ref !== void 0;
      }
      function bn(b) {
        if (Sr.call(b, "key")) {
          var M = Object.getOwnPropertyDescriptor(b, "key").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return b.key !== void 0;
      }
      function Mr(b, M) {
        var W = function() {
          Er || (Er = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        W.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: W,
          configurable: !0
        });
      }
      function gi(b, M) {
        var W = function() {
          ya || (ya = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        W.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: W,
          configurable: !0
        });
      }
      function ga(b) {
        if (typeof b.ref == "string" && Pe.current && b.__self && Pe.current.stateNode !== b.__self) {
          var M = Xn(Pe.current.type);
          ur[M] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M, b.ref), ur[M] = !0);
        }
      }
      var xe = function(b, M, W, X, he, it, Oe) {
        var rt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: m,
          // Built-in properties that belong on the element
          type: b,
          key: M,
          ref: W,
          props: Oe,
          // Record the component responsible for creating this element.
          _owner: it
        };
        return rt._store = {}, Object.defineProperty(rt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(rt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.defineProperty(rt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: he
        }), Object.freeze && (Object.freeze(rt.props), Object.freeze(rt)), rt;
      };
      function Ze(b, M, W) {
        var X, he = {}, it = null, Oe = null, rt = null, _t = null;
        if (M != null) {
          Xr(M) && (Oe = M.ref, ga(M)), bn(M) && (An(M.key), it = "" + M.key), rt = M.__self === void 0 ? null : M.__self, _t = M.__source === void 0 ? null : M.__source;
          for (X in M)
            Sr.call(M, X) && !Kr.hasOwnProperty(X) && (he[X] = M[X]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          he.children = W;
        else if (Ht > 1) {
          for (var ln = Array(Ht), tn = 0; tn < Ht; tn++)
            ln[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(ln), he.children = ln;
        }
        if (b && b.defaultProps) {
          var on = b.defaultProps;
          for (X in on)
            he[X] === void 0 && (he[X] = on[X]);
        }
        if (it || Oe) {
          var pn = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          it && Mr(he, pn), Oe && gi(he, pn);
        }
        return xe(b, it, Oe, rt, _t, Pe.current, he);
      }
      function Tt(b, M) {
        var W = xe(b.type, M, b.ref, b._self, b._source, b._owner, b.props);
        return W;
      }
      function Wt(b, M, W) {
        if (b == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
        var X, he = ne({}, b.props), it = b.key, Oe = b.ref, rt = b._self, _t = b._source, Ht = b._owner;
        if (M != null) {
          Xr(M) && (Oe = M.ref, Ht = Pe.current), bn(M) && (An(M.key), it = "" + M.key);
          var ln;
          b.type && b.type.defaultProps && (ln = b.type.defaultProps);
          for (X in M)
            Sr.call(M, X) && !Kr.hasOwnProperty(X) && (M[X] === void 0 && ln !== void 0 ? he[X] = ln[X] : he[X] = M[X]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          he.children = W;
        else if (tn > 1) {
          for (var on = Array(tn), pn = 0; pn < tn; pn++)
            on[pn] = arguments[pn + 2];
          he.children = on;
        }
        return xe(b.type, it, Oe, rt, _t, Ht, he);
      }
      function Gt(b) {
        return typeof b == "object" && b !== null && b.$$typeof === m;
      }
      var zn = ".", xn = ":";
      function Cr(b) {
        var M = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, X = b.replace(M, function(he) {
          return W[he];
        });
        return "$" + X;
      }
      var en = !1, Nr = /\/+/g;
      function qt(b) {
        return b.replace(Nr, "$&/");
      }
      function Kt(b, M) {
        return typeof b == "object" && b !== null && b.key != null ? (An(b.key), Cr("" + b.key)) : M.toString(36);
      }
      function ai(b, M, W, X, he) {
        var it = typeof b;
        (it === "undefined" || it === "boolean") && (b = null);
        var Oe = !1;
        if (b === null)
          Oe = !0;
        else
          switch (it) {
            case "string":
            case "number":
              Oe = !0;
              break;
            case "object":
              switch (b.$$typeof) {
                case m:
                case E:
                  Oe = !0;
              }
          }
        if (Oe) {
          var rt = b, _t = he(rt), Ht = X === "" ? zn + Kt(rt, 0) : X;
          if (Pt(_t)) {
            var ln = "";
            Ht != null && (ln = qt(Ht) + "/"), ai(_t, M, ln, "", function(Rd) {
              return Rd;
            });
          } else
            _t != null && (Gt(_t) && (_t.key && (!rt || rt.key !== _t.key) && An(_t.key), _t = Tt(
              _t,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (_t.key && (!rt || rt.key !== _t.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                qt("" + _t.key) + "/"
              ) : "") + Ht
            )), M.push(_t));
          return 1;
        }
        var tn, on, pn = 0, Mt = X === "" ? zn : X + xn;
        if (Pt(b))
          for (var Bi = 0; Bi < b.length; Bi++)
            tn = b[Bi], on = Mt + Kt(tn, Bi), pn += ai(tn, M, W, on, he);
        else {
          var yo = oe(b);
          if (typeof yo == "function") {
            var gs = b;
            yo === gs.entries && (en || Xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), en = !0);
            for (var wd = yo.call(gs), oi, Ss = 0; !(oi = wd.next()).done; )
              tn = oi.value, on = Mt + Kt(tn, Ss++), pn += ai(tn, M, W, on, he);
          } else if (it === "object") {
            var Es = String(b);
            throw new Error("Objects are not valid as a React child (found: " + (Es === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : Es) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return pn;
      }
      function Ua(b, M, W) {
        if (b == null)
          return b;
        var X = [], he = 0;
        return ai(b, X, "", "", function(it) {
          return M.call(W, it, he++);
        }), X;
      }
      function Su(b) {
        var M = 0;
        return Ua(b, function() {
          M++;
        }), M;
      }
      function dl(b, M, W) {
        Ua(b, function() {
          M.apply(this, arguments);
        }, W);
      }
      function ao(b) {
        return Ua(b, function(M) {
          return M;
        }) || [];
      }
      function Hi(b) {
        if (!Gt(b))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return b;
      }
      function Eu(b) {
        var M = {
          $$typeof: D,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: b,
          _currentValue2: b,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        M.Provider = {
          $$typeof: k,
          _context: M
        };
        var W = !1, X = !1, he = !1;
        {
          var it = {
            $$typeof: D,
            _context: M
          };
          Object.defineProperties(it, {
            Provider: {
              get: function() {
                return X || (X = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), M.Provider;
              },
              set: function(Oe) {
                M.Provider = Oe;
              }
            },
            _currentValue: {
              get: function() {
                return M._currentValue;
              },
              set: function(Oe) {
                M._currentValue = Oe;
              }
            },
            _currentValue2: {
              get: function() {
                return M._currentValue2;
              },
              set: function(Oe) {
                M._currentValue2 = Oe;
              }
            },
            _threadCount: {
              get: function() {
                return M._threadCount;
              },
              set: function(Oe) {
                M._threadCount = Oe;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), M.Consumer;
              }
            },
            displayName: {
              get: function() {
                return M.displayName;
              },
              set: function(Oe) {
                he || (Xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Oe), he = !0);
              }
            }
          }), M.Consumer = it;
        }
        return M._currentRenderer = null, M._currentRenderer2 = null, M;
      }
      var Sa = -1, Si = 0, Ea = 1, Ei = 2;
      function Lr(b) {
        if (b._status === Sa) {
          var M = b._result, W = M();
          if (W.then(function(it) {
            if (b._status === Si || b._status === Sa) {
              var Oe = b;
              Oe._status = Ea, Oe._result = it;
            }
          }, function(it) {
            if (b._status === Si || b._status === Sa) {
              var Oe = b;
              Oe._status = Ei, Oe._result = it;
            }
          }), b._status === Sa) {
            var X = b;
            X._status = Si, X._result = W;
          }
        }
        if (b._status === Ea) {
          var he = b._result;
          return he === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, he), "default" in he || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, he), he.default;
        } else
          throw b._result;
      }
      function Ca(b) {
        var M = {
          // We use these fields to store the result.
          _status: Sa,
          _result: b
        }, W = {
          $$typeof: te,
          _payload: M,
          _init: Lr
        };
        {
          var X, he;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(it) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = it, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return he;
              },
              set: function(it) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), he = it, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function Ci(b) {
        b != null && b.$$typeof === K ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof b != "function" ? Ee("forwardRef requires a render function but was given %s.", b === null ? "null" : typeof b) : b.length !== 0 && b.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", b.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), b != null && (b.defaultProps != null || b.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var M = {
          $$typeof: j,
          render: b
        };
        {
          var W;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(X) {
              W = X, !b.name && !b.displayName && (b.displayName = X);
            }
          });
        }
        return M;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function ae(b) {
        return !!(typeof b == "string" || typeof b == "function" || b === S || b === T || Ve || b === y || b === A || b === B || ge || b === fe || ot || be || vt || typeof b == "object" && b !== null && (b.$$typeof === te || b.$$typeof === K || b.$$typeof === k || b.$$typeof === D || b.$$typeof === j || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        b.$$typeof === N || b.getModuleId !== void 0));
      }
      function we(b, M) {
        ae(b) || Ee("memo: The first argument must be a component. Instead received: %s", b === null ? "null" : typeof b);
        var W = {
          $$typeof: K,
          type: b,
          compare: M === void 0 ? null : M
        };
        {
          var X;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return X;
            },
            set: function(he) {
              X = he, !b.name && !b.displayName && (b.displayName = he);
            }
          });
        }
        return W;
      }
      function Fe() {
        var b = se.current;
        return b === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), b;
      }
      function St(b) {
        var M = Fe();
        if (b._context !== void 0) {
          var W = b._context;
          W.Consumer === b ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === b && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return M.useContext(b);
      }
      function Nt(b) {
        var M = Fe();
        return M.useState(b);
      }
      function Et(b, M, W) {
        var X = Fe();
        return X.useReducer(b, M, W);
      }
      function tt(b) {
        var M = Fe();
        return M.useRef(b);
      }
      function Fn(b, M) {
        var W = Fe();
        return W.useEffect(b, M);
      }
      function fn(b, M) {
        var W = Fe();
        return W.useInsertionEffect(b, M);
      }
      function dn(b, M) {
        var W = Fe();
        return W.useLayoutEffect(b, M);
      }
      function lr(b, M) {
        var W = Fe();
        return W.useCallback(b, M);
      }
      function bi(b, M) {
        var W = Fe();
        return W.useMemo(b, M);
      }
      function io(b, M, W) {
        var X = Fe();
        return X.useImperativeHandle(b, M, W);
      }
      function jt(b, M) {
        {
          var W = Fe();
          return W.useDebugValue(b, M);
        }
      }
      function xd() {
        var b = Fe();
        return b.useTransition();
      }
      function ii(b) {
        var M = Fe();
        return M.useDeferredValue(b);
      }
      function Rt() {
        var b = Fe();
        return b.useId();
      }
      function xi(b, M, W) {
        var X = Fe();
        return X.useSyncExternalStore(b, M, W);
      }
      var Cu = 0, uo, bu, Zr, vs, Ar, hs, ms;
      function Rc() {
      }
      Rc.__reactDisabledLog = !0;
      function lo() {
        {
          if (Cu === 0) {
            uo = console.log, bu = console.info, Zr = console.warn, vs = console.error, Ar = console.group, hs = console.groupCollapsed, ms = console.groupEnd;
            var b = {
              configurable: !0,
              enumerable: !0,
              value: Rc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: b,
              log: b,
              warn: b,
              error: b,
              group: b,
              groupCollapsed: b,
              groupEnd: b
            });
          }
          Cu++;
        }
      }
      function xu() {
        {
          if (Cu--, Cu === 0) {
            var b = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ne({}, b, {
                value: uo
              }),
              info: ne({}, b, {
                value: bu
              }),
              warn: ne({}, b, {
                value: Zr
              }),
              error: ne({}, b, {
                value: vs
              }),
              group: ne({}, b, {
                value: Ar
              }),
              groupCollapsed: ne({}, b, {
                value: hs
              }),
              groupEnd: ne({}, b, {
                value: ms
              })
            });
          }
          Cu < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ui = xt.ReactCurrentDispatcher, zr;
      function Tu(b, M, W) {
        {
          if (zr === void 0)
            try {
              throw Error();
            } catch (he) {
              var X = he.stack.trim().match(/\n( *(at )?)/);
              zr = X && X[1] || "";
            }
          return `
` + zr + b;
        }
      }
      var wu = !1, Ru;
      {
        var oo = typeof WeakMap == "function" ? WeakMap : Map;
        Ru = new oo();
      }
      function so(b, M) {
        if (!b || wu)
          return "";
        {
          var W = Ru.get(b);
          if (W !== void 0)
            return W;
        }
        var X;
        wu = !0;
        var he = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var it;
        it = ui.current, ui.current = null, lo();
        try {
          if (M) {
            var Oe = function() {
              throw Error();
            };
            if (Object.defineProperty(Oe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Oe, []);
              } catch (Mt) {
                X = Mt;
              }
              Reflect.construct(b, [], Oe);
            } else {
              try {
                Oe.call();
              } catch (Mt) {
                X = Mt;
              }
              b.call(Oe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Mt) {
              X = Mt;
            }
            b();
          }
        } catch (Mt) {
          if (Mt && X && typeof Mt.stack == "string") {
            for (var rt = Mt.stack.split(`
`), _t = X.stack.split(`
`), Ht = rt.length - 1, ln = _t.length - 1; Ht >= 1 && ln >= 0 && rt[Ht] !== _t[ln]; )
              ln--;
            for (; Ht >= 1 && ln >= 0; Ht--, ln--)
              if (rt[Ht] !== _t[ln]) {
                if (Ht !== 1 || ln !== 1)
                  do
                    if (Ht--, ln--, ln < 0 || rt[Ht] !== _t[ln]) {
                      var tn = `
` + rt[Ht].replace(" at new ", " at ");
                      return b.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", b.displayName)), typeof b == "function" && Ru.set(b, tn), tn;
                    }
                  while (Ht >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          wu = !1, ui.current = it, xu(), Error.prepareStackTrace = he;
        }
        var on = b ? b.displayName || b.name : "", pn = on ? Tu(on) : "";
        return typeof b == "function" && Ru.set(b, pn), pn;
      }
      function $i(b, M, W) {
        return so(b, !1);
      }
      function Td(b) {
        var M = b.prototype;
        return !!(M && M.isReactComponent);
      }
      function Ti(b, M, W) {
        if (b == null)
          return "";
        if (typeof b == "function")
          return so(b, Td(b));
        if (typeof b == "string")
          return Tu(b);
        switch (b) {
          case A:
            return Tu("Suspense");
          case B:
            return Tu("SuspenseList");
        }
        if (typeof b == "object")
          switch (b.$$typeof) {
            case j:
              return $i(b.render);
            case K:
              return Ti(b.type, M, W);
            case te: {
              var X = b, he = X._payload, it = X._init;
              try {
                return Ti(it(he), M, W);
              } catch {
              }
            }
          }
        return "";
      }
      var Vt = {}, co = xt.ReactDebugCurrentFrame;
      function pl(b) {
        if (b) {
          var M = b._owner, W = Ti(b.type, b._source, M ? M.type : null);
          co.setExtraStackFrame(W);
        } else
          co.setExtraStackFrame(null);
      }
      function fo(b, M, W, X, he) {
        {
          var it = Function.call.bind(Sr);
          for (var Oe in b)
            if (it(b, Oe)) {
              var rt = void 0;
              try {
                if (typeof b[Oe] != "function") {
                  var _t = Error((X || "React class") + ": " + W + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw _t.name = "Invariant Violation", _t;
                }
                rt = b[Oe](M, Oe, X, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                rt = Ht;
              }
              rt && !(rt instanceof Error) && (pl(he), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", W, Oe, typeof rt), pl(null)), rt instanceof Error && !(rt.message in Vt) && (Vt[rt.message] = !0, pl(he), Ee("Failed %s type: %s", W, rt.message), pl(null));
            }
        }
      }
      function Ft(b) {
        if (b) {
          var M = b._owner, W = Ti(b.type, b._source, M ? M.type : null);
          pt(W);
        } else
          pt(null);
      }
      var po;
      po = !1;
      function vo() {
        if (Pe.current) {
          var b = Xn(Pe.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
      function ht(b) {
        if (b !== void 0) {
          var M = b.fileName.replace(/^.*[\\\/]/, ""), W = b.lineNumber;
          return `

Check your code at ` + M + ":" + W + ".";
        }
        return "";
      }
      function vl(b) {
        return b != null ? ht(b.__source) : "";
      }
      var Tn = {};
      function Jr(b) {
        var M = vo();
        if (!M) {
          var W = typeof b == "string" ? b : b.displayName || b.name;
          W && (M = `

Check the top-level render call using <` + W + ">.");
        }
        return M;
      }
      function Ur(b, M) {
        if (!(!b._store || b._store.validated || b.key != null)) {
          b._store.validated = !0;
          var W = Jr(M);
          if (!Tn[W]) {
            Tn[W] = !0;
            var X = "";
            b && b._owner && b._owner !== Pe.current && (X = " It was passed a child from " + Xn(b._owner.type) + "."), Ft(b), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, X), Ft(null);
          }
        }
      }
      function _u(b, M) {
        if (typeof b == "object") {
          if (Pt(b))
            for (var W = 0; W < b.length; W++) {
              var X = b[W];
              Gt(X) && Ur(X, M);
            }
          else if (Gt(b))
            b._store && (b._store.validated = !0);
          else if (b) {
            var he = oe(b);
            if (typeof he == "function" && he !== b.entries)
              for (var it = he.call(b), Oe; !(Oe = it.next()).done; )
                Gt(Oe.value) && Ur(Oe.value, M);
          }
        }
      }
      function Dn(b) {
        {
          var M = b.type;
          if (M == null || typeof M == "string")
            return;
          var W;
          if (typeof M == "function")
            W = M.propTypes;
          else if (typeof M == "object" && (M.$$typeof === j || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          M.$$typeof === K))
            W = M.propTypes;
          else
            return;
          if (W) {
            var X = Xn(M);
            fo(W, b.props, "prop", X, b);
          } else if (M.PropTypes !== void 0 && !po) {
            po = !0;
            var he = Xn(M);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
          }
          typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Xt(b) {
        {
          for (var M = Object.keys(b.props), W = 0; W < M.length; W++) {
            var X = M[W];
            if (X !== "children" && X !== "key") {
              Ft(b), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Ft(null);
              break;
            }
          }
          b.ref !== null && (Ft(b), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
        }
      }
      function _c(b, M, W) {
        var X = ae(b);
        if (!X) {
          var he = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var it = vl(M);
          it ? he += it : he += vo();
          var Oe;
          b === null ? Oe = "null" : Pt(b) ? Oe = "array" : b !== void 0 && b.$$typeof === m ? (Oe = "<" + (Xn(b.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof b, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, he);
        }
        var rt = Ze.apply(this, arguments);
        if (rt == null)
          return rt;
        if (X)
          for (var _t = 2; _t < arguments.length; _t++)
            _u(arguments[_t], b);
        return b === S ? Xt(rt) : Dn(rt), rt;
      }
      var ea = !1;
      function Zn(b) {
        var M = _c.bind(null, b);
        return M.type = b, ea || (ea = !0, Xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(M, "type", {
          enumerable: !1,
          get: function() {
            return Xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: b
            }), b;
          }
        }), M;
      }
      function wi(b, M, W) {
        for (var X = Wt.apply(this, arguments), he = 2; he < arguments.length; he++)
          _u(arguments[he], X.type);
        return Dn(X), X;
      }
      function kc(b, M) {
        var W = Se.transition;
        Se.transition = {};
        var X = Se.transition;
        Se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          b();
        } finally {
          if (Se.transition = W, W === null && X._updatedFibers) {
            var he = X._updatedFibers.size;
            he > 10 && Xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), X._updatedFibers.clear();
          }
        }
      }
      var Vi = !1, ku = null;
      function Oc(b) {
        if (ku === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7), W = u && u[M];
            ku = W.call(u, "timers").setImmediate;
          } catch {
            ku = function(he) {
              Vi === !1 && (Vi = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var it = new MessageChannel();
              it.port1.onmessage = he, it.port2.postMessage(void 0);
            };
          }
        return ku(b);
      }
      var Pa = 0, Ou = !1;
      function Du(b) {
        {
          var M = Pa;
          Pa++, G.current === null && (G.current = []);
          var W = G.isBatchingLegacy, X;
          try {
            if (G.isBatchingLegacy = !0, X = b(), !W && G.didScheduleLegacyUpdate) {
              var he = G.current;
              he !== null && (G.didScheduleLegacyUpdate = !1, Nu(he));
            }
          } catch (on) {
            throw ja(M), on;
          } finally {
            G.isBatchingLegacy = W;
          }
          if (X !== null && typeof X == "object" && typeof X.then == "function") {
            var it = X, Oe = !1, rt = {
              then: function(on, pn) {
                Oe = !0, it.then(function(Mt) {
                  ja(M), Pa === 0 ? ho(Mt, on, pn) : on(Mt);
                }, function(Mt) {
                  ja(M), pn(Mt);
                });
              }
            };
            return !Ou && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Oe || (Ou = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), rt;
          } else {
            var _t = X;
            if (ja(M), Pa === 0) {
              var Ht = G.current;
              Ht !== null && (Nu(Ht), G.current = null);
              var ln = {
                then: function(on, pn) {
                  G.current === null ? (G.current = [], ho(_t, on, pn)) : on(_t);
                }
              };
              return ln;
            } else {
              var tn = {
                then: function(on, pn) {
                  on(_t);
                }
              };
              return tn;
            }
          }
        }
      }
      function ja(b) {
        b !== Pa - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pa = b;
      }
      function ho(b, M, W) {
        {
          var X = G.current;
          if (X !== null)
            try {
              Nu(X), Oc(function() {
                X.length === 0 ? (G.current = null, M(b)) : ho(b, M, W);
              });
            } catch (he) {
              W(he);
            }
          else
            M(b);
        }
      }
      var Mu = !1;
      function Nu(b) {
        if (!Mu) {
          Mu = !0;
          var M = 0;
          try {
            for (; M < b.length; M++) {
              var W = b[M];
              do
                W = W(!0);
              while (W !== null);
            }
            b.length = 0;
          } catch (X) {
            throw b = b.slice(M + 1), X;
          } finally {
            Mu = !1;
          }
        }
      }
      var hl = _c, mo = wi, ys = Zn, li = {
        map: Ua,
        forEach: dl,
        count: Su,
        toArray: ao,
        only: Hi
      };
      s.Children = li, s.Component = pe, s.Fragment = S, s.Profiler = T, s.PureComponent = Ge, s.StrictMode = y, s.Suspense = A, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xt, s.cloneElement = mo, s.createContext = Eu, s.createElement = hl, s.createFactory = ys, s.createRef = Yt, s.forwardRef = Ci, s.isValidElement = Gt, s.lazy = Ca, s.memo = we, s.startTransition = kc, s.unstable_act = Du, s.useCallback = lr, s.useContext = St, s.useDebugValue = jt, s.useDeferredValue = ii, s.useEffect = Fn, s.useId = Rt, s.useImperativeHandle = io, s.useInsertionEffect = fn, s.useLayoutEffect = dn, s.useMemo = bi, s.useReducer = Et, s.useRef = tt, s.useState = Nt, s.useSyncExternalStore = xi, s.useTransition = xd, s.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(aN, Fv)), Fv;
}
(function(u) {
  process.env.NODE_ENV === "production" ? u.exports = rN() : u.exports = iN();
})(nN);
const ha = /* @__PURE__ */ eN(Qr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pT;
function uN() {
  if (pT)
    return Nv;
  pT = 1;
  var u = Qr, s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, E = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(T, k, D) {
    var j, A = {}, B = null, K = null;
    D !== void 0 && (B = "" + D), k.key !== void 0 && (B = "" + k.key), k.ref !== void 0 && (K = k.ref);
    for (j in k)
      m.call(k, j) && !S.hasOwnProperty(j) && (A[j] = k[j]);
    if (T && T.defaultProps)
      for (j in k = T.defaultProps, k)
        A[j] === void 0 && (A[j] = k[j]);
    return { $$typeof: s, type: T, key: B, ref: K, props: A, _owner: E.current };
  }
  return Nv.Fragment = d, Nv.jsx = y, Nv.jsxs = y, Nv;
}
var Lv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vT;
function lN() {
  return vT || (vT = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Qr, s = Symbol.for("react.element"), d = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), T = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), te = Symbol.iterator, fe = "@@iterator";
    function ye(N) {
      if (N === null || typeof N != "object")
        return null;
      var ae = te && N[te] || N[fe];
      return typeof ae == "function" ? ae : null;
    }
    var Ue = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function oe(N) {
      {
        for (var ae = arguments.length, we = new Array(ae > 1 ? ae - 1 : 0), Fe = 1; Fe < ae; Fe++)
          we[Fe - 1] = arguments[Fe];
        se("error", N, we);
      }
    }
    function se(N, ae, we) {
      {
        var Fe = Ue.ReactDebugCurrentFrame, St = Fe.getStackAddendum();
        St !== "" && (ae += "%s", we = we.concat([St]));
        var Nt = we.map(function(Et) {
          return String(Et);
        });
        Nt.unshift("Warning: " + ae), Function.prototype.apply.call(console[N], console, Nt);
      }
    }
    var Se = !1, G = !1, Pe = !1, je = !1, gt = !1, pt;
    pt = Symbol.for("react.module.reference");
    function ot(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === m || N === S || gt || N === E || N === D || N === j || je || N === K || Se || G || Pe || typeof N == "object" && N !== null && (N.$$typeof === B || N.$$typeof === A || N.$$typeof === y || N.$$typeof === T || N.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === pt || N.getModuleId !== void 0));
    }
    function be(N, ae, we) {
      var Fe = N.displayName;
      if (Fe)
        return Fe;
      var St = ae.displayName || ae.name || "";
      return St !== "" ? we + "(" + St + ")" : we;
    }
    function vt(N) {
      return N.displayName || "Context";
    }
    function ge(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case m:
          return "Fragment";
        case d:
          return "Portal";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case D:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case T:
            var ae = N;
            return vt(ae) + ".Consumer";
          case y:
            var we = N;
            return vt(we._context) + ".Provider";
          case k:
            return be(N, N.render, "ForwardRef");
          case A:
            var Fe = N.displayName || null;
            return Fe !== null ? Fe : ge(N.type) || "Memo";
          case B: {
            var St = N, Nt = St._payload, Et = St._init;
            try {
              return ge(Et(Nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ve = Object.assign, xt = 0, Xe, Ee, ue, ke, R, F, ne;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function pe() {
      {
        if (xt === 0) {
          Xe = console.log, Ee = console.info, ue = console.warn, ke = console.error, R = console.group, F = console.groupCollapsed, ne = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        xt++;
      }
    }
    function Le() {
      {
        if (xt--, xt === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ve({}, N, {
              value: Xe
            }),
            info: Ve({}, N, {
              value: Ee
            }),
            warn: Ve({}, N, {
              value: ue
            }),
            error: Ve({}, N, {
              value: ke
            }),
            group: Ve({}, N, {
              value: R
            }),
            groupCollapsed: Ve({}, N, {
              value: F
            }),
            groupEnd: Ve({}, N, {
              value: ne
            })
          });
        }
        xt < 0 && oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = Ue.ReactCurrentDispatcher, De;
    function Me(N, ae, we) {
      {
        if (De === void 0)
          try {
            throw Error();
          } catch (St) {
            var Fe = St.stack.trim().match(/\n( *(at )?)/);
            De = Fe && Fe[1] || "";
          }
        return `
` + De + N;
      }
    }
    var Ge = !1, dt;
    {
      var Yt = typeof WeakMap == "function" ? WeakMap : Map;
      dt = new Yt();
    }
    function Ce(N, ae) {
      if (!N || Ge)
        return "";
      {
        var we = dt.get(N);
        if (we !== void 0)
          return we;
      }
      var Fe;
      Ge = !0;
      var St = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Nt;
      Nt = Te.current, Te.current = null, pe();
      try {
        if (ae) {
          var Et = function() {
            throw Error();
          };
          if (Object.defineProperty(Et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Et, []);
            } catch (jt) {
              Fe = jt;
            }
            Reflect.construct(N, [], Et);
          } else {
            try {
              Et.call();
            } catch (jt) {
              Fe = jt;
            }
            N.call(Et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (jt) {
            Fe = jt;
          }
          N();
        }
      } catch (jt) {
        if (jt && Fe && typeof jt.stack == "string") {
          for (var tt = jt.stack.split(`
`), Fn = Fe.stack.split(`
`), fn = tt.length - 1, dn = Fn.length - 1; fn >= 1 && dn >= 0 && tt[fn] !== Fn[dn]; )
            dn--;
          for (; fn >= 1 && dn >= 0; fn--, dn--)
            if (tt[fn] !== Fn[dn]) {
              if (fn !== 1 || dn !== 1)
                do
                  if (fn--, dn--, dn < 0 || tt[fn] !== Fn[dn]) {
                    var lr = `
` + tt[fn].replace(" at new ", " at ");
                    return N.displayName && lr.includes("<anonymous>") && (lr = lr.replace("<anonymous>", N.displayName)), typeof N == "function" && dt.set(N, lr), lr;
                  }
                while (fn >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        Ge = !1, Te.current = Nt, Le(), Error.prepareStackTrace = St;
      }
      var bi = N ? N.displayName || N.name : "", io = bi ? Me(bi) : "";
      return typeof N == "function" && dt.set(N, io), io;
    }
    function Pt(N, ae, we) {
      return Ce(N, !1);
    }
    function Cn(N) {
      var ae = N.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function On(N, ae, we) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return Ce(N, Cn(N));
      if (typeof N == "string")
        return Me(N);
      switch (N) {
        case D:
          return Me("Suspense");
        case j:
          return Me("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case k:
            return Pt(N.render);
          case A:
            return On(N.type, ae, we);
          case B: {
            var Fe = N, St = Fe._payload, Nt = Fe._init;
            try {
              return On(Nt(St), ae, we);
            } catch {
            }
          }
        }
      return "";
    }
    var In = Object.prototype.hasOwnProperty, An = {}, Gr = Ue.ReactDebugCurrentFrame;
    function qr(N) {
      if (N) {
        var ae = N._owner, we = On(N.type, N._source, ae ? ae.type : null);
        Gr.setExtraStackFrame(we);
      } else
        Gr.setExtraStackFrame(null);
    }
    function Xn(N, ae, we, Fe, St) {
      {
        var Nt = Function.call.bind(In);
        for (var Et in N)
          if (Nt(N, Et)) {
            var tt = void 0;
            try {
              if (typeof N[Et] != "function") {
                var Fn = Error((Fe || "React class") + ": " + we + " type `" + Et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fn.name = "Invariant Violation", Fn;
              }
              tt = N[Et](ae, Et, Fe, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              tt = fn;
            }
            tt && !(tt instanceof Error) && (qr(St), oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", we, Et, typeof tt), qr(null)), tt instanceof Error && !(tt.message in An) && (An[tt.message] = !0, qr(St), oe("Failed %s type: %s", we, tt.message), qr(null));
          }
      }
    }
    var Sr = Array.isArray;
    function Kr(N) {
      return Sr(N);
    }
    function Er(N) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, we = ae && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return we;
      }
    }
    function ya(N) {
      try {
        return ur(N), !1;
      } catch {
        return !0;
      }
    }
    function ur(N) {
      return "" + N;
    }
    function Xr(N) {
      if (ya(N))
        return oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(N)), ur(N);
    }
    var bn = Ue.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gi, ga, xe;
    xe = {};
    function Ze(N) {
      if (In.call(N, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Tt(N) {
      if (In.call(N, "key")) {
        var ae = Object.getOwnPropertyDescriptor(N, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Wt(N, ae) {
      if (typeof N.ref == "string" && bn.current && ae && bn.current.stateNode !== ae) {
        var we = ge(bn.current.type);
        xe[we] || (oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ge(bn.current.type), N.ref), xe[we] = !0);
      }
    }
    function Gt(N, ae) {
      {
        var we = function() {
          gi || (gi = !0, oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        we.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function zn(N, ae) {
      {
        var we = function() {
          ga || (ga = !0, oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        we.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var xn = function(N, ae, we, Fe, St, Nt, Et) {
      var tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: N,
        key: ae,
        ref: we,
        props: Et,
        // Record the component responsible for creating this element.
        _owner: Nt
      };
      return tt._store = {}, Object.defineProperty(tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: St
      }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
    };
    function Cr(N, ae, we, Fe, St) {
      {
        var Nt, Et = {}, tt = null, Fn = null;
        we !== void 0 && (Xr(we), tt = "" + we), Tt(ae) && (Xr(ae.key), tt = "" + ae.key), Ze(ae) && (Fn = ae.ref, Wt(ae, St));
        for (Nt in ae)
          In.call(ae, Nt) && !Mr.hasOwnProperty(Nt) && (Et[Nt] = ae[Nt]);
        if (N && N.defaultProps) {
          var fn = N.defaultProps;
          for (Nt in fn)
            Et[Nt] === void 0 && (Et[Nt] = fn[Nt]);
        }
        if (tt || Fn) {
          var dn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          tt && Gt(Et, dn), Fn && zn(Et, dn);
        }
        return xn(N, tt, Fn, St, Fe, bn.current, Et);
      }
    }
    var en = Ue.ReactCurrentOwner, Nr = Ue.ReactDebugCurrentFrame;
    function qt(N) {
      if (N) {
        var ae = N._owner, we = On(N.type, N._source, ae ? ae.type : null);
        Nr.setExtraStackFrame(we);
      } else
        Nr.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function ai(N) {
      return typeof N == "object" && N !== null && N.$$typeof === s;
    }
    function Ua() {
      {
        if (en.current) {
          var N = ge(en.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Su(N) {
      {
        if (N !== void 0) {
          var ae = N.fileName.replace(/^.*[\\\/]/, ""), we = N.lineNumber;
          return `

Check your code at ` + ae + ":" + we + ".";
        }
        return "";
      }
    }
    var dl = {};
    function ao(N) {
      {
        var ae = Ua();
        if (!ae) {
          var we = typeof N == "string" ? N : N.displayName || N.name;
          we && (ae = `

Check the top-level render call using <` + we + ">.");
        }
        return ae;
      }
    }
    function Hi(N, ae) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var we = ao(ae);
        if (dl[we])
          return;
        dl[we] = !0;
        var Fe = "";
        N && N._owner && N._owner !== en.current && (Fe = " It was passed a child from " + ge(N._owner.type) + "."), qt(N), oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Fe), qt(null);
      }
    }
    function Eu(N, ae) {
      {
        if (typeof N != "object")
          return;
        if (Kr(N))
          for (var we = 0; we < N.length; we++) {
            var Fe = N[we];
            ai(Fe) && Hi(Fe, ae);
          }
        else if (ai(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var St = ye(N);
          if (typeof St == "function" && St !== N.entries)
            for (var Nt = St.call(N), Et; !(Et = Nt.next()).done; )
              ai(Et.value) && Hi(Et.value, ae);
        }
      }
    }
    function Sa(N) {
      {
        var ae = N.type;
        if (ae == null || typeof ae == "string")
          return;
        var we;
        if (typeof ae == "function")
          we = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === A))
          we = ae.propTypes;
        else
          return;
        if (we) {
          var Fe = ge(ae);
          Xn(we, N.props, "prop", Fe, N);
        } else if (ae.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var St = ge(ae);
          oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", St || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(N) {
      {
        for (var ae = Object.keys(N.props), we = 0; we < ae.length; we++) {
          var Fe = ae[we];
          if (Fe !== "children" && Fe !== "key") {
            qt(N), oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), qt(null);
            break;
          }
        }
        N.ref !== null && (qt(N), oe("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    function Ea(N, ae, we, Fe, St, Nt) {
      {
        var Et = ot(N);
        if (!Et) {
          var tt = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fn = Su(St);
          Fn ? tt += Fn : tt += Ua();
          var fn;
          N === null ? fn = "null" : Kr(N) ? fn = "array" : N !== void 0 && N.$$typeof === s ? (fn = "<" + (ge(N.type) || "Unknown") + " />", tt = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof N, oe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, tt);
        }
        var dn = Cr(N, ae, we, St, Nt);
        if (dn == null)
          return dn;
        if (Et) {
          var lr = ae.children;
          if (lr !== void 0)
            if (Fe)
              if (Kr(lr)) {
                for (var bi = 0; bi < lr.length; bi++)
                  Eu(lr[bi], N);
                Object.freeze && Object.freeze(lr);
              } else
                oe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Eu(lr, N);
        }
        return N === m ? Si(dn) : Sa(dn), dn;
      }
    }
    function Ei(N, ae, we) {
      return Ea(N, ae, we, !0);
    }
    function Lr(N, ae, we) {
      return Ea(N, ae, we, !1);
    }
    var Ca = Lr, Ci = Ei;
    Lv.Fragment = m, Lv.jsx = Ca, Lv.jsxs = Ci;
  }()), Lv;
}
(function(u) {
  process.env.NODE_ENV === "production" ? u.exports = uN() : u.exports = lN();
})(tN);
var yu = {}, hT = {
  get exports() {
    return yu;
  },
  set exports(u) {
    yu = u;
  }
}, By = {}, oN = {
  get exports() {
    return By;
  },
  set exports(u) {
    By = u;
  }
}, an = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mT;
function sN() {
  if (mT)
    return an;
  mT = 1;
  var u = typeof Symbol == "function" && Symbol.for, s = u ? Symbol.for("react.element") : 60103, d = u ? Symbol.for("react.portal") : 60106, m = u ? Symbol.for("react.fragment") : 60107, E = u ? Symbol.for("react.strict_mode") : 60108, S = u ? Symbol.for("react.profiler") : 60114, y = u ? Symbol.for("react.provider") : 60109, T = u ? Symbol.for("react.context") : 60110, k = u ? Symbol.for("react.async_mode") : 60111, D = u ? Symbol.for("react.concurrent_mode") : 60111, j = u ? Symbol.for("react.forward_ref") : 60112, A = u ? Symbol.for("react.suspense") : 60113, B = u ? Symbol.for("react.suspense_list") : 60120, K = u ? Symbol.for("react.memo") : 60115, te = u ? Symbol.for("react.lazy") : 60116, fe = u ? Symbol.for("react.block") : 60121, ye = u ? Symbol.for("react.fundamental") : 60117, Ue = u ? Symbol.for("react.responder") : 60118, oe = u ? Symbol.for("react.scope") : 60119;
  function se(G) {
    if (typeof G == "object" && G !== null) {
      var Pe = G.$$typeof;
      switch (Pe) {
        case s:
          switch (G = G.type, G) {
            case k:
            case D:
            case m:
            case S:
            case E:
            case A:
              return G;
            default:
              switch (G = G && G.$$typeof, G) {
                case T:
                case j:
                case te:
                case K:
                case y:
                  return G;
                default:
                  return Pe;
              }
          }
        case d:
          return Pe;
      }
    }
  }
  function Se(G) {
    return se(G) === D;
  }
  return an.AsyncMode = k, an.ConcurrentMode = D, an.ContextConsumer = T, an.ContextProvider = y, an.Element = s, an.ForwardRef = j, an.Fragment = m, an.Lazy = te, an.Memo = K, an.Portal = d, an.Profiler = S, an.StrictMode = E, an.Suspense = A, an.isAsyncMode = function(G) {
    return Se(G) || se(G) === k;
  }, an.isConcurrentMode = Se, an.isContextConsumer = function(G) {
    return se(G) === T;
  }, an.isContextProvider = function(G) {
    return se(G) === y;
  }, an.isElement = function(G) {
    return typeof G == "object" && G !== null && G.$$typeof === s;
  }, an.isForwardRef = function(G) {
    return se(G) === j;
  }, an.isFragment = function(G) {
    return se(G) === m;
  }, an.isLazy = function(G) {
    return se(G) === te;
  }, an.isMemo = function(G) {
    return se(G) === K;
  }, an.isPortal = function(G) {
    return se(G) === d;
  }, an.isProfiler = function(G) {
    return se(G) === S;
  }, an.isStrictMode = function(G) {
    return se(G) === E;
  }, an.isSuspense = function(G) {
    return se(G) === A;
  }, an.isValidElementType = function(G) {
    return typeof G == "string" || typeof G == "function" || G === m || G === D || G === S || G === E || G === A || G === B || typeof G == "object" && G !== null && (G.$$typeof === te || G.$$typeof === K || G.$$typeof === y || G.$$typeof === T || G.$$typeof === j || G.$$typeof === ye || G.$$typeof === Ue || G.$$typeof === oe || G.$$typeof === fe);
  }, an.typeOf = se, an;
}
var un = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yT;
function cN() {
  return yT || (yT = 1, process.env.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, s = u ? Symbol.for("react.element") : 60103, d = u ? Symbol.for("react.portal") : 60106, m = u ? Symbol.for("react.fragment") : 60107, E = u ? Symbol.for("react.strict_mode") : 60108, S = u ? Symbol.for("react.profiler") : 60114, y = u ? Symbol.for("react.provider") : 60109, T = u ? Symbol.for("react.context") : 60110, k = u ? Symbol.for("react.async_mode") : 60111, D = u ? Symbol.for("react.concurrent_mode") : 60111, j = u ? Symbol.for("react.forward_ref") : 60112, A = u ? Symbol.for("react.suspense") : 60113, B = u ? Symbol.for("react.suspense_list") : 60120, K = u ? Symbol.for("react.memo") : 60115, te = u ? Symbol.for("react.lazy") : 60116, fe = u ? Symbol.for("react.block") : 60121, ye = u ? Symbol.for("react.fundamental") : 60117, Ue = u ? Symbol.for("react.responder") : 60118, oe = u ? Symbol.for("react.scope") : 60119;
    function se(Ce) {
      return typeof Ce == "string" || typeof Ce == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Ce === m || Ce === D || Ce === S || Ce === E || Ce === A || Ce === B || typeof Ce == "object" && Ce !== null && (Ce.$$typeof === te || Ce.$$typeof === K || Ce.$$typeof === y || Ce.$$typeof === T || Ce.$$typeof === j || Ce.$$typeof === ye || Ce.$$typeof === Ue || Ce.$$typeof === oe || Ce.$$typeof === fe);
    }
    function Se(Ce) {
      if (typeof Ce == "object" && Ce !== null) {
        var Pt = Ce.$$typeof;
        switch (Pt) {
          case s:
            var Cn = Ce.type;
            switch (Cn) {
              case k:
              case D:
              case m:
              case S:
              case E:
              case A:
                return Cn;
              default:
                var On = Cn && Cn.$$typeof;
                switch (On) {
                  case T:
                  case j:
                  case te:
                  case K:
                  case y:
                    return On;
                  default:
                    return Pt;
                }
            }
          case d:
            return Pt;
        }
      }
    }
    var G = k, Pe = D, je = T, gt = y, pt = s, ot = j, be = m, vt = te, ge = K, Ve = d, xt = S, Xe = E, Ee = A, ue = !1;
    function ke(Ce) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(Ce) || Se(Ce) === k;
    }
    function R(Ce) {
      return Se(Ce) === D;
    }
    function F(Ce) {
      return Se(Ce) === T;
    }
    function ne(Ce) {
      return Se(Ce) === y;
    }
    function ve(Ce) {
      return typeof Ce == "object" && Ce !== null && Ce.$$typeof === s;
    }
    function pe(Ce) {
      return Se(Ce) === j;
    }
    function Le(Ce) {
      return Se(Ce) === m;
    }
    function Te(Ce) {
      return Se(Ce) === te;
    }
    function De(Ce) {
      return Se(Ce) === K;
    }
    function Me(Ce) {
      return Se(Ce) === d;
    }
    function Ge(Ce) {
      return Se(Ce) === S;
    }
    function dt(Ce) {
      return Se(Ce) === E;
    }
    function Yt(Ce) {
      return Se(Ce) === A;
    }
    un.AsyncMode = G, un.ConcurrentMode = Pe, un.ContextConsumer = je, un.ContextProvider = gt, un.Element = pt, un.ForwardRef = ot, un.Fragment = be, un.Lazy = vt, un.Memo = ge, un.Portal = Ve, un.Profiler = xt, un.StrictMode = Xe, un.Suspense = Ee, un.isAsyncMode = ke, un.isConcurrentMode = R, un.isContextConsumer = F, un.isContextProvider = ne, un.isElement = ve, un.isForwardRef = pe, un.isFragment = Le, un.isLazy = Te, un.isMemo = De, un.isPortal = Me, un.isProfiler = Ge, un.isStrictMode = dt, un.isSuspense = Yt, un.isValidElementType = se, un.typeOf = Se;
  }()), un;
}
var gT;
function fw() {
  return gT || (gT = 1, function(u) {
    process.env.NODE_ENV === "production" ? u.exports = sN() : u.exports = cN();
  }(oN)), By;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _1, ST;
function fN() {
  if (ST)
    return _1;
  ST = 1;
  var u = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function m(S) {
    if (S == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(S);
  }
  function E() {
    try {
      if (!Object.assign)
        return !1;
      var S = new String("abc");
      if (S[5] = "de", Object.getOwnPropertyNames(S)[0] === "5")
        return !1;
      for (var y = {}, T = 0; T < 10; T++)
        y["_" + String.fromCharCode(T)] = T;
      var k = Object.getOwnPropertyNames(y).map(function(j) {
        return y[j];
      });
      if (k.join("") !== "0123456789")
        return !1;
      var D = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(j) {
        D[j] = j;
      }), Object.keys(Object.assign({}, D)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _1 = E() ? Object.assign : function(S, y) {
    for (var T, k = m(S), D, j = 1; j < arguments.length; j++) {
      T = Object(arguments[j]);
      for (var A in T)
        s.call(T, A) && (k[A] = T[A]);
      if (u) {
        D = u(T);
        for (var B = 0; B < D.length; B++)
          d.call(T, D[B]) && (k[D[B]] = T[D[B]]);
      }
    }
    return k;
  }, _1;
}
var k1, ET;
function SE() {
  if (ET)
    return k1;
  ET = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return k1 = u, k1;
}
var O1, CT;
function dw() {
  return CT || (CT = 1, O1 = Function.call.bind(Object.prototype.hasOwnProperty)), O1;
}
var D1, bT;
function dN() {
  if (bT)
    return D1;
  bT = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = SE(), d = {}, m = dw();
    u = function(S) {
      var y = "Warning: " + S;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function E(S, y, T, k, D) {
    if (process.env.NODE_ENV !== "production") {
      for (var j in S)
        if (m(S, j)) {
          var A;
          try {
            if (typeof S[j] != "function") {
              var B = Error(
                (k || "React class") + ": " + T + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw B.name = "Invariant Violation", B;
            }
            A = S[j](y, j, k, T, null, s);
          } catch (te) {
            A = te;
          }
          if (A && !(A instanceof Error) && u(
            (k || "React class") + ": type specification of " + T + " `" + j + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof A + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), A instanceof Error && !(A.message in d)) {
            d[A.message] = !0;
            var K = D ? D() : "";
            u(
              "Failed " + T + " type: " + A.message + (K ?? "")
            );
          }
        }
    }
  }
  return E.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, D1 = E, D1;
}
var M1, xT;
function pN() {
  if (xT)
    return M1;
  xT = 1;
  var u = fw(), s = fN(), d = SE(), m = dw(), E = dN(), S = function() {
  };
  process.env.NODE_ENV !== "production" && (S = function(T) {
    var k = "Warning: " + T;
    typeof console < "u" && console.error(k);
    try {
      throw new Error(k);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return M1 = function(T, k) {
    var D = typeof Symbol == "function" && Symbol.iterator, j = "@@iterator";
    function A(R) {
      var F = R && (D && R[D] || R[j]);
      if (typeof F == "function")
        return F;
    }
    var B = "<<anonymous>>", K = {
      array: Ue("array"),
      bigint: Ue("bigint"),
      bool: Ue("boolean"),
      func: Ue("function"),
      number: Ue("number"),
      object: Ue("object"),
      string: Ue("string"),
      symbol: Ue("symbol"),
      any: oe(),
      arrayOf: se,
      element: Se(),
      elementType: G(),
      instanceOf: Pe,
      node: ot(),
      objectOf: gt,
      oneOf: je,
      oneOfType: pt,
      shape: vt,
      exact: ge
    };
    function te(R, F) {
      return R === F ? R !== 0 || 1 / R === 1 / F : R !== R && F !== F;
    }
    function fe(R, F) {
      this.message = R, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    fe.prototype = Error.prototype;
    function ye(R) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, ne = 0;
      function ve(Le, Te, De, Me, Ge, dt, Yt) {
        if (Me = Me || B, dt = dt || De, Yt !== d) {
          if (k) {
            var Ce = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Ce.name = "Invariant Violation", Ce;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pt = Me + ":" + De;
            !F[Pt] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (S(
              "You are manually calling a React.PropTypes validation function for the `" + dt + "` prop on `" + Me + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[Pt] = !0, ne++);
          }
        }
        return Te[De] == null ? Le ? Te[De] === null ? new fe("The " + Ge + " `" + dt + "` is marked as required " + ("in `" + Me + "`, but its value is `null`.")) : new fe("The " + Ge + " `" + dt + "` is marked as required in " + ("`" + Me + "`, but its value is `undefined`.")) : null : R(Te, De, Me, Ge, dt);
      }
      var pe = ve.bind(null, !1);
      return pe.isRequired = ve.bind(null, !0), pe;
    }
    function Ue(R) {
      function F(ne, ve, pe, Le, Te, De) {
        var Me = ne[ve], Ge = Xe(Me);
        if (Ge !== R) {
          var dt = Ee(Me);
          return new fe(
            "Invalid " + Le + " `" + Te + "` of type " + ("`" + dt + "` supplied to `" + pe + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return ye(F);
    }
    function oe() {
      return ye(y);
    }
    function se(R) {
      function F(ne, ve, pe, Le, Te) {
        if (typeof R != "function")
          return new fe("Property `" + Te + "` of component `" + pe + "` has invalid PropType notation inside arrayOf.");
        var De = ne[ve];
        if (!Array.isArray(De)) {
          var Me = Xe(De);
          return new fe("Invalid " + Le + " `" + Te + "` of type " + ("`" + Me + "` supplied to `" + pe + "`, expected an array."));
        }
        for (var Ge = 0; Ge < De.length; Ge++) {
          var dt = R(De, Ge, pe, Le, Te + "[" + Ge + "]", d);
          if (dt instanceof Error)
            return dt;
        }
        return null;
      }
      return ye(F);
    }
    function Se() {
      function R(F, ne, ve, pe, Le) {
        var Te = F[ne];
        if (!T(Te)) {
          var De = Xe(Te);
          return new fe("Invalid " + pe + " `" + Le + "` of type " + ("`" + De + "` supplied to `" + ve + "`, expected a single ReactElement."));
        }
        return null;
      }
      return ye(R);
    }
    function G() {
      function R(F, ne, ve, pe, Le) {
        var Te = F[ne];
        if (!u.isValidElementType(Te)) {
          var De = Xe(Te);
          return new fe("Invalid " + pe + " `" + Le + "` of type " + ("`" + De + "` supplied to `" + ve + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return ye(R);
    }
    function Pe(R) {
      function F(ne, ve, pe, Le, Te) {
        if (!(ne[ve] instanceof R)) {
          var De = R.name || B, Me = ke(ne[ve]);
          return new fe("Invalid " + Le + " `" + Te + "` of type " + ("`" + Me + "` supplied to `" + pe + "`, expected ") + ("instance of `" + De + "`."));
        }
        return null;
      }
      return ye(F);
    }
    function je(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? S(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : S("Invalid argument supplied to oneOf, expected an array.")), y;
      function F(ne, ve, pe, Le, Te) {
        for (var De = ne[ve], Me = 0; Me < R.length; Me++)
          if (te(De, R[Me]))
            return null;
        var Ge = JSON.stringify(R, function(Yt, Ce) {
          var Pt = Ee(Ce);
          return Pt === "symbol" ? String(Ce) : Ce;
        });
        return new fe("Invalid " + Le + " `" + Te + "` of value `" + String(De) + "` " + ("supplied to `" + pe + "`, expected one of " + Ge + "."));
      }
      return ye(F);
    }
    function gt(R) {
      function F(ne, ve, pe, Le, Te) {
        if (typeof R != "function")
          return new fe("Property `" + Te + "` of component `" + pe + "` has invalid PropType notation inside objectOf.");
        var De = ne[ve], Me = Xe(De);
        if (Me !== "object")
          return new fe("Invalid " + Le + " `" + Te + "` of type " + ("`" + Me + "` supplied to `" + pe + "`, expected an object."));
        for (var Ge in De)
          if (m(De, Ge)) {
            var dt = R(De, Ge, pe, Le, Te + "." + Ge, d);
            if (dt instanceof Error)
              return dt;
          }
        return null;
      }
      return ye(F);
    }
    function pt(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && S("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var F = 0; F < R.length; F++) {
        var ne = R[F];
        if (typeof ne != "function")
          return S(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(ne) + " at index " + F + "."
          ), y;
      }
      function ve(pe, Le, Te, De, Me) {
        for (var Ge = [], dt = 0; dt < R.length; dt++) {
          var Yt = R[dt], Ce = Yt(pe, Le, Te, De, Me, d);
          if (Ce == null)
            return null;
          Ce.data && m(Ce.data, "expectedType") && Ge.push(Ce.data.expectedType);
        }
        var Pt = Ge.length > 0 ? ", expected one of type [" + Ge.join(", ") + "]" : "";
        return new fe("Invalid " + De + " `" + Me + "` supplied to " + ("`" + Te + "`" + Pt + "."));
      }
      return ye(ve);
    }
    function ot() {
      function R(F, ne, ve, pe, Le) {
        return Ve(F[ne]) ? null : new fe("Invalid " + pe + " `" + Le + "` supplied to " + ("`" + ve + "`, expected a ReactNode."));
      }
      return ye(R);
    }
    function be(R, F, ne, ve, pe) {
      return new fe(
        (R || "React class") + ": " + F + " type `" + ne + "." + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + pe + "`."
      );
    }
    function vt(R) {
      function F(ne, ve, pe, Le, Te) {
        var De = ne[ve], Me = Xe(De);
        if (Me !== "object")
          return new fe("Invalid " + Le + " `" + Te + "` of type `" + Me + "` " + ("supplied to `" + pe + "`, expected `object`."));
        for (var Ge in R) {
          var dt = R[Ge];
          if (typeof dt != "function")
            return be(pe, Le, Te, Ge, Ee(dt));
          var Yt = dt(De, Ge, pe, Le, Te + "." + Ge, d);
          if (Yt)
            return Yt;
        }
        return null;
      }
      return ye(F);
    }
    function ge(R) {
      function F(ne, ve, pe, Le, Te) {
        var De = ne[ve], Me = Xe(De);
        if (Me !== "object")
          return new fe("Invalid " + Le + " `" + Te + "` of type `" + Me + "` " + ("supplied to `" + pe + "`, expected `object`."));
        var Ge = s({}, ne[ve], R);
        for (var dt in Ge) {
          var Yt = R[dt];
          if (m(R, dt) && typeof Yt != "function")
            return be(pe, Le, Te, dt, Ee(Yt));
          if (!Yt)
            return new fe(
              "Invalid " + Le + " `" + Te + "` key `" + dt + "` supplied to `" + pe + "`.\nBad object: " + JSON.stringify(ne[ve], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var Ce = Yt(De, dt, pe, Le, Te + "." + dt, d);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return ye(F);
    }
    function Ve(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(Ve);
          if (R === null || T(R))
            return !0;
          var F = A(R);
          if (F) {
            var ne = F.call(R), ve;
            if (F !== R.entries) {
              for (; !(ve = ne.next()).done; )
                if (!Ve(ve.value))
                  return !1;
            } else
              for (; !(ve = ne.next()).done; ) {
                var pe = ve.value;
                if (pe && !Ve(pe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function xt(R, F) {
      return R === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function Xe(R) {
      var F = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : xt(F, R) ? "symbol" : F;
    }
    function Ee(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var F = Xe(R);
      if (F === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function ue(R) {
      var F = Ee(R);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function ke(R) {
      return !R.constructor || !R.constructor.name ? B : R.constructor.name;
    }
    return K.checkPropTypes = E, K.resetWarningCache = E.resetWarningCache, K.PropTypes = K, K;
  }, M1;
}
var N1, TT;
function vN() {
  if (TT)
    return N1;
  TT = 1;
  var u = SE();
  function s() {
  }
  function d() {
  }
  return d.resetWarningCache = s, N1 = function() {
    function m(y, T, k, D, j, A) {
      if (A !== u) {
        var B = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw B.name = "Invariant Violation", B;
      }
    }
    m.isRequired = m;
    function E() {
      return m;
    }
    var S = {
      array: m,
      bigint: m,
      bool: m,
      func: m,
      number: m,
      object: m,
      string: m,
      symbol: m,
      any: m,
      arrayOf: E,
      element: m,
      elementType: m,
      instanceOf: E,
      node: m,
      objectOf: E,
      oneOf: E,
      oneOfType: E,
      shape: E,
      exact: E,
      checkPropTypes: d,
      resetWarningCache: s
    };
    return S.PropTypes = S, S;
  }, N1;
}
if (process.env.NODE_ENV !== "production") {
  var hN = fw(), mN = !0;
  hT.exports = pN()(hN.isElement, mN);
} else
  hT.exports = vN()();
var G1 = {}, yN = {
  get exports() {
    return G1;
  },
  set exports(u) {
    G1 = u;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(u) {
  (function() {
    var s = {}.hasOwnProperty;
    function d() {
      for (var m = [], E = 0; E < arguments.length; E++) {
        var S = arguments[E];
        if (S) {
          var y = typeof S;
          if (y === "string" || y === "number")
            m.push(S);
          else if (Array.isArray(S)) {
            if (S.length) {
              var T = d.apply(null, S);
              T && m.push(T);
            }
          } else if (y === "object") {
            if (S.toString !== Object.prototype.toString && !S.toString.toString().includes("[native code]")) {
              m.push(S.toString());
              continue;
            }
            for (var k in S)
              s.call(S, k) && S[k] && m.push(k);
          }
        }
      }
      return m.join(" ");
    }
    u.exports ? (d.default = d, u.exports = d) : window.classNames = d;
  })();
})(yN);
const bc = G1;
var gN = ["top", "left", "transform", "className", "children", "innerRef"];
function q1() {
  return q1 = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, q1.apply(this, arguments);
}
function SN(u, s) {
  if (u == null)
    return {};
  var d = {}, m = Object.keys(u), E, S;
  for (S = 0; S < m.length; S++)
    E = m[S], !(s.indexOf(E) >= 0) && (d[E] = u[E]);
  return d;
}
function Ky(u) {
  var s = u.top, d = s === void 0 ? 0 : s, m = u.left, E = m === void 0 ? 0 : m, S = u.transform, y = u.className, T = u.children, k = u.innerRef, D = SN(u, gN);
  return /* @__PURE__ */ ha.createElement("g", q1({
    ref: k,
    className: bc("visx-group", y),
    transform: S || "translate(" + E + ", " + d + ")"
  }, D), T);
}
Ky.propTypes = {
  top: yu.number,
  left: yu.number,
  transform: yu.string,
  className: yu.string,
  children: yu.node,
  innerRef: yu.oneOfType([yu.string, yu.func, yu.object])
};
function Vy(u, s) {
  return u == null || s == null ? NaN : u < s ? -1 : u > s ? 1 : u >= s ? 0 : NaN;
}
function EN(u, s) {
  return u == null || s == null ? NaN : s < u ? -1 : s > u ? 1 : s >= u ? 0 : NaN;
}
function pw(u) {
  let s, d, m;
  u.length !== 2 ? (s = Vy, d = (T, k) => Vy(u(T), k), m = (T, k) => u(T) - k) : (s = u === Vy || u === EN ? u : CN, d = u, m = u);
  function E(T, k, D = 0, j = T.length) {
    if (D < j) {
      if (s(k, k) !== 0)
        return j;
      do {
        const A = D + j >>> 1;
        d(T[A], k) < 0 ? D = A + 1 : j = A;
      } while (D < j);
    }
    return D;
  }
  function S(T, k, D = 0, j = T.length) {
    if (D < j) {
      if (s(k, k) !== 0)
        return j;
      do {
        const A = D + j >>> 1;
        d(T[A], k) <= 0 ? D = A + 1 : j = A;
      } while (D < j);
    }
    return D;
  }
  function y(T, k, D = 0, j = T.length) {
    const A = E(T, k, D, j - 1);
    return A > D && m(T[A - 1], k) > -m(T[A], k) ? A - 1 : A;
  }
  return { left: E, center: y, right: S };
}
function CN() {
  return 0;
}
function bN(u) {
  return u === null ? NaN : +u;
}
const xN = pw(Vy), TN = xN.right;
pw(bN).center;
const wN = TN;
var K1 = Math.sqrt(50), X1 = Math.sqrt(10), Z1 = Math.sqrt(2);
function RN(u, s, d) {
  var m, E = -1, S, y, T;
  if (s = +s, u = +u, d = +d, u === s && d > 0)
    return [u];
  if ((m = s < u) && (S = u, u = s, s = S), (T = vw(u, s, d)) === 0 || !isFinite(T))
    return [];
  if (T > 0) {
    let k = Math.round(u / T), D = Math.round(s / T);
    for (k * T < u && ++k, D * T > s && --D, y = new Array(S = D - k + 1); ++E < S; )
      y[E] = (k + E) * T;
  } else {
    T = -T;
    let k = Math.round(u * T), D = Math.round(s * T);
    for (k / T < u && ++k, D / T > s && --D, y = new Array(S = D - k + 1); ++E < S; )
      y[E] = (k + E) / T;
  }
  return m && y.reverse(), y;
}
function vw(u, s, d) {
  var m = (s - u) / Math.max(0, d), E = Math.floor(Math.log(m) / Math.LN10), S = m / Math.pow(10, E);
  return E >= 0 ? (S >= K1 ? 10 : S >= X1 ? 5 : S >= Z1 ? 2 : 1) * Math.pow(10, E) : -Math.pow(10, -E) / (S >= K1 ? 10 : S >= X1 ? 5 : S >= Z1 ? 2 : 1);
}
function _N(u, s, d) {
  var m = Math.abs(s - u) / Math.max(0, d), E = Math.pow(10, Math.floor(Math.log(m) / Math.LN10)), S = m / E;
  return S >= K1 ? E *= 10 : S >= X1 ? E *= 5 : S >= Z1 && (E *= 2), s < u ? -E : E;
}
function kN(u, s) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(u);
      break;
    default:
      this.range(s).domain(u);
      break;
  }
  return this;
}
function Sd(u, s, d) {
  u.prototype = s.prototype = d, d.constructor = u;
}
function Qv(u, s) {
  var d = Object.create(u.prototype);
  for (var m in s)
    d[m] = s[m];
  return d;
}
function ps() {
}
var xc = 0.7, yd = 1 / xc, hd = "\\s*([+-]?\\d+)\\s*", Vv = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ON = /^#([0-9a-f]{3,8})$/, DN = new RegExp(`^rgb\\(${hd},${hd},${hd}\\)$`), MN = new RegExp(`^rgb\\(${cl},${cl},${cl}\\)$`), NN = new RegExp(`^rgba\\(${hd},${hd},${hd},${Vv}\\)$`), LN = new RegExp(`^rgba\\(${cl},${cl},${cl},${Vv}\\)$`), AN = new RegExp(`^hsl\\(${Vv},${cl},${cl}\\)$`), zN = new RegExp(`^hsla\\(${Vv},${cl},${cl},${Vv}\\)$`), wT = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Sd(ps, Bv, {
  copy(u) {
    return Object.assign(new this.constructor(), this, u);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: RT,
  // Deprecated! Use color.formatHex.
  formatHex: RT,
  formatHex8: UN,
  formatHsl: PN,
  formatRgb: _T,
  toString: _T
});
function RT() {
  return this.rgb().formatHex();
}
function UN() {
  return this.rgb().formatHex8();
}
function PN() {
  return hw(this).formatHsl();
}
function _T() {
  return this.rgb().formatRgb();
}
function Bv(u) {
  var s, d;
  return u = (u + "").trim().toLowerCase(), (s = ON.exec(u)) ? (d = s[1].length, s = parseInt(s[1], 16), d === 6 ? kT(s) : d === 3 ? new Or(s >> 8 & 15 | s >> 4 & 240, s >> 4 & 15 | s & 240, (s & 15) << 4 | s & 15, 1) : d === 8 ? Ay(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, (s & 255) / 255) : d === 4 ? Ay(s >> 12 & 15 | s >> 8 & 240, s >> 8 & 15 | s >> 4 & 240, s >> 4 & 15 | s & 240, ((s & 15) << 4 | s & 15) / 255) : null) : (s = DN.exec(u)) ? new Or(s[1], s[2], s[3], 1) : (s = MN.exec(u)) ? new Or(s[1] * 255 / 100, s[2] * 255 / 100, s[3] * 255 / 100, 1) : (s = NN.exec(u)) ? Ay(s[1], s[2], s[3], s[4]) : (s = LN.exec(u)) ? Ay(s[1] * 255 / 100, s[2] * 255 / 100, s[3] * 255 / 100, s[4]) : (s = AN.exec(u)) ? MT(s[1], s[2] / 100, s[3] / 100, 1) : (s = zN.exec(u)) ? MT(s[1], s[2] / 100, s[3] / 100, s[4]) : wT.hasOwnProperty(u) ? kT(wT[u]) : u === "transparent" ? new Or(NaN, NaN, NaN, 0) : null;
}
function kT(u) {
  return new Or(u >> 16 & 255, u >> 8 & 255, u & 255, 1);
}
function Ay(u, s, d, m) {
  return m <= 0 && (u = s = d = NaN), new Or(u, s, d, m);
}
function EE(u) {
  return u instanceof ps || (u = Bv(u)), u ? (u = u.rgb(), new Or(u.r, u.g, u.b, u.opacity)) : new Or();
}
function J1(u, s, d, m) {
  return arguments.length === 1 ? EE(u) : new Or(u, s, d, m ?? 1);
}
function Or(u, s, d, m) {
  this.r = +u, this.g = +s, this.b = +d, this.opacity = +m;
}
Sd(Or, J1, Qv(ps, {
  brighter(u) {
    return u = u == null ? yd : Math.pow(yd, u), new Or(this.r * u, this.g * u, this.b * u, this.opacity);
  },
  darker(u) {
    return u = u == null ? xc : Math.pow(xc, u), new Or(this.r * u, this.g * u, this.b * u, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Or(Ec(this.r), Ec(this.g), Ec(this.b), Iy(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: OT,
  // Deprecated! Use color.formatHex.
  formatHex: OT,
  formatHex8: jN,
  formatRgb: DT,
  toString: DT
}));
function OT() {
  return `#${Sc(this.r)}${Sc(this.g)}${Sc(this.b)}`;
}
function jN() {
  return `#${Sc(this.r)}${Sc(this.g)}${Sc(this.b)}${Sc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function DT() {
  const u = Iy(this.opacity);
  return `${u === 1 ? "rgb(" : "rgba("}${Ec(this.r)}, ${Ec(this.g)}, ${Ec(this.b)}${u === 1 ? ")" : `, ${u})`}`;
}
function Iy(u) {
  return isNaN(u) ? 1 : Math.max(0, Math.min(1, u));
}
function Ec(u) {
  return Math.max(0, Math.min(255, Math.round(u) || 0));
}
function Sc(u) {
  return u = Ec(u), (u < 16 ? "0" : "") + u.toString(16);
}
function MT(u, s, d, m) {
  return m <= 0 ? u = s = d = NaN : d <= 0 || d >= 1 ? u = s = NaN : s <= 0 && (u = NaN), new gu(u, s, d, m);
}
function hw(u) {
  if (u instanceof gu)
    return new gu(u.h, u.s, u.l, u.opacity);
  if (u instanceof ps || (u = Bv(u)), !u)
    return new gu();
  if (u instanceof gu)
    return u;
  u = u.rgb();
  var s = u.r / 255, d = u.g / 255, m = u.b / 255, E = Math.min(s, d, m), S = Math.max(s, d, m), y = NaN, T = S - E, k = (S + E) / 2;
  return T ? (s === S ? y = (d - m) / T + (d < m) * 6 : d === S ? y = (m - s) / T + 2 : y = (s - d) / T + 4, T /= k < 0.5 ? S + E : 2 - S - E, y *= 60) : T = k > 0 && k < 1 ? 0 : y, new gu(y, T, k, u.opacity);
}
function eE(u, s, d, m) {
  return arguments.length === 1 ? hw(u) : new gu(u, s, d, m ?? 1);
}
function gu(u, s, d, m) {
  this.h = +u, this.s = +s, this.l = +d, this.opacity = +m;
}
Sd(gu, eE, Qv(ps, {
  brighter(u) {
    return u = u == null ? yd : Math.pow(yd, u), new gu(this.h, this.s, this.l * u, this.opacity);
  },
  darker(u) {
    return u = u == null ? xc : Math.pow(xc, u), new gu(this.h, this.s, this.l * u, this.opacity);
  },
  rgb() {
    var u = this.h % 360 + (this.h < 0) * 360, s = isNaN(u) || isNaN(this.s) ? 0 : this.s, d = this.l, m = d + (d < 0.5 ? d : 1 - d) * s, E = 2 * d - m;
    return new Or(
      L1(u >= 240 ? u - 240 : u + 120, E, m),
      L1(u, E, m),
      L1(u < 120 ? u + 240 : u - 120, E, m),
      this.opacity
    );
  },
  clamp() {
    return new gu(NT(this.h), zy(this.s), zy(this.l), Iy(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const u = Iy(this.opacity);
    return `${u === 1 ? "hsl(" : "hsla("}${NT(this.h)}, ${zy(this.s) * 100}%, ${zy(this.l) * 100}%${u === 1 ? ")" : `, ${u})`}`;
  }
}));
function NT(u) {
  return u = (u || 0) % 360, u < 0 ? u + 360 : u;
}
function zy(u) {
  return Math.max(0, Math.min(1, u || 0));
}
function L1(u, s, d) {
  return (u < 60 ? s + (d - s) * u / 60 : u < 180 ? d : u < 240 ? s + (d - s) * (240 - u) / 60 : s) * 255;
}
const mw = Math.PI / 180, yw = 180 / Math.PI, Yy = 18, gw = 0.96422, Sw = 1, Ew = 0.82521, Cw = 4 / 29, md = 6 / 29, bw = 3 * md * md, FN = md * md * md;
function xw(u) {
  if (u instanceof fl)
    return new fl(u.l, u.a, u.b, u.opacity);
  if (u instanceof ro)
    return Tw(u);
  u instanceof Or || (u = EE(u));
  var s = P1(u.r), d = P1(u.g), m = P1(u.b), E = A1((0.2225045 * s + 0.7168786 * d + 0.0606169 * m) / Sw), S, y;
  return s === d && d === m ? S = y = E : (S = A1((0.4360747 * s + 0.3850649 * d + 0.1430804 * m) / gw), y = A1((0.0139322 * s + 0.0971045 * d + 0.7141733 * m) / Ew)), new fl(116 * E - 16, 500 * (S - E), 200 * (E - y), u.opacity);
}
function tE(u, s, d, m) {
  return arguments.length === 1 ? xw(u) : new fl(u, s, d, m ?? 1);
}
function fl(u, s, d, m) {
  this.l = +u, this.a = +s, this.b = +d, this.opacity = +m;
}
Sd(fl, tE, Qv(ps, {
  brighter(u) {
    return new fl(this.l + Yy * (u ?? 1), this.a, this.b, this.opacity);
  },
  darker(u) {
    return new fl(this.l - Yy * (u ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var u = (this.l + 16) / 116, s = isNaN(this.a) ? u : u + this.a / 500, d = isNaN(this.b) ? u : u - this.b / 200;
    return s = gw * z1(s), u = Sw * z1(u), d = Ew * z1(d), new Or(
      U1(3.1338561 * s - 1.6168667 * u - 0.4906146 * d),
      U1(-0.9787684 * s + 1.9161415 * u + 0.033454 * d),
      U1(0.0719453 * s - 0.2289914 * u + 1.4052427 * d),
      this.opacity
    );
  }
}));
function A1(u) {
  return u > FN ? Math.pow(u, 1 / 3) : u / bw + Cw;
}
function z1(u) {
  return u > md ? u * u * u : bw * (u - Cw);
}
function U1(u) {
  return 255 * (u <= 31308e-7 ? 12.92 * u : 1.055 * Math.pow(u, 1 / 2.4) - 0.055);
}
function P1(u) {
  return (u /= 255) <= 0.04045 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
}
function HN(u) {
  if (u instanceof ro)
    return new ro(u.h, u.c, u.l, u.opacity);
  if (u instanceof fl || (u = xw(u)), u.a === 0 && u.b === 0)
    return new ro(NaN, 0 < u.l && u.l < 100 ? 0 : NaN, u.l, u.opacity);
  var s = Math.atan2(u.b, u.a) * yw;
  return new ro(s < 0 ? s + 360 : s, Math.sqrt(u.a * u.a + u.b * u.b), u.l, u.opacity);
}
function nE(u, s, d, m) {
  return arguments.length === 1 ? HN(u) : new ro(u, s, d, m ?? 1);
}
function ro(u, s, d, m) {
  this.h = +u, this.c = +s, this.l = +d, this.opacity = +m;
}
function Tw(u) {
  if (isNaN(u.h))
    return new fl(u.l, 0, 0, u.opacity);
  var s = u.h * mw;
  return new fl(u.l, Math.cos(s) * u.c, Math.sin(s) * u.c, u.opacity);
}
Sd(ro, nE, Qv(ps, {
  brighter(u) {
    return new ro(this.h, this.c, this.l + Yy * (u ?? 1), this.opacity);
  },
  darker(u) {
    return new ro(this.h, this.c, this.l - Yy * (u ?? 1), this.opacity);
  },
  rgb() {
    return Tw(this).rgb();
  }
}));
var ww = -0.14861, CE = 1.78277, bE = -0.29227, Xy = -0.90649, Iv = 1.97294, LT = Iv * Xy, AT = Iv * CE, zT = CE * bE - Xy * ww;
function $N(u) {
  if (u instanceof Cc)
    return new Cc(u.h, u.s, u.l, u.opacity);
  u instanceof Or || (u = EE(u));
  var s = u.r / 255, d = u.g / 255, m = u.b / 255, E = (zT * m + LT * s - AT * d) / (zT + LT - AT), S = m - E, y = (Iv * (d - E) - bE * S) / Xy, T = Math.sqrt(y * y + S * S) / (Iv * E * (1 - E)), k = T ? Math.atan2(y, S) * yw - 120 : NaN;
  return new Cc(k < 0 ? k + 360 : k, T, E, u.opacity);
}
function rE(u, s, d, m) {
  return arguments.length === 1 ? $N(u) : new Cc(u, s, d, m ?? 1);
}
function Cc(u, s, d, m) {
  this.h = +u, this.s = +s, this.l = +d, this.opacity = +m;
}
Sd(Cc, rE, Qv(ps, {
  brighter(u) {
    return u = u == null ? yd : Math.pow(yd, u), new Cc(this.h, this.s, this.l * u, this.opacity);
  },
  darker(u) {
    return u = u == null ? xc : Math.pow(xc, u), new Cc(this.h, this.s, this.l * u, this.opacity);
  },
  rgb() {
    var u = isNaN(this.h) ? 0 : (this.h + 120) * mw, s = +this.l, d = isNaN(this.s) ? 0 : this.s * s * (1 - s), m = Math.cos(u), E = Math.sin(u);
    return new Or(
      255 * (s + d * (ww * m + CE * E)),
      255 * (s + d * (bE * m + Xy * E)),
      255 * (s + d * (Iv * m)),
      this.opacity
    );
  }
}));
const Zy = (u) => () => u;
function Rw(u, s) {
  return function(d) {
    return u + d * s;
  };
}
function VN(u, s, d) {
  return u = Math.pow(u, d), s = Math.pow(s, d) - u, d = 1 / d, function(m) {
    return Math.pow(u + m * s, d);
  };
}
function xE(u, s) {
  var d = s - u;
  return d ? Rw(u, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Zy(isNaN(u) ? s : u);
}
function BN(u) {
  return (u = +u) == 1 ? Dr : function(s, d) {
    return d - s ? VN(s, d, u) : Zy(isNaN(s) ? d : s);
  };
}
function Dr(u, s) {
  var d = s - u;
  return d ? Rw(u, d) : Zy(isNaN(u) ? s : u);
}
const aE = function u(s) {
  var d = BN(s);
  function m(E, S) {
    var y = d((E = J1(E)).r, (S = J1(S)).r), T = d(E.g, S.g), k = d(E.b, S.b), D = Dr(E.opacity, S.opacity);
    return function(j) {
      return E.r = y(j), E.g = T(j), E.b = k(j), E.opacity = D(j), E + "";
    };
  }
  return m.gamma = u, m;
}(1);
function IN(u, s) {
  s || (s = []);
  var d = u ? Math.min(s.length, u.length) : 0, m = s.slice(), E;
  return function(S) {
    for (E = 0; E < d; ++E)
      m[E] = u[E] * (1 - S) + s[E] * S;
    return m;
  };
}
function YN(u) {
  return ArrayBuffer.isView(u) && !(u instanceof DataView);
}
function WN(u, s) {
  var d = s ? s.length : 0, m = u ? Math.min(d, u.length) : 0, E = new Array(m), S = new Array(d), y;
  for (y = 0; y < m; ++y)
    E[y] = TE(u[y], s[y]);
  for (; y < d; ++y)
    S[y] = s[y];
  return function(T) {
    for (y = 0; y < m; ++y)
      S[y] = E[y](T);
    return S;
  };
}
function QN(u, s) {
  var d = new Date();
  return u = +u, s = +s, function(m) {
    return d.setTime(u * (1 - m) + s * m), d;
  };
}
function Wy(u, s) {
  return u = +u, s = +s, function(d) {
    return u * (1 - d) + s * d;
  };
}
function GN(u, s) {
  var d = {}, m = {}, E;
  (u === null || typeof u != "object") && (u = {}), (s === null || typeof s != "object") && (s = {});
  for (E in s)
    E in u ? d[E] = TE(u[E], s[E]) : m[E] = s[E];
  return function(S) {
    for (E in d)
      m[E] = d[E](S);
    return m;
  };
}
var iE = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, j1 = new RegExp(iE.source, "g");
function qN(u) {
  return function() {
    return u;
  };
}
function KN(u) {
  return function(s) {
    return u(s) + "";
  };
}
function XN(u, s) {
  var d = iE.lastIndex = j1.lastIndex = 0, m, E, S, y = -1, T = [], k = [];
  for (u = u + "", s = s + ""; (m = iE.exec(u)) && (E = j1.exec(s)); )
    (S = E.index) > d && (S = s.slice(d, S), T[y] ? T[y] += S : T[++y] = S), (m = m[0]) === (E = E[0]) ? T[y] ? T[y] += E : T[++y] = E : (T[++y] = null, k.push({ i: y, x: Wy(m, E) })), d = j1.lastIndex;
  return d < s.length && (S = s.slice(d), T[y] ? T[y] += S : T[++y] = S), T.length < 2 ? k[0] ? KN(k[0].x) : qN(s) : (s = k.length, function(D) {
    for (var j = 0, A; j < s; ++j)
      T[(A = k[j]).i] = A.x(D);
    return T.join("");
  });
}
function TE(u, s) {
  var d = typeof s, m;
  return s == null || d === "boolean" ? Zy(s) : (d === "number" ? Wy : d === "string" ? (m = Bv(s)) ? (s = m, aE) : XN : s instanceof Bv ? aE : s instanceof Date ? QN : YN(s) ? IN : Array.isArray(s) ? WN : typeof s.valueOf != "function" && typeof s.toString != "function" || isNaN(s) ? GN : Wy)(u, s);
}
function _w(u, s) {
  return u = +u, s = +s, function(d) {
    return Math.round(u * (1 - d) + s * d);
  };
}
function kw(u) {
  return function(s, d) {
    var m = u((s = eE(s)).h, (d = eE(d)).h), E = Dr(s.s, d.s), S = Dr(s.l, d.l), y = Dr(s.opacity, d.opacity);
    return function(T) {
      return s.h = m(T), s.s = E(T), s.l = S(T), s.opacity = y(T), s + "";
    };
  };
}
const ZN = kw(xE);
var JN = kw(Dr);
function eL(u, s) {
  var d = Dr((u = tE(u)).l, (s = tE(s)).l), m = Dr(u.a, s.a), E = Dr(u.b, s.b), S = Dr(u.opacity, s.opacity);
  return function(y) {
    return u.l = d(y), u.a = m(y), u.b = E(y), u.opacity = S(y), u + "";
  };
}
function Ow(u) {
  return function(s, d) {
    var m = u((s = nE(s)).h, (d = nE(d)).h), E = Dr(s.c, d.c), S = Dr(s.l, d.l), y = Dr(s.opacity, d.opacity);
    return function(T) {
      return s.h = m(T), s.c = E(T), s.l = S(T), s.opacity = y(T), s + "";
    };
  };
}
const tL = Ow(xE);
var nL = Ow(Dr);
function Dw(u) {
  return function s(d) {
    d = +d;
    function m(E, S) {
      var y = u((E = rE(E)).h, (S = rE(S)).h), T = Dr(E.s, S.s), k = Dr(E.l, S.l), D = Dr(E.opacity, S.opacity);
      return function(j) {
        return E.h = y(j), E.s = T(j), E.l = k(Math.pow(j, d)), E.opacity = D(j), E + "";
      };
    }
    return m.gamma = s, m;
  }(1);
}
const rL = Dw(xE);
var aL = Dw(Dr);
function iL(u) {
  return function() {
    return u;
  };
}
function uL(u) {
  return +u;
}
var UT = [0, 1];
function vd(u) {
  return u;
}
function uE(u, s) {
  return (s -= u = +u) ? function(d) {
    return (d - u) / s;
  } : iL(isNaN(s) ? NaN : 0.5);
}
function lL(u, s) {
  var d;
  return u > s && (d = u, u = s, s = d), function(m) {
    return Math.max(u, Math.min(s, m));
  };
}
function oL(u, s, d) {
  var m = u[0], E = u[1], S = s[0], y = s[1];
  return E < m ? (m = uE(E, m), S = d(y, S)) : (m = uE(m, E), S = d(S, y)), function(T) {
    return S(m(T));
  };
}
function sL(u, s, d) {
  var m = Math.min(u.length, s.length) - 1, E = new Array(m), S = new Array(m), y = -1;
  for (u[m] < u[0] && (u = u.slice().reverse(), s = s.slice().reverse()); ++y < m; )
    E[y] = uE(u[y], u[y + 1]), S[y] = d(s[y], s[y + 1]);
  return function(T) {
    var k = wN(u, T, 1, m) - 1;
    return S[k](E[k](T));
  };
}
function cL(u, s) {
  return s.domain(u.domain()).range(u.range()).interpolate(u.interpolate()).clamp(u.clamp()).unknown(u.unknown());
}
function fL() {
  var u = UT, s = UT, d = TE, m, E, S, y = vd, T, k, D;
  function j() {
    var B = Math.min(u.length, s.length);
    return y !== vd && (y = lL(u[0], u[B - 1])), T = B > 2 ? sL : oL, k = D = null, A;
  }
  function A(B) {
    return B == null || isNaN(B = +B) ? S : (k || (k = T(u.map(m), s, d)))(m(y(B)));
  }
  return A.invert = function(B) {
    return y(E((D || (D = T(s, u.map(m), Wy)))(B)));
  }, A.domain = function(B) {
    return arguments.length ? (u = Array.from(B, uL), j()) : u.slice();
  }, A.range = function(B) {
    return arguments.length ? (s = Array.from(B), j()) : s.slice();
  }, A.rangeRound = function(B) {
    return s = Array.from(B), d = _w, j();
  }, A.clamp = function(B) {
    return arguments.length ? (y = B ? !0 : vd, j()) : y !== vd;
  }, A.interpolate = function(B) {
    return arguments.length ? (d = B, j()) : d;
  }, A.unknown = function(B) {
    return arguments.length ? (S = B, A) : S;
  }, function(B, K) {
    return m = B, E = K, j();
  };
}
function dL() {
  return fL()(vd, vd);
}
function pL(u) {
  return Math.abs(u = Math.round(u)) >= 1e21 ? u.toLocaleString("en").replace(/,/g, "") : u.toString(10);
}
function Qy(u, s) {
  if ((d = (u = s ? u.toExponential(s - 1) : u.toExponential()).indexOf("e")) < 0)
    return null;
  var d, m = u.slice(0, d);
  return [
    m.length > 1 ? m[0] + m.slice(2) : m,
    +u.slice(d + 1)
  ];
}
function gd(u) {
  return u = Qy(Math.abs(u)), u ? u[1] : NaN;
}
function vL(u, s) {
  return function(d, m) {
    for (var E = d.length, S = [], y = 0, T = u[0], k = 0; E > 0 && T > 0 && (k + T + 1 > m && (T = Math.max(1, m - k)), S.push(d.substring(E -= T, E + T)), !((k += T + 1) > m)); )
      T = u[y = (y + 1) % u.length];
    return S.reverse().join(s);
  };
}
function hL(u) {
  return function(s) {
    return s.replace(/[0-9]/g, function(d) {
      return u[+d];
    });
  };
}
var mL = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Gy(u) {
  if (!(s = mL.exec(u)))
    throw new Error("invalid format: " + u);
  var s;
  return new wE({
    fill: s[1],
    align: s[2],
    sign: s[3],
    symbol: s[4],
    zero: s[5],
    width: s[6],
    comma: s[7],
    precision: s[8] && s[8].slice(1),
    trim: s[9],
    type: s[10]
  });
}
Gy.prototype = wE.prototype;
function wE(u) {
  this.fill = u.fill === void 0 ? " " : u.fill + "", this.align = u.align === void 0 ? ">" : u.align + "", this.sign = u.sign === void 0 ? "-" : u.sign + "", this.symbol = u.symbol === void 0 ? "" : u.symbol + "", this.zero = !!u.zero, this.width = u.width === void 0 ? void 0 : +u.width, this.comma = !!u.comma, this.precision = u.precision === void 0 ? void 0 : +u.precision, this.trim = !!u.trim, this.type = u.type === void 0 ? "" : u.type + "";
}
wE.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function yL(u) {
  e:
    for (var s = u.length, d = 1, m = -1, E; d < s; ++d)
      switch (u[d]) {
        case ".":
          m = E = d;
          break;
        case "0":
          m === 0 && (m = d), E = d;
          break;
        default:
          if (!+u[d])
            break e;
          m > 0 && (m = 0);
          break;
      }
  return m > 0 ? u.slice(0, m) + u.slice(E + 1) : u;
}
var Mw;
function gL(u, s) {
  var d = Qy(u, s);
  if (!d)
    return u + "";
  var m = d[0], E = d[1], S = E - (Mw = Math.max(-8, Math.min(8, Math.floor(E / 3))) * 3) + 1, y = m.length;
  return S === y ? m : S > y ? m + new Array(S - y + 1).join("0") : S > 0 ? m.slice(0, S) + "." + m.slice(S) : "0." + new Array(1 - S).join("0") + Qy(u, Math.max(0, s + S - 1))[0];
}
function PT(u, s) {
  var d = Qy(u, s);
  if (!d)
    return u + "";
  var m = d[0], E = d[1];
  return E < 0 ? "0." + new Array(-E).join("0") + m : m.length > E + 1 ? m.slice(0, E + 1) + "." + m.slice(E + 1) : m + new Array(E - m.length + 2).join("0");
}
const jT = {
  "%": (u, s) => (u * 100).toFixed(s),
  b: (u) => Math.round(u).toString(2),
  c: (u) => u + "",
  d: pL,
  e: (u, s) => u.toExponential(s),
  f: (u, s) => u.toFixed(s),
  g: (u, s) => u.toPrecision(s),
  o: (u) => Math.round(u).toString(8),
  p: (u, s) => PT(u * 100, s),
  r: PT,
  s: gL,
  X: (u) => Math.round(u).toString(16).toUpperCase(),
  x: (u) => Math.round(u).toString(16)
};
function FT(u) {
  return u;
}
var HT = Array.prototype.map, $T = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function SL(u) {
  var s = u.grouping === void 0 || u.thousands === void 0 ? FT : vL(HT.call(u.grouping, Number), u.thousands + ""), d = u.currency === void 0 ? "" : u.currency[0] + "", m = u.currency === void 0 ? "" : u.currency[1] + "", E = u.decimal === void 0 ? "." : u.decimal + "", S = u.numerals === void 0 ? FT : hL(HT.call(u.numerals, String)), y = u.percent === void 0 ? "%" : u.percent + "", T = u.minus === void 0 ? "−" : u.minus + "", k = u.nan === void 0 ? "NaN" : u.nan + "";
  function D(A) {
    A = Gy(A);
    var B = A.fill, K = A.align, te = A.sign, fe = A.symbol, ye = A.zero, Ue = A.width, oe = A.comma, se = A.precision, Se = A.trim, G = A.type;
    G === "n" ? (oe = !0, G = "g") : jT[G] || (se === void 0 && (se = 12), Se = !0, G = "g"), (ye || B === "0" && K === "=") && (ye = !0, B = "0", K = "=");
    var Pe = fe === "$" ? d : fe === "#" && /[boxX]/.test(G) ? "0" + G.toLowerCase() : "", je = fe === "$" ? m : /[%p]/.test(G) ? y : "", gt = jT[G], pt = /[defgprs%]/.test(G);
    se = se === void 0 ? 6 : /[gprs]/.test(G) ? Math.max(1, Math.min(21, se)) : Math.max(0, Math.min(20, se));
    function ot(be) {
      var vt = Pe, ge = je, Ve, xt, Xe;
      if (G === "c")
        ge = gt(be) + ge, be = "";
      else {
        be = +be;
        var Ee = be < 0 || 1 / be < 0;
        if (be = isNaN(be) ? k : gt(Math.abs(be), se), Se && (be = yL(be)), Ee && +be == 0 && te !== "+" && (Ee = !1), vt = (Ee ? te === "(" ? te : T : te === "-" || te === "(" ? "" : te) + vt, ge = (G === "s" ? $T[8 + Mw / 3] : "") + ge + (Ee && te === "(" ? ")" : ""), pt) {
          for (Ve = -1, xt = be.length; ++Ve < xt; )
            if (Xe = be.charCodeAt(Ve), 48 > Xe || Xe > 57) {
              ge = (Xe === 46 ? E + be.slice(Ve + 1) : be.slice(Ve)) + ge, be = be.slice(0, Ve);
              break;
            }
        }
      }
      oe && !ye && (be = s(be, 1 / 0));
      var ue = vt.length + be.length + ge.length, ke = ue < Ue ? new Array(Ue - ue + 1).join(B) : "";
      switch (oe && ye && (be = s(ke + be, ke.length ? Ue - ge.length : 1 / 0), ke = ""), K) {
        case "<":
          be = vt + be + ge + ke;
          break;
        case "=":
          be = vt + ke + be + ge;
          break;
        case "^":
          be = ke.slice(0, ue = ke.length >> 1) + vt + be + ge + ke.slice(ue);
          break;
        default:
          be = ke + vt + be + ge;
          break;
      }
      return S(be);
    }
    return ot.toString = function() {
      return A + "";
    }, ot;
  }
  function j(A, B) {
    var K = D((A = Gy(A), A.type = "f", A)), te = Math.max(-8, Math.min(8, Math.floor(gd(B) / 3))) * 3, fe = Math.pow(10, -te), ye = $T[8 + te / 3];
    return function(Ue) {
      return K(fe * Ue) + ye;
    };
  }
  return {
    format: D,
    formatPrefix: j
  };
}
var Uy, Nw, Lw;
EL({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function EL(u) {
  return Uy = SL(u), Nw = Uy.format, Lw = Uy.formatPrefix, Uy;
}
function CL(u) {
  return Math.max(0, -gd(Math.abs(u)));
}
function bL(u, s) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(gd(s) / 3))) * 3 - gd(Math.abs(u)));
}
function xL(u, s) {
  return u = Math.abs(u), s = Math.abs(s) - u, Math.max(0, gd(s) - gd(u)) + 1;
}
function TL(u, s, d, m) {
  var E = _N(u, s, d), S;
  switch (m = Gy(m ?? ",f"), m.type) {
    case "s": {
      var y = Math.max(Math.abs(u), Math.abs(s));
      return m.precision == null && !isNaN(S = bL(E, y)) && (m.precision = S), Lw(m, y);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      m.precision == null && !isNaN(S = xL(E, Math.max(Math.abs(u), Math.abs(s)))) && (m.precision = S - (m.type === "e"));
      break;
    }
    case "f":
    case "%": {
      m.precision == null && !isNaN(S = CL(E)) && (m.precision = S - (m.type === "%") * 2);
      break;
    }
  }
  return Nw(m);
}
function wL(u) {
  var s = u.domain;
  return u.ticks = function(d) {
    var m = s();
    return RN(m[0], m[m.length - 1], d ?? 10);
  }, u.tickFormat = function(d, m) {
    var E = s();
    return TL(E[0], E[E.length - 1], d ?? 10, m);
  }, u.nice = function(d) {
    d == null && (d = 10);
    var m = s(), E = 0, S = m.length - 1, y = m[E], T = m[S], k, D, j = 10;
    for (T < y && (D = y, y = T, T = D, D = E, E = S, S = D); j-- > 0; ) {
      if (D = vw(y, T, d), D === k)
        return m[E] = y, m[S] = T, s(m);
      if (D > 0)
        y = Math.floor(y / D) * D, T = Math.ceil(T / D) * D;
      else if (D < 0)
        y = Math.ceil(y * D) / D, T = Math.floor(T * D) / D;
      else
        break;
      k = D;
    }
    return u;
  }, u;
}
function Aw() {
  var u = dL();
  return u.copy = function() {
    return cL(u, Aw());
  }, kN.apply(u, arguments), wL(u);
}
function RL(u, s) {
  s.domain && ("nice" in u || "quantiles" in u || "padding" in u, u.domain(s.domain));
}
function _L(u, s) {
  s.range && ("padding" in u, u.range(s.range));
}
function kL(u, s) {
  "align" in u && "align" in s && typeof s.align < "u" && u.align(s.align);
}
function OL(u, s) {
  "base" in u && "base" in s && typeof s.base < "u" && u.base(s.base);
}
function DL(u, s) {
  "clamp" in u && "clamp" in s && typeof s.clamp < "u" && u.clamp(s.clamp);
}
function ML(u, s) {
  "constant" in u && "constant" in s && typeof s.constant < "u" && u.constant(s.constant);
}
function NL(u, s) {
  "exponent" in u && "exponent" in s && typeof s.exponent < "u" && u.exponent(s.exponent);
}
var VT = {
  lab: eL,
  hcl: tL,
  "hcl-long": nL,
  hsl: ZN,
  "hsl-long": JN,
  cubehelix: rL,
  "cubehelix-long": aL,
  rgb: aE
};
function LL(u) {
  switch (u) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return VT[u];
  }
  var s = u.type, d = u.gamma, m = VT[s];
  return typeof d > "u" ? m : m.gamma(d);
}
function AL(u, s) {
  if ("interpolate" in s && "interpolate" in u && typeof s.interpolate < "u") {
    var d = LL(s.interpolate);
    u.interpolate(d);
  }
}
var F1 = new Date(), H1 = new Date();
function ma(u, s, d, m) {
  function E(S) {
    return u(S = arguments.length === 0 ? new Date() : new Date(+S)), S;
  }
  return E.floor = function(S) {
    return u(S = new Date(+S)), S;
  }, E.ceil = function(S) {
    return u(S = new Date(S - 1)), s(S, 1), u(S), S;
  }, E.round = function(S) {
    var y = E(S), T = E.ceil(S);
    return S - y < T - S ? y : T;
  }, E.offset = function(S, y) {
    return s(S = new Date(+S), y == null ? 1 : Math.floor(y)), S;
  }, E.range = function(S, y, T) {
    var k = [], D;
    if (S = E.ceil(S), T = T == null ? 1 : Math.floor(T), !(S < y) || !(T > 0))
      return k;
    do
      k.push(D = new Date(+S)), s(S, T), u(S);
    while (D < S && S < y);
    return k;
  }, E.filter = function(S) {
    return ma(function(y) {
      if (y >= y)
        for (; u(y), !S(y); )
          y.setTime(y - 1);
    }, function(y, T) {
      if (y >= y)
        if (T < 0)
          for (; ++T <= 0; )
            for (; s(y, -1), !S(y); )
              ;
        else
          for (; --T >= 0; )
            for (; s(y, 1), !S(y); )
              ;
    });
  }, d && (E.count = function(S, y) {
    return F1.setTime(+S), H1.setTime(+y), u(F1), u(H1), Math.floor(d(F1, H1));
  }, E.every = function(S) {
    return S = Math.floor(S), !isFinite(S) || !(S > 0) ? null : S > 1 ? E.filter(m ? function(y) {
      return m(y) % S === 0;
    } : function(y) {
      return E.count(0, y) % S === 0;
    }) : E;
  }), E;
}
const Yv = 1e3, ds = Yv * 60, Wv = ds * 60, RE = Wv * 24, zw = RE * 7;
var Uw = ma(function(u) {
  u.setTime(u - u.getMilliseconds());
}, function(u, s) {
  u.setTime(+u + s * Yv);
}, function(u, s) {
  return (s - u) / Yv;
}, function(u) {
  return u.getUTCSeconds();
});
const Pw = Uw;
Uw.range;
var jw = ma(function(u) {
  u.setTime(u - u.getMilliseconds() - u.getSeconds() * Yv);
}, function(u, s) {
  u.setTime(+u + s * ds);
}, function(u, s) {
  return (s - u) / ds;
}, function(u) {
  return u.getMinutes();
});
const zL = jw;
jw.range;
var Fw = ma(function(u) {
  u.setTime(u - u.getMilliseconds() - u.getSeconds() * Yv - u.getMinutes() * ds);
}, function(u, s) {
  u.setTime(+u + s * Wv);
}, function(u, s) {
  return (s - u) / Wv;
}, function(u) {
  return u.getHours();
});
const UL = Fw;
Fw.range;
var Hw = ma(
  (u) => u.setHours(0, 0, 0, 0),
  (u, s) => u.setDate(u.getDate() + s),
  (u, s) => (s - u - (s.getTimezoneOffset() - u.getTimezoneOffset()) * ds) / RE,
  (u) => u.getDate() - 1
);
const PL = Hw;
Hw.range;
function Tc(u) {
  return ma(function(s) {
    s.setDate(s.getDate() - (s.getDay() + 7 - u) % 7), s.setHours(0, 0, 0, 0);
  }, function(s, d) {
    s.setDate(s.getDate() + d * 7);
  }, function(s, d) {
    return (d - s - (d.getTimezoneOffset() - s.getTimezoneOffset()) * ds) / zw;
  });
}
var $w = Tc(0), jL = Tc(1), FL = Tc(2), HL = Tc(3), $L = Tc(4), VL = Tc(5), BL = Tc(6);
$w.range;
jL.range;
FL.range;
HL.range;
$L.range;
VL.range;
BL.range;
var Vw = ma(function(u) {
  u.setDate(1), u.setHours(0, 0, 0, 0);
}, function(u, s) {
  u.setMonth(u.getMonth() + s);
}, function(u, s) {
  return s.getMonth() - u.getMonth() + (s.getFullYear() - u.getFullYear()) * 12;
}, function(u) {
  return u.getMonth();
});
const IL = Vw;
Vw.range;
var _E = ma(function(u) {
  u.setMonth(0, 1), u.setHours(0, 0, 0, 0);
}, function(u, s) {
  u.setFullYear(u.getFullYear() + s);
}, function(u, s) {
  return s.getFullYear() - u.getFullYear();
}, function(u) {
  return u.getFullYear();
});
_E.every = function(u) {
  return !isFinite(u = Math.floor(u)) || !(u > 0) ? null : ma(function(s) {
    s.setFullYear(Math.floor(s.getFullYear() / u) * u), s.setMonth(0, 1), s.setHours(0, 0, 0, 0);
  }, function(s, d) {
    s.setFullYear(s.getFullYear() + d * u);
  });
};
const YL = _E;
_E.range;
var Bw = ma(function(u) {
  u.setUTCSeconds(0, 0);
}, function(u, s) {
  u.setTime(+u + s * ds);
}, function(u, s) {
  return (s - u) / ds;
}, function(u) {
  return u.getUTCMinutes();
});
const WL = Bw;
Bw.range;
var Iw = ma(function(u) {
  u.setUTCMinutes(0, 0, 0);
}, function(u, s) {
  u.setTime(+u + s * Wv);
}, function(u, s) {
  return (s - u) / Wv;
}, function(u) {
  return u.getUTCHours();
});
const QL = Iw;
Iw.range;
var Yw = ma(function(u) {
  u.setUTCHours(0, 0, 0, 0);
}, function(u, s) {
  u.setUTCDate(u.getUTCDate() + s);
}, function(u, s) {
  return (s - u) / RE;
}, function(u) {
  return u.getUTCDate() - 1;
});
const GL = Yw;
Yw.range;
function wc(u) {
  return ma(function(s) {
    s.setUTCDate(s.getUTCDate() - (s.getUTCDay() + 7 - u) % 7), s.setUTCHours(0, 0, 0, 0);
  }, function(s, d) {
    s.setUTCDate(s.getUTCDate() + d * 7);
  }, function(s, d) {
    return (d - s) / zw;
  });
}
var Ww = wc(0), qL = wc(1), KL = wc(2), XL = wc(3), ZL = wc(4), JL = wc(5), e2 = wc(6);
Ww.range;
qL.range;
KL.range;
XL.range;
ZL.range;
JL.range;
e2.range;
var Qw = ma(function(u) {
  u.setUTCDate(1), u.setUTCHours(0, 0, 0, 0);
}, function(u, s) {
  u.setUTCMonth(u.getUTCMonth() + s);
}, function(u, s) {
  return s.getUTCMonth() - u.getUTCMonth() + (s.getUTCFullYear() - u.getUTCFullYear()) * 12;
}, function(u) {
  return u.getUTCMonth();
});
const t2 = Qw;
Qw.range;
var kE = ma(function(u) {
  u.setUTCMonth(0, 1), u.setUTCHours(0, 0, 0, 0);
}, function(u, s) {
  u.setUTCFullYear(u.getUTCFullYear() + s);
}, function(u, s) {
  return s.getUTCFullYear() - u.getUTCFullYear();
}, function(u) {
  return u.getUTCFullYear();
});
kE.every = function(u) {
  return !isFinite(u = Math.floor(u)) || !(u > 0) ? null : ma(function(s) {
    s.setUTCFullYear(Math.floor(s.getUTCFullYear() / u) * u), s.setUTCMonth(0, 1), s.setUTCHours(0, 0, 0, 0);
  }, function(s, d) {
    s.setUTCFullYear(s.getUTCFullYear() + d * u);
  });
};
const n2 = kE;
kE.range;
var r2 = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), a2 = "%Y-%m-%d %H:%M";
function i2(u) {
  var s = u.tickFormat(1, a2)(r2);
  return s === "2020-02-02 03:04";
}
var BT = {
  day: PL,
  hour: UL,
  minute: zL,
  month: IL,
  second: Pw,
  week: $w,
  year: YL
}, IT = {
  day: GL,
  hour: QL,
  minute: WL,
  month: t2,
  second: Pw,
  week: Ww,
  year: n2
};
function u2(u, s) {
  if ("nice" in s && typeof s.nice < "u" && "nice" in u) {
    var d = s.nice;
    if (typeof d == "boolean")
      d && u.nice();
    else if (typeof d == "number")
      u.nice(d);
    else {
      var m = u, E = i2(m);
      if (typeof d == "string")
        m.nice(E ? IT[d] : BT[d]);
      else {
        var S = d.interval, y = d.step, T = (E ? IT[S] : BT[S]).every(y);
        T != null && m.nice(T);
      }
    }
  }
}
function l2(u, s) {
  "padding" in u && "padding" in s && typeof s.padding < "u" && u.padding(s.padding), "paddingInner" in u && "paddingInner" in s && typeof s.paddingInner < "u" && u.paddingInner(s.paddingInner), "paddingOuter" in u && "paddingOuter" in s && typeof s.paddingOuter < "u" && u.paddingOuter(s.paddingOuter);
}
function o2(u, s) {
  if (s.reverse) {
    var d = u.range().slice().reverse();
    "padding" in u, u.range(d);
  }
}
function s2(u, s) {
  "round" in s && typeof s.round < "u" && (s.round && "interpolate" in s && typeof s.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", s) : "round" in u ? u.round(s.round) : "interpolate" in u && s.round && u.interpolate(_w));
}
function c2(u, s) {
  "unknown" in u && "unknown" in s && typeof s.unknown < "u" && u.unknown(s.unknown);
}
function f2(u, s) {
  if ("zero" in s && s.zero === !0) {
    var d = u.domain(), m = d[0], E = d[1], S = E < m, y = S ? [E, m] : [m, E], T = y[0], k = y[1], D = [Math.min(0, T), Math.max(0, k)];
    u.domain(S ? D.reverse() : D);
  }
}
var d2 = [
  // domain => nice => zero
  "domain",
  "nice",
  "zero",
  // interpolate before round
  "interpolate",
  "round",
  // set range then reverse
  "range",
  "reverse",
  // Order does not matter for these operators
  "align",
  "base",
  "clamp",
  "constant",
  "exponent",
  "padding",
  "unknown"
], p2 = {
  domain: RL,
  nice: u2,
  zero: f2,
  interpolate: AL,
  round: s2,
  align: kL,
  base: OL,
  clamp: DL,
  constant: ML,
  exponent: NL,
  padding: l2,
  range: _L,
  reverse: o2,
  unknown: c2
};
function v2() {
  for (var u = arguments.length, s = new Array(u), d = 0; d < u; d++)
    s[d] = arguments[d];
  var m = new Set(s), E = d2.filter(function(S) {
    return m.has(S);
  });
  return function(y, T) {
    return typeof T < "u" && E.forEach(function(k) {
      p2[k](y, T);
    }), y;
  };
}
var h2 = v2("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function YT(u) {
  return h2(Aw(), u);
}
function m2(u) {
  if ((typeof u == "function" || typeof u == "object" && u) && "valueOf" in u) {
    var s = u.valueOf();
    if (typeof s == "number")
      return s;
  }
  return u;
}
function y2(u, s) {
  var d = u;
  return "ticks" in d ? d.ticks(s) : d.domain().filter(function(m, E, S) {
    return s == null || S.length <= s || E % Math.round((S.length - 1) / s) === 0;
  });
}
function g2(u) {
  return u == null ? void 0 : u.toString();
}
var lE = Math.PI, oE = 2 * lE, gc = 1e-6, S2 = oE - gc;
function sE() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Gw() {
  return new sE();
}
sE.prototype = Gw.prototype = {
  constructor: sE,
  moveTo: function(u, s) {
    this._ += "M" + (this._x0 = this._x1 = +u) + "," + (this._y0 = this._y1 = +s);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(u, s) {
    this._ += "L" + (this._x1 = +u) + "," + (this._y1 = +s);
  },
  quadraticCurveTo: function(u, s, d, m) {
    this._ += "Q" + +u + "," + +s + "," + (this._x1 = +d) + "," + (this._y1 = +m);
  },
  bezierCurveTo: function(u, s, d, m, E, S) {
    this._ += "C" + +u + "," + +s + "," + +d + "," + +m + "," + (this._x1 = +E) + "," + (this._y1 = +S);
  },
  arcTo: function(u, s, d, m, E) {
    u = +u, s = +s, d = +d, m = +m, E = +E;
    var S = this._x1, y = this._y1, T = d - u, k = m - s, D = S - u, j = y - s, A = D * D + j * j;
    if (E < 0)
      throw new Error("negative radius: " + E);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = u) + "," + (this._y1 = s);
    else if (A > gc)
      if (!(Math.abs(j * T - k * D) > gc) || !E)
        this._ += "L" + (this._x1 = u) + "," + (this._y1 = s);
      else {
        var B = d - S, K = m - y, te = T * T + k * k, fe = B * B + K * K, ye = Math.sqrt(te), Ue = Math.sqrt(A), oe = E * Math.tan((lE - Math.acos((te + A - fe) / (2 * ye * Ue))) / 2), se = oe / Ue, Se = oe / ye;
        Math.abs(se - 1) > gc && (this._ += "L" + (u + se * D) + "," + (s + se * j)), this._ += "A" + E + "," + E + ",0,0," + +(j * B > D * K) + "," + (this._x1 = u + Se * T) + "," + (this._y1 = s + Se * k);
      }
  },
  arc: function(u, s, d, m, E, S) {
    u = +u, s = +s, d = +d, S = !!S;
    var y = d * Math.cos(m), T = d * Math.sin(m), k = u + y, D = s + T, j = 1 ^ S, A = S ? m - E : E - m;
    if (d < 0)
      throw new Error("negative radius: " + d);
    this._x1 === null ? this._ += "M" + k + "," + D : (Math.abs(this._x1 - k) > gc || Math.abs(this._y1 - D) > gc) && (this._ += "L" + k + "," + D), d && (A < 0 && (A = A % oE + oE), A > S2 ? this._ += "A" + d + "," + d + ",0,1," + j + "," + (u - y) + "," + (s - T) + "A" + d + "," + d + ",0,1," + j + "," + (this._x1 = k) + "," + (this._y1 = D) : A > gc && (this._ += "A" + d + "," + d + ",0," + +(A >= lE) + "," + j + "," + (this._x1 = u + d * Math.cos(E)) + "," + (this._y1 = s + d * Math.sin(E))));
  },
  rect: function(u, s, d, m) {
    this._ += "M" + (this._x0 = this._x1 = +u) + "," + (this._y0 = this._y1 = +s) + "h" + +d + "v" + +m + "h" + -d + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Py(u) {
  return function() {
    return u;
  };
}
function qw(u) {
  this._context = u;
}
qw.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(u, s) {
    switch (u = +u, s = +s, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(u, s) : this._context.moveTo(u, s);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(u, s);
        break;
    }
  }
};
function Kw(u) {
  return new qw(u);
}
function E2(u) {
  return u[0];
}
function C2(u) {
  return u[1];
}
function b2() {
  var u = E2, s = C2, d = Py(!0), m = null, E = Kw, S = null;
  function y(T) {
    var k, D = T.length, j, A = !1, B;
    for (m == null && (S = E(B = Gw())), k = 0; k <= D; ++k)
      !(k < D && d(j = T[k], k, T)) === A && ((A = !A) ? S.lineStart() : S.lineEnd()), A && S.point(+u(j, k, T), +s(j, k, T));
    if (B)
      return S = null, B + "" || null;
  }
  return y.x = function(T) {
    return arguments.length ? (u = typeof T == "function" ? T : Py(+T), y) : u;
  }, y.y = function(T) {
    return arguments.length ? (s = typeof T == "function" ? T : Py(+T), y) : s;
  }, y.defined = function(T) {
    return arguments.length ? (d = typeof T == "function" ? T : Py(!!T), y) : d;
  }, y.curve = function(T) {
    return arguments.length ? (E = T, m != null && (S = E(m)), y) : E;
  }, y.context = function(T) {
    return arguments.length ? (T == null ? m = S = null : S = E(m = T), y) : m;
  }, y;
}
function WT(u, s) {
  u(s);
}
function x2(u) {
  var s = u === void 0 ? {} : u, d = s.x, m = s.y, E = s.defined, S = s.curve, y = b2();
  return d && WT(y.x, d), m && WT(y.y, m), E && y.defined(E), S && y.curve(S), y;
}
var T2 = ["from", "to", "fill", "className", "innerRef"];
function cE() {
  return cE = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, cE.apply(this, arguments);
}
function w2(u, s) {
  if (u == null)
    return {};
  var d = {}, m = Object.keys(u), E, S;
  for (S = 0; S < m.length; S++)
    E = m[S], !(s.indexOf(E) >= 0) && (d[E] = u[E]);
  return d;
}
function Xw(u) {
  var s = u.from, d = s === void 0 ? {
    x: 0,
    y: 0
  } : s, m = u.to, E = m === void 0 ? {
    x: 1,
    y: 1
  } : m, S = u.fill, y = S === void 0 ? "transparent" : S, T = u.className, k = u.innerRef, D = w2(u, T2), j = d.x === E.x || d.y === E.y;
  return /* @__PURE__ */ ha.createElement("line", cE({
    ref: k,
    className: bc("visx-line", T),
    x1: d.x,
    y1: d.y,
    x2: E.x,
    y2: E.y,
    fill: y,
    shapeRendering: j ? "crispEdges" : "auto"
  }, D));
}
var R2 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function fE() {
  return fE = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, fE.apply(this, arguments);
}
function _2(u, s) {
  if (u == null)
    return {};
  var d = {}, m = Object.keys(u), E, S;
  for (S = 0; S < m.length; S++)
    E = m[S], !(s.indexOf(E) >= 0) && (d[E] = u[E]);
  return d;
}
function k2(u) {
  var s = u.children, d = u.data, m = d === void 0 ? [] : d, E = u.x, S = u.y, y = u.fill, T = y === void 0 ? "transparent" : y, k = u.className, D = u.curve, j = u.innerRef, A = u.defined, B = A === void 0 ? function() {
    return !0;
  } : A, K = _2(u, R2), te = x2({
    x: E,
    y: S,
    defined: B,
    curve: D
  });
  return s ? /* @__PURE__ */ ha.createElement(ha.Fragment, null, s({
    path: te
  })) : /* @__PURE__ */ ha.createElement("path", fE({
    ref: j,
    className: bc("visx-linepath", k),
    d: te(m) || "",
    fill: T,
    strokeLinecap: "round"
  }, K));
}
var O2 = Zw;
function Zw(u, s, d) {
  u instanceof RegExp && (u = QT(u, d)), s instanceof RegExp && (s = QT(s, d));
  var m = Jw(u, s, d);
  return m && {
    start: m[0],
    end: m[1],
    pre: d.slice(0, m[0]),
    body: d.slice(m[0] + u.length, m[1]),
    post: d.slice(m[1] + s.length)
  };
}
function QT(u, s) {
  var d = s.match(u);
  return d ? d[0] : null;
}
Zw.range = Jw;
function Jw(u, s, d) {
  var m, E, S, y, T, k = d.indexOf(u), D = d.indexOf(s, k + 1), j = k;
  if (k >= 0 && D > 0) {
    for (m = [], S = d.length; j >= 0 && !T; )
      j == k ? (m.push(j), k = d.indexOf(u, j + 1)) : m.length == 1 ? T = [m.pop(), D] : (E = m.pop(), E < S && (S = E, y = D), D = d.indexOf(s, j + 1)), j = k < D && k >= 0 ? k : D;
    m.length && (T = [S, y]);
  }
  return T;
}
var D2 = eR;
function eR(u, s, d) {
  u instanceof RegExp && (u = GT(u, d)), s instanceof RegExp && (s = GT(s, d));
  var m = tR(u, s, d);
  return m && {
    start: m[0],
    end: m[1],
    pre: d.slice(0, m[0]),
    body: d.slice(m[0] + u.length, m[1]),
    post: d.slice(m[1] + s.length)
  };
}
function GT(u, s) {
  var d = s.match(u);
  return d ? d[0] : null;
}
eR.range = tR;
function tR(u, s, d) {
  var m, E, S, y, T, k = d.indexOf(u), D = d.indexOf(s, k + 1), j = k;
  if (k >= 0 && D > 0) {
    if (u === s)
      return [k, D];
    for (m = [], S = d.length; j >= 0 && !T; )
      j == k ? (m.push(j), k = d.indexOf(u, j + 1)) : m.length == 1 ? T = [m.pop(), D] : (E = m.pop(), E < S && (S = E, y = D), D = d.indexOf(s, j + 1)), j = k < D && k >= 0 ? k : D;
    m.length && (T = [S, y]);
  }
  return T;
}
var M2 = D2, N2 = nR;
function nR(u, s, d) {
  var m = u;
  return L2(u, s).reduce(function(E, S) {
    return E.replace(S.functionIdentifier + "(" + S.matches.body + ")", A2(S.matches.body, S.functionIdentifier, d, m, s));
  }, u);
}
function L2(u, s) {
  var d = [], m = typeof s == "string" ? new RegExp("\\b(" + s + ")\\(") : s;
  do {
    var E = m.exec(u);
    if (!E)
      return d;
    if (E[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + s);
    var S = E[1], y = E.index, T = M2("(", ")", u.substring(y));
    if (!T || T.start !== E[0].length - 1)
      throw new SyntaxError(S + "(): missing closing ')' in the value '" + u + "'");
    d.push({ matches: T, functionIdentifier: S }), u = T.post;
  } while (m.test(u));
  return d;
}
function A2(u, s, d, m, E) {
  return d(nR(u, E, d), s, m);
}
var Aa = function(u) {
  this.value = u;
};
Aa.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(u) {
    return Aa.math.isDegree ? 180 / Math.PI * Math.acos(u) : Math.acos(u);
  },
  add: function(u, s) {
    return u + s;
  },
  asin: function(u) {
    return Aa.math.isDegree ? 180 / Math.PI * Math.asin(u) : Math.asin(u);
  },
  atan: function(u) {
    return Aa.math.isDegree ? 180 / Math.PI * Math.atan(u) : Math.atan(u);
  },
  acosh: function(u) {
    return Math.log(u + Math.sqrt(u * u - 1));
  },
  asinh: function(u) {
    return Math.log(u + Math.sqrt(u * u + 1));
  },
  atanh: function(u) {
    return Math.log((1 + u) / (1 - u));
  },
  C: function(u, s) {
    var d = 1, m = u - s, E = s;
    E < m && (E = m, m = s);
    for (var S = E + 1; S <= u; S++)
      d *= S;
    return d / Aa.math.fact(m);
  },
  changeSign: function(u) {
    return -u;
  },
  cos: function(u) {
    return Aa.math.isDegree && (u = Aa.math.toRadian(u)), Math.cos(u);
  },
  cosh: function(u) {
    return (Math.pow(Math.E, u) + Math.pow(Math.E, -1 * u)) / 2;
  },
  div: function(u, s) {
    return u / s;
  },
  fact: function(u) {
    if (u % 1 !== 0)
      return "NaN";
    for (var s = 1, d = 2; d <= u; d++)
      s *= d;
    return s;
  },
  inverse: function(u) {
    return 1 / u;
  },
  log: function(u) {
    return Math.log(u) / Math.log(10);
  },
  mod: function(u, s) {
    return u % s;
  },
  mul: function(u, s) {
    return u * s;
  },
  P: function(u, s) {
    for (var d = 1, m = Math.floor(u) - Math.floor(s) + 1; m <= Math.floor(u); m++)
      d *= m;
    return d;
  },
  Pi: function(u, s, d) {
    for (var m = 1, E = u; E <= s; E++)
      m *= Number(d.postfixEval({
        n: E
      }));
    return m;
  },
  pow10x: function(u) {
    for (var s = 1; u--; )
      s *= 10;
    return s;
  },
  sigma: function(u, s, d) {
    for (var m = 0, E = u; E <= s; E++)
      m += Number(d.postfixEval({
        n: E
      }));
    return m;
  },
  sin: function(u) {
    return Aa.math.isDegree && (u = Aa.math.toRadian(u)), Math.sin(u);
  },
  sinh: function(u) {
    return (Math.pow(Math.E, u) - Math.pow(Math.E, -1 * u)) / 2;
  },
  sub: function(u, s) {
    return u - s;
  },
  tan: function(u) {
    return Aa.math.isDegree && (u = Aa.math.toRadian(u)), Math.tan(u);
  },
  tanh: function(u) {
    return Aa.sinha(u) / Aa.cosha(u);
  },
  toRadian: function(u) {
    return u * Math.PI / 180;
  },
  and: function(u, s) {
    return u & s;
  }
};
Aa.Exception = function(u) {
  this.message = u;
};
var z2 = Aa, wt = z2;
function La(u, s) {
  for (var d = 0; d < u.length; d++)
    u[d] += s;
  return u;
}
var fs = [
  { token: "sin", show: "sin", type: 0, value: wt.math.sin },
  { token: "cos", show: "cos", type: 0, value: wt.math.cos },
  { token: "tan", show: "tan", type: 0, value: wt.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: wt.math.P },
  { token: "C", show: "C", type: 10, value: wt.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: wt.math.asin },
  { token: "acos", show: "acos", type: 0, value: wt.math.acos },
  { token: "atan", show: "atan", type: 0, value: wt.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: wt.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: wt.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: wt.math.div },
  { token: "!", show: "!", type: 7, value: wt.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: wt.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: wt.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: wt.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: wt.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: wt.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: wt.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: wt.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: wt.math.add },
  { token: "-", show: "-", type: 9, value: wt.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: wt.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: wt.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: wt.math.and }
], dE = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0,
  14: -1,
  15: 11
  // will be filtered after lexer
};
for (var jy = 0; jy < fs.length; jy++)
  fs[jy].precedence = dE[fs[jy].type];
var sl = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  9: !0,
  12: !0,
  13: !0,
  14: !0,
  15: !0
}, pd = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
  10: !0,
  11: !0,
  12: !0,
  13: !0,
  15: !0
}, U2 = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, mu = {}, Av = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, P2 = {
  1: !0
}, za = [
  [],
  [
    "1",
    "2",
    "3",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
    "^",
    "!",
    "P",
    "C",
    "e",
    "0",
    ".",
    ",",
    "n",
    " ",
    "&"
  ],
  ["pi", "ln", "Pi"],
  ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
  ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
  ["acosh", "atanh", "asinh", "Sigma"]
];
function j2(u, s, d, m) {
  for (var E = 0; E < m; E++)
    if (u[d + E] !== s[E])
      return !1;
  return !0;
}
wt.tokenTypes = {
  FUNCTION_WITH_ONE_ARG: 0,
  NUMBER: 1,
  BINARY_OPERATOR_HIGH_PRECENDENCE: 2,
  CONSTANT: 3,
  OPENING_PARENTHESIS: 4,
  CLOSING_PARENTHESIS: 5,
  DECIMAL: 6,
  POSTFIX_FUNCTION_WITH_ONE_ARG: 7,
  FUNCTION_WITH_N_ARGS: 8,
  BINARY_OPERATOR_LOW_PRECENDENCE: 9,
  BINARY_OPERATOR_PERMUTATION: 10,
  COMMA: 11,
  EVALUATED_FUNCTION: 12,
  EVALUATED_FUNCTION_PARAMETER: 13,
  SPACE: 14
};
wt.addToken = function(u) {
  for (var s = 0; s < u.length; s++) {
    var d = u[s].token.length, m = -1;
    u[s].type === wt.tokenTypes.FUNCTION_WITH_N_ARGS && u[s].numberOfArguments === void 0 && (u[s].numberOfArguments = 2), za[d] = za[d] || [];
    for (var E = 0; E < za[d].length; E++)
      if (u[s].token === za[d][E]) {
        m = rR(za[d][E], fs);
        break;
      }
    m === -1 ? (fs.push(u[s]), u[s].precedence = dE[u[s].type], za.length <= u[s].token.length && (za[u[s].token.length] = []), za[u[s].token.length].push(u[s].token)) : (fs[m] = u[s], u[s].precedence = dE[u[s].type]);
  }
};
function rR(u, s) {
  for (var d = 0; d < s.length; d++)
    if (s[d].token === u)
      return d;
  return -1;
}
function F2(u) {
  for (var s = [], d = u.length, m, E, S, y = 0; y < d; y++)
    if (!(y < d - 1 && u[y] === " " && u[y + 1] === " ")) {
      for (m = "", E = u.length - y > za.length - 2 ? za.length - 1 : u.length - y; E > 0; E--)
        if (za[E] !== void 0)
          for (S = 0; S < za[E].length; S++)
            j2(u, za[E][S], y, E) && (m = za[E][S], S = za[E].length, E = 0);
      if (y += m.length - 1, m === "")
        throw new wt.Exception("Can't understand after " + u.slice(y));
      s.push(fs[rR(m, fs)]);
    }
  return s;
}
var H2 = {
  value: wt.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, Fy = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, zv = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
wt.lex = function(u, s) {
  var d = [zv], m = [], E = u, S = sl, y = 0, T = mu, k = "", D;
  typeof s < "u" && wt.addToken(s);
  var j = {}, A = F2(E);
  for (D = 0; D < A.length; D++) {
    var B = A[D];
    if (B.type === 14) {
      if (D > 0 && D < A.length - 1 && A[D + 1].type === 1 && (A[D - 1].type === 1 || A[D - 1].type === 6))
        throw new wt.Exception("Unexpected Space");
      continue;
    }
    var K = B.token, te = B.type, fe = B.value, ye = B.precedence, Ue = B.show, oe = d[d.length - 1], se;
    for (se = m.length; se-- && m[se] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(te) !== -1) {
        if (S[te] !== !0)
          throw new wt.Exception(K + " is not allowed after " + k);
        d.push(Fy), S = pd, T = Av, m.pop();
      }
    if (S[te] !== !0)
      throw new wt.Exception(K + " is not allowed after " + k);
    if (T[te] === !0 && (te = 2, fe = wt.math.mul, Ue = "&times;", ye = 3, D = D - 1), j = {
      value: fe,
      type: te,
      pre: ye,
      show: Ue,
      numberOfArguments: B.numberOfArguments
    }, te === 0)
      S = sl, T = mu, La(m, 2), d.push(j), A[D + 1].type !== 4 && (d.push(zv), m.push(2));
    else if (te === 1)
      oe.type === 1 ? (oe.value += fe, La(m, 1)) : d.push(j), S = pd, T = U2;
    else if (te === 2)
      S = sl, T = mu, La(m, 2), d.push(j);
    else if (te === 3)
      d.push(j), S = pd, T = Av;
    else if (te === 4)
      La(m, 1), y++, S = sl, T = mu, d.push(j);
    else if (te === 5) {
      if (!y)
        throw new wt.Exception("Closing parenthesis are more than opening one, wait What!!!");
      y--, S = pd, T = Av, d.push(j), La(m, 1);
    } else if (te === 6) {
      if (oe.hasDec)
        throw new wt.Exception("Two decimals are not allowed in one number");
      oe.type !== 1 && (oe = {
        value: 0,
        type: 1,
        pre: 0
      }, d.push(oe)), S = P2, La(m, 1), T = mu, oe.value += fe, oe.hasDec = !0;
    } else
      te === 7 && (S = pd, T = Av, La(m, 1), d.push(j));
    te === 8 ? (S = sl, T = mu, La(m, B.numberOfArguments + 2), d.push(j), A[D + 1].type !== 4 && (d.push(zv), m.push(B.numberOfArguments + 2))) : te === 9 ? (oe.type === 9 ? oe.value === wt.math.add ? (oe.value = fe, oe.show = Ue, La(m, 1)) : oe.value === wt.math.sub && Ue === "-" && (oe.value = wt.math.add, oe.show = "+", La(m, 1)) : oe.type !== 5 && oe.type !== 7 && oe.type !== 1 && oe.type !== 3 && oe.type !== 13 ? K === "-" && (S = sl, T = mu, La(m, 2).push(2), d.push(H2), d.push(zv)) : (d.push(j), La(m, 2)), S = sl, T = mu) : te === 10 ? (S = sl, T = mu, La(m, 2), d.push(j)) : te === 11 ? (S = sl, T = mu, d.push(j)) : te === 12 ? (S = sl, T = mu, La(m, 6), d.push(j), A[D + 1].type !== 4 && (d.push(zv), m.push(6))) : te === 13 && (S = pd, T = Av, d.push(j)), La(m, -1), k = K;
  }
  for (se = m.length; se--; )
    d.push(Fy);
  if (S[5] !== !0)
    throw new wt.Exception("complete the expression");
  for (; y--; )
    d.push(Fy);
  return d.push(Fy), new wt(d);
};
var $2 = wt, pE = $2;
pE.prototype.toPostfix = function() {
  for (var u = [], s, d, m, E, S, y = [{ value: "(", type: 4, pre: 0 }], T = this.value, k = 1; k < T.length; k++)
    if (T[k].type === 1 || T[k].type === 3 || T[k].type === 13)
      T[k].type === 1 && (T[k].value = Number(T[k].value)), u.push(T[k]);
    else if (T[k].type === 4)
      y.push(T[k]);
    else if (T[k].type === 5)
      for (; (d = y.pop()).type !== 4; )
        u.push(d);
    else if (T[k].type === 11) {
      for (; (d = y.pop()).type !== 4; )
        u.push(d);
      y.push(d);
    } else {
      s = T[k], E = s.pre, S = y[y.length - 1], m = S.pre;
      var D = S.value == "Math.pow" && s.value == "Math.pow";
      if (E > m)
        y.push(s);
      else {
        for (; m >= E && !D || D && E < m; )
          d = y.pop(), S = y[y.length - 1], u.push(d), m = S.pre, D = s.value == "Math.pow" && S.value == "Math.pow";
        y.push(s);
      }
    }
  return new pE(u);
};
var V2 = pE, Hv = V2;
Hv.prototype.postfixEval = function(u) {
  u = u || {}, u.PI = Math.PI, u.E = Math.E;
  for (var s = [], d, m, E, S = this.value, y = typeof u.n < "u", T = 0; T < S.length; T++)
    if (S[T].type === 1)
      s.push({ value: S[T].value, type: 1 });
    else if (S[T].type === 3)
      s.push({ value: u[S[T].value], type: 1 });
    else if (S[T].type === 0)
      typeof s[s.length - 1].type > "u" ? s[s.length - 1].value.push(S[T]) : s[s.length - 1].value = S[T].value(s[s.length - 1].value);
    else if (S[T].type === 7)
      typeof s[s.length - 1].type > "u" ? s[s.length - 1].value.push(S[T]) : s[s.length - 1].value = S[T].value(s[s.length - 1].value);
    else if (S[T].type === 8) {
      for (var k = [], D = 0; D < S[T].numberOfArguments; D++)
        k.push(s.pop().value);
      s.push({ type: 1, value: S[T].value.apply(S[T], k.reverse()) });
    } else
      S[T].type === 10 ? (d = s.pop(), m = s.pop(), typeof m.type > "u" ? (m.value = m.concat(d), m.value.push(S[T]), s.push(m)) : typeof d.type > "u" ? (d.unshift(m), d.push(S[T]), s.push(d)) : s.push({ type: 1, value: S[T].value(m.value, d.value) })) : S[T].type === 2 || S[T].type === 9 ? (d = s.pop(), m = s.pop(), typeof m.type > "u" ? (m = m.concat(d), m.push(S[T]), s.push(m)) : typeof d.type > "u" ? (d.unshift(m), d.push(S[T]), s.push(d)) : s.push({ type: 1, value: S[T].value(m.value, d.value) })) : S[T].type === 12 ? (d = s.pop(), typeof d.type < "u" && (d = [d]), m = s.pop(), E = s.pop(), s.push({ type: 1, value: S[T].value(E.value, m.value, new Hv(d)) })) : S[T].type === 13 && (y ? s.push({ value: u[S[T].value], type: 3 }) : s.push([S[T]]));
  if (s.length > 1)
    throw new Hv.Exception("Uncaught Syntax error");
  return s[0].value > 1e15 ? "Infinity" : parseFloat(s[0].value.toFixed(15));
};
Hv.eval = function(u, s, d) {
  return typeof s > "u" ? this.lex(u).toPostfix().postfixEval() : typeof d > "u" ? typeof s.length < "u" ? this.lex(u, s).toPostfix().postfixEval() : this.lex(u).toPostfix().postfixEval(s) : this.lex(u, s).toPostfix().postfixEval(d);
};
var B2 = Hv, aR = B2;
aR.prototype.formulaEval = function() {
  for (var u, s, d, m = [], E = this.value, S = 0; S < E.length; S++)
    E[S].type === 1 || E[S].type === 3 ? m.push({ value: E[S].type === 3 ? E[S].show : E[S].value, type: 1 }) : E[S].type === 13 ? m.push({ value: E[S].show, type: 1 }) : E[S].type === 0 ? m[m.length - 1] = { value: E[S].show + (E[S].show != "-" ? "(" : "") + m[m.length - 1].value + (E[S].show != "-" ? ")" : ""), type: 0 } : E[S].type === 7 ? m[m.length - 1] = { value: (m[m.length - 1].type != 1 ? "(" : "") + m[m.length - 1].value + (m[m.length - 1].type != 1 ? ")" : "") + E[S].show, type: 7 } : E[S].type === 10 ? (u = m.pop(), s = m.pop(), E[S].show === "P" || E[S].show === "C" ? m.push({ value: "<sup>" + s.value + "</sup>" + E[S].show + "<sub>" + u.value + "</sub>", type: 10 }) : m.push({ value: (s.type != 1 ? "(" : "") + s.value + (s.type != 1 ? ")" : "") + "<sup>" + u.value + "</sup>", type: 1 })) : E[S].type === 2 || E[S].type === 9 ? (u = m.pop(), s = m.pop(), m.push({ value: (s.type != 1 ? "(" : "") + s.value + (s.type != 1 ? ")" : "") + E[S].show + (u.type != 1 ? "(" : "") + u.value + (u.type != 1 ? ")" : ""), type: E[S].type })) : E[S].type === 12 && (u = m.pop(), s = m.pop(), d = m.pop(), m.push({ value: E[S].show + "(" + d.value + "," + s.value + "," + u.value + ")", type: 12 }));
  return m[0].value;
};
var I2 = aR, Y2 = O2, W2 = N2, Q2 = I2, G2 = 100, q2 = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, $1, K2 = X2;
function X2(u, s) {
  $1 = 0, s = Math.pow(10, s === void 0 ? 5 : s), u = u.replace(/\n+/g, " ");
  function d(E, S, y) {
    if ($1++ > G2)
      throw $1 = 0, new Error("Call stack overflow for " + y);
    if (E === "")
      throw new Error(S + "(): '" + y + "' must contain a non-whitespace string");
    E = m(E, y);
    var T = Z2(E);
    if (T.length > 1 || E.indexOf("var(") > -1)
      return S + "(" + E + ")";
    var k = T[0] || "";
    k === "%" && (E = E.replace(/\b[0-9\.]+%/g, function(A) {
      return parseFloat(A.slice(0, -1)) * 0.01;
    }));
    var D = E.replace(new RegExp(k, "gi"), ""), j;
    try {
      j = Q2.eval(D);
    } catch {
      return S + "(" + E + ")";
    }
    return k === "%" && (j *= 100), (S.length || k === "%") && (j = Math.round(j * s) / s), j += k, j;
  }
  function m(E, S) {
    E = E.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var y = "", T = E, k; k = q2.exec(T); ) {
      k[0].index > 0 && (y += T.substring(0, k[0].index));
      var D = Y2("(", ")", T.substring([0].index));
      if (D.body === "")
        throw new Error("'" + E + "' must contain a non-whitespace string");
      var j = d(D.body, "", S);
      y += D.pre + j, T = D.post;
    }
    return y + T;
  }
  return W2(u, /((?:\-[a-z]+\-)?calc)\(/, d);
}
function Z2(u) {
  for (var s = [], d = [], m = /[\.0-9]([%a-z]+)/gi, E = m.exec(u); E; )
    !E || !E[1] || (d.indexOf(E[1].toLowerCase()) === -1 && (s.push(E[1]), d.push(E[1].toLowerCase())), E = m.exec(u));
  return s;
}
const V1 = K2;
var J2 = typeof Ly == "object" && Ly && Ly.Object === Object && Ly, eA = J2, tA = eA, nA = typeof self == "object" && self && self.Object === Object && self, rA = tA || nA || Function("return this")(), OE = rA, aA = OE, iA = aA.Symbol, iR = iA, qT = iR, uR = Object.prototype, uA = uR.hasOwnProperty, lA = uR.toString, Uv = qT ? qT.toStringTag : void 0;
function oA(u) {
  var s = uA.call(u, Uv), d = u[Uv];
  try {
    u[Uv] = void 0;
    var m = !0;
  } catch {
  }
  var E = lA.call(u);
  return m && (s ? u[Uv] = d : delete u[Uv]), E;
}
var sA = oA, cA = Object.prototype, fA = cA.toString;
function dA(u) {
  return fA.call(u);
}
var pA = dA, KT = iR, vA = sA, hA = pA, mA = "[object Null]", yA = "[object Undefined]", XT = KT ? KT.toStringTag : void 0;
function gA(u) {
  return u == null ? u === void 0 ? yA : mA : XT && XT in Object(u) ? vA(u) : hA(u);
}
var SA = gA;
function EA(u) {
  var s = typeof u;
  return u != null && (s == "object" || s == "function");
}
var lR = EA, CA = SA, bA = lR, xA = "[object AsyncFunction]", TA = "[object Function]", wA = "[object GeneratorFunction]", RA = "[object Proxy]";
function _A(u) {
  if (!bA(u))
    return !1;
  var s = CA(u);
  return s == TA || s == wA || s == xA || s == RA;
}
var kA = _A, OA = OE, DA = OA["__core-js_shared__"], MA = DA, B1 = MA, ZT = function() {
  var u = /[^.]+$/.exec(B1 && B1.keys && B1.keys.IE_PROTO || "");
  return u ? "Symbol(src)_1." + u : "";
}();
function NA(u) {
  return !!ZT && ZT in u;
}
var LA = NA, AA = Function.prototype, zA = AA.toString;
function UA(u) {
  if (u != null) {
    try {
      return zA.call(u);
    } catch {
    }
    try {
      return u + "";
    } catch {
    }
  }
  return "";
}
var PA = UA, jA = kA, FA = LA, HA = lR, $A = PA, VA = /[\\^$.*+?()[\]{}|]/g, BA = /^\[object .+?Constructor\]$/, IA = Function.prototype, YA = Object.prototype, WA = IA.toString, QA = YA.hasOwnProperty, GA = RegExp(
  "^" + WA.call(QA).replace(VA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qA(u) {
  if (!HA(u) || FA(u))
    return !1;
  var s = jA(u) ? GA : BA;
  return s.test($A(u));
}
var KA = qA;
function XA(u, s) {
  return u == null ? void 0 : u[s];
}
var ZA = XA, JA = KA, ez = ZA;
function tz(u, s) {
  var d = ez(u, s);
  return JA(d) ? d : void 0;
}
var oR = tz, nz = oR, rz = nz(Object, "create"), Jy = rz, JT = Jy;
function az() {
  this.__data__ = JT ? JT(null) : {}, this.size = 0;
}
var iz = az;
function uz(u) {
  var s = this.has(u) && delete this.__data__[u];
  return this.size -= s ? 1 : 0, s;
}
var lz = uz, oz = Jy, sz = "__lodash_hash_undefined__", cz = Object.prototype, fz = cz.hasOwnProperty;
function dz(u) {
  var s = this.__data__;
  if (oz) {
    var d = s[u];
    return d === sz ? void 0 : d;
  }
  return fz.call(s, u) ? s[u] : void 0;
}
var pz = dz, vz = Jy, hz = Object.prototype, mz = hz.hasOwnProperty;
function yz(u) {
  var s = this.__data__;
  return vz ? s[u] !== void 0 : mz.call(s, u);
}
var gz = yz, Sz = Jy, Ez = "__lodash_hash_undefined__";
function Cz(u, s) {
  var d = this.__data__;
  return this.size += this.has(u) ? 0 : 1, d[u] = Sz && s === void 0 ? Ez : s, this;
}
var bz = Cz, xz = iz, Tz = lz, wz = pz, Rz = gz, _z = bz;
function Ed(u) {
  var s = -1, d = u == null ? 0 : u.length;
  for (this.clear(); ++s < d; ) {
    var m = u[s];
    this.set(m[0], m[1]);
  }
}
Ed.prototype.clear = xz;
Ed.prototype.delete = Tz;
Ed.prototype.get = wz;
Ed.prototype.has = Rz;
Ed.prototype.set = _z;
var kz = Ed;
function Oz() {
  this.__data__ = [], this.size = 0;
}
var Dz = Oz;
function Mz(u, s) {
  return u === s || u !== u && s !== s;
}
var Nz = Mz, Lz = Nz;
function Az(u, s) {
  for (var d = u.length; d--; )
    if (Lz(u[d][0], s))
      return d;
  return -1;
}
var eg = Az, zz = eg, Uz = Array.prototype, Pz = Uz.splice;
function jz(u) {
  var s = this.__data__, d = zz(s, u);
  if (d < 0)
    return !1;
  var m = s.length - 1;
  return d == m ? s.pop() : Pz.call(s, d, 1), --this.size, !0;
}
var Fz = jz, Hz = eg;
function $z(u) {
  var s = this.__data__, d = Hz(s, u);
  return d < 0 ? void 0 : s[d][1];
}
var Vz = $z, Bz = eg;
function Iz(u) {
  return Bz(this.__data__, u) > -1;
}
var Yz = Iz, Wz = eg;
function Qz(u, s) {
  var d = this.__data__, m = Wz(d, u);
  return m < 0 ? (++this.size, d.push([u, s])) : d[m][1] = s, this;
}
var Gz = Qz, qz = Dz, Kz = Fz, Xz = Vz, Zz = Yz, Jz = Gz;
function Cd(u) {
  var s = -1, d = u == null ? 0 : u.length;
  for (this.clear(); ++s < d; ) {
    var m = u[s];
    this.set(m[0], m[1]);
  }
}
Cd.prototype.clear = qz;
Cd.prototype.delete = Kz;
Cd.prototype.get = Xz;
Cd.prototype.has = Zz;
Cd.prototype.set = Jz;
var eU = Cd, tU = oR, nU = OE, rU = tU(nU, "Map"), aU = rU, ew = kz, iU = eU, uU = aU;
function lU() {
  this.size = 0, this.__data__ = {
    hash: new ew(),
    map: new (uU || iU)(),
    string: new ew()
  };
}
var oU = lU;
function sU(u) {
  var s = typeof u;
  return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? u !== "__proto__" : u === null;
}
var cU = sU, fU = cU;
function dU(u, s) {
  var d = u.__data__;
  return fU(s) ? d[typeof s == "string" ? "string" : "hash"] : d.map;
}
var tg = dU, pU = tg;
function vU(u) {
  var s = pU(this, u).delete(u);
  return this.size -= s ? 1 : 0, s;
}
var hU = vU, mU = tg;
function yU(u) {
  return mU(this, u).get(u);
}
var gU = yU, SU = tg;
function EU(u) {
  return SU(this, u).has(u);
}
var CU = EU, bU = tg;
function xU(u, s) {
  var d = bU(this, u), m = d.size;
  return d.set(u, s), this.size += d.size == m ? 0 : 1, this;
}
var TU = xU, wU = oU, RU = hU, _U = gU, kU = CU, OU = TU;
function bd(u) {
  var s = -1, d = u == null ? 0 : u.length;
  for (this.clear(); ++s < d; ) {
    var m = u[s];
    this.set(m[0], m[1]);
  }
}
bd.prototype.clear = wU;
bd.prototype.delete = RU;
bd.prototype.get = _U;
bd.prototype.has = kU;
bd.prototype.set = OU;
var DU = bd, sR = DU, MU = "Expected a function";
function DE(u, s) {
  if (typeof u != "function" || s != null && typeof s != "function")
    throw new TypeError(MU);
  var d = function() {
    var m = arguments, E = s ? s.apply(this, m) : m[0], S = d.cache;
    if (S.has(E))
      return S.get(E);
    var y = u.apply(this, m);
    return d.cache = S.set(E, y) || S, y;
  };
  return d.cache = new (DE.Cache || sR)(), d;
}
DE.Cache = sR;
var NU = DE;
const LU = NU;
var tw = "__react_svg_text_measurement_id";
function AU(u, s) {
  try {
    var d = document.getElementById(tw);
    if (!d) {
      var m = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      m.setAttribute("aria-hidden", "true"), m.style.width = "0", m.style.height = "0", m.style.position = "absolute", m.style.top = "-100%", m.style.left = "-100%", d = document.createElementNS("http://www.w3.org/2000/svg", "text"), d.setAttribute("id", tw), m.appendChild(d), document.body.appendChild(m);
    }
    return Object.assign(d.style, s), d.textContent = u, d.getComputedTextLength();
  } catch {
    return null;
  }
}
const nw = LU(AU, function(u, s) {
  return u + "_" + JSON.stringify(s);
});
var zU = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function UU(u, s) {
  if (u == null)
    return {};
  var d = {}, m = Object.keys(u), E, S;
  for (S = 0; S < m.length; S++)
    E = m[S], !(s.indexOf(E) >= 0) && (d[E] = u[E]);
  return d;
}
function I1(u) {
  return typeof u == "number";
}
function rw(u) {
  return (
    // number that is not NaN or Infinity
    typeof u == "number" && Number.isFinite(u) || // for percentage
    typeof u == "string"
  );
}
function PU(u) {
  var s = u.verticalAnchor, d = s === void 0 ? "end" : s, m = u.scaleToFit, E = m === void 0 ? !1 : m, S = u.angle, y = u.width, T = u.lineHeight, k = T === void 0 ? "1em" : T, D = u.capHeight, j = D === void 0 ? "0.71em" : D, A = u.children, B = u.style, K = UU(u, zU), te = K.x, fe = te === void 0 ? 0 : te, ye = K.y, Ue = ye === void 0 ? 0 : ye, oe = !rw(fe) || !rw(Ue), se = Qr.useMemo(function() {
    var pt = A == null ? [] : A.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: pt.map(function(ot) {
        return {
          word: ot,
          wordWidth: nw(ot, B) || 0
        };
      }),
      spaceWidth: nw(" ", B) || 0
    };
  }, [A, B]), Se = se.wordsWithWidth, G = se.spaceWidth, Pe = Qr.useMemo(function() {
    return oe ? [] : y || E ? Se.reduce(function(pt, ot) {
      var be = ot.word, vt = ot.wordWidth, ge = pt[pt.length - 1];
      if (ge && (y == null || E || (ge.width || 0) + vt + G < y))
        ge.words.push(be), ge.width = ge.width || 0, ge.width += vt + G;
      else {
        var Ve = {
          words: [be],
          width: vt
        };
        pt.push(Ve);
      }
      return pt;
    }, []) : [{
      words: A == null ? [] : A.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [oe, y, E, A, Se, G]), je = Qr.useMemo(function() {
    var pt = oe ? "" : V1(d === "start" ? "calc(" + j + ")" : d === "middle" ? "calc(" + (Pe.length - 1) / 2 + " * -" + k + " + (" + j + " / 2))" : "calc(" + (Pe.length - 1) + " * -" + k + ")");
    return pt;
  }, [oe, d, j, Pe.length, k]), gt = Qr.useMemo(function() {
    var pt = [];
    if (oe)
      return "";
    if (I1(fe) && I1(Ue) && I1(y) && E && Pe.length > 0) {
      var ot = Pe[0].width || 1, be = E === "shrink-only" ? Math.min(y / ot, 1) : y / ot, vt = be, ge = fe - be * fe, Ve = Ue - vt * Ue;
      pt.push("matrix(" + be + ", 0, 0, " + vt + ", " + ge + ", " + Ve + ")");
    }
    return S && pt.push("rotate(" + S + ", " + fe + ", " + Ue + ")"), pt.length > 0 ? pt.join(" ") : "";
  }, [oe, fe, Ue, y, E, Pe, S]);
  return {
    wordsByLines: Pe,
    startDy: je,
    transform: gt
  };
}
var jU = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function vE() {
  return vE = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, vE.apply(this, arguments);
}
function FU(u, s) {
  if (u == null)
    return {};
  var d = {}, m = Object.keys(u), E, S;
  for (S = 0; S < m.length; S++)
    E = m[S], !(s.indexOf(E) >= 0) && (d[E] = u[E]);
  return d;
}
var HU = {
  overflow: "visible"
};
function cR(u) {
  var s = u.dx, d = s === void 0 ? 0 : s, m = u.dy, E = m === void 0 ? 0 : m, S = u.textAnchor, y = S === void 0 ? "start" : S, T = u.innerRef, k = u.innerTextRef;
  u.verticalAnchor, u.angle;
  var D = u.lineHeight, j = D === void 0 ? "1em" : D;
  u.scaleToFit, u.capHeight, u.width;
  var A = FU(u, jU), B = A.x, K = B === void 0 ? 0 : B, te = A.fontSize, fe = PU(u), ye = fe.wordsByLines, Ue = fe.startDy, oe = fe.transform;
  return /* @__PURE__ */ ha.createElement("svg", {
    ref: T,
    x: d,
    y: E,
    fontSize: te,
    style: HU
  }, ye.length > 0 ? /* @__PURE__ */ ha.createElement("text", vE({
    ref: k,
    transform: oe
  }, A, {
    textAnchor: y
  }), ye.map(function(se, Se) {
    return /* @__PURE__ */ ha.createElement("tspan", {
      key: Se,
      x: K,
      dy: Se === 0 ? Ue : j
    }, se.words.join(" "));
  })) : null);
}
var $U = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const yi = $U;
function VU(u) {
  var s = u.labelOffset, d = u.labelProps, m = u.orientation, E = u.range, S = u.tickLabelFontSize, y = u.tickLength, T = m === yi.left || m === yi.top ? -1 : 1, k, D, j;
  if (m === yi.top || m === yi.bottom) {
    var A = m === yi.bottom && typeof d.fontSize == "number" ? d.fontSize : 0;
    k = (Number(E[0]) + Number(E[E.length - 1])) / 2, D = T * (y + s + S + A);
  } else
    k = T * ((Number(E[0]) + Number(E[E.length - 1])) / 2), D = -(y + s), j = "rotate(" + T * 90 + ")";
  return {
    x: k,
    y: D,
    transform: j
  };
}
function $v() {
  return $v = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, $v.apply(this, arguments);
}
function BU(u) {
  var s = u.hideTicks, d = u.horizontal, m = u.orientation, E = u.tickClassName, S = u.tickComponent, y = u.tickLabelProps, T = u.tickStroke, k = T === void 0 ? "#222" : T, D = u.tickTransform, j = u.ticks, A = u.strokeWidth, B = u.tickLineProps;
  return j.map(function(K) {
    var te, fe = K.value, ye = K.index, Ue = K.from, oe = K.to, se = K.formattedValue, Se = (te = y[ye]) != null ? te : {}, G = Math.max(10, typeof Se.fontSize == "number" && Se.fontSize || 0), Pe = oe.y + (d && m !== yi.top ? G : 0);
    return /* @__PURE__ */ ha.createElement(Ky, {
      key: "visx-tick-" + fe + "-" + ye,
      className: bc("visx-axis-tick", E),
      transform: D
    }, !s && /* @__PURE__ */ ha.createElement(Xw, $v({
      from: Ue,
      to: oe,
      stroke: k,
      strokeWidth: A,
      strokeLinecap: "square"
    }, B)), S ? S($v({}, Se, {
      x: oe.x,
      y: Pe,
      formattedValue: se
    })) : /* @__PURE__ */ ha.createElement(cR, $v({
      x: oe.x,
      y: Pe
    }, Se), se));
  });
}
function hE() {
  return hE = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, hE.apply(this, arguments);
}
var aw = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function IU(u) {
  var s = u.axisFromPoint, d = u.axisLineClassName, m = u.axisToPoint, E = u.hideAxisLine, S = u.hideTicks, y = u.horizontal, T = u.label, k = T === void 0 ? "" : T, D = u.labelClassName, j = u.labelOffset, A = j === void 0 ? 14 : j, B = u.labelProps, K = B === void 0 ? aw : B, te = u.orientation, fe = te === void 0 ? yi.bottom : te, ye = u.scale, Ue = u.stroke, oe = Ue === void 0 ? "#222" : Ue, se = u.strokeDasharray, Se = u.strokeWidth, G = Se === void 0 ? 1 : Se, Pe = u.tickClassName, je = u.tickComponent, gt = u.tickLineProps, pt = u.tickLabelProps, ot = pt === void 0 ? function() {
    return aw;
  } : pt, be = u.tickLength, vt = be === void 0 ? 8 : be, ge = u.tickStroke, Ve = ge === void 0 ? "#222" : ge, xt = u.tickTransform, Xe = u.ticks, Ee = u.ticksComponent, ue = Ee === void 0 ? BU : Ee, ke = Xe.map(function(F) {
    var ne = F.value, ve = F.index;
    return ot(ne, ve, Xe);
  }), R = Math.max.apply(Math, [10].concat(ke.map(function(F) {
    return typeof F.fontSize == "number" ? F.fontSize : 0;
  })));
  return /* @__PURE__ */ ha.createElement(ha.Fragment, null, ue({
    hideTicks: S,
    horizontal: y,
    orientation: fe,
    scale: ye,
    tickClassName: Pe,
    tickComponent: je,
    tickLabelProps: ke,
    tickStroke: Ve,
    tickTransform: xt,
    ticks: Xe,
    strokeWidth: G,
    tickLineProps: gt
  }), !E && /* @__PURE__ */ ha.createElement(Xw, {
    className: bc("visx-axis-line", d),
    from: s,
    to: m,
    stroke: oe,
    strokeWidth: G,
    strokeDasharray: se
  }), k && /* @__PURE__ */ ha.createElement(cR, hE({
    className: bc("visx-axis-label", D)
  }, VU({
    labelOffset: A,
    labelProps: K,
    orientation: fe,
    range: ye.range(),
    tickLabelFontSize: R,
    tickLength: vt
  }), K), k));
}
function YU(u, s) {
  s === void 0 && (s = "center");
  var d = u;
  if (s !== "start" && "bandwidth" in d) {
    var m = d.bandwidth();
    return s === "center" && (m /= 2), d.round() && (m = Math.round(m)), function(E) {
      var S = d(E);
      return typeof S == "number" ? S + m : S;
    };
  }
  return u;
}
function WU(u) {
  var s = u;
  return "tickFormat" in s ? s.tickFormat() : g2;
}
var QU = /* @__PURE__ */ function() {
  function u(d) {
    var m = d.x, E = m === void 0 ? 0 : m, S = d.y, y = S === void 0 ? 0 : S;
    this.x = 0, this.y = 0, this.x = E, this.y = y;
  }
  var s = u.prototype;
  return s.value = function() {
    return {
      x: this.x,
      y: this.y
    };
  }, s.toArray = function() {
    return [this.x, this.y];
  }, u;
}();
function Hy(u, s) {
  var d = u.x, m = u.y;
  return new QU(s ? {
    x: d,
    y: m
  } : {
    x: m,
    y: d
  });
}
function mE() {
  return mE = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, mE.apply(this, arguments);
}
var Y1 = 0;
function GU(u) {
  return u === void 0 && (u = Y1), typeof u == "number" ? {
    start: u,
    end: u
  } : mE({
    start: Y1,
    end: Y1
  }, u);
}
var qU = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function yE() {
  return yE = Object.assign ? Object.assign.bind() : function(u) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var m in d)
        Object.prototype.hasOwnProperty.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }, yE.apply(this, arguments);
}
function KU(u, s) {
  if (u == null)
    return {};
  var d = {}, m = Object.keys(u), E, S;
  for (S = 0; S < m.length; S++)
    E = m[S], !(s.indexOf(E) >= 0) && (d[E] = u[E]);
  return d;
}
function iw(u) {
  var s = u.children, d = s === void 0 ? IU : s, m = u.axisClassName, E = u.hideAxisLine, S = E === void 0 ? !1 : E, y = u.hideTicks, T = y === void 0 ? !1 : y, k = u.hideZero, D = k === void 0 ? !1 : k, j = u.left, A = j === void 0 ? 0 : j, B = u.numTicks, K = B === void 0 ? 10 : B, te = u.orientation, fe = te === void 0 ? yi.bottom : te, ye = u.rangePadding, Ue = ye === void 0 ? 0 : ye, oe = u.scale, se = u.tickFormat, Se = u.tickLength, G = Se === void 0 ? 8 : Se, Pe = u.tickValues, je = u.top, gt = je === void 0 ? 0 : je, pt = KU(u, qU), ot = se ?? WU(oe), be = fe === yi.left, vt = fe === yi.top, ge = vt || fe === yi.bottom, Ve = YU(oe), xt = be || vt ? -1 : 1, Xe = oe.range(), Ee = GU(Ue), ue = Hy({
    x: Number(Xe[0]) + 0.5 - Ee.start,
    y: 0
  }, ge), ke = Hy({
    x: Number(Xe[Xe.length - 1]) + 0.5 + Ee.end,
    y: 0
  }, ge), R = (Pe ?? y2(oe, K)).filter(function(ne) {
    return !D || ne !== 0 && ne !== "0";
  }).map(function(ne, ve) {
    return {
      value: ne,
      index: ve
    };
  }), F = R.map(function(ne) {
    var ve = ne.value, pe = ne.index, Le = m2(Ve(ve));
    return {
      value: ve,
      index: pe,
      from: Hy({
        x: Le,
        y: 0
      }, ge),
      to: Hy({
        x: Le,
        y: G * xt
      }, ge),
      formattedValue: ot(ve, pe, R)
    };
  });
  return /* @__PURE__ */ ha.createElement(Ky, {
    className: bc("visx-axis", m),
    top: gt,
    left: A
  }, d(yE({}, pt, {
    axisFromPoint: ue,
    axisToPoint: ke,
    hideAxisLine: S,
    hideTicks: T,
    hideZero: D,
    horizontal: ge,
    numTicks: K,
    orientation: fe,
    rangePadding: Ue,
    scale: oe,
    tickFormat: ot,
    tickLength: G,
    tickPosition: Ve,
    tickSign: xt,
    ticks: F
  })));
}
var XU = function() {
}, fR = typeof window < "u", ZU = fR ? Qr.useLayoutEffect : Qr.useEffect;
const JU = ZU;
var dR = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function eP() {
  var u = Qr.useState(null), s = u[0], d = u[1], m = Qr.useState(dR), E = m[0], S = m[1], y = Qr.useMemo(function() {
    return new window.ResizeObserver(function(T) {
      if (T[0]) {
        var k = T[0].contentRect, D = k.x, j = k.y, A = k.width, B = k.height, K = k.top, te = k.left, fe = k.bottom, ye = k.right;
        S({ x: D, y: j, width: A, height: B, top: K, left: te, bottom: fe, right: ye });
      }
    });
  }, []);
  return JU(function() {
    if (s)
      return y.observe(s), function() {
        y.disconnect();
      };
  }, [s]), [d, E];
}
const tP = fR && typeof window.ResizeObserver < "u" ? eP : function() {
  return [XU, dR];
};
var jv = {}, gE = {}, nP = {
  get exports() {
    return gE;
  },
  set exports(u) {
    gE = u;
  }
}, ni = {}, qy = {}, rP = {
  get exports() {
    return qy;
  },
  set exports(u) {
    qy = u;
  }
}, W1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uw;
function aP() {
  return uw || (uw = 1, function(u) {
    function s(ue, ke) {
      var R = ue.length;
      ue.push(ke);
      e:
        for (; 0 < R; ) {
          var F = R - 1 >>> 1, ne = ue[F];
          if (0 < E(ne, ke))
            ue[F] = ke, ue[R] = ne, R = F;
          else
            break e;
        }
    }
    function d(ue) {
      return ue.length === 0 ? null : ue[0];
    }
    function m(ue) {
      if (ue.length === 0)
        return null;
      var ke = ue[0], R = ue.pop();
      if (R !== ke) {
        ue[0] = R;
        e:
          for (var F = 0, ne = ue.length, ve = ne >>> 1; F < ve; ) {
            var pe = 2 * (F + 1) - 1, Le = ue[pe], Te = pe + 1, De = ue[Te];
            if (0 > E(Le, R))
              Te < ne && 0 > E(De, Le) ? (ue[F] = De, ue[Te] = R, F = Te) : (ue[F] = Le, ue[pe] = R, F = pe);
            else if (Te < ne && 0 > E(De, R))
              ue[F] = De, ue[Te] = R, F = Te;
            else
              break e;
          }
      }
      return ke;
    }
    function E(ue, ke) {
      var R = ue.sortIndex - ke.sortIndex;
      return R !== 0 ? R : ue.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      u.unstable_now = function() {
        return S.now();
      };
    } else {
      var y = Date, T = y.now();
      u.unstable_now = function() {
        return y.now() - T;
      };
    }
    var k = [], D = [], j = 1, A = null, B = 3, K = !1, te = !1, fe = !1, ye = typeof setTimeout == "function" ? setTimeout : null, Ue = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function se(ue) {
      for (var ke = d(D); ke !== null; ) {
        if (ke.callback === null)
          m(D);
        else if (ke.startTime <= ue)
          m(D), ke.sortIndex = ke.expirationTime, s(k, ke);
        else
          break;
        ke = d(D);
      }
    }
    function Se(ue) {
      if (fe = !1, se(ue), !te)
        if (d(k) !== null)
          te = !0, Xe(G);
        else {
          var ke = d(D);
          ke !== null && Ee(Se, ke.startTime - ue);
        }
    }
    function G(ue, ke) {
      te = !1, fe && (fe = !1, Ue(gt), gt = -1), K = !0;
      var R = B;
      try {
        for (se(ke), A = d(k); A !== null && (!(A.expirationTime > ke) || ue && !be()); ) {
          var F = A.callback;
          if (typeof F == "function") {
            A.callback = null, B = A.priorityLevel;
            var ne = F(A.expirationTime <= ke);
            ke = u.unstable_now(), typeof ne == "function" ? A.callback = ne : A === d(k) && m(k), se(ke);
          } else
            m(k);
          A = d(k);
        }
        if (A !== null)
          var ve = !0;
        else {
          var pe = d(D);
          pe !== null && Ee(Se, pe.startTime - ke), ve = !1;
        }
        return ve;
      } finally {
        A = null, B = R, K = !1;
      }
    }
    var Pe = !1, je = null, gt = -1, pt = 5, ot = -1;
    function be() {
      return !(u.unstable_now() - ot < pt);
    }
    function vt() {
      if (je !== null) {
        var ue = u.unstable_now();
        ot = ue;
        var ke = !0;
        try {
          ke = je(!0, ue);
        } finally {
          ke ? ge() : (Pe = !1, je = null);
        }
      } else
        Pe = !1;
    }
    var ge;
    if (typeof oe == "function")
      ge = function() {
        oe(vt);
      };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), xt = Ve.port2;
      Ve.port1.onmessage = vt, ge = function() {
        xt.postMessage(null);
      };
    } else
      ge = function() {
        ye(vt, 0);
      };
    function Xe(ue) {
      je = ue, Pe || (Pe = !0, ge());
    }
    function Ee(ue, ke) {
      gt = ye(function() {
        ue(u.unstable_now());
      }, ke);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(ue) {
      ue.callback = null;
    }, u.unstable_continueExecution = function() {
      te || K || (te = !0, Xe(G));
    }, u.unstable_forceFrameRate = function(ue) {
      0 > ue || 125 < ue ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pt = 0 < ue ? Math.floor(1e3 / ue) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, u.unstable_getFirstCallbackNode = function() {
      return d(k);
    }, u.unstable_next = function(ue) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = B;
      }
      var R = B;
      B = ke;
      try {
        return ue();
      } finally {
        B = R;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(ue, ke) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ue = 3;
      }
      var R = B;
      B = ue;
      try {
        return ke();
      } finally {
        B = R;
      }
    }, u.unstable_scheduleCallback = function(ue, ke, R) {
      var F = u.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? F + R : F) : R = F, ue) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = R + ne, ue = { id: j++, callback: ke, priorityLevel: ue, startTime: R, expirationTime: ne, sortIndex: -1 }, R > F ? (ue.sortIndex = R, s(D, ue), d(k) === null && ue === d(D) && (fe ? (Ue(gt), gt = -1) : fe = !0, Ee(Se, R - F))) : (ue.sortIndex = ne, s(k, ue), te || K || (te = !0, Xe(G))), ue;
    }, u.unstable_shouldYield = be, u.unstable_wrapCallback = function(ue) {
      var ke = B;
      return function() {
        var R = B;
        B = ke;
        try {
          return ue.apply(this, arguments);
        } finally {
          B = R;
        }
      };
    };
  }(W1)), W1;
}
var Q1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lw;
function iP() {
  return lw || (lw = 1, function(u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, d = !1, m = 5;
      function E(xe, Ze) {
        var Tt = xe.length;
        xe.push(Ze), T(xe, Ze, Tt);
      }
      function S(xe) {
        return xe.length === 0 ? null : xe[0];
      }
      function y(xe) {
        if (xe.length === 0)
          return null;
        var Ze = xe[0], Tt = xe.pop();
        return Tt !== Ze && (xe[0] = Tt, k(xe, Tt, 0)), Ze;
      }
      function T(xe, Ze, Tt) {
        for (var Wt = Tt; Wt > 0; ) {
          var Gt = Wt - 1 >>> 1, zn = xe[Gt];
          if (D(zn, Ze) > 0)
            xe[Gt] = Ze, xe[Wt] = zn, Wt = Gt;
          else
            return;
        }
      }
      function k(xe, Ze, Tt) {
        for (var Wt = Tt, Gt = xe.length, zn = Gt >>> 1; Wt < zn; ) {
          var xn = (Wt + 1) * 2 - 1, Cr = xe[xn], en = xn + 1, Nr = xe[en];
          if (D(Cr, Ze) < 0)
            en < Gt && D(Nr, Cr) < 0 ? (xe[Wt] = Nr, xe[en] = Ze, Wt = en) : (xe[Wt] = Cr, xe[xn] = Ze, Wt = xn);
          else if (en < Gt && D(Nr, Ze) < 0)
            xe[Wt] = Nr, xe[en] = Ze, Wt = en;
          else
            return;
        }
      }
      function D(xe, Ze) {
        var Tt = xe.sortIndex - Ze.sortIndex;
        return Tt !== 0 ? Tt : xe.id - Ze.id;
      }
      var j = 1, A = 2, B = 3, K = 4, te = 5;
      function fe(xe, Ze) {
      }
      var ye = typeof performance == "object" && typeof performance.now == "function";
      if (ye) {
        var Ue = performance;
        u.unstable_now = function() {
          return Ue.now();
        };
      } else {
        var oe = Date, se = oe.now();
        u.unstable_now = function() {
          return oe.now() - se;
        };
      }
      var Se = 1073741823, G = -1, Pe = 250, je = 5e3, gt = 1e4, pt = Se, ot = [], be = [], vt = 1, ge = null, Ve = B, xt = !1, Xe = !1, Ee = !1, ue = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function F(xe) {
        for (var Ze = S(be); Ze !== null; ) {
          if (Ze.callback === null)
            y(be);
          else if (Ze.startTime <= xe)
            y(be), Ze.sortIndex = Ze.expirationTime, E(ot, Ze);
          else
            return;
          Ze = S(be);
        }
      }
      function ne(xe) {
        if (Ee = !1, F(xe), !Xe)
          if (S(ot) !== null)
            Xe = !0, Xr(ve);
          else {
            var Ze = S(be);
            Ze !== null && bn(ne, Ze.startTime - xe);
          }
      }
      function ve(xe, Ze) {
        Xe = !1, Ee && (Ee = !1, Mr()), xt = !0;
        var Tt = Ve;
        try {
          var Wt;
          if (!d)
            return pe(xe, Ze);
        } finally {
          ge = null, Ve = Tt, xt = !1;
        }
      }
      function pe(xe, Ze) {
        var Tt = Ze;
        for (F(Tt), ge = S(ot); ge !== null && !s && !(ge.expirationTime > Tt && (!xe || qr())); ) {
          var Wt = ge.callback;
          if (typeof Wt == "function") {
            ge.callback = null, Ve = ge.priorityLevel;
            var Gt = ge.expirationTime <= Tt, zn = Wt(Gt);
            Tt = u.unstable_now(), typeof zn == "function" ? ge.callback = zn : ge === S(ot) && y(ot), F(Tt);
          } else
            y(ot);
          ge = S(ot);
        }
        if (ge !== null)
          return !0;
        var xn = S(be);
        return xn !== null && bn(ne, xn.startTime - Tt), !1;
      }
      function Le(xe, Ze) {
        switch (xe) {
          case j:
          case A:
          case B:
          case K:
          case te:
            break;
          default:
            xe = B;
        }
        var Tt = Ve;
        Ve = xe;
        try {
          return Ze();
        } finally {
          Ve = Tt;
        }
      }
      function Te(xe) {
        var Ze;
        switch (Ve) {
          case j:
          case A:
          case B:
            Ze = B;
            break;
          default:
            Ze = Ve;
            break;
        }
        var Tt = Ve;
        Ve = Ze;
        try {
          return xe();
        } finally {
          Ve = Tt;
        }
      }
      function De(xe) {
        var Ze = Ve;
        return function() {
          var Tt = Ve;
          Ve = Ze;
          try {
            return xe.apply(this, arguments);
          } finally {
            Ve = Tt;
          }
        };
      }
      function Me(xe, Ze, Tt) {
        var Wt = u.unstable_now(), Gt;
        if (typeof Tt == "object" && Tt !== null) {
          var zn = Tt.delay;
          typeof zn == "number" && zn > 0 ? Gt = Wt + zn : Gt = Wt;
        } else
          Gt = Wt;
        var xn;
        switch (xe) {
          case j:
            xn = G;
            break;
          case A:
            xn = Pe;
            break;
          case te:
            xn = pt;
            break;
          case K:
            xn = gt;
            break;
          case B:
          default:
            xn = je;
            break;
        }
        var Cr = Gt + xn, en = {
          id: vt++,
          callback: Ze,
          priorityLevel: xe,
          startTime: Gt,
          expirationTime: Cr,
          sortIndex: -1
        };
        return Gt > Wt ? (en.sortIndex = Gt, E(be, en), S(ot) === null && en === S(be) && (Ee ? Mr() : Ee = !0, bn(ne, Gt - Wt))) : (en.sortIndex = Cr, E(ot, en), !Xe && !xt && (Xe = !0, Xr(ve))), en;
      }
      function Ge() {
      }
      function dt() {
        !Xe && !xt && (Xe = !0, Xr(ve));
      }
      function Yt() {
        return S(ot);
      }
      function Ce(xe) {
        xe.callback = null;
      }
      function Pt() {
        return Ve;
      }
      var Cn = !1, On = null, In = -1, An = m, Gr = -1;
      function qr() {
        var xe = u.unstable_now() - Gr;
        return !(xe < An);
      }
      function Xn() {
      }
      function Sr(xe) {
        if (xe < 0 || xe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        xe > 0 ? An = Math.floor(1e3 / xe) : An = m;
      }
      var Kr = function() {
        if (On !== null) {
          var xe = u.unstable_now();
          Gr = xe;
          var Ze = !0, Tt = !0;
          try {
            Tt = On(Ze, xe);
          } finally {
            Tt ? Er() : (Cn = !1, On = null);
          }
        } else
          Cn = !1;
      }, Er;
      if (typeof R == "function")
        Er = function() {
          R(Kr);
        };
      else if (typeof MessageChannel < "u") {
        var ya = new MessageChannel(), ur = ya.port2;
        ya.port1.onmessage = Kr, Er = function() {
          ur.postMessage(null);
        };
      } else
        Er = function() {
          ue(Kr, 0);
        };
      function Xr(xe) {
        On = xe, Cn || (Cn = !0, Er());
      }
      function bn(xe, Ze) {
        In = ue(function() {
          xe(u.unstable_now());
        }, Ze);
      }
      function Mr() {
        ke(In), In = -1;
      }
      var gi = Xn, ga = null;
      u.unstable_IdlePriority = te, u.unstable_ImmediatePriority = j, u.unstable_LowPriority = K, u.unstable_NormalPriority = B, u.unstable_Profiling = ga, u.unstable_UserBlockingPriority = A, u.unstable_cancelCallback = Ce, u.unstable_continueExecution = dt, u.unstable_forceFrameRate = Sr, u.unstable_getCurrentPriorityLevel = Pt, u.unstable_getFirstCallbackNode = Yt, u.unstable_next = Te, u.unstable_pauseExecution = Ge, u.unstable_requestPaint = gi, u.unstable_runWithPriority = Le, u.unstable_scheduleCallback = Me, u.unstable_shouldYield = qr, u.unstable_wrapCallback = De, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Q1)), Q1;
}
var ow;
function pR() {
  return ow || (ow = 1, function(u) {
    process.env.NODE_ENV === "production" ? u.exports = aP() : u.exports = iP();
  }(rP)), qy;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sw;
function uP() {
  if (sw)
    return ni;
  sw = 1;
  var u = Qr, s = pR();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var m = /* @__PURE__ */ new Set(), E = {};
  function S(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (E[n] = r, n = 0; n < r.length; n++)
      m.add(r[n]);
  }
  var T = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, j = {}, A = {};
  function B(n) {
    return k.call(A, n) ? !0 : k.call(j, n) ? !1 : D.test(n) ? A[n] = !0 : (j[n] = !0, !1);
  }
  function K(n, r, l, c) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function te(n, r, l, c) {
    if (r === null || typeof r > "u" || K(n, r, l, c))
      return !0;
    if (c)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function fe(n, r, l, c, p, h, x) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = x;
  }
  var ye = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ye[n] = new fe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ye[r] = new fe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ye[n] = new fe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ye[n] = new fe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ye[n] = new fe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ye[n] = new fe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ye[n] = new fe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ye[n] = new fe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ye[n] = new fe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ue = /[\-:]([a-z])/g;
  function oe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ue,
      oe
    );
    ye[r] = new fe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ue, oe);
    ye[r] = new fe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ue, oe);
    ye[r] = new fe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ye[n] = new fe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ye.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ye[n] = new fe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function se(n, r, l, c) {
    var p = ye.hasOwnProperty(r) ? ye[r] : null;
    (p !== null ? p.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (te(r, l, p, c) && (l = null), c || p === null ? B(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : p.mustUseProperty ? n[p.propertyName] = l === null ? p.type === 3 ? !1 : "" : l : (r = p.attributeName, c = p.attributeNamespace, l === null ? n.removeAttribute(r) : (p = p.type, l = p === 3 || p === 4 && l === !0 ? "" : "" + l, c ? n.setAttributeNS(c, r, l) : n.setAttribute(r, l))));
  }
  var Se = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, G = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), gt = Symbol.for("react.strict_mode"), pt = Symbol.for("react.profiler"), ot = Symbol.for("react.provider"), be = Symbol.for("react.context"), vt = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), ue = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = ue && n[ue] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, F;
  function ne(n) {
    if (F === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        F = r && r[1] || "";
      }
    return `
` + F + n;
  }
  var ve = !1;
  function pe(n, r) {
    if (!n || ve)
      return "";
    ve = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (q) {
            var c = q;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (q) {
            c = q;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (q) {
          c = q;
        }
        n();
      }
    } catch (q) {
      if (q && c && typeof q.stack == "string") {
        for (var p = q.stack.split(`
`), h = c.stack.split(`
`), x = p.length - 1, O = h.length - 1; 1 <= x && 0 <= O && p[x] !== h[O]; )
          O--;
        for (; 1 <= x && 0 <= O; x--, O--)
          if (p[x] !== h[O]) {
            if (x !== 1 || O !== 1)
              do
                if (x--, O--, 0 > O || p[x] !== h[O]) {
                  var L = `
` + p[x].replace(" at new ", " at ");
                  return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
                }
              while (1 <= x && 0 <= O);
            break;
          }
      }
    } finally {
      ve = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ne(n) : "";
  }
  function Le(n) {
    switch (n.tag) {
      case 5:
        return ne(n.type);
      case 16:
        return ne("Lazy");
      case 13:
        return ne("Suspense");
      case 19:
        return ne("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = pe(n.type, !1), n;
      case 11:
        return n = pe(n.type.render, !1), n;
      case 1:
        return n = pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Te(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case je:
        return "Fragment";
      case Pe:
        return "Portal";
      case pt:
        return "Profiler";
      case gt:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Ve:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case be:
          return (n.displayName || "Context") + ".Consumer";
        case ot:
          return (n._context.displayName || "Context") + ".Provider";
        case vt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case xt:
          return r = n.displayName || null, r !== null ? r : Te(n.type) || "Memo";
        case Xe:
          r = n._payload, n = n._init;
          try {
            return Te(n(r));
          } catch {
          }
      }
    return null;
  }
  function De(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Te(r);
      case 8:
        return r === gt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Me(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ge(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function dt(n) {
    var r = Ge(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var p = l.get, h = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(x) {
        c = "" + x, h.call(this, x);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(x) {
        c = "" + x;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Yt(n) {
    n._valueTracker || (n._valueTracker = dt(n));
  }
  function Ce(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), c = "";
    return n && (c = Ge(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Pt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Cn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function On(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    l = Me(r.value != null ? r.value : l), n._wrapperState = { initialChecked: c, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function In(n, r) {
    r = r.checked, r != null && se(n, "checked", r, !1);
  }
  function An(n, r) {
    In(n, r);
    var l = Me(r.value), c = r.type;
    if (l != null)
      c === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? qr(n, r.type, l) : r.hasOwnProperty("defaultValue") && qr(n, r.type, Me(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Gr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function qr(n, r, l) {
    (r !== "number" || Pt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Xn = Array.isArray;
  function Sr(n, r, l, c) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < l.length; p++)
        r["$" + l[p]] = !0;
      for (l = 0; l < n.length; l++)
        p = r.hasOwnProperty("$" + n[l].value), n[l].selected !== p && (n[l].selected = p), p && c && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Me(l), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === l) {
          n[p].selected = !0, c && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(d(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(d(92));
        if (Xn(l)) {
          if (1 < l.length)
            throw Error(d(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Me(l) };
  }
  function ya(n, r) {
    var l = Me(r.value), c = Me(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), c != null && (n.defaultValue = "" + c);
  }
  function ur(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Xr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function bn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Xr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Mr, gi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, c, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, c, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Mr = Mr || document.createElement("div"), Mr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Mr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ga(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    Ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function Tt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function Wt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var c = l.indexOf("--") === 0, p = Tt(l, r[l], c);
        l === "float" && (l = "cssFloat"), c ? n.setProperty(l, p) : n[l] = p;
      }
  }
  var Gt = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function zn(n, r) {
    if (r) {
      if (Gt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(d(62));
    }
  }
  function xn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Cr = null;
  function en(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Nr = null, qt = null, Kt = null;
  function ai(n) {
    if (n = Ms(n)) {
      if (typeof Nr != "function")
        throw Error(d(280));
      var r = n.stateNode;
      r && (r = et(r), Nr(n.stateNode, n.type, r));
    }
  }
  function Ua(n) {
    qt ? Kt ? Kt.push(n) : Kt = [n] : qt = n;
  }
  function Su() {
    if (qt) {
      var n = qt, r = Kt;
      if (Kt = qt = null, ai(n), r)
        for (n = 0; n < r.length; n++)
          ai(r[n]);
    }
  }
  function dl(n, r) {
    return n(r);
  }
  function ao() {
  }
  var Hi = !1;
  function Eu(n, r, l) {
    if (Hi)
      return n(r, l);
    Hi = !0;
    try {
      return dl(n, r, l);
    } finally {
      Hi = !1, (qt !== null || Kt !== null) && (ao(), Su());
    }
  }
  function Sa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var c = et(l);
    if (c === null)
      return null;
    l = c[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(d(231, r, typeof l));
    return l;
  }
  var Si = !1;
  if (T)
    try {
      var Ea = {};
      Object.defineProperty(Ea, "passive", { get: function() {
        Si = !0;
      } }), window.addEventListener("test", Ea, Ea), window.removeEventListener("test", Ea, Ea);
    } catch {
      Si = !1;
    }
  function Ei(n, r, l, c, p, h, x, O, L) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, q);
    } catch (le) {
      this.onError(le);
    }
  }
  var Lr = !1, Ca = null, Ci = !1, N = null, ae = { onError: function(n) {
    Lr = !0, Ca = n;
  } };
  function we(n, r, l, c, p, h, x, O, L) {
    Lr = !1, Ca = null, Ei.apply(ae, arguments);
  }
  function Fe(n, r, l, c, p, h, x, O, L) {
    if (we.apply(this, arguments), Lr) {
      if (Lr) {
        var q = Ca;
        Lr = !1, Ca = null;
      } else
        throw Error(d(198));
      Ci || (Ci = !0, N = q);
    }
  }
  function St(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Nt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Et(n) {
    if (St(n) !== n)
      throw Error(d(188));
  }
  function tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = St(n), r === null)
        throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var l = n, c = r; ; ) {
      var p = l.return;
      if (p === null)
        break;
      var h = p.alternate;
      if (h === null) {
        if (c = p.return, c !== null) {
          l = c;
          continue;
        }
        break;
      }
      if (p.child === h.child) {
        for (h = p.child; h; ) {
          if (h === l)
            return Et(p), n;
          if (h === c)
            return Et(p), r;
          h = h.sibling;
        }
        throw Error(d(188));
      }
      if (l.return !== c.return)
        l = p, c = h;
      else {
        for (var x = !1, O = p.child; O; ) {
          if (O === l) {
            x = !0, l = p, c = h;
            break;
          }
          if (O === c) {
            x = !0, c = p, l = h;
            break;
          }
          O = O.sibling;
        }
        if (!x) {
          for (O = h.child; O; ) {
            if (O === l) {
              x = !0, l = h, c = p;
              break;
            }
            if (O === c) {
              x = !0, c = h, l = p;
              break;
            }
            O = O.sibling;
          }
          if (!x)
            throw Error(d(189));
        }
      }
      if (l.alternate !== c)
        throw Error(d(190));
    }
    if (l.tag !== 3)
      throw Error(d(188));
    return l.stateNode.current === l ? n : r;
  }
  function Fn(n) {
    return n = tt(n), n !== null ? fn(n) : null;
  }
  function fn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = fn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = s.unstable_scheduleCallback, lr = s.unstable_cancelCallback, bi = s.unstable_shouldYield, io = s.unstable_requestPaint, jt = s.unstable_now, xd = s.unstable_getCurrentPriorityLevel, ii = s.unstable_ImmediatePriority, Rt = s.unstable_UserBlockingPriority, xi = s.unstable_NormalPriority, Cu = s.unstable_LowPriority, uo = s.unstable_IdlePriority, bu = null, Zr = null;
  function vs(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function")
      try {
        Zr.onCommitFiberRoot(bu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ar = Math.clz32 ? Math.clz32 : Rc, hs = Math.log, ms = Math.LN2;
  function Rc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (hs(n) / ms | 0) | 0;
  }
  var lo = 64, xu = 4194304;
  function ui(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function zr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var c = 0, p = n.suspendedLanes, h = n.pingedLanes, x = l & 268435455;
    if (x !== 0) {
      var O = x & ~p;
      O !== 0 ? c = ui(O) : (h &= x, h !== 0 && (c = ui(h)));
    } else
      x = l & ~p, x !== 0 ? c = ui(x) : h !== 0 && (c = ui(h));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & p) && (p = c & -c, h = r & -r, p >= h || p === 16 && (h & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        l = 31 - Ar(r), p = 1 << l, c |= n[l], r &= ~p;
    return c;
  }
  function Tu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wu(n, r) {
    for (var l = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var x = 31 - Ar(h), O = 1 << x, L = p[x];
      L === -1 ? (!(O & l) || O & c) && (p[x] = Tu(O, r)) : L <= r && (n.expiredLanes |= O), h &= ~O;
    }
  }
  function Ru(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function oo() {
    var n = lo;
    return lo <<= 1, !(lo & 4194240) && (lo = 64), n;
  }
  function so(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function $i(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ar(r), n[r] = l;
  }
  function Td(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var p = 31 - Ar(l), h = 1 << p;
      r[p] = 0, c[p] = -1, n[p] = -1, l &= ~h;
    }
  }
  function Ti(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var c = 31 - Ar(l), p = 1 << c;
      p & r | n[c] & r && (n[c] |= r), l &= ~p;
    }
  }
  var Vt = 0;
  function co(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var pl, fo, Ft, po, vo, ht = !1, vl = [], Tn = null, Jr = null, Ur = null, _u = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), Xt = [], _c = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jr = null;
        break;
      case "mouseover":
      case "mouseout":
        Ur = null;
        break;
      case "pointerover":
      case "pointerout":
        _u.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(r.pointerId);
    }
  }
  function Zn(n, r, l, c, p, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: c, nativeEvent: h, targetContainers: [p] }, r !== null && (r = Ms(r), r !== null && fo(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function wi(n, r, l, c, p) {
    switch (r) {
      case "focusin":
        return Tn = Zn(Tn, n, r, l, c, p), !0;
      case "dragenter":
        return Jr = Zn(Jr, n, r, l, c, p), !0;
      case "mouseover":
        return Ur = Zn(Ur, n, r, l, c, p), !0;
      case "pointerover":
        var h = p.pointerId;
        return _u.set(h, Zn(_u.get(h) || null, n, r, l, c, p)), !0;
      case "gotpointercapture":
        return h = p.pointerId, Dn.set(h, Zn(Dn.get(h) || null, n, r, l, c, p)), !0;
    }
    return !1;
  }
  function kc(n) {
    var r = Ha(n.target);
    if (r !== null) {
      var l = St(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Nt(l), r !== null) {
            n.blockedOn = r, vo(n.priority, function() {
              Ft(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Vi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = mo(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var c = new l.constructor(l.type, l);
        Cr = c, l.target.dispatchEvent(c), Cr = null;
      } else
        return r = Ms(l), r !== null && fo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ku(n, r, l) {
    Vi(n) && l.delete(r);
  }
  function Oc() {
    ht = !1, Tn !== null && Vi(Tn) && (Tn = null), Jr !== null && Vi(Jr) && (Jr = null), Ur !== null && Vi(Ur) && (Ur = null), _u.forEach(ku), Dn.forEach(ku);
  }
  function Pa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ht || (ht = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Oc)));
  }
  function Ou(n) {
    function r(p) {
      return Pa(p, n);
    }
    if (0 < vl.length) {
      Pa(vl[0], n);
      for (var l = 1; l < vl.length; l++) {
        var c = vl[l];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (Tn !== null && Pa(Tn, n), Jr !== null && Pa(Jr, n), Ur !== null && Pa(Ur, n), _u.forEach(r), Dn.forEach(r), l = 0; l < Xt.length; l++)
      c = Xt[l], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Xt.length && (l = Xt[0], l.blockedOn === null); )
      kc(l), l.blockedOn === null && Xt.shift();
  }
  var Du = Se.ReactCurrentBatchConfig, ja = !0;
  function ho(n, r, l, c) {
    var p = Vt, h = Du.transition;
    Du.transition = null;
    try {
      Vt = 1, Nu(n, r, l, c);
    } finally {
      Vt = p, Du.transition = h;
    }
  }
  function Mu(n, r, l, c) {
    var p = Vt, h = Du.transition;
    Du.transition = null;
    try {
      Vt = 4, Nu(n, r, l, c);
    } finally {
      Vt = p, Du.transition = h;
    }
  }
  function Nu(n, r, l, c) {
    if (ja) {
      var p = mo(n, r, l, c);
      if (p === null)
        jc(n, r, c, hl, l), ea(n, c);
      else if (wi(p, n, r, l, c))
        c.stopPropagation();
      else if (ea(n, c), r & 4 && -1 < _c.indexOf(n)) {
        for (; p !== null; ) {
          var h = Ms(p);
          if (h !== null && pl(h), h = mo(n, r, l, c), h === null && jc(n, r, c, hl, l), h === p)
            break;
          p = h;
        }
        p !== null && c.stopPropagation();
      } else
        jc(n, r, c, null, l);
    }
  }
  var hl = null;
  function mo(n, r, l, c) {
    if (hl = null, n = en(c), n = Ha(n), n !== null)
      if (r = St(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Nt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return hl = n, null;
  }
  function ys(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (xd()) {
          case ii:
            return 1;
          case Rt:
            return 4;
          case xi:
          case Cu:
            return 16;
          case uo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var li = null, b = null, M = null;
  function W() {
    if (M)
      return M;
    var n, r = b, l = r.length, c, p = "value" in li ? li.value : li.textContent, h = p.length;
    for (n = 0; n < l && r[n] === p[n]; n++)
      ;
    var x = l - n;
    for (c = 1; c <= x && r[l - c] === p[h - c]; c++)
      ;
    return M = p.slice(n, 1 < c ? 1 - c : void 0);
  }
  function X(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function he() {
    return !0;
  }
  function it() {
    return !1;
  }
  function Oe(n) {
    function r(l, c, p, h, x) {
      this._reactName = l, this._targetInst = p, this.type = c, this.nativeEvent = h, this.target = x, this.currentTarget = null;
      for (var O in n)
        n.hasOwnProperty(O) && (l = n[O], this[O] = l ? l(h) : h[O]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? he : it, this.isPropagationStopped = it, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = he);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = he);
    }, persist: function() {
    }, isPersistent: he }), r;
  }
  var rt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _t = Oe(rt), Ht = R({}, rt, { view: 0, detail: 0 }), ln = Oe(Ht), tn, on, pn, Mt = R({}, Ht, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Od, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== pn && (pn && n.type === "mousemove" ? (tn = n.screenX - pn.screenX, on = n.screenY - pn.screenY) : on = tn = 0, pn = n), tn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : on;
  } }), Bi = Oe(Mt), yo = R({}, Mt, { dataTransfer: 0 }), gs = Oe(yo), wd = R({}, Ht, { relatedTarget: 0 }), oi = Oe(wd), Ss = R({}, rt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Es = Oe(Ss), Rd = R({}, rt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ng = Oe(Rd), rg = R({}, rt, { data: 0 }), _d = Oe(rg), kd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Gv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Kv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qv[n]) ? !!r[n] : !1;
  }
  function Od() {
    return Kv;
  }
  var Ii = R({}, Ht, { key: function(n) {
    if (n.key) {
      var r = kd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = X(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Od, charCode: function(n) {
    return n.type === "keypress" ? X(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? X(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ag = Oe(Ii), Dd = R({}, Mt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dc = Oe(Dd), Md = R({}, Ht, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Od }), ig = Oe(Md), Mc = R({}, rt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xv = Oe(Mc), ta = R({}, Mt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = Oe(ta), Hn = [9, 13, 27, 32], si = T && "CompositionEvent" in window, ml = null;
  T && "documentMode" in document && (ml = document.documentMode);
  var Nc = T && "TextEvent" in window && !ml, Zv = T && (!si || ml && 8 < ml && 11 >= ml), go = String.fromCharCode(32), Jv = !1;
  function eh(n, r) {
    switch (n) {
      case "keyup":
        return Hn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Lc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var So = !1;
  function ug(n, r) {
    switch (n) {
      case "compositionend":
        return Lc(r);
      case "keypress":
        return r.which !== 32 ? null : (Jv = !0, go);
      case "textInput":
        return n = r.data, n === go && Jv ? null : n;
      default:
        return null;
    }
  }
  function lg(n, r) {
    if (So)
      return n === "compositionend" || !si && eh(n, r) ? (n = W(), M = b = li = null, So = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Zv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var th = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!th[n.type] : r === "textarea";
  }
  function rh(n, r, l, c) {
    Ua(c), r = ks(r, "onChange"), 0 < r.length && (l = new _t("onChange", "change", null, l, c), n.push({ event: l, listeners: r }));
  }
  var Cs = null, Eo = null;
  function Co(n) {
    Pc(n, 0);
  }
  function bo(n) {
    var r = To(n);
    if (Ce(r))
      return n;
  }
  function ah(n, r) {
    if (n === "change")
      return r;
  }
  var Nd = !1;
  if (T) {
    var Ld;
    if (T) {
      var Ad = "oninput" in document;
      if (!Ad) {
        var ih = document.createElement("div");
        ih.setAttribute("oninput", "return;"), Ad = typeof ih.oninput == "function";
      }
      Ld = Ad;
    } else
      Ld = !1;
    Nd = Ld && (!document.documentMode || 9 < document.documentMode);
  }
  function uh() {
    Cs && (Cs.detachEvent("onpropertychange", lh), Eo = Cs = null);
  }
  function lh(n) {
    if (n.propertyName === "value" && bo(Eo)) {
      var r = [];
      rh(r, Eo, n, en(n)), Eu(Co, r);
    }
  }
  function og(n, r, l) {
    n === "focusin" ? (uh(), Cs = r, Eo = l, Cs.attachEvent("onpropertychange", lh)) : n === "focusout" && uh();
  }
  function sg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return bo(Eo);
  }
  function cg(n, r) {
    if (n === "click")
      return bo(r);
  }
  function oh(n, r) {
    if (n === "input" || n === "change")
      return bo(r);
  }
  function fg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Fa = typeof Object.is == "function" ? Object.is : fg;
  function bs(n, r) {
    if (Fa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), c = Object.keys(r);
    if (l.length !== c.length)
      return !1;
    for (c = 0; c < l.length; c++) {
      var p = l[c];
      if (!k.call(r, p) || !Fa(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function sh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function ch(n, r) {
    var l = sh(n);
    n = 0;
    for (var c; l; ) {
      if (l.nodeType === 3) {
        if (c = n + l.textContent.length, n <= r && c >= r)
          return { node: l, offset: r - n };
        n = c;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = sh(l);
    }
  }
  function fh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? fh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ac() {
    for (var n = window, r = Pt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = Pt(n.document);
    }
    return r;
  }
  function Wi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function zc(n) {
    var r = Ac(), l = n.focusedElem, c = n.selectionRange;
    if (r !== l && l && l.ownerDocument && fh(l.ownerDocument.documentElement, l)) {
      if (c !== null && Wi(l)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = l.textContent.length, h = Math.min(c.start, p);
          c = c.end === void 0 ? h : Math.min(c.end, p), !n.extend && h > c && (p = c, c = h, h = p), p = ch(l, h);
          var x = ch(
            l,
            c
          );
          p && x && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), h > c ? (n.addRange(r), n.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var dh = T && "documentMode" in document && 11 >= document.documentMode, ci = null, zd = null, xs = null, Ud = !1;
  function ph(n, r, l) {
    var c = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ud || ci == null || ci !== Pt(c) || (c = ci, "selectionStart" in c && Wi(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), xs && bs(xs, c) || (xs = c, c = ks(zd, "onSelect"), 0 < c.length && (r = new _t("onSelect", "select", null, r, l), n.push({ event: r, listeners: c }), r.target = ci)));
  }
  function Uc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var yl = { animationend: Uc("Animation", "AnimationEnd"), animationiteration: Uc("Animation", "AnimationIteration"), animationstart: Uc("Animation", "AnimationStart"), transitionend: Uc("Transition", "TransitionEnd") }, Pd = {}, jd = {};
  T && (jd = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function Jn(n) {
    if (Pd[n])
      return Pd[n];
    if (!yl[n])
      return n;
    var r = yl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in jd)
        return Pd[n] = r[l];
    return n;
  }
  var Fd = Jn("animationend"), vh = Jn("animationiteration"), hh = Jn("animationstart"), mh = Jn("transitionend"), yh = /* @__PURE__ */ new Map(), gh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qi(n, r) {
    yh.set(n, r), S(r, [n]);
  }
  for (var Ts = 0; Ts < gh.length; Ts++) {
    var gl = gh[Ts], dg = gl.toLowerCase(), ws = gl[0].toUpperCase() + gl.slice(1);
    Qi(dg, "on" + ws);
  }
  Qi(Fd, "onAnimationEnd"), Qi(vh, "onAnimationIteration"), Qi(hh, "onAnimationStart"), Qi("dblclick", "onDoubleClick"), Qi("focusin", "onFocus"), Qi("focusout", "onBlur"), Qi(mh, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));
  function Sh(n, r, l) {
    var c = n.type || "unknown-event";
    n.currentTarget = l, Fe(c, r, void 0, n), n.currentTarget = null;
  }
  function Pc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var c = n[l], p = c.event;
      c = c.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var x = c.length - 1; 0 <= x; x--) {
            var O = c[x], L = O.instance, q = O.currentTarget;
            if (O = O.listener, L !== h && p.isPropagationStopped())
              break e;
            Sh(p, O, q), h = L;
          }
        else
          for (x = 0; x < c.length; x++) {
            if (O = c[x], L = O.instance, q = O.currentTarget, O = O.listener, L !== h && p.isPropagationStopped())
              break e;
            Sh(p, O, q), h = L;
          }
      }
    }
    if (Ci)
      throw n = N, Ci = !1, N = null, n;
  }
  function sn(n, r) {
    var l = r[Wd];
    l === void 0 && (l = r[Wd] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    l.has(c) || (Eh(r, n, 2, !1), l.add(c));
  }
  function Lu(n, r, l) {
    var c = 0;
    r && (c |= 4), Eh(l, n, c, r);
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function xo(n) {
    if (!n[Gi]) {
      n[Gi] = !0, m.forEach(function(l) {
        l !== "selectionchange" && (pg.has(l) || Lu(l, !1, n), Lu(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Gi] || (r[Gi] = !0, Lu("selectionchange", !1, r));
    }
  }
  function Eh(n, r, l, c) {
    switch (ys(r)) {
      case 1:
        var p = ho;
        break;
      case 4:
        p = Mu;
        break;
      default:
        p = Nu;
    }
    l = p.bind(null, r, l, n), p = void 0, !Si || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), c ? p !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: p }) : n.addEventListener(r, l, !0) : p !== void 0 ? n.addEventListener(r, l, { passive: p }) : n.addEventListener(r, l, !1);
  }
  function jc(n, r, l, c, p) {
    var h = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var x = c.tag;
          if (x === 3 || x === 4) {
            var O = c.stateNode.containerInfo;
            if (O === p || O.nodeType === 8 && O.parentNode === p)
              break;
            if (x === 4)
              for (x = c.return; x !== null; ) {
                var L = x.tag;
                if ((L === 3 || L === 4) && (L = x.stateNode.containerInfo, L === p || L.nodeType === 8 && L.parentNode === p))
                  return;
                x = x.return;
              }
            for (; O !== null; ) {
              if (x = Ha(O), x === null)
                return;
              if (L = x.tag, L === 5 || L === 6) {
                c = h = x;
                continue e;
              }
              O = O.parentNode;
            }
          }
          c = c.return;
        }
    Eu(function() {
      var q = h, le = en(l), ce = [];
      e: {
        var ie = yh.get(n);
        if (ie !== void 0) {
          var Ae = _t, Ie = n;
          switch (n) {
            case "keypress":
              if (X(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ae = ag;
              break;
            case "focusin":
              Ie = "focus", Ae = oi;
              break;
            case "focusout":
              Ie = "blur", Ae = oi;
              break;
            case "beforeblur":
            case "afterblur":
              Ae = oi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ae = Bi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ae = gs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ae = ig;
              break;
            case Fd:
            case vh:
            case hh:
              Ae = Es;
              break;
            case mh:
              Ae = Xv;
              break;
            case "scroll":
              Ae = ln;
              break;
            case "wheel":
              Ae = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ae = ng;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ae = Dc;
          }
          var Qe = (r & 4) !== 0, Pn = !Qe && n === "scroll", H = Qe ? ie !== null ? ie + "Capture" : null : ie;
          Qe = [];
          for (var U = q, I; U !== null; ) {
            I = U;
            var me = I.stateNode;
            if (I.tag === 5 && me !== null && (I = me, H !== null && (me = Sa(U, H), me != null && Qe.push(_s(U, me, I)))), Pn)
              break;
            U = U.return;
          }
          0 < Qe.length && (ie = new Ae(ie, Ie, null, l, le), ce.push({ event: ie, listeners: Qe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", Ae = n === "mouseout" || n === "pointerout", ie && l !== Cr && (Ie = l.relatedTarget || l.fromElement) && (Ha(Ie) || Ie[qi]))
            break e;
          if ((Ae || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, Ae ? (Ie = l.relatedTarget || l.toElement, Ae = q, Ie = Ie ? Ha(Ie) : null, Ie !== null && (Pn = St(Ie), Ie !== Pn || Ie.tag !== 5 && Ie.tag !== 6) && (Ie = null)) : (Ae = null, Ie = q), Ae !== Ie)) {
            if (Qe = Bi, me = "onMouseLeave", H = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Qe = Dc, me = "onPointerLeave", H = "onPointerEnter", U = "pointer"), Pn = Ae == null ? ie : To(Ae), I = Ie == null ? ie : To(Ie), ie = new Qe(me, U + "leave", Ae, l, le), ie.target = Pn, ie.relatedTarget = I, me = null, Ha(le) === q && (Qe = new Qe(H, U + "enter", Ie, l, le), Qe.target = I, Qe.relatedTarget = Pn, me = Qe), Pn = me, Ae && Ie)
              t: {
                for (Qe = Ae, H = Ie, U = 0, I = Qe; I; I = Sl(I))
                  U++;
                for (I = 0, me = H; me; me = Sl(me))
                  I++;
                for (; 0 < U - I; )
                  Qe = Sl(Qe), U--;
                for (; 0 < I - U; )
                  H = Sl(H), I--;
                for (; U--; ) {
                  if (Qe === H || H !== null && Qe === H.alternate)
                    break t;
                  Qe = Sl(Qe), H = Sl(H);
                }
                Qe = null;
              }
            else
              Qe = null;
            Ae !== null && Hd(ce, ie, Ae, Qe, !1), Ie !== null && Pn !== null && Hd(ce, Pn, Ie, Qe, !0);
          }
        }
        e: {
          if (ie = q ? To(q) : window, Ae = ie.nodeName && ie.nodeName.toLowerCase(), Ae === "select" || Ae === "input" && ie.type === "file")
            var qe = ah;
          else if (nh(ie))
            if (Nd)
              qe = oh;
            else {
              qe = sg;
              var Ye = og;
            }
          else
            (Ae = ie.nodeName) && Ae.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (qe = cg);
          if (qe && (qe = qe(n, q))) {
            rh(ce, qe, l, le);
            break e;
          }
          Ye && Ye(n, ie, q), n === "focusout" && (Ye = ie._wrapperState) && Ye.controlled && ie.type === "number" && qr(ie, "number", ie.value);
        }
        switch (Ye = q ? To(q) : window, n) {
          case "focusin":
            (nh(Ye) || Ye.contentEditable === "true") && (ci = Ye, zd = q, xs = null);
            break;
          case "focusout":
            xs = zd = ci = null;
            break;
          case "mousedown":
            Ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ud = !1, ph(ce, l, le);
            break;
          case "selectionchange":
            if (dh)
              break;
          case "keydown":
          case "keyup":
            ph(ce, l, le);
        }
        var Je;
        if (si)
          e: {
            switch (n) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break e;
              case "compositionend":
                ft = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break e;
            }
            ft = void 0;
          }
        else
          So ? eh(n, l) && (ft = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ft = "onCompositionStart");
        ft && (Zv && l.locale !== "ko" && (So || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && So && (Je = W()) : (li = le, b = "value" in li ? li.value : li.textContent, So = !0)), Ye = ks(q, ft), 0 < Ye.length && (ft = new _d(ft, n, null, l, le), ce.push({ event: ft, listeners: Ye }), Je ? ft.data = Je : (Je = Lc(l), Je !== null && (ft.data = Je)))), (Je = Nc ? ug(n, l) : lg(n, l)) && (q = ks(q, "onBeforeInput"), 0 < q.length && (le = new _d("onBeforeInput", "beforeinput", null, l, le), ce.push({ event: le, listeners: q }), le.data = Je));
      }
      Pc(ce, r);
    });
  }
  function _s(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ks(n, r) {
    for (var l = r + "Capture", c = []; n !== null; ) {
      var p = n, h = p.stateNode;
      p.tag === 5 && h !== null && (p = h, h = Sa(n, l), h != null && c.unshift(_s(n, h, p)), h = Sa(n, r), h != null && c.push(_s(n, h, p))), n = n.return;
    }
    return c;
  }
  function Sl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Hd(n, r, l, c, p) {
    for (var h = r._reactName, x = []; l !== null && l !== c; ) {
      var O = l, L = O.alternate, q = O.stateNode;
      if (L !== null && L === c)
        break;
      O.tag === 5 && q !== null && (O = q, p ? (L = Sa(l, h), L != null && x.unshift(_s(l, L, O))) : p || (L = Sa(l, h), L != null && x.push(_s(l, L, O)))), l = l.return;
    }
    x.length !== 0 && n.push({ event: r, listeners: x });
  }
  var $d = /\r\n?/g, vg = /\u0000|\uFFFD/g;
  function Vd(n) {
    return (typeof n == "string" ? n : "" + n).replace($d, `
`).replace(vg, "");
  }
  function Fc(n, r, l) {
    if (r = Vd(r), Vd(n) !== r && l)
      throw Error(d(425));
  }
  function Hc() {
  }
  var Bd = null, El = null;
  function Os(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cl = typeof setTimeout == "function" ? setTimeout : void 0, Ch = typeof clearTimeout == "function" ? clearTimeout : void 0, Id = typeof Promise == "function" ? Promise : void 0, Yd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Id < "u" ? function(n) {
    return Id.resolve(null).then(n).catch(hg);
  } : Cl;
  function hg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Au(n, r) {
    var l = r, c = 0;
    do {
      var p = l.nextSibling;
      if (n.removeChild(l), p && p.nodeType === 8)
        if (l = p.data, l === "/$") {
          if (c === 0) {
            n.removeChild(p), Ou(r);
            return;
          }
          c--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || c++;
      l = p;
    } while (l);
    Ou(r);
  }
  function fi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ds(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var zu = Math.random().toString(36).slice(2), Ri = "__reactFiber$" + zu, bl = "__reactProps$" + zu, qi = "__reactContainer$" + zu, Wd = "__reactEvents$" + zu, mg = "__reactListeners$" + zu, Qd = "__reactHandles$" + zu;
  function Ha(n) {
    var r = n[Ri];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[qi] || l[Ri]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Ds(n); n !== null; ) {
            if (l = n[Ri])
              return l;
            n = Ds(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ms(n) {
    return n = n[Ri] || n[qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function To(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(d(33));
  }
  function et(n) {
    return n[bl] || null;
  }
  var Uu = [], vn = -1;
  function Ct(n) {
    return { current: n };
  }
  function Qt(n) {
    0 > vn || (n.current = Uu[vn], Uu[vn] = null, vn--);
  }
  function Zt(n, r) {
    vn++, Uu[vn] = n.current, n.current = r;
  }
  var _i = {}, ct = Ct(_i), Mn = Ct(!1), na = _i;
  function $a(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return _i;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var p = {}, h;
    for (h in l)
      p[h] = r[h];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Va() {
    Qt(Mn), Qt(ct);
  }
  function Pu(n, r, l) {
    if (ct.current !== _i)
      throw Error(d(168));
    Zt(ct, r), Zt(Mn, l);
  }
  function Ns(n, r, l) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return l;
    c = c.getChildContext();
    for (var p in c)
      if (!(p in r))
        throw Error(d(108, De(n) || "Unknown", p));
    return R({}, l, c);
  }
  function $c(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _i, na = ct.current, Zt(ct, n), Zt(Mn, Mn.current), !0;
  }
  function bh(n, r, l) {
    var c = n.stateNode;
    if (!c)
      throw Error(d(169));
    l ? (n = Ns(n, r, na), c.__reactInternalMemoizedMergedChildContext = n, Qt(Mn), Qt(ct), Zt(ct, n)) : Qt(Mn), Zt(Mn, l);
  }
  var ba = null, er = !1, Ls = !1;
  function Gd(n) {
    ba === null ? ba = [n] : ba.push(n);
  }
  function qd(n) {
    er = !0, Gd(n);
  }
  function ra() {
    if (!Ls && ba !== null) {
      Ls = !0;
      var n = 0, r = Vt;
      try {
        var l = ba;
        for (Vt = 1; n < l.length; n++) {
          var c = l[n];
          do
            c = c(!0);
          while (c !== null);
        }
        ba = null, er = !1;
      } catch (p) {
        throw ba !== null && (ba = ba.slice(n + 1)), dn(ii, ra), p;
      } finally {
        Vt = r, Ls = !1;
      }
    }
    return null;
  }
  var ju = [], aa = 0, xl = null, wo = 0, ia = [], br = 0, Ba = null, or = 1, Ki = "";
  function xa(n, r) {
    ju[aa++] = wo, ju[aa++] = xl, xl = n, wo = r;
  }
  function Kd(n, r, l) {
    ia[br++] = or, ia[br++] = Ki, ia[br++] = Ba, Ba = n;
    var c = or;
    n = Ki;
    var p = 32 - Ar(c) - 1;
    c &= ~(1 << p), l += 1;
    var h = 32 - Ar(r) + p;
    if (30 < h) {
      var x = p - p % 5;
      h = (c & (1 << x) - 1).toString(32), c >>= x, p -= x, or = 1 << 32 - Ar(r) + p | l << p | c, Ki = h + n;
    } else
      or = 1 << h | l << p | c, Ki = n;
  }
  function Vc(n) {
    n.return !== null && (xa(n, 1), Kd(n, 1, 0));
  }
  function Xd(n) {
    for (; n === xl; )
      xl = ju[--aa], ju[aa] = null, wo = ju[--aa], ju[aa] = null;
    for (; n === Ba; )
      Ba = ia[--br], ia[br] = null, Ki = ia[--br], ia[br] = null, or = ia[--br], ia[br] = null;
  }
  var Ta = null, ua = null, hn = !1, Ia = null;
  function Zd(n, r) {
    var l = Ka(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ta = n, ua = fi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ta = n, ua = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ba !== null ? { id: or, overflow: Ki } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ka(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ta = n, ua = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Bc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ic(n) {
    if (hn) {
      var r = ua;
      if (r) {
        var l = r;
        if (!xh(n, r)) {
          if (Bc(n))
            throw Error(d(418));
          r = fi(l.nextSibling);
          var c = Ta;
          r && xh(n, r) ? Zd(c, l) : (n.flags = n.flags & -4097 | 2, hn = !1, Ta = n);
        }
      } else {
        if (Bc(n))
          throw Error(d(418));
        n.flags = n.flags & -4097 | 2, hn = !1, Ta = n;
      }
    }
  }
  function Th(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ta = n;
  }
  function Yc(n) {
    if (n !== Ta)
      return !1;
    if (!hn)
      return Th(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Os(n.type, n.memoizedProps)), r && (r = ua)) {
      if (Bc(n))
        throw wh(), Error(d(418));
      for (; r; )
        Zd(n, r), r = fi(r.nextSibling);
    }
    if (Th(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ua = fi(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ua = null;
      }
    } else
      ua = Ta ? fi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function wh() {
    for (var n = ua; n; )
      n = fi(n.nextSibling);
  }
  function wn() {
    ua = Ta = null, hn = !1;
  }
  function Jd(n) {
    Ia === null ? Ia = [n] : Ia.push(n);
  }
  var Wc = Se.ReactCurrentBatchConfig;
  function wa(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ki = Ct(null), Qc = null, Fu = null, ep = null;
  function tp() {
    ep = Fu = Qc = null;
  }
  function Hu(n) {
    var r = ki.current;
    Qt(ki), n._currentValue = r;
  }
  function tr(n, r, l) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Re(n, r) {
    Qc = n, ep = Fu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && ($n = !0), n.firstContext = null);
  }
  function Un(n) {
    var r = n._currentValue;
    if (ep !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Fu === null) {
        if (Qc === null)
          throw Error(d(308));
        Fu = n, Qc.dependencies = { lanes: 0, firstContext: n };
      } else
        Fu = Fu.next = n;
    return r;
  }
  var sr = null;
  function np(n) {
    sr === null ? sr = [n] : sr.push(n);
  }
  function Rh(n, r, l, c) {
    var p = r.interleaved;
    return p === null ? (l.next = l, np(r)) : (l.next = p.next, p.next = l), r.interleaved = l, Xi(n, c);
  }
  function Xi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $u = !1;
  function rp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Yn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Vu(n, r, l) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, Ot & 2) {
      var p = c.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), c.pending = r, Xi(n, l);
    }
    return p = c.interleaved, p === null ? (r.next = r, np(c)) : (r.next = p.next, p.next = r), c.interleaved = r, Xi(n, l);
  }
  function Gc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, Ti(n, l);
    }
  }
  function ap(n, r) {
    var l = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, l === c)) {
      var p = null, h = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var x = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          h === null ? p = h = x : h = h.next = x, l = l.next;
        } while (l !== null);
        h === null ? p = h = r : h = h.next = r;
      } else
        p = h = r;
      l = { baseState: c.baseState, firstBaseUpdate: p, lastBaseUpdate: h, shared: c.shared, effects: c.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Bu(n, r, l, c) {
    var p = n.updateQueue;
    $u = !1;
    var h = p.firstBaseUpdate, x = p.lastBaseUpdate, O = p.shared.pending;
    if (O !== null) {
      p.shared.pending = null;
      var L = O, q = L.next;
      L.next = null, x === null ? h = q : x.next = q, x = L;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, O = le.lastBaseUpdate, O !== x && (O === null ? le.firstBaseUpdate = q : O.next = q, le.lastBaseUpdate = L));
    }
    if (h !== null) {
      var ce = p.baseState;
      x = 0, le = q = L = null, O = h;
      do {
        var ie = O.lane, Ae = O.eventTime;
        if ((c & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: Ae,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var Ie = n, Qe = O;
            switch (ie = r, Ae = l, Qe.tag) {
              case 1:
                if (Ie = Qe.payload, typeof Ie == "function") {
                  ce = Ie.call(Ae, ce, ie);
                  break e;
                }
                ce = Ie;
                break e;
              case 3:
                Ie.flags = Ie.flags & -65537 | 128;
              case 0:
                if (Ie = Qe.payload, ie = typeof Ie == "function" ? Ie.call(Ae, ce, ie) : Ie, ie == null)
                  break e;
                ce = R({}, ce, ie);
                break e;
              case 2:
                $u = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, ie = p.effects, ie === null ? p.effects = [O] : ie.push(O));
        } else
          Ae = { eventTime: Ae, lane: ie, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, le === null ? (q = le = Ae, L = ce) : le = le.next = Ae, x |= ie;
        if (O = O.next, O === null) {
          if (O = p.shared.pending, O === null)
            break;
          ie = O, O = ie.next, ie.next = null, p.lastBaseUpdate = ie, p.shared.pending = null;
        }
      } while (1);
      if (le === null && (L = ce), p.baseState = L, p.firstBaseUpdate = q, p.lastBaseUpdate = le, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          x |= p.lane, p = p.next;
        while (p !== r);
      } else
        h === null && (p.shared.lanes = 0);
      nu |= x, n.lanes = x, n.memoizedState = ce;
    }
  }
  function Tl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], p = c.callback;
        if (p !== null) {
          if (c.callback = null, c = l, typeof p != "function")
            throw Error(d(191, p));
          p.call(c);
        }
      }
  }
  var _h = new u.Component().refs;
  function ip(n, r, l, c) {
    r = n.memoizedState, l = l(c, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? St(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var c = Rr(), p = Vn(n), h = Zi(c, p);
    h.payload = r, l != null && (h.callback = l), r = Vu(n, h, p), r !== null && (_r(r, n, p, c), Gc(r, n, p));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var c = Rr(), p = Vn(n), h = Zi(c, p);
    h.tag = 1, h.payload = r, l != null && (h.callback = l), r = Vu(n, h, p), r !== null && (_r(r, n, p, c), Gc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Rr(), c = Vn(n), p = Zi(l, c);
    p.tag = 2, r != null && (p.callback = r), r = Vu(n, p, c), r !== null && (_r(r, n, c, l), Gc(r, n, c));
  } };
  function kh(n, r, l, c, p, h, x) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, h, x) : r.prototype && r.prototype.isPureReactComponent ? !bs(l, c) || !bs(p, h) : !0;
  }
  function Oh(n, r, l) {
    var c = !1, p = _i, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Un(h) : (p = Sn(r) ? na : ct.current, c = r.contextTypes, h = (c = c != null) ? $a(n, p) : _i), r = new r(l, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = qc, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function Dh(n, r, l, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, c), r.state !== n && qc.enqueueReplaceState(r, r.state, null);
  }
  function Kc(n, r, l, c) {
    var p = n.stateNode;
    p.props = l, p.state = n.memoizedState, p.refs = _h, rp(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? p.context = Un(h) : (h = Sn(r) ? na : ct.current, p.context = $a(n, h)), p.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (ip(n, r, h, l), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && qc.enqueueReplaceState(p, p.state, null), Bu(n, l, p, c), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ro(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(d(309));
          var c = l.stateNode;
        }
        if (!c)
          throw Error(d(147, n));
        var p = c, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(x) {
          var O = p.refs;
          O === _h && (O = p.refs = {}), x === null ? delete O[h] : O[h] = x;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(d(284));
      if (!l._owner)
        throw Error(d(290, n));
    }
    return n;
  }
  function Xc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nh(n) {
    function r(H, U) {
      if (n) {
        var I = H.deletions;
        I === null ? (H.deletions = [U], H.flags |= 16) : I.push(U);
      }
    }
    function l(H, U) {
      if (!n)
        return null;
      for (; U !== null; )
        r(H, U), U = U.sibling;
      return null;
    }
    function c(H, U) {
      for (H = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? H.set(U.key, U) : H.set(U.index, U), U = U.sibling;
      return H;
    }
    function p(H, U) {
      return H = Xu(H, U), H.index = 0, H.sibling = null, H;
    }
    function h(H, U, I) {
      return H.index = I, n ? (I = H.alternate, I !== null ? (I = I.index, I < U ? (H.flags |= 2, U) : I) : (H.flags |= 2, U)) : (H.flags |= 1048576, U);
    }
    function x(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function O(H, U, I, me) {
      return U === null || U.tag !== 6 ? (U = Zs(I, H.mode, me), U.return = H, U) : (U = p(U, I), U.return = H, U);
    }
    function L(H, U, I, me) {
      var qe = I.type;
      return qe === je ? le(H, U, I.props.children, me, I.key) : U !== null && (U.elementType === qe || typeof qe == "object" && qe !== null && qe.$$typeof === Xe && Mh(qe) === U.type) ? (me = p(U, I.props), me.ref = Ro(H, U, I), me.return = H, me) : (me = Df(I.type, I.key, I.props, null, H.mode, me), me.ref = Ro(H, U, I), me.return = H, me);
    }
    function q(H, U, I, me) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== I.containerInfo || U.stateNode.implementation !== I.implementation ? (U = Bl(I, H.mode, me), U.return = H, U) : (U = p(U, I.children || []), U.return = H, U);
    }
    function le(H, U, I, me, qe) {
      return U === null || U.tag !== 7 ? (U = Vl(I, H.mode, me, qe), U.return = H, U) : (U = p(U, I), U.return = H, U);
    }
    function ce(H, U, I) {
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return U = Zs("" + U, H.mode, I), U.return = H, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case G:
            return I = Df(U.type, U.key, U.props, null, H.mode, I), I.ref = Ro(H, null, U), I.return = H, I;
          case Pe:
            return U = Bl(U, H.mode, I), U.return = H, U;
          case Xe:
            var me = U._init;
            return ce(H, me(U._payload), I);
        }
        if (Xn(U) || ke(U))
          return U = Vl(U, H.mode, I, null), U.return = H, U;
        Xc(H, U);
      }
      return null;
    }
    function ie(H, U, I, me) {
      var qe = U !== null ? U.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return qe !== null ? null : O(H, U, "" + I, me);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case G:
            return I.key === qe ? L(H, U, I, me) : null;
          case Pe:
            return I.key === qe ? q(H, U, I, me) : null;
          case Xe:
            return qe = I._init, ie(
              H,
              U,
              qe(I._payload),
              me
            );
        }
        if (Xn(I) || ke(I))
          return qe !== null ? null : le(H, U, I, me, null);
        Xc(H, I);
      }
      return null;
    }
    function Ae(H, U, I, me, qe) {
      if (typeof me == "string" && me !== "" || typeof me == "number")
        return H = H.get(I) || null, O(U, H, "" + me, qe);
      if (typeof me == "object" && me !== null) {
        switch (me.$$typeof) {
          case G:
            return H = H.get(me.key === null ? I : me.key) || null, L(U, H, me, qe);
          case Pe:
            return H = H.get(me.key === null ? I : me.key) || null, q(U, H, me, qe);
          case Xe:
            var Ye = me._init;
            return Ae(H, U, I, Ye(me._payload), qe);
        }
        if (Xn(me) || ke(me))
          return H = H.get(I) || null, le(U, H, me, qe, null);
        Xc(U, me);
      }
      return null;
    }
    function Ie(H, U, I, me) {
      for (var qe = null, Ye = null, Je = U, ft = U = 0, ar = null; Je !== null && ft < I.length; ft++) {
        Je.index > ft ? (ar = Je, Je = null) : ar = Je.sibling;
        var $t = ie(H, Je, I[ft], me);
        if ($t === null) {
          Je === null && (Je = ar);
          break;
        }
        n && Je && $t.alternate === null && r(H, Je), U = h($t, U, ft), Ye === null ? qe = $t : Ye.sibling = $t, Ye = $t, Je = ar;
      }
      if (ft === I.length)
        return l(H, Je), hn && xa(H, ft), qe;
      if (Je === null) {
        for (; ft < I.length; ft++)
          Je = ce(H, I[ft], me), Je !== null && (U = h(Je, U, ft), Ye === null ? qe = Je : Ye.sibling = Je, Ye = Je);
        return hn && xa(H, ft), qe;
      }
      for (Je = c(H, Je); ft < I.length; ft++)
        ar = Ae(Je, H, ft, I[ft], me), ar !== null && (n && ar.alternate !== null && Je.delete(ar.key === null ? ft : ar.key), U = h(ar, U, ft), Ye === null ? qe = ar : Ye.sibling = ar, Ye = ar);
      return n && Je.forEach(function(Zu) {
        return r(H, Zu);
      }), hn && xa(H, ft), qe;
    }
    function Qe(H, U, I, me) {
      var qe = ke(I);
      if (typeof qe != "function")
        throw Error(d(150));
      if (I = qe.call(I), I == null)
        throw Error(d(151));
      for (var Ye = qe = null, Je = U, ft = U = 0, ar = null, $t = I.next(); Je !== null && !$t.done; ft++, $t = I.next()) {
        Je.index > ft ? (ar = Je, Je = null) : ar = Je.sibling;
        var Zu = ie(H, Je, $t.value, me);
        if (Zu === null) {
          Je === null && (Je = ar);
          break;
        }
        n && Je && Zu.alternate === null && r(H, Je), U = h(Zu, U, ft), Ye === null ? qe = Zu : Ye.sibling = Zu, Ye = Zu, Je = ar;
      }
      if ($t.done)
        return l(
          H,
          Je
        ), hn && xa(H, ft), qe;
      if (Je === null) {
        for (; !$t.done; ft++, $t = I.next())
          $t = ce(H, $t.value, me), $t !== null && (U = h($t, U, ft), Ye === null ? qe = $t : Ye.sibling = $t, Ye = $t);
        return hn && xa(H, ft), qe;
      }
      for (Je = c(H, Je); !$t.done; ft++, $t = I.next())
        $t = Ae(Je, H, ft, $t.value, me), $t !== null && (n && $t.alternate !== null && Je.delete($t.key === null ? ft : $t.key), U = h($t, U, ft), Ye === null ? qe = $t : Ye.sibling = $t, Ye = $t);
      return n && Je.forEach(function(Ug) {
        return r(H, Ug);
      }), hn && xa(H, ft), qe;
    }
    function Pn(H, U, I, me) {
      if (typeof I == "object" && I !== null && I.type === je && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case G:
            e: {
              for (var qe = I.key, Ye = U; Ye !== null; ) {
                if (Ye.key === qe) {
                  if (qe = I.type, qe === je) {
                    if (Ye.tag === 7) {
                      l(H, Ye.sibling), U = p(Ye, I.props.children), U.return = H, H = U;
                      break e;
                    }
                  } else if (Ye.elementType === qe || typeof qe == "object" && qe !== null && qe.$$typeof === Xe && Mh(qe) === Ye.type) {
                    l(H, Ye.sibling), U = p(Ye, I.props), U.ref = Ro(H, Ye, I), U.return = H, H = U;
                    break e;
                  }
                  l(H, Ye);
                  break;
                } else
                  r(H, Ye);
                Ye = Ye.sibling;
              }
              I.type === je ? (U = Vl(I.props.children, H.mode, me, I.key), U.return = H, H = U) : (me = Df(I.type, I.key, I.props, null, H.mode, me), me.ref = Ro(H, U, I), me.return = H, H = me);
            }
            return x(H);
          case Pe:
            e: {
              for (Ye = I.key; U !== null; ) {
                if (U.key === Ye)
                  if (U.tag === 4 && U.stateNode.containerInfo === I.containerInfo && U.stateNode.implementation === I.implementation) {
                    l(H, U.sibling), U = p(U, I.children || []), U.return = H, H = U;
                    break e;
                  } else {
                    l(H, U);
                    break;
                  }
                else
                  r(H, U);
                U = U.sibling;
              }
              U = Bl(I, H.mode, me), U.return = H, H = U;
            }
            return x(H);
          case Xe:
            return Ye = I._init, Pn(H, U, Ye(I._payload), me);
        }
        if (Xn(I))
          return Ie(H, U, I, me);
        if (ke(I))
          return Qe(H, U, I, me);
        Xc(H, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, U !== null && U.tag === 6 ? (l(H, U.sibling), U = p(U, I), U.return = H, H = U) : (l(H, U), U = Zs(I, H.mode, me), U.return = H, H = U), x(H)) : l(H, U);
    }
    return Pn;
  }
  var _o = Nh(!0), Lh = Nh(!1), As = {}, di = Ct(As), zs = Ct(As), ko = Ct(As);
  function wl(n) {
    if (n === As)
      throw Error(d(174));
    return n;
  }
  function up(n, r) {
    switch (Zt(ko, r), Zt(zs, n), Zt(di, As), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : bn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = bn(r, n);
    }
    Qt(di), Zt(di, r);
  }
  function Iu() {
    Qt(di), Qt(zs), Qt(ko);
  }
  function at(n) {
    wl(ko.current);
    var r = wl(di.current), l = bn(r, n.type);
    r !== l && (Zt(zs, n), Zt(di, l));
  }
  function kt(n) {
    zs.current === n && (Qt(di), Qt(zs));
  }
  var ut = Ct(0);
  function Rn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ya = [];
  function Zc() {
    for (var n = 0; n < Ya.length; n++)
      Ya[n]._workInProgressVersionPrimary = null;
    Ya.length = 0;
  }
  var Jc = Se.ReactCurrentDispatcher, lp = Se.ReactCurrentBatchConfig, Rl = 0, mn = null, ee = null, Lt = null, lt = !1, Oi = !1, Ra = 0, _l = 0;
  function yn() {
    throw Error(d(321));
  }
  function kl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Fa(n[l], r[l]))
        return !1;
    return !0;
  }
  function Yu(n, r, l, c, p, h) {
    if (Rl = h, mn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Jc.current = n === null || n.memoizedState === null ? gg : Sg, n = l(c, p), Oi) {
      h = 0;
      do {
        if (Oi = !1, Ra = 0, 25 <= h)
          throw Error(d(301));
        h += 1, Lt = ee = null, r.updateQueue = null, Jc.current = sp, n = l(c, p);
      } while (Oi);
    }
    if (Jc.current = mf, r = ee !== null && ee.next !== null, Rl = 0, Lt = ee = mn = null, lt = !1, r)
      throw Error(d(300));
    return n;
  }
  function Ol() {
    var n = Ra !== 0;
    return Ra = 0, n;
  }
  function Wa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Lt === null ? mn.memoizedState = Lt = n : Lt = Lt.next = n, Lt;
  }
  function la() {
    if (ee === null) {
      var n = mn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ee.next;
    var r = Lt === null ? mn.memoizedState : Lt.next;
    if (r !== null)
      Lt = r, ee = n;
    else {
      if (n === null)
        throw Error(d(310));
      ee = n, n = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, Lt === null ? mn.memoizedState = Lt = n : Lt = Lt.next = n;
    }
    return Lt;
  }
  function Dl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Us(n) {
    var r = la(), l = r.queue;
    if (l === null)
      throw Error(d(311));
    l.lastRenderedReducer = n;
    var c = ee, p = c.baseQueue, h = l.pending;
    if (h !== null) {
      if (p !== null) {
        var x = p.next;
        p.next = h.next, h.next = x;
      }
      c.baseQueue = p = h, l.pending = null;
    }
    if (p !== null) {
      h = p.next, c = c.baseState;
      var O = x = null, L = null, q = h;
      do {
        var le = q.lane;
        if ((Rl & le) === le)
          L !== null && (L = L.next = { lane: 0, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), c = q.hasEagerState ? q.eagerState : n(c, q.action);
        else {
          var ce = {
            lane: le,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          };
          L === null ? (O = L = ce, x = c) : L = L.next = ce, mn.lanes |= le, nu |= le;
        }
        q = q.next;
      } while (q !== null && q !== h);
      L === null ? x = c : L.next = O, Fa(c, r.memoizedState) || ($n = !0), r.memoizedState = c, r.baseState = x, r.baseQueue = L, l.lastRenderedState = c;
    }
    if (n = l.interleaved, n !== null) {
      p = n;
      do
        h = p.lane, mn.lanes |= h, nu |= h, p = p.next;
      while (p !== n);
    } else
      p === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ps(n) {
    var r = la(), l = r.queue;
    if (l === null)
      throw Error(d(311));
    l.lastRenderedReducer = n;
    var c = l.dispatch, p = l.pending, h = r.memoizedState;
    if (p !== null) {
      l.pending = null;
      var x = p = p.next;
      do
        h = n(h, x.action), x = x.next;
      while (x !== p);
      Fa(h, r.memoizedState) || ($n = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), l.lastRenderedState = h;
    }
    return [h, c];
  }
  function ef() {
  }
  function tf(n, r) {
    var l = mn, c = la(), p = r(), h = !Fa(c.memoizedState, p);
    if (h && (c.memoizedState = p, $n = !0), c = c.queue, js(af.bind(null, l, c, n), [n]), c.getSnapshot !== r || h || Lt !== null && Lt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ml(9, rf.bind(null, l, c, p, r), void 0, null), _n === null)
        throw Error(d(349));
      Rl & 30 || nf(l, r, p);
    }
    return p;
  }
  function nf(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = mn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, mn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function rf(n, r, l, c) {
    r.value = l, r.getSnapshot = c, uf(r) && lf(n);
  }
  function af(n, r, l) {
    return l(function() {
      uf(r) && lf(n);
    });
  }
  function uf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Fa(n, l);
    } catch {
      return !0;
    }
  }
  function lf(n) {
    var r = Xi(n, 1);
    r !== null && _r(r, n, 1, -1);
  }
  function of(n) {
    var r = Wa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dl, lastRenderedState: n }, r.queue = n, n = n.dispatch = hf.bind(null, mn, n), [r.memoizedState, n];
  }
  function Ml(n, r, l, c) {
    return n = { tag: n, create: r, destroy: l, deps: c, next: null }, r = mn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, mn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (c = l.next, l.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function sf() {
    return la().memoizedState;
  }
  function Nl(n, r, l, c) {
    var p = Wa();
    mn.flags |= n, p.memoizedState = Ml(1 | r, l, void 0, c === void 0 ? null : c);
  }
  function Ji(n, r, l, c) {
    var p = la();
    c = c === void 0 ? null : c;
    var h = void 0;
    if (ee !== null) {
      var x = ee.memoizedState;
      if (h = x.destroy, c !== null && kl(c, x.deps)) {
        p.memoizedState = Ml(r, l, h, c);
        return;
      }
    }
    mn.flags |= n, p.memoizedState = Ml(1 | r, l, h, c);
  }
  function cf(n, r) {
    return Nl(8390656, 8, n, r);
  }
  function js(n, r) {
    return Ji(2048, 8, n, r);
  }
  function ff(n, r) {
    return Ji(4, 2, n, r);
  }
  function df(n, r) {
    return Ji(4, 4, n, r);
  }
  function op(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Oo(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ji(4, 4, op.bind(null, r, n), l);
  }
  function pf() {
  }
  function Do(n, r) {
    var l = la();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    return c !== null && r !== null && kl(r, c[1]) ? c[0] : (l.memoizedState = [n, r], n);
  }
  function Wu(n, r) {
    var l = la();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    return c !== null && r !== null && kl(r, c[1]) ? c[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function oa(n, r, l) {
    return Rl & 21 ? (Fa(l, r) || (l = oo(), mn.lanes |= l, nu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, $n = !0), n.memoizedState = l);
  }
  function yg(n, r) {
    var l = Vt;
    Vt = l !== 0 && 4 > l ? l : 4, n(!0);
    var c = lp.transition;
    lp.transition = {};
    try {
      n(!1), r();
    } finally {
      Vt = l, lp.transition = c;
    }
  }
  function cn() {
    return la().memoizedState;
  }
  function vf(n, r, l) {
    var c = Vn(n);
    if (l = { lane: c, action: l, hasEagerState: !1, eagerState: null, next: null }, Mo(n))
      Fs(r, l);
    else if (l = Rh(n, r, l, c), l !== null) {
      var p = Rr();
      _r(l, n, c, p), Ah(l, r, c);
    }
  }
  function hf(n, r, l) {
    var c = Vn(n), p = { lane: c, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Mo(n))
      Fs(r, p);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null))
        try {
          var x = r.lastRenderedState, O = h(x, l);
          if (p.hasEagerState = !0, p.eagerState = O, Fa(O, x)) {
            var L = r.interleaved;
            L === null ? (p.next = p, np(r)) : (p.next = L.next, L.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      l = Rh(n, r, p, c), l !== null && (p = Rr(), _r(l, n, c, p), Ah(l, r, c));
    }
  }
  function Mo(n) {
    var r = n.alternate;
    return n === mn || r !== null && r === mn;
  }
  function Fs(n, r) {
    Oi = lt = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ah(n, r, l) {
    if (l & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, Ti(n, l);
    }
  }
  var mf = { readContext: Un, useCallback: yn, useContext: yn, useEffect: yn, useImperativeHandle: yn, useInsertionEffect: yn, useLayoutEffect: yn, useMemo: yn, useReducer: yn, useRef: yn, useState: yn, useDebugValue: yn, useDeferredValue: yn, useTransition: yn, useMutableSource: yn, useSyncExternalStore: yn, useId: yn, unstable_isNewReconciler: !1 }, gg = { readContext: Un, useCallback: function(n, r) {
    return Wa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Un, useEffect: cf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Nl(
      4194308,
      4,
      op.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Nl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Nl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Wa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var c = Wa();
    return r = l !== void 0 ? l(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = vf.bind(null, mn, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = Wa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: of, useDebugValue: pf, useDeferredValue: function(n) {
    return Wa().memoizedState = n;
  }, useTransition: function() {
    var n = of(!1), r = n[0];
    return n = yg.bind(null, n[1]), Wa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var c = mn, p = Wa();
    if (hn) {
      if (l === void 0)
        throw Error(d(407));
      l = l();
    } else {
      if (l = r(), _n === null)
        throw Error(d(349));
      Rl & 30 || nf(c, r, l);
    }
    p.memoizedState = l;
    var h = { value: l, getSnapshot: r };
    return p.queue = h, cf(af.bind(
      null,
      c,
      h,
      n
    ), [n]), c.flags |= 2048, Ml(9, rf.bind(null, c, h, l, r), void 0, null), l;
  }, useId: function() {
    var n = Wa(), r = _n.identifierPrefix;
    if (hn) {
      var l = Ki, c = or;
      l = (c & ~(1 << 32 - Ar(c) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ra++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = _l++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Sg = {
    readContext: Un,
    useCallback: Do,
    useContext: Un,
    useEffect: js,
    useImperativeHandle: Oo,
    useInsertionEffect: ff,
    useLayoutEffect: df,
    useMemo: Wu,
    useReducer: Us,
    useRef: sf,
    useState: function() {
      return Us(Dl);
    },
    useDebugValue: pf,
    useDeferredValue: function(n) {
      var r = la();
      return oa(r, ee.memoizedState, n);
    },
    useTransition: function() {
      var n = Us(Dl)[0], r = la().memoizedState;
      return [n, r];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: cn,
    unstable_isNewReconciler: !1
  }, sp = { readContext: Un, useCallback: Do, useContext: Un, useEffect: js, useImperativeHandle: Oo, useInsertionEffect: ff, useLayoutEffect: df, useMemo: Wu, useReducer: Ps, useRef: sf, useState: function() {
    return Ps(Dl);
  }, useDebugValue: pf, useDeferredValue: function(n) {
    var r = la();
    return ee === null ? r.memoizedState = n : oa(r, ee.memoizedState, n);
  }, useTransition: function() {
    var n = Ps(Dl)[0], r = la().memoizedState;
    return [n, r];
  }, useMutableSource: ef, useSyncExternalStore: tf, useId: cn, unstable_isNewReconciler: !1 };
  function No(n, r) {
    try {
      var l = "", c = r;
      do
        l += Le(c), c = c.return;
      while (c);
      var p = l;
    } catch (h) {
      p = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Hs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function yf(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Eg = typeof WeakMap == "function" ? WeakMap : Map;
  function zh(n, r, l) {
    l = Zi(-1, l), l.tag = 3, l.payload = { element: null };
    var c = r.value;
    return l.callback = function() {
      Tf || (Tf = !0, Pl = c), yf(n, r);
    }, l;
  }
  function $s(n, r, l) {
    l = Zi(-1, l), l.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = r.value;
      l.payload = function() {
        return c(p);
      }, l.callback = function() {
        yf(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (l.callback = function() {
      yf(n, r), typeof c != "function" && (Ni === null ? Ni = /* @__PURE__ */ new Set([this]) : Ni.add(this));
      var x = r.stack;
      this.componentDidCatch(r.value, { componentStack: x !== null ? x : "" });
    }), l;
  }
  function Uh(n, r, l) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Eg();
      var p = /* @__PURE__ */ new Set();
      c.set(r, p);
    } else
      p = c.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), c.set(r, p));
    p.has(l) || (p.add(l), n = _g.bind(null, n, r, l), r.then(n, n));
  }
  function cp(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function fp(n, r, l, c, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Zi(-1, 1), r.tag = 2, Vu(l, r, 1))), l.lanes |= 1), n);
  }
  var Cg = Se.ReactCurrentOwner, $n = !1;
  function Wn(n, r, l, c) {
    r.child = n === null ? Lh(r, null, l, c) : _o(r, n.child, l, c);
  }
  function Qu(n, r, l, c, p) {
    l = l.render;
    var h = r.ref;
    return Re(r, p), c = Yu(n, r, l, c, h, p), l = Ol(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, cr(n, r, p)) : (hn && l && Vc(r), r.flags |= 1, Wn(n, r, c, p), r.child);
  }
  function gf(n, r, l, c, p) {
    if (n === null) {
      var h = l.type;
      return typeof h == "function" && !Dp(h) && h.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = h, sa(n, r, h, c, p)) : (n = Df(l.type, null, c, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & p)) {
      var x = h.memoizedProps;
      if (l = l.compare, l = l !== null ? l : bs, l(x, c) && n.ref === r.ref)
        return cr(n, r, p);
    }
    return r.flags |= 1, n = Xu(h, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function sa(n, r, l, c, p) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (bs(h, c) && n.ref === r.ref)
        if ($n = !1, r.pendingProps = c = h, (n.lanes & p) !== 0)
          n.flags & 131072 && ($n = !0);
        else
          return r.lanes = n.lanes, cr(n, r, p);
    }
    return Lo(n, r, l, c, p);
  }
  function Ll(n, r, l) {
    var c = r.pendingProps, p = c.children, h = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Zt(Fo, _a), _a |= l;
      else {
        if (!(l & 1073741824))
          return n = h !== null ? h.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Zt(Fo, _a), _a |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = h !== null ? h.baseLanes : l, Zt(Fo, _a), _a |= c;
      }
    else
      h !== null ? (c = h.baseLanes | l, r.memoizedState = null) : c = l, Zt(Fo, _a), _a |= c;
    return Wn(n, r, p, l), r.child;
  }
  function bt(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Lo(n, r, l, c, p) {
    var h = Sn(l) ? na : ct.current;
    return h = $a(r, h), Re(r, p), l = Yu(n, r, l, c, h, p), c = Ol(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, cr(n, r, p)) : (hn && c && Vc(r), r.flags |= 1, Wn(n, r, l, p), r.child);
  }
  function dp(n, r, l, c, p) {
    if (Sn(l)) {
      var h = !0;
      $c(r);
    } else
      h = !1;
    if (Re(r, p), r.stateNode === null)
      xr(n, r), Oh(r, l, c), Kc(r, l, c, p), c = !0;
    else if (n === null) {
      var x = r.stateNode, O = r.memoizedProps;
      x.props = O;
      var L = x.context, q = l.contextType;
      typeof q == "object" && q !== null ? q = Un(q) : (q = Sn(l) ? na : ct.current, q = $a(r, q));
      var le = l.getDerivedStateFromProps, ce = typeof le == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      ce || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (O !== c || L !== q) && Dh(r, x, c, q), $u = !1;
      var ie = r.memoizedState;
      x.state = ie, Bu(r, c, x, p), L = r.memoizedState, O !== c || ie !== L || Mn.current || $u ? (typeof le == "function" && (ip(r, l, le, c), L = r.memoizedState), (O = $u || kh(r, l, O, c, ie, L, q)) ? (ce || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = L), x.props = c, x.state = L, x.context = q, c = O) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      x = r.stateNode, Yn(n, r), O = r.memoizedProps, q = r.type === r.elementType ? O : wa(r.type, O), x.props = q, ce = r.pendingProps, ie = x.context, L = l.contextType, typeof L == "object" && L !== null ? L = Un(L) : (L = Sn(l) ? na : ct.current, L = $a(r, L));
      var Ae = l.getDerivedStateFromProps;
      (le = typeof Ae == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (O !== ce || ie !== L) && Dh(r, x, c, L), $u = !1, ie = r.memoizedState, x.state = ie, Bu(r, c, x, p);
      var Ie = r.memoizedState;
      O !== ce || ie !== Ie || Mn.current || $u ? (typeof Ae == "function" && (ip(r, l, Ae, c), Ie = r.memoizedState), (q = $u || kh(r, l, q, c, ie, Ie, L) || !1) ? (le || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(c, Ie, L), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(c, Ie, L)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = Ie), x.props = c, x.state = Ie, x.context = L, c = q) : (typeof x.componentDidUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Ph(n, r, l, c, h, p);
  }
  function Ph(n, r, l, c, p, h) {
    bt(n, r);
    var x = (r.flags & 128) !== 0;
    if (!c && !x)
      return p && bh(r, l, !1), cr(n, r, h);
    c = r.stateNode, Cg.current = r;
    var O = x && typeof l.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && x ? (r.child = _o(r, n.child, null, h), r.child = _o(r, null, O, h)) : Wn(n, r, O, h), r.memoizedState = c.state, p && bh(r, l, !0), r.child;
  }
  function jh(n) {
    var r = n.stateNode;
    r.pendingContext ? Pu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Pu(n, r.context, !1), up(n, r.containerInfo);
  }
  function Sf(n, r, l, c, p) {
    return wn(), Jd(p), r.flags |= 256, Wn(n, r, l, c), r.child;
  }
  var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function vp(n, r, l) {
    var c = r.pendingProps, p = ut.current, h = !1, x = (r.flags & 128) !== 0, O;
    if ((O = x) || (O = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), O ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Zt(ut, p & 1), n === null)
      return Ic(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (x = c.children, n = c.fallback, h ? (c = r.mode, h = r.child, x = { mode: "hidden", children: x }, !(c & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = x) : h = Xs(x, c, 0, null), n = Vl(n, c, l, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = pp(l), r.memoizedState = Al, n) : hp(r, x));
    if (p = n.memoizedState, p !== null && (O = p.dehydrated, O !== null))
      return bg(n, r, x, c, O, p, l);
    if (h) {
      h = c.fallback, x = r.mode, p = n.child, O = p.sibling;
      var L = { mode: "hidden", children: c.children };
      return !(x & 1) && r.child !== p ? (c = r.child, c.childLanes = 0, c.pendingProps = L, r.deletions = null) : (c = Xu(p, L), c.subtreeFlags = p.subtreeFlags & 14680064), O !== null ? h = Xu(O, h) : (h = Vl(h, x, l, null), h.flags |= 2), h.return = r, c.return = r, c.sibling = h, r.child = c, c = h, h = r.child, x = n.child.memoizedState, x = x === null ? pp(l) : { baseLanes: x.baseLanes | l, cachePool: null, transitions: x.transitions }, h.memoizedState = x, h.childLanes = n.childLanes & ~l, r.memoizedState = Al, c;
    }
    return h = n.child, n = h.sibling, c = Xu(h, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = l), c.return = r, c.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function hp(n, r) {
    return r = Xs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ao(n, r, l, c) {
    return c !== null && Jd(c), _o(r, n.child, null, l), n = hp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function bg(n, r, l, c, p, h, x) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, c = Hs(Error(d(422))), Ao(n, r, x, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = c.fallback, p = r.mode, c = Xs({ mode: "visible", children: c.children }, p, 0, null), h = Vl(h, p, x, null), h.flags |= 2, c.return = r, h.return = r, c.sibling = h, r.child = c, r.mode & 1 && _o(r, n.child, null, x), r.child.memoizedState = pp(x), r.memoizedState = Al, h);
    if (!(r.mode & 1))
      return Ao(n, r, x, null);
    if (p.data === "$!") {
      if (c = p.nextSibling && p.nextSibling.dataset, c)
        var O = c.dgst;
      return c = O, h = Error(d(419)), c = Hs(h, c, void 0), Ao(n, r, x, c);
    }
    if (O = (x & n.childLanes) !== 0, $n || O) {
      if (c = _n, c !== null) {
        switch (x & -x) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (c.suspendedLanes | x) ? 0 : p, p !== 0 && p !== h.retryLane && (h.retryLane = p, Xi(n, p), _r(c, n, p, -1));
      }
      return _p(), c = Hs(Error(d(421))), Ao(n, r, x, c);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = kg.bind(null, n), p._reactRetry = r, null) : (n = h.treeContext, ua = fi(p.nextSibling), Ta = r, hn = !0, Ia = null, n !== null && (ia[br++] = or, ia[br++] = Ki, ia[br++] = Ba, or = n.id, Ki = n.overflow, Ba = r), r = hp(r, c.children), r.flags |= 4096, r);
  }
  function mp(n, r, l) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), tr(n.return, r, l);
  }
  function Ef(n, r, l, c, p) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: l, tailMode: p } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = c, h.tail = l, h.tailMode = p);
  }
  function yp(n, r, l) {
    var c = r.pendingProps, p = c.revealOrder, h = c.tail;
    if (Wn(n, r, c.children, l), c = ut.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && mp(n, l, r);
            else if (n.tag === 19)
              mp(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      c &= 1;
    }
    if (Zt(ut, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (l = r.child, p = null; l !== null; )
            n = l.alternate, n !== null && Rn(n) === null && (p = l), l = l.sibling;
          l = p, l === null ? (p = r.child, r.child = null) : (p = l.sibling, l.sibling = null), Ef(r, !1, p, l, h);
          break;
        case "backwards":
          for (l = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && Rn(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = l, l = p, p = n;
          }
          Ef(r, !0, l, null, h);
          break;
        case "together":
          Ef(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function xr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), nu |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, l = Xu(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Xu(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function eu(n, r, l) {
    switch (r.tag) {
      case 3:
        jh(r), wn();
        break;
      case 5:
        at(r);
        break;
      case 1:
        Sn(r.type) && $c(r);
        break;
      case 4:
        up(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, p = r.memoizedProps.value;
        Zt(ki, c._currentValue), c._currentValue = p;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (Zt(ut, ut.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? vp(n, r, l) : (Zt(ut, ut.current & 1), n = cr(n, r, l), n !== null ? n.sibling : null);
        Zt(ut, ut.current & 1);
        break;
      case 19:
        if (c = (l & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return yp(n, r, l);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Zt(ut, ut.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ll(n, r, l);
    }
    return cr(n, r, l);
  }
  var Vs, zl, Qa, Qn;
  Vs = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, zl = function() {
  }, Qa = function(n, r, l, c) {
    var p = n.memoizedProps;
    if (p !== c) {
      n = r.stateNode, wl(di.current);
      var h = null;
      switch (l) {
        case "input":
          p = Cn(n, p), c = Cn(n, c), h = [];
          break;
        case "select":
          p = R({}, p, { value: void 0 }), c = R({}, c, { value: void 0 }), h = [];
          break;
        case "textarea":
          p = Kr(n, p), c = Kr(n, c), h = [];
          break;
        default:
          typeof p.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Hc);
      }
      zn(l, c);
      var x;
      l = null;
      for (q in p)
        if (!c.hasOwnProperty(q) && p.hasOwnProperty(q) && p[q] != null)
          if (q === "style") {
            var O = p[q];
            for (x in O)
              O.hasOwnProperty(x) && (l || (l = {}), l[x] = "");
          } else
            q !== "dangerouslySetInnerHTML" && q !== "children" && q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && q !== "autoFocus" && (E.hasOwnProperty(q) ? h || (h = []) : (h = h || []).push(q, null));
      for (q in c) {
        var L = c[q];
        if (O = p != null ? p[q] : void 0, c.hasOwnProperty(q) && L !== O && (L != null || O != null))
          if (q === "style")
            if (O) {
              for (x in O)
                !O.hasOwnProperty(x) || L && L.hasOwnProperty(x) || (l || (l = {}), l[x] = "");
              for (x in L)
                L.hasOwnProperty(x) && O[x] !== L[x] && (l || (l = {}), l[x] = L[x]);
            } else
              l || (h || (h = []), h.push(
                q,
                l
              )), l = L;
          else
            q === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, O = O ? O.__html : void 0, L != null && O !== L && (h = h || []).push(q, L)) : q === "children" ? typeof L != "string" && typeof L != "number" || (h = h || []).push(q, "" + L) : q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && (E.hasOwnProperty(q) ? (L != null && q === "onScroll" && sn("scroll", n), h || O === L || (h = [])) : (h = h || []).push(q, L));
      }
      l && (h = h || []).push("style", l);
      var q = h;
      (r.updateQueue = q) && (r.flags |= 4);
    }
  }, Qn = function(n, r, l, c) {
    l !== c && (r.flags |= 4);
  };
  function Bs(n, r) {
    if (!hn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var c = null; l !== null; )
            l.alternate !== null && (c = l), l = l.sibling;
          c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function Tr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, c = 0;
    if (r)
      for (var p = n.child; p !== null; )
        l |= p.lanes | p.childLanes, c |= p.subtreeFlags & 14680064, c |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        l |= p.lanes | p.childLanes, c |= p.subtreeFlags, c |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= c, n.childLanes = l, r;
  }
  function xg(n, r, l) {
    var c = r.pendingProps;
    switch (Xd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tr(r), null;
      case 1:
        return Sn(r.type) && Va(), Tr(r), null;
      case 3:
        return c = r.stateNode, Iu(), Qt(Mn), Qt(ct), Zc(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (Yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ia !== null && (Ks(Ia), Ia = null))), zl(n, r), Tr(r), null;
      case 5:
        kt(r);
        var p = wl(ko.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Qa(n, r, l, c, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(d(166));
            return Tr(r), null;
          }
          if (n = wl(di.current), Yc(r)) {
            c = r.stateNode, l = r.type;
            var h = r.memoizedProps;
            switch (c[Ri] = r, c[bl] = h, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                sn("cancel", c), sn("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                sn("load", c);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Rs.length; p++)
                  sn(Rs[p], c);
                break;
              case "source":
                sn("error", c);
                break;
              case "img":
              case "image":
              case "link":
                sn(
                  "error",
                  c
                ), sn("load", c);
                break;
              case "details":
                sn("toggle", c);
                break;
              case "input":
                On(c, h), sn("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!h.multiple }, sn("invalid", c);
                break;
              case "textarea":
                Er(c, h), sn("invalid", c);
            }
            zn(l, h), p = null;
            for (var x in h)
              if (h.hasOwnProperty(x)) {
                var O = h[x];
                x === "children" ? typeof O == "string" ? c.textContent !== O && (h.suppressHydrationWarning !== !0 && Fc(c.textContent, O, n), p = ["children", O]) : typeof O == "number" && c.textContent !== "" + O && (h.suppressHydrationWarning !== !0 && Fc(
                  c.textContent,
                  O,
                  n
                ), p = ["children", "" + O]) : E.hasOwnProperty(x) && O != null && x === "onScroll" && sn("scroll", c);
              }
            switch (l) {
              case "input":
                Yt(c), Gr(c, h, !0);
                break;
              case "textarea":
                Yt(c), ur(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (c.onclick = Hc);
            }
            c = p, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            x = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Xr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = x.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = x.createElement(l, { is: c.is }) : (n = x.createElement(l), l === "select" && (x = n, c.multiple ? x.multiple = !0 : c.size && (x.size = c.size))) : n = x.createElementNS(n, l), n[Ri] = r, n[bl] = c, Vs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (x = xn(l, c), l) {
                case "dialog":
                  sn("cancel", n), sn("close", n), p = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  sn("load", n), p = c;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Rs.length; p++)
                    sn(Rs[p], n);
                  p = c;
                  break;
                case "source":
                  sn("error", n), p = c;
                  break;
                case "img":
                case "image":
                case "link":
                  sn(
                    "error",
                    n
                  ), sn("load", n), p = c;
                  break;
                case "details":
                  sn("toggle", n), p = c;
                  break;
                case "input":
                  On(n, c), p = Cn(n, c), sn("invalid", n);
                  break;
                case "option":
                  p = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, p = R({}, c, { value: void 0 }), sn("invalid", n);
                  break;
                case "textarea":
                  Er(n, c), p = Kr(n, c), sn("invalid", n);
                  break;
                default:
                  p = c;
              }
              zn(l, p), O = p;
              for (h in O)
                if (O.hasOwnProperty(h)) {
                  var L = O[h];
                  h === "style" ? Wt(n, L) : h === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && gi(n, L)) : h === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && ga(n, L) : typeof L == "number" && ga(n, "" + L) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (E.hasOwnProperty(h) ? L != null && h === "onScroll" && sn("scroll", n) : L != null && se(n, h, L, x));
                }
              switch (l) {
                case "input":
                  Yt(n), Gr(n, c, !1);
                  break;
                case "textarea":
                  Yt(n), ur(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + Me(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, h = c.value, h != null ? Sr(n, !!c.multiple, h, !1) : c.defaultValue != null && Sr(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Hc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Tr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Qn(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(d(166));
          if (l = wl(ko.current), wl(di.current), Yc(r)) {
            if (c = r.stateNode, l = r.memoizedProps, c[Ri] = r, (h = c.nodeValue !== l) && (n = Ta, n !== null))
              switch (n.tag) {
                case 3:
                  Fc(c.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Fc(c.nodeValue, l, (n.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            c = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(c), c[Ri] = r, r.stateNode = c;
        }
        return Tr(r), null;
      case 13:
        if (Qt(ut), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ua !== null && r.mode & 1 && !(r.flags & 128))
            wh(), wn(), r.flags |= 98560, h = !1;
          else if (h = Yc(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(d(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(d(317));
              h[Ri] = r;
            } else
              wn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Tr(r), h = !1;
          } else
            Ia !== null && (Ks(Ia), Ia = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || ut.current & 1 ? qn === 0 && (qn = 3) : _p())), r.updateQueue !== null && (r.flags |= 4), Tr(r), null);
      case 4:
        return Iu(), zl(n, r), n === null && xo(r.stateNode.containerInfo), Tr(r), null;
      case 10:
        return Hu(r.type._context), Tr(r), null;
      case 17:
        return Sn(r.type) && Va(), Tr(r), null;
      case 19:
        if (Qt(ut), h = r.memoizedState, h === null)
          return Tr(r), null;
        if (c = (r.flags & 128) !== 0, x = h.rendering, x === null)
          if (c)
            Bs(h, !1);
          else {
            if (qn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (x = Rn(n), x !== null) {
                  for (r.flags |= 128, Bs(h, !1), c = x.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = l, l = r.child; l !== null; )
                    h = l, n = c, h.flags &= 14680066, x = h.alternate, x === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = x.childLanes, h.lanes = x.lanes, h.child = x.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = x.memoizedProps, h.memoizedState = x.memoizedState, h.updateQueue = x.updateQueue, h.type = x.type, n = x.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Zt(ut, ut.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && jt() > $o && (r.flags |= 128, c = !0, Bs(h, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = Rn(x), n !== null) {
              if (r.flags |= 128, c = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Bs(h, !0), h.tail === null && h.tailMode === "hidden" && !x.alternate && !hn)
                return Tr(r), null;
            } else
              2 * jt() - h.renderingStartTime > $o && l !== 1073741824 && (r.flags |= 128, c = !0, Bs(h, !1), r.lanes = 4194304);
          h.isBackwards ? (x.sibling = r.child, r.child = x) : (l = h.last, l !== null ? l.sibling = x : r.child = x, h.last = x);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = jt(), r.sibling = null, l = ut.current, Zt(ut, c ? l & 1 | 2 : l & 1), r) : (Tr(r), null);
      case 22:
      case 23:
        return Rp(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? _a & 1073741824 && (Tr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Tr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function gp(n, r) {
    switch (Xd(r), r.tag) {
      case 1:
        return Sn(r.type) && Va(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Iu(), Qt(Mn), Qt(ct), Zc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return kt(r), null;
      case 13:
        if (Qt(ut), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(d(340));
          wn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qt(ut), null;
      case 4:
        return Iu(), null;
      case 10:
        return Hu(r.type._context), null;
      case 22:
      case 23:
        return Rp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Is = !1, Gn = !1, Fh = typeof WeakSet == "function" ? WeakSet : Set, Be = null;
  function zo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (c) {
          Ln(n, r, c);
        }
      else
        l.current = null;
  }
  function Ys(n, r, l) {
    try {
      l();
    } catch (c) {
      Ln(n, r, c);
    }
  }
  var Hh = !1;
  function $h(n, r) {
    if (Bd = ja, n = Ac(), Wi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var c = l.getSelection && l.getSelection();
          if (c && c.rangeCount !== 0) {
            l = c.anchorNode;
            var p = c.anchorOffset, h = c.focusNode;
            c = c.focusOffset;
            try {
              l.nodeType, h.nodeType;
            } catch {
              l = null;
              break e;
            }
            var x = 0, O = -1, L = -1, q = 0, le = 0, ce = n, ie = null;
            t:
              for (; ; ) {
                for (var Ae; ce !== l || p !== 0 && ce.nodeType !== 3 || (O = x + p), ce !== h || c !== 0 && ce.nodeType !== 3 || (L = x + c), ce.nodeType === 3 && (x += ce.nodeValue.length), (Ae = ce.firstChild) !== null; )
                  ie = ce, ce = Ae;
                for (; ; ) {
                  if (ce === n)
                    break t;
                  if (ie === l && ++q === p && (O = x), ie === h && ++le === c && (L = x), (Ae = ce.nextSibling) !== null)
                    break;
                  ce = ie, ie = ce.parentNode;
                }
                ce = Ae;
              }
            l = O === -1 || L === -1 ? null : { start: O, end: L };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (El = { focusedElem: n, selectionRange: l }, ja = !1, Be = r; Be !== null; )
      if (r = Be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Be = n;
      else
        for (; Be !== null; ) {
          r = Be;
          try {
            var Ie = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ie !== null) {
                    var Qe = Ie.memoizedProps, Pn = Ie.memoizedState, H = r.stateNode, U = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Qe : wa(r.type, Qe), Pn);
                    H.__reactInternalSnapshotBeforeUpdate = U;
                  }
                  break;
                case 3:
                  var I = r.stateNode.containerInfo;
                  I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (me) {
            Ln(r, r.return, me);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Be = n;
            break;
          }
          Be = r.return;
        }
    return Ie = Hh, Hh = !1, Ie;
  }
  function Ws(n, r, l) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var p = c = c.next;
      do {
        if ((p.tag & n) === n) {
          var h = p.destroy;
          p.destroy = void 0, h !== void 0 && Ys(r, l, h);
        }
        p = p.next;
      } while (p !== c);
    }
  }
  function Qs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var c = l.create;
          l.destroy = c();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Sp(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ep(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ep(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ri], delete r[bl], delete r[Wd], delete r[mg], delete r[Qd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Vh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Cf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Vh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Uo(n, r, l) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Hc));
    else if (c !== 4 && (n = n.child, n !== null))
      for (Uo(n, r, l), n = n.sibling; n !== null; )
        Uo(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (Di(n, r, l), n = n.sibling; n !== null; )
        Di(n, r, l), n = n.sibling;
  }
  var En = null, nr = !1;
  function Ga(n, r, l) {
    for (l = l.child; l !== null; )
      Po(n, r, l), l = l.sibling;
  }
  function Po(n, r, l) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function")
      try {
        Zr.onCommitFiberUnmount(bu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Gn || zo(l, r);
      case 6:
        var c = En, p = nr;
        En = null, Ga(n, r, l), En = c, nr = p, En !== null && (nr ? (n = En, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : En.removeChild(l.stateNode));
        break;
      case 18:
        En !== null && (nr ? (n = En, l = l.stateNode, n.nodeType === 8 ? Au(n.parentNode, l) : n.nodeType === 1 && Au(n, l), Ou(n)) : Au(En, l.stateNode));
        break;
      case 4:
        c = En, p = nr, En = l.stateNode.containerInfo, nr = !0, Ga(n, r, l), En = c, nr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Gn && (c = l.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          p = c = c.next;
          do {
            var h = p, x = h.destroy;
            h = h.tag, x !== void 0 && (h & 2 || h & 4) && Ys(l, r, x), p = p.next;
          } while (p !== c);
        }
        Ga(n, r, l);
        break;
      case 1:
        if (!Gn && (zo(l, r), c = l.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = l.memoizedProps, c.state = l.memoizedState, c.componentWillUnmount();
          } catch (O) {
            Ln(l, r, O);
          }
        Ga(n, r, l);
        break;
      case 21:
        Ga(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Gn = (c = Gn) || l.memoizedState !== null, Ga(n, r, l), Gn = c) : Ga(n, r, l);
        break;
      default:
        Ga(n, r, l);
    }
  }
  function tu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Fh()), r.forEach(function(c) {
        var p = Og.bind(null, n, c);
        l.has(c) || (l.add(c), c.then(p, p));
      });
    }
  }
  function pi(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var c = 0; c < l.length; c++) {
        var p = l[c];
        try {
          var h = n, x = r, O = x;
          e:
            for (; O !== null; ) {
              switch (O.tag) {
                case 5:
                  En = O.stateNode, nr = !1;
                  break e;
                case 3:
                  En = O.stateNode.containerInfo, nr = !0;
                  break e;
                case 4:
                  En = O.stateNode.containerInfo, nr = !0;
                  break e;
              }
              O = O.return;
            }
          if (En === null)
            throw Error(d(160));
          Po(h, x, p), En = null, nr = !1;
          var L = p.alternate;
          L !== null && (L.return = null), p.return = null;
        } catch (q) {
          Ln(p, r, q);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Bh(r, n), r = r.sibling;
  }
  function Bh(n, r) {
    var l = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pi(r, n), Mi(n), c & 4) {
          try {
            Ws(3, n, n.return), Qs(3, n);
          } catch (Qe) {
            Ln(n, n.return, Qe);
          }
          try {
            Ws(5, n, n.return);
          } catch (Qe) {
            Ln(n, n.return, Qe);
          }
        }
        break;
      case 1:
        pi(r, n), Mi(n), c & 512 && l !== null && zo(l, l.return);
        break;
      case 5:
        if (pi(r, n), Mi(n), c & 512 && l !== null && zo(l, l.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            ga(p, "");
          } catch (Qe) {
            Ln(n, n.return, Qe);
          }
        }
        if (c & 4 && (p = n.stateNode, p != null)) {
          var h = n.memoizedProps, x = l !== null ? l.memoizedProps : h, O = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null)
            try {
              O === "input" && h.type === "radio" && h.name != null && In(p, h), xn(O, x);
              var q = xn(O, h);
              for (x = 0; x < L.length; x += 2) {
                var le = L[x], ce = L[x + 1];
                le === "style" ? Wt(p, ce) : le === "dangerouslySetInnerHTML" ? gi(p, ce) : le === "children" ? ga(p, ce) : se(p, le, ce, q);
              }
              switch (O) {
                case "input":
                  An(p, h);
                  break;
                case "textarea":
                  ya(p, h);
                  break;
                case "select":
                  var ie = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!h.multiple;
                  var Ae = h.value;
                  Ae != null ? Sr(p, !!h.multiple, Ae, !1) : ie !== !!h.multiple && (h.defaultValue != null ? Sr(
                    p,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : Sr(p, !!h.multiple, h.multiple ? [] : "", !1));
              }
              p[bl] = h;
            } catch (Qe) {
              Ln(n, n.return, Qe);
            }
        }
        break;
      case 6:
        if (pi(r, n), Mi(n), c & 4) {
          if (n.stateNode === null)
            throw Error(d(162));
          p = n.stateNode, h = n.memoizedProps;
          try {
            p.nodeValue = h;
          } catch (Qe) {
            Ln(n, n.return, Qe);
          }
        }
        break;
      case 3:
        if (pi(r, n), Mi(n), c & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ou(r.containerInfo);
          } catch (Qe) {
            Ln(n, n.return, Qe);
          }
        break;
      case 4:
        pi(r, n), Mi(n);
        break;
      case 13:
        pi(r, n), Mi(n), p = n.child, p.flags & 8192 && (h = p.memoizedState !== null, p.stateNode.isHidden = h, !h || p.alternate !== null && p.alternate.memoizedState !== null || (xp = jt())), c & 4 && tu(n);
        break;
      case 22:
        if (le = l !== null && l.memoizedState !== null, n.mode & 1 ? (Gn = (q = Gn) || le, pi(r, n), Gn = q) : pi(r, n), Mi(n), c & 8192) {
          if (q = n.memoizedState !== null, (n.stateNode.isHidden = q) && !le && n.mode & 1)
            for (Be = n, le = n.child; le !== null; ) {
              for (ce = Be = le; Be !== null; ) {
                switch (ie = Be, Ae = ie.child, ie.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ws(4, ie, ie.return);
                    break;
                  case 1:
                    zo(ie, ie.return);
                    var Ie = ie.stateNode;
                    if (typeof Ie.componentWillUnmount == "function") {
                      c = ie, l = ie.return;
                      try {
                        r = c, Ie.props = r.memoizedProps, Ie.state = r.memoizedState, Ie.componentWillUnmount();
                      } catch (Qe) {
                        Ln(c, l, Qe);
                      }
                    }
                    break;
                  case 5:
                    zo(ie, ie.return);
                    break;
                  case 22:
                    if (ie.memoizedState !== null) {
                      Cp(ce);
                      continue;
                    }
                }
                Ae !== null ? (Ae.return = ie, Be = Ae) : Cp(ce);
              }
              le = le.sibling;
            }
          e:
            for (le = null, ce = n; ; ) {
              if (ce.tag === 5) {
                if (le === null) {
                  le = ce;
                  try {
                    p = ce.stateNode, q ? (h = p.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (O = ce.stateNode, L = ce.memoizedProps.style, x = L != null && L.hasOwnProperty("display") ? L.display : null, O.style.display = Tt("display", x));
                  } catch (Qe) {
                    Ln(n, n.return, Qe);
                  }
                }
              } else if (ce.tag === 6) {
                if (le === null)
                  try {
                    ce.stateNode.nodeValue = q ? "" : ce.memoizedProps;
                  } catch (Qe) {
                    Ln(n, n.return, Qe);
                  }
              } else if ((ce.tag !== 22 && ce.tag !== 23 || ce.memoizedState === null || ce === n) && ce.child !== null) {
                ce.child.return = ce, ce = ce.child;
                continue;
              }
              if (ce === n)
                break e;
              for (; ce.sibling === null; ) {
                if (ce.return === null || ce.return === n)
                  break e;
                le === ce && (le = null), ce = ce.return;
              }
              le === ce && (le = null), ce.sibling.return = ce.return, ce = ce.sibling;
            }
        }
        break;
      case 19:
        pi(r, n), Mi(n), c & 4 && tu(n);
        break;
      case 21:
        break;
      default:
        pi(
          r,
          n
        ), Mi(n);
    }
  }
  function Mi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Vh(l)) {
              var c = l;
              break e;
            }
            l = l.return;
          }
          throw Error(d(160));
        }
        switch (c.tag) {
          case 5:
            var p = c.stateNode;
            c.flags & 32 && (ga(p, ""), c.flags &= -33);
            var h = Cf(n);
            Di(n, h, p);
            break;
          case 3:
          case 4:
            var x = c.stateNode.containerInfo, O = Cf(n);
            Uo(n, O, x);
            break;
          default:
            throw Error(d(161));
        }
      } catch (L) {
        Ln(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ih(n, r, l) {
    Be = n, jo(n);
  }
  function jo(n, r, l) {
    for (var c = (n.mode & 1) !== 0; Be !== null; ) {
      var p = Be, h = p.child;
      if (p.tag === 22 && c) {
        var x = p.memoizedState !== null || Is;
        if (!x) {
          var O = p.alternate, L = O !== null && O.memoizedState !== null || Gn;
          O = Is;
          var q = Gn;
          if (Is = x, (Gn = L) && !q)
            for (Be = p; Be !== null; )
              x = Be, L = x.child, x.tag === 22 && x.memoizedState !== null ? Wh(p) : L !== null ? (L.return = x, Be = L) : Wh(p);
          for (; h !== null; )
            Be = h, jo(h), h = h.sibling;
          Be = p, Is = O, Gn = q;
        }
        Yh(n);
      } else
        p.subtreeFlags & 8772 && h !== null ? (h.return = p, Be = h) : Yh(n);
    }
  }
  function Yh(n) {
    for (; Be !== null; ) {
      var r = Be;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Gn || Qs(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !Gn)
                  if (l === null)
                    c.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? l.memoizedProps : wa(r.type, l.memoizedProps);
                    c.componentDidUpdate(p, l.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = r.updateQueue;
                h !== null && Tl(r, h, c);
                break;
              case 3:
                var x = r.updateQueue;
                if (x !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Tl(r, x, l);
                }
                break;
              case 5:
                var O = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = O;
                  var L = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      L.autoFocus && l.focus();
                      break;
                    case "img":
                      L.src && (l.src = L.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var q = r.alternate;
                  if (q !== null) {
                    var le = q.memoizedState;
                    if (le !== null) {
                      var ce = le.dehydrated;
                      ce !== null && Ou(ce);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(d(163));
            }
          Gn || r.flags & 512 && Sp(r);
        } catch (ie) {
          Ln(r, r.return, ie);
        }
      }
      if (r === n) {
        Be = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Be = l;
        break;
      }
      Be = r.return;
    }
  }
  function Cp(n) {
    for (; Be !== null; ) {
      var r = Be;
      if (r === n) {
        Be = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Be = l;
        break;
      }
      Be = r.return;
    }
  }
  function Wh(n) {
    for (; Be !== null; ) {
      var r = Be;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Qs(4, r);
            } catch (L) {
              Ln(r, l, L);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var p = r.return;
              try {
                c.componentDidMount();
              } catch (L) {
                Ln(r, p, L);
              }
            }
            var h = r.return;
            try {
              Sp(r);
            } catch (L) {
              Ln(r, h, L);
            }
            break;
          case 5:
            var x = r.return;
            try {
              Sp(r);
            } catch (L) {
              Ln(r, x, L);
            }
        }
      } catch (L) {
        Ln(r, r.return, L);
      }
      if (r === n) {
        Be = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Be = O;
        break;
      }
      Be = r.return;
    }
  }
  var bf = Math.ceil, Gs = Se.ReactCurrentDispatcher, bp = Se.ReactCurrentOwner, wr = Se.ReactCurrentBatchConfig, Ot = 0, _n = null, Nn = null, rr = 0, _a = 0, Fo = Ct(0), qn = 0, qs = null, nu = 0, xf = 0, Ho = 0, Ul = null, Pr = null, xp = 0, $o = 1 / 0, ru = null, Tf = !1, Pl = null, Ni = null, Gu = !1, qu = null, wf = 0, Vo = 0, Rf = null, jl = -1, Fl = 0;
  function Rr() {
    return Ot & 6 ? jt() : jl !== -1 ? jl : jl = jt();
  }
  function Vn(n) {
    return n.mode & 1 ? Ot & 2 && rr !== 0 ? rr & -rr : Wc.transition !== null ? (Fl === 0 && (Fl = oo()), Fl) : (n = Vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ys(n.type)), n) : 1;
  }
  function _r(n, r, l, c) {
    if (50 < Vo)
      throw Vo = 0, Rf = null, Error(d(185));
    $i(n, l, c), (!(Ot & 2) || n !== _n) && (n === _n && (!(Ot & 2) && (xf |= l), qn === 4 && qa(n, rr)), kr(n, c), l === 1 && Ot === 0 && !(r.mode & 1) && ($o = jt() + 500, er && ra()));
  }
  function kr(n, r) {
    var l = n.callbackNode;
    wu(n, r);
    var c = zr(n, n === _n ? rr : 0);
    if (c === 0)
      l !== null && lr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (l != null && lr(l), r === 1)
        n.tag === 0 ? qd(Qh.bind(null, n)) : Gd(Qh.bind(null, n)), Yd(function() {
          !(Ot & 6) && ra();
        }), l = null;
      else {
        switch (co(c)) {
          case 1:
            l = ii;
            break;
          case 4:
            l = Rt;
            break;
          case 16:
            l = xi;
            break;
          case 536870912:
            l = uo;
            break;
          default:
            l = xi;
        }
        l = Op(l, Bo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Bo(n, r) {
    if (jl = -1, Fl = 0, Ot & 6)
      throw Error(d(327));
    var l = n.callbackNode;
    if (Yo() && n.callbackNode !== l)
      return null;
    var c = zr(n, n === _n ? rr : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = kf(n, c);
    else {
      r = c;
      var p = Ot;
      Ot |= 2;
      var h = _f();
      (_n !== n || rr !== r) && (ru = null, $o = jt() + 500, Hl(n, r));
      do
        try {
          wg();
          break;
        } catch (O) {
          Gh(n, O);
        }
      while (1);
      tp(), Gs.current = h, Ot = p, Nn !== null ? r = 0 : (_n = null, rr = 0, r = qn);
    }
    if (r !== 0) {
      if (r === 2 && (p = Ru(n), p !== 0 && (c = p, r = Tp(n, p))), r === 1)
        throw l = qs, Hl(n, 0), qa(n, c), kr(n, jt()), l;
      if (r === 6)
        qa(n, c);
      else {
        if (p = n.current.alternate, !(c & 30) && !wp(p) && (r = kf(n, c), r === 2 && (h = Ru(n), h !== 0 && (c = h, r = Tp(n, h))), r === 1))
          throw l = qs, Hl(n, 0), qa(n, c), kr(n, jt()), l;
        switch (n.finishedWork = p, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            $l(n, Pr, ru);
            break;
          case 3:
            if (qa(n, c), (c & 130023424) === c && (r = xp + 500 - jt(), 10 < r)) {
              if (zr(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & c) !== c) {
                Rr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Cl($l.bind(null, n, Pr, ru), r);
              break;
            }
            $l(n, Pr, ru);
            break;
          case 4:
            if (qa(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, p = -1; 0 < c; ) {
              var x = 31 - Ar(c);
              h = 1 << x, x = r[x], x > p && (p = x), c &= ~h;
            }
            if (c = p, c = jt() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * bf(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = Cl($l.bind(null, n, Pr, ru), c);
              break;
            }
            $l(n, Pr, ru);
            break;
          case 5:
            $l(n, Pr, ru);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return kr(n, jt()), n.callbackNode === l ? Bo.bind(null, n) : null;
  }
  function Tp(n, r) {
    var l = Ul;
    return n.current.memoizedState.isDehydrated && (Hl(n, r).flags |= 256), n = kf(n, r), n !== 2 && (r = Pr, Pr = l, r !== null && Ks(r)), n;
  }
  function Ks(n) {
    Pr === null ? Pr = n : Pr.push.apply(Pr, n);
  }
  function wp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var c = 0; c < l.length; c++) {
            var p = l[c], h = p.getSnapshot;
            p = p.value;
            try {
              if (!Fa(h(), p))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function qa(n, r) {
    for (r &= ~Ho, r &= ~xf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Ar(r), c = 1 << l;
      n[l] = -1, r &= ~c;
    }
  }
  function Qh(n) {
    if (Ot & 6)
      throw Error(d(327));
    Yo();
    var r = zr(n, 0);
    if (!(r & 1))
      return kr(n, jt()), null;
    var l = kf(n, r);
    if (n.tag !== 0 && l === 2) {
      var c = Ru(n);
      c !== 0 && (r = c, l = Tp(n, c));
    }
    if (l === 1)
      throw l = qs, Hl(n, 0), qa(n, r), kr(n, jt()), l;
    if (l === 6)
      throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, $l(n, Pr, ru), kr(n, jt()), null;
  }
  function Io(n, r) {
    var l = Ot;
    Ot |= 1;
    try {
      return n(r);
    } finally {
      Ot = l, Ot === 0 && ($o = jt() + 500, er && ra());
    }
  }
  function Ku(n) {
    qu !== null && qu.tag === 0 && !(Ot & 6) && Yo();
    var r = Ot;
    Ot |= 1;
    var l = wr.transition, c = Vt;
    try {
      if (wr.transition = null, Vt = 1, n)
        return n();
    } finally {
      Vt = c, wr.transition = l, Ot = r, !(Ot & 6) && ra();
    }
  }
  function Rp() {
    _a = Fo.current, Qt(Fo);
  }
  function Hl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ch(l)), Nn !== null)
      for (l = Nn.return; l !== null; ) {
        var c = l;
        switch (Xd(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && Va();
            break;
          case 3:
            Iu(), Qt(Mn), Qt(ct), Zc();
            break;
          case 5:
            kt(c);
            break;
          case 4:
            Iu();
            break;
          case 13:
            Qt(ut);
            break;
          case 19:
            Qt(ut);
            break;
          case 10:
            Hu(c.type._context);
            break;
          case 22:
          case 23:
            Rp();
        }
        l = l.return;
      }
    if (_n = n, Nn = n = Xu(n.current, null), rr = _a = r, qn = 0, qs = null, Ho = xf = nu = 0, Pr = Ul = null, sr !== null) {
      for (r = 0; r < sr.length; r++)
        if (l = sr[r], c = l.interleaved, c !== null) {
          l.interleaved = null;
          var p = c.next, h = l.pending;
          if (h !== null) {
            var x = h.next;
            h.next = p, c.next = x;
          }
          l.pending = c;
        }
      sr = null;
    }
    return n;
  }
  function Gh(n, r) {
    do {
      var l = Nn;
      try {
        if (tp(), Jc.current = mf, lt) {
          for (var c = mn.memoizedState; c !== null; ) {
            var p = c.queue;
            p !== null && (p.pending = null), c = c.next;
          }
          lt = !1;
        }
        if (Rl = 0, Lt = ee = mn = null, Oi = !1, Ra = 0, bp.current = null, l === null || l.return === null) {
          qn = 1, qs = r, Nn = null;
          break;
        }
        e: {
          var h = n, x = l.return, O = l, L = r;
          if (r = rr, O.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var q = L, le = O, ce = le.tag;
            if (!(le.mode & 1) && (ce === 0 || ce === 11 || ce === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var Ae = cp(x);
            if (Ae !== null) {
              Ae.flags &= -257, fp(Ae, x, O, h, r), Ae.mode & 1 && Uh(h, q, r), r = Ae, L = q;
              var Ie = r.updateQueue;
              if (Ie === null) {
                var Qe = /* @__PURE__ */ new Set();
                Qe.add(L), r.updateQueue = Qe;
              } else
                Ie.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Uh(h, q, r), _p();
                break e;
              }
              L = Error(d(426));
            }
          } else if (hn && O.mode & 1) {
            var Pn = cp(x);
            if (Pn !== null) {
              !(Pn.flags & 65536) && (Pn.flags |= 256), fp(Pn, x, O, h, r), Jd(No(L, O));
              break e;
            }
          }
          h = L = No(L, O), qn !== 4 && (qn = 2), Ul === null ? Ul = [h] : Ul.push(h), h = x;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var H = zh(h, L, r);
                ap(h, H);
                break e;
              case 1:
                O = L;
                var U = h.type, I = h.stateNode;
                if (!(h.flags & 128) && (typeof U.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Ni === null || !Ni.has(I)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var me = $s(h, O, r);
                  ap(h, me);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        kp(l);
      } catch (qe) {
        r = qe, Nn === l && l !== null && (Nn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function _f() {
    var n = Gs.current;
    return Gs.current = mf, n === null ? mf : n;
  }
  function _p() {
    (qn === 0 || qn === 3 || qn === 2) && (qn = 4), _n === null || !(nu & 268435455) && !(xf & 268435455) || qa(_n, rr);
  }
  function kf(n, r) {
    var l = Ot;
    Ot |= 2;
    var c = _f();
    (_n !== n || rr !== r) && (ru = null, Hl(n, r));
    do
      try {
        Tg();
        break;
      } catch (p) {
        Gh(n, p);
      }
    while (1);
    if (tp(), Ot = l, Gs.current = c, Nn !== null)
      throw Error(d(261));
    return _n = null, rr = 0, qn;
  }
  function Tg() {
    for (; Nn !== null; )
      qh(Nn);
  }
  function wg() {
    for (; Nn !== null && !bi(); )
      qh(Nn);
  }
  function qh(n) {
    var r = Xh(n.alternate, n, _a);
    n.memoizedProps = n.pendingProps, r === null ? kp(n) : Nn = r, bp.current = null;
  }
  function kp(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = gp(l, r), l !== null) {
          l.flags &= 32767, Nn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          qn = 6, Nn = null;
          return;
        }
      } else if (l = xg(l, r, _a), l !== null) {
        Nn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Nn = r;
        return;
      }
      Nn = r = n;
    } while (r !== null);
    qn === 0 && (qn = 5);
  }
  function $l(n, r, l) {
    var c = Vt, p = wr.transition;
    try {
      wr.transition = null, Vt = 1, Rg(n, r, l, c);
    } finally {
      wr.transition = p, Vt = c;
    }
    return null;
  }
  function Rg(n, r, l, c) {
    do
      Yo();
    while (qu !== null);
    if (Ot & 6)
      throw Error(d(327));
    l = n.finishedWork;
    var p = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = l.lanes | l.childLanes;
    if (Td(n, h), n === _n && (Nn = _n = null, rr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Gu || (Gu = !0, Op(xi, function() {
      return Yo(), null;
    })), h = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || h) {
      h = wr.transition, wr.transition = null;
      var x = Vt;
      Vt = 1;
      var O = Ot;
      Ot |= 4, bp.current = null, $h(n, l), Bh(l, n), zc(El), ja = !!Bd, El = Bd = null, n.current = l, Ih(l), io(), Ot = O, Vt = x, wr.transition = h;
    } else
      n.current = l;
    if (Gu && (Gu = !1, qu = n, wf = p), h = n.pendingLanes, h === 0 && (Ni = null), vs(l.stateNode), kr(n, jt()), r !== null)
      for (c = n.onRecoverableError, l = 0; l < r.length; l++)
        p = r[l], c(p.value, { componentStack: p.stack, digest: p.digest });
    if (Tf)
      throw Tf = !1, n = Pl, Pl = null, n;
    return wf & 1 && n.tag !== 0 && Yo(), h = n.pendingLanes, h & 1 ? n === Rf ? Vo++ : (Vo = 0, Rf = n) : Vo = 0, ra(), null;
  }
  function Yo() {
    if (qu !== null) {
      var n = co(wf), r = wr.transition, l = Vt;
      try {
        if (wr.transition = null, Vt = 16 > n ? 16 : n, qu === null)
          var c = !1;
        else {
          if (n = qu, qu = null, wf = 0, Ot & 6)
            throw Error(d(331));
          var p = Ot;
          for (Ot |= 4, Be = n.current; Be !== null; ) {
            var h = Be, x = h.child;
            if (Be.flags & 16) {
              var O = h.deletions;
              if (O !== null) {
                for (var L = 0; L < O.length; L++) {
                  var q = O[L];
                  for (Be = q; Be !== null; ) {
                    var le = Be;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ws(8, le, h);
                    }
                    var ce = le.child;
                    if (ce !== null)
                      ce.return = le, Be = ce;
                    else
                      for (; Be !== null; ) {
                        le = Be;
                        var ie = le.sibling, Ae = le.return;
                        if (Ep(le), le === q) {
                          Be = null;
                          break;
                        }
                        if (ie !== null) {
                          ie.return = Ae, Be = ie;
                          break;
                        }
                        Be = Ae;
                      }
                  }
                }
                var Ie = h.alternate;
                if (Ie !== null) {
                  var Qe = Ie.child;
                  if (Qe !== null) {
                    Ie.child = null;
                    do {
                      var Pn = Qe.sibling;
                      Qe.sibling = null, Qe = Pn;
                    } while (Qe !== null);
                  }
                }
                Be = h;
              }
            }
            if (h.subtreeFlags & 2064 && x !== null)
              x.return = h, Be = x;
            else
              e:
                for (; Be !== null; ) {
                  if (h = Be, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ws(9, h, h.return);
                    }
                  var H = h.sibling;
                  if (H !== null) {
                    H.return = h.return, Be = H;
                    break e;
                  }
                  Be = h.return;
                }
          }
          var U = n.current;
          for (Be = U; Be !== null; ) {
            x = Be;
            var I = x.child;
            if (x.subtreeFlags & 2064 && I !== null)
              I.return = x, Be = I;
            else
              e:
                for (x = U; Be !== null; ) {
                  if (O = Be, O.flags & 2048)
                    try {
                      switch (O.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qs(9, O);
                      }
                    } catch (qe) {
                      Ln(O, O.return, qe);
                    }
                  if (O === x) {
                    Be = null;
                    break e;
                  }
                  var me = O.sibling;
                  if (me !== null) {
                    me.return = O.return, Be = me;
                    break e;
                  }
                  Be = O.return;
                }
          }
          if (Ot = p, ra(), Zr && typeof Zr.onPostCommitFiberRoot == "function")
            try {
              Zr.onPostCommitFiberRoot(bu, n);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        Vt = l, wr.transition = r;
      }
    }
    return !1;
  }
  function Kh(n, r, l) {
    r = No(l, r), r = zh(n, r, 1), n = Vu(n, r, 1), r = Rr(), n !== null && ($i(n, 1, r), kr(n, r));
  }
  function Ln(n, r, l) {
    if (n.tag === 3)
      Kh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Kh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var c = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ni === null || !Ni.has(c))) {
            n = No(l, n), n = $s(r, n, 1), r = Vu(r, n, 1), n = Rr(), r !== null && ($i(r, 1, n), kr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function _g(n, r, l) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = Rr(), n.pingedLanes |= n.suspendedLanes & l, _n === n && (rr & l) === l && (qn === 4 || qn === 3 && (rr & 130023424) === rr && 500 > jt() - xp ? Hl(n, 0) : Ho |= l), kr(n, r);
  }
  function Of(n, r) {
    r === 0 && (n.mode & 1 ? (r = xu, xu <<= 1, !(xu & 130023424) && (xu = 4194304)) : r = 1);
    var l = Rr();
    n = Xi(n, r), n !== null && ($i(n, r, l), kr(n, l));
  }
  function kg(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Of(n, l);
  }
  function Og(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, p = n.memoizedState;
        p !== null && (l = p.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    c !== null && c.delete(r), Of(n, l);
  }
  var Xh;
  Xh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Mn.current)
        $n = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return $n = !1, eu(n, r, l);
        $n = !!(n.flags & 131072);
      }
    else
      $n = !1, hn && r.flags & 1048576 && Kd(r, wo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        xr(n, r), n = r.pendingProps;
        var p = $a(r, ct.current);
        Re(r, l), p = Yu(null, r, c, n, p, l);
        var h = Ol();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sn(c) ? (h = !0, $c(r)) : h = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, rp(r), p.updater = qc, r.stateNode = p, p._reactInternals = r, Kc(r, c, n, l), r = Ph(null, r, c, !0, h, l)) : (r.tag = 0, hn && h && Vc(r), Wn(null, r, p, l), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (xr(n, r), n = r.pendingProps, p = c._init, c = p(c._payload), r.type = c, p = r.tag = Mg(c), n = wa(c, n), p) {
            case 0:
              r = Lo(null, r, c, n, l);
              break e;
            case 1:
              r = dp(null, r, c, n, l);
              break e;
            case 11:
              r = Qu(null, r, c, n, l);
              break e;
            case 14:
              r = gf(null, r, c, wa(c.type, n), l);
              break e;
          }
          throw Error(d(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : wa(c, p), Lo(n, r, c, p, l);
      case 1:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : wa(c, p), dp(n, r, c, p, l);
      case 3:
        e: {
          if (jh(r), n === null)
            throw Error(d(387));
          c = r.pendingProps, h = r.memoizedState, p = h.element, Yn(n, r), Bu(r, c, null, l);
          var x = r.memoizedState;
          if (c = x.element, h.isDehydrated)
            if (h = { element: c, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              p = No(Error(d(423)), r), r = Sf(n, r, c, l, p);
              break e;
            } else if (c !== p) {
              p = No(Error(d(424)), r), r = Sf(n, r, c, l, p);
              break e;
            } else
              for (ua = fi(r.stateNode.containerInfo.firstChild), Ta = r, hn = !0, Ia = null, l = Lh(r, null, c, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (wn(), c === p) {
              r = cr(n, r, l);
              break e;
            }
            Wn(n, r, c, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return at(r), n === null && Ic(r), c = r.type, p = r.pendingProps, h = n !== null ? n.memoizedProps : null, x = p.children, Os(c, p) ? x = null : h !== null && Os(c, h) && (r.flags |= 32), bt(n, r), Wn(n, r, x, l), r.child;
      case 6:
        return n === null && Ic(r), null;
      case 13:
        return vp(n, r, l);
      case 4:
        return up(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = _o(r, null, c, l) : Wn(n, r, c, l), r.child;
      case 11:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : wa(c, p), Qu(n, r, c, p, l);
      case 7:
        return Wn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Wn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Wn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (c = r.type._context, p = r.pendingProps, h = r.memoizedProps, x = p.value, Zt(ki, c._currentValue), c._currentValue = x, h !== null)
            if (Fa(h.value, x)) {
              if (h.children === p.children && !Mn.current) {
                r = cr(n, r, l);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var O = h.dependencies;
                if (O !== null) {
                  x = h.child;
                  for (var L = O.firstContext; L !== null; ) {
                    if (L.context === c) {
                      if (h.tag === 1) {
                        L = Zi(-1, l & -l), L.tag = 2;
                        var q = h.updateQueue;
                        if (q !== null) {
                          q = q.shared;
                          var le = q.pending;
                          le === null ? L.next = L : (L.next = le.next, le.next = L), q.pending = L;
                        }
                      }
                      h.lanes |= l, L = h.alternate, L !== null && (L.lanes |= l), tr(
                        h.return,
                        l,
                        r
                      ), O.lanes |= l;
                      break;
                    }
                    L = L.next;
                  }
                } else if (h.tag === 10)
                  x = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (x = h.return, x === null)
                    throw Error(d(341));
                  x.lanes |= l, O = x.alternate, O !== null && (O.lanes |= l), tr(x, l, r), x = h.sibling;
                } else
                  x = h.child;
                if (x !== null)
                  x.return = h;
                else
                  for (x = h; x !== null; ) {
                    if (x === r) {
                      x = null;
                      break;
                    }
                    if (h = x.sibling, h !== null) {
                      h.return = x.return, x = h;
                      break;
                    }
                    x = x.return;
                  }
                h = x;
              }
          Wn(n, r, p.children, l), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, c = r.pendingProps.children, Re(r, l), p = Un(p), c = c(p), r.flags |= 1, Wn(n, r, c, l), r.child;
      case 14:
        return c = r.type, p = wa(c, r.pendingProps), p = wa(c.type, p), gf(n, r, c, p, l);
      case 15:
        return sa(n, r, r.type, r.pendingProps, l);
      case 17:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : wa(c, p), xr(n, r), r.tag = 1, Sn(c) ? (n = !0, $c(r)) : n = !1, Re(r, l), Oh(r, c, p), Kc(r, c, p, l), Ph(null, r, c, !0, n, l);
      case 19:
        return yp(n, r, l);
      case 22:
        return Ll(n, r, l);
    }
    throw Error(d(156, r.tag));
  };
  function Op(n, r) {
    return dn(n, r);
  }
  function Dg(n, r, l, c) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ka(n, r, l, c) {
    return new Dg(n, r, l, c);
  }
  function Dp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Mg(n) {
    if (typeof n == "function")
      return Dp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === vt)
        return 11;
      if (n === xt)
        return 14;
    }
    return 2;
  }
  function Xu(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ka(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Df(n, r, l, c, p, h) {
    var x = 2;
    if (c = n, typeof n == "function")
      Dp(n) && (x = 1);
    else if (typeof n == "string")
      x = 5;
    else
      e:
        switch (n) {
          case je:
            return Vl(l.children, p, h, r);
          case gt:
            x = 8, p |= 8;
            break;
          case pt:
            return n = Ka(12, l, r, p | 2), n.elementType = pt, n.lanes = h, n;
          case ge:
            return n = Ka(13, l, r, p), n.elementType = ge, n.lanes = h, n;
          case Ve:
            return n = Ka(19, l, r, p), n.elementType = Ve, n.lanes = h, n;
          case Ee:
            return Xs(l, p, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case ot:
                  x = 10;
                  break e;
                case be:
                  x = 9;
                  break e;
                case vt:
                  x = 11;
                  break e;
                case xt:
                  x = 14;
                  break e;
                case Xe:
                  x = 16, c = null;
                  break e;
              }
            throw Error(d(130, n == null ? n : typeof n, ""));
        }
    return r = Ka(x, l, r, p), r.elementType = n, r.type = c, r.lanes = h, r;
  }
  function Vl(n, r, l, c) {
    return n = Ka(7, n, c, r), n.lanes = l, n;
  }
  function Xs(n, r, l, c) {
    return n = Ka(22, n, c, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Zs(n, r, l) {
    return n = Ka(6, n, null, r), n.lanes = l, n;
  }
  function Bl(n, r, l) {
    return r = Ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ng(n, r, l, c, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = so(0), this.expirationTimes = so(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = so(0), this.identifierPrefix = c, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Mf(n, r, l, c, p, h, x, O, L) {
    return n = new Ng(n, r, l, O, L), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Ka(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: c, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, rp(h), n;
  }
  function Zh(n, r, l) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Pe, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: l };
  }
  function Mp(n) {
    if (!n)
      return _i;
    n = n._reactInternals;
    e: {
      if (St(n) !== n || n.tag !== 1)
        throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Sn(l))
        return Ns(n, l, r);
    }
    return r;
  }
  function Jh(n, r, l, c, p, h, x, O, L) {
    return n = Mf(l, c, !0, n, p, h, x, O, L), n.context = Mp(null), l = n.current, c = Rr(), p = Vn(l), h = Zi(c, p), h.callback = r ?? null, Vu(l, h, p), n.current.lanes = p, $i(n, p, c), kr(n, c), n;
  }
  function Js(n, r, l, c) {
    var p = r.current, h = Rr(), x = Vn(p);
    return l = Mp(l), r.context === null ? r.context = l : r.pendingContext = l, r = Zi(h, x), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = Vu(p, r, x), n !== null && (_r(n, p, x, h), Gc(n, p, x)), x;
  }
  function Nf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function em(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Np(n, r) {
    em(n, r), (n = n.alternate) && em(n, r);
  }
  function tm() {
    return null;
  }
  var Lp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Lf(n) {
    this._internalRoot = n;
  }
  au.prototype.render = Lf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(d(409));
    Js(n, r, null, null);
  }, au.prototype.unmount = Lf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ku(function() {
        Js(null, n, null, null);
      }), r[qi] = null;
    }
  };
  function au(n) {
    this._internalRoot = n;
  }
  au.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = po();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xt.length && r !== 0 && r < Xt[l].priority; l++)
        ;
      Xt.splice(l, 0, n), l === 0 && kc(n);
    }
  };
  function Ap(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Af(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function nm() {
  }
  function Lg(n, r, l, c, p) {
    if (p) {
      if (typeof c == "function") {
        var h = c;
        c = function() {
          var q = Nf(x);
          h.call(q);
        };
      }
      var x = Jh(r, c, n, 0, null, !1, !1, "", nm);
      return n._reactRootContainer = x, n[qi] = x.current, xo(n.nodeType === 8 ? n.parentNode : n), Ku(), x;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof c == "function") {
      var O = c;
      c = function() {
        var q = Nf(L);
        O.call(q);
      };
    }
    var L = Mf(n, 0, !1, null, null, !1, !1, "", nm);
    return n._reactRootContainer = L, n[qi] = L.current, xo(n.nodeType === 8 ? n.parentNode : n), Ku(function() {
      Js(r, L, l, c);
    }), L;
  }
  function zf(n, r, l, c, p) {
    var h = l._reactRootContainer;
    if (h) {
      var x = h;
      if (typeof p == "function") {
        var O = p;
        p = function() {
          var L = Nf(x);
          O.call(L);
        };
      }
      Js(r, x, n, p);
    } else
      x = Lg(l, r, n, p, c);
    return Nf(x);
  }
  pl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ui(r.pendingLanes);
          l !== 0 && (Ti(r, l | 1), kr(r, jt()), !(Ot & 6) && ($o = jt() + 500, ra()));
        }
        break;
      case 13:
        Ku(function() {
          var c = Xi(n, 1);
          if (c !== null) {
            var p = Rr();
            _r(c, n, 1, p);
          }
        }), Np(n, 1);
    }
  }, fo = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var l = Rr();
        _r(r, n, 134217728, l);
      }
      Np(n, 134217728);
    }
  }, Ft = function(n) {
    if (n.tag === 13) {
      var r = Vn(n), l = Xi(n, r);
      if (l !== null) {
        var c = Rr();
        _r(l, n, r, c);
      }
      Np(n, r);
    }
  }, po = function() {
    return Vt;
  }, vo = function(n, r) {
    var l = Vt;
    try {
      return Vt = n, r();
    } finally {
      Vt = l;
    }
  }, Nr = function(n, r, l) {
    switch (r) {
      case "input":
        if (An(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var c = l[r];
            if (c !== n && c.form === n.form) {
              var p = et(c);
              if (!p)
                throw Error(d(90));
              Ce(c), An(c, p);
            }
          }
        }
        break;
      case "textarea":
        ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Sr(n, !!l.multiple, r, !1);
    }
  }, dl = Io, ao = Ku;
  var Ag = { usingClientEntryPoint: !1, Events: [Ms, To, et, Ua, Su, Io] }, Wo = { findFiberByHostInstance: Ha, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, zg = { bundleType: Wo.bundleType, version: Wo.version, rendererPackageName: Wo.rendererPackageName, rendererConfig: Wo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Fn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Wo.findFiberByHostInstance || tm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uf.isDisabled && Uf.supportsFiber)
      try {
        bu = Uf.inject(zg), Zr = Uf;
      } catch {
      }
  }
  return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ag, ni.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ap(r))
      throw Error(d(200));
    return Zh(n, r, null, l);
  }, ni.createRoot = function(n, r) {
    if (!Ap(n))
      throw Error(d(299));
    var l = !1, c = "", p = Lp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Mf(n, 1, !1, null, null, l, !1, c, p), n[qi] = r.current, xo(n.nodeType === 8 ? n.parentNode : n), new Lf(r);
  }, ni.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Fn(r), n = n === null ? null : n.stateNode, n;
  }, ni.flushSync = function(n) {
    return Ku(n);
  }, ni.hydrate = function(n, r, l) {
    if (!Af(r))
      throw Error(d(200));
    return zf(null, n, r, !0, l);
  }, ni.hydrateRoot = function(n, r, l) {
    if (!Ap(n))
      throw Error(d(405));
    var c = l != null && l.hydratedSources || null, p = !1, h = "", x = Lp;
    if (l != null && (l.unstable_strictMode === !0 && (p = !0), l.identifierPrefix !== void 0 && (h = l.identifierPrefix), l.onRecoverableError !== void 0 && (x = l.onRecoverableError)), r = Jh(r, null, n, 1, l ?? null, p, !1, h, x), n[qi] = r.current, xo(n), c)
      for (n = 0; n < c.length; n++)
        l = c[n], p = l._getVersion, p = p(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, p] : r.mutableSourceEagerHydrationData.push(
          l,
          p
        );
    return new au(r);
  }, ni.render = function(n, r, l) {
    if (!Af(r))
      throw Error(d(200));
    return zf(null, n, r, !1, l);
  }, ni.unmountComponentAtNode = function(n) {
    if (!Af(n))
      throw Error(d(40));
    return n._reactRootContainer ? (Ku(function() {
      zf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, ni.unstable_batchedUpdates = Io, ni.unstable_renderSubtreeIntoContainer = function(n, r, l, c) {
    if (!Af(l))
      throw Error(d(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(d(38));
    return zf(n, r, l, !1, c);
  }, ni.version = "18.2.0-next-9e3b772b8-20220608", ni;
}
var ri = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cw;
function lP() {
  return cw || (cw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var u = Qr, s = pR(), d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = !1;
    function E(e) {
      m = e;
    }
    function S(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        T("warn", e, a);
      }
    }
    function y(e) {
      if (!m) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        T("error", e, a);
      }
    }
    function T(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var f = a.map(function(v) {
          return String(v);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var k = 0, D = 1, j = 2, A = 3, B = 4, K = 5, te = 6, fe = 7, ye = 8, Ue = 9, oe = 10, se = 11, Se = 12, G = 13, Pe = 14, je = 15, gt = 16, pt = 17, ot = 18, be = 19, vt = 21, ge = 22, Ve = 23, xt = 24, Xe = 25, Ee = !0, ue = !1, ke = !1, R = !1, F = !1, ne = !0, ve = !1, pe = !1, Le = !0, Te = !0, De = !0, Me = /* @__PURE__ */ new Set(), Ge = {}, dt = {};
    function Yt(e, t) {
      Ce(e, t), Ce(e + "Capture", t);
    }
    function Ce(e, t) {
      Ge[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ge[e] = t;
      {
        var a = e.toLowerCase();
        dt[a] = e, e === "onDoubleClick" && (dt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Me.add(t[i]);
    }
    var Pt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Cn = Object.prototype.hasOwnProperty;
    function On(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function In(e) {
      try {
        return An(e), !1;
      } catch {
        return !0;
      }
    }
    function An(e) {
      return "" + e;
    }
    function Gr(e, t) {
      if (In(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), An(e);
    }
    function qr(e) {
      if (In(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), An(e);
    }
    function Xn(e, t) {
      if (In(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), An(e);
    }
    function Sr(e, t) {
      if (In(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), An(e);
    }
    function Kr(e) {
      if (In(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), An(e);
    }
    function Er(e) {
      if (In(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", On(e)), An(e);
    }
    var ya = 0, ur = 1, Xr = 2, bn = 3, Mr = 4, gi = 5, ga = 6, xe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ze = xe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Tt = new RegExp("^[" + xe + "][" + Ze + "]*$"), Wt = {}, Gt = {};
    function zn(e) {
      return Cn.call(Gt, e) ? !0 : Cn.call(Wt, e) ? !1 : Tt.test(e) ? (Gt[e] = !0, !0) : (Wt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function xn(e, t, a) {
      return t !== null ? t.type === ya : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Cr(e, t, a, i) {
      if (a !== null && a.type === ya)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function en(e, t, a, i) {
      if (t === null || typeof t > "u" || Cr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case bn:
            return !t;
          case Mr:
            return t === !1;
          case gi:
            return isNaN(t);
          case ga:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Nr(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function qt(e, t, a, i, o, f, v) {
      this.acceptsBooleans = t === Xr || t === bn || t === Mr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = v;
    }
    var Kt = {}, ai = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ai.forEach(function(e) {
      Kt[e] = new qt(
        e,
        ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Kt[t] = new qt(
        t,
        ur,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        Xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        Xr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        bn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        bn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        Mr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new qt(
        e,
        ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        gi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ua = /[\-\:]([a-z])/g, Su = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ua, Su);
      Kt[t] = new qt(
        t,
        ur,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ua, Su);
      Kt[t] = new qt(
        t,
        ur,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ua, Su);
      Kt[t] = new qt(
        t,
        ur,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        ur,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var dl = "xlinkHref";
    Kt[dl] = new qt(
      "xlinkHref",
      ur,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new qt(
        e,
        ur,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ao = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Hi = !1;
    function Eu(e) {
      !Hi && ao.test(e) && (Hi = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Sa(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Gr(a, t), i.sanitizeURL && Eu("" + a);
        var f = i.attributeName, v = null;
        if (i.type === Mr) {
          if (e.hasAttribute(f)) {
            var g = e.getAttribute(f);
            return g === "" ? !0 : en(t, a, i, !1) ? g : g === "" + a ? a : g;
          }
        } else if (e.hasAttribute(f)) {
          if (en(t, a, i, !1))
            return e.getAttribute(f);
          if (i.type === bn)
            return a;
          v = e.getAttribute(f);
        }
        return en(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function Si(e, t, a, i) {
      {
        if (!zn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Gr(a, t), o === "" + a ? a : o;
      }
    }
    function Ea(e, t, a, i) {
      var o = Nr(t);
      if (!xn(t, o, i)) {
        if (en(t, a, o, i) && (a = null), i || o === null) {
          if (zn(t)) {
            var f = t;
            a === null ? e.removeAttribute(f) : (Gr(a, t), e.setAttribute(f, "" + a));
          }
          return;
        }
        var v = o.mustUseProperty;
        if (v) {
          var g = o.propertyName;
          if (a === null) {
            var C = o.type;
            e[g] = C === bn ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var w = o.attributeName, _ = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(w);
        else {
          var P = o.type, z;
          P === bn || P === Mr && a === !0 ? z = "" : (Gr(a, w), z = "" + a, o.sanitizeURL && Eu(z.toString())), _ ? e.setAttributeNS(_, w, z) : e.setAttribute(w, z);
        }
      }
    }
    var Ei = Symbol.for("react.element"), Lr = Symbol.for("react.portal"), Ca = Symbol.for("react.fragment"), Ci = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), we = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), St = Symbol.for("react.suspense"), Nt = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), Fn = Symbol.for("react.scope"), fn = Symbol.for("react.debug_trace_mode"), dn = Symbol.for("react.offscreen"), lr = Symbol.for("react.legacy_hidden"), bi = Symbol.for("react.cache"), io = Symbol.for("react.tracing_marker"), jt = Symbol.iterator, xd = "@@iterator";
    function ii(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = jt && e[jt] || e[xd];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, xi = 0, Cu, uo, bu, Zr, vs, Ar, hs;
    function ms() {
    }
    ms.__reactDisabledLog = !0;
    function Rc() {
      {
        if (xi === 0) {
          Cu = console.log, uo = console.info, bu = console.warn, Zr = console.error, vs = console.group, Ar = console.groupCollapsed, hs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ms,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        xi++;
      }
    }
    function lo() {
      {
        if (xi--, xi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, e, {
              value: Cu
            }),
            info: Rt({}, e, {
              value: uo
            }),
            warn: Rt({}, e, {
              value: bu
            }),
            error: Rt({}, e, {
              value: Zr
            }),
            group: Rt({}, e, {
              value: vs
            }),
            groupCollapsed: Rt({}, e, {
              value: Ar
            }),
            groupEnd: Rt({}, e, {
              value: hs
            })
          });
        }
        xi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xu = d.ReactCurrentDispatcher, ui;
    function zr(e, t, a) {
      {
        if (ui === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ui = i && i[1] || "";
          }
        return `
` + ui + e;
      }
    }
    var Tu = !1, wu;
    {
      var Ru = typeof WeakMap == "function" ? WeakMap : Map;
      wu = new Ru();
    }
    function oo(e, t) {
      if (!e || Tu)
        return "";
      {
        var a = wu.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Tu = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = xu.current, xu.current = null, Rc();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (Q) {
              i = Q;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (Q) {
              i = Q;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            i = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && i && typeof Q.stack == "string") {
          for (var g = Q.stack.split(`
`), C = i.stack.split(`
`), w = g.length - 1, _ = C.length - 1; w >= 1 && _ >= 0 && g[w] !== C[_]; )
            _--;
          for (; w >= 1 && _ >= 0; w--, _--)
            if (g[w] !== C[_]) {
              if (w !== 1 || _ !== 1)
                do
                  if (w--, _--, _ < 0 || g[w] !== C[_]) {
                    var P = `
` + g[w].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && wu.set(e, P), P;
                  }
                while (w >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        Tu = !1, xu.current = f, lo(), Error.prepareStackTrace = o;
      }
      var z = e ? e.displayName || e.name : "", Y = z ? zr(z) : "";
      return typeof e == "function" && wu.set(e, Y), Y;
    }
    function so(e, t, a) {
      return oo(e, !0);
    }
    function $i(e, t, a) {
      return oo(e, !1);
    }
    function Td(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ti(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return oo(e, Td(e));
      if (typeof e == "string")
        return zr(e);
      switch (e) {
        case St:
          return zr("Suspense");
        case Nt:
          return zr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Fe:
            return $i(e.render);
          case Et:
            return Ti(e.type, t, a);
          case tt: {
            var i = e, o = i._payload, f = i._init;
            try {
              return Ti(f(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Vt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case K:
          return zr(e.type);
        case gt:
          return zr("Lazy");
        case G:
          return zr("Suspense");
        case be:
          return zr("SuspenseList");
        case k:
        case j:
        case je:
          return $i(e.type);
        case se:
          return $i(e.type.render);
        case D:
          return so(e.type);
        default:
          return "";
      }
    }
    function co(e) {
      try {
        var t = "", a = e;
        do
          t += Vt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function pl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function fo(e) {
      return e.displayName || "Context";
    }
    function Ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ca:
          return "Fragment";
        case Lr:
          return "Portal";
        case N:
          return "Profiler";
        case Ci:
          return "StrictMode";
        case St:
          return "Suspense";
        case Nt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case we:
            var t = e;
            return fo(t) + ".Consumer";
          case ae:
            var a = e;
            return fo(a._context) + ".Provider";
          case Fe:
            return pl(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : Ft(e.type) || "Memo";
          case tt: {
            var o = e, f = o._payload, v = o._init;
            try {
              return Ft(v(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function po(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vo(e) {
      return e.displayName || "Context";
    }
    function ht(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case xt:
          return "Cache";
        case Ue:
          var i = a;
          return vo(i) + ".Consumer";
        case oe:
          var o = a;
          return vo(o._context) + ".Provider";
        case ot:
          return "DehydratedFragment";
        case se:
          return po(a, a.render, "ForwardRef");
        case fe:
          return "Fragment";
        case K:
          return a;
        case B:
          return "Portal";
        case A:
          return "Root";
        case te:
          return "Text";
        case gt:
          return Ft(a);
        case ye:
          return a === Ci ? "StrictMode" : "Mode";
        case ge:
          return "Offscreen";
        case Se:
          return "Profiler";
        case vt:
          return "Scope";
        case G:
          return "Suspense";
        case be:
          return "SuspenseList";
        case Xe:
          return "TracingMarker";
        case D:
        case k:
        case pt:
        case j:
        case Pe:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vl = d.ReactDebugCurrentFrame, Tn = null, Jr = !1;
    function Ur() {
      {
        if (Tn === null)
          return null;
        var e = Tn._debugOwner;
        if (e !== null && typeof e < "u")
          return ht(e);
      }
      return null;
    }
    function _u() {
      return Tn === null ? "" : co(Tn);
    }
    function Dn() {
      vl.getCurrentStack = null, Tn = null, Jr = !1;
    }
    function Xt(e) {
      vl.getCurrentStack = e === null ? null : _u, Tn = e, Jr = !1;
    }
    function _c() {
      return Tn;
    }
    function ea(e) {
      Jr = e;
    }
    function Zn(e) {
      return "" + e;
    }
    function wi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Er(e), e;
        default:
          return "";
      }
    }
    var kc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Vi(e, t) {
      kc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ku(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Oc(e) {
      return e._valueTracker;
    }
    function Pa(e) {
      e._valueTracker = null;
    }
    function Ou(e) {
      var t = "";
      return e && (ku(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Du(e) {
      var t = ku(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Er(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, f = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(g) {
            Er(g), i = "" + g, f.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(g) {
            Er(g), i = "" + g;
          },
          stopTracking: function() {
            Pa(e), delete e[t];
          }
        };
        return v;
      }
    }
    function ja(e) {
      Oc(e) || (e._valueTracker = Du(e));
    }
    function ho(e) {
      if (!e)
        return !1;
      var t = Oc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ou(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Mu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Nu = !1, hl = !1, mo = !1, ys = !1;
    function li(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function b(e, t) {
      var a = e, i = t.checked, o = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function M(e, t) {
      Vi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hl && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), hl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Nu && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), Nu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wi(t.value != null ? t.value : i),
        controlled: li(t)
      };
    }
    function W(e, t) {
      var a = e, i = t.checked;
      i != null && Ea(a, "checked", i, !1);
    }
    function X(e, t) {
      var a = e;
      {
        var i = li(t);
        !a._wrapperState.controlled && i && !ys && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ys = !0), a._wrapperState.controlled && !i && !mo && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), mo = !0);
      }
      W(e, t);
      var o = wi(t.value), f = t.type;
      if (o != null)
        f === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Zn(o)) : a.value !== Zn(o) && (a.value = Zn(o));
      else if (f === "submit" || f === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? rt(a, t.type, o) : t.hasOwnProperty("defaultValue") && rt(a, t.type, wi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function he(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, f = o === "submit" || o === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var v = Zn(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var g = i.name;
      g !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, g !== "" && (i.name = g);
    }
    function it(e, t) {
      var a = e;
      X(a, t), Oe(a, t);
    }
    function Oe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Gr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), f = 0; f < o.length; f++) {
          var v = o[f];
          if (!(v === e || v.form !== e.form)) {
            var g = Sm(v);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ho(v), X(v, g);
          }
        }
      }
    }
    function rt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Mu(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Zn(e._wrapperState.initialValue) : e.defaultValue !== Zn(a) && (e.defaultValue = Zn(a)));
    }
    var _t = !1, Ht = !1, ln = !1;
    function tn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? u.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ln || (ln = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !_t && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), _t = !0);
    }
    function on(e, t) {
      t.value != null && e.setAttribute("value", Zn(wi(t.value)));
    }
    var pn = Array.isArray;
    function Mt(e) {
      return pn(e);
    }
    var Bi;
    Bi = !1;
    function yo() {
      var e = Ur();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var gs = ["value", "defaultValue"];
    function wd(e) {
      {
        Vi("select", e);
        for (var t = 0; t < gs.length; t++) {
          var a = gs[t];
          if (e[a] != null) {
            var i = Mt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yo()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yo());
          }
        }
      }
    }
    function oi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var f = a, v = {}, g = 0; g < f.length; g++)
          v["$" + f[g]] = !0;
        for (var C = 0; C < o.length; C++) {
          var w = v.hasOwnProperty("$" + o[C].value);
          o[C].selected !== w && (o[C].selected = w), w && i && (o[C].defaultSelected = !0);
        }
      } else {
        for (var _ = Zn(wi(a)), P = null, z = 0; z < o.length; z++) {
          if (o[z].value === _) {
            o[z].selected = !0, i && (o[z].defaultSelected = !0);
            return;
          }
          P === null && !o[z].disabled && (P = o[z]);
        }
        P !== null && (P.selected = !0);
      }
    }
    function Ss(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function Es(e, t) {
      var a = e;
      wd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Bi && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Bi = !0);
    }
    function Rd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? oi(a, !!t.multiple, i, !1) : t.defaultValue != null && oi(a, !!t.multiple, t.defaultValue, !0);
    }
    function ng(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? oi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? oi(a, !!t.multiple, t.defaultValue, !0) : oi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rg(e, t) {
      var a = e, i = t.value;
      i != null && oi(a, !!t.multiple, i, !1);
    }
    var _d = !1;
    function kd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Zn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Gv(e, t) {
      var a = e;
      Vi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !_d && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), _d = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, f = t.defaultValue;
        if (o != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Mt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            f = o;
          }
        }
        f == null && (f = ""), i = f;
      }
      a._wrapperState = {
        initialValue: wi(i)
      };
    }
    function qv(e, t) {
      var a = e, i = wi(t.value), o = wi(t.defaultValue);
      if (i != null) {
        var f = Zn(i);
        f !== a.value && (a.value = f), t.defaultValue == null && a.defaultValue !== f && (a.defaultValue = f);
      }
      o != null && (a.defaultValue = Zn(o));
    }
    function Kv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Od(e, t) {
      qv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", ag = "http://www.w3.org/1998/Math/MathML", Dd = "http://www.w3.org/2000/svg";
    function Dc(e) {
      switch (e) {
        case "svg":
          return Dd;
        case "math":
          return ag;
        default:
          return Ii;
      }
    }
    function Md(e, t) {
      return e == null || e === Ii ? Dc(t) : e === Dd && t === "foreignObject" ? Ii : e;
    }
    var ig = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Mc, Xv = ig(function(e, t) {
      if (e.namespaceURI === Dd && !("innerHTML" in e)) {
        Mc = Mc || document.createElement("div"), Mc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Mc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ta = 1, Yi = 3, Hn = 8, si = 9, ml = 11, Nc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Zv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, go = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Jv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var eh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(go).forEach(function(e) {
      eh.forEach(function(t) {
        go[Jv(t, e)] = go[e];
      });
    });
    function Lc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(go.hasOwnProperty(e) && go[e]) ? t + "px" : (Sr(t, e), ("" + t).trim());
    }
    var So = /([A-Z])/g, ug = /^ms-/;
    function lg(e) {
      return e.replace(So, "-$1").toLowerCase().replace(ug, "-ms-");
    }
    var th = function() {
    };
    {
      var nh = /^(?:webkit|moz|o)[A-Z]/, rh = /^-ms-/, Cs = /-(.)/g, Eo = /;\s*$/, Co = {}, bo = {}, ah = !1, Nd = !1, Ld = function(e) {
        return e.replace(Cs, function(t, a) {
          return a.toUpperCase();
        });
      }, Ad = function(e) {
        Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ld(e.replace(rh, "ms-"))
        ));
      }, ih = function(e) {
        Co.hasOwnProperty(e) && Co[e] || (Co[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, uh = function(e, t) {
        bo.hasOwnProperty(t) && bo[t] || (bo[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Eo, "")));
      }, lh = function(e, t) {
        ah || (ah = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, og = function(e, t) {
        Nd || (Nd = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      th = function(e, t) {
        e.indexOf("-") > -1 ? Ad(e) : nh.test(e) ? ih(e) : Eo.test(t) && uh(e, t), typeof t == "number" && (isNaN(t) ? lh(e, t) : isFinite(t) || og(e, t));
      };
    }
    var sg = th;
    function cg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var f = i.indexOf("--") === 0;
              t += a + (f ? i : lg(i)) + ":", t += Lc(i, o, f), a = ";";
            }
          }
        return t || null;
      }
    }
    function oh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || sg(i, t[i]);
          var f = Lc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, f) : a[i] = f;
        }
    }
    function fg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Fa(e) {
      var t = {};
      for (var a in e)
        for (var i = Zv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function bs(e, t) {
      {
        if (!t)
          return;
        var a = Fa(e), i = Fa(t), o = {};
        for (var f in a) {
          var v = a[f], g = i[f];
          if (g && v !== g) {
            var C = v + "," + g;
            if (o[C])
              continue;
            o[C] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", fg(e[v]) ? "Removing" : "Updating", v, g);
          }
        }
      }
    }
    var sh = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ch = Rt({
      menuitem: !0
    }, sh), fh = "__html";
    function Ac(e, t) {
      if (t) {
        if (ch[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(fh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Wi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var zc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dh = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ci = {}, zd = new RegExp("^(aria)-[" + Ze + "]*$"), xs = new RegExp("^(aria)[A-Z][" + Ze + "]*$");
    function Ud(e, t) {
      {
        if (Cn.call(ci, t) && ci[t])
          return !0;
        if (xs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ci[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ci[t] = !0, !0;
        }
        if (zd.test(t)) {
          var o = t.toLowerCase(), f = dh.hasOwnProperty(o) ? o : null;
          if (f == null)
            return ci[t] = !0, !1;
          if (t !== f)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), ci[t] = !0, !0;
        }
      }
      return !0;
    }
    function ph(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Ud(e, i);
          o || a.push(i);
        }
        var f = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e);
      }
    }
    function Uc(e, t) {
      Wi(e, t) || ph(e, t);
    }
    var yl = !1;
    function Pd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !yl && (yl = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var jd = function() {
    };
    {
      var Jn = {}, Fd = /^on./, vh = /^on[^A-Z]/, hh = new RegExp("^(aria)-[" + Ze + "]*$"), mh = new RegExp("^(aria)[A-Z][" + Ze + "]*$");
      jd = function(e, t, a, i) {
        if (Cn.call(Jn, t) && Jn[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Jn[t] = !0, !0;
        if (i != null) {
          var f = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (f.hasOwnProperty(t))
            return !0;
          var g = v.hasOwnProperty(o) ? v[o] : null;
          if (g != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, g), Jn[t] = !0, !0;
          if (Fd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Jn[t] = !0, !0;
        } else if (Fd.test(t))
          return vh.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Jn[t] = !0, !0;
        if (hh.test(t) || mh.test(t))
          return !0;
        if (o === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Jn[t] = !0, !0;
        if (o === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Jn[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Jn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Jn[t] = !0, !0;
        var C = Nr(t), w = C !== null && C.type === ya;
        if (zc.hasOwnProperty(o)) {
          var _ = zc[o];
          if (_ !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, _), Jn[t] = !0, !0;
        } else if (!w && t !== o)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Jn[t] = !0, !0;
        return typeof a == "boolean" && Cr(t, a, C, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Jn[t] = !0, !0) : w ? !0 : Cr(t, a, C, !1) ? (Jn[t] = !0, !1) : ((a === "false" || a === "true") && C !== null && C.type === bn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Jn[t] = !0), !0);
      };
    }
    var yh = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var f = jd(e, o, t[o], a);
          f || i.push(o);
        }
        var v = i.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function gh(e, t, a) {
      Wi(e, t) || yh(e, t, a);
    }
    var Qi = 1, Ts = 1 << 1, gl = 1 << 2, dg = Qi | Ts | gl, ws = null;
    function Rs(e) {
      ws !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ws = e;
    }
    function pg() {
      ws === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ws = null;
    }
    function Sh(e) {
      return e === ws;
    }
    function Pc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var sn = null, Lu = null, Gi = null;
    function xo(e) {
      var t = qo(e);
      if (t) {
        if (typeof sn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Sm(a);
          sn(t.stateNode, t.type, i);
        }
      }
    }
    function Eh(e) {
      sn = e;
    }
    function jc(e) {
      Lu ? Gi ? Gi.push(e) : Gi = [e] : Lu = e;
    }
    function _s() {
      return Lu !== null || Gi !== null;
    }
    function ks() {
      if (Lu) {
        var e = Lu, t = Gi;
        if (Lu = null, Gi = null, xo(e), t)
          for (var a = 0; a < t.length; a++)
            xo(t[a]);
      }
    }
    var Sl = function(e, t) {
      return e(t);
    }, Hd = function() {
    }, $d = !1;
    function vg() {
      var e = _s();
      e && (Hd(), ks());
    }
    function Vd(e, t, a) {
      if ($d)
        return e(t, a);
      $d = !0;
      try {
        return Sl(e, t, a);
      } finally {
        $d = !1, vg();
      }
    }
    function Fc(e, t, a) {
      Sl = e, Hd = a;
    }
    function Hc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Bd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Hc(t));
        default:
          return !1;
      }
    }
    function El(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Sm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Bd(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Os = !1;
    if (Pt)
      try {
        var Cl = {};
        Object.defineProperty(Cl, "passive", {
          get: function() {
            Os = !0;
          }
        }), window.addEventListener("test", Cl, Cl), window.removeEventListener("test", Cl, Cl);
      } catch {
        Os = !1;
      }
    function Ch(e, t, a, i, o, f, v, g, C) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, w);
      } catch (_) {
        this.onError(_);
      }
    }
    var Id = Ch;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Yd = document.createElement("react");
      Id = function(t, a, i, o, f, v, g, C, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), P = !1, z = !0, Y = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Yd.removeEventListener(J, nt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var He = Array.prototype.slice.call(arguments, 3);
        function nt() {
          P = !0, Z(), a.apply(i, He), z = !1;
        }
        var Ke, zt = !1, Dt = !1;
        function $(V) {
          if (Ke = V.error, zt = !0, Ke === null && V.colno === 0 && V.lineno === 0 && (Dt = !0), V.defaultPrevented && Ke != null && typeof Ke == "object")
            try {
              Ke._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", $), Yd.addEventListener(J, nt, !1), _.initEvent(J, !1, !1), Yd.dispatchEvent(_), Q && Object.defineProperty(window, "event", Q), P && z && (zt ? Dt && (Ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ke)), window.removeEventListener("error", $), !P)
          return Z(), Ch.apply(this, arguments);
      };
    }
    var hg = Id, Au = !1, fi = null, Ds = !1, zu = null, Ri = {
      onError: function(e) {
        Au = !0, fi = e;
      }
    };
    function bl(e, t, a, i, o, f, v, g, C) {
      Au = !1, fi = null, hg.apply(Ri, arguments);
    }
    function qi(e, t, a, i, o, f, v, g, C) {
      if (bl.apply(this, arguments), Au) {
        var w = Qd();
        Ds || (Ds = !0, zu = w);
      }
    }
    function Wd() {
      if (Ds) {
        var e = zu;
        throw Ds = !1, zu = null, e;
      }
    }
    function mg() {
      return Au;
    }
    function Qd() {
      if (Au) {
        var e = fi;
        return Au = !1, fi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ha(e) {
      return e._reactInternals;
    }
    function Ms(e) {
      return e._reactInternals !== void 0;
    }
    function To(e, t) {
      e._reactInternals = t;
    }
    var et = (
      /*                      */
      0
    ), Uu = (
      /*                */
      1
    ), vn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), Qt = (
      /*                */
      16
    ), Zt = (
      /*                 */
      32
    ), _i = (
      /*                     */
      64
    ), ct = (
      /*                   */
      128
    ), Mn = (
      /*            */
      256
    ), na = (
      /*                          */
      512
    ), $a = (
      /*                     */
      1024
    ), Sn = (
      /*                      */
      2048
    ), Va = (
      /*                    */
      4096
    ), Pu = (
      /*                   */
      8192
    ), Ns = (
      /*             */
      16384
    ), $c = Sn | Ct | _i | na | $a | Ns, bh = (
      /*               */
      32767
    ), ba = (
      /*                   */
      32768
    ), er = (
      /*                */
      65536
    ), Ls = (
      /* */
      131072
    ), Gd = (
      /*                       */
      1048576
    ), qd = (
      /*                    */
      2097152
    ), ra = (
      /*                 */
      4194304
    ), ju = (
      /*                */
      8388608
    ), aa = (
      /*               */
      16777216
    ), xl = (
      /*              */
      33554432
    ), wo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | $a | 0
    ), ia = vn | Ct | Qt | Zt | na | Va | Pu, br = Ct | _i | na | Pu, Ba = Sn | Qt, or = ra | ju | qd, Ki = d.ReactCurrentOwner;
    function xa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (vn | Va)) !== et && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === A ? a : null;
    }
    function Kd(e) {
      if (e.tag === G) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Vc(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function Xd(e) {
      return xa(e) === e;
    }
    function Ta(e) {
      {
        var t = Ki.current;
        if (t !== null && t.tag === D) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ht(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Ha(e);
      return o ? xa(o) === o : !1;
    }
    function ua(e) {
      if (xa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function hn(e) {
      var t = e.alternate;
      if (!t) {
        var a = xa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var f = i.return;
        if (f === null)
          break;
        var v = f.alternate;
        if (v === null) {
          var g = f.return;
          if (g !== null) {
            i = o = g;
            continue;
          }
          break;
        }
        if (f.child === v.child) {
          for (var C = f.child; C; ) {
            if (C === i)
              return ua(f), e;
            if (C === o)
              return ua(f), t;
            C = C.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = f, o = v;
        else {
          for (var w = !1, _ = f.child; _; ) {
            if (_ === i) {
              w = !0, i = f, o = v;
              break;
            }
            if (_ === o) {
              w = !0, o = f, i = v;
              break;
            }
            _ = _.sibling;
          }
          if (!w) {
            for (_ = v.child; _; ) {
              if (_ === i) {
                w = !0, i = v, o = f;
                break;
              }
              if (_ === o) {
                w = !0, o = v, i = f;
                break;
              }
              _ = _.sibling;
            }
            if (!w)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== A)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ia(e) {
      var t = hn(e);
      return t !== null ? Zd(t) : null;
    }
    function Zd(e) {
      if (e.tag === K || e.tag === te)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Zd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xh(e) {
      var t = hn(e);
      return t !== null ? Bc(t) : null;
    }
    function Bc(e) {
      if (e.tag === K || e.tag === te)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== B) {
          var a = Bc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ic = s.unstable_scheduleCallback, Th = s.unstable_cancelCallback, Yc = s.unstable_shouldYield, wh = s.unstable_requestPaint, wn = s.unstable_now, Jd = s.unstable_getCurrentPriorityLevel, Wc = s.unstable_ImmediatePriority, wa = s.unstable_UserBlockingPriority, ki = s.unstable_NormalPriority, Qc = s.unstable_LowPriority, Fu = s.unstable_IdlePriority, ep = s.unstable_yieldValue, tp = s.unstable_setDisableYieldValue, Hu = null, tr = null, Re = null, Un = !1, sr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function np(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Le && (e = Rt({}, e, {
          getLaneLabelMap: Vu,
          injectProfilingHooks: Zi
        })), Hu = t.inject(e), tr = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Rh(e, t) {
      if (tr && typeof tr.onScheduleFiberRoot == "function")
        try {
          tr.onScheduleFiberRoot(Hu, e, t);
        } catch (a) {
          Un || (Un = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Xi(e, t) {
      if (tr && typeof tr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ct) === ct;
          if (Te) {
            var i;
            switch (t) {
              case xr:
                i = Wc;
                break;
              case cr:
                i = wa;
                break;
              case eu:
                i = ki;
                break;
              case Vs:
                i = Fu;
                break;
              default:
                i = ki;
                break;
            }
            tr.onCommitFiberRoot(Hu, e, i, a);
          }
        } catch (o) {
          Un || (Un = !0, y("React instrumentation encountered an error: %s", o));
        }
    }
    function $u(e) {
      if (tr && typeof tr.onPostCommitFiberRoot == "function")
        try {
          tr.onPostCommitFiberRoot(Hu, e);
        } catch (t) {
          Un || (Un = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function rp(e) {
      if (tr && typeof tr.onCommitFiberUnmount == "function")
        try {
          tr.onCommitFiberUnmount(Hu, e);
        } catch (t) {
          Un || (Un = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Yn(e) {
      if (typeof ep == "function" && (tp(e), E(e)), tr && typeof tr.setStrictMode == "function")
        try {
          tr.setStrictMode(Hu, e);
        } catch (t) {
          Un || (Un = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      Re = e;
    }
    function Vu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < mn; a++) {
          var i = yg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Gc(e) {
      Re !== null && typeof Re.markCommitStarted == "function" && Re.markCommitStarted(e);
    }
    function ap() {
      Re !== null && typeof Re.markCommitStopped == "function" && Re.markCommitStopped();
    }
    function Bu(e) {
      Re !== null && typeof Re.markComponentRenderStarted == "function" && Re.markComponentRenderStarted(e);
    }
    function Tl() {
      Re !== null && typeof Re.markComponentRenderStopped == "function" && Re.markComponentRenderStopped();
    }
    function _h(e) {
      Re !== null && typeof Re.markComponentPassiveEffectMountStarted == "function" && Re.markComponentPassiveEffectMountStarted(e);
    }
    function ip() {
      Re !== null && typeof Re.markComponentPassiveEffectMountStopped == "function" && Re.markComponentPassiveEffectMountStopped();
    }
    function qc(e) {
      Re !== null && typeof Re.markComponentPassiveEffectUnmountStarted == "function" && Re.markComponentPassiveEffectUnmountStarted(e);
    }
    function kh() {
      Re !== null && typeof Re.markComponentPassiveEffectUnmountStopped == "function" && Re.markComponentPassiveEffectUnmountStopped();
    }
    function Oh(e) {
      Re !== null && typeof Re.markComponentLayoutEffectMountStarted == "function" && Re.markComponentLayoutEffectMountStarted(e);
    }
    function Dh() {
      Re !== null && typeof Re.markComponentLayoutEffectMountStopped == "function" && Re.markComponentLayoutEffectMountStopped();
    }
    function Kc(e) {
      Re !== null && typeof Re.markComponentLayoutEffectUnmountStarted == "function" && Re.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ro() {
      Re !== null && typeof Re.markComponentLayoutEffectUnmountStopped == "function" && Re.markComponentLayoutEffectUnmountStopped();
    }
    function Xc(e, t, a) {
      Re !== null && typeof Re.markComponentErrored == "function" && Re.markComponentErrored(e, t, a);
    }
    function Mh(e, t, a) {
      Re !== null && typeof Re.markComponentSuspended == "function" && Re.markComponentSuspended(e, t, a);
    }
    function Nh(e) {
      Re !== null && typeof Re.markLayoutEffectsStarted == "function" && Re.markLayoutEffectsStarted(e);
    }
    function _o() {
      Re !== null && typeof Re.markLayoutEffectsStopped == "function" && Re.markLayoutEffectsStopped();
    }
    function Lh(e) {
      Re !== null && typeof Re.markPassiveEffectsStarted == "function" && Re.markPassiveEffectsStarted(e);
    }
    function As() {
      Re !== null && typeof Re.markPassiveEffectsStopped == "function" && Re.markPassiveEffectsStopped();
    }
    function di(e) {
      Re !== null && typeof Re.markRenderStarted == "function" && Re.markRenderStarted(e);
    }
    function zs() {
      Re !== null && typeof Re.markRenderYielded == "function" && Re.markRenderYielded();
    }
    function ko() {
      Re !== null && typeof Re.markRenderStopped == "function" && Re.markRenderStopped();
    }
    function wl(e) {
      Re !== null && typeof Re.markRenderScheduled == "function" && Re.markRenderScheduled(e);
    }
    function up(e, t) {
      Re !== null && typeof Re.markForceUpdateScheduled == "function" && Re.markForceUpdateScheduled(e, t);
    }
    function Iu(e, t) {
      Re !== null && typeof Re.markStateUpdateScheduled == "function" && Re.markStateUpdateScheduled(e, t);
    }
    var at = (
      /*                         */
      0
    ), kt = (
      /*                 */
      1
    ), ut = (
      /*                    */
      2
    ), Rn = (
      /*               */
      8
    ), Ya = (
      /*              */
      16
    ), Zc = Math.clz32 ? Math.clz32 : Rl, Jc = Math.log, lp = Math.LN2;
    function Rl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jc(t) / lp | 0) | 0;
    }
    var mn = 31, ee = (
      /*                        */
      0
    ), Lt = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), Oi = (
      /*    */
      2
    ), Ra = (
      /*             */
      4
    ), _l = (
      /*            */
      8
    ), yn = (
      /*                     */
      16
    ), kl = (
      /*                */
      32
    ), Yu = (
      /*                       */
      4194240
    ), Ol = (
      /*                        */
      64
    ), Wa = (
      /*                        */
      128
    ), la = (
      /*                        */
      256
    ), Dl = (
      /*                        */
      512
    ), Us = (
      /*                        */
      1024
    ), Ps = (
      /*                        */
      2048
    ), ef = (
      /*                        */
      4096
    ), tf = (
      /*                        */
      8192
    ), nf = (
      /*                        */
      16384
    ), rf = (
      /*                       */
      32768
    ), af = (
      /*                       */
      65536
    ), uf = (
      /*                       */
      131072
    ), lf = (
      /*                       */
      262144
    ), of = (
      /*                       */
      524288
    ), Ml = (
      /*                       */
      1048576
    ), sf = (
      /*                       */
      2097152
    ), Nl = (
      /*                            */
      130023424
    ), Ji = (
      /*                             */
      4194304
    ), cf = (
      /*                             */
      8388608
    ), js = (
      /*                             */
      16777216
    ), ff = (
      /*                             */
      33554432
    ), df = (
      /*                             */
      67108864
    ), op = Ji, Oo = (
      /*          */
      134217728
    ), pf = (
      /*                          */
      268435455
    ), Do = (
      /*               */
      268435456
    ), Wu = (
      /*                        */
      536870912
    ), oa = (
      /*                   */
      1073741824
    );
    function yg(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & Oi)
          return "InputContinuousHydration";
        if (e & Ra)
          return "InputContinuous";
        if (e & _l)
          return "DefaultHydration";
        if (e & yn)
          return "Default";
        if (e & kl)
          return "TransitionHydration";
        if (e & Yu)
          return "Transition";
        if (e & Nl)
          return "Retry";
        if (e & Oo)
          return "SelectiveHydration";
        if (e & Do)
          return "IdleHydration";
        if (e & Wu)
          return "Idle";
        if (e & oa)
          return "Offscreen";
      }
    }
    var cn = -1, vf = Ol, hf = Ji;
    function Mo(e) {
      switch ($n(e)) {
        case lt:
          return lt;
        case Oi:
          return Oi;
        case Ra:
          return Ra;
        case _l:
          return _l;
        case yn:
          return yn;
        case kl:
          return kl;
        case Ol:
        case Wa:
        case la:
        case Dl:
        case Us:
        case Ps:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case uf:
        case lf:
        case of:
        case Ml:
        case sf:
          return e & Yu;
        case Ji:
        case cf:
        case js:
        case ff:
        case df:
          return e & Nl;
        case Oo:
          return Oo;
        case Do:
          return Do;
        case Wu:
          return Wu;
        case oa:
          return oa;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Fs(e, t) {
      var a = e.pendingLanes;
      if (a === ee)
        return ee;
      var i = ee, o = e.suspendedLanes, f = e.pingedLanes, v = a & pf;
      if (v !== ee) {
        var g = v & ~o;
        if (g !== ee)
          i = Mo(g);
        else {
          var C = v & f;
          C !== ee && (i = Mo(C));
        }
      } else {
        var w = a & ~o;
        w !== ee ? i = Mo(w) : f !== ee && (i = Mo(f));
      }
      if (i === ee)
        return ee;
      if (t !== ee && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ee) {
        var _ = $n(i), P = $n(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= P || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === yn && (P & Yu) !== ee
        )
          return t;
      }
      (i & Ra) !== ee && (i |= a & yn);
      var z = e.entangledLanes;
      if (z !== ee)
        for (var Y = e.entanglements, Q = i & z; Q > 0; ) {
          var Z = Qu(Q), He = 1 << Z;
          i |= Y[Z], Q &= ~He;
        }
      return i;
    }
    function Ah(e, t) {
      for (var a = e.eventTimes, i = cn; t > 0; ) {
        var o = Qu(t), f = 1 << o, v = a[o];
        v > i && (i = v), t &= ~f;
      }
      return i;
    }
    function mf(e, t) {
      switch (e) {
        case lt:
        case Oi:
        case Ra:
          return t + 250;
        case _l:
        case yn:
        case kl:
        case Ol:
        case Wa:
        case la:
        case Dl:
        case Us:
        case Ps:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case uf:
        case lf:
        case of:
        case Ml:
        case sf:
          return t + 5e3;
        case Ji:
        case cf:
        case js:
        case ff:
        case df:
          return cn;
        case Oo:
        case Do:
        case Wu:
        case oa:
          return cn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), cn;
      }
    }
    function gg(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, f = e.expirationTimes, v = a; v > 0; ) {
        var g = Qu(v), C = 1 << g, w = f[g];
        w === cn ? ((C & i) === ee || (C & o) !== ee) && (f[g] = mf(C, t)) : w <= t && (e.expiredLanes |= C), v &= ~C;
      }
    }
    function Sg(e) {
      return Mo(e.pendingLanes);
    }
    function sp(e) {
      var t = e.pendingLanes & ~oa;
      return t !== ee ? t : t & oa ? oa : ee;
    }
    function No(e) {
      return (e & lt) !== ee;
    }
    function Hs(e) {
      return (e & pf) !== ee;
    }
    function yf(e) {
      return (e & Nl) === e;
    }
    function Eg(e) {
      var t = lt | Ra | yn;
      return (e & t) === ee;
    }
    function zh(e) {
      return (e & Yu) === e;
    }
    function $s(e, t) {
      var a = Oi | Ra | _l | yn;
      return (t & a) !== ee;
    }
    function Uh(e, t) {
      return (t & e.expiredLanes) !== ee;
    }
    function cp(e) {
      return (e & Yu) !== ee;
    }
    function fp() {
      var e = vf;
      return vf <<= 1, (vf & Yu) === ee && (vf = Ol), e;
    }
    function Cg() {
      var e = hf;
      return hf <<= 1, (hf & Nl) === ee && (hf = Ji), e;
    }
    function $n(e) {
      return e & -e;
    }
    function Wn(e) {
      return $n(e);
    }
    function Qu(e) {
      return 31 - Zc(e);
    }
    function gf(e) {
      return Qu(e);
    }
    function sa(e, t) {
      return (e & t) !== ee;
    }
    function Ll(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function Lo(e, t) {
      return e & ~t;
    }
    function dp(e, t) {
      return e & t;
    }
    function Ph(e) {
      return e;
    }
    function jh(e, t) {
      return e !== Lt && e < t ? e : t;
    }
    function Sf(e) {
      for (var t = [], a = 0; a < mn; a++)
        t.push(e);
      return t;
    }
    function Al(e, t, a) {
      e.pendingLanes |= t, t !== Wu && (e.suspendedLanes = ee, e.pingedLanes = ee);
      var i = e.eventTimes, o = gf(t);
      i[o] = a;
    }
    function pp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Qu(i), f = 1 << o;
        a[o] = cn, i &= ~f;
      }
    }
    function vp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function hp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ee, e.pingedLanes = ee, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, f = e.expirationTimes, v = a; v > 0; ) {
        var g = Qu(v), C = 1 << g;
        i[g] = ee, o[g] = cn, f[g] = cn, v &= ~C;
      }
    }
    function Ao(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var f = Qu(o), v = 1 << f;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[f] & t && (i[f] |= t), o &= ~v;
      }
    }
    function bg(e, t) {
      var a = $n(t), i;
      switch (a) {
        case Ra:
          i = Oi;
          break;
        case yn:
          i = _l;
          break;
        case Ol:
        case Wa:
        case la:
        case Dl:
        case Us:
        case Ps:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case uf:
        case lf:
        case of:
        case Ml:
        case sf:
        case Ji:
        case cf:
        case js:
        case ff:
        case df:
          i = kl;
          break;
        case Wu:
          i = Do;
          break;
        default:
          i = Lt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Lt ? Lt : i;
    }
    function mp(e, t, a) {
      if (sr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = gf(a), f = 1 << o, v = i[o];
          v.add(t), a &= ~f;
        }
    }
    function Ef(e, t) {
      if (sr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = gf(t), f = 1 << o, v = a[o];
          v.size > 0 && (v.forEach(function(g) {
            var C = g.alternate;
            (C === null || !i.has(C)) && i.add(g);
          }), v.clear()), t &= ~f;
        }
    }
    function yp(e, t) {
      return null;
    }
    var xr = lt, cr = Ra, eu = yn, Vs = Wu, zl = Lt;
    function Qa() {
      return zl;
    }
    function Qn(e) {
      zl = e;
    }
    function Bs(e, t) {
      var a = zl;
      try {
        return zl = e, t();
      } finally {
        zl = a;
      }
    }
    function Tr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function gp(e, t) {
      return e !== 0 && e < t;
    }
    function Is(e) {
      var t = $n(e);
      return gp(xr, t) ? gp(cr, t) ? Hs(t) ? eu : Vs : cr : xr;
    }
    function Gn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Fh;
    function Be(e) {
      Fh = e;
    }
    function zo(e) {
      Fh(e);
    }
    var Ys;
    function Hh(e) {
      Ys = e;
    }
    var $h;
    function Ws(e) {
      $h = e;
    }
    var Qs;
    function Sp(e) {
      Qs = e;
    }
    var Ep;
    function Vh(e) {
      Ep = e;
    }
    var Cf = !1, Uo = [], Di = null, En = null, nr = null, Ga = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Map(), tu = [], pi = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Bh(e) {
      return pi.indexOf(e) > -1;
    }
    function Mi(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Ih(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Di = null;
          break;
        case "dragenter":
        case "dragleave":
          En = null;
          break;
        case "mouseover":
        case "mouseout":
          nr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ga.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Po.delete(i);
          break;
        }
      }
    }
    function jo(e, t, a, i, o, f) {
      if (e === null || e.nativeEvent !== f) {
        var v = Mi(t, a, i, o, f);
        if (t !== null) {
          var g = qo(t);
          g !== null && Ys(g);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var C = e.targetContainers;
      return o !== null && C.indexOf(o) === -1 && C.push(o), e;
    }
    function Yh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var f = o;
          return Di = jo(Di, e, t, a, i, f), !0;
        }
        case "dragenter": {
          var v = o;
          return En = jo(En, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var g = o;
          return nr = jo(nr, e, t, a, i, g), !0;
        }
        case "pointerover": {
          var C = o, w = C.pointerId;
          return Ga.set(w, jo(Ga.get(w) || null, e, t, a, i, C)), !0;
        }
        case "gotpointercapture": {
          var _ = o, P = _.pointerId;
          return Po.set(P, jo(Po.get(P) || null, e, t, a, i, _)), !0;
        }
      }
      return !1;
    }
    function Cp(e) {
      var t = nc(e.target);
      if (t !== null) {
        var a = xa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === G) {
            var o = Kd(a);
            if (o !== null) {
              e.blockedOn = o, Ep(e.priority, function() {
                $h(a);
              });
              return;
            }
          } else if (i === A) {
            var f = a.stateNode;
            if (Gn(f)) {
              e.blockedOn = Vc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Wh(e) {
      for (var t = Qs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < tu.length && gp(t, tu[i].priority); i++)
        ;
      tu.splice(i, 0, a), i === 0 && Cp(a);
    }
    function bf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ul(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, f = new o.constructor(o.type, o);
          Rs(f), o.target.dispatchEvent(f), pg();
        } else {
          var v = qo(i);
          return v !== null && Ys(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Gs(e, t, a) {
      bf(e) && a.delete(t);
    }
    function bp() {
      Cf = !1, Di !== null && bf(Di) && (Di = null), En !== null && bf(En) && (En = null), nr !== null && bf(nr) && (nr = null), Ga.forEach(Gs), Po.forEach(Gs);
    }
    function wr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Cf || (Cf = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, bp)));
    }
    function Ot(e) {
      if (Uo.length > 0) {
        wr(Uo[0], e);
        for (var t = 1; t < Uo.length; t++) {
          var a = Uo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && wr(Di, e), En !== null && wr(En, e), nr !== null && wr(nr, e);
      var i = function(g) {
        return wr(g, e);
      };
      Ga.forEach(i), Po.forEach(i);
      for (var o = 0; o < tu.length; o++) {
        var f = tu[o];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; tu.length > 0; ) {
        var v = tu[0];
        if (v.blockedOn !== null)
          break;
        Cp(v), v.blockedOn === null && tu.shift();
      }
    }
    var _n = d.ReactCurrentBatchConfig, Nn = !0;
    function rr(e) {
      Nn = !!e;
    }
    function _a() {
      return Nn;
    }
    function Fo(e, t, a) {
      var i = Pr(t), o;
      switch (i) {
        case xr:
          o = qn;
          break;
        case cr:
          o = qs;
          break;
        case eu:
        default:
          o = nu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function qn(e, t, a, i) {
      var o = Qa(), f = _n.transition;
      _n.transition = null;
      try {
        Qn(xr), nu(e, t, a, i);
      } finally {
        Qn(o), _n.transition = f;
      }
    }
    function qs(e, t, a, i) {
      var o = Qa(), f = _n.transition;
      _n.transition = null;
      try {
        Qn(cr), nu(e, t, a, i);
      } finally {
        Qn(o), _n.transition = f;
      }
    }
    function nu(e, t, a, i) {
      Nn && xf(e, t, a, i);
    }
    function xf(e, t, a, i) {
      var o = Ul(e, t, a, i);
      if (o === null) {
        Bg(e, t, i, Ho, a), Ih(e, i);
        return;
      }
      if (Yh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Ih(e, i), t & gl && Bh(e)) {
        for (; o !== null; ) {
          var f = qo(o);
          f !== null && zo(f);
          var v = Ul(e, t, a, i);
          if (v === null && Bg(e, t, i, Ho, a), v === o)
            break;
          o = v;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Bg(e, t, i, null, a);
    }
    var Ho = null;
    function Ul(e, t, a, i) {
      Ho = null;
      var o = Pc(i), f = nc(o);
      if (f !== null) {
        var v = xa(f);
        if (v === null)
          f = null;
        else {
          var g = v.tag;
          if (g === G) {
            var C = Kd(v);
            if (C !== null)
              return C;
            f = null;
          } else if (g === A) {
            var w = v.stateNode;
            if (Gn(w))
              return Vc(v);
            f = null;
          } else
            v !== f && (f = null);
        }
      }
      return Ho = f, null;
    }
    function Pr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return xr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return cr;
        case "message": {
          var t = Jd();
          switch (t) {
            case Wc:
              return xr;
            case wa:
              return cr;
            case ki:
            case Qc:
              return eu;
            case Fu:
              return Vs;
            default:
              return eu;
          }
        }
        default:
          return eu;
      }
    }
    function xp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function $o(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ru(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Tf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Pl = null, Ni = null, Gu = null;
    function qu(e) {
      return Pl = e, Ni = Rf(), !0;
    }
    function wf() {
      Pl = null, Ni = null, Gu = null;
    }
    function Vo() {
      if (Gu)
        return Gu;
      var e, t = Ni, a = t.length, i, o = Rf(), f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === o[f - i]; i++)
        ;
      var g = i > 1 ? 1 - i : void 0;
      return Gu = o.slice(e, g), Gu;
    }
    function Rf() {
      return "value" in Pl ? Pl.value : Pl.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Fl() {
      return !0;
    }
    function Rr() {
      return !1;
    }
    function Vn(e) {
      function t(a, i, o, f, v) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = v, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var C = e[g];
            C ? this[g] = C(f) : this[g] = f[g];
          }
        var w = f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1;
        return w ? this.isDefaultPrevented = Fl : this.isDefaultPrevented = Rr, this.isPropagationStopped = Rr, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Fl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Fl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Fl
      }), t;
    }
    var _r = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, kr = Vn(_r), Bo = Rt({}, _r, {
      view: 0,
      detail: 0
    }), Tp = Vn(Bo), Ks, wp, qa;
    function Qh(e) {
      e !== qa && (qa && e.type === "mousemove" ? (Ks = e.screenX - qa.screenX, wp = e.screenY - qa.screenY) : (Ks = 0, wp = 0), qa = e);
    }
    var Io = Rt({}, Bo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Of,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Qh(e), Ks);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : wp;
      }
    }), Ku = Vn(Io), Rp = Rt({}, Io, {
      dataTransfer: 0
    }), Hl = Vn(Rp), Gh = Rt({}, Bo, {
      relatedTarget: 0
    }), _f = Vn(Gh), _p = Rt({}, _r, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kf = Vn(_p), Tg = Rt({}, _r, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), wg = Vn(Tg), qh = Rt({}, _r, {
      data: 0
    }), kp = Vn(qh), $l = kp, Rg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Yo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Kh(e) {
      if (e.key) {
        var t = Rg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Yo[e.keyCode] || "Unidentified" : "";
    }
    var Ln = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _g(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Ln[e];
      return i ? !!a[i] : !1;
    }
    function Of(e) {
      return _g;
    }
    var kg = Rt({}, Bo, {
      key: Kh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Of,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Og = Vn(kg), Xh = Rt({}, Io, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Op = Vn(Xh), Dg = Rt({}, Bo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Of
    }), Ka = Vn(Dg), Dp = Rt({}, _r, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mg = Vn(Dp), Xu = Rt({}, Io, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Df = Vn(Xu), Vl = [9, 13, 27, 32], Xs = 229, Zs = Pt && "CompositionEvent" in window, Bl = null;
    Pt && "documentMode" in document && (Bl = document.documentMode);
    var Ng = Pt && "TextEvent" in window && !Bl, Mf = Pt && (!Zs || Bl && Bl > 8 && Bl <= 11), Zh = 32, Mp = String.fromCharCode(Zh);
    function Jh() {
      Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Yt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Yt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Js = !1;
    function Nf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function em(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Np(e, t) {
      return e === "keydown" && t.keyCode === Xs;
    }
    function tm(e, t) {
      switch (e) {
        case "keyup":
          return Vl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Xs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Lp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Lf(e) {
      return e.locale === "ko";
    }
    var au = !1;
    function Ap(e, t, a, i, o) {
      var f, v;
      if (Zs ? f = em(t) : au ? tm(t, i) && (f = "onCompositionEnd") : Np(t, i) && (f = "onCompositionStart"), !f)
        return null;
      Mf && !Lf(i) && (!au && f === "onCompositionStart" ? au = qu(o) : f === "onCompositionEnd" && au && (v = Vo()));
      var g = um(a, f);
      if (g.length > 0) {
        var C = new kp(f, t, null, i, o);
        if (e.push({
          event: C,
          listeners: g
        }), v)
          C.data = v;
        else {
          var w = Lp(i);
          w !== null && (C.data = w);
        }
      }
    }
    function Af(e, t) {
      switch (e) {
        case "compositionend":
          return Lp(t);
        case "keypress":
          var a = t.which;
          return a !== Zh ? null : (Js = !0, Mp);
        case "textInput":
          var i = t.data;
          return i === Mp && Js ? null : i;
        default:
          return null;
      }
    }
    function nm(e, t) {
      if (au) {
        if (e === "compositionend" || !Zs && tm(e, t)) {
          var a = Vo();
          return wf(), au = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Nf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Mf && !Lf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Lg(e, t, a, i, o) {
      var f;
      if (Ng ? f = Af(t, i) : f = nm(t, i), !f)
        return null;
      var v = um(a, "onBeforeInput");
      if (v.length > 0) {
        var g = new $l("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: g,
          listeners: v
        }), g.data = f;
      }
    }
    function zf(e, t, a, i, o, f, v) {
      Ap(e, t, a, i, o), Lg(e, t, a, i, o);
    }
    var Ag = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Wo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ag[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function zg(e) {
      if (!Pt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Uf() {
      Yt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      jc(i);
      var o = um(t, "onChange");
      if (o.length > 0) {
        var f = new kr("onChange", "change", null, a, i);
        e.push({
          event: f,
          listeners: o
        });
      }
    }
    var r = null, l = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, l, e, Pc(e)), Vd(h, t);
    }
    function h(e) {
      BE(e, 0);
    }
    function x(e) {
      var t = Vf(e);
      if (ho(t))
        return e;
    }
    function O(e, t) {
      if (e === "change")
        return t;
    }
    var L = !1;
    Pt && (L = zg("input") && (!document.documentMode || document.documentMode > 9));
    function q(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", ce);
    }
    function le() {
      r && (r.detachEvent("onpropertychange", ce), r = null, l = null);
    }
    function ce(e) {
      e.propertyName === "value" && x(l) && p(e);
    }
    function ie(e, t, a) {
      e === "focusin" ? (le(), q(t, a)) : e === "focusout" && le();
    }
    function Ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return x(l);
    }
    function Ie(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Qe(e, t) {
      if (e === "click")
        return x(t);
    }
    function Pn(e, t) {
      if (e === "input" || e === "change")
        return x(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function U(e, t, a, i, o, f, v) {
      var g = a ? Vf(a) : window, C, w;
      if (c(g) ? C = O : Wo(g) ? L ? C = Pn : (C = Ae, w = ie) : Ie(g) && (C = Qe), C) {
        var _ = C(t, a);
        if (_) {
          n(e, _, i, o);
          return;
        }
      }
      w && w(t, g, a), t === "focusout" && H(g);
    }
    function I() {
      Ce("onMouseEnter", ["mouseout", "mouseover"]), Ce("onMouseLeave", ["mouseout", "mouseover"]), Ce("onPointerEnter", ["pointerout", "pointerover"]), Ce("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function me(e, t, a, i, o, f, v) {
      var g = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout";
      if (g && !Sh(i)) {
        var w = i.relatedTarget || i.fromElement;
        if (w && (nc(w) || Gp(w)))
          return;
      }
      if (!(!C && !g)) {
        var _;
        if (o.window === o)
          _ = o;
        else {
          var P = o.ownerDocument;
          P ? _ = P.defaultView || P.parentWindow : _ = window;
        }
        var z, Y;
        if (C) {
          var Q = i.relatedTarget || i.toElement;
          if (z = a, Y = Q ? nc(Q) : null, Y !== null) {
            var Z = xa(Y);
            (Y !== Z || Y.tag !== K && Y.tag !== te) && (Y = null);
          }
        } else
          z = null, Y = a;
        if (z !== Y) {
          var He = Ku, nt = "onMouseLeave", Ke = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (He = Op, nt = "onPointerLeave", Ke = "onPointerEnter", zt = "pointer");
          var Dt = z == null ? _ : Vf(z), $ = Y == null ? _ : Vf(Y), J = new He(nt, zt + "leave", z, i, o);
          J.target = Dt, J.relatedTarget = $;
          var V = null, de = nc(o);
          if (de === a) {
            var $e = new He(Ke, zt + "enter", Y, i, o);
            $e.target = $, $e.relatedTarget = Dt, V = $e;
          }
          LR(e, J, V, z, Y);
        }
      }
    }
    function qe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ye = typeof Object.is == "function" ? Object.is : qe;
    function Je(e, t) {
      if (Ye(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var f = a[o];
        if (!Cn.call(t, f) || !Ye(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function ft(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ar(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function $t(e, t) {
      for (var a = ft(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Yi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = ft(ar(a));
      }
    }
    function Zu(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, f = i.anchorOffset, v = i.focusNode, g = i.focusOffset;
      try {
        o.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return Ug(e, o, f, v, g);
    }
    function Ug(e, t, a, i, o) {
      var f = 0, v = -1, g = -1, C = 0, w = 0, _ = e, P = null;
      e:
        for (; ; ) {
          for (var z = null; _ === t && (a === 0 || _.nodeType === Yi) && (v = f + a), _ === i && (o === 0 || _.nodeType === Yi) && (g = f + o), _.nodeType === Yi && (f += _.nodeValue.length), (z = _.firstChild) !== null; )
            P = _, _ = z;
          for (; ; ) {
            if (_ === e)
              break e;
            if (P === t && ++C === a && (v = f), P === i && ++w === o && (g = f), (z = _.nextSibling) !== null)
              break;
            _ = P, P = _.parentNode;
          }
          _ = z;
        }
      return v === -1 || g === -1 ? null : {
        start: v,
        end: g
      };
    }
    function vR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), f = e.textContent.length, v = Math.min(t.start, f), g = t.end === void 0 ? v : Math.min(t.end, f);
        if (!o.extend && v > g) {
          var C = g;
          g = v, v = C;
        }
        var w = $t(e, v), _ = $t(e, g);
        if (w && _) {
          if (o.rangeCount === 1 && o.anchorNode === w.node && o.anchorOffset === w.offset && o.focusNode === _.node && o.focusOffset === _.offset)
            return;
          var P = a.createRange();
          P.setStart(w.node, w.offset), o.removeAllRanges(), v > g ? (o.addRange(P), o.extend(_.node, _.offset)) : (P.setEnd(_.node, _.offset), o.addRange(P));
        }
      }
    }
    function ME(e) {
      return e && e.nodeType === Yi;
    }
    function NE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : ME(e) ? !1 : ME(t) ? NE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function hR(e) {
      return e && e.ownerDocument && NE(e.ownerDocument.documentElement, e);
    }
    function mR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function LE() {
      for (var e = window, t = Mu(); t instanceof e.HTMLIFrameElement; ) {
        if (mR(t))
          e = t.contentWindow;
        else
          return t;
        t = Mu(e.document);
      }
      return t;
    }
    function Pg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function yR() {
      var e = LE();
      return {
        focusedElem: e,
        selectionRange: Pg(e) ? SR(e) : null
      };
    }
    function gR(e) {
      var t = LE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && hR(a)) {
        i !== null && Pg(a) && ER(a, i);
        for (var o = [], f = a; f = f.parentNode; )
          f.nodeType === ta && o.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < o.length; v++) {
          var g = o[v];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function SR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Zu(e), t || {
        start: 0,
        end: 0
      };
    }
    function ER(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : vR(e, t);
    }
    var CR = Pt && "documentMode" in document && document.documentMode <= 11;
    function bR() {
      Yt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Pf = null, jg = null, zp = null, Fg = !1;
    function xR(e) {
      if ("selectionStart" in e && Pg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function TR(e) {
      return e.window === e ? e.document : e.nodeType === si ? e : e.ownerDocument;
    }
    function AE(e, t, a) {
      var i = TR(a);
      if (!(Fg || Pf == null || Pf !== Mu(i))) {
        var o = xR(Pf);
        if (!zp || !Je(zp, o)) {
          zp = o;
          var f = um(jg, "onSelect");
          if (f.length > 0) {
            var v = new kr("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: f
            }), v.target = Pf;
          }
        }
      }
    }
    function wR(e, t, a, i, o, f, v) {
      var g = a ? Vf(a) : window;
      switch (t) {
        case "focusin":
          (Wo(g) || g.contentEditable === "true") && (Pf = g, jg = a, zp = null);
          break;
        case "focusout":
          Pf = null, jg = null, zp = null;
          break;
        case "mousedown":
          Fg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fg = !1, AE(e, i, o);
          break;
        case "selectionchange":
          if (CR)
            break;
        case "keydown":
        case "keyup":
          AE(e, i, o);
      }
    }
    function rm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var jf = {
      animationend: rm("Animation", "AnimationEnd"),
      animationiteration: rm("Animation", "AnimationIteration"),
      animationstart: rm("Animation", "AnimationStart"),
      transitionend: rm("Transition", "TransitionEnd")
    }, Hg = {}, zE = {};
    Pt && (zE = document.createElement("div").style, "AnimationEvent" in window || (delete jf.animationend.animation, delete jf.animationiteration.animation, delete jf.animationstart.animation), "TransitionEvent" in window || delete jf.transitionend.transition);
    function am(e) {
      if (Hg[e])
        return Hg[e];
      if (!jf[e])
        return e;
      var t = jf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in zE)
          return Hg[e] = t[a];
      return e;
    }
    var UE = am("animationend"), PE = am("animationiteration"), jE = am("animationstart"), FE = am("transitionend"), HE = /* @__PURE__ */ new Map(), $E = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Qo(e, t) {
      HE.set(e, t), Yt(t, [e]);
    }
    function RR() {
      for (var e = 0; e < $E.length; e++) {
        var t = $E[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Qo(a, "on" + i);
      }
      Qo(UE, "onAnimationEnd"), Qo(PE, "onAnimationIteration"), Qo(jE, "onAnimationStart"), Qo("dblclick", "onDoubleClick"), Qo("focusin", "onFocus"), Qo("focusout", "onBlur"), Qo(FE, "onTransitionEnd");
    }
    function _R(e, t, a, i, o, f, v) {
      var g = HE.get(t);
      if (g !== void 0) {
        var C = kr, w = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            C = Og;
            break;
          case "focusin":
            w = "focus", C = _f;
            break;
          case "focusout":
            w = "blur", C = _f;
            break;
          case "beforeblur":
          case "afterblur":
            C = _f;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Hl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Ka;
            break;
          case UE:
          case PE:
          case jE:
            C = kf;
            break;
          case FE:
            C = Mg;
            break;
          case "scroll":
            C = Tp;
            break;
          case "wheel":
            C = Df;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = wg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Op;
            break;
        }
        var _ = (f & gl) !== 0;
        {
          var P = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = MR(a, g, i.type, _, P);
          if (z.length > 0) {
            var Y = new C(g, w, null, i, o);
            e.push({
              event: Y,
              listeners: z
            });
          }
        }
      }
    }
    RR(), I(), Uf(), bR(), Jh();
    function kR(e, t, a, i, o, f, v) {
      _R(e, t, a, i, o, f);
      var g = (f & dg) === 0;
      g && (me(e, t, a, i, o), U(e, t, a, i, o), wR(e, t, a, i, o), zf(e, t, a, i, o));
    }
    var Up = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], $g = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Up));
    function VE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, qi(i, t, void 0, e), e.currentTarget = null;
    }
    function OR(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var f = t[o], v = f.instance, g = f.currentTarget, C = f.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          VE(e, C, g), i = v;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var _ = t[w], P = _.instance, z = _.currentTarget, Y = _.listener;
          if (P !== i && e.isPropagationStopped())
            return;
          VE(e, Y, z), i = P;
        }
    }
    function BE(e, t) {
      for (var a = (t & gl) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], f = o.event, v = o.listeners;
        OR(f, v, a);
      }
      Wd();
    }
    function DR(e, t, a, i, o) {
      var f = Pc(a), v = [];
      kR(v, e, i, a, f, t), BE(v, t);
    }
    function kn(e, t) {
      $g.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = uk(t), o = AR(e, a);
      i.has(o) || (IE(t, e, Ts, a), i.add(o));
    }
    function Vg(e, t, a) {
      $g.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= gl), IE(a, e, i, t);
    }
    var im = "_reactListening" + Math.random().toString(36).slice(2);
    function Pp(e) {
      if (!e[im]) {
        e[im] = !0, Me.forEach(function(a) {
          a !== "selectionchange" && ($g.has(a) || Vg(a, !1, e), Vg(a, !0, e));
        });
        var t = e.nodeType === si ? e : e.ownerDocument;
        t !== null && (t[im] || (t[im] = !0, Vg("selectionchange", !1, t)));
      }
    }
    function IE(e, t, a, i, o) {
      var f = Fo(e, t, a), v = void 0;
      Os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? ru(e, t, f, v) : $o(e, t, f) : v !== void 0 ? Tf(e, t, f, v) : xp(e, t, f);
    }
    function YE(e, t) {
      return e === t || e.nodeType === Hn && e.parentNode === t;
    }
    function Bg(e, t, a, i, o) {
      var f = i;
      if (!(t & Qi) && !(t & Ts)) {
        var v = o;
        if (i !== null) {
          var g = i;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var C = g.tag;
              if (C === A || C === B) {
                var w = g.stateNode.containerInfo;
                if (YE(w, v))
                  break;
                if (C === B)
                  for (var _ = g.return; _ !== null; ) {
                    var P = _.tag;
                    if (P === A || P === B) {
                      var z = _.stateNode.containerInfo;
                      if (YE(z, v))
                        return;
                    }
                    _ = _.return;
                  }
                for (; w !== null; ) {
                  var Y = nc(w);
                  if (Y === null)
                    return;
                  var Q = Y.tag;
                  if (Q === K || Q === te) {
                    g = f = Y;
                    continue e;
                  }
                  w = w.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      Vd(function() {
        return DR(e, t, a, f);
      });
    }
    function jp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function MR(e, t, a, i, o, f) {
      for (var v = t !== null ? t + "Capture" : null, g = i ? v : t, C = [], w = e, _ = null; w !== null; ) {
        var P = w, z = P.stateNode, Y = P.tag;
        if (Y === K && z !== null && (_ = z, g !== null)) {
          var Q = El(w, g);
          Q != null && C.push(jp(w, Q, _));
        }
        if (o)
          break;
        w = w.return;
      }
      return C;
    }
    function um(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var f = o, v = f.stateNode, g = f.tag;
        if (g === K && v !== null) {
          var C = v, w = El(o, a);
          w != null && i.unshift(jp(o, w, C));
          var _ = El(o, t);
          _ != null && i.push(jp(o, _, C));
        }
        o = o.return;
      }
      return i;
    }
    function Ff(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== K);
      return e || null;
    }
    function NR(e, t) {
      for (var a = e, i = t, o = 0, f = a; f; f = Ff(f))
        o++;
      for (var v = 0, g = i; g; g = Ff(g))
        v++;
      for (; o - v > 0; )
        a = Ff(a), o--;
      for (; v - o > 0; )
        i = Ff(i), v--;
      for (var C = o; C--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ff(a), i = Ff(i);
      }
      return null;
    }
    function WE(e, t, a, i, o) {
      for (var f = t._reactName, v = [], g = a; g !== null && g !== i; ) {
        var C = g, w = C.alternate, _ = C.stateNode, P = C.tag;
        if (w !== null && w === i)
          break;
        if (P === K && _ !== null) {
          var z = _;
          if (o) {
            var Y = El(g, f);
            Y != null && v.unshift(jp(g, Y, z));
          } else if (!o) {
            var Q = El(g, f);
            Q != null && v.push(jp(g, Q, z));
          }
        }
        g = g.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function LR(e, t, a, i, o) {
      var f = i && o ? NR(i, o) : null;
      i !== null && WE(e, t, i, f, !1), o !== null && a !== null && WE(e, a, o, f, !0);
    }
    function AR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Xa = !1, Fp = "dangerouslySetInnerHTML", lm = "suppressContentEditableWarning", Go = "suppressHydrationWarning", QE = "autoFocus", ec = "children", tc = "style", om = "__html", Ig, sm, Hp, GE, cm, qE, KE;
    Ig = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, sm = function(e, t) {
      Uc(e, t), Pd(e, t), gh(e, t, {
        registrationNameDependencies: Ge,
        possibleRegistrationNames: dt
      });
    }, qE = Pt && !document.documentMode, Hp = function(e, t, a) {
      if (!Xa) {
        var i = fm(a), o = fm(t);
        o !== i && (Xa = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, GE = function(e) {
      if (!Xa) {
        Xa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, cm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, KE = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var zR = /\r\n?/g, UR = /\u0000|\uFFFD/g;
    function fm(e) {
      Kr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(zR, `
`).replace(UR, "");
    }
    function dm(e, t, a, i) {
      var o = fm(t), f = fm(e);
      if (f !== o && (i && (Xa || (Xa = !0, y('Text content did not match. Server: "%s" Client: "%s"', f, o))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function XE(e) {
      return e.nodeType === si ? e : e.ownerDocument;
    }
    function PR() {
    }
    function pm(e) {
      e.onclick = PR;
    }
    function jR(e, t, a, i, o) {
      for (var f in i)
        if (i.hasOwnProperty(f)) {
          var v = i[f];
          if (f === tc)
            v && Object.freeze(v), oh(t, v);
          else if (f === Fp) {
            var g = v ? v[om] : void 0;
            g != null && Xv(t, g);
          } else if (f === ec)
            if (typeof v == "string") {
              var C = e !== "textarea" || v !== "";
              C && Nc(t, v);
            } else
              typeof v == "number" && Nc(t, "" + v);
          else
            f === lm || f === Go || f === QE || (Ge.hasOwnProperty(f) ? v != null && (typeof v != "function" && cm(f, v), f === "onScroll" && kn("scroll", t)) : v != null && Ea(t, f, v, o));
        }
    }
    function FR(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var f = t[o], v = t[o + 1];
        f === tc ? oh(e, v) : f === Fp ? Xv(e, v) : f === ec ? Nc(e, v) : Ea(e, f, v, i);
      }
    }
    function HR(e, t, a, i) {
      var o, f = XE(a), v, g = i;
      if (g === Ii && (g = Dc(e)), g === Ii) {
        if (o = Wi(e, t), !o && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var C = f.createElement("div");
          C.innerHTML = "<script><\/script>";
          var w = C.firstChild;
          v = C.removeChild(w);
        } else if (typeof t.is == "string")
          v = f.createElement(e, {
            is: t.is
          });
        else if (v = f.createElement(e), e === "select") {
          var _ = v;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        v = f.createElementNS(g, e);
      return g === Ii && !o && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Cn.call(Ig, e) && (Ig[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function $R(e, t) {
      return XE(t).createTextNode(e);
    }
    function VR(e, t, a, i) {
      var o = Wi(t, a);
      sm(t, a);
      var f;
      switch (t) {
        case "dialog":
          kn("cancel", e), kn("close", e), f = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e), f = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Up.length; v++)
            kn(Up[v], e);
          f = a;
          break;
        case "source":
          kn("error", e), f = a;
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e), f = a;
          break;
        case "details":
          kn("toggle", e), f = a;
          break;
        case "input":
          M(e, a), f = b(e, a), kn("invalid", e);
          break;
        case "option":
          tn(e, a), f = a;
          break;
        case "select":
          Es(e, a), f = Ss(e, a), kn("invalid", e);
          break;
        case "textarea":
          Gv(e, a), f = kd(e, a), kn("invalid", e);
          break;
        default:
          f = a;
      }
      switch (Ac(t, f), jR(t, e, i, f, o), t) {
        case "input":
          ja(e), he(e, a, !1);
          break;
        case "textarea":
          ja(e), Kv(e);
          break;
        case "option":
          on(e, a);
          break;
        case "select":
          Rd(e, a);
          break;
        default:
          typeof f.onClick == "function" && pm(e);
          break;
      }
    }
    function BR(e, t, a, i, o) {
      sm(t, i);
      var f = null, v, g;
      switch (t) {
        case "input":
          v = b(e, a), g = b(e, i), f = [];
          break;
        case "select":
          v = Ss(e, a), g = Ss(e, i), f = [];
          break;
        case "textarea":
          v = kd(e, a), g = kd(e, i), f = [];
          break;
        default:
          v = a, g = i, typeof v.onClick != "function" && typeof g.onClick == "function" && pm(e);
          break;
      }
      Ac(t, g);
      var C, w, _ = null;
      for (C in v)
        if (!(g.hasOwnProperty(C) || !v.hasOwnProperty(C) || v[C] == null))
          if (C === tc) {
            var P = v[C];
            for (w in P)
              P.hasOwnProperty(w) && (_ || (_ = {}), _[w] = "");
          } else
            C === Fp || C === ec || C === lm || C === Go || C === QE || (Ge.hasOwnProperty(C) ? f || (f = []) : (f = f || []).push(C, null));
      for (C in g) {
        var z = g[C], Y = v != null ? v[C] : void 0;
        if (!(!g.hasOwnProperty(C) || z === Y || z == null && Y == null))
          if (C === tc)
            if (z && Object.freeze(z), Y) {
              for (w in Y)
                Y.hasOwnProperty(w) && (!z || !z.hasOwnProperty(w)) && (_ || (_ = {}), _[w] = "");
              for (w in z)
                z.hasOwnProperty(w) && Y[w] !== z[w] && (_ || (_ = {}), _[w] = z[w]);
            } else
              _ || (f || (f = []), f.push(C, _)), _ = z;
          else if (C === Fp) {
            var Q = z ? z[om] : void 0, Z = Y ? Y[om] : void 0;
            Q != null && Z !== Q && (f = f || []).push(C, Q);
          } else
            C === ec ? (typeof z == "string" || typeof z == "number") && (f = f || []).push(C, "" + z) : C === lm || C === Go || (Ge.hasOwnProperty(C) ? (z != null && (typeof z != "function" && cm(C, z), C === "onScroll" && kn("scroll", e)), !f && Y !== z && (f = [])) : (f = f || []).push(C, z));
      }
      return _ && (bs(_, g[tc]), (f = f || []).push(tc, _)), f;
    }
    function IR(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && W(e, o);
      var f = Wi(a, i), v = Wi(a, o);
      switch (FR(e, t, f, v), a) {
        case "input":
          X(e, o);
          break;
        case "textarea":
          qv(e, o);
          break;
        case "select":
          ng(e, o);
          break;
      }
    }
    function YR(e) {
      {
        var t = e.toLowerCase();
        return zc.hasOwnProperty(t) && zc[t] || null;
      }
    }
    function WR(e, t, a, i, o, f, v) {
      var g, C;
      switch (g = Wi(t, a), sm(t, a), t) {
        case "dialog":
          kn("cancel", e), kn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e);
          break;
        case "video":
        case "audio":
          for (var w = 0; w < Up.length; w++)
            kn(Up[w], e);
          break;
        case "source":
          kn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e);
          break;
        case "details":
          kn("toggle", e);
          break;
        case "input":
          M(e, a), kn("invalid", e);
          break;
        case "option":
          tn(e, a);
          break;
        case "select":
          Es(e, a), kn("invalid", e);
          break;
        case "textarea":
          Gv(e, a), kn("invalid", e);
          break;
      }
      Ac(t, a);
      {
        C = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, P = 0; P < _.length; P++) {
          var z = _[P].name.toLowerCase();
          switch (z) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              C.add(_[P].name);
          }
        }
      }
      var Y = null;
      for (var Q in a)
        if (a.hasOwnProperty(Q)) {
          var Z = a[Q];
          if (Q === ec)
            typeof Z == "string" ? e.textContent !== Z && (a[Go] !== !0 && dm(e.textContent, Z, f, v), Y = [ec, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[Go] !== !0 && dm(e.textContent, Z, f, v), Y = [ec, "" + Z]);
          else if (Ge.hasOwnProperty(Q))
            Z != null && (typeof Z != "function" && cm(Q, Z), Q === "onScroll" && kn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var He = void 0, nt = g && ve ? null : Nr(Q);
            if (a[Go] !== !0) {
              if (!(Q === lm || Q === Go || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Fp) {
                  var Ke = e.innerHTML, zt = Z ? Z[om] : void 0;
                  if (zt != null) {
                    var Dt = KE(e, zt);
                    Dt !== Ke && Hp(Q, Ke, Dt);
                  }
                } else if (Q === tc) {
                  if (C.delete(Q), qE) {
                    var $ = cg(Z);
                    He = e.getAttribute("style"), $ !== He && Hp(Q, He, $);
                  }
                } else if (g && !ve)
                  C.delete(Q.toLowerCase()), He = Si(e, Q, Z), Z !== He && Hp(Q, He, Z);
                else if (!xn(Q, nt, g) && !en(Q, Z, nt, g)) {
                  var J = !1;
                  if (nt !== null)
                    C.delete(nt.attributeName), He = Sa(e, Q, Z, nt);
                  else {
                    var V = i;
                    if (V === Ii && (V = Dc(t)), V === Ii)
                      C.delete(Q.toLowerCase());
                    else {
                      var de = YR(Q);
                      de !== null && de !== Q && (J = !0, C.delete(de)), C.delete(Q);
                    }
                    He = Si(e, Q, Z);
                  }
                  var $e = ve;
                  !$e && Z !== He && !J && Hp(Q, He, Z);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      C.size > 0 && a[Go] !== !0 && GE(C), t) {
        case "input":
          ja(e), he(e, a, !0);
          break;
        case "textarea":
          ja(e), Kv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && pm(e);
          break;
      }
      return Y;
    }
    function QR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Yg(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Wg(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Qg(e, t, a) {
      {
        if (Xa)
          return;
        Xa = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Gg(e, t) {
      {
        if (t === "" || Xa)
          return;
        Xa = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function GR(e, t, a) {
      switch (t) {
        case "input":
          it(e, a);
          return;
        case "textarea":
          Od(e, a);
          return;
        case "select":
          rg(e, a);
          return;
      }
    }
    var $p = function() {
    }, Vp = function() {
    };
    {
      var qR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], ZE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], KR = ZE.concat(["button"]), XR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], JE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Vp = function(e, t) {
        var a = Rt({}, e || JE), i = {
          tag: t
        };
        return ZE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), KR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), qR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ZR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return XR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, JR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, eC = {};
      $p = function(e, t, a) {
        a = a || JE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = ZR(e, o) ? null : i, v = f ? null : JR(e, a), g = f || v;
        if (g) {
          var C = g.tag, w = !!f + "|" + e + "|" + C;
          if (!eC[w]) {
            eC[w] = !0;
            var _ = e, P = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", P = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", f) {
              var z = "";
              C === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, C, P, z);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, C);
          }
        }
      };
    }
    var vm = "suppressHydrationWarning", hm = "$", mm = "/$", Bp = "$?", Ip = "$!", e_ = "style", qg = null, Kg = null;
    function t_(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case si:
        case ml: {
          t = i === si ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : Md(null, "");
          break;
        }
        default: {
          var f = i === Hn ? e.parentNode : e, v = f.namespaceURI || null;
          t = f.tagName, a = Md(v, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), C = Vp(null, g);
        return {
          namespace: a,
          ancestorInfo: C
        };
      }
    }
    function n_(e, t, a) {
      {
        var i = e, o = Md(i.namespace, t), f = Vp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: f
        };
      }
    }
    function cP(e) {
      return e;
    }
    function r_(e) {
      qg = _a(), Kg = yR();
      var t = null;
      return rr(!1), t;
    }
    function a_(e) {
      gR(Kg), rr(qg), qg = null, Kg = null;
    }
    function i_(e, t, a, i, o) {
      var f;
      {
        var v = i;
        if ($p(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, C = Vp(v.ancestorInfo, e);
          $p(null, g, C);
        }
        f = v.namespace;
      }
      var w = HR(e, t, a, f);
      return Qp(o, w), a0(w, t), w;
    }
    function u_(e, t) {
      e.appendChild(t);
    }
    function l_(e, t, a, i, o) {
      switch (VR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function o_(e, t, a, i, o, f) {
      {
        var v = f;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var g = "" + i.children, C = Vp(v.ancestorInfo, t);
          $p(null, g, C);
        }
      }
      return BR(e, t, a, i);
    }
    function Xg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function s_(e, t, a, i) {
      {
        var o = a;
        $p(null, e, o.ancestorInfo);
      }
      var f = $R(e, t);
      return Qp(i, f), f;
    }
    function c_() {
      var e = window.event;
      return e === void 0 ? eu : Pr(e.type);
    }
    var Zg = typeof setTimeout == "function" ? setTimeout : void 0, f_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Jg = -1, tC = typeof Promise == "function" ? Promise : void 0, d_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof tC < "u" ? function(e) {
      return tC.resolve(null).then(e).catch(p_);
    } : Zg;
    function p_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function v_(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function h_(e, t, a, i, o, f) {
      IR(e, t, a, i, o), a0(e, o);
    }
    function nC(e) {
      Nc(e, "");
    }
    function m_(e, t, a) {
      e.nodeValue = a;
    }
    function y_(e, t) {
      e.appendChild(t);
    }
    function g_(e, t) {
      var a;
      e.nodeType === Hn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && pm(a);
    }
    function S_(e, t, a) {
      e.insertBefore(t, a);
    }
    function E_(e, t, a) {
      e.nodeType === Hn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function C_(e, t) {
      e.removeChild(t);
    }
    function b_(e, t) {
      e.nodeType === Hn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function e0(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Hn) {
          var f = o.data;
          if (f === mm)
            if (i === 0) {
              e.removeChild(o), Ot(t);
              return;
            } else
              i--;
          else
            (f === hm || f === Bp || f === Ip) && i++;
        }
        a = o;
      } while (a);
      Ot(t);
    }
    function x_(e, t) {
      e.nodeType === Hn ? e0(e.parentNode, t) : e.nodeType === ta && e0(e, t), Ot(e);
    }
    function T_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function w_(e) {
      e.nodeValue = "";
    }
    function R_(e, t) {
      e = e;
      var a = t[e_], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Lc("display", i);
    }
    function __(e, t) {
      e.nodeValue = t;
    }
    function k_(e) {
      e.nodeType === ta ? e.textContent = "" : e.nodeType === si && e.documentElement && e.removeChild(e.documentElement);
    }
    function O_(e, t, a) {
      return e.nodeType !== ta || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function D_(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function M_(e) {
      return e.nodeType !== Hn ? null : e;
    }
    function rC(e) {
      return e.data === Bp;
    }
    function t0(e) {
      return e.data === Ip;
    }
    function N_(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function L_(e, t) {
      e._reactRetry = t;
    }
    function ym(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ta || t === Yi)
          break;
        if (t === Hn) {
          var a = e.data;
          if (a === hm || a === Ip || a === Bp)
            break;
          if (a === mm)
            return null;
        }
      }
      return e;
    }
    function Yp(e) {
      return ym(e.nextSibling);
    }
    function A_(e) {
      return ym(e.firstChild);
    }
    function z_(e) {
      return ym(e.firstChild);
    }
    function U_(e) {
      return ym(e.nextSibling);
    }
    function P_(e, t, a, i, o, f, v) {
      Qp(f, e), a0(e, a);
      var g;
      {
        var C = o;
        g = C.namespace;
      }
      var w = (f.mode & kt) !== at;
      return WR(e, t, a, g, i, w, v);
    }
    function j_(e, t, a, i) {
      return Qp(a, e), a.mode & kt, QR(e, t);
    }
    function F_(e, t) {
      Qp(t, e);
    }
    function H_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var i = t.data;
          if (i === mm) {
            if (a === 0)
              return Yp(t);
            a--;
          } else
            (i === hm || i === Ip || i === Bp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function aC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var i = t.data;
          if (i === hm || i === Ip || i === Bp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === mm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $_(e) {
      Ot(e);
    }
    function V_(e) {
      Ot(e);
    }
    function B_(e) {
      return e !== "head" && e !== "body";
    }
    function I_(e, t, a, i) {
      var o = !0;
      dm(t.nodeValue, a, i, o);
    }
    function Y_(e, t, a, i, o, f) {
      if (t[vm] !== !0) {
        var v = !0;
        dm(i.nodeValue, o, f, v);
      }
    }
    function W_(e, t) {
      t.nodeType === ta ? Yg(e, t) : t.nodeType === Hn || Wg(e, t);
    }
    function Q_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ta ? Yg(a, t) : t.nodeType === Hn || Wg(a, t));
      }
    }
    function G_(e, t, a, i, o) {
      (o || t[vm] !== !0) && (i.nodeType === ta ? Yg(a, i) : i.nodeType === Hn || Wg(a, i));
    }
    function q_(e, t, a) {
      Qg(e, t);
    }
    function K_(e, t) {
      Gg(e, t);
    }
    function X_(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Qg(i, t);
      }
    }
    function Z_(e, t) {
      {
        var a = e.parentNode;
        a !== null && Gg(a, t);
      }
    }
    function J_(e, t, a, i, o, f) {
      (f || t[vm] !== !0) && Qg(a, i);
    }
    function ek(e, t, a, i, o) {
      (o || t[vm] !== !0) && Gg(a, i);
    }
    function tk(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function nk(e) {
      Pp(e);
    }
    var Hf = Math.random().toString(36).slice(2), $f = "__reactFiber$" + Hf, n0 = "__reactProps$" + Hf, Wp = "__reactContainer$" + Hf, r0 = "__reactEvents$" + Hf, rk = "__reactListeners$" + Hf, ak = "__reactHandles$" + Hf;
    function ik(e) {
      delete e[$f], delete e[n0], delete e[r0], delete e[rk], delete e[ak];
    }
    function Qp(e, t) {
      t[$f] = e;
    }
    function gm(e, t) {
      t[Wp] = e;
    }
    function iC(e) {
      e[Wp] = null;
    }
    function Gp(e) {
      return !!e[Wp];
    }
    function nc(e) {
      var t = e[$f];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Wp] || a[$f], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = aC(e); o !== null; ) {
              var f = o[$f];
              if (f)
                return f;
              o = aC(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function qo(e) {
      var t = e[$f] || e[Wp];
      return t && (t.tag === K || t.tag === te || t.tag === G || t.tag === A) ? t : null;
    }
    function Vf(e) {
      if (e.tag === K || e.tag === te)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Sm(e) {
      return e[n0] || null;
    }
    function a0(e, t) {
      e[n0] = t;
    }
    function uk(e) {
      var t = e[r0];
      return t === void 0 && (t = e[r0] = /* @__PURE__ */ new Set()), t;
    }
    var uC = {}, lC = d.ReactDebugCurrentFrame;
    function Em(e) {
      if (e) {
        var t = e._owner, a = Ti(e.type, e._source, t ? t.type : null);
        lC.setExtraStackFrame(a);
      } else
        lC.setExtraStackFrame(null);
    }
    function iu(e, t, a, i, o) {
      {
        var f = Function.call.bind(Cn);
        for (var v in e)
          if (f(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var C = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              g = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              g = w;
            }
            g && !(g instanceof Error) && (Em(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof g), Em(null)), g instanceof Error && !(g.message in uC) && (uC[g.message] = !0, Em(o), y("Failed %s type: %s", a, g.message), Em(null));
          }
      }
    }
    var i0 = [], Cm;
    Cm = [];
    var Il = -1;
    function Ko(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (Il < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== Cm[Il] && y("Unexpected Fiber popped."), e.current = i0[Il], i0[Il] = null, Cm[Il] = null, Il--;
    }
    function fa(e, t, a) {
      Il++, i0[Il] = e.current, Cm[Il] = a, e.current = t;
    }
    var u0;
    u0 = {};
    var vi = {};
    Object.freeze(vi);
    var Yl = Ko(vi), Ju = Ko(!1), l0 = vi;
    function Bf(e, t, a) {
      return a && el(t) ? l0 : Yl.current;
    }
    function oC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function If(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return vi;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var v in i)
          f[v] = t[v];
        {
          var g = ht(e) || "Unknown";
          iu(i, f, "context", g);
        }
        return o && oC(e, t, f), f;
      }
    }
    function bm() {
      return Ju.current;
    }
    function el(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function xm(e) {
      ca(Ju, e), ca(Yl, e);
    }
    function o0(e) {
      ca(Ju, e), ca(Yl, e);
    }
    function sC(e, t, a) {
      {
        if (Yl.current !== vi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(Yl, t, e), fa(Ju, a, e);
      }
    }
    function cC(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var f = ht(e) || "Unknown";
            u0[f] || (u0[f] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var g in v)
          if (!(g in o))
            throw new Error((ht(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var C = ht(e) || "Unknown";
          iu(o, v, "child context", C);
        }
        return Rt({}, a, v);
      }
    }
    function Tm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || vi;
        return l0 = Yl.current, fa(Yl, a, e), fa(Ju, Ju.current, e), !0;
      }
    }
    function fC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = cC(e, t, l0);
          i.__reactInternalMemoizedMergedChildContext = o, ca(Ju, e), ca(Yl, e), fa(Yl, o, e), fa(Ju, a, e);
        } else
          ca(Ju, e), fa(Ju, a, e);
      }
    }
    function lk(e) {
      {
        if (!Xd(e) || e.tag !== D)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case D: {
              var a = t.type;
              if (el(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Xo = 0, wm = 1, Wl = null, s0 = !1, c0 = !1;
    function dC(e) {
      Wl === null ? Wl = [e] : Wl.push(e);
    }
    function ok(e) {
      s0 = !0, dC(e);
    }
    function pC() {
      s0 && Zo();
    }
    function Zo() {
      if (!c0 && Wl !== null) {
        c0 = !0;
        var e = 0, t = Qa();
        try {
          var a = !0, i = Wl;
          for (Qn(xr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Wl = null, s0 = !1;
        } catch (f) {
          throw Wl !== null && (Wl = Wl.slice(e + 1)), Ic(Wc, Zo), f;
        } finally {
          Qn(t), c0 = !1;
        }
      }
      return null;
    }
    var Yf = [], Wf = 0, Rm = null, _m = 0, Li = [], Ai = 0, rc = null, Ql = 1, Gl = "";
    function sk(e) {
      return ic(), (e.flags & Gd) !== et;
    }
    function ck(e) {
      return ic(), _m;
    }
    function fk() {
      var e = Gl, t = Ql, a = t & ~dk(t);
      return a.toString(32) + e;
    }
    function ac(e, t) {
      ic(), Yf[Wf++] = _m, Yf[Wf++] = Rm, Rm = e, _m = t;
    }
    function vC(e, t, a) {
      ic(), Li[Ai++] = Ql, Li[Ai++] = Gl, Li[Ai++] = rc, rc = e;
      var i = Ql, o = Gl, f = km(i) - 1, v = i & ~(1 << f), g = a + 1, C = km(t) + f;
      if (C > 30) {
        var w = f - f % 5, _ = (1 << w) - 1, P = (v & _).toString(32), z = v >> w, Y = f - w, Q = km(t) + Y, Z = g << Y, He = Z | z, nt = P + o;
        Ql = 1 << Q | He, Gl = nt;
      } else {
        var Ke = g << f, zt = Ke | v, Dt = o;
        Ql = 1 << C | zt, Gl = Dt;
      }
    }
    function f0(e) {
      ic();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ac(e, a), vC(e, a, i);
      }
    }
    function km(e) {
      return 32 - Zc(e);
    }
    function dk(e) {
      return 1 << km(e) - 1;
    }
    function d0(e) {
      for (; e === Rm; )
        Rm = Yf[--Wf], Yf[Wf] = null, _m = Yf[--Wf], Yf[Wf] = null;
      for (; e === rc; )
        rc = Li[--Ai], Li[Ai] = null, Gl = Li[--Ai], Li[Ai] = null, Ql = Li[--Ai], Li[Ai] = null;
    }
    function pk() {
      return ic(), rc !== null ? {
        id: Ql,
        overflow: Gl
      } : null;
    }
    function vk(e, t) {
      ic(), Li[Ai++] = Ql, Li[Ai++] = Gl, Li[Ai++] = rc, Ql = t.id, Gl = t.overflow, rc = e;
    }
    function ic() {
      Fr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var jr = null, zi = null, uu = !1, uc = !1, Jo = null;
    function hk() {
      uu && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function hC() {
      uc = !0;
    }
    function mk() {
      return uc;
    }
    function yk(e) {
      var t = e.stateNode.containerInfo;
      return zi = z_(t), jr = e, uu = !0, Jo = null, uc = !1, !0;
    }
    function gk(e, t, a) {
      return zi = U_(t), jr = e, uu = !0, Jo = null, uc = !1, a !== null && vk(e, a), !0;
    }
    function mC(e, t) {
      switch (e.tag) {
        case A: {
          W_(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var a = (e.mode & kt) !== at;
          G_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case G: {
          var i = e.memoizedState;
          i.dehydrated !== null && Q_(i.dehydrated, t);
          break;
        }
      }
    }
    function yC(e, t) {
      mC(e, t);
      var a = CM();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Qt) : i.push(a);
    }
    function p0(e, t) {
      {
        if (uc)
          return;
        switch (e.tag) {
          case A: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var i = t.type;
                t.pendingProps, q_(a, i);
                break;
              case te:
                var o = t.pendingProps;
                K_(a, o);
                break;
            }
            break;
          }
          case K: {
            var f = e.type, v = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case K: {
                var C = t.type, w = t.pendingProps, _ = (e.mode & kt) !== at;
                J_(
                  f,
                  v,
                  g,
                  C,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case te: {
                var P = t.pendingProps, z = (e.mode & kt) !== at;
                ek(
                  f,
                  v,
                  g,
                  P,
                  // TODO: Delete this argument when we remove the legacy root API.
                  z
                );
                break;
              }
            }
            break;
          }
          case G: {
            var Y = e.memoizedState, Q = Y.dehydrated;
            if (Q !== null)
              switch (t.tag) {
                case K:
                  var Z = t.type;
                  t.pendingProps, X_(Q, Z);
                  break;
                case te:
                  var He = t.pendingProps;
                  Z_(Q, He);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function gC(e, t) {
      t.flags = t.flags & ~Va | vn, p0(e, t);
    }
    function SC(e, t) {
      switch (e.tag) {
        case K: {
          var a = e.type;
          e.pendingProps;
          var i = O_(t, a);
          return i !== null ? (e.stateNode = i, jr = e, zi = A_(i), !0) : !1;
        }
        case te: {
          var o = e.pendingProps, f = D_(t, o);
          return f !== null ? (e.stateNode = f, jr = e, zi = null, !0) : !1;
        }
        case G: {
          var v = M_(t);
          if (v !== null) {
            var g = {
              dehydrated: v,
              treeContext: pk(),
              retryLane: oa
            };
            e.memoizedState = g;
            var C = bM(v);
            return C.return = e, e.child = C, jr = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function v0(e) {
      return (e.mode & kt) !== at && (e.flags & ct) === et;
    }
    function h0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function m0(e) {
      if (uu) {
        var t = zi;
        if (!t) {
          v0(e) && (p0(jr, e), h0()), gC(jr, e), uu = !1, jr = e;
          return;
        }
        var a = t;
        if (!SC(e, t)) {
          v0(e) && (p0(jr, e), h0()), t = Yp(a);
          var i = jr;
          if (!t || !SC(e, t)) {
            gC(jr, e), uu = !1, jr = e;
            return;
          }
          yC(i, a);
        }
      }
    }
    function Sk(e, t, a) {
      var i = e.stateNode, o = !uc, f = P_(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = f, f !== null;
    }
    function Ek(e) {
      var t = e.stateNode, a = e.memoizedProps, i = j_(t, a, e);
      if (i) {
        var o = jr;
        if (o !== null)
          switch (o.tag) {
            case A: {
              var f = o.stateNode.containerInfo, v = (o.mode & kt) !== at;
              I_(
                f,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case K: {
              var g = o.type, C = o.memoizedProps, w = o.stateNode, _ = (o.mode & kt) !== at;
              Y_(
                g,
                C,
                w,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return i;
    }
    function Ck(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      F_(a, e);
    }
    function bk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return H_(a);
    }
    function EC(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== A && t.tag !== G; )
        t = t.return;
      jr = t;
    }
    function Om(e) {
      if (e !== jr)
        return !1;
      if (!uu)
        return EC(e), uu = !0, !1;
      if (e.tag !== A && (e.tag !== K || B_(e.type) && !Xg(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (v0(e))
            CC(e), h0();
          else
            for (; t; )
              yC(e, t), t = Yp(t);
      }
      return EC(e), e.tag === G ? zi = bk(e) : zi = jr ? Yp(e.stateNode) : null, !0;
    }
    function xk() {
      return uu && zi !== null;
    }
    function CC(e) {
      for (var t = zi; t; )
        mC(e, t), t = Yp(t);
    }
    function Qf() {
      jr = null, zi = null, uu = !1, uc = !1;
    }
    function bC() {
      Jo !== null && (mx(Jo), Jo = null);
    }
    function Fr() {
      return uu;
    }
    function y0(e) {
      Jo === null ? Jo = [e] : Jo.push(e);
    }
    var Tk = d.ReactCurrentBatchConfig, wk = null;
    function Rk() {
      return Tk.transition;
    }
    var lu = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var _k = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rn && (t = a), a = a.return;
        return t;
      }, lc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, qp = [], Kp = [], Xp = [], Zp = [], Jp = [], ev = [], oc = /* @__PURE__ */ new Set();
      lu.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && qp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillMount == "function" && Kp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Zp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillUpdate == "function" && ev.push(e));
      }, lu.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        qp.length > 0 && (qp.forEach(function(z) {
          e.add(ht(z) || "Component"), oc.add(z.type);
        }), qp = []);
        var t = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(z) {
          t.add(ht(z) || "Component"), oc.add(z.type);
        }), Kp = []);
        var a = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(z) {
          a.add(ht(z) || "Component"), oc.add(z.type);
        }), Xp = []);
        var i = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(z) {
          i.add(ht(z) || "Component"), oc.add(z.type);
        }), Zp = []);
        var o = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(z) {
          o.add(ht(z) || "Component"), oc.add(z.type);
        }), Jp = []);
        var f = /* @__PURE__ */ new Set();
        if (ev.length > 0 && (ev.forEach(function(z) {
          f.add(ht(z) || "Component"), oc.add(z.type);
        }), ev = []), t.size > 0) {
          var v = lc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var g = lc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (f.size > 0) {
          var C = lc(f);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, C);
        }
        if (e.size > 0) {
          var w = lc(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (a.size > 0) {
          var _ = lc(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (o.size > 0) {
          var P = lc(o);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, P);
        }
      };
      var Dm = /* @__PURE__ */ new Map(), xC = /* @__PURE__ */ new Set();
      lu.recordLegacyContextWarning = function(e, t) {
        var a = _k(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!xC.has(e.type)) {
          var i = Dm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Dm.set(a, i)), i.push(e));
        }
      }, lu.flushLegacyContextWarning = function() {
        Dm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(f) {
              i.add(ht(f) || "Component"), xC.add(f.type);
            });
            var o = lc(i);
            try {
              Xt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Dn();
            }
          }
        });
      }, lu.discardPendingWarnings = function() {
        qp = [], Kp = [], Xp = [], Zp = [], Jp = [], ev = [], Dm = /* @__PURE__ */ new Map();
      };
    }
    function ou(e, t) {
      if (e && e.defaultProps) {
        var a = Rt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var g0 = Ko(null), S0;
    S0 = {};
    var Mm = null, Gf = null, E0 = null, Nm = !1;
    function Lm() {
      Mm = null, Gf = null, E0 = null, Nm = !1;
    }
    function TC() {
      Nm = !0;
    }
    function wC() {
      Nm = !1;
    }
    function RC(e, t, a) {
      fa(g0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== S0 && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = S0;
    }
    function C0(e, t) {
      var a = g0.current;
      ca(g0, t), e._currentValue = a;
    }
    function b0(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Ll(i.childLanes, t) ? o !== null && !Ll(o.childLanes, t) && (o.childLanes = bt(o.childLanes, t)) : (i.childLanes = bt(i.childLanes, t), o !== null && (o.childLanes = bt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kk(e, t, a) {
      Ok(e, t, a);
    }
    function Ok(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, f = i.dependencies;
        if (f !== null) {
          o = i.child;
          for (var v = f.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === D) {
                var g = Wn(a), C = ql(cn, g);
                C.tag = zm;
                var w = i.updateQueue;
                if (w !== null) {
                  var _ = w.shared, P = _.pending;
                  P === null ? C.next = C : (C.next = P.next, P.next = C), _.pending = C;
                }
              }
              i.lanes = bt(i.lanes, a);
              var z = i.alternate;
              z !== null && (z.lanes = bt(z.lanes, a)), b0(i.return, a, e), f.lanes = bt(f.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === oe)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === ot) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = bt(Y.lanes, a);
          var Q = Y.alternate;
          Q !== null && (Q.lanes = bt(Q.lanes, a)), b0(Y, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var Z = o.sibling;
            if (Z !== null) {
              Z.return = o.return, o = Z;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function qf(e, t) {
      Mm = e, Gf = null, E0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (sa(a.lanes, t) && vv(), a.firstContext = null);
      }
    }
    function ir(e) {
      Nm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (E0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Gf === null) {
          if (Mm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Gf = a, Mm.dependencies = {
            lanes: ee,
            firstContext: a
          };
        } else
          Gf = Gf.next = a;
      }
      return t;
    }
    var sc = null;
    function x0(e) {
      sc === null ? sc = [e] : sc.push(e);
    }
    function Dk() {
      if (sc !== null) {
        for (var e = 0; e < sc.length; e++) {
          var t = sc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var f = o.next;
              o.next = i, a.next = f;
            }
            t.pending = a;
          }
        }
        sc = null;
      }
    }
    function _C(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, x0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Am(e, i);
    }
    function Mk(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, x0(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Nk(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, x0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Am(e, i);
    }
    function Za(e, t) {
      return Am(e, t);
    }
    var Lk = Am;
    function Am(e, t) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), a === null && (e.flags & (vn | Va)) !== et && kx(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = bt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = bt(a.childLanes, t) : (o.flags & (vn | Va)) !== et && kx(e), i = o, o = o.return;
      if (i.tag === A) {
        var f = i.stateNode;
        return f;
      } else
        return null;
    }
    var kC = 0, OC = 1, zm = 2, T0 = 3, Um = !1, w0, Pm;
    w0 = !1, Pm = null;
    function R0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ee
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function DC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function ql(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: kC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function es(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Pm === o && !w0 && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), w0 = !0), LD()) {
        var f = o.pending;
        return f === null ? t.next = t : (t.next = f.next, f.next = t), o.pending = t, Lk(e, a);
      } else
        return Nk(e, o, t, a);
    }
    function jm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (cp(a)) {
          var f = o.lanes;
          f = dp(f, e.pendingLanes);
          var v = bt(f, a);
          o.lanes = v, Ao(e, v);
        }
      }
    }
    function _0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var f = null, v = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var C = g;
            do {
              var w = {
                eventTime: C.eventTime,
                lane: C.lane,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null
              };
              v === null ? f = v = w : (v.next = w, v = w), C = C.next;
            } while (C !== null);
            v === null ? f = v = t : (v.next = t, v = t);
          } else
            f = v = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: f,
            lastBaseUpdate: v,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var _ = a.lastBaseUpdate;
      _ === null ? a.firstBaseUpdate = t : _.next = t, a.lastBaseUpdate = t;
    }
    function Ak(e, t, a, i, o, f) {
      switch (a.tag) {
        case OC: {
          var v = a.payload;
          if (typeof v == "function") {
            TC();
            var g = v.call(f, i, o);
            {
              if (e.mode & Rn) {
                Yn(!0);
                try {
                  v.call(f, i, o);
                } finally {
                  Yn(!1);
                }
              }
              wC();
            }
            return g;
          }
          return v;
        }
        case T0:
          e.flags = e.flags & ~er | ct;
        case kC: {
          var C = a.payload, w;
          if (typeof C == "function") {
            TC(), w = C.call(f, i, o);
            {
              if (e.mode & Rn) {
                Yn(!0);
                try {
                  C.call(f, i, o);
                } finally {
                  Yn(!1);
                }
              }
              wC();
            }
          } else
            w = C;
          return w == null ? i : Rt({}, i, w);
        }
        case zm:
          return Um = !0, i;
      }
      return i;
    }
    function Fm(e, t, a, i) {
      var o = e.updateQueue;
      Um = !1, Pm = o.shared;
      var f = o.firstBaseUpdate, v = o.lastBaseUpdate, g = o.shared.pending;
      if (g !== null) {
        o.shared.pending = null;
        var C = g, w = C.next;
        C.next = null, v === null ? f = w : v.next = w, v = C;
        var _ = e.alternate;
        if (_ !== null) {
          var P = _.updateQueue, z = P.lastBaseUpdate;
          z !== v && (z === null ? P.firstBaseUpdate = w : z.next = w, P.lastBaseUpdate = C);
        }
      }
      if (f !== null) {
        var Y = o.baseState, Q = ee, Z = null, He = null, nt = null, Ke = f;
        do {
          var zt = Ke.lane, Dt = Ke.eventTime;
          if (Ll(i, zt)) {
            if (nt !== null) {
              var J = {
                eventTime: Dt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Lt,
                tag: Ke.tag,
                payload: Ke.payload,
                callback: Ke.callback,
                next: null
              };
              nt = nt.next = J;
            }
            Y = Ak(e, o, Ke, Y, t, a);
            var V = Ke.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ke.lane !== Lt) {
              e.flags |= _i;
              var de = o.effects;
              de === null ? o.effects = [Ke] : de.push(Ke);
            }
          } else {
            var $ = {
              eventTime: Dt,
              lane: zt,
              tag: Ke.tag,
              payload: Ke.payload,
              callback: Ke.callback,
              next: null
            };
            nt === null ? (He = nt = $, Z = Y) : nt = nt.next = $, Q = bt(Q, zt);
          }
          if (Ke = Ke.next, Ke === null) {
            if (g = o.shared.pending, g === null)
              break;
            var $e = g, Ne = $e.next;
            $e.next = null, Ke = Ne, o.lastBaseUpdate = $e, o.shared.pending = null;
          }
        } while (!0);
        nt === null && (Z = Y), o.baseState = Z, o.firstBaseUpdate = He, o.lastBaseUpdate = nt;
        var st = o.shared.interleaved;
        if (st !== null) {
          var yt = st;
          do
            Q = bt(Q, yt.lane), yt = yt.next;
          while (yt !== st);
        } else
          f === null && (o.shared.lanes = ee);
        Rv(Q), e.lanes = Q, e.memoizedState = Y;
      }
      Pm = null;
    }
    function zk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function MC() {
      Um = !1;
    }
    function Hm() {
      return Um;
    }
    function NC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var f = i[o], v = f.callback;
          v !== null && (f.callback = null, zk(v, a));
        }
    }
    var k0 = {}, LC = new u.Component().refs, O0, D0, M0, N0, L0, AC, $m, A0, z0, U0;
    {
      O0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), N0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), z0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set();
      var zC = /* @__PURE__ */ new Set();
      $m = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          zC.has(a) || (zC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, AC = function(e, t) {
        if (t === void 0) {
          var a = Ft(e) || "Component";
          L0.has(a) || (L0.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(k0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(k0);
    }
    function P0(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      {
        if (e.mode & Rn) {
          Yn(!0);
          try {
            f = a(i, o);
          } finally {
            Yn(!1);
          }
        }
        AC(t, f);
      }
      var v = f == null ? o : Rt({}, o, f);
      if (e.memoizedState = v, e.lanes === ee) {
        var g = e.updateQueue;
        g.baseState = v;
      }
    }
    var j0 = {
      isMounted: Ta,
      enqueueSetState: function(e, t, a) {
        var i = Ha(e), o = Da(), f = os(i), v = ql(o, f);
        v.payload = t, a != null && ($m(a, "setState"), v.callback = a);
        var g = es(i, v, f);
        g !== null && (gr(g, i, f, o), jm(g, i, f)), Iu(i, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ha(e), o = Da(), f = os(i), v = ql(o, f);
        v.tag = OC, v.payload = t, a != null && ($m(a, "replaceState"), v.callback = a);
        var g = es(i, v, f);
        g !== null && (gr(g, i, f, o), jm(g, i, f)), Iu(i, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ha(e), i = Da(), o = os(a), f = ql(i, o);
        f.tag = zm, t != null && ($m(t, "forceUpdate"), f.callback = t);
        var v = es(a, f, o);
        v !== null && (gr(v, a, o, i), jm(v, a, o)), up(a, o);
      }
    };
    function UC(e, t, a, i, o, f, v) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var C = g.shouldComponentUpdate(i, f, v);
        {
          if (e.mode & Rn) {
            Yn(!0);
            try {
              C = g.shouldComponentUpdate(i, f, v);
            } finally {
              Yn(!1);
            }
          }
          C === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Je(a, i) || !Je(o, f) : !0;
    }
    function Uk(e, t, a) {
      var i = e.stateNode;
      {
        var o = Ft(t) || "Component", f = i.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !z0.has(t) && (z0.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var v = i.props !== a;
        i.props !== void 0 && v && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !M0.has(t) && (M0.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var g = i.state;
        g && (typeof g != "object" || Mt(g)) && y("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function PC(e, t) {
      t.updater = j0, e.stateNode = t, To(t, e), t._reactInternalInstance = k0;
    }
    function jC(e, t, a) {
      var i = !1, o = vi, f = vi, v = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === we && v._context === void 0
        );
        if (!g && !U0.has(t)) {
          U0.add(t);
          var C = "";
          v === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? C = " However, it is set to a " + typeof v + "." : v.$$typeof === ae ? C = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", C);
        }
      }
      if (typeof v == "object" && v !== null)
        f = ir(v);
      else {
        o = Bf(e, t, !0);
        var w = t.contextTypes;
        i = w != null, f = i ? If(e, o) : vi;
      }
      var _ = new t(a, f);
      if (e.mode & Rn) {
        Yn(!0);
        try {
          _ = new t(a, f);
        } finally {
          Yn(!1);
        }
      }
      var P = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      PC(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && P === null) {
          var z = Ft(t) || "Component";
          D0.has(z) || (D0.add(z), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, _.state === null ? "null" : "undefined", z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var Y = null, Q = null, Z = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), Y !== null || Q !== null || Z !== null) {
            var He = Ft(t) || "Component", nt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            N0.has(He) || (N0.add(He), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, He, nt, Y !== null ? `
  ` + Y : "", Q !== null ? `
  ` + Q : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && oC(e, o, f), _;
    }
    function Pk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ht(e) || "Component"), j0.enqueueReplaceState(t, t.state, null));
    }
    function FC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var f = ht(e) || "Component";
          O0.has(f) || (O0.add(f), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        j0.enqueueReplaceState(t, t.state, null);
      }
    }
    function F0(e, t, a, i) {
      Uk(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = LC, R0(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        o.context = ir(f);
      else {
        var v = Bf(e, t, !0);
        o.context = If(e, v);
      }
      {
        if (o.state === a) {
          var g = Ft(t) || "Component";
          A0.has(g) || (A0.add(g), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & Rn && lu.recordLegacyContextWarning(e, o), lu.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      if (typeof C == "function" && (P0(e, t, C, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Pk(e, o), Fm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var w = Ct;
        w |= ra, (e.mode & Ya) !== at && (w |= aa), e.flags |= w;
      }
    }
    function jk(e, t, a, i) {
      var o = e.stateNode, f = e.memoizedProps;
      o.props = f;
      var v = o.context, g = t.contextType, C = vi;
      if (typeof g == "object" && g !== null)
        C = ir(g);
      else {
        var w = Bf(e, t, !0);
        C = If(e, w);
      }
      var _ = t.getDerivedStateFromProps, P = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !P && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (f !== a || v !== C) && FC(e, o, a, C), MC();
      var z = e.memoizedState, Y = o.state = z;
      if (Fm(e, a, o, i), Y = e.memoizedState, f === a && z === Y && !bm() && !Hm()) {
        if (typeof o.componentDidMount == "function") {
          var Q = Ct;
          Q |= ra, (e.mode & Ya) !== at && (Q |= aa), e.flags |= Q;
        }
        return !1;
      }
      typeof _ == "function" && (P0(e, t, _, a), Y = e.memoizedState);
      var Z = Hm() || UC(e, t, f, a, z, Y, C);
      if (Z) {
        if (!P && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var He = Ct;
          He |= ra, (e.mode & Ya) !== at && (He |= aa), e.flags |= He;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var nt = Ct;
          nt |= ra, (e.mode & Ya) !== at && (nt |= aa), e.flags |= nt;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return o.props = a, o.state = Y, o.context = C, Z;
    }
    function Fk(e, t, a, i, o) {
      var f = t.stateNode;
      DC(e, t);
      var v = t.memoizedProps, g = t.type === t.elementType ? v : ou(t.type, v);
      f.props = g;
      var C = t.pendingProps, w = f.context, _ = a.contextType, P = vi;
      if (typeof _ == "object" && _ !== null)
        P = ir(_);
      else {
        var z = Bf(t, a, !0);
        P = If(t, z);
      }
      var Y = a.getDerivedStateFromProps, Q = typeof Y == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !Q && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (v !== C || w !== P) && FC(t, f, i, P), MC();
      var Z = t.memoizedState, He = f.state = Z;
      if (Fm(t, i, f, o), He = t.memoizedState, v === C && Z === He && !bm() && !Hm() && !ke)
        return typeof f.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Ct), typeof f.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= $a), !1;
      typeof Y == "function" && (P0(t, a, Y, i), He = t.memoizedState);
      var nt = Hm() || UC(t, a, g, i, Z, He, P) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return nt ? (!Q && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, He, P), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, He, P)), typeof f.componentDidUpdate == "function" && (t.flags |= Ct), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= $a)) : (typeof f.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Ct), typeof f.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= $a), t.memoizedProps = i, t.memoizedState = He), f.props = i, f.state = He, f.context = P, nt;
    }
    var H0, $0, V0, B0, I0, HC = function(e, t) {
    };
    H0 = !1, $0 = !1, V0 = {}, B0 = {}, I0 = {}, HC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ht(t) || "Component";
        B0[a] || (B0[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function tv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rn || pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = ht(e) || "Component";
          V0[o] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), V0[o] = !0);
        }
        if (a._owner) {
          var f = a._owner, v;
          if (f) {
            var g = f;
            if (g.tag !== D)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = g.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = v;
          Xn(i, "ref");
          var w = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var _ = function(P) {
            var z = C.refs;
            z === LC && (z = C.refs = {}), P === null ? delete z[w] : z[w] = P;
          };
          return _._stringRef = w, _;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Vm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bm(e) {
      {
        var t = ht(e) || "Component";
        if (I0[t])
          return;
        I0[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function $C(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function VC(e) {
      function t($, J) {
        if (e) {
          var V = $.deletions;
          V === null ? ($.deletions = [J], $.flags |= Qt) : V.push(J);
        }
      }
      function a($, J) {
        if (!e)
          return null;
        for (var V = J; V !== null; )
          t($, V), V = V.sibling;
        return null;
      }
      function i($, J) {
        for (var V = /* @__PURE__ */ new Map(), de = J; de !== null; )
          de.key !== null ? V.set(de.key, de) : V.set(de.index, de), de = de.sibling;
        return V;
      }
      function o($, J) {
        var V = yc($, J);
        return V.index = 0, V.sibling = null, V;
      }
      function f($, J, V) {
        if ($.index = V, !e)
          return $.flags |= Gd, J;
        var de = $.alternate;
        if (de !== null) {
          var $e = de.index;
          return $e < J ? ($.flags |= vn, J) : $e;
        } else
          return $.flags |= vn, J;
      }
      function v($) {
        return e && $.alternate === null && ($.flags |= vn), $;
      }
      function g($, J, V, de) {
        if (J === null || J.tag !== te) {
          var $e = y1(V, $.mode, de);
          return $e.return = $, $e;
        } else {
          var Ne = o(J, V);
          return Ne.return = $, Ne;
        }
      }
      function C($, J, V, de) {
        var $e = V.type;
        if ($e === Ca)
          return _($, J, V.props.children, de, V.key);
        if (J !== null && (J.elementType === $e || // Keep this check inline so it only runs on the false path:
        Nx(J, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof $e == "object" && $e !== null && $e.$$typeof === tt && $C($e) === J.type)) {
          var Ne = o(J, V.props);
          return Ne.ref = tv($, J, V), Ne.return = $, Ne._debugSource = V._source, Ne._debugOwner = V._owner, Ne;
        }
        var st = m1(V, $.mode, de);
        return st.ref = tv($, J, V), st.return = $, st;
      }
      function w($, J, V, de) {
        if (J === null || J.tag !== B || J.stateNode.containerInfo !== V.containerInfo || J.stateNode.implementation !== V.implementation) {
          var $e = g1(V, $.mode, de);
          return $e.return = $, $e;
        } else {
          var Ne = o(J, V.children || []);
          return Ne.return = $, Ne;
        }
      }
      function _($, J, V, de, $e) {
        if (J === null || J.tag !== fe) {
          var Ne = cs(V, $.mode, de, $e);
          return Ne.return = $, Ne;
        } else {
          var st = o(J, V);
          return st.return = $, st;
        }
      }
      function P($, J, V) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var de = y1("" + J, $.mode, V);
          return de.return = $, de;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Ei: {
              var $e = m1(J, $.mode, V);
              return $e.ref = tv($, null, J), $e.return = $, $e;
            }
            case Lr: {
              var Ne = g1(J, $.mode, V);
              return Ne.return = $, Ne;
            }
            case tt: {
              var st = J._payload, yt = J._init;
              return P($, yt(st), V);
            }
          }
          if (Mt(J) || ii(J)) {
            var rn = cs(J, $.mode, V, null);
            return rn.return = $, rn;
          }
          Vm($, J);
        }
        return typeof J == "function" && Bm($), null;
      }
      function z($, J, V, de) {
        var $e = J !== null ? J.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return $e !== null ? null : g($, J, "" + V, de);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Ei:
              return V.key === $e ? C($, J, V, de) : null;
            case Lr:
              return V.key === $e ? w($, J, V, de) : null;
            case tt: {
              var Ne = V._payload, st = V._init;
              return z($, J, st(Ne), de);
            }
          }
          if (Mt(V) || ii(V))
            return $e !== null ? null : _($, J, V, de, null);
          Vm($, V);
        }
        return typeof V == "function" && Bm($), null;
      }
      function Y($, J, V, de, $e) {
        if (typeof de == "string" && de !== "" || typeof de == "number") {
          var Ne = $.get(V) || null;
          return g(J, Ne, "" + de, $e);
        }
        if (typeof de == "object" && de !== null) {
          switch (de.$$typeof) {
            case Ei: {
              var st = $.get(de.key === null ? V : de.key) || null;
              return C(J, st, de, $e);
            }
            case Lr: {
              var yt = $.get(de.key === null ? V : de.key) || null;
              return w(J, yt, de, $e);
            }
            case tt:
              var rn = de._payload, Bt = de._init;
              return Y($, J, V, Bt(rn), $e);
          }
          if (Mt(de) || ii(de)) {
            var Kn = $.get(V) || null;
            return _(J, Kn, de, $e, null);
          }
          Vm(J, de);
        }
        return typeof de == "function" && Bm(J), null;
      }
      function Q($, J, V) {
        {
          if (typeof $ != "object" || $ === null)
            return J;
          switch ($.$$typeof) {
            case Ei:
            case Lr:
              HC($, V);
              var de = $.key;
              if (typeof de != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(de);
                break;
              }
              if (!J.has(de)) {
                J.add(de);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", de);
              break;
            case tt:
              var $e = $._payload, Ne = $._init;
              Q(Ne($e), J, V);
              break;
          }
        }
        return J;
      }
      function Z($, J, V, de) {
        for (var $e = null, Ne = 0; Ne < V.length; Ne++) {
          var st = V[Ne];
          $e = Q(st, $e, $);
        }
        for (var yt = null, rn = null, Bt = J, Kn = 0, It = 0, Bn = null; Bt !== null && It < V.length; It++) {
          Bt.index > It ? (Bn = Bt, Bt = null) : Bn = Bt.sibling;
          var pa = z($, Bt, V[It], de);
          if (pa === null) {
            Bt === null && (Bt = Bn);
            break;
          }
          e && Bt && pa.alternate === null && t($, Bt), Kn = f(pa, Kn, It), rn === null ? yt = pa : rn.sibling = pa, rn = pa, Bt = Bn;
        }
        if (It === V.length) {
          if (a($, Bt), Fr()) {
            var Wr = It;
            ac($, Wr);
          }
          return yt;
        }
        if (Bt === null) {
          for (; It < V.length; It++) {
            var mi = P($, V[It], de);
            mi !== null && (Kn = f(mi, Kn, It), rn === null ? yt = mi : rn.sibling = mi, rn = mi);
          }
          if (Fr()) {
            var Ma = It;
            ac($, Ma);
          }
          return yt;
        }
        for (var Na = i($, Bt); It < V.length; It++) {
          var va = Y(Na, $, It, V[It], de);
          va !== null && (e && va.alternate !== null && Na.delete(va.key === null ? It : va.key), Kn = f(va, Kn, It), rn === null ? yt = va : rn.sibling = va, rn = va);
        }
        if (e && Na.forEach(function(dd) {
          return t($, dd);
        }), Fr()) {
          var to = It;
          ac($, to);
        }
        return yt;
      }
      function He($, J, V, de) {
        var $e = ii(V);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && ($0 || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), $0 = !0), V.entries === $e && (H0 || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), H0 = !0);
          var Ne = $e.call(V);
          if (Ne)
            for (var st = null, yt = Ne.next(); !yt.done; yt = Ne.next()) {
              var rn = yt.value;
              st = Q(rn, st, $);
            }
        }
        var Bt = $e.call(V);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kn = null, It = null, Bn = J, pa = 0, Wr = 0, mi = null, Ma = Bt.next(); Bn !== null && !Ma.done; Wr++, Ma = Bt.next()) {
          Bn.index > Wr ? (mi = Bn, Bn = null) : mi = Bn.sibling;
          var Na = z($, Bn, Ma.value, de);
          if (Na === null) {
            Bn === null && (Bn = mi);
            break;
          }
          e && Bn && Na.alternate === null && t($, Bn), pa = f(Na, pa, Wr), It === null ? Kn = Na : It.sibling = Na, It = Na, Bn = mi;
        }
        if (Ma.done) {
          if (a($, Bn), Fr()) {
            var va = Wr;
            ac($, va);
          }
          return Kn;
        }
        if (Bn === null) {
          for (; !Ma.done; Wr++, Ma = Bt.next()) {
            var to = P($, Ma.value, de);
            to !== null && (pa = f(to, pa, Wr), It === null ? Kn = to : It.sibling = to, It = to);
          }
          if (Fr()) {
            var dd = Wr;
            ac($, dd);
          }
          return Kn;
        }
        for (var Mv = i($, Bn); !Ma.done; Wr++, Ma = Bt.next()) {
          var ol = Y(Mv, $, Wr, Ma.value, de);
          ol !== null && (e && ol.alternate !== null && Mv.delete(ol.key === null ? Wr : ol.key), pa = f(ol, pa, Wr), It === null ? Kn = ol : It.sibling = ol, It = ol);
        }
        if (e && Mv.forEach(function(JM) {
          return t($, JM);
        }), Fr()) {
          var ZM = Wr;
          ac($, ZM);
        }
        return Kn;
      }
      function nt($, J, V, de) {
        if (J !== null && J.tag === te) {
          a($, J.sibling);
          var $e = o(J, V);
          return $e.return = $, $e;
        }
        a($, J);
        var Ne = y1(V, $.mode, de);
        return Ne.return = $, Ne;
      }
      function Ke($, J, V, de) {
        for (var $e = V.key, Ne = J; Ne !== null; ) {
          if (Ne.key === $e) {
            var st = V.type;
            if (st === Ca) {
              if (Ne.tag === fe) {
                a($, Ne.sibling);
                var yt = o(Ne, V.props.children);
                return yt.return = $, yt._debugSource = V._source, yt._debugOwner = V._owner, yt;
              }
            } else if (Ne.elementType === st || // Keep this check inline so it only runs on the false path:
            Nx(Ne, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof st == "object" && st !== null && st.$$typeof === tt && $C(st) === Ne.type) {
              a($, Ne.sibling);
              var rn = o(Ne, V.props);
              return rn.ref = tv($, Ne, V), rn.return = $, rn._debugSource = V._source, rn._debugOwner = V._owner, rn;
            }
            a($, Ne);
            break;
          } else
            t($, Ne);
          Ne = Ne.sibling;
        }
        if (V.type === Ca) {
          var Bt = cs(V.props.children, $.mode, de, V.key);
          return Bt.return = $, Bt;
        } else {
          var Kn = m1(V, $.mode, de);
          return Kn.ref = tv($, J, V), Kn.return = $, Kn;
        }
      }
      function zt($, J, V, de) {
        for (var $e = V.key, Ne = J; Ne !== null; ) {
          if (Ne.key === $e)
            if (Ne.tag === B && Ne.stateNode.containerInfo === V.containerInfo && Ne.stateNode.implementation === V.implementation) {
              a($, Ne.sibling);
              var st = o(Ne, V.children || []);
              return st.return = $, st;
            } else {
              a($, Ne);
              break;
            }
          else
            t($, Ne);
          Ne = Ne.sibling;
        }
        var yt = g1(V, $.mode, de);
        return yt.return = $, yt;
      }
      function Dt($, J, V, de) {
        var $e = typeof V == "object" && V !== null && V.type === Ca && V.key === null;
        if ($e && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Ei:
              return v(Ke($, J, V, de));
            case Lr:
              return v(zt($, J, V, de));
            case tt:
              var Ne = V._payload, st = V._init;
              return Dt($, J, st(Ne), de);
          }
          if (Mt(V))
            return Z($, J, V, de);
          if (ii(V))
            return He($, J, V, de);
          Vm($, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? v(nt($, J, "" + V, de)) : (typeof V == "function" && Bm($), a($, J));
      }
      return Dt;
    }
    var Kf = VC(!0), BC = VC(!1);
    function Hk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = yc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = yc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function $k(e, t) {
      for (var a = e.child; a !== null; )
        mM(a, t), a = a.sibling;
    }
    var nv = {}, ts = Ko(nv), rv = Ko(nv), Im = Ko(nv);
    function Ym(e) {
      if (e === nv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function IC() {
      var e = Ym(Im.current);
      return e;
    }
    function Y0(e, t) {
      fa(Im, t, e), fa(rv, e, e), fa(ts, nv, e);
      var a = t_(t);
      ca(ts, e), fa(ts, a, e);
    }
    function Xf(e) {
      ca(ts, e), ca(rv, e), ca(Im, e);
    }
    function W0() {
      var e = Ym(ts.current);
      return e;
    }
    function YC(e) {
      Ym(Im.current);
      var t = Ym(ts.current), a = n_(t, e.type);
      t !== a && (fa(rv, e, e), fa(ts, a, e));
    }
    function Q0(e) {
      rv.current === e && (ca(ts, e), ca(rv, e));
    }
    var Vk = 0, WC = 1, QC = 1, av = 2, su = Ko(Vk);
    function G0(e, t) {
      return (e & t) !== 0;
    }
    function Zf(e) {
      return e & WC;
    }
    function q0(e, t) {
      return e & WC | t;
    }
    function Bk(e, t) {
      return e | t;
    }
    function ns(e, t) {
      fa(su, t, e);
    }
    function Jf(e) {
      ca(su, e);
    }
    function Ik(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Wm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === G) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || rC(i) || t0(i))
              return t;
          }
        } else if (t.tag === be && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & ct) !== et;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ja = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), tl = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), K0 = [];
    function X0() {
      for (var e = 0; e < K0.length; e++) {
        var t = K0[e];
        t._workInProgressVersionPrimary = null;
      }
      K0.length = 0;
    }
    function Yk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ze = d.ReactCurrentDispatcher, iv = d.ReactCurrentBatchConfig, Z0, ed;
    Z0 = /* @__PURE__ */ new Set();
    var cc = ee, nn = null, pr = null, vr = null, Qm = !1, uv = !1, lv = 0, Wk = 0, Qk = 25, re = null, Ui = null, rs = -1, J0 = !1;
    function Jt() {
      {
        var e = re;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function _e() {
      {
        var e = re;
        Ui !== null && (rs++, Ui[rs] !== e && Gk(e));
      }
    }
    function td(e) {
      e != null && !Mt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function Gk(e) {
      {
        var t = ht(nn);
        if (!Z0.has(t) && (Z0.add(t), Ui !== null)) {
          for (var a = "", i = 30, o = 0; o <= rs; o++) {
            for (var f = Ui[o], v = o === rs ? e : f, g = o + 1 + ". " + f; g.length < i; )
              g += " ";
            g += v + `
`, a += g;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function eS(e, t) {
      if (J0)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ye(e[a], t[a]))
          return !1;
      return !0;
    }
    function nd(e, t, a, i, o, f) {
      cc = f, nn = t, Ui = e !== null ? e._debugHookTypes : null, rs = -1, J0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ee, e !== null && e.memoizedState !== null ? ze.current = hb : Ui !== null ? ze.current = vb : ze.current = pb;
      var v = a(i, o);
      if (uv) {
        var g = 0;
        do {
          if (uv = !1, lv = 0, g >= Qk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, J0 = !1, pr = null, vr = null, t.updateQueue = null, rs = -1, ze.current = mb, v = a(i, o);
        } while (uv);
      }
      ze.current = uy, t._debugHookTypes = Ui;
      var C = pr !== null && pr.next !== null;
      if (cc = ee, nn = null, pr = null, vr = null, re = null, Ui = null, rs = -1, e !== null && (e.flags & or) !== (t.flags & or) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & kt) !== at && y("Internal React error: Expected static flag was missing. Please notify the React team."), Qm = !1, C)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function rd() {
      var e = lv !== 0;
      return lv = 0, e;
    }
    function GC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ya) !== at ? t.flags &= ~(xl | aa | Sn | Ct) : t.flags &= ~(Sn | Ct), e.lanes = Lo(e.lanes, a);
    }
    function qC() {
      if (ze.current = uy, Qm) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Qm = !1;
      }
      cc = ee, nn = null, pr = null, vr = null, Ui = null, rs = -1, re = null, ob = !1, uv = !1, lv = 0;
    }
    function nl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? nn.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function Pi() {
      var e;
      if (pr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = nn.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? nn.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function KC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function tS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function nS(e, t, a) {
      var i = nl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var f = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = f;
      var v = f.dispatch = Zk.bind(null, nn, f);
      return [i.memoizedState, v];
    }
    function rS(e, t, a) {
      var i = Pi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var f = pr, v = f.baseQueue, g = o.pending;
      if (g !== null) {
        if (v !== null) {
          var C = v.next, w = g.next;
          v.next = w, g.next = C;
        }
        f.baseQueue !== v && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), f.baseQueue = v = g, o.pending = null;
      }
      if (v !== null) {
        var _ = v.next, P = f.baseState, z = null, Y = null, Q = null, Z = _;
        do {
          var He = Z.lane;
          if (Ll(cc, He)) {
            if (Q !== null) {
              var Ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Lt,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              Q = Q.next = Ke;
            }
            if (Z.hasEagerState)
              P = Z.eagerState;
            else {
              var zt = Z.action;
              P = e(P, zt);
            }
          } else {
            var nt = {
              lane: He,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            Q === null ? (Y = Q = nt, z = P) : Q = Q.next = nt, nn.lanes = bt(nn.lanes, He), Rv(He);
          }
          Z = Z.next;
        } while (Z !== null && Z !== _);
        Q === null ? z = P : Q.next = Y, Ye(P, i.memoizedState) || vv(), i.memoizedState = P, i.baseState = z, i.baseQueue = Q, o.lastRenderedState = P;
      }
      var Dt = o.interleaved;
      if (Dt !== null) {
        var $ = Dt;
        do {
          var J = $.lane;
          nn.lanes = bt(nn.lanes, J), Rv(J), $ = $.next;
        } while ($ !== Dt);
      } else
        v === null && (o.lanes = ee);
      var V = o.dispatch;
      return [i.memoizedState, V];
    }
    function aS(e, t, a) {
      var i = Pi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var f = o.dispatch, v = o.pending, g = i.memoizedState;
      if (v !== null) {
        o.pending = null;
        var C = v.next, w = C;
        do {
          var _ = w.action;
          g = e(g, _), w = w.next;
        } while (w !== C);
        Ye(g, i.memoizedState) || vv(), i.memoizedState = g, i.baseQueue === null && (i.baseState = g), o.lastRenderedState = g;
      }
      return [g, f];
    }
    function fP(e, t, a) {
    }
    function dP(e, t, a) {
    }
    function iS(e, t, a) {
      var i = nn, o = nl(), f, v = Fr();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        f = a(), ed || f !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), ed = !0);
      } else {
        if (f = t(), !ed) {
          var g = t();
          Ye(f, g) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
        }
        var C = Ty();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        $s(C, cc) || XC(i, t, f);
      }
      o.memoizedState = f;
      var w = {
        value: f,
        getSnapshot: t
      };
      return o.queue = w, Zm(JC.bind(null, i, w, e), [e]), i.flags |= Sn, ov(fr | Hr, ZC.bind(null, i, w, f, t), void 0, null), f;
    }
    function Gm(e, t, a) {
      var i = nn, o = Pi(), f = t();
      if (!ed) {
        var v = t();
        Ye(f, v) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), ed = !0);
      }
      var g = o.memoizedState, C = !Ye(g, f);
      C && (o.memoizedState = f, vv());
      var w = o.queue;
      if (cv(JC.bind(null, i, w, e), [e]), w.getSnapshot !== t || C || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= Sn, ov(fr | Hr, ZC.bind(null, i, w, f, t), void 0, null);
        var _ = Ty();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        $s(_, cc) || XC(i, t, f);
      }
      return f;
    }
    function XC(e, t, a) {
      e.flags |= Ns;
      var i = {
        getSnapshot: t,
        value: a
      }, o = nn.updateQueue;
      if (o === null)
        o = KC(), nn.updateQueue = o, o.stores = [i];
      else {
        var f = o.stores;
        f === null ? o.stores = [i] : f.push(i);
      }
    }
    function ZC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, eb(t) && tb(e);
    }
    function JC(e, t, a) {
      var i = function() {
        eb(t) && tb(e);
      };
      return a(i);
    }
    function eb(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ye(a, i);
      } catch {
        return !0;
      }
    }
    function tb(e) {
      var t = Za(e, lt);
      t !== null && gr(t, e, lt, cn);
    }
    function qm(e) {
      var t = nl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ee,
        dispatch: null,
        lastRenderedReducer: tS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jk.bind(null, nn, a);
      return [t.memoizedState, i];
    }
    function uS(e) {
      return rS(tS);
    }
    function lS(e) {
      return aS(tS);
    }
    function ov(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, f = nn.updateQueue;
      if (f === null)
        f = KC(), nn.updateQueue = f, f.lastEffect = o.next = o;
      else {
        var v = f.lastEffect;
        if (v === null)
          f.lastEffect = o.next = o;
        else {
          var g = v.next;
          v.next = o, o.next = g, f.lastEffect = o;
        }
      }
      return o;
    }
    function oS(e) {
      var t = nl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Km(e) {
      var t = Pi();
      return t.memoizedState;
    }
    function sv(e, t, a, i) {
      var o = nl(), f = i === void 0 ? null : i;
      nn.flags |= e, o.memoizedState = ov(fr | t, a, void 0, f);
    }
    function Xm(e, t, a, i) {
      var o = Pi(), f = i === void 0 ? null : i, v = void 0;
      if (pr !== null) {
        var g = pr.memoizedState;
        if (v = g.destroy, f !== null) {
          var C = g.deps;
          if (eS(f, C)) {
            o.memoizedState = ov(t, a, v, f);
            return;
          }
        }
      }
      nn.flags |= e, o.memoizedState = ov(fr | t, a, v, f);
    }
    function Zm(e, t) {
      return (nn.mode & Ya) !== at ? sv(xl | Sn | ju, Hr, e, t) : sv(Sn | ju, Hr, e, t);
    }
    function cv(e, t) {
      return Xm(Sn, Hr, e, t);
    }
    function sS(e, t) {
      return sv(Ct, tl, e, t);
    }
    function Jm(e, t) {
      return Xm(Ct, tl, e, t);
    }
    function cS(e, t) {
      var a = Ct;
      return a |= ra, (nn.mode & Ya) !== at && (a |= aa), sv(a, dr, e, t);
    }
    function ey(e, t) {
      return Xm(Ct, dr, e, t);
    }
    function nb(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var f = e();
        return o.current = f, function() {
          o.current = null;
        };
      }
    }
    function fS(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Ct;
      return o |= ra, (nn.mode & Ya) !== at && (o |= aa), sv(o, dr, nb.bind(null, t, e), i);
    }
    function ty(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Xm(Ct, dr, nb.bind(null, t, e), i);
    }
    function qk(e, t) {
    }
    var ny = qk;
    function dS(e, t) {
      var a = nl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function ry(e, t) {
      var a = Pi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var f = o[1];
        if (eS(i, f))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function pS(e, t) {
      var a = nl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function ay(e, t) {
      var a = Pi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var f = o[1];
        if (eS(i, f))
          return o[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function vS(e) {
      var t = nl();
      return t.memoizedState = e, e;
    }
    function rb(e) {
      var t = Pi(), a = pr, i = a.memoizedState;
      return ib(t, i, e);
    }
    function ab(e) {
      var t = Pi();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return ib(t, a, e);
    }
    function ib(e, t, a) {
      var i = !Eg(cc);
      if (i) {
        if (!Ye(a, t)) {
          var o = fp();
          nn.lanes = bt(nn.lanes, o), Rv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, vv()), e.memoizedState = a, a;
    }
    function Kk(e, t, a) {
      var i = Qa();
      Qn(Tr(i, cr)), e(!0);
      var o = iv.transition;
      iv.transition = {};
      var f = iv.transition;
      iv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Qn(i), iv.transition = o, o === null && f._updatedFibers) {
          var v = f._updatedFibers.size;
          v > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
        }
      }
    }
    function hS() {
      var e = qm(!1), t = e[0], a = e[1], i = Kk.bind(null, a), o = nl();
      return o.memoizedState = i, [t, i];
    }
    function ub() {
      var e = uS(), t = e[0], a = Pi(), i = a.memoizedState;
      return [t, i];
    }
    function lb() {
      var e = lS(), t = e[0], a = Pi(), i = a.memoizedState;
      return [t, i];
    }
    var ob = !1;
    function Xk() {
      return ob;
    }
    function mS() {
      var e = nl(), t = Ty(), a = t.identifierPrefix, i;
      if (Fr()) {
        var o = fk();
        i = ":" + a + "R" + o;
        var f = lv++;
        f > 0 && (i += "H" + f.toString(32)), i += ":";
      } else {
        var v = Wk++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function iy() {
      var e = Pi(), t = e.memoizedState;
      return t;
    }
    function Zk(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = os(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sb(e))
        cb(t, o);
      else {
        var f = _C(e, t, o, i);
        if (f !== null) {
          var v = Da();
          gr(f, e, i, v), fb(f, t, i);
        }
      }
      db(e, i);
    }
    function Jk(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = os(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sb(e))
        cb(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === ee && (f === null || f.lanes === ee)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = ze.current, ze.current = cu;
            try {
              var C = t.lastRenderedState, w = v(C, a);
              if (o.hasEagerState = !0, o.eagerState = w, Ye(w, C)) {
                Mk(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              ze.current = g;
            }
          }
        }
        var _ = _C(e, t, o, i);
        if (_ !== null) {
          var P = Da();
          gr(_, e, i, P), fb(_, t, i);
        }
      }
      db(e, i);
    }
    function sb(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function cb(e, t) {
      uv = Qm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function fb(e, t, a) {
      if (cp(a)) {
        var i = t.lanes;
        i = dp(i, e.pendingLanes);
        var o = bt(i, a);
        t.lanes = o, Ao(e, o);
      }
    }
    function db(e, t, a) {
      Iu(e, t);
    }
    var uy = {
      readContext: ir,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: ue
    }, pb = null, vb = null, hb = null, mb = null, rl = null, cu = null, ly = null;
    {
      var yS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, mt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      pb = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Jt(), td(t), dS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Jt(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Jt(), td(t), Zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Jt(), td(a), fS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Jt(), td(t), sS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Jt(), td(t), cS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Jt(), td(t);
          var a = ze.current;
          ze.current = rl;
          try {
            return pS(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Jt();
          var i = ze.current;
          ze.current = rl;
          try {
            return nS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Jt(), oS(e);
        },
        useState: function(e) {
          re = "useState", Jt();
          var t = ze.current;
          ze.current = rl;
          try {
            return qm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Jt(), vS(e);
        },
        useTransition: function() {
          return re = "useTransition", Jt(), hS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Jt(), iS(e, t, a);
        },
        useId: function() {
          return re = "useId", Jt(), mS();
        },
        unstable_isNewReconciler: ue
      }, vb = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), dS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), Zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", _e(), fS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), sS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), cS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var a = ze.current;
          ze.current = rl;
          try {
            return pS(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", _e();
          var i = ze.current;
          ze.current = rl;
          try {
            return nS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), oS(e);
        },
        useState: function(e) {
          re = "useState", _e();
          var t = ze.current;
          ze.current = rl;
          try {
            return qm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), vS(e);
        },
        useTransition: function() {
          return re = "useTransition", _e(), hS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", _e(), iS(e, t, a);
        },
        useId: function() {
          return re = "useId", _e(), mS();
        },
        unstable_isNewReconciler: ue
      }, hb = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), ry(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), cv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", _e(), ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), ey(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var a = ze.current;
          ze.current = cu;
          try {
            return ay(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", _e();
          var i = ze.current;
          ze.current = cu;
          try {
            return rS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), Km();
        },
        useState: function(e) {
          re = "useState", _e();
          var t = ze.current;
          ze.current = cu;
          try {
            return uS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), ny();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), rb(e);
        },
        useTransition: function() {
          return re = "useTransition", _e(), ub();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", _e(), Gm(e, t);
        },
        useId: function() {
          return re = "useId", _e(), iy();
        },
        unstable_isNewReconciler: ue
      }, mb = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", _e(), ry(e, t);
        },
        useContext: function(e) {
          return re = "useContext", _e(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", _e(), cv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", _e(), ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", _e(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", _e(), ey(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", _e();
          var a = ze.current;
          ze.current = ly;
          try {
            return ay(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", _e();
          var i = ze.current;
          ze.current = ly;
          try {
            return aS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", _e(), Km();
        },
        useState: function(e) {
          re = "useState", _e();
          var t = ze.current;
          ze.current = ly;
          try {
            return lS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", _e(), ny();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", _e(), ab(e);
        },
        useTransition: function() {
          return re = "useTransition", _e(), lb();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", _e(), Gm(e, t);
        },
        useId: function() {
          return re = "useId", _e(), iy();
        },
        unstable_isNewReconciler: ue
      }, rl = {
        readContext: function(e) {
          return yS(), ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", mt(), Jt(), dS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", mt(), Jt(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", mt(), Jt(), Zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", mt(), Jt(), fS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", mt(), Jt(), sS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", mt(), Jt(), cS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", mt(), Jt();
          var a = ze.current;
          ze.current = rl;
          try {
            return pS(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", mt(), Jt();
          var i = ze.current;
          ze.current = rl;
          try {
            return nS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", mt(), Jt(), oS(e);
        },
        useState: function(e) {
          re = "useState", mt(), Jt();
          var t = ze.current;
          ze.current = rl;
          try {
            return qm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", mt(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", mt(), Jt(), vS(e);
        },
        useTransition: function() {
          return re = "useTransition", mt(), Jt(), hS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", mt(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", mt(), Jt(), iS(e, t, a);
        },
        useId: function() {
          return re = "useId", mt(), Jt(), mS();
        },
        unstable_isNewReconciler: ue
      }, cu = {
        readContext: function(e) {
          return yS(), ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", mt(), _e(), ry(e, t);
        },
        useContext: function(e) {
          return re = "useContext", mt(), _e(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", mt(), _e(), cv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", mt(), _e(), ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", mt(), _e(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", mt(), _e(), ey(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", mt(), _e();
          var a = ze.current;
          ze.current = cu;
          try {
            return ay(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", mt(), _e();
          var i = ze.current;
          ze.current = cu;
          try {
            return rS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", mt(), _e(), Km();
        },
        useState: function(e) {
          re = "useState", mt(), _e();
          var t = ze.current;
          ze.current = cu;
          try {
            return uS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", mt(), _e(), ny();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", mt(), _e(), rb(e);
        },
        useTransition: function() {
          return re = "useTransition", mt(), _e(), ub();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", mt(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", mt(), _e(), Gm(e, t);
        },
        useId: function() {
          return re = "useId", mt(), _e(), iy();
        },
        unstable_isNewReconciler: ue
      }, ly = {
        readContext: function(e) {
          return yS(), ir(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", mt(), _e(), ry(e, t);
        },
        useContext: function(e) {
          return re = "useContext", mt(), _e(), ir(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", mt(), _e(), cv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", mt(), _e(), ty(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", mt(), _e(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", mt(), _e(), ey(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", mt(), _e();
          var a = ze.current;
          ze.current = cu;
          try {
            return ay(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", mt(), _e();
          var i = ze.current;
          ze.current = cu;
          try {
            return aS(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", mt(), _e(), Km();
        },
        useState: function(e) {
          re = "useState", mt(), _e();
          var t = ze.current;
          ze.current = cu;
          try {
            return lS(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", mt(), _e(), ny();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", mt(), _e(), ab(e);
        },
        useTransition: function() {
          return re = "useTransition", mt(), _e(), lb();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", mt(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", mt(), _e(), Gm(e, t);
        },
        useId: function() {
          return re = "useId", mt(), _e(), iy();
        },
        unstable_isNewReconciler: ue
      };
    }
    var as = s.unstable_now, yb = 0, oy = -1, fv = -1, sy = -1, gS = !1, cy = !1;
    function gb() {
      return gS;
    }
    function eO() {
      cy = !0;
    }
    function tO() {
      gS = !1, cy = !1;
    }
    function nO() {
      gS = cy, cy = !1;
    }
    function Sb() {
      return yb;
    }
    function Eb() {
      yb = as();
    }
    function SS(e) {
      fv = as(), e.actualStartTime < 0 && (e.actualStartTime = as());
    }
    function Cb(e) {
      fv = -1;
    }
    function fy(e, t) {
      if (fv >= 0) {
        var a = as() - fv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), fv = -1;
      }
    }
    function al(e) {
      if (oy >= 0) {
        var t = as() - oy;
        oy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Se:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function ES(e) {
      if (sy >= 0) {
        var t = as() - sy;
        sy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Se:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function il() {
      oy = as();
    }
    function CS() {
      sy = as();
    }
    function bS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function fc(e, t) {
      return {
        value: e,
        source: t,
        stack: co(t),
        digest: null
      };
    }
    function xS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function rO(e, t) {
      return !0;
    }
    function TS(e, t) {
      try {
        var a = rO(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, f = t.stack, v = f !== null ? f : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === D)
            return;
          console.error(i);
        }
        var g = o ? ht(o) : null, C = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === A)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = ht(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var P = C + `
` + v + `

` + ("" + w);
        console.error(P);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var aO = typeof WeakMap == "function" ? WeakMap : Map;
    function bb(e, t, a) {
      var i = ql(cn, a);
      i.tag = T0, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        KD(o), TS(e, t);
      }, i;
    }
    function wS(e, t, a) {
      var i = ql(cn, a);
      i.tag = T0;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = t.value;
        i.payload = function() {
          return o(f);
        }, i.callback = function() {
          Lx(e), TS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        Lx(e), TS(e, t), typeof o != "function" && GD(this);
        var C = t.value, w = t.stack;
        this.componentDidCatch(C, {
          componentStack: w !== null ? w : ""
        }), typeof o != "function" && (sa(e.lanes, lt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ht(e) || "Unknown"));
      }), i;
    }
    function xb(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new aO(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var f = XD.bind(null, e, t, a);
        sr && _v(e, a), t.then(f, f);
      }
    }
    function iO(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var f = /* @__PURE__ */ new Set();
        f.add(a), e.updateQueue = f;
      } else
        o.add(a);
    }
    function uO(e, t) {
      var a = e.tag;
      if ((e.mode & kt) === at && (a === k || a === se || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Tb(e) {
      var t = e;
      do {
        if (t.tag === G && Ik(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function wb(e, t, a, i, o) {
      if ((e.mode & kt) === at) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= ct, a.flags |= Ls, a.flags &= ~($c | ba), a.tag === D) {
            var f = a.alternate;
            if (f === null)
              a.tag = pt;
            else {
              var v = ql(cn, lt);
              v.tag = zm, es(a, v, lt);
            }
          }
          a.lanes = bt(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= er, e.lanes = o, e;
    }
    function lO(e, t, a, i, o) {
      if (a.flags |= ba, sr && _v(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var f = i;
        uO(a), Fr() && a.mode & kt && hC();
        var v = Tb(t);
        if (v !== null) {
          v.flags &= ~Mn, wb(v, t, a, e, o), v.mode & kt && xb(e, f, o), iO(v, e, f);
          return;
        } else {
          if (!No(o)) {
            xb(e, f, o), a1();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = g;
        }
      } else if (Fr() && a.mode & kt) {
        hC();
        var C = Tb(t);
        if (C !== null) {
          (C.flags & er) === et && (C.flags |= Mn), wb(C, t, a, e, o), y0(fc(i, a));
          return;
        }
      }
      i = fc(i, a), HD(i);
      var w = t;
      do {
        switch (w.tag) {
          case A: {
            var _ = i;
            w.flags |= er;
            var P = Wn(o);
            w.lanes = bt(w.lanes, P);
            var z = bb(w, _, P);
            _0(w, z);
            return;
          }
          case D:
            var Y = i, Q = w.type, Z = w.stateNode;
            if ((w.flags & ct) === et && (typeof Q.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !Tx(Z))) {
              w.flags |= er;
              var He = Wn(o);
              w.lanes = bt(w.lanes, He);
              var nt = wS(w, Y, He);
              _0(w, nt);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function oO() {
      return null;
    }
    var dv = d.ReactCurrentOwner, fu = !1, RS, pv, _S, kS, OS, dc, DS, dy;
    RS = {}, pv = {}, _S = {}, kS = {}, OS = {}, dc = !1, DS = {}, dy = {};
    function ka(e, t, a, i) {
      e === null ? t.child = BC(t, null, a, i) : t.child = Kf(t, e.child, a, i);
    }
    function sO(e, t, a, i) {
      t.child = Kf(t, e.child, null, i), t.child = Kf(t, null, a, i);
    }
    function Rb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && iu(
          f,
          i,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v = a.render, g = t.ref, C, w;
      qf(t, o), Bu(t);
      {
        if (dv.current = t, ea(!0), C = nd(e, t, v, i, g, o), w = rd(), t.mode & Rn) {
          Yn(!0);
          try {
            C = nd(e, t, v, i, g, o), w = rd();
          } finally {
            Yn(!1);
          }
        }
        ea(!1);
      }
      return Tl(), e !== null && !fu ? (GC(e, t, o), Kl(e, t, o)) : (Fr() && w && f0(t), t.flags |= Uu, ka(e, t, C, o), t.child);
    }
    function _b(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        if (vM(f) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = f;
          return v = fd(f), t.tag = je, t.type = v, LS(t, f), kb(e, t, v, i, o);
        }
        {
          var g = f.propTypes;
          g && iu(
            g,
            i,
            // Resolved props
            "prop",
            Ft(f)
          );
        }
        var C = h1(a.type, null, i, t, t.mode, o);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var w = a.type, _ = w.propTypes;
        _ && iu(
          _,
          i,
          // Resolved props
          "prop",
          Ft(w)
        );
      }
      var P = e.child, z = FS(e, o);
      if (!z) {
        var Y = P.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : Je, Q(Y, i) && e.ref === t.ref)
          return Kl(e, t, o);
      }
      t.flags |= Uu;
      var Z = yc(P, i);
      return Z.ref = t.ref, Z.return = t, t.child = Z, Z;
    }
    function kb(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var f = t.elementType;
        if (f.$$typeof === tt) {
          var v = f, g = v._payload, C = v._init;
          try {
            f = C(g);
          } catch {
            f = null;
          }
          var w = f && f.propTypes;
          w && iu(
            w,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(f)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (Je(_, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fu = !1, t.pendingProps = i = _, FS(e, o))
            (e.flags & Ls) !== et && (fu = !0);
          else
            return t.lanes = e.lanes, Kl(e, t, o);
      }
      return MS(e, t, a, i, o);
    }
    function Ob(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & kt) === at) {
          var v = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, wy(t, a);
        } else if (sa(a, oa)) {
          var P = {
            baseLanes: ee,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = P;
          var z = f !== null ? f.baseLanes : a;
          wy(t, z);
        } else {
          var g = null, C;
          if (f !== null) {
            var w = f.baseLanes;
            C = bt(w, a);
          } else
            C = a;
          t.lanes = t.childLanes = oa;
          var _ = {
            baseLanes: C,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, wy(t, C), null;
        }
      else {
        var Y;
        f !== null ? (Y = bt(f.baseLanes, a), t.memoizedState = null) : Y = a, wy(t, Y);
      }
      return ka(e, t, o, a), t.child;
    }
    function cO(e, t, a) {
      var i = t.pendingProps;
      return ka(e, t, i, a), t.child;
    }
    function fO(e, t, a) {
      var i = t.pendingProps.children;
      return ka(e, t, i, a), t.child;
    }
    function dO(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, f = o.children;
      return ka(e, t, f, a), t.child;
    }
    function Db(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= na, t.flags |= qd);
    }
    function MS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && iu(
          f,
          i,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var v;
      {
        var g = Bf(t, a, !0);
        v = If(t, g);
      }
      var C, w;
      qf(t, o), Bu(t);
      {
        if (dv.current = t, ea(!0), C = nd(e, t, a, i, v, o), w = rd(), t.mode & Rn) {
          Yn(!0);
          try {
            C = nd(e, t, a, i, v, o), w = rd();
          } finally {
            Yn(!1);
          }
        }
        ea(!1);
      }
      return Tl(), e !== null && !fu ? (GC(e, t, o), Kl(e, t, o)) : (Fr() && w && f0(t), t.flags |= Uu, ka(e, t, C, o), t.child);
    }
    function Mb(e, t, a, i, o) {
      {
        switch (OM(t)) {
          case !1: {
            var f = t.stateNode, v = t.type, g = new v(t.memoizedProps, f.context), C = g.state;
            f.updater.enqueueSetState(f, C, null);
            break;
          }
          case !0: {
            t.flags |= ct, t.flags |= er;
            var w = new Error("Simulated error coming from DevTools"), _ = Wn(o);
            t.lanes = bt(t.lanes, _);
            var P = wS(t, fc(w, t), _);
            _0(t, P);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && iu(
            z,
            i,
            // Resolved props
            "prop",
            Ft(a)
          );
        }
      }
      var Y;
      el(a) ? (Y = !0, Tm(t)) : Y = !1, qf(t, o);
      var Q = t.stateNode, Z;
      Q === null ? (vy(e, t), jC(t, a, i), F0(t, a, i, o), Z = !0) : e === null ? Z = jk(t, a, i, o) : Z = Fk(e, t, a, i, o);
      var He = NS(e, t, a, Z, Y, o);
      {
        var nt = t.stateNode;
        Z && nt.props !== i && (dc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ht(t) || "a component"), dc = !0);
      }
      return He;
    }
    function NS(e, t, a, i, o, f) {
      Db(e, t);
      var v = (t.flags & ct) !== et;
      if (!i && !v)
        return o && fC(t, a, !1), Kl(e, t, f);
      var g = t.stateNode;
      dv.current = t;
      var C;
      if (v && typeof a.getDerivedStateFromError != "function")
        C = null, Cb();
      else {
        Bu(t);
        {
          if (ea(!0), C = g.render(), t.mode & Rn) {
            Yn(!0);
            try {
              g.render();
            } finally {
              Yn(!1);
            }
          }
          ea(!1);
        }
        Tl();
      }
      return t.flags |= Uu, e !== null && v ? sO(e, t, C, f) : ka(e, t, C, f), t.memoizedState = g.state, o && fC(t, a, !0), t.child;
    }
    function Nb(e) {
      var t = e.stateNode;
      t.pendingContext ? sC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sC(e, t.context, !1), Y0(e, t.containerInfo);
    }
    function pO(e, t, a) {
      if (Nb(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, f = o.element;
      DC(e, t), Fm(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var g = v.element;
      if (o.isDehydrated) {
        var C = {
          element: g,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, w = t.updateQueue;
        if (w.baseState = C, t.memoizedState = C, t.flags & Mn) {
          var _ = fc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Lb(e, t, g, a, _);
        } else if (g !== f) {
          var P = fc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Lb(e, t, g, a, P);
        } else {
          yk(t);
          var z = BC(t, null, g, a);
          t.child = z;
          for (var Y = z; Y; )
            Y.flags = Y.flags & ~vn | Va, Y = Y.sibling;
        }
      } else {
        if (Qf(), g === f)
          return Kl(e, t, a);
        ka(e, t, g, a);
      }
      return t.child;
    }
    function Lb(e, t, a, i, o) {
      return Qf(), y0(o), t.flags |= Mn, ka(e, t, a, i), t.child;
    }
    function vO(e, t, a) {
      YC(t), e === null && m0(t);
      var i = t.type, o = t.pendingProps, f = e !== null ? e.memoizedProps : null, v = o.children, g = Xg(i, o);
      return g ? v = null : f !== null && Xg(i, f) && (t.flags |= Zt), Db(e, t), ka(e, t, v, a), t.child;
    }
    function hO(e, t) {
      return e === null && m0(t), null;
    }
    function mO(e, t, a, i) {
      vy(e, t);
      var o = t.pendingProps, f = a, v = f._payload, g = f._init, C = g(v);
      t.type = C;
      var w = t.tag = hM(C), _ = ou(C, o), P;
      switch (w) {
        case k:
          return LS(t, C), t.type = C = fd(C), P = MS(null, t, C, _, i), P;
        case D:
          return t.type = C = s1(C), P = Mb(null, t, C, _, i), P;
        case se:
          return t.type = C = c1(C), P = Rb(null, t, C, _, i), P;
        case Pe: {
          if (t.type !== t.elementType) {
            var z = C.propTypes;
            z && iu(
              z,
              _,
              // Resolved for outer only
              "prop",
              Ft(C)
            );
          }
          return P = _b(
            null,
            t,
            C,
            ou(C.type, _),
            // The inner type can have defaults too
            i
          ), P;
        }
      }
      var Y = "";
      throw C !== null && typeof C == "object" && C.$$typeof === tt && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + C + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function yO(e, t, a, i, o) {
      vy(e, t), t.tag = D;
      var f;
      return el(a) ? (f = !0, Tm(t)) : f = !1, qf(t, o), jC(t, a, i), F0(t, a, i, o), NS(null, t, a, !0, f, o);
    }
    function gO(e, t, a, i) {
      vy(e, t);
      var o = t.pendingProps, f;
      {
        var v = Bf(t, a, !1);
        f = If(t, v);
      }
      qf(t, i);
      var g, C;
      Bu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var w = Ft(a) || "Unknown";
          RS[w] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), RS[w] = !0);
        }
        t.mode & Rn && lu.recordLegacyContextWarning(t, null), ea(!0), dv.current = t, g = nd(null, t, a, o, f, i), C = rd(), ea(!1);
      }
      if (Tl(), t.flags |= Uu, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var _ = Ft(a) || "Unknown";
        pv[_] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), pv[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var P = Ft(a) || "Unknown";
          pv[P] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), pv[P] = !0);
        }
        t.tag = D, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return el(a) ? (z = !0, Tm(t)) : z = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, R0(t), PC(t, g), F0(t, a, o, i), NS(null, t, a, !0, z, i);
      } else {
        if (t.tag = k, t.mode & Rn) {
          Yn(!0);
          try {
            g = nd(null, t, a, o, f, i), C = rd();
          } finally {
            Yn(!1);
          }
        }
        return Fr() && C && f0(t), ka(null, t, g, i), LS(t, a), t.child;
      }
    }
    function LS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ur();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", f = e._debugSource;
          f && (o = f.fileName + ":" + f.lineNumber), OS[o] || (OS[o] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Ft(t) || "Unknown";
          kS[v] || (y("%s: Function components do not support getDerivedStateFromProps.", v), kS[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Ft(t) || "Unknown";
          _S[g] || (y("%s: Function components do not support contextType.", g), _S[g] = !0);
        }
      }
    }
    var AS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Lt
    };
    function zS(e) {
      return {
        baseLanes: e,
        cachePool: oO(),
        transitions: null
      };
    }
    function SO(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function EO(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return G0(e, av);
    }
    function CO(e, t) {
      return Lo(e.childLanes, t);
    }
    function Ab(e, t, a) {
      var i = t.pendingProps;
      DM(t) && (t.flags |= ct);
      var o = su.current, f = !1, v = (t.flags & ct) !== et;
      if (v || EO(o, e) ? (f = !0, t.flags &= ~ct) : (e === null || e.memoizedState !== null) && (o = Bk(o, QC)), o = Zf(o), ns(t, o), e === null) {
        m0(t);
        var g = t.memoizedState;
        if (g !== null) {
          var C = g.dehydrated;
          if (C !== null)
            return RO(t, C);
        }
        var w = i.children, _ = i.fallback;
        if (f) {
          var P = bO(t, w, _, a), z = t.child;
          return z.memoizedState = zS(a), t.memoizedState = AS, P;
        } else
          return US(t, w);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var Q = Y.dehydrated;
          if (Q !== null)
            return _O(e, t, v, i, Q, Y, a);
        }
        if (f) {
          var Z = i.fallback, He = i.children, nt = TO(e, t, He, Z, a), Ke = t.child, zt = e.child.memoizedState;
          return Ke.memoizedState = zt === null ? zS(a) : SO(zt, a), Ke.childLanes = CO(e, a), t.memoizedState = AS, nt;
        } else {
          var Dt = i.children, $ = xO(e, t, Dt, a);
          return t.memoizedState = null, $;
        }
      }
    }
    function US(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, f = PS(o, i);
      return f.return = e, e.child = f, f;
    }
    function bO(e, t, a, i) {
      var o = e.mode, f = e.child, v = {
        mode: "hidden",
        children: t
      }, g, C;
      return (o & kt) === at && f !== null ? (g = f, g.childLanes = ee, g.pendingProps = v, e.mode & ut && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), C = cs(a, o, i, null)) : (g = PS(v, o), C = cs(a, o, i, null)), g.return = e, C.return = e, g.sibling = C, e.child = g, C;
    }
    function PS(e, t, a) {
      return zx(e, t, ee, null);
    }
    function zb(e, t) {
      return yc(e, t);
    }
    function xO(e, t, a, i) {
      var o = e.child, f = o.sibling, v = zb(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & kt) === at && (v.lanes = i), v.return = t, v.sibling = null, f !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [f], t.flags |= Qt) : g.push(f);
      }
      return t.child = v, v;
    }
    function TO(e, t, a, i, o) {
      var f = t.mode, v = e.child, g = v.sibling, C = {
        mode: "hidden",
        children: a
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (f & kt) === at && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var _ = t.child;
        w = _, w.childLanes = ee, w.pendingProps = C, t.mode & ut && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = v.selfBaseDuration, w.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        w = zb(v, C), w.subtreeFlags = v.subtreeFlags & or;
      var P;
      return g !== null ? P = yc(g, i) : (P = cs(i, f, o, null), P.flags |= vn), P.return = t, w.return = t, w.sibling = P, t.child = w, P;
    }
    function py(e, t, a, i) {
      i !== null && y0(i), Kf(t, e.child, null, a);
      var o = t.pendingProps, f = o.children, v = US(t, f);
      return v.flags |= vn, t.memoizedState = null, v;
    }
    function wO(e, t, a, i, o) {
      var f = t.mode, v = {
        mode: "visible",
        children: a
      }, g = PS(v, f), C = cs(i, f, o, null);
      return C.flags |= vn, g.return = t, C.return = t, g.sibling = C, t.child = g, (t.mode & kt) !== at && Kf(t, e.child, null, o), C;
    }
    function RO(e, t, a) {
      return (e.mode & kt) === at ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : t0(t) ? e.lanes = _l : e.lanes = oa, null;
    }
    function _O(e, t, a, i, o, f, v) {
      if (a)
        if (t.flags & Mn) {
          t.flags &= ~Mn;
          var $ = xS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return py(e, t, v, $);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ct, null;
          var J = i.children, V = i.fallback, de = wO(e, t, J, V, v), $e = t.child;
          return $e.memoizedState = zS(v), t.memoizedState = AS, de;
        }
      else {
        if (hk(), (t.mode & kt) === at)
          return py(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (t0(o)) {
          var g, C, w;
          {
            var _ = N_(o);
            g = _.digest, C = _.message, w = _.stack;
          }
          var P;
          C ? P = new Error(C) : P = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = xS(P, g, w);
          return py(e, t, v, z);
        }
        var Y = sa(v, e.childLanes);
        if (fu || Y) {
          var Q = Ty();
          if (Q !== null) {
            var Z = bg(Q, v);
            if (Z !== Lt && Z !== f.retryLane) {
              f.retryLane = Z;
              var He = cn;
              Za(e, Z), gr(Q, e, Z, He);
            }
          }
          a1();
          var nt = xS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return py(e, t, v, nt);
        } else if (rC(o)) {
          t.flags |= ct, t.child = e.child;
          var Ke = ZD.bind(null, e);
          return L_(o, Ke), null;
        } else {
          gk(t, o, f.treeContext);
          var zt = i.children, Dt = US(t, zt);
          return Dt.flags |= Va, Dt;
        }
      }
    }
    function Ub(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), b0(e.return, t, a);
    }
    function kO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === G) {
          var o = i.memoizedState;
          o !== null && Ub(i, a, e);
        } else if (i.tag === be)
          Ub(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function OO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Wm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function DO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !DS[e])
        if (DS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function MO(e, t) {
      e !== void 0 && !dy[e] && (e !== "collapsed" && e !== "hidden" ? (dy[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (dy[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Pb(e, t) {
      {
        var a = Mt(e), i = !a && typeof ii(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function NO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Mt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Pb(e[a], a))
              return;
        } else {
          var i = ii(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var f = o.next(), v = 0; !f.done; f = o.next()) {
                if (!Pb(f.value, v))
                  return;
                v++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function jS(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function jb(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, v = i.children;
      DO(o), MO(f, o), NO(v, o), ka(e, t, v, a);
      var g = su.current, C = G0(g, av);
      if (C)
        g = q0(g, av), t.flags |= ct;
      else {
        var w = e !== null && (e.flags & ct) !== et;
        w && kO(t, t.child, a), g = Zf(g);
      }
      if (ns(t, g), (t.mode & kt) === at)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var _ = OO(t.child), P;
            _ === null ? (P = t.child, t.child = null) : (P = _.sibling, _.sibling = null), jS(
              t,
              !1,
              // isBackwards
              P,
              _,
              f
            );
            break;
          }
          case "backwards": {
            var z = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var Q = Y.alternate;
              if (Q !== null && Wm(Q) === null) {
                t.child = Y;
                break;
              }
              var Z = Y.sibling;
              Y.sibling = z, z = Y, Y = Z;
            }
            jS(
              t,
              !0,
              // isBackwards
              z,
              null,
              // last
              f
            );
            break;
          }
          case "together": {
            jS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function LO(e, t, a) {
      Y0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Kf(t, null, i, a) : ka(e, t, i, a), t.child;
    }
    var Fb = !1;
    function AO(e, t, a) {
      var i = t.type, o = i._context, f = t.pendingProps, v = t.memoizedProps, g = f.value;
      {
        "value" in f || Fb || (Fb = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var C = t.type.propTypes;
        C && iu(C, f, "prop", "Context.Provider");
      }
      if (RC(t, o, g), v !== null) {
        var w = v.value;
        if (Ye(w, g)) {
          if (v.children === f.children && !bm())
            return Kl(e, t, a);
        } else
          kk(t, o, a);
      }
      var _ = f.children;
      return ka(e, t, _, a), t.child;
    }
    var Hb = !1;
    function zO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Hb || (Hb = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, f = o.children;
      typeof f != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), qf(t, a);
      var v = ir(i);
      Bu(t);
      var g;
      return dv.current = t, ea(!0), g = f(v), ea(!1), Tl(), t.flags |= Uu, ka(e, t, g, a), t.child;
    }
    function vv() {
      fu = !0;
    }
    function vy(e, t) {
      (t.mode & kt) === at && e !== null && (e.alternate = null, t.alternate = null, t.flags |= vn);
    }
    function Kl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Cb(), Rv(t.lanes), sa(a, t.childLanes) ? (Hk(e, t), t.child) : null;
    }
    function UO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var f = i.deletions;
        return f === null ? (i.deletions = [e], i.flags |= Qt) : f.push(e), a.flags |= vn, a;
      }
    }
    function FS(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function PO(e, t, a) {
      switch (t.tag) {
        case A:
          Nb(t), t.stateNode, Qf();
          break;
        case K:
          YC(t);
          break;
        case D: {
          var i = t.type;
          el(i) && Tm(t);
          break;
        }
        case B:
          Y0(t, t.stateNode.containerInfo);
          break;
        case oe: {
          var o = t.memoizedProps.value, f = t.type._context;
          RC(t, f, o);
          break;
        }
        case Se:
          {
            var v = sa(a, t.childLanes);
            v && (t.flags |= Ct);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case G: {
          var C = t.memoizedState;
          if (C !== null) {
            if (C.dehydrated !== null)
              return ns(t, Zf(su.current)), t.flags |= ct, null;
            var w = t.child, _ = w.childLanes;
            if (sa(a, _))
              return Ab(e, t, a);
            ns(t, Zf(su.current));
            var P = Kl(e, t, a);
            return P !== null ? P.sibling : null;
          } else
            ns(t, Zf(su.current));
          break;
        }
        case be: {
          var z = (e.flags & ct) !== et, Y = sa(a, t.childLanes);
          if (z) {
            if (Y)
              return jb(e, t, a);
            t.flags |= ct;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), ns(t, su.current), Y)
            break;
          return null;
        }
        case ge:
        case Ve:
          return t.lanes = ee, Ob(e, t, a);
      }
      return Kl(e, t, a);
    }
    function $b(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return UO(e, t, h1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || bm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fu = !0;
        else {
          var f = FS(e, a);
          if (!f && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ct) === et)
            return fu = !1, PO(e, t, a);
          (e.flags & Ls) !== et ? fu = !0 : fu = !1;
        }
      } else if (fu = !1, Fr() && sk(t)) {
        var v = t.index, g = ck();
        vC(t, g, v);
      }
      switch (t.lanes = ee, t.tag) {
        case j:
          return gO(e, t, t.type, a);
        case gt: {
          var C = t.elementType;
          return mO(e, t, C, a);
        }
        case k: {
          var w = t.type, _ = t.pendingProps, P = t.elementType === w ? _ : ou(w, _);
          return MS(e, t, w, P, a);
        }
        case D: {
          var z = t.type, Y = t.pendingProps, Q = t.elementType === z ? Y : ou(z, Y);
          return Mb(e, t, z, Q, a);
        }
        case A:
          return pO(e, t, a);
        case K:
          return vO(e, t, a);
        case te:
          return hO(e, t);
        case G:
          return Ab(e, t, a);
        case B:
          return LO(e, t, a);
        case se: {
          var Z = t.type, He = t.pendingProps, nt = t.elementType === Z ? He : ou(Z, He);
          return Rb(e, t, Z, nt, a);
        }
        case fe:
          return cO(e, t, a);
        case ye:
          return fO(e, t, a);
        case Se:
          return dO(e, t, a);
        case oe:
          return AO(e, t, a);
        case Ue:
          return zO(e, t, a);
        case Pe: {
          var Ke = t.type, zt = t.pendingProps, Dt = ou(Ke, zt);
          if (t.type !== t.elementType) {
            var $ = Ke.propTypes;
            $ && iu(
              $,
              Dt,
              // Resolved for outer only
              "prop",
              Ft(Ke)
            );
          }
          return Dt = ou(Ke.type, Dt), _b(e, t, Ke, Dt, a);
        }
        case je:
          return kb(e, t, t.type, t.pendingProps, a);
        case pt: {
          var J = t.type, V = t.pendingProps, de = t.elementType === J ? V : ou(J, V);
          return yO(e, t, J, de, a);
        }
        case be:
          return jb(e, t, a);
        case vt:
          break;
        case ge:
          return Ob(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ad(e) {
      e.flags |= Ct;
    }
    function Vb(e) {
      e.flags |= na, e.flags |= qd;
    }
    var Bb, HS, Ib, Yb;
    Bb = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === K || o.tag === te)
          u_(e, o.stateNode);
        else if (o.tag !== B) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, HS = function(e, t) {
    }, Ib = function(e, t, a, i, o) {
      var f = e.memoizedProps;
      if (f !== i) {
        var v = t.stateNode, g = W0(), C = o_(v, a, f, i, o, g);
        t.updateQueue = C, C && ad(t);
      }
    }, Yb = function(e, t, a, i) {
      a !== i && ad(t);
    };
    function hv(e, t) {
      if (!Fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, f = null; o !== null; )
              o.alternate !== null && (f = o), o = o.sibling;
            f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
            break;
          }
        }
    }
    function $r(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ee, i = et;
      if (t) {
        if ((e.mode & ut) !== at) {
          for (var C = e.selfBaseDuration, w = e.child; w !== null; )
            a = bt(a, bt(w.lanes, w.childLanes)), i |= w.subtreeFlags & or, i |= w.flags & or, C += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = C;
        } else
          for (var _ = e.child; _ !== null; )
            a = bt(a, bt(_.lanes, _.childLanes)), i |= _.subtreeFlags & or, i |= _.flags & or, _.return = e, _ = _.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ut) !== at) {
          for (var o = e.actualDuration, f = e.selfBaseDuration, v = e.child; v !== null; )
            a = bt(a, bt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, o += v.actualDuration, f += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = o, e.treeBaseDuration = f;
        } else
          for (var g = e.child; g !== null; )
            a = bt(a, bt(g.lanes, g.childLanes)), i |= g.subtreeFlags, i |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function jO(e, t, a) {
      if (xk() && (t.mode & kt) !== at && (t.flags & ct) === et)
        return CC(t), Qf(), t.flags |= Mn | ba | er, !1;
      var i = Om(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ck(t), $r(t), (t.mode & ut) !== at) {
            var o = a !== null;
            if (o) {
              var f = t.child;
              f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Qf(), (t.flags & ct) === et && (t.memoizedState = null), t.flags |= Ct, $r(t), (t.mode & ut) !== at) {
            var v = a !== null;
            if (v) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return bC(), !0;
    }
    function Wb(e, t, a) {
      var i = t.pendingProps;
      switch (d0(t), t.tag) {
        case j:
        case gt:
        case je:
        case k:
        case se:
        case fe:
        case ye:
        case Se:
        case Ue:
        case Pe:
          return $r(t), null;
        case D: {
          var o = t.type;
          return el(o) && xm(t), $r(t), null;
        }
        case A: {
          var f = t.stateNode;
          if (Xf(t), o0(t), X0(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var v = Om(t);
            if (v)
              ad(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mn) !== et) && (t.flags |= $a, bC());
            }
          }
          return HS(e, t), $r(t), null;
        }
        case K: {
          Q0(t);
          var C = IC(), w = t.type;
          if (e !== null && t.stateNode != null)
            Ib(e, t, w, i, C), e.ref !== t.ref && Vb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return $r(t), null;
            }
            var _ = W0(), P = Om(t);
            if (P)
              Sk(t, C, _) && ad(t);
            else {
              var z = i_(w, i, C, _, t);
              Bb(z, t, !1, !1), t.stateNode = z, l_(z, w, i, C) && ad(t);
            }
            t.ref !== null && Vb(t);
          }
          return $r(t), null;
        }
        case te: {
          var Y = i;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            Yb(e, t, Q, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = IC(), He = W0(), nt = Om(t);
            nt ? Ek(t) && ad(t) : t.stateNode = s_(Y, Z, He, t);
          }
          return $r(t), null;
        }
        case G: {
          Jf(t);
          var Ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = jO(e, t, Ke);
            if (!zt)
              return t.flags & er ? t : null;
          }
          if ((t.flags & ct) !== et)
            return t.lanes = a, (t.mode & ut) !== at && bS(t), t;
          var Dt = Ke !== null, $ = e !== null && e.memoizedState !== null;
          if (Dt !== $ && Dt) {
            var J = t.child;
            if (J.flags |= Pu, (t.mode & kt) !== at) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !F);
              V || G0(su.current, QC) ? FD() : a1();
            }
          }
          var de = t.updateQueue;
          if (de !== null && (t.flags |= Ct), $r(t), (t.mode & ut) !== at && Dt) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case B:
          return Xf(t), HS(e, t), e === null && nk(t.stateNode.containerInfo), $r(t), null;
        case oe:
          var Ne = t.type._context;
          return C0(Ne, t), $r(t), null;
        case pt: {
          var st = t.type;
          return el(st) && xm(t), $r(t), null;
        }
        case be: {
          Jf(t);
          var yt = t.memoizedState;
          if (yt === null)
            return $r(t), null;
          var rn = (t.flags & ct) !== et, Bt = yt.rendering;
          if (Bt === null)
            if (rn)
              hv(yt, !1);
            else {
              var Kn = $D() && (e === null || (e.flags & ct) === et);
              if (!Kn)
                for (var It = t.child; It !== null; ) {
                  var Bn = Wm(It);
                  if (Bn !== null) {
                    rn = !0, t.flags |= ct, hv(yt, !1);
                    var pa = Bn.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= Ct), t.subtreeFlags = et, $k(t, a), ns(t, q0(su.current, av)), t.child;
                  }
                  It = It.sibling;
                }
              yt.tail !== null && wn() > px() && (t.flags |= ct, rn = !0, hv(yt, !1), t.lanes = op);
            }
          else {
            if (!rn) {
              var Wr = Wm(Bt);
              if (Wr !== null) {
                t.flags |= ct, rn = !0;
                var mi = Wr.updateQueue;
                if (mi !== null && (t.updateQueue = mi, t.flags |= Ct), hv(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Bt.alternate && !Fr())
                  return $r(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                wn() * 2 - yt.renderingStartTime > px() && a !== oa && (t.flags |= ct, rn = !0, hv(yt, !1), t.lanes = op);
            }
            if (yt.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var Ma = yt.last;
              Ma !== null ? Ma.sibling = Bt : t.child = Bt, yt.last = Bt;
            }
          }
          if (yt.tail !== null) {
            var Na = yt.tail;
            yt.rendering = Na, yt.tail = Na.sibling, yt.renderingStartTime = wn(), Na.sibling = null;
            var va = su.current;
            return rn ? va = q0(va, av) : va = Zf(va), ns(t, va), Na;
          }
          return $r(t), null;
        }
        case vt:
          break;
        case ge:
        case Ve: {
          r1(t);
          var to = t.memoizedState, dd = to !== null;
          if (e !== null) {
            var Mv = e.memoizedState, ol = Mv !== null;
            ol !== dd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !R && (t.flags |= Pu);
          }
          return !dd || (t.mode & kt) === at ? $r(t) : sa(ll, oa) && ($r(t), t.subtreeFlags & (vn | Ct) && (t.flags |= Pu)), null;
        }
        case xt:
          return null;
        case Xe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function FO(e, t, a) {
      switch (d0(t), t.tag) {
        case D: {
          var i = t.type;
          el(i) && xm(t);
          var o = t.flags;
          return o & er ? (t.flags = o & ~er | ct, (t.mode & ut) !== at && bS(t), t) : null;
        }
        case A: {
          t.stateNode, Xf(t), o0(t), X0();
          var f = t.flags;
          return (f & er) !== et && (f & ct) === et ? (t.flags = f & ~er | ct, t) : null;
        }
        case K:
          return Q0(t), null;
        case G: {
          Jf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Qf();
          }
          var g = t.flags;
          return g & er ? (t.flags = g & ~er | ct, (t.mode & ut) !== at && bS(t), t) : null;
        }
        case be:
          return Jf(t), null;
        case B:
          return Xf(t), null;
        case oe:
          var C = t.type._context;
          return C0(C, t), null;
        case ge:
        case Ve:
          return r1(t), null;
        case xt:
          return null;
        default:
          return null;
      }
    }
    function Qb(e, t, a) {
      switch (d0(t), t.tag) {
        case D: {
          var i = t.type.childContextTypes;
          i != null && xm(t);
          break;
        }
        case A: {
          t.stateNode, Xf(t), o0(t), X0();
          break;
        }
        case K: {
          Q0(t);
          break;
        }
        case B:
          Xf(t);
          break;
        case G:
          Jf(t);
          break;
        case be:
          Jf(t);
          break;
        case oe:
          var o = t.type._context;
          C0(o, t);
          break;
        case ge:
        case Ve:
          r1(t);
          break;
      }
    }
    var Gb = null;
    Gb = /* @__PURE__ */ new Set();
    var hy = !1, Vr = !1, HO = typeof WeakSet == "function" ? WeakSet : Set, We = null, id = null, ud = null;
    function $O(e) {
      bl(null, function() {
        throw e;
      }), Qd();
    }
    var VO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ut)
        try {
          il(), t.componentWillUnmount();
        } finally {
          al(e);
        }
      else
        t.componentWillUnmount();
    };
    function qb(e, t) {
      try {
        is(dr, e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function $S(e, t, a) {
      try {
        VO(e, a);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function BO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        gn(e, t, i);
      }
    }
    function Kb(e, t) {
      try {
        Zb(e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function ld(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Te && De && e.mode & ut)
              try {
                il(), i = a(null);
              } finally {
                al(e);
              }
            else
              i = a(null);
          } catch (o) {
            gn(e, t, o);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          a.current = null;
    }
    function my(e, t, a) {
      try {
        a();
      } catch (i) {
        gn(e, t, i);
      }
    }
    var Xb = !1;
    function IO(e, t) {
      r_(e.containerInfo), We = t, YO();
      var a = Xb;
      return Xb = !1, a;
    }
    function YO() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        (e.subtreeFlags & wo) !== et && t !== null ? (t.return = e, We = t) : WO();
      }
    }
    function WO() {
      for (; We !== null; ) {
        var e = We;
        Xt(e);
        try {
          QO(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        Dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function QO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & $a) !== et) {
        switch (Xt(e), e.tag) {
          case k:
          case se:
          case je:
            break;
          case D: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, f = e.stateNode;
              e.type === e.elementType && !dc && (f.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(e) || "instance"), f.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(e) || "instance"));
              var v = f.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ou(e.type, i), o);
              {
                var g = Gb;
                v === void 0 && !g.has(e.type) && (g.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ht(e)));
              }
              f.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case A: {
            {
              var C = e.stateNode;
              k_(C.containerInfo);
            }
            break;
          }
          case K:
          case te:
          case B:
          case pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Dn();
      }
    }
    function du(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var f = o.next, v = f;
        do {
          if ((v.tag & e) === e) {
            var g = v.destroy;
            v.destroy = void 0, g !== void 0 && ((e & Hr) !== Ja ? qc(t) : (e & dr) !== Ja && Kc(t), (e & tl) !== Ja && kv(!0), my(t, a, g), (e & tl) !== Ja && kv(!1), (e & Hr) !== Ja ? kh() : (e & dr) !== Ja && Ro());
          }
          v = v.next;
        } while (v !== f);
      }
    }
    function is(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, f = o;
        do {
          if ((f.tag & e) === e) {
            (e & Hr) !== Ja ? _h(t) : (e & dr) !== Ja && Oh(t);
            var v = f.create;
            (e & tl) !== Ja && kv(!0), f.destroy = v(), (e & tl) !== Ja && kv(!1), (e & Hr) !== Ja ? ip() : (e & dr) !== Ja && Dh();
            {
              var g = f.destroy;
              if (g !== void 0 && typeof g != "function") {
                var C = void 0;
                (f.tag & dr) !== et ? C = "useLayoutEffect" : (f.tag & tl) !== et ? C = "useInsertionEffect" : C = "useEffect";
                var w = void 0;
                g === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? w = `

It looks like you wrote ` + C + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + C + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + g, y("%s must not return anything besides a function, which is used for clean-up.%s", C, w);
              }
            }
          }
          f = f.next;
        } while (f !== o);
      }
    }
    function GO(e, t) {
      if ((t.flags & Ct) !== et)
        switch (t.tag) {
          case Se: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, f = i.onPostCommit, v = Sb(), g = t.alternate === null ? "mount" : "update";
            gb() && (g = "nested-update"), typeof f == "function" && f(o, g, a, v);
            var C = t.return;
            e:
              for (; C !== null; ) {
                switch (C.tag) {
                  case A:
                    var w = C.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                  case Se:
                    var _ = C.stateNode;
                    _.passiveEffectDuration += a;
                    break e;
                }
                C = C.return;
              }
            break;
          }
        }
    }
    function qO(e, t, a, i) {
      if ((a.flags & br) !== et)
        switch (a.tag) {
          case k:
          case se:
          case je: {
            if (!Vr)
              if (a.mode & ut)
                try {
                  il(), is(dr | fr, a);
                } finally {
                  al(a);
                }
              else
                is(dr | fr, a);
            break;
          }
          case D: {
            var o = a.stateNode;
            if (a.flags & Ct && !Vr)
              if (t === null)
                if (a.type === a.elementType && !dc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & ut)
                  try {
                    il(), o.componentDidMount();
                  } finally {
                    al(a);
                  }
                else
                  o.componentDidMount();
              else {
                var f = a.elementType === a.type ? t.memoizedProps : ou(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !dc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & ut)
                  try {
                    il(), o.componentDidUpdate(f, v, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    al(a);
                  }
                else
                  o.componentDidUpdate(f, v, o.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !dc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), NC(a, g, o));
            break;
          }
          case A: {
            var C = a.updateQueue;
            if (C !== null) {
              var w = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case K:
                    w = a.child.stateNode;
                    break;
                  case D:
                    w = a.child.stateNode;
                    break;
                }
              NC(a, C, w);
            }
            break;
          }
          case K: {
            var _ = a.stateNode;
            if (t === null && a.flags & Ct) {
              var P = a.type, z = a.memoizedProps;
              v_(_, P, z);
            }
            break;
          }
          case te:
            break;
          case B:
            break;
          case Se: {
            {
              var Y = a.memoizedProps, Q = Y.onCommit, Z = Y.onRender, He = a.stateNode.effectDuration, nt = Sb(), Ke = t === null ? "mount" : "update";
              gb() && (Ke = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, Ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, nt);
              {
                typeof Q == "function" && Q(a.memoizedProps.id, Ke, He, nt), WD(a);
                var zt = a.return;
                e:
                  for (; zt !== null; ) {
                    switch (zt.tag) {
                      case A:
                        var Dt = zt.stateNode;
                        Dt.effectDuration += He;
                        break e;
                      case Se:
                        var $ = zt.stateNode;
                        $.effectDuration += He;
                        break e;
                    }
                    zt = zt.return;
                  }
              }
            }
            break;
          }
          case G: {
            rD(e, a);
            break;
          }
          case be:
          case pt:
          case vt:
          case ge:
          case Ve:
          case Xe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & na && Zb(a);
    }
    function KO(e) {
      switch (e.tag) {
        case k:
        case se:
        case je: {
          if (e.mode & ut)
            try {
              il(), qb(e, e.return);
            } finally {
              al(e);
            }
          else
            qb(e, e.return);
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && BO(e, e.return, t), Kb(e, e.return);
          break;
        }
        case K: {
          Kb(e, e.return);
          break;
        }
      }
    }
    function XO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === K) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? T_(o) : R_(i.stateNode, i.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
          }
        } else if (i.tag === te) {
          if (a === null)
            try {
              var f = i.stateNode;
              t ? w_(f) : __(f, i.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
        } else if (!((i.tag === ge || i.tag === Ve) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Zb(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case K:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & ut)
            try {
              il(), o = t(i);
            } finally {
              al(e);
            }
          else
            o = t(i);
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ht(e)), t.current = i;
      }
    }
    function ZO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Jb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Jb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var a = e.stateNode;
          a !== null && ik(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function JO(e) {
      for (var t = e.return; t !== null; ) {
        if (ex(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ex(e) {
      return e.tag === K || e.tag === A || e.tag === B;
    }
    function tx(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || ex(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== te && t.tag !== ot; ) {
            if (t.flags & vn || t.child === null || t.tag === B)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & vn))
            return t.stateNode;
        }
    }
    function eD(e) {
      var t = JO(e);
      switch (t.tag) {
        case K: {
          var a = t.stateNode;
          t.flags & Zt && (nC(a), t.flags &= ~Zt);
          var i = tx(e);
          BS(e, i, a);
          break;
        }
        case A:
        case B: {
          var o = t.stateNode.containerInfo, f = tx(e);
          VS(e, f, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function VS(e, t, a) {
      var i = e.tag, o = i === K || i === te;
      if (o) {
        var f = e.stateNode;
        t ? E_(a, f, t) : g_(a, f);
      } else if (i !== B) {
        var v = e.child;
        if (v !== null) {
          VS(v, t, a);
          for (var g = v.sibling; g !== null; )
            VS(g, t, a), g = g.sibling;
        }
      }
    }
    function BS(e, t, a) {
      var i = e.tag, o = i === K || i === te;
      if (o) {
        var f = e.stateNode;
        t ? S_(a, f, t) : y_(a, f);
      } else if (i !== B) {
        var v = e.child;
        if (v !== null) {
          BS(v, t, a);
          for (var g = v.sibling; g !== null; )
            BS(g, t, a), g = g.sibling;
        }
      }
    }
    var Br = null, pu = !1;
    function tD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case K: {
                Br = i.stateNode, pu = !1;
                break e;
              }
              case A: {
                Br = i.stateNode.containerInfo, pu = !0;
                break e;
              }
              case B: {
                Br = i.stateNode.containerInfo, pu = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nx(e, t, a), Br = null, pu = !1;
      }
      ZO(a);
    }
    function us(e, t, a) {
      for (var i = a.child; i !== null; )
        nx(e, t, i), i = i.sibling;
    }
    function nx(e, t, a) {
      switch (rp(a), a.tag) {
        case K:
          Vr || ld(a, t);
        case te: {
          {
            var i = Br, o = pu;
            Br = null, us(e, t, a), Br = i, pu = o, Br !== null && (pu ? b_(Br, a.stateNode) : C_(Br, a.stateNode));
          }
          return;
        }
        case ot: {
          Br !== null && (pu ? x_(Br, a.stateNode) : e0(Br, a.stateNode));
          return;
        }
        case B: {
          {
            var f = Br, v = pu;
            Br = a.stateNode.containerInfo, pu = !0, us(e, t, a), Br = f, pu = v;
          }
          return;
        }
        case k:
        case se:
        case Pe:
        case je: {
          if (!Vr) {
            var g = a.updateQueue;
            if (g !== null) {
              var C = g.lastEffect;
              if (C !== null) {
                var w = C.next, _ = w;
                do {
                  var P = _, z = P.destroy, Y = P.tag;
                  z !== void 0 && ((Y & tl) !== Ja ? my(a, t, z) : (Y & dr) !== Ja && (Kc(a), a.mode & ut ? (il(), my(a, t, z), al(a)) : my(a, t, z), Ro())), _ = _.next;
                } while (_ !== w);
              }
            }
          }
          us(e, t, a);
          return;
        }
        case D: {
          if (!Vr) {
            ld(a, t);
            var Q = a.stateNode;
            typeof Q.componentWillUnmount == "function" && $S(a, t, Q);
          }
          us(e, t, a);
          return;
        }
        case vt: {
          us(e, t, a);
          return;
        }
        case ge: {
          if (
            // TODO: Remove this dead flag
            a.mode & kt
          ) {
            var Z = Vr;
            Vr = Z || a.memoizedState !== null, us(e, t, a), Vr = Z;
          } else
            us(e, t, a);
          break;
        }
        default: {
          us(e, t, a);
          return;
        }
      }
    }
    function nD(e) {
      e.memoizedState;
    }
    function rD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var f = o.dehydrated;
            f !== null && V_(f);
          }
        }
      }
    }
    function rx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new HO()), t.forEach(function(i) {
          var o = JD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), sr)
              if (id !== null && ud !== null)
                _v(ud, id);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function aD(e, t, a) {
      id = a, ud = e, Xt(t), ax(t, e), Xt(t), id = null, ud = null;
    }
    function vu(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var f = i[o];
          try {
            tD(e, t, f);
          } catch (C) {
            gn(f, t, C);
          }
        }
      var v = _c();
      if (t.subtreeFlags & ia)
        for (var g = t.child; g !== null; )
          Xt(g), ax(g, e), g = g.sibling;
      Xt(v);
    }
    function ax(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case k:
        case se:
        case Pe:
        case je: {
          if (vu(t, e), ul(e), o & Ct) {
            try {
              du(tl | fr, e, e.return), is(tl | fr, e);
            } catch (st) {
              gn(e, e.return, st);
            }
            if (e.mode & ut) {
              try {
                il(), du(dr | fr, e, e.return);
              } catch (st) {
                gn(e, e.return, st);
              }
              al(e);
            } else
              try {
                du(dr | fr, e, e.return);
              } catch (st) {
                gn(e, e.return, st);
              }
          }
          return;
        }
        case D: {
          vu(t, e), ul(e), o & na && i !== null && ld(i, i.return);
          return;
        }
        case K: {
          vu(t, e), ul(e), o & na && i !== null && ld(i, i.return);
          {
            if (e.flags & Zt) {
              var f = e.stateNode;
              try {
                nC(f);
              } catch (st) {
                gn(e, e.return, st);
              }
            }
            if (o & Ct) {
              var v = e.stateNode;
              if (v != null) {
                var g = e.memoizedProps, C = i !== null ? i.memoizedProps : g, w = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    h_(v, _, w, C, g, e);
                  } catch (st) {
                    gn(e, e.return, st);
                  }
              }
            }
          }
          return;
        }
        case te: {
          if (vu(t, e), ul(e), o & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var P = e.stateNode, z = e.memoizedProps, Y = i !== null ? i.memoizedProps : z;
            try {
              m_(P, Y, z);
            } catch (st) {
              gn(e, e.return, st);
            }
          }
          return;
        }
        case A: {
          if (vu(t, e), ul(e), o & Ct && i !== null) {
            var Q = i.memoizedState;
            if (Q.isDehydrated)
              try {
                $_(t.containerInfo);
              } catch (st) {
                gn(e, e.return, st);
              }
          }
          return;
        }
        case B: {
          vu(t, e), ul(e);
          return;
        }
        case G: {
          vu(t, e), ul(e);
          var Z = e.child;
          if (Z.flags & Pu) {
            var He = Z.stateNode, nt = Z.memoizedState, Ke = nt !== null;
            if (He.isHidden = Ke, Ke) {
              var zt = Z.alternate !== null && Z.alternate.memoizedState !== null;
              zt || jD();
            }
          }
          if (o & Ct) {
            try {
              nD(e);
            } catch (st) {
              gn(e, e.return, st);
            }
            rx(e);
          }
          return;
        }
        case ge: {
          var Dt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & kt
          ) {
            var $ = Vr;
            Vr = $ || Dt, vu(t, e), Vr = $;
          } else
            vu(t, e);
          if (ul(e), o & Pu) {
            var J = e.stateNode, V = e.memoizedState, de = V !== null, $e = e;
            if (J.isHidden = de, de && !Dt && ($e.mode & kt) !== at) {
              We = $e;
              for (var Ne = $e.child; Ne !== null; )
                We = Ne, uD(Ne), Ne = Ne.sibling;
            }
            XO($e, de);
          }
          return;
        }
        case be: {
          vu(t, e), ul(e), o & Ct && rx(e);
          return;
        }
        case vt:
          return;
        default: {
          vu(t, e), ul(e);
          return;
        }
      }
    }
    function ul(e) {
      var t = e.flags;
      if (t & vn) {
        try {
          eD(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        e.flags &= ~vn;
      }
      t & Va && (e.flags &= ~Va);
    }
    function iD(e, t, a) {
      id = a, ud = t, We = e, ix(e, t, a), id = null, ud = null;
    }
    function ix(e, t, a) {
      for (var i = (e.mode & kt) !== at; We !== null; ) {
        var o = We, f = o.child;
        if (o.tag === ge && i) {
          var v = o.memoizedState !== null, g = v || hy;
          if (g) {
            IS(e, t, a);
            continue;
          } else {
            var C = o.alternate, w = C !== null && C.memoizedState !== null, _ = w || Vr, P = hy, z = Vr;
            hy = g, Vr = _, Vr && !z && (We = o, lD(o));
            for (var Y = f; Y !== null; )
              We = Y, ix(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            We = o, hy = P, Vr = z, IS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & br) !== et && f !== null ? (f.return = o, We = f) : IS(e, t, a);
      }
    }
    function IS(e, t, a) {
      for (; We !== null; ) {
        var i = We;
        if ((i.flags & br) !== et) {
          var o = i.alternate;
          Xt(i);
          try {
            qO(t, o, i, a);
          } catch (v) {
            gn(i, i.return, v);
          }
          Dn();
        }
        if (i === e) {
          We = null;
          return;
        }
        var f = i.sibling;
        if (f !== null) {
          f.return = i.return, We = f;
          return;
        }
        We = i.return;
      }
    }
    function uD(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        switch (t.tag) {
          case k:
          case se:
          case Pe:
          case je: {
            if (t.mode & ut)
              try {
                il(), du(dr, t, t.return);
              } finally {
                al(t);
              }
            else
              du(dr, t, t.return);
            break;
          }
          case D: {
            ld(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && $S(t, t.return, i);
            break;
          }
          case K: {
            ld(t, t.return);
            break;
          }
          case ge: {
            var o = t.memoizedState !== null;
            if (o) {
              ux(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, We = a) : ux(e);
      }
    }
    function ux(e) {
      for (; We !== null; ) {
        var t = We;
        if (t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function lD(e) {
      for (; We !== null; ) {
        var t = We, a = t.child;
        if (t.tag === ge) {
          var i = t.memoizedState !== null;
          if (i) {
            lx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, We = a) : lx(e);
      }
    }
    function lx(e) {
      for (; We !== null; ) {
        var t = We;
        Xt(t);
        try {
          KO(t);
        } catch (i) {
          gn(t, t.return, i);
        }
        if (Dn(), t === e) {
          We = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, We = a;
          return;
        }
        We = t.return;
      }
    }
    function oD(e, t, a, i) {
      We = t, sD(t, e, a, i);
    }
    function sD(e, t, a, i) {
      for (; We !== null; ) {
        var o = We, f = o.child;
        (o.subtreeFlags & Ba) !== et && f !== null ? (f.return = o, We = f) : cD(e, t, a, i);
      }
    }
    function cD(e, t, a, i) {
      for (; We !== null; ) {
        var o = We;
        if ((o.flags & Sn) !== et) {
          Xt(o);
          try {
            fD(t, o, a, i);
          } catch (v) {
            gn(o, o.return, v);
          }
          Dn();
        }
        if (o === e) {
          We = null;
          return;
        }
        var f = o.sibling;
        if (f !== null) {
          f.return = o.return, We = f;
          return;
        }
        We = o.return;
      }
    }
    function fD(e, t, a, i) {
      switch (t.tag) {
        case k:
        case se:
        case je: {
          if (t.mode & ut) {
            CS();
            try {
              is(Hr | fr, t);
            } finally {
              ES(t);
            }
          } else
            is(Hr | fr, t);
          break;
        }
      }
    }
    function dD(e) {
      We = e, pD();
    }
    function pD() {
      for (; We !== null; ) {
        var e = We, t = e.child;
        if ((We.flags & Qt) !== et) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              We = o, mD(o, e);
            }
            {
              var f = e.alternate;
              if (f !== null) {
                var v = f.child;
                if (v !== null) {
                  f.child = null;
                  do {
                    var g = v.sibling;
                    v.sibling = null, v = g;
                  } while (v !== null);
                }
              }
            }
            We = e;
          }
        }
        (e.subtreeFlags & Ba) !== et && t !== null ? (t.return = e, We = t) : vD();
      }
    }
    function vD() {
      for (; We !== null; ) {
        var e = We;
        (e.flags & Sn) !== et && (Xt(e), hD(e), Dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, We = t;
          return;
        }
        We = e.return;
      }
    }
    function hD(e) {
      switch (e.tag) {
        case k:
        case se:
        case je: {
          e.mode & ut ? (CS(), du(Hr | fr, e, e.return), ES(e)) : du(Hr | fr, e, e.return);
          break;
        }
      }
    }
    function mD(e, t) {
      for (; We !== null; ) {
        var a = We;
        Xt(a), gD(a, t), Dn();
        var i = a.child;
        i !== null ? (i.return = a, We = i) : yD(e);
      }
    }
    function yD(e) {
      for (; We !== null; ) {
        var t = We, a = t.sibling, i = t.return;
        if (Jb(t), t === e) {
          We = null;
          return;
        }
        if (a !== null) {
          a.return = i, We = a;
          return;
        }
        We = i;
      }
    }
    function gD(e, t) {
      switch (e.tag) {
        case k:
        case se:
        case je: {
          e.mode & ut ? (CS(), du(Hr, e, t), ES(e)) : du(Hr, e, t);
          break;
        }
      }
    }
    function SD(e) {
      switch (e.tag) {
        case k:
        case se:
        case je: {
          try {
            is(dr | fr, e);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
      }
    }
    function ED(e) {
      switch (e.tag) {
        case k:
        case se:
        case je: {
          try {
            is(Hr | fr, e);
          } catch (t) {
            gn(e, e.return, t);
          }
          break;
        }
      }
    }
    function CD(e) {
      switch (e.tag) {
        case k:
        case se:
        case je: {
          try {
            du(dr | fr, e, e.return);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && $S(e, e.return, t);
          break;
        }
      }
    }
    function bD(e) {
      switch (e.tag) {
        case k:
        case se:
        case je:
          try {
            du(Hr | fr, e, e.return);
          } catch (t) {
            gn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var mv = Symbol.for;
      mv("selector.component"), mv("selector.has_pseudo_class"), mv("selector.role"), mv("selector.test_id"), mv("selector.text");
    }
    var xD = [];
    function TD() {
      xD.forEach(function(e) {
        return e();
      });
    }
    var wD = d.ReactCurrentActQueue;
    function RD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ox() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && wD.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _D = Math.ceil, YS = d.ReactCurrentDispatcher, WS = d.ReactCurrentOwner, Ir = d.ReactCurrentBatchConfig, hu = d.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), sx = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Xl = 0, yv = 1, pc = 2, yy = 3, gv = 4, cx = 5, QS = 6, At = hr, Oa = null, jn = null, mr = ee, ll = ee, GS = Ko(ee), yr = Xl, Sv = null, gy = ee, Ev = ee, Sy = ee, Cv = null, ei = null, qS = 0, fx = 500, dx = 1 / 0, kD = 500, Zl = null;
    function bv() {
      dx = wn() + kD;
    }
    function px() {
      return dx;
    }
    var Ey = !1, KS = null, od = null, vc = !1, ls = null, xv = ee, XS = [], ZS = null, OD = 50, Tv = 0, JS = null, e1 = !1, Cy = !1, DD = 50, sd = 0, by = null, wv = cn, xy = ee, vx = !1;
    function Ty() {
      return Oa;
    }
    function Da() {
      return (At & (Yr | ji)) !== hr ? wn() : (wv !== cn || (wv = wn()), wv);
    }
    function os(e) {
      var t = e.mode;
      if ((t & kt) === at)
        return lt;
      if ((At & Yr) !== hr && mr !== ee)
        return Wn(mr);
      var a = Rk() !== wk;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return xy === Lt && (xy = fp()), xy;
      }
      var o = Qa();
      if (o !== Lt)
        return o;
      var f = c_();
      return f;
    }
    function MD(e) {
      var t = e.mode;
      return (t & kt) === at ? lt : Cg();
    }
    function gr(e, t, a, i) {
      tM(), vx && y("useInsertionEffect must not schedule updates."), e1 && (Cy = !0), Al(e, a, i), (At & Yr) !== ee && e === Oa ? aM(t) : (sr && mp(e, t, a), iM(t), e === Oa && ((At & Yr) === hr && (Ev = bt(Ev, a)), yr === gv && ss(e, mr)), ti(e, i), a === lt && At === hr && (t.mode & kt) === at && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hu.isBatchingLegacy && (bv(), pC()));
    }
    function ND(e, t, a) {
      var i = e.current;
      i.lanes = t, Al(e, t, a), ti(e, a);
    }
    function LD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Yr) !== hr
      );
    }
    function ti(e, t) {
      var a = e.callbackNode;
      gg(e, t);
      var i = Fs(e, e === Oa ? mr : ee);
      if (i === ee) {
        a !== null && Dx(a), e.callbackNode = null, e.callbackPriority = Lt;
        return;
      }
      var o = $n(i), f = e.callbackPriority;
      if (f === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hu.current !== null && a !== l1)) {
        a == null && f !== lt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Dx(a);
      var v;
      if (o === lt)
        e.tag === Xo ? (hu.isBatchingLegacy !== null && (hu.didScheduleLegacyUpdate = !0), ok(yx.bind(null, e))) : dC(yx.bind(null, e)), hu.current !== null ? hu.current.push(Zo) : d_(function() {
          (At & (Yr | ji)) === hr && Zo();
        }), v = null;
      else {
        var g;
        switch (Is(i)) {
          case xr:
            g = Wc;
            break;
          case cr:
            g = wa;
            break;
          case eu:
            g = ki;
            break;
          case Vs:
            g = Fu;
            break;
          default:
            g = ki;
            break;
        }
        v = o1(g, hx.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = v;
    }
    function hx(e, t) {
      if (tO(), wv = cn, xy = ee, (At & (Yr | ji)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = eo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Fs(e, e === Oa ? mr : ee);
      if (o === ee)
        return null;
      var f = !$s(e, o) && !Uh(e, o) && !t, v = f ? BD(e, o) : Ry(e, o);
      if (v !== Xl) {
        if (v === pc) {
          var g = sp(e);
          g !== ee && (o = g, v = t1(e, g));
        }
        if (v === yv) {
          var C = Sv;
          throw hc(e, ee), ss(e, o), ti(e, wn()), C;
        }
        if (v === QS)
          ss(e, o);
        else {
          var w = !$s(e, o), _ = e.current.alternate;
          if (w && !zD(_)) {
            if (v = Ry(e, o), v === pc) {
              var P = sp(e);
              P !== ee && (o = P, v = t1(e, P));
            }
            if (v === yv) {
              var z = Sv;
              throw hc(e, ee), ss(e, o), ti(e, wn()), z;
            }
          }
          e.finishedWork = _, e.finishedLanes = o, AD(e, v, o);
        }
      }
      return ti(e, wn()), e.callbackNode === a ? hx.bind(null, e) : null;
    }
    function t1(e, t) {
      var a = Cv;
      if (Gn(e)) {
        var i = hc(e, t);
        i.flags |= Mn, tk(e.containerInfo);
      }
      var o = Ry(e, t);
      if (o !== pc) {
        var f = ei;
        ei = a, f !== null && mx(f);
      }
      return o;
    }
    function mx(e) {
      ei === null ? ei = e : ei.push.apply(ei, e);
    }
    function AD(e, t, a) {
      switch (t) {
        case Xl:
        case yv:
          throw new Error("Root did not complete. This is a bug in React.");
        case pc: {
          mc(e, ei, Zl);
          break;
        }
        case yy: {
          if (ss(e, a), yf(a) && // do not delay if we're inside an act() scope
          !Mx()) {
            var i = qS + fx - wn();
            if (i > 10) {
              var o = Fs(e, ee);
              if (o !== ee)
                break;
              var f = e.suspendedLanes;
              if (!Ll(f, a)) {
                Da(), vp(e, f);
                break;
              }
              e.timeoutHandle = Zg(mc.bind(null, e, ei, Zl), i);
              break;
            }
          }
          mc(e, ei, Zl);
          break;
        }
        case gv: {
          if (ss(e, a), zh(a))
            break;
          if (!Mx()) {
            var v = Ah(e, a), g = v, C = wn() - g, w = eM(C) - C;
            if (w > 10) {
              e.timeoutHandle = Zg(mc.bind(null, e, ei, Zl), w);
              break;
            }
          }
          mc(e, ei, Zl);
          break;
        }
        case cx: {
          mc(e, ei, Zl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function zD(e) {
      for (var t = e; ; ) {
        if (t.flags & Ns) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var f = i[o], v = f.getSnapshot, g = f.value;
                try {
                  if (!Ye(v(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var C = t.child;
        if (t.subtreeFlags & Ns && C !== null) {
          C.return = t, t = C;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ss(e, t) {
      t = Lo(t, Sy), t = Lo(t, Ev), pp(e, t);
    }
    function yx(e) {
      if (nO(), (At & (Yr | ji)) !== hr)
        throw new Error("Should not already be working.");
      eo();
      var t = Fs(e, ee);
      if (!sa(t, lt))
        return ti(e, wn()), null;
      var a = Ry(e, t);
      if (e.tag !== Xo && a === pc) {
        var i = sp(e);
        i !== ee && (t = i, a = t1(e, i));
      }
      if (a === yv) {
        var o = Sv;
        throw hc(e, ee), ss(e, t), ti(e, wn()), o;
      }
      if (a === QS)
        throw new Error("Root did not complete. This is a bug in React.");
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, mc(e, ei, Zl), ti(e, wn()), null;
    }
    function UD(e, t) {
      t !== ee && (Ao(e, bt(t, lt)), ti(e, wn()), (At & (Yr | ji)) === hr && (bv(), Zo()));
    }
    function n1(e, t) {
      var a = At;
      At |= sx;
      try {
        return e(t);
      } finally {
        At = a, At === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hu.isBatchingLegacy && (bv(), pC());
      }
    }
    function PD(e, t, a, i, o) {
      var f = Qa(), v = Ir.transition;
      try {
        return Ir.transition = null, Qn(xr), e(t, a, i, o);
      } finally {
        Qn(f), Ir.transition = v, At === hr && bv();
      }
    }
    function Jl(e) {
      ls !== null && ls.tag === Xo && (At & (Yr | ji)) === hr && eo();
      var t = At;
      At |= sx;
      var a = Ir.transition, i = Qa();
      try {
        return Ir.transition = null, Qn(xr), e ? e() : void 0;
      } finally {
        Qn(i), Ir.transition = a, At = t, (At & (Yr | ji)) === hr && Zo();
      }
    }
    function gx() {
      return (At & (Yr | ji)) !== hr;
    }
    function wy(e, t) {
      fa(GS, ll, e), ll = bt(ll, t);
    }
    function r1(e) {
      ll = GS.current, ca(GS, e);
    }
    function hc(e, t) {
      e.finishedWork = null, e.finishedLanes = ee;
      var a = e.timeoutHandle;
      if (a !== Jg && (e.timeoutHandle = Jg, f_(a)), jn !== null)
        for (var i = jn.return; i !== null; ) {
          var o = i.alternate;
          Qb(o, i), i = i.return;
        }
      Oa = e;
      var f = yc(e.current, null);
      return jn = f, mr = ll = t, yr = Xl, Sv = null, gy = ee, Ev = ee, Sy = ee, Cv = null, ei = null, Dk(), lu.discardPendingWarnings(), f;
    }
    function Sx(e, t) {
      do {
        var a = jn;
        try {
          if (Lm(), qC(), Dn(), WS.current = null, a === null || a.return === null) {
            yr = yv, Sv = t, jn = null;
            return;
          }
          if (Te && a.mode & ut && fy(a, !0), Le)
            if (Tl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Mh(a, i, mr);
            } else
              Xc(a, t, mr);
          lO(e, a.return, a, t, mr), xx(a);
        } catch (o) {
          t = o, jn === a && a !== null ? (a = a.return, jn = a) : a = jn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ex() {
      var e = YS.current;
      return YS.current = uy, e === null ? uy : e;
    }
    function Cx(e) {
      YS.current = e;
    }
    function jD() {
      qS = wn();
    }
    function Rv(e) {
      gy = bt(e, gy);
    }
    function FD() {
      yr === Xl && (yr = yy);
    }
    function a1() {
      (yr === Xl || yr === yy || yr === pc) && (yr = gv), Oa !== null && (Hs(gy) || Hs(Ev)) && ss(Oa, mr);
    }
    function HD(e) {
      yr !== gv && (yr = pc), Cv === null ? Cv = [e] : Cv.push(e);
    }
    function $D() {
      return yr === Xl;
    }
    function Ry(e, t) {
      var a = At;
      At |= Yr;
      var i = Ex();
      if (Oa !== e || mr !== t) {
        if (sr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (_v(e, mr), o.clear()), Ef(e, t);
        }
        Zl = yp(), hc(e, t);
      }
      di(t);
      do
        try {
          VD();
          break;
        } catch (f) {
          Sx(e, f);
        }
      while (!0);
      if (Lm(), At = a, Cx(i), jn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ko(), Oa = null, mr = ee, yr;
    }
    function VD() {
      for (; jn !== null; )
        bx(jn);
    }
    function BD(e, t) {
      var a = At;
      At |= Yr;
      var i = Ex();
      if (Oa !== e || mr !== t) {
        if (sr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (_v(e, mr), o.clear()), Ef(e, t);
        }
        Zl = yp(), bv(), hc(e, t);
      }
      di(t);
      do
        try {
          ID();
          break;
        } catch (f) {
          Sx(e, f);
        }
      while (!0);
      return Lm(), Cx(i), At = a, jn !== null ? (zs(), Xl) : (ko(), Oa = null, mr = ee, yr);
    }
    function ID() {
      for (; jn !== null && !Yc(); )
        bx(jn);
    }
    function bx(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & ut) !== at ? (SS(e), a = i1(t, e, ll), fy(e, !0)) : a = i1(t, e, ll), Dn(), e.memoizedProps = e.pendingProps, a === null ? xx(e) : jn = a, WS.current = null;
    }
    function xx(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ba) === et) {
          Xt(t);
          var o = void 0;
          if ((t.mode & ut) === at ? o = Wb(a, t, ll) : (SS(t), o = Wb(a, t, ll), fy(t, !1)), Dn(), o !== null) {
            jn = o;
            return;
          }
        } else {
          var f = FO(a, t);
          if (f !== null) {
            f.flags &= bh, jn = f;
            return;
          }
          if ((t.mode & ut) !== at) {
            fy(t, !1);
            for (var v = t.actualDuration, g = t.child; g !== null; )
              v += g.actualDuration, g = g.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= ba, i.subtreeFlags = et, i.deletions = null;
          else {
            yr = QS, jn = null;
            return;
          }
        }
        var C = t.sibling;
        if (C !== null) {
          jn = C;
          return;
        }
        t = i, jn = t;
      } while (t !== null);
      yr === Xl && (yr = cx);
    }
    function mc(e, t, a) {
      var i = Qa(), o = Ir.transition;
      try {
        Ir.transition = null, Qn(xr), YD(e, t, a, i);
      } finally {
        Ir.transition = o, Qn(i);
      }
      return null;
    }
    function YD(e, t, a, i) {
      do
        eo();
      while (ls !== null);
      if (nM(), (At & (Yr | ji)) !== hr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, f = e.finishedLanes;
      if (Gc(f), o === null)
        return ap(), null;
      if (f === ee && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ee, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Lt;
      var v = bt(o.lanes, o.childLanes);
      hp(e, v), e === Oa && (Oa = null, jn = null, mr = ee), ((o.subtreeFlags & Ba) !== et || (o.flags & Ba) !== et) && (vc || (vc = !0, ZS = a, o1(ki, function() {
        return eo(), null;
      })));
      var g = (o.subtreeFlags & (wo | ia | br | Ba)) !== et, C = (o.flags & (wo | ia | br | Ba)) !== et;
      if (g || C) {
        var w = Ir.transition;
        Ir.transition = null;
        var _ = Qa();
        Qn(xr);
        var P = At;
        At |= ji, WS.current = null, IO(e, o), Eb(), aD(e, o, f), a_(e.containerInfo), e.current = o, Nh(f), iD(o, e, f), _o(), wh(), At = P, Qn(_), Ir.transition = w;
      } else
        e.current = o, Eb();
      var z = vc;
      if (vc ? (vc = !1, ls = e, xv = f) : (sd = 0, by = null), v = e.pendingLanes, v === ee && (od = null), z || _x(e.current, !1), Xi(o.stateNode, i), sr && e.memoizedUpdaters.clear(), TD(), ti(e, wn()), t !== null)
        for (var Y = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var Z = t[Q], He = Z.stack, nt = Z.digest;
          Y(Z.value, {
            componentStack: He,
            digest: nt
          });
        }
      if (Ey) {
        Ey = !1;
        var Ke = KS;
        throw KS = null, Ke;
      }
      return sa(xv, lt) && e.tag !== Xo && eo(), v = e.pendingLanes, sa(v, lt) ? (eO(), e === JS ? Tv++ : (Tv = 0, JS = e)) : Tv = 0, Zo(), ap(), null;
    }
    function eo() {
      if (ls !== null) {
        var e = Is(xv), t = xg(eu, e), a = Ir.transition, i = Qa();
        try {
          return Ir.transition = null, Qn(t), QD();
        } finally {
          Qn(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function WD(e) {
      XS.push(e), vc || (vc = !0, o1(ki, function() {
        return eo(), null;
      }));
    }
    function QD() {
      if (ls === null)
        return !1;
      var e = ZS;
      ZS = null;
      var t = ls, a = xv;
      if (ls = null, xv = ee, (At & (Yr | ji)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      e1 = !0, Cy = !1, Lh(a);
      var i = At;
      At |= ji, dD(t.current), oD(t, t.current, a, e);
      {
        var o = XS;
        XS = [];
        for (var f = 0; f < o.length; f++) {
          var v = o[f];
          GO(t, v);
        }
      }
      As(), _x(t.current, !0), At = i, Zo(), Cy ? t === by ? sd++ : (sd = 0, by = t) : sd = 0, e1 = !1, Cy = !1, $u(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Tx(e) {
      return od !== null && od.has(e);
    }
    function GD(e) {
      od === null ? od = /* @__PURE__ */ new Set([e]) : od.add(e);
    }
    function qD(e) {
      Ey || (Ey = !0, KS = e);
    }
    var KD = qD;
    function wx(e, t, a) {
      var i = fc(a, t), o = bb(e, i, lt), f = es(e, o, lt), v = Da();
      f !== null && (Al(f, lt, v), ti(f, v));
    }
    function gn(e, t, a) {
      if ($O(a), kv(!1), e.tag === A) {
        wx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === A) {
          wx(i, e, a);
          return;
        } else if (i.tag === D) {
          var o = i.type, f = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Tx(f)) {
            var v = fc(a, e), g = wS(i, v, lt), C = es(i, g, lt), w = Da();
            C !== null && (Al(C, lt, w), ti(C, w));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function XD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Da();
      vp(e, a), uM(e), Oa === e && Ll(mr, a) && (yr === gv || yr === yy && yf(mr) && wn() - qS < fx ? hc(e, ee) : Sy = bt(Sy, a)), ti(e, o);
    }
    function Rx(e, t) {
      t === Lt && (t = MD(e));
      var a = Da(), i = Za(e, t);
      i !== null && (Al(i, t, a), ti(i, a));
    }
    function ZD(e) {
      var t = e.memoizedState, a = Lt;
      t !== null && (a = t.retryLane), Rx(e, a);
    }
    function JD(e, t) {
      var a = Lt, i;
      switch (e.tag) {
        case G:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case be:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Rx(e, a);
    }
    function eM(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _D(e / 1960) * 1960;
    }
    function tM() {
      if (Tv > OD)
        throw Tv = 0, JS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      sd > DD && (sd = 0, by = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nM() {
      lu.flushLegacyContextWarning(), lu.flushPendingUnsafeLifecycleWarnings();
    }
    function _x(e, t) {
      Xt(e), _y(e, aa, CD), t && _y(e, xl, bD), _y(e, aa, SD), t && _y(e, xl, ED), Dn();
    }
    function _y(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var f = i.subtreeFlags & t;
        i !== o && i.child !== null && f !== et ? i = i.child : ((i.flags & t) !== et && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var ky = null;
    function kx(e) {
      {
        if ((At & Yr) !== hr || !(e.mode & kt))
          return;
        var t = e.tag;
        if (t !== j && t !== A && t !== D && t !== k && t !== se && t !== Pe && t !== je)
          return;
        var a = ht(e) || "ReactComponent";
        if (ky !== null) {
          if (ky.has(a))
            return;
          ky.add(a);
        } else
          ky = /* @__PURE__ */ new Set([a]);
        var i = Tn;
        try {
          Xt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : Dn();
        }
      }
    }
    var i1;
    {
      var rM = null;
      i1 = function(e, t, a) {
        var i = Ux(rM, t);
        try {
          return $b(e, t, a);
        } catch (f) {
          if (mk() || f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (Lm(), qC(), Qb(e, t), Ux(t, i), t.mode & ut && SS(t), bl(null, $b, null, e, t, a), mg()) {
            var o = Qd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
          }
          throw f;
        }
      };
    }
    var Ox = !1, u1;
    u1 = /* @__PURE__ */ new Set();
    function aM(e) {
      if (Jr && !Xk())
        switch (e.tag) {
          case k:
          case se:
          case je: {
            var t = jn && ht(jn) || "Unknown", a = t;
            if (!u1.has(a)) {
              u1.add(a);
              var i = ht(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case D: {
            Ox || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Ox = !0);
            break;
          }
        }
    }
    function _v(e, t) {
      if (sr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          mp(e, i, t);
        });
      }
    }
    var l1 = {};
    function o1(e, t) {
      {
        var a = hu.current;
        return a !== null ? (a.push(t), l1) : Ic(e, t);
      }
    }
    function Dx(e) {
      if (e !== l1)
        return Th(e);
    }
    function Mx() {
      return hu.current !== null;
    }
    function iM(e) {
      {
        if (e.mode & kt) {
          if (!ox())
            return;
        } else if (!RD() || At !== hr || e.tag !== k && e.tag !== se && e.tag !== je)
          return;
        if (hu.current === null) {
          var t = Tn;
          try {
            Xt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ht(e));
          } finally {
            t ? Xt(e) : Dn();
          }
        }
      }
    }
    function uM(e) {
      e.tag !== Xo && ox() && hu.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function kv(e) {
      vx = e;
    }
    var Fi = null, cd = null, lM = function(e) {
      Fi = e;
    };
    function fd(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function s1(e) {
      return fd(e);
    }
    function c1(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = fd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Fe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Nx(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, f = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case D: {
            typeof i == "function" && (o = !0);
            break;
          }
          case k: {
            (typeof i == "function" || f === tt) && (o = !0);
            break;
          }
          case se: {
            (f === Fe || f === tt) && (o = !0);
            break;
          }
          case Pe:
          case je: {
            (f === Et || f === tt) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var v = Fi(a);
          if (v !== void 0 && v === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function Lx(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        cd === null && (cd = /* @__PURE__ */ new WeakSet()), cd.add(e);
      }
    }
    var oM = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        eo(), Jl(function() {
          f1(e.current, i, a);
        });
      }
    }, sM = function(e, t) {
      {
        if (e.context !== vi)
          return;
        eo(), Jl(function() {
          Ov(t, e, null, null);
        });
      }
    };
    function f1(e, t, a) {
      {
        var i = e.alternate, o = e.child, f = e.sibling, v = e.tag, g = e.type, C = null;
        switch (v) {
          case k:
          case je:
          case D:
            C = g;
            break;
          case se:
            C = g.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, _ = !1;
        if (C !== null) {
          var P = Fi(C);
          P !== void 0 && (a.has(P) ? _ = !0 : t.has(P) && (v === D ? _ = !0 : w = !0));
        }
        if (cd !== null && (cd.has(e) || i !== null && cd.has(i)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || w) {
          var z = Za(e, lt);
          z !== null && gr(z, e, lt, cn);
        }
        o !== null && !_ && f1(o, t, a), f !== null && f1(f, t, a);
      }
    }
    var cM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return d1(e.current, i, a), a;
      }
    };
    function d1(e, t, a) {
      {
        var i = e.child, o = e.sibling, f = e.tag, v = e.type, g = null;
        switch (f) {
          case k:
          case je:
          case D:
            g = v;
            break;
          case se:
            g = v.render;
            break;
        }
        var C = !1;
        g !== null && t.has(g) && (C = !0), C ? fM(e, a) : i !== null && d1(i, t, a), o !== null && d1(o, t, a);
      }
    }
    function fM(e, t) {
      {
        var a = dM(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case K:
              t.add(i.stateNode);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function dM(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === K)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var p1;
    {
      p1 = !1;
      try {
        var Ax = Object.preventExtensions({});
      } catch {
        p1 = !0;
      }
    }
    function pM(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = et, this.subtreeFlags = et, this.deletions = null, this.lanes = ee, this.childLanes = ee, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !p1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var hi = function(e, t, a, i) {
      return new pM(e, t, a, i);
    };
    function v1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vM(e) {
      return typeof e == "function" && !v1(e) && e.defaultProps === void 0;
    }
    function hM(e) {
      if (typeof e == "function")
        return v1(e) ? D : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Fe)
          return se;
        if (t === Et)
          return Pe;
      }
      return j;
    }
    function yc(e, t) {
      var a = e.alternate;
      a === null ? (a = hi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = et, a.subtreeFlags = et, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & or, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case j:
        case k:
        case je:
          a.type = fd(e.type);
          break;
        case D:
          a.type = s1(e.type);
          break;
        case se:
          a.type = c1(e.type);
          break;
      }
      return a;
    }
    function mM(e, t) {
      e.flags &= or | vn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ee, e.lanes = t, e.child = null, e.subtreeFlags = et, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = et, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function yM(e, t, a) {
      var i;
      return e === wm ? (i = kt, t === !0 && (i |= Rn, i |= Ya)) : i = at, sr && (i |= ut), hi(A, null, null, i);
    }
    function h1(e, t, a, i, o, f) {
      var v = j, g = e;
      if (typeof e == "function")
        v1(e) ? (v = D, g = s1(g)) : g = fd(g);
      else if (typeof e == "string")
        v = K;
      else {
        e:
          switch (e) {
            case Ca:
              return cs(a.children, o, f, t);
            case Ci:
              v = ye, o |= Rn, (o & kt) !== at && (o |= Ya);
              break;
            case N:
              return gM(a, o, f, t);
            case St:
              return SM(a, o, f, t);
            case Nt:
              return EM(a, o, f, t);
            case dn:
              return zx(a, o, f, t);
            case lr:
            case Fn:
            case bi:
            case io:
            case fn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ae:
                    v = oe;
                    break e;
                  case we:
                    v = Ue;
                    break e;
                  case Fe:
                    v = se, g = c1(g);
                    break e;
                  case Et:
                    v = Pe;
                    break e;
                  case tt:
                    v = gt, g = null;
                    break e;
                }
              var C = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var w = i ? ht(i) : null;
                w && (C += `

Check the render method of \`` + w + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + C));
            }
          }
      }
      var _ = hi(v, a, t, o);
      return _.elementType = e, _.type = g, _.lanes = f, _._debugOwner = i, _;
    }
    function m1(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, f = e.key, v = e.props, g = h1(o, f, v, i, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function cs(e, t, a, i) {
      var o = hi(fe, e, i, t);
      return o.lanes = a, o;
    }
    function gM(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = hi(Se, e, i, t | ut);
      return o.elementType = N, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function SM(e, t, a, i) {
      var o = hi(G, e, i, t);
      return o.elementType = St, o.lanes = a, o;
    }
    function EM(e, t, a, i) {
      var o = hi(be, e, i, t);
      return o.elementType = Nt, o.lanes = a, o;
    }
    function zx(e, t, a, i) {
      var o = hi(ge, e, i, t);
      o.elementType = dn, o.lanes = a;
      var f = {
        isHidden: !1
      };
      return o.stateNode = f, o;
    }
    function y1(e, t, a) {
      var i = hi(te, e, null, t);
      return i.lanes = a, i;
    }
    function CM() {
      var e = hi(K, null, null, at);
      return e.elementType = "DELETED", e;
    }
    function bM(e) {
      var t = hi(ot, null, null, at);
      return t.stateNode = e, t;
    }
    function g1(e, t, a) {
      var i = e.children !== null ? e.children : [], o = hi(B, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function Ux(e, t) {
      return e === null && (e = hi(j, null, null, at)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function xM(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Jg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Lt, this.eventTimes = Sf(ee), this.expirationTimes = Sf(cn), this.pendingLanes = ee, this.suspendedLanes = ee, this.pingedLanes = ee, this.expiredLanes = ee, this.mutableReadLanes = ee, this.finishedLanes = ee, this.entangledLanes = ee, this.entanglements = Sf(ee), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var f = this.pendingUpdatersLaneMap = [], v = 0; v < mn; v++)
          f.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case wm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Xo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Px(e, t, a, i, o, f, v, g, C, w) {
      var _ = new xM(e, t, a, g, C), P = yM(t, f);
      _.current = P, P.stateNode = _;
      {
        var z = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        P.memoizedState = z;
      }
      return R0(P), _;
    }
    var S1 = "18.2.0";
    function TM(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Lr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var E1, C1;
    E1 = !1, C1 = {};
    function jx(e) {
      if (!e)
        return vi;
      var t = Ha(e), a = lk(t);
      if (t.tag === D) {
        var i = t.type;
        if (el(i))
          return cC(t, i, a);
      }
      return a;
    }
    function wM(e, t) {
      {
        var a = Ha(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Ia(a);
        if (o === null)
          return null;
        if (o.mode & Rn) {
          var f = ht(a) || "Component";
          if (!C1[f]) {
            C1[f] = !0;
            var v = Tn;
            try {
              Xt(o), a.mode & Rn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
            } finally {
              v ? Xt(v) : Dn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function Fx(e, t, a, i, o, f, v, g) {
      var C = !1, w = null;
      return Px(e, t, C, w, a, i, o, f, v);
    }
    function Hx(e, t, a, i, o, f, v, g, C, w) {
      var _ = !0, P = Px(a, i, _, e, o, f, v, g, C);
      P.context = jx(null);
      var z = P.current, Y = Da(), Q = os(z), Z = ql(Y, Q);
      return Z.callback = t ?? null, es(z, Z, Q), ND(P, Q, Y), P;
    }
    function Ov(e, t, a, i) {
      Rh(t, e);
      var o = t.current, f = Da(), v = os(o);
      wl(v);
      var g = jx(a);
      t.context === null ? t.context = g : t.pendingContext = g, Jr && Tn !== null && !E1 && (E1 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ht(Tn) || "Unknown"));
      var C = ql(f, v);
      C.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), C.callback = i);
      var w = es(o, C, v);
      return w !== null && (gr(w, o, v, f), jm(w, o, v)), v;
    }
    function Oy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function RM(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (Gn(t)) {
            var a = Sg(t);
            UD(t, a);
          }
          break;
        }
        case G: {
          Jl(function() {
            var o = Za(e, lt);
            if (o !== null) {
              var f = Da();
              gr(o, e, lt, f);
            }
          });
          var i = lt;
          b1(e, i);
          break;
        }
      }
    }
    function $x(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = jh(a.retryLane, t));
    }
    function b1(e, t) {
      $x(e, t);
      var a = e.alternate;
      a && $x(a, t);
    }
    function _M(e) {
      if (e.tag === G) {
        var t = Oo, a = Za(e, t);
        if (a !== null) {
          var i = Da();
          gr(a, e, t, i);
        }
        b1(e, t);
      }
    }
    function kM(e) {
      if (e.tag === G) {
        var t = os(e), a = Za(e, t);
        if (a !== null) {
          var i = Da();
          gr(a, e, t, i);
        }
        b1(e, t);
      }
    }
    function Vx(e) {
      var t = xh(e);
      return t === null ? null : t.stateNode;
    }
    var Bx = function(e) {
      return null;
    };
    function OM(e) {
      return Bx(e);
    }
    var Ix = function(e) {
      return !1;
    };
    function DM(e) {
      return Ix(e);
    }
    var Yx = null, Wx = null, Qx = null, Gx = null, qx = null, Kx = null, Xx = null, Zx = null, Jx = null;
    {
      var eT = function(e, t, a) {
        var i = t[a], o = Mt(e) ? e.slice() : Rt({}, e);
        return a + 1 === t.length ? (Mt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = eT(e[i], t, a + 1), o);
      }, tT = function(e, t) {
        return eT(e, t, 0);
      }, nT = function(e, t, a, i) {
        var o = t[i], f = Mt(e) ? e.slice() : Rt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          f[v] = f[o], Mt(f) ? f.splice(o, 1) : delete f[o];
        } else
          f[o] = nT(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return f;
      }, rT = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nT(e, t, a, 0);
      }, aT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], f = Mt(e) ? e.slice() : Rt({}, e);
        return f[o] = aT(e[o], t, a + 1, i), f;
      }, iT = function(e, t, a) {
        return aT(e, t, 0, a);
      }, x1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Yx = function(e, t, a, i) {
        var o = x1(e, t);
        if (o !== null) {
          var f = iT(o.memoizedState, a, i);
          o.memoizedState = f, o.baseState = f, e.memoizedProps = Rt({}, e.memoizedProps);
          var v = Za(e, lt);
          v !== null && gr(v, e, lt, cn);
        }
      }, Wx = function(e, t, a) {
        var i = x1(e, t);
        if (i !== null) {
          var o = tT(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Za(e, lt);
          f !== null && gr(f, e, lt, cn);
        }
      }, Qx = function(e, t, a, i) {
        var o = x1(e, t);
        if (o !== null) {
          var f = rT(o.memoizedState, a, i);
          o.memoizedState = f, o.baseState = f, e.memoizedProps = Rt({}, e.memoizedProps);
          var v = Za(e, lt);
          v !== null && gr(v, e, lt, cn);
        }
      }, Gx = function(e, t, a) {
        e.pendingProps = iT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Za(e, lt);
        i !== null && gr(i, e, lt, cn);
      }, qx = function(e, t) {
        e.pendingProps = tT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Za(e, lt);
        a !== null && gr(a, e, lt, cn);
      }, Kx = function(e, t, a) {
        e.pendingProps = rT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Za(e, lt);
        i !== null && gr(i, e, lt, cn);
      }, Xx = function(e) {
        var t = Za(e, lt);
        t !== null && gr(t, e, lt, cn);
      }, Zx = function(e) {
        Bx = e;
      }, Jx = function(e) {
        Ix = e;
      };
    }
    function MM(e) {
      var t = Ia(e);
      return t === null ? null : t.stateNode;
    }
    function NM(e) {
      return null;
    }
    function LM() {
      return Tn;
    }
    function AM(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return np({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Yx,
        overrideHookStateDeletePath: Wx,
        overrideHookStateRenamePath: Qx,
        overrideProps: Gx,
        overridePropsDeletePath: qx,
        overridePropsRenamePath: Kx,
        setErrorHandler: Zx,
        setSuspenseHandler: Jx,
        scheduleUpdate: Xx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: MM,
        findFiberByHostInstance: t || NM,
        // React Refresh
        findHostInstancesForRefresh: cM,
        scheduleRefresh: oM,
        scheduleRoot: sM,
        setRefreshHandler: lM,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: LM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: S1
      });
    }
    var uT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function T1(e) {
      this._internalRoot = e;
    }
    Dy.prototype.render = T1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : My(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Hn) {
          var i = Vx(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ov(e, t, null, null);
    }, Dy.prototype.unmount = T1.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gx() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Jl(function() {
          Ov(null, e, null, null);
        }), iC(t);
      }
    };
    function zM(e, t) {
      if (!My(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      lT(e);
      var a = !1, i = !1, o = "", f = uT;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ei && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = Fx(e, wm, null, a, i, o, f);
      gm(v.current, e);
      var g = e.nodeType === Hn ? e.parentNode : e;
      return Pp(g), new T1(v);
    }
    function Dy(e) {
      this._internalRoot = e;
    }
    function UM(e) {
      e && Wh(e);
    }
    Dy.prototype.unstable_scheduleHydration = UM;
    function PM(e, t, a) {
      if (!My(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      lT(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, f = !1, v = !1, g = "", C = uT;
      a != null && (a.unstable_strictMode === !0 && (f = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (C = a.onRecoverableError));
      var w = Hx(t, null, e, wm, i, f, v, g, C);
      if (gm(w.current, e), Pp(e), o)
        for (var _ = 0; _ < o.length; _++) {
          var P = o[_];
          Yk(w, P);
        }
      return new Dy(w);
    }
    function My(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === si || e.nodeType === ml || !ne));
    }
    function Dv(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === si || e.nodeType === ml || e.nodeType === Hn && e.nodeValue === " react-mount-point-unstable "));
    }
    function lT(e) {
      e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Gp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var jM = d.ReactCurrentOwner, oT;
    oT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Hn) {
        var t = Vx(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = w1(e), o = !!(i && qo(i));
      o && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function w1(e) {
      return e ? e.nodeType === si ? e.documentElement : e.firstChild : null;
    }
    function sT() {
    }
    function FM(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var f = i;
          i = function() {
            var z = Oy(v);
            f.call(z);
          };
        }
        var v = Hx(
          t,
          i,
          e,
          Xo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sT
        );
        e._reactRootContainer = v, gm(v.current, e);
        var g = e.nodeType === Hn ? e.parentNode : e;
        return Pp(g), Jl(), v;
      } else {
        for (var C; C = e.lastChild; )
          e.removeChild(C);
        if (typeof i == "function") {
          var w = i;
          i = function() {
            var z = Oy(_);
            w.call(z);
          };
        }
        var _ = Fx(
          e,
          Xo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sT
        );
        e._reactRootContainer = _, gm(_.current, e);
        var P = e.nodeType === Hn ? e.parentNode : e;
        return Pp(P), Jl(function() {
          Ov(t, _, a, i);
        }), _;
      }
    }
    function HM(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ny(e, t, a, i, o) {
      oT(a), HM(o === void 0 ? null : o, "render");
      var f = a._reactRootContainer, v;
      if (!f)
        v = FM(a, t, e, o, i);
      else {
        if (v = f, typeof o == "function") {
          var g = o;
          o = function() {
            var C = Oy(v);
            g.call(C);
          };
        }
        Ov(t, v, e, o);
      }
      return Oy(v);
    }
    function $M(e) {
      {
        var t = jM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ta ? e : wM(e, "findDOMNode");
    }
    function VM(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Gp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ny(null, e, t, !0, a);
    }
    function BM(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Gp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ny(null, e, t, !1, a);
    }
    function IM(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ms(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ny(e, t, a, !1, i);
    }
    function YM(e) {
      if (!Dv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Gp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = w1(e), i = a && !qo(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Jl(function() {
          Ny(null, null, e, !1, function() {
            e._reactRootContainer = null, iC(e);
          });
        }), !0;
      } else {
        {
          var o = w1(e), f = !!(o && qo(o)), v = e.nodeType === ta && Dv(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Be(RM), Hh(_M), Ws(kM), Sp(Qa), Vh(Bs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Eh(GR), Fc(n1, PD, Jl);
    function WM(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!My(t))
        throw new Error("Target container is not a DOM element.");
      return TM(e, t, null, a);
    }
    function QM(e, t, a, i) {
      return IM(e, t, a, i);
    }
    var R1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [qo, Vf, Sm, jc, ks, n1]
    };
    function GM(e, t) {
      return R1.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zM(e, t);
    }
    function qM(e, t, a) {
      return R1.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), PM(e, t, a);
    }
    function KM(e) {
      return gx() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Jl(e);
    }
    var XM = AM({
      findFiberByHostInstance: nc,
      bundleType: 1,
      version: S1,
      rendererPackageName: "react-dom"
    });
    if (!XM && Pt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var cT = window.location.protocol;
      /^(https?|file):$/.test(cT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (cT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R1, ri.createPortal = WM, ri.createRoot = GM, ri.findDOMNode = $M, ri.flushSync = KM, ri.hydrate = VM, ri.hydrateRoot = qM, ri.render = BM, ri.unmountComponentAtNode = YM, ri.unstable_batchedUpdates = n1, ri.unstable_renderSubtreeIntoContainer = QM, ri.version = S1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ri;
}
(function(u) {
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (d) {
        console.error(d);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (s(), u.exports = uP()) : u.exports = lP();
})(nP);
var Pv = gE;
if (process.env.NODE_ENV === "production")
  jv.createRoot = Pv.createRoot, jv.hydrateRoot = Pv.hydrateRoot;
else {
  var $y = Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  jv.createRoot = function(u, s) {
    $y.usingClientEntryPoint = !0;
    try {
      return Pv.createRoot(u, s);
    } finally {
      $y.usingClientEntryPoint = !1;
    }
  }, jv.hydrateRoot = function(u, s, d) {
    $y.usingClientEntryPoint = !0;
    try {
      return Pv.hydrateRoot(u, s, d);
    } finally {
      $y.usingClientEntryPoint = !1;
    }
  };
}
const oP = (u, s) => {
  const d = [...new Set(u.map((E) => s(E)))], m = Object.fromEntries(d.map((E) => [E, []]));
  return u.map((E) => {
    var y;
    const S = s(E);
    m[S] !== void 0 ? (y = m[S]) == null || y.push(E) : m[S] = [E];
  }), m;
};
const sP = (u) => {
  const [s, { width: d }] = tP(), [m, E] = Qr.useState(
    void 0
  ), {
    // data
    data: S,
    getX: y,
    getY: T,
    getZ: k,
    xAxisLabel: D,
    yAxisLabel: j,
    // styles
    height: A,
    axisWidth: B = 50,
    axisColor: K = "#000000",
    pointRadius: te = 1.5,
    pointColor: fe = "#303030",
    lineWidth: ye = 1,
    lineColor: Ue = "#303030"
  } = u, oe = oP(S, k), se = YT({
    domain: [0, Math.max(...S.map(y))],
    range: [B, d]
  }), Se = YT({
    domain: [0, Math.max(...S.map(T))],
    range: [A - B, 0]
  });
  return /* @__PURE__ */ no.jsxs("svg", { height: A, style: { width: "100%" }, ref: s, children: [
    /* @__PURE__ */ no.jsxs(Ky, { children: [
      Object.values(oe).map(
        (Pe) => Pe.map((je, gt) => /* @__PURE__ */ no.jsx(
          "circle",
          {
            cx: se(y(je)),
            cy: Se(T(je)),
            r: te,
            fill: fe
          },
          gt
        ))
        // const pointX = xScale(getX(dp));
        // const pointY = yScale(getY(dp));
        //
        // return (
        //   <Bar
        //     key={i}
        //     x={pointX}
        //     y={pointY}
        //     height={yRangeMax - pointY}
        //     width={4}
        //     fill={datapointColor}
        //   />
        // );
      ),
      Object.values(oe).map((Pe, je) => /* @__PURE__ */ no.jsx(
        k2,
        {
          curve: Kw,
          data: Pe,
          x: (gt) => se(y(gt)),
          y: (gt) => Se(T(gt)),
          stroke: Ue,
          strokeWidth: m === je ? 2 : ye,
          onPointerOver: () => {
            E(je);
          },
          onPointerOut: () => {
            E(void 0);
          }
        },
        je
      ))
    ] }),
    /* @__PURE__ */ no.jsx(
      iw,
      {
        orientation: yi.bottom,
        top: A - B,
        scale: se,
        stroke: K,
        tickStroke: K,
        label: D,
        labelProps: {
          y: 36,
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "sans-serif"
        }
      }
    ),
    /* @__PURE__ */ no.jsx(
      iw,
      {
        orientation: yi.left,
        left: B,
        scale: Se,
        stroke: K,
        tickStroke: K,
        label: j,
        labelProps: {
          y: -22,
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "sans-serif"
        }
      }
    )
  ] });
}, pP = (u) => (s) => {
  jv.createRoot(s).render(/* @__PURE__ */ no.jsx(sP, { ...u }));
};
export {
  sP as Chart,
  pP as render
};
