exports.id = 343;
exports.ids = [343];
exports.modules = {

/***/ 2160:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 3407:
/***/ (() => {



/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7669);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3144);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: {
        default: "Outstatic",
        template: "%s | Outstatic"
    },
    description: "A blog starter built with Outstatic.",
    openGraph: {
        title: "Outstatic - A Static Site CMS for Next.js",
        description: "A blog starter built with Outstatic.",
        url: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .absoluteUrl */ .G)("/"),
        siteName: "Next.js",
        images: [
            {
                url: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .absoluteUrl */ .G)("/images/og-image.png"),
                width: 1800,
                height: 1600
            }
        ],
        locale: "en_US",
        type: "website"
    },
    icons: {
        icon: [
            {
                url: "/favicon/favicon-32x32.png"
            }
        ],
        apple: [
            {
                url: "/favicon/apple-touch-icon.png"
            }
        ]
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 9783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-neutral-50 border-t border-neutral-200",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-6xl mx-auto px-5 p-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "font-semibold text-2xl mb-10 lg:mb-0 lg:pr-4",
                children: [
                    "Sample website built with",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "underline",
                        href: "https://outstatic.com/",
                        children: "Outstatic"
                    }),
                    " ",
                    "and",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "underline",
                        href: "https://nextjs.org/",
                        children: "Next.js"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Layout.tsx


const Layout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 7204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ markdownToHtml)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8240);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6663);


async function markdownToHtml(markdown) {
    const result = await (0,remark__WEBPACK_IMPORTED_MODULE_0__/* .remark */ .j)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).process(markdown);
    return result.toString();
}


/***/ }),

/***/ 7669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ absoluteUrl)
/* harmony export */ });
function absoluteUrl(path) {
    return `${process.env?.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}${path}`;
}


/***/ }),

/***/ 3144:
/***/ (() => {



/***/ })

};
;