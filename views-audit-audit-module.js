(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-audit-audit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/audit.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">Audit</h1>\n  \n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Company Name</label>\n    <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\n      <h5>{{model[\"Company Name\"]}} </h5>\n    </ng-template>\n    <input [(ngModel)]=\"selected\" [typeahead]=\"accountList\" typeaheadOptionField=\"Company Name\" [typeaheadMinLength]=\"0\"\n      (ngModelChange)=\"typeaheadNoResults($event)\" [typeaheadItemTemplate]=\"customItemTemplate\" class=\"form-control\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\"> Create account only if it is not exist</small>\n  </div>\n  \n  \n  <div *ngIf=\"!noResult\">\n    <!-- <div class=\"input-group input-group-lg\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">For Year:</span>\n      </div>\n      <input type=\"text\"\n      placeholder=\"Datepicker\"\n      class=\"form-control\"\n      minMode=\"year\"\n      [bsConfig]=\"{ dateInputFormat: 'YYYY' }\"\n      [(ngModel)]=\"currentYear\"\n      (ngModelChange)=\"yearChange()\"\n      bsDatepicker>\n    </div> \n    <hr/> -->\n    <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRows\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeaders\" [name]=\"label.name\" [prop]=\"label.prop\" [sortable]=\"true\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        {{ value }}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)='continue(rowIndex)'>Continue</button>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n  <hr/>\n  <br>\n  <br>   \n  </div>\n  <!-- <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!noResult\" [routerLink]=\"['/audit','coinfo',selected,currentYearString]\"\n    [hidden]=\"!selected || !noResult\">Start New Audit</button> -->\n\n    <div class=\"form-row\" [hidden]=\"!selected || noResult\">\n      <div class=\"form-group col-md-6\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)='newAudit()'\n        >Start New Audit Year</button>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <input type=\"text\"\n    placeholder=\"Datepicker\"\n    class=\"form-control\"\n    minMode=\"year\"\n    [bsConfig]=\"{ dateInputFormat: 'YYYY' }\"\n    [(ngModel)]=\"currentYear\"\n    (ngModelChange)=\"yearChange()\"\n    bsDatepicker>\n    </div>\n    <div class=\"form-group col-md-3\">\n      - {{  currentYear.getFullYear() +1 }}\n    </div>\n    <div class=\"form-group\" >\n \n    \n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\" >\n  <h1 class=\"display-3\">Pre Audit Docuemnt (S1)</h1>\n  <hr />\n  <accordion>\n    <accordion-group heading=\"Link to upload document\" [isOpen]=\"false\">\n      <a href=\"{{getLinksToUpload()}}\"  target=”_blank” >{{getLinksToUpload()}}</a>\n    </accordion-group>\n    <accordion-group heading=\"Customer Document Upload History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"auditInfo['documentsUploaded']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{rowIndex+1}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"File Type\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">{{auditInfo['documentsUploaded'][rowIndex]['File Type']}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"File Name\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">{{auditInfo['documentsUploaded'][rowIndex]['File Name']}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Uploaded Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">{{auditInfo['documentsUploaded'][rowIndex]['Uploaded Date']}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n\n    <accordion-group [heading]=\"documentContentHeader\" [isOpen]=\"true\">\n\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">English</label>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">中文</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmail4\">Ask</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmail4\">Uploaded</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputEmail4\">Checked</label>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <hr />\n          </div>\n        </div>\n        <div class=\"form-row\" *ngFor=\"let item of documentRequestList ; let i = index\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">{{item[\"English\"]}}</label>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">{{item[\"Chinese\"]}}</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <input type=\"checkbox\" [(ngModel)]=\"this.documentRequestList[i]['Asked']\" />\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label *ngIf=\"this.documentRequestList[i]['Uploaded']\"> &#10004; </label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <input type=\"checkbox\" [(ngModel)]=\"this.documentRequestList[i]['Checked']\" />\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"requestDocument()\" *ngIf=\"!this.document['sentDate']\"> Send Document\n          Reques to Client</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"requestDocument()\" *ngIf=\"this.document['sentDate']\"> Resend\n          Additional Document Request</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"confirmDocument()\"\n          *ngIf=\"this.document['sentDate']\">Documents Confirmed</button>\n\n        <ng-template #documentSentMsgTemplate>\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Document Sent</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Document Sent\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">OK</button>\n          </div>\n        </ng-template>\n\n      </div>\n    </accordion-group>\n\n    <accordion-group heading=\"Company Info\" [isOpen]=\"false\">\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputCompany\">Company Name :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"text\" class=\"form-control\" id=\"inputCompany\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Company Name']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputAddress\">Email :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Email']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputEmail4\">Name: </label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Display Name']\" readonly>\n          </div>\n        </div>\n      </div>\n    </accordion-group>\n\n    <accordion-group heading=\"Document Request send History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"auditInfo['documents']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"Sent Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label\n              class=\"form-control\">{{auditInfo['documents'][rowIndex]['sentDate'] | date: 'yyyy-MM-dd HH:mm:ss' }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Number of Documents\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">{{auditInfo['documents'][rowIndex]['documentAskedCount'] }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n\n  </accordion>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTB.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTB.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"animated fadeIn\">\n    <!-- \n  <h1 class=\"display-3\">TB</h1>\n  <hr />\n\n  <accordion>\n    <accordion-group heading=\"TB\" [isOpen]=\"true\">\n      -->\n      <table class=\"table-condensed\">\n        <thead>\n          <tr class=\"table-condensed\">\n            <th >#</th>\n            <th >Account break down</th>\n            <th >Group as per audit record</th>\n            <th >Last Year Audit</th>\n            <th >Current Year Per Client</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of thisTB; index as i\" class=\"table-condensed\" >\n            <td class=\"table-condensed\">{{i}}</td>\n            <td class=\"table-condensed\" width=\"300px\"><input style=\"width:100%\" id=\"input{{i*3}}\" type=\"text\" class=\".input-sm\" [(ngModel)]='row[\"Account break down\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\" (keyup.enter)=\"keytab($event)\" /></td>\n            <td class=\"table-condensed\" width=\"300px\"><input style=\"width:100%\" type=\"text\" class=\".input-sm\" [(ngModel)]='row[\"Group as per audit record\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\" (keyup.enter)=\"keytab($event)\" readonly /></td>\n            <td class=\"table-condensed\" width=\"200px\"><input style=\"width:100%\" id=\"input{{i*3+1}}\"  type=\"number\" step=\"1.0\"  class=\".input-sm\" [(ngModel)]='row[\"Last Year Audit\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\" (keyup.enter)=\"keytab($event)\" /></td>\n            <td class=\"table-condensed\" width=\"200px\"><input style=\"width:100%\" id=\"input{{i*3+2}}\"  type=\"number\" step=\"1.0\"  class=\".input-sm\" [(ngModel)]='row[\"Current Year Per Client\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\" (keyup.enter)=\"keytab($event)\" /></td>\n            <!-- \n            <td class=\"table-condensed\"> \n              \n              <accordion>\n                <accordion-group [isOpen]=\"false\" [panelClass]=\"customClass\">\n                  <span accordion-heading>\n                    {{ getAdjustmentForHeader(row[\"Current Year Adjustment\"]) }}\n                  </span>\n                  <div class=\"input-group \">\n                    <div class=\"input-group-prepend \">\n                      <span class=\"input-group-text \"\n                        style=\"width: 150px;\">{{row[\"Current Year Adjustment\"][0][\"name\"]}}</span>\n                    </div>\n                    <input type=\"number\" step=\"1.0\" class=\".input-sm\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='row[\"Current Year Adjustment\"][0][\"value\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\"/>\n                  </div>\n                  <div class=\"input-group \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"\n                        style=\"width: 150px;\">{{row[\"Current Year Adjustment\"][1][\"name\"]}}</span>\n                    </div>\n                    <input type=\"number\" step=\"1.0\" class=\".input-sm\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='row[\"Current Year Adjustment\"][1][\"value\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\"/>\n                  </div>\n                  <div class=\"input-group \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"\n                        style=\"width: 150px;\">{{row[\"Current Year Adjustment\"][2][\"name\"]}}</span>\n                    </div>\n                    <input type=\"number\" step=\"1.0\" class=\".input-sm\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='row[\"Current Year Adjustment\"][2][\"value\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\"/>\n                  </div>\n                  <div class=\"input-group \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"\n                        style=\"width: 150px;\">{{row[\"Current Year Adjustment\"][3][\"name\"]}}</span>\n                    </div>\n                    <input type=\"number\" step=\"1.0\" class=\".input-sm\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='row[\"Current Year Adjustment\"][3][\"value\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 } }\"/>\n                  </div>\n                  <div class=\"input-group \">\n                    <div class=\"input-group-prepend\">\n                      <input type=\"text\" class=\".input-sm\" style=\"width: 150px;\" aria-describedby=\"basic-addon3\"\n                      [(ngModel)]='row[\"Current Year Adjustment\"][4][\"name\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }\"/>\n                    </div>\n                    <input type=\"number\" step=\"1.0\" class=\".input-sm\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='row[\"Current Year Adjustment\"][4][\"value\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }\"/>\n                  </div>\n                  <div class=\"input-group \">\n                    <div class=\"input-group-prepend\">\n                      <input type=\"text\" class=\".input-sm\" style=\"width: 150px;\" aria-describedby=\"basic-addon3\"\n                      [(ngModel)]='row[\"Current Year Adjustment\"][5][\"name\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }\"/>\n                    </div>\n                    <input type=\"number\" step=\"1.0\" class=\".input-sm\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='row[\"Current Year Adjustment\"][5][\"value\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }\"/>\n                  </div>\n                </accordion-group>\n              </accordion>\n              \n            </td>\n            \n            <td class=\"table-condensed\"><input type=\"text\" class=\".input-sm\" [(ngModel)]='row[\"Current Year Audit\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }\"/></td>\n          -->\n          </tr>\n          <tr >\n            <td class=\"table-condensed\" colspan=\"5\"><hr/></td>\n          </tr>\n          <tr >\n            <td class=\"table-condensed\">(Profit)/ Loss</td>\n            <td class=\"table-condensed\" width=\"300px\"></td>\n            <td class=\"table-condensed\" width=\"300px\"></td>\n            <td class=\"table-condensed\" width=\"200px\">{{getSumLA() | number:'2.2-2'}}</td>\n            <td class=\"table-condensed\" width=\"200px\">{{getSumCA() | number:'2.2-2'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <!-- \n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [messages]=\"{emptyMessage:''}\" [columnMode]=\"'force'\"\n        [footerHeight]=\"0\" [rowHeight]=\"'auto'\" [rows]=\"thisTB\" [scrollbarH]=\"true\">\n\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"40\" name=\"#\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{ rowIndex}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"250\" name=\"Account break down\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n              [(ngModel)]='thisTB[rowIndex][\"Account break down\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"250\" name=\"Group as per audit record\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Group as per audit record\"]' readonly />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"100\" name=\"Last Year Audit\" aria-label=\"Last Year Audit\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Last Year <br> Audit </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Last Year Audit\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"100\" name=\"Current Year Per Client\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Current Year <br> Per Client </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Current Year Pe Client\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" minWidth=\"300\" maxWidth=\"300\" name=\"Current Year Adjustment\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Current Year <br> Adjustment </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <accordion>\n              <accordion-group [isOpen]=\"false\" [panelClass]=\"customClass\">\n                <span accordion-heading>\n                  {{ getAdjustmentForHeader(thisTB[rowIndex][\"Current Year Adjustment\"]) }}\n                </span>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend \">\n                    <span class=\"input-group-text \"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][0][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][0][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][1][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][1][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][2][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][2][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      style=\"width: 150px;\">{{thisTB[rowIndex][\"Current Year Adjustment\"][3][\"name\"]}}</span>\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][3][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <input type=\"text\" class=\"form-control\" style=\"width: 150px;\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][4][\"name\"]' />\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][4][\"value\"]' />\n                </div>\n                <div class=\"input-group \">\n                  <div class=\"input-group-prepend\">\n                    <input type=\"text\" class=\"form-control\" style=\"width: 150px;\" aria-describedby=\"basic-addon3\"\n                    [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][5][\"name\"]' />\n                  </div>\n                  <input type=\"number\" step=\"1.0\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                  [(ngModel)]='thisTB[rowIndex][\"Current Year Adjustment\"][5][\"value\"]' />\n                </div>\n              </accordion-group>\n            </accordion>\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]=\"false\" maxWidth=\"100\" name=\"Current Year Audit\">\n          <ng-template let-column=\"column\" ngx-datatable-header-template>\n            <div class=\"text-center\"> Current Year <br> Audit </div>\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\"\n            [(ngModel)]='thisTB[rowIndex][\"Current Year Audit\"]' />\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n      -->\n      <!-- \n    </accordion-group>\n    \n\n  </accordion>\n  -->\n  <hr/>\n\n  <button type=\"button\" class=\"btn btn-primary btn-lg float-left\" (click)=\"genDocSend()\" >\n    Proceed to Adjustments\n  </button>\n\n</div>\n\n<div class=\"overlay-button\">\n  <div class=\"btn-group-vertical float-right\">\n  \n\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scrollToTop()\" >\n  Top\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input228')\" >\n  Goodwill\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input495')\" >\n  Time deposits\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input576')\" >\n  Finance lease\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input690')\" >\n  Reserved 3 (equity)\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input693')\" >\n  Income\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input738')\" >\n  Cost of services\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input741')\" >\n  Other income\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input762')\" >\n  Operating expenses\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input1368')\" >\n  Finance costs\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input1386')\" >\n  Income tax expense\n</button>\n<button type=\"button\" class=\"btn btn-primary \" (click)=\"scroll('input1392')\" >\n  Bottom\n</button> \n\n\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTBAdj.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTBAdj.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"animated fadeIn\">\n  <accordion>\n    <accordion-group heading=\"TB Summary\" [isOpen]=\"true\">\n      <table class=\"table-condensed\">\n        <thead>\n          <tr class=\"table-condensed\">\n            <th >#</th>\n            <th >Account break down</th>\n            <th >Group as per audit record</th>\n            <th >Last Year Audit</th>\n            <th >Current Year Per Client</th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor=\"let row of thisTB; index as i\" >\n            <tr class=\"table-condensed\" *ngIf=\"row['Last Year Audit'] || row['Current Year Per Client'] \">\n              <td class=\"table-condensed\">{{i}}</td>\n              <td class=\"table-condensed\" width=\"300px\">{{row[\"Account break down\"]}} </td>\n              <td class=\"table-condensed\" width=\"300px\">{{row[\"Group as per audit record\"]}}</td>\n              <td class=\"table-condensed\" width=\"200px\">{{row[\"Last Year Audit\"]}}</td>\n              <td class=\"table-condensed\" width=\"200px\">{{row[\"Current Year Per Client\"]}}</td>\n            </tr>\n          </ng-container>\n          <tr >\n            <td class=\"table-condensed\" colspan=\"5\"><hr/></td>\n          </tr>\n          <tr >\n            <td class=\"table-condensed\">(Profit)/ Loss</td>\n            <td class=\"table-condensed\" width=\"300px\"></td>\n            <td class=\"table-condensed\" width=\"300px\"></td>\n            <td class=\"table-condensed\" width=\"200px\">{{getSumLA() | number:'2.2-2'}}</td>\n            <td class=\"table-condensed\" width=\"200px\">{{getSumCA() | number:'2.2-2'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      </accordion-group>\n      <accordion-group heading=\"Addjustment\" [isOpen]=\"true\">\n        <table class=\"table-condensed\">\n          <thead>\n            <tr class=\"table-condensed\">\n              <th >#</th>\n              <th width=\"400px\">Account break down / Group as per audit record </th>\n              <th width=\"300px\">Adjustment Type</th>\n              <th width=\"200px\">Adjustment Value</th>\n              <th width=\"100px\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let row of thisAdjustment; index as i\" >\n              <tr class=\"table-condensed\">\n                <td class=\"table-condensed\">{{i}}</td>\n                <td> \n                  \n                     <select class=\"custom-select\">\n                       <ng-container *ngFor=\"let row of thisTB; index as i\">\n                      <option value=\"{{index}}\" *ngIf=\"row['Last Year Audit'] || row['Current Year Per Client'] \">\n                        {{row[\"Account break down\"]}} / {{row[\"Group as per audit record\"]}}\n                      </option>\n                     </ng-container>\n                    </select>\n                </td>\n                <td class=\"table-condensed\" width=\"300px\">\n                  <input [(ngModel)]='row[\"Account\"]' [typeahead]=\"thisAdjustmentTypes\" [typeaheadMinLength]=\"0\"\n                     class=\"form-control\"></td>\n                <td class=\"table-condensed\" width=\"200px\"><input style=\"width:100%\"  type=\"number\" step=\"1.0\"  class=\".input-sm\" [(ngModel)]='row[\"Adjustment\"]' ng-model-options=\"{'updateOn': 'default blur', 'debounce': { 'default': 250, 'blur': 0 }}\" /></td>\n                <td class=\"table-condensed\" width=\"200px\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"addAddjustment(i+1)\" >\n                  + \n                </button></td>\n              </tr>\n            </ng-container>\n            <tr >\n              <td class=\"table-condensed\" colspan=\"5\"><hr/></td>\n            </tr>\n            <tr >\n              <td class=\"table-condensed\">Balance</td>\n              <td class=\"table-condensed\" width=\"400px\"></td>\n              <td class=\"table-condensed\" width=\"300px\"></td>\n              <td class=\"table-condensed\" width=\"200px\">{{getSumAdjustment() | number:'2.2-2'}}</td>\n              <td class=\"table-condensed\" width=\"100px\"></td>\n            </tr>\n          </tbody>\n        </table>\n        </accordion-group>\n      </accordion>\n\n  <hr/>\n\n  <button type=\"button\" class=\"btn btn-primary btn-lg float-left\" (click)=\"genDocSend()\" >\n    Proceed to Adjustments\n  </button>\n\n</div>\n\n");

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
/* harmony import */ var _auditTBAdj_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auditTBAdj.component */ "./src/app/views/audit/auditTBAdj.component.ts");
/* harmony import */ var _auditTracking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auditTracking.component */ "./src/app/views/audit/auditTracking.component.ts");









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
        path: 'TBAdj',
        component: _auditTBAdj_component__WEBPACK_IMPORTED_MODULE_7__["AuditTBAdjComponent"],
        data: {
            title: 'Audit / 3. Input TB Adjustment'
        },
        children: [
            {
                path: ':id',
                component: _auditTBAdj_component__WEBPACK_IMPORTED_MODULE_7__["AuditTBAdjComponent"],
                data: {
                    title: 'Audit / 3. Input TB Adjustment'
                },
                children: [
                    {
                        path: ':year',
                        component: _auditTBAdj_component__WEBPACK_IMPORTED_MODULE_7__["AuditTBAdjComponent"],
                        data: {
                            title: 'Audit -> 3. Input TB Adjustment'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'tracking',
        component: _auditTracking_component__WEBPACK_IMPORTED_MODULE_8__["AuditTrackingComponent"],
        data: {
            title: 'Audit / 3. Document Tracking'
        },
        children: [
            {
                path: ':id',
                component: _auditTracking_component__WEBPACK_IMPORTED_MODULE_8__["AuditTrackingComponent"],
                data: {
                    title: 'Audit / 3. Document Tracking'
                },
                children: [
                    {
                        path: ':year',
                        component: _auditTracking_component__WEBPACK_IMPORTED_MODULE_8__["AuditTrackingComponent"],
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
        this.tableRows = [{ 'Year': 'TCC Consulting Service Limited', 'Status': '3. Enter account details' }, { 'Year': 'Cloud Consulting Service Limited', 'Status': '2. Invoice' }];
        this.tableHeaders = [{ 'name': 'Year', 'prop': 'Year' }, { 'name': 'Status', 'prop': 'Status' }];
        console.log('constructing AuditComponent');
    }
    AuditComponent.prototype.newAudit = function () {
        this.router.navigate(['audit', "coinfo", this.accountInfo['Company Name'], this.currentYear.getFullYear() + "-" + (this.currentYear.getFullYear() + 1)]);
    };
    AuditComponent.prototype.continue = function (rowIndex) {
        var account = this.tableRows[rowIndex];
        var status = account['Status'].charAt(0);
        var route = '';
        switch (status) {
            case '0':
                route = 'coinfo';
                break;
            case '1':
                route = 'preAuditDoc';
                break;
            case '2':
                route = 'TB';
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
        console.log('status:' + status + ' route:' + route + ' Year:' + account['Year']);
        this.router.navigate(['audit', route, this.accountInfo['Company Name'], account['Year']]);
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
        if (this.accountInfo && this.accountInfo['audit']) {
            for (var _i = 0, _a = Object.keys(this.accountInfo['audit']); _i < _a.length; _i++) {
                var key = _a[_i];
                var tmpObj = {
                    'Year': key,
                    'Status': this.accountInfo['audit'][key]['Audit Status']
                };
                temp.push(tmpObj);
            }
        }
        this.tableRows = temp;
    };
    // reloadData(): void {
    //   let temp = [...this.tableRows];
    //   while (temp.length > 0) {
    //     temp.pop();
    //   }
    //   this.currentYearString = this.currentYear.getFullYear().toString();
    //   for (let i = 0; i < this.accountList.length; i++) {
    //     console.log('name: ' + JSON.stringify(this.accountList[i]['Company Name']));
    //     console.log('currentYear: ' + this.currentYearString);
    //     if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
    //       const tmpObj: { 'Company Name': string; 'Status': string; } = {
    //         'Company Name': this.accountList[i]['Company Name'],
    //         'Status': this.accountList[i]['audit'][this.currentYearString]['Audit Status']
    //       };
    //       temp.push(tmpObj);
    //     }
    //   }
    //   this.tableRows = temp;
    // }
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
                //if (this.accountList[i]['audit'] && this.accountList[i]['audit'][this.currentYearString]) {
                foundindex = i;
                this.accountInfo = this.accountList[i];
                this.reloadData();
                //}
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
/* harmony import */ var _auditTBAdj_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auditTBAdj.component */ "./src/app/views/audit/auditTBAdj.component.ts");
/* harmony import */ var _auditTracking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auditTracking.component */ "./src/app/views/audit/auditTracking.component.ts");
/* harmony import */ var _audit_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./audit-routing.module */ "./src/app/views/audit/audit-routing.module.ts");



















var AuditModule = /** @class */ (function () {
    function AuditModule() {
    }
    AuditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _audit_routing_module__WEBPACK_IMPORTED_MODULE_18__["AuditRoutingModule"],
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
            declarations: [_audit_component__WEBPACK_IMPORTED_MODULE_12__["AuditComponent"], _auditCoInfo_component__WEBPACK_IMPORTED_MODULE_13__["AuditCoInfoComponent"], _auditPreAuditS1_component__WEBPACK_IMPORTED_MODULE_14__["AuditPreAuditS1Component"], _auditTB_component__WEBPACK_IMPORTED_MODULE_15__["AuditTBComponent"], _auditTBAdj_component__WEBPACK_IMPORTED_MODULE_16__["AuditTBAdjComponent"], _auditTracking_component__WEBPACK_IMPORTED_MODULE_17__["AuditTrackingComponent"]]
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
    AuditPreAuditS1Component.prototype.getLinksToUpload = function () {
        var linkContent = {};
        linkContent['Company Name'] = this.accountInfo['Company Name'];
        linkContent['Upload Type'] = "PreAudit";
        linkContent['Type Details'] = {};
        linkContent['Type Details']['Audit Year'] = this.currentYearString;
        return window.location.href.split('#')[0] + "#/upload?id=" + btoa(JSON.stringify(linkContent));
    };
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
        this.document['documentRequestList'] = this.documentRequestList;
        var cnt = 0;
        for (var i = 0; i < this.documentRequestList.length; i++) {
            if (this.documentRequestList[i]['Asked']) {
                cnt++;
            }
        }
        this.document['sentDate'] = new Date();
        this.document['documentAskedCount'] = cnt;
        var documents = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.auditInfo['documents']);
        if (this.auditInfo['documents']) {
            documents.unshift(this.document);
            this.auditInfo['documents'] = documents;
        }
        else {
            documents.push(this.document);
            this.auditInfo['documents'] = documents;
        }
        this.document = JSON.parse(JSON.stringify(this.document));
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
    };
    AuditPreAuditS1Component.prototype.confirmDocument = function () {
        console.log("next");
        this.auditInfo['Audit Status'] = "2. Input TB";
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.router.navigate(['audit', 'TB', this.accountInfo['Company Name'], this.currentYearString]);
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
            if (_this.auditInfo['documents'] && _this.auditInfo['documents'][0]) {
                _this.document = JSON.parse(JSON.stringify(_this.auditInfo['documents'][0]));
                _this.documentRequestList = _this.document['documentRequestList'];
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuditTBComponent = /** @class */ (function () {
    function AuditTBComponent(route, router, elementRef, viewportScroller) {
        this.route = route;
        this.router = router;
        this.elementRef = elementRef;
        this.viewportScroller = viewportScroller;
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
    //thisStartTime = new Date().getTime();
    //thisEndTime = new Date().getTime();
    // adjustment for Opening Adjustment
    // adjustment for Exchange Difference
    // adjustment for Audit Fee
    // adjustment for Depreciation
    AuditTBComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        //this.thisStartTime = new Date().getTime();
        req.open('GET', 'assets/data/TBTemplate.json');
        req.onload = function () {
            //this.thisEndTime = new Date().getTime();
            //console.log("!!!!!! SSSSSSSSSSSSSSSSSSSS  used1:"+( (this.thisEndTime -this.thisStartTime)  / 1000.0 )+" seconds");
            cb(JSON.parse(req.response));
            //this.thisEndTime = new Date().getTime();
            //console.log("!!!!!! SSSSSSSSSSSSSSSSSSSS  used:"+( (this.thisEndTime -this.thisStartTime)  / 1000.0 )+" seconds");
        };
        req.send();
    };
    AuditTBComponent.prototype.genDocSend = function () {
        this.auditInfo['TB'] = this.thisTB;
        if (!this.accountInfo['audit'])
            this.accountInfo['audit'] = {};
        if (!this.accountInfo['audit'][this.currentYearString])
            this.accountInfo['audit'][this.currentYearString] = {};
        this.accountInfo['audit'][this.currentYearString]['TB'] = this.thisTB;
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.router.navigate(['audit', 'TBAdj', this.accountInfo['Company Name'], this.currentYearString]);
        return;
    };
    AuditTBComponent.prototype.scroll = function (id) {
        this.viewportScroller.scrollToAnchor(id);
    };
    AuditTBComponent.prototype.scrollToTop = function () {
        this.viewportScroller.scrollToPosition([0, 0]);
    };
    AuditTBComponent.prototype.keytab = function (event) {
        event.preventDefault();
        var myid = event.srcElement.attributes.id.nodeValue;
        console.log("id0: " + myid.replace("input", ""));
        var myidInt = parseInt(myid.replace("input", ""));
        console.log("id1: " + myidInt);
        console.log("id2: " + (myidInt + 1));
        document.getElementById('input' + (myidInt + 1)).focus();
        // event.preventDefault();
        // let element = event.srcElement.nextElementSibling; // get the sibling element
        // if(element == null) {  // check if its null
        //   console.log("haha");
        //   return;
        // }
        // else {
        //   console.log("hehe");
        //     element.focus();   // focus if not null
        // }
    };
    AuditTBComponent.prototype.getSumLA = function () {
        var sum = 0.0;
        if (!this.thisTB)
            return sum;
        for (var _i = 0, _a = this.thisTB; _i < _a.length; _i++) {
            var rawRecord = _a[_i];
            if (rawRecord['Last Year Audit']) {
                sum += parseFloat(rawRecord['Last Year Audit']);
            }
        }
        return sum;
    };
    AuditTBComponent.prototype.getSumCA = function () {
        var sum = 0.0;
        if (!this.thisTB)
            return sum;
        for (var _i = 0, _a = this.thisTB; _i < _a.length; _i++) {
            var rawRecord = _a[_i];
            if (rawRecord['Current Year Pe Client']) {
                sum += parseFloat(rawRecord['Current Year Pe Client']);
            }
        }
        return sum;
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
                console.log('fetching defaults:');
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }
    ]; };
    AuditTBComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auditTB.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTB.component.html")).default,
            styles: ["\n      .input-group > .input-group-prepend {\n        flex: 0 0 20%;\n      }\n      .input-group .input-group-text {\n        width: 100%;\n      }\n      :host >>> .card.customClass,\n      :host >>> .card.customClass .card-header,\n      :host >>> .panel-heading.customClass,\n      :host >>> .panel.customClass {\n        padding: 0px;\n      }\n\n      :host >>> .panel.customClass .panel-body {\n        padding: 0px;\n      }\n      \n      .table-condensed>thead>tr>th, .table-condensed>tbody>tr>th, .table-condensed>tfoot>tr>th, .table-condensed>thead>tr>td, .table-condensed>tbody>tr>td, .table-condensed>tfoot>tr>td {\n        padding: 1px;\n        }\n        .overlay-button{\n          position: fixed;\n          bottom: 0;\n          right: 0;\n          color: black;\n        }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]])
    ], AuditTBComponent);
    return AuditTBComponent;
}());



/***/ }),

/***/ "./src/app/views/audit/auditTBAdj.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/audit/auditTBAdj.component.ts ***!
  \*****************************************************/
/*! exports provided: AuditTBAdjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTBAdjComponent", function() { return AuditTBAdjComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuditTBAdjComponent = /** @class */ (function () {
    function AuditTBAdjComponent(route, router, elementRef, viewportScroller) {
        this.route = route;
        this.router = router;
        this.elementRef = elementRef;
        this.viewportScroller = viewportScroller;
        this.customClass = 'customClass';
        this.accountDetail = {};
        this.auditInfo = {};
        this.accountList = [];
        this.accountInfo = {};
        this.myroute = {};
        this.thisAdjustment = [{ "account": "", "type": "", "Adjustment": "" }];
        this.thisAdjustmentTypes = ["Opening adjustments", "Exchange difference", "Audit fee", "Depreciation"];
        this.thisHeaders = [
            'Account break down',
            'Group as per audit record',
            'Last Year Audit',
            'Current Year Audit',
            'Current Year Pe Client',
            'Current Year Adjustment',
            'Current Year Audit',
        ];
        console.log('contructing AuditTBAdjComponent');
    }
    //thisStartTime = new Date().getTime();
    //thisEndTime = new Date().getTime();
    // adjustment for Opening Adjustment
    // adjustment for Exchange Difference
    // adjustment for Audit Fee
    // adjustment for Depreciation
    AuditTBAdjComponent.prototype.addAddjustment = function (thisIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.thisAdjustment);
        console.log("thisIndex: " + thisIndex);
        var myindex = thisIndex ? thisIndex : temp.length;
        console.log("myindex: " + myindex);
        temp.splice(myindex, 0, { "account": "", "type": "", "Adjustment": "" });
        this.thisAdjustment = temp;
    };
    AuditTBAdjComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        //this.thisStartTime = new Date().getTime();
        req.open('GET', "assets/data/TBTemplate.json");
        req.onload = function () {
            //this.thisEndTime = new Date().getTime();
            //console.log("!!!!!! SSSSSSSSSSSSSSSSSSSS  used1:"+( (this.thisEndTime -this.thisStartTime)  / 1000.0 )+" seconds");
            cb(JSON.parse(req.response));
            //this.thisEndTime = new Date().getTime();
            //console.log("!!!!!! SSSSSSSSSSSSSSSSSSSS  used:"+( (this.thisEndTime -this.thisStartTime)  / 1000.0 )+" seconds");
        };
        req.send();
    };
    AuditTBAdjComponent.prototype.genDocSend = function () {
        this.auditInfo['TB'] = this.thisTB;
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        return;
    };
    AuditTBAdjComponent.prototype.scroll = function (id) {
        this.viewportScroller.scrollToAnchor(id);
    };
    AuditTBAdjComponent.prototype.scrollToTop = function () {
        this.viewportScroller.scrollToPosition([0, 0]);
    };
    AuditTBAdjComponent.prototype.keytab = function (event) {
        event.preventDefault();
        var myid = event.srcElement.attributes.id.nodeValue;
        console.log("id0: " + myid.replace("input", ""));
        var myidInt = parseInt(myid.replace("input", ""));
        console.log("id1: " + myidInt);
        console.log("id2: " + (myidInt + 1));
        document.getElementById('input' + (myidInt + 1)).focus();
        // event.preventDefault();
        // let element = event.srcElement.nextElementSibling; // get the sibling element
        // if(element == null) {  // check if its null
        //   console.log("haha");
        //   return;
        // }
        // else {
        //   console.log("hehe");
        //     element.focus();   // focus if not null
        // }
    };
    AuditTBAdjComponent.prototype.getSumAdjustment = function () {
        var sum = 0.0;
        if (!this.thisAdjustment)
            return sum;
        for (var _i = 0, _a = this.thisAdjustment; _i < _a.length; _i++) {
            var rawRecord = _a[_i];
            if (rawRecord['Adjustment']) {
                sum += parseFloat(rawRecord['Adjustment']);
            }
        }
        return sum;
    };
    AuditTBAdjComponent.prototype.getSumLA = function () {
        var sum = 0.0;
        if (!this.thisTB)
            return sum;
        for (var _i = 0, _a = this.thisTB; _i < _a.length; _i++) {
            var rawRecord = _a[_i];
            if (rawRecord['Last Year Audit']) {
                sum += parseFloat(rawRecord['Last Year Audit']);
            }
        }
        return sum;
    };
    AuditTBAdjComponent.prototype.getSumCA = function () {
        var sum = 0.0;
        if (!this.thisTB)
            return sum;
        for (var _i = 0, _a = this.thisTB; _i < _a.length; _i++) {
            var rawRecord = _a[_i];
            if (rawRecord['Current Year Pe Client']) {
                sum += parseFloat(rawRecord['Current Year Pe Client']);
            }
        }
        return sum;
    };
    AuditTBAdjComponent.prototype.getAdjustmentForHeader = function (input) {
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
    AuditTBAdjComponent.prototype.ngOnInit = function () {
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
    AuditTBAdjComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }
    ]; };
    AuditTBAdjComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auditTBAdj.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit/auditTBAdj.component.html")).default,
            styles: ["\n      .input-group > .input-group-prepend {\n        flex: 0 0 20%;\n      }\n      .input-group .input-group-text {\n        width: 100%;\n      }\n      :host >>> .card.customClass,\n      :host >>> .card.customClass .card-header,\n      :host >>> .panel-heading.customClass,\n      :host >>> .panel.customClass {\n        padding: 0px;\n      }\n\n      :host >>> .panel.customClass .panel-body {\n        padding: 0px;\n      }\n      \n      .table-condensed>thead>tr>th, .table-condensed>tbody>tr>th, .table-condensed>tfoot>tr>th, .table-condensed>thead>tr>td, .table-condensed>tbody>tr>td, .table-condensed>tfoot>tr>td {\n        padding: 1px;\n        }\n        .overlay-button{\n          position: fixed;\n          bottom: 0;\n          right: 0;\n          color: black;\n        }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]])
    ], AuditTBAdjComponent);
    return AuditTBAdjComponent;
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