(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-audit-audit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">Audit</h1>\n  <div class=\"input-group input-group-lg\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"basic-addon1\">For Year:</span>\n    </div>\n    <input type=\"text\"\n    placeholder=\"Datepicker\"\n    class=\"form-control\"\n    minMode=\"year\"\n    [bsConfig]=\"{ dateInputFormat: 'YYYY' }\"\n    [(ngModel)]=\"currentYear\"\n    (ngModelChange)=\"yearChange()\"\n    bsDatepicker>\n  </div>\n  <hr/>\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRows\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeaders\" [name]=\"label.name\" [prop]=\"label.prop\" [sortable]=\"true\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        {{ value }}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)='continue(rowIndex)'>Continue</button>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n  <hr/>\n  <br>\n  <br>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Company Name</label>\n    <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\n      <h5>{{model[\"Company Name\"]}} </h5>\n    </ng-template>\n    <input [(ngModel)]=\"selected\" [typeahead]=\"accountList\" typeaheadOptionField=\"Company Name\" [typeaheadMinLength]=\"0\"\n      (ngModelChange)=\"typeaheadNoResults($event)\" [typeaheadItemTemplate]=\"customItemTemplate\" class=\"form-control\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\"> Create account only if it is not exist</small>\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"!noResult\">Company Already Exist </div>\n  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!noResult\" [routerLink]=\"['/audit','coinfo',selected,currentYearString]\"\n    [hidden]=\"!selected || !noResult\">Start New Audit</button>\n  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"noResult\" (click)='continue(selectedIndex)'\n    [hidden]=\"!selected || noResult\">Contine Audit Process for {{selected}}</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditCoInfo.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditCoInfo.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"basic-addon3\">Co Name</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\" value=\"{{ id }}\" readonly />\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"change-of-name\">Change of name</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Change of name\" aria-label=\"Change of Name\"\n      aria-describedby=\"Change of name\" [(ngModel)]=\"accountDetail['change-of-name']\" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"older-name\">Older name</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Older Name\" aria-label=\"Older name\"\n      aria-describedby=\"Older name\" [(ngModel)]=\"accountDetail['older-name']\" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"date-of-name-change\">Date of name change(i.e. 15 Mar 2019)</span>\n    </div>\n    <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"accountDetail['date-of-name-change'] \"\n      bsDatepicker [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"limited-by-shares-or-guarantee\">Limited by shares or guarantee</span>\n    </div>\n    <select class=\"custom-select\" id=\"limited-by-shares-or-guarantee-input\"\n      [(ngModel)]=\"accountDetail['limited-by-shares-or-gurantee']\" [disabled]=\"isReadOnly\" [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>Limited by share</option>\n      <option value=\"2\">Limited by guarantee</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"financial-reporting\">Financial reporting</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Financial reporting\" aria-label=\"Financial reporting\"\n      aria-describedby=\"Financial reporting\" [(ngModel)]=\"accountDetail['financial-reporting']\"\n      [disabled]=\"isReadOnly\" />\n  </div>\n\n  <label for=\"basic-url\">Directors</label>\n\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRows\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeaders\" [name]=\"label.name\" [prop]=\"label.prop\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCell(label.prop, rowIndex)\"\n          *ngIf=\"!editing[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValue($event, label.prop, rowIndex)\" *ngIf=\"editing[rowIndex + '-' + label.prop]\"\n          [type]=\"label.inputType\" class=\"form-control\" [value]=\"value\" [disabled]=\"isReadOnly\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRow(rowIndex)\" *ngIf=\"!isReadOnly\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"add()\" class=\"float-right\" *ngIf=\"!isReadOnly\">Add a new column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n  </ngx-datatable>\n  <hr />\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"principal-activities\">Principal activities</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Principal activities\" aria-label=\"Principal activities\"\n      aria-describedby=\"Principal activities\" [(ngModel)]=\"accountDetail['financial-activities']\"\n      [disabled]=\"isReadOnly\">\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"director-appointment-clause\">Director- Appointment clause</span>\n    </div>\n    <select class=\"custom-select\" id=\"director-appointment-clause-input\"\n      [(ngModel)]=\"accountDetail['director-appointment-clause']\" [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>Retired and eligible</option>\n      <option value=\"2\">No provision</option>\n      <option value=\"3\">Unlimited</option>\n      <option value=\"4\">re-elected</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"permitted-indemnity\">Permitted Indemnity</span>\n    </div>\n    <select class=\"custom-select\" id=\"permitted-indemnity-input\" [(ngModel)]=\"accountDetail['permitted-indemnity']\"\n      [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"nature-of-income\">Nature of income</span>\n    </div>\n    <select class=\"custom-select\" id=\"nature-of-income-input\" [(ngModel)]=\"accountDetail['nature-of-income']\"\n      [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>Sales</option>\n      <option value=\"2\">Services</option>\n      <option value=\"3\">No income</option>\n      <option value=\"4\">Rental</option>\n      <option value=\"5\">Dormant</option>\n      <option value=\"6\">Donation and divident income</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"offshore\">Offshore</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"Offshore\" aria-describedby=\"Offshore\"\n      [(ngModel)]=\"accountDetail['offshore']\" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"last-year-is-period-or-first-incop\">Last year is period or first incop</span>\n    </div>\n    <select class=\"custom-select\" id=\"last-year-is-period-or-first-incop-input\"\n      [(ngModel)]=\"accountDetail['last-year-is-period-or-first-incop']\" [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"first-incorp-date\">first incorp date (eg 15 Mar 17)</span>\n    </div>\n    <input type=\"text\" placeholder=\"\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker\n      [(ngModel)]=\"accountDetail['first-incorp-date'] \" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"first-incorporated\">First incorporated?</span>\n    </div>\n    <select class=\"custom-select\" id=\"first-incorporated-input\" [(ngModel)]=\"accountDetail['first-incorporated']\"\n      [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"first-sme-frs\">First SME FRS?</span>\n    </div>\n    <select class=\"custom-select\" id=\"first-sme-frs-input\" [(ngModel)]=\"accountDetail['first-sme-frs']\"\n      [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"input-this-year-ye\">Input this year YE here (eg 15 Mar 17)</span>\n    </div>\n    <input type=\"text\" placeholder=\"\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker\n      [(ngModel)]=\"accountDetail['input-this-year-ye'] \" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"currenccy\">Currency</span>\n    </div>\n    <select class=\"custom-select\" id=\"currency-input\" [(ngModel)]=\"accountDetail['currency']\" [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>HK$</option>\n      <option value=\"2\">US$</option>\n      <option value=\"3\">CAD</option>\n      <option value=\"4\">EUR</option>\n      <option value=\"5\">AUD</option>\n      <option value=\"6\">GBP</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"type-of-co\">Type of Co</span>\n    </div>\n    <select class=\"custom-select\" id=\"type-of-co-input\" [(ngModel)]=\"accountDetail['type-of-co']\"\n      [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>Company</option>\n      <option value=\"2\">Association</option>\n      <option value=\"3\">Group</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"no-shares\">No. shares</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"No. shares\" aria-describedby=\"No. shares\"\n      [(ngModel)]=\"accountDetail['no-shares']\" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"ro\">RO</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"RO\" aria-describedby=\"RO\"\n      [(ngModel)]=\"accountDetail['ro']\" [disabled]=\"isReadOnly\" />\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"any-holding-co\">Any holding co</span>\n    </div>\n    <select class=\"custom-select\" id=\"any-holding-co-input\" [(ngModel)]=\"accountDetail['any-holding-co']\"\n      [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"any-immediate-co\">Any immediate co</span>\n    </div>\n    <select class=\"custom-select\" id=\"any-immediate-co-input\" [(ngModel)]=\"accountDetail['any-immediate-co']\"\n      [disabled]=\"isReadOnly\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n  <hr />\n  <label>Sub</label>\n  <ngx-datatable class=\" bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsSub\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeadersSub\" [name]=\"label.name\" [prop]=\"label.prop\"\n      [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCellSub(label.prop, rowIndex)\"\n          *ngIf=\"!editingSub[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValueSub($event, label.prop, rowIndex)\" *ngIf=\"editingSub[rowIndex + '-' + label.prop]\"\n          [type]=\"label.inputType\" class=\"form-control\" [value]=\"value\" [disabled]=\"isReadOnly\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRowSub(rowIndex)\" *ngIf=\"!isReadOnly\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"addSub()\" class=\"float-right\" *ngIf=\"!isReadOnly\">Add a new column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n  </ngx-datatable>\n  <hr />\n  <label>Asso</label>\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsAsso\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeadersAsso\" [name]=\"label.name\" [prop]=\"label.prop\"\n      [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCellAsso(label.prop, rowIndex)\"\n          *ngIf=\"!editingAsso[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValueAsso($event, label.prop, rowIndex)\" *ngIf=\"editingAsso[rowIndex + '-' + label.prop]\"\n          [type]=\"label.inputType\" class=\"form-control\" [value]=\"value\" [disabled]=\"isReadOnly\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRowAsso(rowIndex)\" *ngIf=\"!isReadOnly\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"addAsso()\" class=\"float-right\" *ngIf=\"!isReadOnly\">Add a new column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n  </ngx-datatable>\n  <hr />\n  <label>Shareholders</label>\n\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsShareHolder\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeadersShareHolder\" [name]=\"label.name\" [prop]=\"label.prop\"\n      [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCellShareHolder(label.prop, rowIndex)\"\n          *ngIf=\"!editingShareHolder[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValueShareHolder($event, label.prop, rowIndex)\"\n          *ngIf=\"editingShareHolder[rowIndex + '-' + label.prop]\" [type]=\"label.inputType\" class=\"form-control\"\n          [value]=\"value\" [disabled]=\"isReadOnly\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRowShareHolder(rowIndex)\" *ngIf=\"!isReadOnly\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"addShareHolder()\" class=\"float-right\" *ngIf=\"!isReadOnly\">Add a new\n            column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n  </ngx-datatable>\n  <hr />\n  <label>Amount due from (to) related companies</label>\n\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsAmountdueCo\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeadersAmountdueCo\" [name]=\"label.name\" [prop]=\"label.prop\"\n      [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCellAmountdueCo(label.prop, rowIndex)\"\n          *ngIf=\"!editingAmountdueCo[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValueAmountdueCo($event, label.prop, rowIndex)\"\n          *ngIf=\"editingAmountdueCo[rowIndex + '-' + label.prop]\" [type]=\"label.inputType\" class=\"form-control\"\n          [value]=\"value\" [disabled]=\"isReadOnly\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRowAmountdueCo(rowIndex)\" *ngIf=\"!isReadOnly\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"addAmountdueCo()\" class=\"float-right\" *ngIf=\"!isReadOnly\">Add a new\n            column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n  </ngx-datatable>\n  <hr />\n\n  <label>Amount due from (to) fellow subsidiaries</label>\n\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsAmountdueSub\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeadersAmountdueSub\" [name]=\"label.name\" [prop]=\"label.prop\"\n      [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCellAmountdueSub(label.prop, rowIndex)\"\n          *ngIf=\"!editingAmountdueSub[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValueAmountdueSub($event, label.prop, rowIndex)\"\n          *ngIf=\"editingAmountdueSub[rowIndex + '-' + label.prop]\" [type]=\"label.inputType\" class=\"form-control\"\n          [value]=\"value\" [disabled]=\"isReadOnly\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRowAmountdueSub(rowIndex)\" *ngIf=\"!isReadOnly\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"addAmountdueSub()\" class=\"float-right\" *ngIf=\"!isReadOnly\">Add a new\n            column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n  </ngx-datatable>\n\n  <hr />\n  <button type=\"button\" class=\"btn btn-primary btn-lg float-left\" (click)=\"edit()\" *ngIf=\"isReadOnly\">\n    Modify CO Info\n  </button>\n  <button type=\"button\" class=\"btn btn-primary btn-lg float-right\" (click)=\"save()\">\n    Confirm and Next\n  </button>\n  <br />\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditPreAuditS1.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditPreAuditS1.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">Pre Audit Docuemnt (S1)</h1>\n  <hr />\n  <accordion>\n    <accordion-group heading=\"Customer Document Upload History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"auditInfo['documentsUploaded']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{rowIndex+1}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"File Type\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">File Type</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"File Name\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">File Name</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Uploaded Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\"></label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n\n    <accordion-group [heading]=\"documentContentHeader\" [isOpen]=\"true\">\n\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">English</label>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">中文</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmail4\">Ask</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmail4\">Uploaded</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputEmail4\">Checked</label>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <hr />\n          </div>\n        </div>\n        <div class=\"form-row\" *ngFor=\"let item of documentRequestList ; let i = index\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">{{item[\"English\"]}}</label>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">{{item[\"Chinese\"]}}</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <input type=\"checkbox\" [(ngModel)]=\"this.documentRequestList[i]['Asked']\" />\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label *ngIf=\"this.documentRequestList[i]['Uploaded']\"> &#10004; </label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <input type=\"checkbox\" [(ngModel)]=\"this.documentRequestList[i]['Checked']\" />\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"requestDocument()\" *ngIf=\"!this.document['sentDate']\"> Send Document\n          Reques to Client</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"requestDocument()\" *ngIf=\"this.document['sentDate']\"> Resend\n          Additional Document Request</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"confirmDocument()\"\n          *ngIf=\"this.document['sentDate']\">Documents Confirmed</button>\n\n        <ng-template #documentSentMsgTemplate>\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Document Sent</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Document Sent\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">OK</button>\n          </div>\n        </ng-template>\n\n      </div>\n    </accordion-group>\n\n    <accordion-group heading=\"Company Info\" [isOpen]=\"false\">\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputCompany\">Company Name :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"text\" class=\"form-control\" id=\"inputCompany\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Company Name']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputAddress\">Email :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Email']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputEmail4\">Name: </label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Display Name']\" readonly>\n          </div>\n        </div>\n      </div>\n    </accordion-group>\n\n    <accordion-group heading=\"Document Request send History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"auditInfo['documents']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{rowIndex+1}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Sent Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label\n              class=\"form-control\">{{auditInfo['documents'][rowIndex]['sentDate'] | date: 'yyyy-MM-dd HH:mm:ss' }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Number of Documents\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">{{auditInfo['documents'][rowIndex]['documentAskedCount'] }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n\n  </accordion>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTB.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTB.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">TB</h1>\n  <hr />\n  <accordion>\n    <accordion-group heading=\"TB\" [isOpen]=\"true\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [messages]=\"{emptyMessage:''}\" [columnMode]=\"'force'\"\n        [footerHeight]=\"0\" [rowHeight]=\"'auto'\" [rows]=\"thisTB\" [scrollbarH]=\"true\">\n\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"40\" name=\"#\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{ rowIndex}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"250\" name=\"Account break down\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n              [(ngModel)]='thisTB[rowIndex][\"Account break down\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"250\" name=\"Group as per audit record\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Group as per audit record\"]' readonly />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"100\" name=\"Last Year Audit\" aria-label=\"Last Year Audit\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Last Year <br> Audit </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Last Year Audit\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"100\" name=\"Current Year Per Client\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Current Year <br> Per Client </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Current Year Pe Client\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" minWidth=\"300\" maxWidth=\"300\" name=\"Current Year Adjustment\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Current Year <br> Adjustment </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <accordion>\n              <accordion-group [isOpen]=\"false\" [panelClass]=\"customClass\">\n                <span accordion-heading>\n                  {{ getAdjustmentForHeader(thisTB[rowIndex][\"Current Year Adjustment\"]) }}\n                </span>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend \">\n                    <span class=\"input-group-text \"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][0][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][0][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][1][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][1][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][2][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][2][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][3][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][3][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <input type=\"text\" class=\"form-control\" style=\"width: 150px;\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][4][\"name\"]' />\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][4][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <input type=\"text\" class=\"form-control\" style=\"width: 150px;\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][5][\"name\"]' />\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][5][\"value\"]' />\n                </div>\n              </accordion-group>\n            </accordion>\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"100\" name=\"Current Year Audit\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Current Year <br> Audit </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Current Year Audit\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n\n  </accordion>\n\n  <button type=\"button\" class=\"btn btn-primary btn-lg float-left\" (click)=\"genDocSend()\" >\n    Proceed to Generate Report and send to client\n  </button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTracking.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTracking.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <accordion>\n    <accordion-group [isOpen]=\"true\">\n      <span accordion-heading >\n        <button type=\"button\" class=\"btn btn-link\">5. Generate Report and Send</button>\n      </span>\n      This content is straight in the template.\n    </accordion-group>\n    <accordion-group  [isOpen]=\"true\">\n      <span accordion-heading>\n        <button type=\"button\" class=\"btn btn-link\">6. Draft Sent Reminder</button>\n      </span>\n      This content is straight in the template.\n    </accordion-group>\n    <accordion-group  [isOpen]=\"true\">\n      <span accordion-heading>\n        <button type=\"button\" class=\"btn btn-link\">7. Origin Sent</button>\n      </span>\n      This content is straight in the template.\n    </accordion-group>\n  </accordion>\n</div>\n");

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
/* harmony import */ var _auditCoInfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auditCoInfo.component */ "./src/app/views/audit/auditCoInfo.component.ts");
/* harmony import */ var _auditPreAuditS1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auditPreAuditS1.component */ "./src/app/views/audit/auditPreAuditS1.component.ts");
/* harmony import */ var _auditTB_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auditTB.component */ "./src/app/views/audit/auditTB.component.ts");
/* harmony import */ var _auditTracking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auditTracking.component */ "./src/app/views/audit/auditTracking.component.ts");








var routes = [
    {
        path: '',
        component: _audit_component__WEBPACK_IMPORTED_MODULE_3__["AuditComponent"],
        data: {
            title: 'Audit'
        }
    },
    {
        path: 'coinfo',
        component: _auditCoInfo_component__WEBPACK_IMPORTED_MODULE_4__["AuditCoInfoComponent"],
        data: {
            title: 'Audit /  0. Double Check CO Info'
        },
        children: [
            {
                path: ':id',
                component: _auditCoInfo_component__WEBPACK_IMPORTED_MODULE_4__["AuditCoInfoComponent"],
                data: {
                    title: 'Audit -> 0. Double Check CO Info'
                },
                children: [
                    {
                        path: ':year',
                        component: _auditCoInfo_component__WEBPACK_IMPORTED_MODULE_4__["AuditCoInfoComponent"],
                        data: {
                            title: 'Audit -> 0. Double Check CO Info'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'preAuditDoc',
        component: _auditPreAuditS1_component__WEBPACK_IMPORTED_MODULE_5__["AuditPreAuditS1Component"],
        data: {
            title: 'Audit / 1. General Pre-audit document (S1)'
        },
        children: [
            {
                path: ':id',
                component: _auditPreAuditS1_component__WEBPACK_IMPORTED_MODULE_5__["AuditPreAuditS1Component"],
                data: {
                    title: 'Audit / 1. General Pre-audit document (S1)'
                },
                children: [
                    {
                        path: ':year',
                        component: _auditPreAuditS1_component__WEBPACK_IMPORTED_MODULE_5__["AuditPreAuditS1Component"],
                        data: {
                            title: 'Audit -> 1. General Pre-audit document (S1)'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'TB',
        component: _auditTB_component__WEBPACK_IMPORTED_MODULE_6__["AuditTBComponent"],
        data: {
            title: 'Audit / 2. Input TB'
        },
        children: [
            {
                path: ':id',
                component: _auditTB_component__WEBPACK_IMPORTED_MODULE_6__["AuditTBComponent"],
                data: {
                    title: 'Audit / 2. Input TB'
                },
                children: [
                    {
                        path: ':year',
                        component: _auditTB_component__WEBPACK_IMPORTED_MODULE_6__["AuditTBComponent"],
                        data: {
                            title: 'Audit -> 2. Input TB'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'tracking',
        component: _auditTracking_component__WEBPACK_IMPORTED_MODULE_7__["AuditTrackingComponent"],
        data: {
            title: 'Audit / 3. Document Tracking'
        },
        children: [
            {
                path: ':id',
                component: _auditTracking_component__WEBPACK_IMPORTED_MODULE_7__["AuditTrackingComponent"],
                data: {
                    title: 'Audit / 3. Document Tracking'
                },
                children: [
                    {
                        path: ':year',
                        component: _auditTracking_component__WEBPACK_IMPORTED_MODULE_7__["AuditTrackingComponent"],
                        data: {
                            title: 'Audit -> 3. Document Tracking'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'detail',
        component: _audit_component__WEBPACK_IMPORTED_MODULE_3__["AuditComponent"],
        data: {
            title: 'Audit -> 4. Enter account details'
        },
        children: [
            {
                path: ':id',
                component: _audit_component__WEBPACK_IMPORTED_MODULE_3__["AuditComponent"],
                data: {
                    title: 'Audit -> 4. Enter account details'
                }
            }
        ]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuditComponent = /** @class */ (function () {
    function AuditComponent(route, router) {
        this.route = route;
        this.router = router;
        this.noResult = true;
        this.tableRows = [{ 'Company Name': 'TCC Consulting Service Limited', 'Status': '3. Enter account details' }, { 'Company Name': 'Cloud Consulting Service Limited', 'Status': '2. Invoice' }];
        this.tableHeaders = [{ 'name': 'Company Name', 'prop': 'Company Name' }, { 'name': 'Status', 'prop': 'Status' }];
        console.log('constructing AuditComponent');
    }
    AuditComponent.prototype.continue = function (rowIndex) {
        var account = this.tableRows[rowIndex];
        var status = account['Status'].charAt(0);
        var route = '';
        switch (status) {
            case '1':
                route = 'quotation';
                break;
            case '2':
                route = 'invoice';
                break;
            case '3':
                route = 'document';
                break;
            case '4':
                route = 'detail';
                break;
            default:
                route = 'create';
        }
        console.log('status:' + status + ' route:' + route);
        this.router.navigate(['newaccount', route, account['Company Name']]);
    };
    AuditComponent.prototype.yearChange = function () {
        console.log('haha');
        this.reloadData();
    };
    AuditComponent.prototype.reloadData = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        while (temp.length > 0) {
            temp.pop();
        }
        this.currentYearString = this.currentYear.getFullYear().toString();
        for (var i = 0; i < this.accountList.length; i++) {
            console.log('name: ' + JSON.stringify(this.accountList[i]['Company Name']));
            console.log('currentYear: ' + this.currentYearString);
            if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
                var tmpObj = {
                    'Company Name': this.accountList[i]['Company Name'],
                    'Status': this.accountList[i]['audit'][this.currentYearString]['Audit Status']
                };
                temp.push(tmpObj);
            }
        }
        this.tableRows = temp;
    };
    AuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
            }
            _this.id = route.params['id'];
            console.log('id: ' + _this.id);
        });
        var stringAccountList = localStorage.getItem('accountList');
        this.accountList = JSON.parse(stringAccountList);
        if (!this.accountList) {
            this.accountList = [{ 'Company Name': 'TCC Consulting Service Limited', 'Status': '3. Upload Documents' }, { 'Company Name': 'Cloud Consulting Service Limited', 'Status': '2. Invoice' }];
        }
        this.tableRows = [];
        this.currentYear = new Date();
        this.reloadData();
    };
    AuditComponent.prototype.typeaheadNoResults = function (event) {
        var foundindex = -1;
        for (var i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i]['Company Name'] === this.selected) {
                if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
                    foundindex = i;
                }
                break;
            }
        }
        if (foundindex >= 0) {
            this.selectedIndex = foundindex.toString();
        }
        this.noResult = (foundindex < 0);
    };
    AuditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./audit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _audit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audit.component */ "./src/app/views/audit/audit.component.ts");
/* harmony import */ var _auditCoInfo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auditCoInfo.component */ "./src/app/views/audit/auditCoInfo.component.ts");
/* harmony import */ var _auditPreAuditS1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auditPreAuditS1.component */ "./src/app/views/audit/auditPreAuditS1.component.ts");
/* harmony import */ var _auditTB_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auditTB.component */ "./src/app/views/audit/auditTB.component.ts");
/* harmony import */ var _auditTracking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auditTracking.component */ "./src/app/views/audit/auditTracking.component.ts");
/* harmony import */ var _audit_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./audit-routing.module */ "./src/app/views/audit/audit-routing.module.ts");


















var AuditModule = /** @class */ (function () {
    function AuditModule() {
    }
    AuditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _audit_routing_module__WEBPACK_IMPORTED_MODULE_17__["AuditRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_10__["TypeaheadModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_audit_component__WEBPACK_IMPORTED_MODULE_12__["AuditComponent"], _auditCoInfo_component__WEBPACK_IMPORTED_MODULE_13__["AuditCoInfoComponent"], _auditPreAuditS1_component__WEBPACK_IMPORTED_MODULE_14__["AuditPreAuditS1Component"], _auditTB_component__WEBPACK_IMPORTED_MODULE_15__["AuditTBComponent"], _auditTracking_component__WEBPACK_IMPORTED_MODULE_16__["AuditTrackingComponent"]]
        })
    ], AuditModule);
    return AuditModule;
}());



/***/ }),

/***/ "./src/app/views/audit/auditCoInfo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/audit/auditCoInfo.component.ts ***!
  \******************************************************/
/*! exports provided: AuditCoInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditCoInfoComponent", function() { return AuditCoInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuditCoInfoComponent = /** @class */ (function () {
    function AuditCoInfoComponent(route, router) {
        this.route = route;
        this.router = router;
        this.tableHeaders = [{ 'name': 'Name', 'prop': 'Name' }, { 'name': 'Option', 'prop': 'Option' }, { 'name': 'Appointed On', 'prop': 'Appointed On' }, { 'name': 'Resigned On', 'prop': 'Resigned On' }, { 'name': 'Salary', 'prop': 'Salary' }, { 'name': 'MPF', 'prop': 'MPF' }];
        this.tableHeadersSub = [{ 'name': 'Name of sub', 'prop': 'Name of sub' }, { 'name': 'Place of sub', 'prop': 'Place of sub' }, { 'name': '% of holding sub', 'prop': '% of holding sub' }, { 'name': 'Activity of sub', 'prop': 'Activity of sub' }];
        this.tableHeadersAsso = [{ 'name': 'Name of asso', 'prop': 'Name of asso' }, { 'name': 'Place of asso', 'prop': 'Place of asso' }, { 'name': '% of holding asso', 'prop': '% of holding asso' }, { 'name': 'Activity of asso', 'prop': 'Activity of asso' }];
        this.tableHeadersShareHolder = [{ 'name': 'Name', 'prop': 'Name' }, { 'name': 'CY', 'prop': 'CY' }, { 'name': 'LY', 'prop': 'LY' }];
        this.tableHeadersAmountdueCo = [{ 'name': 'Name', 'prop': 'Name' }, { 'name': 'CY', 'prop': 'CY' }, { 'name': 'LY', 'prop': 'LY' }];
        this.tableHeadersAmountdueSub = [{ 'name': 'Name', 'prop': 'Name' }, { 'name': 'CY', 'prop': 'CY' }, { 'name': 'LY', 'prop': 'LY' }];
        this.tableRows = [];
        this.tableRowsSub = [];
        this.tableRowsAsso = [];
        this.tableRowsShareHolder = [];
        this.tableRowsAmountdueCo = [];
        this.tableRowsAmountdueSub = [];
        this.editing = {};
        this.editingSub = {};
        this.editingAsso = {};
        this.editingShareHolder = {};
        this.editingAmountdueCo = {};
        this.editingAmountdueSub = {};
        this.accountDetail = {};
        this.accountList = [];
        this.accountInfo = {};
        this.myroute = {};
        this.isReadOnly = true;
        console.log('contructing AuditCoInfoComponent');
    }
    AuditCoInfoComponent.prototype.edit = function () {
        this.isReadOnly = false;
    };
    AuditCoInfoComponent.prototype.save = function () {
        if (!this.isReadOnly) {
            this.accountDetail['directors'] = this.tableRows;
            this.accountDetail['sub'] = this.tableRowsSub;
            this.accountDetail['asso'] = this.tableRowsAsso;
            this.accountDetail['share-holder'] = this.tableRowsShareHolder;
            this.accountDetail['amount-due-co'] = this.tableRowsAmountdueCo;
            this.accountDetail['amount-due-sub'] = this.tableRowsAmountdueSub;
            this.accountInfo['accountDetail'] = this.accountDetail;
            if (!this.accountInfo['audit']) {
                this.accountInfo['audit'] = {};
            }
            if (!this.accountInfo['audit'][this.currentYearString]) {
                this.accountInfo['audit'][this.currentYearString] = {};
            }
            this.accountInfo['audit'][this.currentYearString]['Audit Status'] = '1. General Pre-audit document (S1)';
            localStorage.setItem('accountList', JSON.stringify(this.accountList));
        }
        else {
            if (!this.accountInfo['audit']) {
                this.accountInfo['audit'] = {};
            }
            if (!this.accountInfo['audit'][this.currentYearString]) {
                this.accountInfo['audit'][this.currentYearString] = {};
            }
            this.accountInfo['audit'][this.currentYearString]['Audit Status'] = '1. General Pre-audit document (S1)';
            localStorage.setItem('accountList', JSON.stringify(this.accountList));
        }
        this.router.navigate(['audit', 'preAuditDoc', this.id, this.currentYearString]);
    };
    AuditCoInfoComponent.prototype.add = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.push({ 'Name': 'Double Click to Edit', 'Option': 'Double Click to Edit', 'Appointed On': 'Double Click to Edit', 'Resigned On': 'Double Click to Edit', 'Salary': 'Double Click to Edit', 'MPF': 'Double Click to Edit' });
        this.tableRows = temp;
    };
    AuditCoInfoComponent.prototype.deleteRow = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.splice(rowIndex, 1);
        this.tableRows = temp;
    };
    AuditCoInfoComponent.prototype.addSub = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsSub);
        temp.push({ 'Name of sub': 'Double Click to Edit', 'Place of sub': 'Double Click to Edit', '% of holding sub': 'Double Click to Edit', 'Activity of sub': 'Double Click to Edit' });
        this.tableRowsSub = temp;
    };
    AuditCoInfoComponent.prototype.deleteRowSub = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsSub);
        temp.splice(rowIndex, 1);
        this.tableRowsSub = temp;
    };
    AuditCoInfoComponent.prototype.addAsso = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAsso);
        temp.push({ 'Name of asso': 'Double Click to Edit', 'Place of asso': 'Double Click to Edit', '% of holding asso': 'Double Click to Edit', 'Activity of asso': 'Double Click to Edit' });
        this.tableRowsAsso = temp;
    };
    AuditCoInfoComponent.prototype.deleteRowAsso = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAsso);
        temp.splice(rowIndex, 1);
        this.tableRowsAsso = temp;
    };
    AuditCoInfoComponent.prototype.addShareHolder = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsShareHolder);
        temp.push({ 'Name': 'Double Click to Edit', 'CY': 'Double Click to Edit', 'LY': 'Double Click to Edit' });
        this.tableRowsShareHolder = temp;
    };
    AuditCoInfoComponent.prototype.deleteRowShareHolder = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsShareHolder);
        temp.splice(rowIndex, 1);
        this.tableRowsShareHolder = temp;
    };
    AuditCoInfoComponent.prototype.addAmountdueCo = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueCo);
        temp.push({ 'Name': 'Double Click to Edit', 'CY': 'Double Click to Edit', 'LY': 'Double Click to Edit' });
        this.tableRowsAmountdueCo = temp;
    };
    AuditCoInfoComponent.prototype.deleteRowAmountdueCo = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueCo);
        temp.splice(rowIndex, 1);
        this.tableRowsAmountdueCo = temp;
    };
    AuditCoInfoComponent.prototype.addAmountdueSub = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueSub);
        temp.push({ 'Name': 'Double Click to Edit', 'CY': 'Double Click to Edit', 'LY': 'Double Click to Edit' });
        this.tableRowsAmountdueSub = temp;
    };
    AuditCoInfoComponent.prototype.deleteRowAmountdueSub = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueSub);
        temp.splice(rowIndex, 1);
        this.tableRowsAmountdueSub = temp;
    };
    AuditCoInfoComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.tableRows[rowIndex][cell] = event.target.value;
        this.tableRows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
    };
    AuditCoInfoComponent.prototype.editCell = function (cell, rowIndex) {
        this.editing = {};
        this.editing[rowIndex + '-' + cell] = true;
    };
    AuditCoInfoComponent.prototype.updateValueSub = function (event, cell, rowIndex) {
        this.editingSub[rowIndex + '-' + cell] = false;
        this.tableRowsSub[rowIndex][cell] = event.target.value;
        this.tableRowsSub = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsSub);
    };
    AuditCoInfoComponent.prototype.editCellSub = function (cell, rowIndex) {
        this.editingSub = {};
        this.editingSub[rowIndex + '-' + cell] = true;
    };
    AuditCoInfoComponent.prototype.updateValueAsso = function (event, cell, rowIndex) {
        this.editingAsso[rowIndex + '-' + cell] = false;
        this.tableRowsAsso[rowIndex][cell] = event.target.value;
        this.tableRowsAsso = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAsso);
    };
    AuditCoInfoComponent.prototype.editCellAsso = function (cell, rowIndex) {
        this.editingAsso = {};
        this.editingAsso[rowIndex + '-' + cell] = true;
    };
    AuditCoInfoComponent.prototype.updateValueShareHolder = function (event, cell, rowIndex) {
        this.editingShareHolder[rowIndex + '-' + cell] = false;
        this.tableRowsShareHolder[rowIndex][cell] = event.target.value;
        this.tableRowsShareHolder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsShareHolder);
    };
    AuditCoInfoComponent.prototype.editCellShareHolder = function (cell, rowIndex) {
        this.editingShareHolder = {};
        this.editingShareHolder[rowIndex + '-' + cell] = true;
    };
    AuditCoInfoComponent.prototype.updateValueAmountdueCo = function (event, cell, rowIndex) {
        this.editingAmountdueCo[rowIndex + '-' + cell] = false;
        this.tableRowsAmountdueCo[rowIndex][cell] = event.target.value;
        this.tableRowsAmountdueCo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueCo);
    };
    AuditCoInfoComponent.prototype.editCellAmountdueCo = function (cell, rowIndex) {
        this.editingAmountdueCo = {};
        this.editingAmountdueCo[rowIndex + '-' + cell] = true;
    };
    AuditCoInfoComponent.prototype.updateValueAmountdueSub = function (event, cell, rowIndex) {
        this.editingAmountdueSub[rowIndex + '-' + cell] = false;
        this.tableRowsAmountdueSub[rowIndex][cell] = event.target.value;
        this.tableRowsAmountdueSub = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueSub);
    };
    AuditCoInfoComponent.prototype.editCellAmountdueSub = function (cell, rowIndex) {
        this.editingAmountdueSub = {};
        this.editingAmountdueSub[rowIndex + '-' + cell] = true;
    };
    AuditCoInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
                _this.myroute = Object.assign(_this.myroute, route.params);
            }
            console.log('route: ', JSON.stringify(_this.myroute));
            _this.id = _this.myroute['id'];
            _this.currentYearString = _this.myroute['year'];
            console.log('ID: ', _this.id);
            console.log('currentYearString: ', _this.currentYearString);
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = -1;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0) {
                return;
            }
            _this.accountInfo = _this.accountList[foundindex];
            if (_this.accountInfo['accountDetail']) {
                _this.accountDetail = _this.accountInfo['accountDetail'];
                _this.tableRows = _this.accountDetail['directors'];
                _this.tableRowsSub = _this.accountDetail['sub'];
                _this.tableRowsAsso = _this.accountDetail['asso'];
                _this.tableRowsShareHolder = _this.accountDetail['share-holder'];
                _this.tableRowsAmountdueCo = _this.accountDetail['amount-due-co'];
                _this.tableRowsAmountdueSub = _this.accountDetail['amount-due-sub'];
                _this.accountDetail = _this.accountInfo['accountDetail'];
            }
        });
    };
    AuditCoInfoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuditCoInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auditCoInfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditCoInfo.component.html")).default,
            styles: ["\n      .input-group>.input-group-prepend {\n          flex: 0 0 20%;\n      } .input-group .input-group-text {\n          width: 100%;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuditCoInfoComponent);
    return AuditCoInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/audit/auditPreAuditS1.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/audit/auditPreAuditS1.component.ts ***!
  \**********************************************************/
/*! exports provided: AuditPreAuditS1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditPreAuditS1Component", function() { return AuditPreAuditS1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuditPreAuditS1Component = /** @class */ (function () {
    function AuditPreAuditS1Component(route, router) {
        this.route = route;
        this.router = router;
        this.accountDetail = {};
        this.auditInfo = {};
        this.accountList = [];
        this.accountInfo = {};
        this.myroute = {};
        this.document = {};
        this.documentRequestList = [
            { 'Chinese': '業務性質', 'English': 'Principal Activities', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '年結日', 'English': 'Proposed first year end', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '最近一年審計報告', 'English': 'Last year audit report', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '最近一年稅計算表', 'English': 'Last year tax computation', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '最近一年報稅表', 'English': 'Last year profits tax return', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '所有銀行月結單', 'English': 'All bank statements for the audit period', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '簽回附件的銀行詢証函', 'English': 'Sign and return back the bank confirmation', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '簽回附件的稅務代表委任書', 'English': 'Sign and return back the appointmnet letter of tax rep', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '簽回附件的核數師委任書', 'English': 'Sign and return back the engagement letters', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '所有董事及股東的身份證', 'English': 'Please provide the HKID of all directors & shareholders', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '請提供商業登記證', 'English': 'Please provide the BR of the Company', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '收支表，資產負債表，明細表', 'English': 'Current year profit and loss and balance sheet, and ledger', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '僱主填報的薪酬及退休金報稅表', 'English': 'All Employers\' return (56B form)', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '租約', 'English': 'Tenancy agreement', 'Asked': false, 'Uploaded': false, 'Checked': false },
            { 'Chinese': '請提供以下文件', 'English': 'Statutory documents as per attachment', 'Asked': false, 'Uploaded': false, 'Checked': false }
        ];
        console.log('contructing AuditCoInfoComponent');
    }
    Object.defineProperty(AuditPreAuditS1Component.prototype, "documentContentHeader", {
        get: function () {
            var returnString = '';
            if (this.document['sentDate']) {
                returnString = 'Document Upload Request - ( Sent on ' + new Date(this.document['sentDate']) + ' )';
            }
            else {
                returnString = 'Document Upload Request - New';
            }
            return returnString;
        },
        enumerable: true,
        configurable: true
    });
    AuditPreAuditS1Component.prototype.requestDocument = function () {
        console.log("next");
    };
    AuditPreAuditS1Component.prototype.confirmDocument = function () {
        console.log("next");
    };
    AuditPreAuditS1Component.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
                _this.myroute = Object.assign(_this.myroute, route.params);
            }
            console.log('route: ', JSON.stringify(_this.myroute));
            _this.id = _this.myroute['id'];
            _this.currentYearString = _this.myroute['year'];
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = -1;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0) {
                return;
            }
            _this.accountInfo = _this.accountList[foundindex];
            if (_this.accountInfo['accountDetail']) {
                _this.accountDetail = _this.accountInfo['accountDetail'];
            }
            if (_this.accountInfo['audit'] && _this.accountInfo['audit'][_this.currentYearString]) {
                _this.auditInfo = _this.accountInfo['audit'][_this.currentYearString];
            }
        });
    };
    AuditPreAuditS1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuditPreAuditS1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auditPreAuditS1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditPreAuditS1.component.html")).default,
            styles: ["\n      .input-group>.input-group-prepend {\n          flex: 0 0 20%;\n      } .input-group .input-group-text {\n          width: 100%;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuditPreAuditS1Component);
    return AuditPreAuditS1Component;
}());



/***/ }),

/***/ "./src/app/views/audit/auditTB.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/audit/auditTB.component.ts ***!
  \**************************************************/
/*! exports provided: AuditTBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTBComponent", function() { return AuditTBComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuditTBComponent = /** @class */ (function () {
    function AuditTBComponent(route, router) {
        this.route = route;
        this.router = router;
        this.customClass = 'customClass';
        this.accountDetail = {};
        this.auditInfo = {};
        this.accountList = [];
        this.accountInfo = {};
        this.myroute = {};
        this.thisHeaders = [
            'Account break down',
            'Group as per audit record',
            'Last Year Audit',
            'Current Year Audit',
            'Current Year Pe Client',
            'Current Year Adjustment',
            'Current Year Audit',
        ];
        console.log('contructing AuditTBComponent');
    }
    // adjustment for Opening Adjustment
    // adjustment for Exchange Difference
    // adjustment for Audit Fee
    // adjustment for Depreciation
    AuditTBComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/TBTemplate.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    AuditTBComponent.prototype.genDocSend = function () {
        this.auditInfo['TB'] = this.thisTB;
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        return;
    };
    AuditTBComponent.prototype.getAdjustmentForHeader = function (input) {
        var returnStr;
        returnStr = '';
        for (var i = 0; i < input.length; i++) {
            if (input[i]['value']) {
                returnStr += input[i]['name'] + ': $ ' + input[i]['value'] + ' , ';
            }
        }
        if (returnStr.length > 0) {
            return 'Adjustment for [' + returnStr + ']';
        }
        else {
            return 'Add Adjustment';
        }
    };
    AuditTBComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
                _this.myroute = Object.assign(_this.myroute, route.params);
            }
            console.log('route: ', JSON.stringify(_this.myroute));
            _this.id = _this.myroute['id'];
            _this.currentYearString = _this.myroute['year'];
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = -1;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0) {
                return;
            }
            _this.accountInfo = _this.accountList[foundindex];
            console.log('accountInfo:' + _this.accountInfo);
            if (_this.accountInfo['accountDetail']) {
                _this.accountDetail = _this.accountInfo['accountDetail'];
            }
            if (_this.accountInfo['audit'] &&
                _this.accountInfo['audit'][_this.currentYearString]) {
                _this.auditInfo = _this.accountInfo['audit'][_this.currentYearString];
            }
            if (!_this.auditInfo['TB']) {
                _this.fetch(function (data) {
                    _this.thisTB = data;
                });
            }
            else {
                _this.thisTB = _this.auditInfo['TB'];
            }
        });
    };
    AuditTBComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuditTBComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auditTB.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTB.component.html")).default,
            styles: ["\n      .input-group > .input-group-prepend {\n        flex: 0 0 20%;\n      }\n      .input-group .input-group-text {\n        width: 100%;\n      }\n      :host >>> .card.customClass,\n      :host >>> .card.customClass .card-header,\n      :host >>> .panel-heading.customClass,\n      :host >>> .panel.customClass {\n        padding: 0px;\n      }\n\n      :host >>> .panel.customClass .panel-body {\n        padding: 0px;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuditTBComponent);
    return AuditTBComponent;
}());



/***/ }),

/***/ "./src/app/views/audit/auditTracking.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/audit/auditTracking.component.ts ***!
  \********************************************************/
/*! exports provided: AuditTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTrackingComponent", function() { return AuditTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuditTrackingComponent = /** @class */ (function () {
    function AuditTrackingComponent(route, router) {
        this.route = route;
        this.router = router;
        this.accountDetail = {};
        this.auditInfo = {};
        this.accountList = [];
        this.accountInfo = {};
        this.myroute = {};
        console.log('contructing AuditCoInfoComponent');
    }
    Object.defineProperty(AuditTrackingComponent.prototype, "header", {
        get: function () {
            return 'test';
        },
        enumerable: true,
        configurable: true
    });
    AuditTrackingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
                _this.myroute = Object.assign(_this.myroute, route.params);
            }
            console.log('route: ', JSON.stringify(_this.myroute));
            _this.id = _this.myroute['id'];
            _this.currentYearString = _this.myroute['year'];
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = -1;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0) {
                return;
            }
            _this.accountInfo = _this.accountList[foundindex];
            if (_this.accountInfo['accountDetail']) {
                _this.accountDetail = _this.accountInfo['accountDetail'];
            }
            if (_this.accountInfo['audit'] && _this.accountInfo['audit'][_this.currentYearString]) {
                _this.auditInfo = _this.accountInfo['audit'][_this.currentYearString];
            }
        });
    };
    AuditTrackingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuditTrackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auditTracking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTracking.component.html")).default,
            styles: ["\n      .input-group>.input-group-prepend {\n          flex: 0 0 20%;\n      } .input-group .input-group-text {\n          width: 100%;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuditTrackingComponent);
    return AuditTrackingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-audit-audit-module.js.map