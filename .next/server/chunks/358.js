"use strict";
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ cherche),
/* harmony export */   "o": () => (/* binding */ getMedia)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getMediaChunk(x) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://admin.pascalegirardin.art/wp-json/wp/v2/media?per_page=50&page=${x}`);
        return response;
    } catch (error) {
        if (error.response) {
            let x1 = [
                {
                    data: "gardes la peche"
                }
            ];
            return x1;
        }
    }
}
async function getMedia() {
    let x = 1;
    let xo = 1;
    let y = [];
    let z = await getMediaChunk(x);
    while(z.data !== undefined){
        y = y.concat(z.data);
        x++;
        z = await getMediaChunk(x);
    }
    return y;
}
async function cherche(params) {
    try {
        if (params === "menus") {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://admin.pascalegirardin.art/wp-json/wp-api-menus/v2/menus`);
            const data = response.data;
            return data;
        }
        const response1 = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://admin.pascalegirardin.art/wp-json/wp/v2/${params}`);
        const data1 = response1.data;
        return data1;
    } catch (error) {
        if (error.response) {
            let x = [
                {
                    data: "gardes la peche"
                }
            ];
            return error.response.data;
        }
    }
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;