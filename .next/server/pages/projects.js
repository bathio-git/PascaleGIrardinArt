"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 1238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6373);
/* harmony import */ var _components_ProjectsPage_ProjectItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9182);
/* harmony import */ var _components_lib_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var _components_context_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4624);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_lib_lib__WEBPACK_IMPORTED_MODULE_6__]);
_components_lib_lib__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function ProjectsPage({ allProjects , menus , categories  }) {
    let { pageContext  } = (0,_components_context_context__WEBPACK_IMPORTED_MODULE_7__/* .useAppContext */ .b)();
    let [projectsToShow, setProjectsToShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let [projetMenu, setProjetMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let current, hash;
    let projects = [];
    allProjects.forEach((element)=>{
        element.polylang_current_lang.includes(pageContext.locale) && element.status === "publish" ? projects.push(element) : void 0;
    });
    const fetchProjetMenu = ()=>{
        let x;
        menus.forEach((element)=>{
            let nom = element.name;
            nom.charAt(0) === "f" && nom.includes(pageContext.locale) ? x = element : void 0 // if the name of the menu starts with f it's definitely a footer menu also we want the right translation. technically the header is the same shit as the footer
            ;
        }) //console.log(x.meta.links.self)
        ;
        fetch(x.meta.links.self).then((response)=>response.json()).then((data)=>{
            let x = data.items[0];
            setProjetMenu(x);
        }) //sorta hard coded... the item at the zero index is the project submenu  ///console.log(x);
        .catch((error)=>console.log(error));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchProjetMenu();
    }, []); //console.log(projetMenu)
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    function listOfProjects(xo) {
        let x = [];
        let y = [];
        hash = xo === undefined ? undefined : xo.split("#")[1];
        categories.forEach((element)=>{
            element.polylang_current_lang.includes(pageContext.locale) ? x.push(element) : void 0;
        });
        x.forEach((element)=>{
            element.slug === hash ? current = element.id : void 0;
        });
        console.log(current);
        current === undefined ? projects.map((element)=>y.push(element)) : projects.map((element)=>{
            setProjectsToShow(null);
            element.categories.includes(current) ? y.push(element) : void 0;
        });
        return setProjectsToShow(y);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const onHashChangeStart = (url)=>{
            listOfProjects(url);
        };
        router.events.on("hashChangeStart", onHashChangeStart);
        return ()=>{
            router.events.off("hashChangeStart", onHashChangeStart);
        };
    }, [
        router.events
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        listOfProjects();
    }, []);
    return projectsToShow === null || projetMenu === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "Pascale Girardin",
        pageContext: pageContext,
        menus: menus,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "projects",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "projects__heading",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "inline-nav",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inline-nav__title",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/projects",
                                    children: projetMenu.title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "inline-nav__items",
                                children: projetMenu.children.map((element, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "inline-nav__item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: element.url,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: element.object_slug == hash ? "active" : "",
                                                children: element.title
                                            })
                                        })
                                    }, element.url);
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "projects__list",
                    children: projectsToShow && projectsToShow.map((element)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectsPage_ProjectItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            element: element,
                            pageContext: pageContext
                        }, element.date))
                })
            ]
        })
    });
}
async function getStaticProps() {
    const allProjects = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_6__/* .cherche */ .a)("projects?per_page=100&page=1");
    const menus = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_6__/* .cherche */ .a)("menus");
    const categories = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_6__/* .cherche */ .a)("categories");
    return {
        props: {
            allProjects,
            menus,
            categories
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,624,373,358,182], () => (__webpack_exec__(1238)));
module.exports = __webpack_exports__;

})();