"use strict";
(() => {
var exports = {};
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 1631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_lib_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var _components_context_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4624);
/* harmony import */ var _components_PageContent_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3552);
/* harmony import */ var _components_SingleProject_ProjectThumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(146);
/* harmony import */ var _components_SingleProject_ProjectHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1578);
/* harmony import */ var _components_SingleProject_ProjectThumbImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4126);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6373);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__]);
_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function Post({ wordpressPage , featured_mediaID , menus  }) {
    const { pageContext  } = (0,_components_context_context__WEBPACK_IMPORTED_MODULE_4__/* .useAppContext */ .b)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pid  } = router.query;
    const [featured_media, setFeatured_media] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    function fetchImage() {
        if (wordpressPage !== null) {
            fetch(`https://admin.pascalegirardin.art/wp-json/wp/v2/media/${featured_mediaID}`).then((response)=>response.json()).then((data)=>{
                setFeatured_media(data);
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchImage();
    }, [
        wordpressPage
    ]);
    return featured_media === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        title: wordpressPage.title.rendered,
        description: wordpressPage.excerpt.rendered,
        menus: menus,
        pageContext: pageContext,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "article",
            className: "article",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "article__wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SingleProject_ProjectHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        title: wordpressPage.title.rendered,
                        subtitle: wordpressPage.acf.subtitle,
                        dates: wordpressPage.acf.dates,
                        place: wordpressPage.acf.place,
                        classMod: "single"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "article__main",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "project",
                            children: [
                                featured_media && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "project__thumb",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SingleProject_ProjectThumb__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        classMod: "header",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SingleProject_ProjectThumbImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            source_url: featured_media.source_url,
                                            size: wordpressPage.acf.size,
                                            align: "right",
                                            caption: featured_media.caption.rendered,
                                            title: featured_media.title.rendered
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "project__content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "project-content",
                                        children: wordpressPage.acf.flexible_content.map((section, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageContent_PageContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                element: section,
                                                wordpressPage: wordpressPage
                                            }, (index + section.acf_fc_layout).toString()))
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
async function getStaticProps(pid) {
    const expo = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .cherche */ .a)(`projects?slug=${pid.params.pid}`);
    const wordpressPage = expo[0];
    const featured_mediaID = wordpressPage.featured_media;
    const menus = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .cherche */ .a)("menus");
    return {
        props: {
            wordpressPage,
            featured_mediaID,
            menus
        }
    };
}
async function getStaticPaths() {
    const projects = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .cherche */ .a)("projects?per_page=100&page=1");
    let paths = [];
    projects.map((expo)=>{
        paths.push(`/projects/${expo.slug}`);
    });
    console.log(paths);
    return {
        paths,
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("@u-wave/react-vimeo");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

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

/***/ 4967:
/***/ ((module) => {

module.exports = require("react-id-swiper");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2770:
/***/ ((module) => {

module.exports = require("swiper");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,624,373,358,552,578], () => (__webpack_exec__(1631)));
module.exports = __webpack_exports__;

})();