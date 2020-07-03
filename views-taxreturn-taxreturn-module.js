(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-taxreturn-taxreturn-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/taxreturn/taxreturn.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/taxreturn/taxreturn.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n</div>\n");

/***/ }),

/***/ "./src/app/views/taxreturn/taxreturn-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/taxreturn/taxreturn-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TaxreturnRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxreturnRoutingModule", function() { return TaxreturnRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taxreturn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxreturn.component */ "./src/app/views/taxreturn/taxreturn.component.ts");




var routes = [
    {
        path: '',
        component: _taxreturn_component__WEBPACK_IMPORTED_MODULE_3__["TaxreturnComponent"],
        data: {
            title: 'Taxreturn'
        }
    }
];
var TaxreturnRoutingModule = /** @class */ (function () {
    function TaxreturnRoutingModule() {
    }
    TaxreturnRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TaxreturnRoutingModule);
    return TaxreturnRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/taxreturn/taxreturn.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/taxreturn/taxreturn.component.ts ***!
  \********************************************************/
/*! exports provided: TaxreturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxreturnComponent", function() { return TaxreturnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaxreturnComponent = /** @class */ (function () {
    function TaxreturnComponent() {
    }
    TaxreturnComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
    };
    TaxreturnComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./taxreturn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/taxreturn/taxreturn.component.html")).default
        })
    ], TaxreturnComponent);
    return TaxreturnComponent;
}());



/***/ }),

/***/ "./src/app/views/taxreturn/taxreturn.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/taxreturn/taxreturn.module.ts ***!
  \*****************************************************/
/*! exports provided: TaxreturnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxreturnModule", function() { return TaxreturnModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _taxreturn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxreturn.component */ "./src/app/views/taxreturn/taxreturn.component.ts");
/* harmony import */ var _taxreturn_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taxreturn-routing.module */ "./src/app/views/taxreturn/taxreturn-routing.module.ts");








var TaxreturnModule = /** @class */ (function () {
    function TaxreturnModule() {
    }
    TaxreturnModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _taxreturn_routing_module__WEBPACK_IMPORTED_MODULE_7__["TaxreturnRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_taxreturn_component__WEBPACK_IMPORTED_MODULE_6__["TaxreturnComponent"]]
        })
    ], TaxreturnModule);
    return TaxreturnModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-taxreturn-taxreturn-module.js.map