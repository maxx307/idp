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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHAtdWkvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzI1NGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwiY2VudGVyXCI6IFwiSG9tZV9jZW50ZXJfXzRCRmdDXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIixcblx0XCJ0aGlydGVlblwiOiBcIkhvbWVfdGhpcnRlZW5fX2NNSV9rXCIsXG5cdFwicm90YXRlXCI6IFwiSG9tZV9yb3RhdGVfX19fWHNJXCIsXG5cdFwiY29udGVudFwiOiBcIkhvbWVfY29udGVudF9fWnkwMlhcIixcblx0XCJ2ZXJjZWxMb2dvXCI6IFwiSG9tZV92ZXJjZWxMb2dvX19kdFNrOVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/store/store-wrapper */ \"./src/store/store-wrapper.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__]);\n_src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/index.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Hello\"\n                }, void 0, false, {\n                    fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/maksymvasylchenko/WEEEB/idp/packages/idp-ui/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst getServerSideProps = _src_store_store_wrapper__WEBPACK_IMPORTED_MODULE_2__.wrapper.getServerSideProps(async ({ store , req  })=>{\n    // Dispatch regular redux-saga action\n    store.dispatch(getProjectsWithPosts());\n    // Stop the saga\n    store.dispatch(END);\n    await store.sagaTask.toPromise();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ2tCO0FBQ0s7QUFHNUMsU0FBU0csT0FBTztJQUNyQixxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJQTs7a0NBQ0gsOERBQUNJO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFXWCxxRUFBVzswQkFDM0IsNEVBQUNZOzhCQUFHOzs7Ozs7Ozs7Ozs7O0FBSVgsQ0FBQztBQUVNLE1BQU1DLHFCQUFxQlosZ0ZBQTBCLENBQ3hELE9BQU8sRUFBQ2EsTUFBSyxFQUFFQyxJQUFHLEVBQUMsR0FBSztJQUNwQixxQ0FBcUM7SUFDckNELE1BQU1FLFFBQVEsQ0FBQ0M7SUFFZixnQkFBZ0I7SUFDaEJILE1BQU1FLFFBQVEsQ0FBQ0U7SUFDZixNQUFNSixNQUFNSyxRQUFRLENBQUNDLFNBQVM7QUFDbEMsR0FDRjtBQUVGLGlFQUFlbEIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcC11aS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7d3JhcHBlcn0gZnJvbSBcIi4uL3NyYy9zdG9yZS9zdG9yZS13cmFwcGVyXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICA8aDE+SGVsbG88L2gxPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbiAgICBhc3luYyAoe3N0b3JlLCByZXF9KSA9PiB7XG4gICAgICAgIC8vIERpc3BhdGNoIHJlZ3VsYXIgcmVkdXgtc2FnYSBhY3Rpb25cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goZ2V0UHJvamVjdHNXaXRoUG9zdHMoKSk7XG5cbiAgICAgICAgLy8gU3RvcCB0aGUgc2FnYVxuICAgICAgICBzdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgICAgICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIndyYXBwZXIiLCJIb21lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImdldFNlcnZlclNpZGVQcm9wcyIsInN0b3JlIiwicmVxIiwiZGlzcGF0Y2giLCJnZXRQcm9qZWN0c1dpdGhQb3N0cyIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../saga */ \"./src/store/saga.ts\");\n\n\nconst initialState = {\n    page: \"\"\n};\nfunction rootReducer(state = initialState, action) {\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n            return {\n                ...state,\n                ...action.payload\n            };\n        case _saga__WEBPACK_IMPORTED_MODULE_1__.SAGA_ACTION_SUCCESS:\n            return {\n                ...state,\n                page: action.data\n            };\n        default:\n            return state;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QztBQUNEO0FBTTVDLE1BQU1FLGVBQXNCO0lBQUNDLE1BQU07QUFBRTtBQUVyQyxTQUFTQyxZQUFZQyxRQUFRSCxZQUFZLEVBQUVJLE1BQWlCLEVBQUU7SUFDMUQsT0FBUUEsT0FBT0MsSUFBSTtRQUNmLEtBQUtQLHVEQUFPQTtZQUNSLE9BQU87Z0JBQUMsR0FBR0ssS0FBSztnQkFBRSxHQUFHQyxPQUFPRSxPQUFPO1lBQUE7UUFDdkMsS0FBS1Asc0RBQW1CQTtZQUNwQixPQUFPO2dCQUFDLEdBQUdJLEtBQUs7Z0JBQUVGLE1BQU1HLE9BQU9HLElBQUk7WUFBQTtRQUN2QztZQUNJLE9BQU9KO0lBQ2Y7QUFDSjtBQUVBLGlFQUFlRCxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRwLXVpLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzPzZiNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQge1NBR0FfQUNUSU9OX1NVQ0NFU1N9IGZyb20gXCIuLi9zYWdhXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIHBhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtwYWdlOiAnJ307XG5cbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9O1xuICAgICAgICBjYXNlIFNBR0FfQUNUSU9OX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYWdlOiBhY3Rpb24uZGF0YX07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJIWURSQVRFIiwiU0FHQV9BQ1RJT05fU1VDQ0VTUyIsImluaXRpYWxTdGF0ZSIsInBhZ2UiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/index.ts\n");

/***/ }),

/***/ "./src/store/saga.ts":
/*!***************************!*\
  !*** ./src/store/saga.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SAGA_ACTION\": () => (/* binding */ SAGA_ACTION),\n/* harmony export */   \"SAGA_ACTION_SUCCESS\": () => (/* binding */ SAGA_ACTION_SUCCESS),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SAGA_ACTION = \"SAGA_ACTION\";\nconst SAGA_ACTION_SUCCESS = `${SAGA_ACTION}_SUCCESS`;\nfunction* sagaAction() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.delay)(100);\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n        type: SAGA_ACTION_SUCCESS,\n        data: \"async text\"\n    });\n}\nfunction* rootSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(SAGA_ACTION, sagaAction);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootSaga);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2FnYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUVsRCxNQUFNRyxjQUFjLGNBQWM7QUFDbEMsTUFBTUMsc0JBQXNCLENBQUMsRUFBRUQsWUFBWSxRQUFRLENBQUMsQ0FBQztBQUU1RCxVQUFVRSxhQUFhO0lBQ25CLE1BQU1MLHlEQUFLQSxDQUFDO0lBQ1osTUFBTUMsdURBQUdBLENBQUM7UUFDTkssTUFBTUY7UUFDTkcsTUFBTTtJQUNWO0FBQ0o7QUFFQSxVQUFVQyxXQUFXO0lBQ2pCLE1BQU1OLDZEQUFTQSxDQUFDQyxhQUFhRTtBQUNqQztBQUVBLGlFQUFlRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRwLXVpLy4vc3JjL3N0b3JlL3NhZ2EudHM/ZTIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlbGF5LCBwdXQsIHRha2VFdmVyeX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuZXhwb3J0IGNvbnN0IFNBR0FfQUNUSU9OID0gJ1NBR0FfQUNUSU9OJztcbmV4cG9ydCBjb25zdCBTQUdBX0FDVElPTl9TVUNDRVNTID0gYCR7U0FHQV9BQ1RJT059X1NVQ0NFU1NgO1xuXG5mdW5jdGlvbiogc2FnYUFjdGlvbigpIHtcbiAgICB5aWVsZCBkZWxheSgxMDApO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6IFNBR0FfQUNUSU9OX1NVQ0NFU1MsXG4gICAgICAgIGRhdGE6ICdhc3luYyB0ZXh0JyxcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShTQUdBX0FDVElPTiwgc2FnYUFjdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhO1xuIl0sIm5hbWVzIjpbImRlbGF5IiwicHV0IiwidGFrZUV2ZXJ5IiwiU0FHQV9BQ1RJT04iLCJTQUdBX0FDVElPTl9TVUNDRVNTIiwic2FnYUFjdGlvbiIsInR5cGUiLCJkYXRhIiwicm9vdFNhZ2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/saga.ts\n");

/***/ }),

/***/ "./src/store/store-wrapper.ts":
/*!************************************!*\
  !*** ./src/store/store-wrapper.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saga */ \"./src/store/saga.ts\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_1__]);\nredux_saga__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst makeStore = (context)=>{\n    const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware));\n    store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(makeStore, {\n    debug: true\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUtd3JhcHBlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDSjtBQUN4QjtBQUNnQjtBQUNZO0FBTW5ELE1BQU1NLFlBQVksQ0FBQ0MsVUFBcUI7SUFDM0MsTUFBTUMsaUJBQWlCTixzREFBb0JBO0lBRTNDLE1BQU1PLFFBQVFULGtEQUFXQSxDQUFDSSxpREFBV0EsRUFBRUgsc0RBQWVBLENBQUNPO0lBRXREQyxNQUErQkMsUUFBUSxHQUFHRixlQUFlRyxHQUFHLENBQUNSLDZDQUFRQTtJQUV0RSxPQUFPTTtBQUNYLEVBQUU7QUFFSyxNQUFNRyxVQUFVUCxpRUFBYUEsQ0FBYUMsV0FBbUI7SUFBQ08sT0FBTyxJQUFJO0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcC11aS8uL3NyYy9zdG9yZS9zdG9yZS13cmFwcGVyLnRzP2U0YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBTdG9yZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7VGFza30gZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhJztcbmltcG9ydCByb290UmVkdWNlciwge1N0YXRlfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHtDb250ZXh0LCBjcmVhdGVXcmFwcGVyfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FnYVN0b3JlIGV4dGVuZHMgU3RvcmU8U3RhdGU+IHtcbiAgICBzYWdhVGFzazogVGFzaztcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0OiBDb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XG5cbiAgICAoc3RvcmUgYXMgdW5rbm93biBhcyBTYWdhU3RvcmUpLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcblxuICAgIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcjxTYWdhU3RvcmU+KChtYWtlU3RvcmUgYXMgYW55KSwge2RlYnVnOiB0cnVlfSk7XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwicm9vdFNhZ2EiLCJyb290UmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJtYWtlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store-wrapper.ts\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();