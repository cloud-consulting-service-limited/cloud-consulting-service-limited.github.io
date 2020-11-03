(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-docio-docio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/docio/docio.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/docio/docio.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n</div>\n");

/***/ }),

/***/ "./src/app/views/docio/docio-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/docio/docio-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DocioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocioRoutingModule", function() { return DocioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _docio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docio.component */ "./src/app/views/docio/docio.component.ts");




var routes = [
    {
        path: '',
        component: _docio_component__WEBPACK_IMPORTED_MODULE_3__["DocioComponent"],
        data: {
            title: 'Docio'
        }
    }
];
var DocioRoutingModule = /** @class */ (function () {
    function DocioRoutingModule() {
    }
    DocioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DocioRoutingModule);
    return DocioRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/docio/docio.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/docio/docio.component.ts ***!
  \************************************************/
/*! exports provided: DocioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocioComponent", function() { return DocioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocioComponent = /** @class */ (function () {
    function DocioComponent() {
    }
    DocioComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
    };
    DocioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./docio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/docio/docio.component.html")).default
        })
    ], DocioComponent);
    return DocioComponent;
}());



/***/ }),

/***/ "./src/app/views/docio/docio.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/docio/docio.module.ts ***!
  \*********************************************/
/*! exports provided: DocioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocioModule", function() { return DocioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _docio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docio.component */ "./src/app/views/docio/docio.component.ts");
/* harmony import */ var _docio_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./docio-routing.module */ "./src/app/views/docio/docio-routing.module.ts");








var DocioModule = /** @class */ (function () {
    function DocioModule() {
    }
    DocioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _docio_routing_module__WEBPACK_IMPORTED_MODULE_7__["DocioRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_docio_component__WEBPACK_IMPORTED_MODULE_6__["DocioComponent"]]
        })
    ], DocioModule);
    return DocioModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-docio-docio-module.js.map