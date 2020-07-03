(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-jobs-jobs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/jobs/jobs.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/jobs/jobs.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<small>\n</small>\n    <div>\n       <ngx-datatable\n         class=\"bootstrap\"\n         [headerHeight]=\"50\"\n         [limit]=\"100\"\n         [columnMode]=\"'force'\"\n         [footerHeight]=\"50\"\n         [rowHeight]=\"'auto'\"\n         [rows]=\"rows\"\n         [scrollbarH]=\"true\">\n         <ngx-datatable-column *ngFor=\"let label of labels\" [name]=\"label.name\" [prop]=\"label.prop\" [sortable]=\"false\">\n           <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n             <span\n               title=\"double Click here \"\n               (dblclick)=\"editCell(label.prop, rowIndex)\"\n               *ngIf=\"!editing[rowIndex + '-' + label.prop]\"\n               class=\"container-fluid\"\n               >\n                 {{ value }}\n            </span>\n            <input\n              autofocus\n              (blur)=\"updateValue($event, label.prop, rowIndex)\"\n              (keyup.enter)=\"updateValue($event, label.prop, rowIndex)\"\n              *ngIf=\"editing[rowIndex+ '-' + label.prop]\"\n              [type]=\"label.inputType\"\n              class=\"form-control\"\n              [value]=\"value\"\n            />\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <button  (click)='deleteRow(rowIndex)'>remove</button>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-footer>\n          <ng-template \n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n              <span *ngIf=\"selectedMessage\">\n                {{selectedCount.toLocaleString()}} {{selectedMessage}} / \n              </span>\n              {{rowCount.toLocaleString()}} {{totalMessage}}\n              <a href=\"javascript:void(0)\" (click)=\"add()\" class=\"float-right\">Add a new column</a>\n            </div>\n          </ng-template>\n        </ngx-datatable-footer>\n      </ngx-datatable>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/jobs/jobs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/jobs/jobs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JobsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsRoutingModule", function() { return JobsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs.component */ "./src/app/views/jobs/jobs.component.ts");




var routes = [
    {
        path: '',
        component: _jobs_component__WEBPACK_IMPORTED_MODULE_3__["JobsComponent"],
        data: {
            title: 'Jobs'
        }
    }
];
var JobsRoutingModule = /** @class */ (function () {
    function JobsRoutingModule() {
    }
    JobsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], JobsRoutingModule);
    return JobsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/jobs/jobs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/jobs/jobs.component.ts ***!
  \**********************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");



var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.labels = [{ "name": "Name", "prop": "name" }, { "name": "Gender", "prop": "gender" }, { "name": "Age", "prop": "age" }];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    JobsComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    // call to update cell value
    JobsComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
    };
    // call on double click in cell
    JobsComponent.prototype.editCell = function (cell, rowIndex) {
        this.editing = {};
        this.editing[rowIndex + '-' + cell] = true;
    };
    //  updateValue(event, cell, rowIndex) {
    //    console.log('inline editing rowIndex', rowIndex);
    //    this.editing[rowIndex + '-' + cell] = false;
    //    this.rows[rowIndex][cell] = event.target.value;
    //    this.rows = [...this.rows];
    //    console.log('UPDATED!', this.rows[rowIndex][cell]);
    //  }
    JobsComponent.prototype.add = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        temp.push({
            "name": "Double Click to Edit",
            "gender": "Double Click to Edit",
            "company": "Double Click to Edit",
            "age": "Double Click to Edit"
        });
        this.rows = temp;
    };
    JobsComponent.prototype.deleteRow = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
        temp.splice(rowIndex, 1);
        this.rows = temp;
    };
    JobsComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
    };
    JobsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/jobs/jobs.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/views/jobs/jobs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/jobs/jobs.module.ts ***!
  \*******************************************/
/*! exports provided: JobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _jobs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs.component */ "./src/app/views/jobs/jobs.component.ts");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jobs-routing.module */ "./src/app/views/jobs/jobs-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");










var JobsModule = /** @class */ (function () {
    function JobsModule() {
    }
    JobsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _jobs_routing_module__WEBPACK_IMPORTED_MODULE_8__["JobsRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_jobs_component__WEBPACK_IMPORTED_MODULE_7__["JobsComponent"]]
        })
    ], JobsModule);
    return JobsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-jobs-jobs-module.js.map