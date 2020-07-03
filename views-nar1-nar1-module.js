(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-nar1-nar1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/nar1/nar1.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/nar1/nar1.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n</div>\n");

/***/ }),

/***/ "./src/app/views/nar1/nar1-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/nar1/nar1-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Nar1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nar1RoutingModule", function() { return Nar1RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nar1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nar1.component */ "./src/app/views/nar1/nar1.component.ts");




var routes = [
    {
        path: '',
        component: _nar1_component__WEBPACK_IMPORTED_MODULE_3__["Nar1Component"],
        data: {
            title: 'Nar1'
        }
    }
];
var Nar1RoutingModule = /** @class */ (function () {
    function Nar1RoutingModule() {
    }
    Nar1RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Nar1RoutingModule);
    return Nar1RoutingModule;
}());



/***/ }),

/***/ "./src/app/views/nar1/nar1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/nar1/nar1.component.ts ***!
  \**********************************************/
/*! exports provided: Nar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nar1Component", function() { return Nar1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Nar1Component = /** @class */ (function () {
    function Nar1Component() {
    }
    Nar1Component.prototype.ngOnInit = function () {
        // generate random values for mainChart
    };
    Nar1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nar1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/nar1/nar1.component.html")).default
        })
    ], Nar1Component);
    return Nar1Component;
}());



/***/ }),

/***/ "./src/app/views/nar1/nar1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/nar1/nar1.module.ts ***!
  \*******************************************/
/*! exports provided: Nar1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nar1Module", function() { return Nar1Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _nar1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nar1.component */ "./src/app/views/nar1/nar1.component.ts");
/* harmony import */ var _nar1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nar1-routing.module */ "./src/app/views/nar1/nar1-routing.module.ts");








var Nar1Module = /** @class */ (function () {
    function Nar1Module() {
    }
    Nar1Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _nar1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Nar1RoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_nar1_component__WEBPACK_IMPORTED_MODULE_6__["Nar1Component"]]
        })
    ], Nar1Module);
    return Nar1Module;
}());



/***/ })

}]);
//# sourceMappingURL=views-nar1-nar1-module.js.map