"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/store/store-wrapper */ \"./src/store/store-wrapper.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__]);\n_src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 57\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFnQztBQUVxQjtBQUVyRCxNQUFNRSxRQUFzQixDQUFDLEVBQUNDLFVBQVMsRUFBRUMsVUFBUyxFQUFDLGlCQUFLLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUVoRixpRUFBZUgsdUVBQWlCLENBQUNDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHAtdWkvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3NyYy9zdG9yZS9zdG9yZS13cmFwcGVyXCI7XG5cbmNvbnN0IE15QXBwOiBGQzxBcHBQcm9wcz4gPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkgPT4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../saga */ \"./src/store/saga.ts\");\n\n\nconst initialState = {\n    page: \"\"\n};\nfunction rootReducer(state = initialState, action) {\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n            return {\n                ...state,\n                ...action.payload\n            };\n        case _saga__WEBPACK_IMPORTED_MODULE_1__.SAGA_ACTION_SUCCESS:\n            return {\n                ...state,\n                page: action.data\n            };\n        default:\n            return state;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QztBQUNEO0FBTTVDLE1BQU1FLGVBQXNCO0lBQUNDLE1BQU07QUFBRTtBQUVyQyxTQUFTQyxZQUFZQyxRQUFRSCxZQUFZLEVBQUVJLE1BQWlCLEVBQUU7SUFDMUQsT0FBUUEsT0FBT0MsSUFBSTtRQUNmLEtBQUtQLHVEQUFPQTtZQUNSLE9BQU87Z0JBQUMsR0FBR0ssS0FBSztnQkFBRSxHQUFHQyxPQUFPRSxPQUFPO1lBQUE7UUFDdkMsS0FBS1Asc0RBQW1CQTtZQUNwQixPQUFPO2dCQUFDLEdBQUdJLEtBQUs7Z0JBQUVGLE1BQU1HLE9BQU9HLElBQUk7WUFBQTtRQUN2QztZQUNJLE9BQU9KO0lBQ2Y7QUFDSjtBQUVBLGlFQUFlRCxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRwLXVpLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzPzZiNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQge1NBR0FfQUNUSU9OX1NVQ0NFU1N9IGZyb20gXCIuLi9zYWdhXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIHBhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtwYWdlOiAnJ307XG5cbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9O1xuICAgICAgICBjYXNlIFNBR0FfQUNUSU9OX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYWdlOiBhY3Rpb24uZGF0YX07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJIWURSQVRFIiwiU0FHQV9BQ1RJT05fU1VDQ0VTUyIsImluaXRpYWxTdGF0ZSIsInBhZ2UiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/index.ts\n");

/***/ }),

/***/ "./src/store/saga.ts":
/*!***************************!*\
  !*** ./src/store/saga.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SAGA_ACTION\": () => (/* binding */ SAGA_ACTION),\n/* harmony export */   \"SAGA_ACTION_SUCCESS\": () => (/* binding */ SAGA_ACTION_SUCCESS),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SAGA_ACTION = \"SAGA_ACTION\";\nconst SAGA_ACTION_SUCCESS = `${SAGA_ACTION}_SUCCESS`;\nfunction* sagaAction() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(100);\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n        type: SAGA_ACTION_SUCCESS,\n        data: \"async text\"\n    });\n}\nfunction* rootSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(SAGA_ACTION, sagaAction);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootSaga);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2FnYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUVsRCxNQUFNRyxjQUFjLGNBQWM7QUFDbEMsTUFBTUMsc0JBQXNCLENBQUMsRUFBRUQsWUFBWSxRQUFRLENBQUMsQ0FBQztBQUU1RCxVQUFVRSxhQUFhO0lBQ25CLE1BQU1MLHlEQUFLQSxDQUFDO0lBQ1osTUFBTUMsdURBQUdBLENBQUM7UUFDTkssTUFBTUY7UUFDTkcsTUFBTTtJQUNWO0FBQ0o7QUFFQSxVQUFVQyxXQUFXO0lBQ2pCLE1BQU1OLDZEQUFTQSxDQUFDQyxhQUFhRTtBQUNqQztBQUVBLGlFQUFlRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRwLXVpLy4vc3JjL3N0b3JlL3NhZ2EudHM/ZTIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlbGF5LCBwdXQsIHRha2VFdmVyeX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuZXhwb3J0IGNvbnN0IFNBR0FfQUNUSU9OID0gJ1NBR0FfQUNUSU9OJztcbmV4cG9ydCBjb25zdCBTQUdBX0FDVElPTl9TVUNDRVNTID0gYCR7U0FHQV9BQ1RJT059X1NVQ0NFU1NgO1xuXG5mdW5jdGlvbiogc2FnYUFjdGlvbigpIHtcbiAgICB5aWVsZCBkZWxheSgxMDApO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6IFNBR0FfQUNUSU9OX1NVQ0NFU1MsXG4gICAgICAgIGRhdGE6ICdhc3luYyB0ZXh0JyxcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShTQUdBX0FDVElPTiwgc2FnYUFjdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhO1xuIl0sIm5hbWVzIjpbImRlbGF5IiwicHV0IiwidGFrZUV2ZXJ5IiwiU0FHQV9BQ1RJT04iLCJTQUdBX0FDVElPTl9TVUNDRVNTIiwic2FnYUFjdGlvbiIsInR5cGUiLCJkYXRhIiwicm9vdFNhZ2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/saga.ts\n");

/***/ }),

/***/ "./src/store/store-wrapper.ts":
/*!************************************!*\
  !*** ./src/store/store-wrapper.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saga */ \"./src/store/saga.ts\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_1__]);\nredux_saga__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst makeStore = (context)=>{\n    const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware));\n    store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(makeStore, {\n    debug: true\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUtd3JhcHBlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDSjtBQUN4QjtBQUNnQjtBQUNZO0FBTW5ELE1BQU1NLFlBQVksQ0FBQ0MsVUFBcUI7SUFDM0MsTUFBTUMsaUJBQWlCTixzREFBb0JBO0lBRTNDLE1BQU1PLFFBQVFULGtEQUFXQSxDQUFDSSxpREFBV0EsRUFBRUgsc0RBQWVBLENBQUNPO0lBRXREQyxNQUErQkMsUUFBUSxHQUFHRixlQUFlRyxHQUFHLENBQUNSLDZDQUFRQTtJQUV0RSxPQUFPTTtBQUNYLEVBQUU7QUFFSyxNQUFNRyxVQUFVUCxpRUFBYUEsQ0FBYUMsV0FBbUI7SUFBQ08sT0FBTyxJQUFJO0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcC11aS8uL3NyYy9zdG9yZS9zdG9yZS13cmFwcGVyLnRzP2U0YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBTdG9yZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7VGFza30gZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhJztcbmltcG9ydCByb290UmVkdWNlciwge1N0YXRlfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHtDb250ZXh0LCBjcmVhdGVXcmFwcGVyfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FnYVN0b3JlIGV4dGVuZHMgU3RvcmU8U3RhdGU+IHtcbiAgICBzYWdhVGFzazogVGFzaztcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0OiBDb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XG5cbiAgICAoc3RvcmUgYXMgdW5rbm93biBhcyBTYWdhU3RvcmUpLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcblxuICAgIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxTYWdhU3RvcmU+KChtYWtlU3RvcmUgYXMgYW55KSwge2RlYnVnOiB0cnVlfSk7XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwicm9vdFNhZ2EiLCJyb290UmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJtYWtlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store-wrapper.ts\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();