(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-accounting-accounting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/accounting/accounting.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/accounting/accounting.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n</div>\n");

/***/ }),

/***/ "./src/app/views/accounting/accounting-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/accounting/accounting-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AccountingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingRoutingModule", function() { return AccountingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounting.component */ "./src/app/views/accounting/accounting.component.ts");




var routes = [
    {
        path: '',
        component: _accounting_component__WEBPACK_IMPORTED_MODULE_3__["AccountingComponent"],
        data: {
            title: 'Accounting'
        }
    }
];
var AccountingRoutingModule = /** @class */ (function () {
    function AccountingRoutingModule() {
    }
    AccountingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountingRoutingModule);
    return AccountingRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/accounting/accounting.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/accounting/accounting.component.ts ***!
  \**********************************************************/
/*! exports provided: AccountingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingComponent", function() { return AccountingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountingComponent = /** @class */ (function () {
    function AccountingComponent() {
    }
    AccountingComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
    };
    AccountingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accounting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/accounting/accounting.component.html")).default
        })
    ], AccountingComponent);
    return AccountingComponent;
}());



/***/ }),

/***/ "./src/app/views/accounting/accounting.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/accounting/accounting.module.ts ***!
  \*******************************************************/
/*! exports provided: AccountingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingModule", function() { return AccountingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _accounting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accounting.component */ "./src/app/views/accounting/accounting.component.ts");
/* harmony import */ var _accounting_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accounting-routing.module */ "./src/app/views/accounting/accounting-routing.module.ts");








var AccountingModule = /** @class */ (function () {
    function AccountingModule() {
    }
    AccountingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _accounting_routing_module__WEBPACK_IMPORTED_MODULE_7__["AccountingRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_accounting_component__WEBPACK_IMPORTED_MODULE_6__["AccountingComponent"]]
        })
    ], AccountingModule);
    return AccountingModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-accounting-accounting-module.js.map