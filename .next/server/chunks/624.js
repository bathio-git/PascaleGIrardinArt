"use strict";
exports.id = 624;
exports.ids = [624];
exports.modules = {

/***/ 4624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AppWrapper),
/* harmony export */   "b": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// src/context/state.js


const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AppWrapper({ children  }) {
    const x = {
        locale: "fr_CA"
    };
    const [pageContext, setPageContext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(x);
    const updatePageContext = (xx)=>{
        setPageContext(xx);
    };
    const value = {
        pageContext,
        updatePageContext
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: value,
        children: children
    });
}
function useAppContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
}


/***/ })

};
;