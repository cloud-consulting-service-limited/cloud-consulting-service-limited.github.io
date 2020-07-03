(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-audit-audit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n</div>\n");

/***/ }),

/***/ "./src/app/views/audit/audit-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/audit/audit-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditRoutingModule", function() { return AuditRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _audit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audit.component */ "./src/app/views/audit/audit.component.ts");




var routes = [
    {
        path: '',
        component: _audit_component__WEBPACK_IMPORTED_MODULE_3__["AuditComponent"],
        data: {
            title: 'Audit'
        }
    }
];
var AuditRoutingModule = /** @class */ (function () {
    function AuditRoutingModule() {
    }
    AuditRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuditRoutingModule);
    return AuditRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/audit/audit.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/audit/audit.component.ts ***!
  \************************************************/
/*! exports provided: AuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditComponent", function() { return AuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuditComponent = /** @class */ (function () {
    function AuditComponent() {
    }
    AuditComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
    };
    AuditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./audit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html")).default
        })
    ], AuditComponent);
    return AuditComponent;
}());



/***/ }),

/***/ "./src/app/views/audit/audit.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/audit/audit.module.ts ***!
  \*********************************************/
/*! exports provided: AuditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditModule", function() { return AuditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _audit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audit.component */ "./src/app/views/audit/audit.component.ts");
/* harmony import */ var _audit_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audit-routing.module */ "./src/app/views/audit/audit-routing.module.ts");








var AuditModule = /** @class */ (function () {
    function AuditModule() {
    }
    AuditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _audit_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuditRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_audit_component__WEBPACK_IMPORTED_MODULE_6__["AuditComponent"]]
        })
    ], AuditModule);
    return AuditModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-audit-audit-module.js.map