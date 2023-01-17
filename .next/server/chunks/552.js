"use strict";
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PageContent_PageContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/PageContent/TextContent.js


/* harmony default export */ const TextContent = (({ text  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "project-content__block project-content__block--text",
        dangerouslySetInnerHTML: {
            __html: text
        }
    }));

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Hooks/useFetch.js

const useFetch = (url)=>{
    const [data, setData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        fetch(`https://admin.pascalegirardin.art/wp-json/wp/v2/${url}`).then((res)=>res.json()).then((data)=>setData(data));
    }, [
        url
    ]);
    return [
        data
    ];
};
/* harmony default export */ const Hooks_useFetch = (useFetch);

;// CONCATENATED MODULE: ./components/PageContent/OneImageRow.js




function OneImageRow({ element , pageContext  }) {
    const searchThis = (str)=>{
        let x = str.substring(str.lastIndexOf("/") + 1);
        let y = `media?search=${x}`;
        return y;
    };
    let url = searchThis(element.image);
    let [image] = Hooks_useFetch(url);
    return image === null || element === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("project-thumb", `project-thumb--content`),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()("project-thumb__row ", `project-thumb__row--${element.align}`),
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()("project-thumb__image", `project-thumb__image--${element.size}`, `project-thumb__image--${element.align}`, {
                    "project-thumb__image--row": !!element.row
                }),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image[0].source_url,
                            alt: "wow"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                            className: "project-thumb__caption",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: image[0].caption.rendered
                                }
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const PageContent_OneImageRow = (OneImageRow);

// EXTERNAL MODULE: ./components/SingleProject/ProjectThumb.js
var ProjectThumb = __webpack_require__(146);
// EXTERNAL MODULE: ./components/SingleProject/ProjectThumbImage.js + 1 modules
var ProjectThumbImage = __webpack_require__(4126);
;// CONCATENATED MODULE: ./components/SingleProject/ThumbRow.js


function ThumbRow({ children , align  }) {
    let classname = "project-thumb__row";
    if (align) {
        classname = classname.concat(` project-thumb__row--${align}`);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classname,
        children: children
    });
}
/* harmony default export */ const SingleProject_ThumbRow = (ThumbRow);

;// CONCATENATED MODULE: ./components/SingleProject/TwoImagesRow.js






function TwoImagesRow({ element  }) {
    const searchThis = (str)=>{
        let x = str.substring(str.lastIndexOf("/") + 1);
        let y = `media?search=${x}`;
        return y;
    };
    let urlLeft = searchThis(element.left.image);
    let urlRight = searchThis(element.right.image);
    let [left] = Hooks_useFetch(urlLeft);
    let [right] = Hooks_useFetch(urlRight);
    return left === null || right === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "project-content__block project-content__block--images",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectThumb/* default */.Z, {
            classMod: "content",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SingleProject_ThumbRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectThumbImage/* default */.Z, {
                        size: element.left.size,
                        align: "left",
                        caption: left[0].caption.rendered,
                        title: left[0].title.rendered,
                        source_url: left[0].source_url,
                        row: false
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProjectThumbImage/* default */.Z, {
                        size: element.right.size,
                        align: "right",
                        caption: right[0].caption.rendered,
                        title: right[0].title.rendered,
                        source_url: right[0].source_url,
                        row: false
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const SingleProject_TwoImagesRow = (TwoImagesRow);

// EXTERNAL MODULE: external "@u-wave/react-vimeo"
var react_vimeo_ = __webpack_require__(924);
var react_vimeo_default = /*#__PURE__*/__webpack_require__.n(react_vimeo_);
;// CONCATENATED MODULE: ./components/SingleProject/ContentVideo.js



function ContentVideo({ vimeoUrl  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "project-content__block project-content__block--video",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "video",
            children: /*#__PURE__*/ jsx_runtime_.jsx((react_vimeo_default()), {
                video: vimeoUrl
            })
        })
    });
}
/* harmony default export */ const SingleProject_ContentVideo = (ContentVideo);

// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__(4967);
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
;// CONCATENATED MODULE: ./components/SingleProject/ContentSlider.js



external_swiper_default().use([
    external_swiper_.Navigation
]);
function ContentSlider({ images  }) {
    const params = {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    };
    return images === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "project-content__block project-content__block--swiper",
        style: {
            width: "80vw"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_id_swiper_default()), {
            ...params,
            className: "swiper",
            children: images.map((img, i)=>{
                const ratio = img.width / img.height >= 1 ? "landscape" : "portrait";
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "swiper__slide",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                        className: ratio,
                        role: "navigation",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: img.url,
                                alt: "wow"
                            }),
                            (img.title || img.caption) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figcaption", {
                                children: [
                                    img.title && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: img.title
                                                }
                                            }),
                                            " ",
                                            "–",
                                            " "
                                        ]
                                    }),
                                    img.caption && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: img.caption
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                }, img.date);
            })
        })
    });
}
/* harmony default export */ const SingleProject_ContentSlider = (ContentSlider);

;// CONCATENATED MODULE: ./components/PageContent/PageContent.js







function PageContent({ element , wordpressPage , pageContext  }) {
    if (element.acf_fc_layout === "text") {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "project-content project-content--page",
            children: /*#__PURE__*/ jsx_runtime_.jsx(TextContent, {
                text: element.text_content
            })
        });
    } else if (element.acf_fc_layout === "one_image_row") {
        return /*#__PURE__*/ jsx_runtime_.jsx(PageContent_OneImageRow, {
            element: element,
            pageContext: pageContext
        });
    } else if (element.acf_fc_layout === "two_images_row") {
        return /*#__PURE__*/ jsx_runtime_.jsx(SingleProject_TwoImagesRow, {
            element: element,
            pageContext: pageContext
        });
    } else if (element.acf_fc_layout === "video") {
        return /*#__PURE__*/ jsx_runtime_.jsx(SingleProject_ContentVideo, {
            vimeoUrl: element.vimeo_url
        });
    } else if (element.acf_fc_layout === "slider") {
        return /*#__PURE__*/ jsx_runtime_.jsx(SingleProject_ContentSlider, {
            images: element.images
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
}
/* harmony default export */ const PageContent_PageContent = (PageContent);


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

/***/ 4126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SingleProject_ProjectThumbImage)
});

// UNUSED EXPORTS: ProjectThumbImage

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/SingleProject/ProjectThumbLink.js


/* const ProjectThumbLink = ({ children, to, state, locale }) => {
    return (
        <Link 
            className="project-thumb__link" 
            to={to} state={state} locale={locale}>
            {children}
        </Link>
    )
}
export default ProjectThumbLink */ const ProjectThumbLink = ({ children , to , state , locale  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: "project-thumb__link",
        href: to,
        state: state,
        locale: locale,
        children: children
    });
};
/* harmony default export */ const SingleProject_ProjectThumbLink = (ProjectThumbLink);

;// CONCATENATED MODULE: ./components/SingleProject/ProjectThumbImage.js




const ProjectThumbImage = ({ size , align , row , to , locale , caption , title , nextLink , prevLink , onClick , source_url  })=>{
    let image = null;
    const cap = /*#__PURE__*/ external_react_default().isValidElement(caption) ? /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
        className: "project-thumb__caption",
        children: caption
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figcaption", {
        className: "project-thumb__caption",
        children: [
            title && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: title
                        }
                    }),
                    " –",
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: caption
                }
            })
        ]
    });
    image = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: source_url,
                alt: "wow"
            }),
            caption && cap
        ]
    });
    if (to) {
        image = /*#__PURE__*/ jsx_runtime_.jsx(SingleProject_ProjectThumbLink, {
            to: to,
            state: {
                nextLink,
                prevLink
            },
            locale: locale,
            children: image
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("project-thumb__image", `project-thumb__image--${size}`, `project-thumb__image--${align}`, {
            "project-thumb__image--row": !!row
        }),
        onClick: onClick,
        children: image
    });
};
/* harmony default export */ const SingleProject_ProjectThumbImage = (ProjectThumbImage);


/***/ })

};
;