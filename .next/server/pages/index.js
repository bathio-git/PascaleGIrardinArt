"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostToShow)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/IndexPage/ProjectElement.js


function ProjectElement({ element , media  }) {
    let image;
    media.forEach((i)=>{
        i.id == element.featured_media ? image = i : void 0;
    });
    let uri = element.type === "exposition" ? `expositions/${element.slug}` : `projects/${element.slug}`;
    console.log(uri);
    return image === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "project-thumb__row",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()("project-thumb__image", `project-thumb__image--${element.acf.size}`, `project-thumb__image--${element.acf.align}`),
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "project-thumb__link",
                    href: uri,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: image.source_url,
                                alt: "wow"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                                className: "project-thumb__caption",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: external_classnames_default()("project-header", "project-header--none"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "project-header__title",
                                            children: element.title.rendered
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "project-header__detail",
                                            children: [
                                                element.acf.subtitle && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: element.acf.subtitle
                                                    }
                                                }),
                                                element.acf.place && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: element.acf.place
                                                    }
                                                }),
                                                element.acf.dates && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "dates",
                                                    dangerouslySetInnerHTML: {
                                                        __html: element.acf.dates
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const IndexPage_ProjectElement = (ProjectElement);

;// CONCATENATED MODULE: ./components/IndexPage/NewsElement.js


function NewsElement({ element  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "project-thumb__text project-thumb__text--undefined project-thumb__text--undefined",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "project-thumb__link",
                href: `news/${element.slug}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "news-header news-header--none",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "news-header__title",
                            children: [
                                element.title.rendered && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: element.title.rendered
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "news-header__subtitle",
                                    children: element.acf.title_2 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: element.acf.title_2
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "news-header__detail",
                            children: element.acf.dates && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: element.acf.dates
                                }
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const IndexPage_NewsElement = (NewsElement);

;// CONCATENATED MODULE: ./components/IndexPage/Row.js




const Row = ({ element , pageContext , media  })=>{
    return element.type === "project" || element.type === "exposition" ? /*#__PURE__*/ jsx_runtime_.jsx(IndexPage_ProjectElement, {
        element: element,
        pageContext: pageContext,
        media: media
    }, element.date) : /*#__PURE__*/ jsx_runtime_.jsx(IndexPage_NewsElement, {
        element: element,
        pageContext: pageContext
    }, element.date);
};

// EXTERNAL MODULE: ./components/SingleProject/ProjectThumb.js
var ProjectThumb = __webpack_require__(146);
;// CONCATENATED MODULE: ./components/IndexPage/PostToShow.js




function PostsToShow({ firstChunk , lastChunk , pageContext , media  }) {
    let [showMore, setShowMore] = (0,external_react_.useState)("none");
    let [hideThis, setHideThis] = (0,external_react_.useState)("block");
    let more = pageContext.locale === "fr_CA" ? "PLUS" : "MORE";
    function ShowMore() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "index__loadmore",
            style: {
                display: hideThis
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "loadmore",
                onClick: ()=>{
                    setShowMore("block");
                    setHideThis("none");
                },
                children: [
                    more,
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "↓"
                ]
            })
        });
    }
    return firstChunk === null || lastChunk === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "index",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ProjectThumb/* default */.Z, {
                    classMod: "index",
                    children: firstChunk.map((e)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                            element: e,
                            pageContext: pageContext,
                            media: media
                        }, e.date);
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ShowMore, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: showMore
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectThumb/* default */.Z, {
                        classMod: "index",
                        children: lastChunk.map((e)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                element: e,
                                pageContext: pageContext,
                                media: media
                            }, e.date);
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const PostToShow = (PostsToShow);


/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function ProjectThumb({ children , classMod  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("project-thumb", `project-thumb--${classMod}`),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectThumb);


/***/ }),

/***/ 7142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/layout/Head/index.js


const Seo = ({ description , title  })=>{
    const metaDescription = description || "Trop beau";
    const defaultTitle = "Pascale Girardin";
    let titre = title ? title : defaultTitle;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: titre
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: titre
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/icon-144x144.png"
            })
        ]
    });
};
/* harmony default export */ const Head = (Seo);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/context/context.js
var context = __webpack_require__(4624);
;// CONCATENATED MODULE: ./components/layout/Header/LangNav.js




function LangNav({ pageContext  }) {
    const { updatePageContext  } = (0,context/* useAppContext */.b)();
    function handleClick(e) {
        updatePageContext({
            locale: e.target.innerText === "fr" ? "fr_CA" : "en_CA"
        });
    }
    let targetLang = pageContext.locale === "fr_CA" ? "en" : "fr";
    return pageContext.locale === undefined ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "lang",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            onClick: (e)=>handleClick(e),
            children: targetLang
        })
    });
}
/* harmony default export */ const Header_LangNav = (LangNav);

;// CONCATENATED MODULE: ./components/layout/Logotype.js


function Logotype({ parent  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: `${parent}__title`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "logotype",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                "aria-current": "page",
                className: "",
                href: "/",
                children: "Pascale Girardin"
            })
        })
    });
}
/* harmony default export */ const layout_Logotype = (Logotype);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: ./components/layout/Header/modalStyles.js
const modalStyles = {
    overlay: {
        position: `fixed`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        backgroundColor: `transparent`
    },
    content: {
        position: `asbolute`,
        border: `none`,
        background: `#fff`,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: `auto `,
        WebkitOverflowScrolling: `touch`
    }
};
/* harmony default export */ const Header_modalStyles = (modalStyles);

;// CONCATENATED MODULE: ./components/layout/Header/index.js






function Header({ pageContext , menus  }) {
    const lang = pageContext.locale;
    const defaultVisibility = false;
    const [showMenu, setMenu] = (0,external_react_.useState)(defaultVisibility);
    const updateShowMenu = (data)=>setMenu(data);
    const close = ()=>updateShowMenu(false);
    const open = ()=>updateShowMenu(true);
    const [headerMenu, setHeaderMenu] = (0,external_react_.useState)(null);
    async function fetchHeaderMenu() {
        if (lang !== undefined) {
            let x;
            menus.forEach((element)=>{
                let nom = element.name;
                nom.charAt(0) === "p" && nom.includes(lang) ? x = element : void 0 // if the name of the menu starts with p it's definitely a primary menu also we want the right translation
                ;
            });
            const res = await fetch(x.meta.links.self);
            const xx = await res.json();
            setHeaderMenu(xx);
        }
    }
    (0,external_react_.useEffect)(()=>{
        fetchHeaderMenu();
    }, [
        lang
    ]);
    return headerMenu === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header__visible",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Logotype, {
                        parent: "header"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header__right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header_LangNav, {
                                pageContext: pageContext
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "header__toggle",
                                onClick: ()=>{
                                    open();
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "./hamburger.svg",
                                    alt: ""
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_default()), {
                isOpen: showMenu,
                onRequestClose: close,
                style: Header_modalStyles,
                contentLabel: "Modal",
                htmlOpenClassName: "ReactModal__Html--open",
                closeTimeoutMS: 350,
                className: "header__modal",
                overlayClassName: "header__overlay",
                ariaHideApp: false,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "nav",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "header__toggle",
                            onClick: close,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE3IDE2Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI0IzQjNCMyI+CiAgICA8cGF0aCBkPSJNLjcwNzEuMzUzNUwxNS43MDcxIDE1LjM1MzVNMTUuNzA3MS4zNTM1TC43MDcxIDE1LjM1MzUiLz4KICA8L2c+Cjwvc3ZnPgo=",
                                alt: "close menu"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: headerMenu.items.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: item.url,
                                        activeclassname: "active",
                                        onClick: close,
                                        children: item.title
                                    })
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/Footer/FooterRow.js


function FooterRow(props) {
    let obj = props.obj;
    function SubCategories() {
        function Sub() {
            let sub = obj.children.map((element)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "inline-nav__item",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: element.url,
                        children: element.title
                    })
                }, element.url);
            });
            return sub;
        }
        return obj.children !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(Sub, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: "footer__nav-item",
            style: {
                listStyle: "none"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "inline-nav",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "inline-nav__title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: obj.url,
                            children: obj.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "inline-nav__items",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SubCategories, {})
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Footer_FooterRow = (FooterRow);

;// CONCATENATED MODULE: ./components/layout/Footer/Sponsor.js

function Sponsor() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            marginLeft: "auto"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.metiersdart.ca/",
                target: "blank",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/CMAQ _horiz_noir.png",
                    style: {
                        height: "2.5rem"
                    },
                    alt: "cmaq_logo"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.calq.gouv.qc.ca/",
                target: "blank",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/csm_Logo_CALQ_noir_725x300_373aca8cfe_2.png",
                    style: {
                        height: "2.5rem"
                    },
                    alt: "calq_logo"
                })
            })
        ]
    });
}
/* harmony default export */ const Footer_Sponsor = (Sponsor);

;// CONCATENATED MODULE: ./components/layout/Footer/index.js





function Footer({ pageContext , menus  }) {
    const lang = pageContext.locale;
    let [footerMenu, setFooterMenu] = (0,external_react_.useState)(null);
    const fetchFooterMenu = ()=>{
        if (lang !== undefined) {
            let x;
            menus.forEach((element)=>{
                let nom = element.name;
                nom.charAt(0) === "f" && nom.includes(lang) ? x = element : void 0 // if the name of the menu starts with f it's definitely a footer also we want the right translation
                ;
            }) //console.log(x.meta.links.self)
            ;
            fetch(x.meta.links.self).then((response)=>response.json()).then((data)=>{
                setFooterMenu(data);
            }) //console.log(data); 
            ;
        }
    };
    (0,external_react_.useEffect)(()=>fetchFooterMenu(), [
        lang
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer__logotype",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Logotype, {
                        parent: "footer"
                    })
                })
            }),
            footerMenu && footerMenu.items.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterRow, {
                    obj: element
                }, element.url)),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    marginLeft: "-1rem",
                    marginTop: "2.5rem"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer_Sponsor, {})
            })
        ]
    });
}
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/index.js




const Layout = ({ title , children , pageContext , description , menus  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head, {
                title: title,
                description: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                pageContext: pageContext,
                menus: menus
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                pageContext: pageContext,
                menus: menus
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7142);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_lib_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var _components_IndexPage_PostToShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7542);
/* harmony import */ var _components_context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4624);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__]);
_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function IndexPage({ posts , projects , expositions , media , menus  }) {
    let { pageContext  } = (0,_components_context_context__WEBPACK_IMPORTED_MODULE_5__/* .useAppContext */ .b)();
    let [firstChunk, setFirstChunk] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    let [lastChunk, setLastChunk] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const SortChronogically = ()=>{
        let x = projects.concat(posts);
        let xx = x.concat(expositions) // x is all the posts and all of the projects
        ;
        xx.sort((a, b)=>{
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        }).reverse();
        let y = [] // y is only the ones in the current lang
        ;
        xx.forEach((element)=>{
            pageContext.locale.includes(element.polylang_current_lang) ? y.push(element) : void 0;
        });
        setFirstChunk(y.slice(0, 5)) // show the first five first
        ;
        setLastChunk(y.slice(5)) // show all of the rest next
        ;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        SortChronogically();
    }, [
        pageContext.locale
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Pascale Girardin",
        description: "Page d'accueil",
        pageContext: pageContext,
        menus: menus,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_IndexPage_PostToShow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            firstChunk: firstChunk,
            lastChunk: lastChunk,
            pageContext: pageContext,
            media: media
        })
    });
}
async function getStaticProps() {
    const posts = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .cherche */ .a)("posts");
    const projects = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .cherche */ .a)("projects?per_page=100&page=1");
    const expositions = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .cherche */ .a)("expositions?per_page=100&page=1");
    const media = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .getMedia */ .o)();
    const menus = await (0,_components_lib_lib__WEBPACK_IMPORTED_MODULE_3__/* .cherche */ .a)("menus");
    return {
        props: {
            posts,
            projects,
            expositions,
            media,
            menus
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,624,358], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();