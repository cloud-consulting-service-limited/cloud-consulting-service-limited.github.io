(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-othercs-othercs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/othercs/othercs.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/othercs/othercs.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n</div>\n");

/***/ }),

/***/ "./src/app/views/othercs/othercs-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/othercs/othercs-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OthercsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthercsRoutingModule", function() { return OthercsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _othercs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./othercs.component */ "./src/app/views/othercs/othercs.component.ts");




var routes = [
    {
        path: '',
        component: _othercs_component__WEBPACK_IMPORTED_MODULE_3__["OthercsComponent"],
        data: {
            title: 'Othercs'
        }
    }
];
var OthercsRoutingModule = /** @class */ (function () {
    function OthercsRoutingModule() {
    }
    OthercsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OthercsRoutingModule);
    return OthercsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/othercs/othercs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/othercs/othercs.component.ts ***!
  \****************************************************/
/*! exports provided: OthercsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthercsComponent", function() { return OthercsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OthercsComponent = /** @class */ (function () {
    function OthercsComponent() {
    }
    OthercsComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
    };
    OthercsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./othercs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/othercs/othercs.component.html")).default
        })
    ], OthercsComponent);
    return OthercsComponent;
}());



/***/ }),

/***/ "./src/app/views/othercs/othercs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/othercs/othercs.module.ts ***!
  \*************************************************/
/*! exports provided: OthercsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthercsModule", function() { return OthercsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _othercs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./othercs.component */ "./src/app/views/othercs/othercs.component.ts");
/* harmony import */ var _othercs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./othercs-routing.module */ "./src/app/views/othercs/othercs-routing.module.ts");








var OthercsModule = /** @class */ (function () {
    function OthercsModule() {
    }
    OthercsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _othercs_routing_module__WEBPACK_IMPORTED_MODULE_7__["OthercsRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_othercs_component__WEBPACK_IMPORTED_MODULE_6__["OthercsComponent"]]
        })
    ], OthercsModule);
    return OthercsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-othercs-othercs-module.js.map