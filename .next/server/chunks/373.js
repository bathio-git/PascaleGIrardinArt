"use strict";
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 6373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout/Head/index.js


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
;// CONCATENATED MODULE: ./components/Layout/Header/LangNav.js




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

;// CONCATENATED MODULE: ./components/Layout/Logotype.js


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
/* harmony default export */ const Layout_Logotype = (Logotype);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: ./components/Layout/Header/modalStyles.js
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

;// CONCATENATED MODULE: ./components/Layout/Header/index.js






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
                    /*#__PURE__*/ jsx_runtime_.jsx(Layout_Logotype, {
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
/* harmony default export */ const Layout_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout/Footer/FooterRow.js


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

;// CONCATENATED MODULE: ./components/Layout/Footer/Sponsor.js

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

;// CONCATENATED MODULE: ./components/Layout/Footer/index.js





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
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_Logotype, {
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
/* harmony default export */ const Layout_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout/index.js




const Layout = ({ title , children , pageContext , description , menus  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head, {
                title: title,
                description: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Header, {
                pageContext: pageContext,
                menus: menus
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Footer, {
                pageContext: pageContext,
                menus: menus
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;