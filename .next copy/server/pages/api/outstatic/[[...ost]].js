"use strict";
(() => {
var exports = {};
exports.id = 201;
exports.ids = [201];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 6194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Foutstatic_2F_5B_5B_ost_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Foutstatic_2F_5B_5B_ost_5D_5D_tsx_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/outstatic/[[...ost]].tsx
var _ost_namespaceObject = {};
__webpack_require__.r(_ost_namespaceObject);
__webpack_require__.d(_ost_namespaceObject, {
  "default": () => (_ost_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: external "outstatic"
const external_outstatic_namespaceObject = require("outstatic");
;// CONCATENATED MODULE: ./src/pages/api/outstatic/[[...ost]].tsx

/* harmony default export */ const _ost_ = (external_outstatic_namespaceObject.OutstaticApi);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Foutstatic%2F%5B%5B...ost%5D%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Foutstatic%2F%5B%5B...ost%5D%5D.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Foutstatic_2F_5B_5B_ost_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Foutstatic_2F_5B_5B_ost_5D_5D_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_ost_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_ost_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/outstatic/[[...ost]]",
        pathname: "/api/outstatic/[[...ost]]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: _ost_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(6194)));
module.exports = __webpack_exports__;

})();