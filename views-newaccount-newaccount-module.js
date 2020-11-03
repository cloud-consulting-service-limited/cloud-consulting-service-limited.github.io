(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-newaccount-newaccount-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccount.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccount.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">New Account</h1>\n\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRows\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeaders\" [name]=\"label.name\" [prop]=\"label.prop\" [sortable]=\"true\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        {{ value }}\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)='continue(rowIndex)'>Continue</button>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n  <br>\n  <br>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Company Name</label>\n    <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\n      <h5>{{model[\"Company Name\"]}} </h5>\n      - [ {{model[\"Status\"]}} ]\n    </ng-template>\n    <input [(ngModel)]=\"selected\" [typeahead]=\"tableRows\" typeaheadOptionField=\"Company Name\" [typeaheadMinLength]=\"0\"\n      (ngModelChange)=\"typeaheadNoResults($event)\" [typeaheadItemTemplate]=\"customItemTemplate\" class=\"form-control\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\"> Create account only if it is not exist</small>\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"!noResult\">Company Already Exist </div>\n  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!noResult\" [routerLink]=\"['/newaccount','create',selected]\"\n    [hidden]=\"!selected || !noResult\">Create Account</button>\n  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"noResult\" (click)='continue(selectedIndex)'\n    [hidden]=\"!selected || noResult\">Contine Working on {{selected}}</button>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountBasic.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountBasic.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">Basic Company Info</h1>\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"inputAddress\">Company Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Company Name\"\n        [(ngModel)]=\"accountInfo['Company Name']\" readonly>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputAddress2\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Email\"\n        [(ngModel)]=\"accountInfo['Email']\">\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">First Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"First Name\"\n          [(ngModel)]=\"accountInfo['First Name']\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Last Name\"\n          [(ngModel)]=\"accountInfo['Last Name']\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputCity\">Phone</label>\n        <input type=\"tel\" class=\"form-control\" id=\"inputCity\" [(ngModel)]=\"accountInfo['Phone']\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputCity\">Whatsapp</label>\n        <input type=\"tel\" class=\"form-control\" id=\"inputCity\" [(ngModel)]=\"accountInfo['Whatsapp']\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputZip\">Wechat</label>\n        <input type=\"tel\" class=\"form-control\" id=\"inputZip\" [(ngModel)]=\"accountInfo['Wechat']\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputAddress2\">Address</label>\n      <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"accountInfo['Address']\"\n        rows=\"6\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\">Next</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountCreate.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountCreate.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"basic-addon3\">Co Name</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\" value=\"{{ id }}\" readonly />\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"change-of-name\">Change of name</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Change of name\" aria-label=\"Change of Name\"\n      aria-describedby=\"Change of name\" [(ngModel)]=\"accountDetail['change-of-name']\" />\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"older-name\">Older name</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Older Name\" aria-label=\"Older name\"\n      aria-describedby=\"Older name\" [(ngModel)]=\"accountDetail['older-name']\" />\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"date-of-name-change\">Date of name change(i.e. 15 Mar 2019)</span>\n    </div>\n    <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"accountDetail['date-of-name-change'] \"\n      bsDatepicker [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\"/>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"limited-by-shares-or-guarantee\">Limited by shares or guarantee</span>\n    </div>\n    <select class=\"custom-select\" id=\"limited-by-shares-or-guarantee-input\" [(ngModel)]=\"accountDetail['limited-by-shares-or-gurantee']\">\n      <option value=\" 1\" selected>Limited by share</option>\n      <option value=\"2\">Limited by guarantee</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"financial-reporting\">Financial reporting</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Financial reporting\" aria-label=\"Financial reporting\"\n      aria-describedby=\"Financial reporting\" [(ngModel)]=\"accountDetail['financial-reporting']\" />\n  </div>\n\n  <label for=\"basic-url\">Directors</label>\n\n  <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRows\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeaders\" [name]=\"label.name\" [prop]=\"label.prop\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCell(label.prop, rowIndex)\"\n          *ngIf=\"!editing[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValue($event, label.prop, rowIndex)\" *ngIf=\"editing[rowIndex + '-' + label.prop]\"\n          [type]=\"label.inputType\" class=\"form-control\" [value]=\"value\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRow(rowIndex)\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"add()\" class=\"float-right\">Add a new column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n  </ngx-datatable>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"principal-activities\">Principal activities</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Principal activities\" aria-label=\"Principal activities\"\n      aria-describedby=\"Principal activities\" [(ngModel)]=\"accountDetail['financial-activities']\">\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"director-appointment-clause\">Director- Appointment clause</span>\n    </div>\n    <select class=\"custom-select\" id=\"director-appointment-clause-input\" [(ngModel)]=\"accountDetail['director-appointment-clause']\">\n      <option value=\" 1\" selected>Retired and eligible</option>\n      <option value=\"2\">No provision</option>\n      <option value=\"3\">Unlimited</option>\n      <option value=\"4\">re-elected</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"permitted-indemnity\">Permitted Indemnity</span>\n    </div>\n    <select class=\"custom-select\" id=\"permitted-indemnity-input\" [(ngModel)]=\"accountDetail['permitted-indemnity']\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"nature-of-income\">Nature of income</span>\n    </div>\n    <select class=\"custom-select\" id=\"nature-of-income-input\" [(ngModel)]=\"accountDetail['nature-of-income']\">\n      <option value=\" 1\" selected>Sales</option>\n      <option value=\"2\">Services</option>\n      <option value=\"3\">No income</option>\n      <option value=\"4\">Rental</option>\n      <option value=\"5\">Dormant</option>\n      <option value=\"6\">Donation and divident income</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"offshore\">Offshore</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"Offshore\" aria-describedby=\"Offshore\"\n      [(ngModel)]=\"accountDetail['offshore']\"/>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"last-year-is-period-or-first-incop\">Last year is period or first incop</span>\n    </div>\n    <select class=\"custom-select\" id=\"last-year-is-period-or-first-incop-input\" [(ngModel)]=\"accountDetail['last-year-is-period-or-first-incop']\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"first-incorp-date\">first incorp date (eg 15 Mar 17)</span>\n    </div>\n    <input type=\"text\" placeholder=\"\" class=\"form-control\"  [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker [(ngModel)]=\"accountDetail['first-incorp-date'] \"/>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"first-incorporated\">First incorporated?</span>\n    </div>\n    <select class=\"custom-select\" id=\"first-incorporated-input\" [(ngModel)]=\"accountDetail['first-incorporated']\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"first-sme-frs\">First SME FRS?</span>\n    </div>\n    <select class=\"custom-select\" id=\"first-sme-frs-input\" [(ngModel)]=\"accountDetail['first-sme-frs']\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"input-this-year-ye\">Input this year YE here (eg 15 Mar 17)</span>\n    </div>\n    <input type=\"text\" placeholder=\"\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker [(ngModel)]=\"accountDetail['input-this-year-ye'] \"/>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"currenccy\">Currency</span>\n    </div>\n    <select class=\"custom-select\" id=\"currency-input\" [(ngModel)]=\"accountDetail['currency']\">\n      <option value=\" 1\" selected>HK$</option>\n      <option value=\"2\">US$</option>\n      <option value=\"3\">CAD</option>\n      <option value=\"4\">EUR</option>\n      <option value=\"5\">AUD</option>\n      <option value=\"6\">GBP</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"type-of-co\">Type of Co</span>\n    </div>\n    <select class=\"custom-select\" id=\"type-of-co-input\" [(ngModel)]=\"accountDetail['type-of-co']\">\n      <option value=\" 1\" selected>Company</option>\n      <option value=\"2\">Association</option>\n      <option value=\"3\">Group</option>\n    </select>\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"no-shares\">No. shares</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"No. shares\" aria-describedby=\"No. shares\"\n      [(ngModel)]=\"accountDetail['no-shares']\"/>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"ro\">RO</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"RO\" aria-describedby=\"RO\" [(ngModel)]=\"accountDetail['ro']\"/>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"any-holding-co\">Any holding co</span>\n    </div>\n    <select class=\"custom-select\" id=\"any-holding-co-input\" [(ngModel)]=\"accountDetail['any-holding-co']\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <div class=\" input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"any-immediate-co\">Any immediate co</span>\n    </div>\n    <select class=\"custom-select\" id=\"any-immediate-co-input\" [(ngModel)]=\"accountDetail['any-immediate-co']\">\n      <option value=\" 1\" selected>No</option>\n      <option value=\"2\">Yes</option>\n    </select>\n  </div>\n\n  <label>Sub</label>\n  <ngx-datatable class=\" bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n      [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsSub\" [scrollbarH]=\"true\">\n    <ngx-datatable-column *ngFor=\"let label of tableHeadersSub\" [name]=\"label.name\" [prop]=\"label.prop\"\n      [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"double Click here \" (dblclick)=\"editCellSub(label.prop, rowIndex)\"\n          *ngIf=\"!editingSub[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n          (keyup.enter)=\"updateValueSub($event, label.prop, rowIndex)\" *ngIf=\"editingSub[rowIndex + '-' + label.prop]\"\n          [type]=\"label.inputType\" class=\"form-control\" [value]=\"value\" />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button (click)=\"deleteRowSub(rowIndex)\">remove</button>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer>\n      <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n        let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n        <div class=\"page-count\">\n          <span *ngIf=\"selectedMessage\">\n            {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n          </span>\n          {{ rowCount.toLocaleString() }} {{ totalMessage }}\n          <a href=\"javascript:void(0)\" (click)=\"addSub()\" class=\"float-right\">Add a new column</a>\n        </div>\n      </ng-template>\n    </ngx-datatable-footer>\n    </ngx-datatable>\n\n    <label>Asso</label>\n    <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n      [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsAsso\" [scrollbarH]=\"true\">\n      <ngx-datatable-column *ngFor=\"let label of tableHeadersAsso\" [name]=\"label.name\" [prop]=\"label.prop\"\n        [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <span title=\"double Click here \" (dblclick)=\"editCellAsso(label.prop, rowIndex)\"\n            *ngIf=\"!editingAsso[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n            {{ value }}\n          </span>\n          <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n            (keyup.enter)=\"updateValueAsso($event, label.prop, rowIndex)\"\n            *ngIf=\"editingAsso[rowIndex + '-' + label.prop]\" [type]=\"label.inputType\" class=\"form-control\"\n            [value]=\"value\" />\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <button (click)=\"deleteRowAsso(rowIndex)\">remove</button>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedMessage\">\n              {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n            </span>\n            {{ rowCount.toLocaleString() }} {{ totalMessage }}\n            <a href=\"javascript:void(0)\" (click)=\"addAsso()\" class=\"float-right\">Add a new column</a>\n          </div>\n        </ng-template>\n      </ngx-datatable-footer>\n    </ngx-datatable>\n\n    <label>Shareholders</label>\n\n    <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n      [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsShareHolder\" [scrollbarH]=\"true\">\n      <ngx-datatable-column *ngFor=\"let label of tableHeadersShareHolder\" [name]=\"label.name\" [prop]=\"label.prop\"\n        [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <span title=\"double Click here \" (dblclick)=\"editCellShareHolder(label.prop, rowIndex)\"\n            *ngIf=\"!editingShareHolder[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n            {{ value }}\n          </span>\n          <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n            (keyup.enter)=\"updateValueShareHolder($event, label.prop, rowIndex)\"\n            *ngIf=\"editingShareHolder[rowIndex + '-' + label.prop]\" [type]=\"label.inputType\" class=\"form-control\"\n            [value]=\"value\" />\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <button (click)=\"deleteRowShareHolder(rowIndex)\">remove</button>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedMessage\">\n              {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n            </span>\n            {{ rowCount.toLocaleString() }} {{ totalMessage }}\n            <a href=\"javascript:void(0)\" (click)=\"addShareHolder()\" class=\"float-right\">Add a new column</a>\n          </div>\n        </ng-template>\n      </ngx-datatable-footer>\n    </ngx-datatable>\n\n    <label>Amount due from (to) related companies</label>\n\n    <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n      [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsAmountdueCo\" [scrollbarH]=\"true\">\n      <ngx-datatable-column *ngFor=\"let label of tableHeadersAmountdueCo\" [name]=\"label.name\" [prop]=\"label.prop\"\n        [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <span title=\"double Click here \" (dblclick)=\"editCellAmountdueCo(label.prop, rowIndex)\"\n            *ngIf=\"!editingAmountdueCo[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n            {{ value }}\n          </span>\n          <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n            (keyup.enter)=\"updateValueAmountdueCo($event, label.prop, rowIndex)\"\n            *ngIf=\"editingAmountdueCo[rowIndex + '-' + label.prop]\" [type]=\"label.inputType\" class=\"form-control\"\n            [value]=\"value\" />\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <button (click)=\"deleteRowAmountdueCo(rowIndex)\">remove</button>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedMessage\">\n              {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n            </span>\n            {{ rowCount.toLocaleString() }} {{ totalMessage }}\n            <a href=\"javascript:void(0)\" (click)=\"addAmountdueCo()\" class=\"float-right\">Add a new column</a>\n          </div>\n        </ng-template>\n      </ngx-datatable-footer>\n    </ngx-datatable>\n\n    <label>Amount due from (to) fellow subsidiaries</label>\n\n    <ngx-datatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"100\" [columnMode]=\"'force'\"\n      [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"tableRowsAmountdueSub\" [scrollbarH]=\"true\">\n      <ngx-datatable-column *ngFor=\"let label of tableHeadersAmountdueSub\" [name]=\"label.name\" [prop]=\"label.prop\"\n        [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <span title=\"double Click here \" (dblclick)=\"editCellAmountdueSub(label.prop, rowIndex)\"\n            *ngIf=\"!editingAmountdueSub[rowIndex + '-' + label.prop]\" class=\"container-fluid\">\n            {{ value }}\n          </span>\n          <input autofocus (blur)=\"updateValue($event, label.prop, rowIndex)\"\n            (keyup.enter)=\"updateValueAmountdueSub($event, label.prop, rowIndex)\"\n            *ngIf=\"editingAmountdueSub[rowIndex + '-' + label.prop]\" [type]=\"label.inputType\" class=\"form-control\"\n            [value]=\"value\" />\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Action\" [sortable]=\"false\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <button (click)=\"deleteRowAmountdueSub(rowIndex)\">remove</button>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-footer>\n        <ng-template ngx-datatable-footer-template let-rowCount=\"rowCount\" let-pageSize=\"pageSize\"\n          let-selectedCount=\"selectedCount\" let-curPage=\"curPage\" let-offset=\"offset\" let-isVisible=\"isVisible\">\n          <div class=\"page-count\">\n            <span *ngIf=\"selectedMessage\">\n              {{ selectedCount.toLocaleString() }} {{ selectedMessage }} /\n            </span>\n            {{ rowCount.toLocaleString() }} {{ totalMessage }}\n            <a href=\"javascript:void(0)\" (click)=\"addAmountdueSub()\" class=\"float-right\">Add a new column</a>\n          </div>\n        </ng-template>\n      </ngx-datatable-footer>\n    </ngx-datatable>\n\n    <button type=\"button\" class=\"btn btn-primary btn-lg float-right\" (click)=\"save()\">\n      Save and Finish\n    </button>\n    <br />\n\n    <label></label>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountDocument.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountDocument.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">Document Upload Request</h1>\n  <accordion>\n    <accordion-group heading=\"Customer Document Upload History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"accountInfo['documentsUploaded']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{rowIndex+1}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"File Type\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">File Type</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"File Name\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">File Name</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Uploaded Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\"></label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n\n    <accordion-group [heading]=\"documentContentHeader\" [isOpen]=\"true\">\n\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">English</label>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">中文</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmail4\">Ask</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmail4\">Uploaded</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputEmail4\">Checked</label>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <hr />\n          </div>\n        </div>\n        <div class=\"form-row\" *ngFor=\"let item of documentRequestList ; let i = index\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">{{item[\"English\"]}}</label>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputEmail4\">{{item[\"Chinese\"]}}</label>\n          </div>\n          <div class=\"form-group col-md-1\">\n            <input type=\"checkbox\" [(ngModel)]=\"this.documentRequestList[i]['Asked']\" />\n          </div>\n          <div class=\"form-group col-md-1\">\n            <label *ngIf=\"this.documentRequestList[i]['Uploaded']\"> &#10004; </label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <input type=\"checkbox\" [(ngModel)]=\"this.documentRequestList[i]['Checked']\" />\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\" *ngIf=\"!this.document['sentDate']\"> Send Document\n          Reques to Client</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\" *ngIf=\"this.document['sentDate']\"> Resend\n          Additional Document Request</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"confirmDocument()\"\n          *ngIf=\"this.document['sentDate']\">Documents Confirmed</button>\n\n        <ng-template #documentSentMsgTemplate>\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Document Sent</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Document Sent\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">OK</button>\n          </div>\n        </ng-template>\n\n      </div>\n    </accordion-group>\n\n    <accordion-group heading=\"Company Info\" [isOpen]=\"false\">\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputCompany\">Company Name :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"text\" class=\"form-control\" id=\"inputCompany\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Company Name']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputAddress\">Email :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Email']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputEmail4\">Name: </label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Display Name']\" readonly>\n          </div>\n        </div>\n      </div>\n    </accordion-group>\n\n    <accordion-group heading=\"Document Request send History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"accountInfo['documents']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{rowIndex+1}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Sent Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label\n              class=\"form-control\">{{accountInfo['documents'][rowIndex]['sentDate'] | date: 'yyyy-MM-dd HH:mm:ss' }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Number of Documents\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">{{accountInfo['documents'][rowIndex]['documentAskedCount'] }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n\n  </accordion>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountInvoice.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountInvoice.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">Invoice</h1>\n  <accordion>\n    <accordion-group heading=\"Invoice History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"accountInfo['invoices']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{rowIndex+1}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Sent Date and Time\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label\n              class=\"form-control\">{{accountInfo['invoices'][rowIndex]['sentDate'] | date: 'yyyy-MM-dd HH:mm:ss' }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Total\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">HKD$ {{accountInfo['invoices'][rowIndex]['total']}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Expiry Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label\n              class=\"form-control\">{{accountInfo['invoices'][rowIndex]['Expiry Date'] | date: 'yyyy-MM-dd'}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n    <accordion-group [heading]=\"invoiceContentHeader\" [isOpen]=\"true\">\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputCompany\">Company Name :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"text\" class=\"form-control\" id=\"inputCompany\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Company Name']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputAddress\">Email :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Email']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputEmail4\">Name: </label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Display Name']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAddress2\">Address</label>\n          <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"accountInfo['Address']\" readonly\n            rows=\"6\"></textarea>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"inputAddress2\">Invoice Date</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"invoice['Invoice Date']\"\n                [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker>\n            </div>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"inputAddress2\">Expiry Date</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"invoice['Expiry Date']\"\n                [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker>\n            </div>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"inputAddress2\">Class</label>\n              <select class=\"custom-select\" id=\"inputGroupSelect01\">\n                <option selected value=\"Class 0\">Class 0</option>\n                <option selected value=\"Class 1\">Class 1</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <label>Line of Items:</label>\n\n        <div>\n          <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"100\" [messages]=\"{emptyMessage:''}\"\n            [columnMode]=\"'force'\" [footerHeight]=\"0\" [rowHeight]=\"'auto'\" [rows]=\"tableRows\" [scrollbarH]=\"true\">\n            <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <label class=\"form-control\">{{rowIndex+1}}</label>\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Product/Service\" [sortable]=\"false\" maxWidth=\"150\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <select class=\"custom-select\" id=\"inputGroupSelect01\" value=\"Audit\"\n                  [(ngModel)]=\"tableRows[rowIndex]['Product']\">\n                  <option [value]=\"option\" *ngFor=\"let option of lineOptions\">{{option}}</option>\n                </select>\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Description\" [sortable]=\"false\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"tableRows[rowIndex]['Description']\">\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Amount(HKD)\" [sortable]=\"false\" maxWidth=\"150\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <input type=\"number\" min=\"0.00\" step=\"1\" class=\"form-control\"\n                  [(ngModel)]=\"tableRows[rowIndex]['Amount']\">\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"&nbsp;\" [sortable]=\"false\" maxWidth=\"60\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <button type=\"button\" class=\"close\" aria-label=\"Delete\" (click)='deleteRow(rowIndex)'\n                  class=\"form-control\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-2\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"add()\">Add Line</button>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Sub-Total (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\">{{subTotal}}</label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Discount Value (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <input type=\"number\" min=\"0.00\" step=\"1\" [(ngModel)]=\"discount\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Total (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label>{{total}}</label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Deposit (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <input type=\"number\" min=\"0.00\" step=\"1\" [(ngModel)]=\"deposit\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Balance Due (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\">{{balanceDue}}</label>\n          </div>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\" *ngIf=\"!this.invoice['sentDate']\"> Save and Send\n          Invoice</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\" *ngIf=\"this.invoice['sentDate']\"> Resend modified\n          Invoice</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"confirmInvoice()\"\n          *ngIf=\"this.invoice['sentDate']\">Invoice Confirmed and Send document upload request</button>\n\n        <ng-template #invoiceSentMsgTemplate>\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Invoice Sent</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Invoice Sent\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">OK</button>\n          </div>\n        </ng-template>\n\n      </div>\n    </accordion-group>\n  </accordion>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountQuotation.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountQuotation.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <h1 class=\"display-3\">Quotation</h1>\n  <accordion>\n    <accordion-group heading=\"Quotation History\" [isOpen]=\"false\">\n      <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"3\" [messages]=\"{emptyMessage:''}\"\n        [columnMode]=\"'force'\" [footerHeight]=\"30\" [rowHeight]=\"'auto'\" [rows]=\"accountInfo['quotations']\"\n        [scrollbarH]=\"true\">\n        <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label>{{rowIndex+1}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Sent Date and Time\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label\n              class=\"form-control\">{{accountInfo['quotations'][rowIndex]['sentDate'] | date: 'yyyy-MM-dd HH:mm:ss' }}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Total\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label class=\"form-control\">HKD$ {{accountInfo['quotations'][rowIndex]['total']}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Expiry Date\" [sortable]=\"false\">\n          <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <label\n              class=\"form-control\">{{accountInfo['quotations'][rowIndex]['Expiry Date'] | date: 'yyyy-MM-dd'}}</label>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </accordion-group>\n    <accordion-group [heading]=\"quotationContentHeader\" [isOpen]=\"true\">\n      <div class=\"container\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputCompany\">Company Name :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"text\" class=\"form-control\" id=\"inputCompany\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Company Name']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputAddress\">Email :</label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Email']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputEmail4\">Name: </label>\n          </div>\n          <div class=\"form-group col-md-9\">\n            <input type=\"email\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"\"\n              [(ngModel)]=\"accountInfo['Display Name']\" readonly>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAddress2\">Address</label>\n          <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"accountInfo['Address']\" readonly\n            rows=\"6\"></textarea>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"inputAddress2\">Quotation Date</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"quotation['Quotation Date']\"\n                [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker>\n            </div>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"inputAddress2\">Expiry Date</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"quotation['Expiry Date']\"\n                [bsConfig]=\"{dateInputFormat: 'YYYY-MM-DD'}\" bsDatepicker>\n            </div>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"inputAddress2\">Class</label>\n              <select class=\"custom-select\" id=\"inputGroupSelect01\">\n                <option selected value=\"Class 0\">Class 0</option>\n                <option selected value=\"Class 1\">Class 1</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <label>Line of Items:</label>\n\n        <div>\n          <ngx-datatable class=\"bootstrap \" [headerHeight]=\"50\" [limit]=\"100\" [messages]=\"{emptyMessage:''}\"\n            [columnMode]=\"'force'\" [footerHeight]=\"0\" [rowHeight]=\"'auto'\" [rows]=\"tableRows\" [scrollbarH]=\"true\">\n            <ngx-datatable-column name=\"#\" [sortable]=\"false\" maxWidth=\"40\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <label class=\"form-control\">{{rowIndex+1}}</label>\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Product/Service\" [sortable]=\"false\" maxWidth=\"150\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <select class=\"custom-select\" id=\"inputGroupSelect01\" value=\"Audit\"\n                  [(ngModel)]=\"tableRows[rowIndex]['Product']\">\n                  <option [value]=\"option\" *ngFor=\"let option of lineOptions\">{{option}}</option>\n                </select>\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Description\" [sortable]=\"false\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"tableRows[rowIndex]['Description']\">\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"Amount(HKD)\" [sortable]=\"false\" maxWidth=\"150\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <input type=\"number\" min=\"0.00\" step=\"1\" class=\"form-control\"\n                  [(ngModel)]=\"tableRows[rowIndex]['Amount']\">\n              </ng-template>\n            </ngx-datatable-column>\n            <ngx-datatable-column name=\"&nbsp;\" [sortable]=\"false\" maxWidth=\"60\">\n              <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                <button type=\"button\" class=\"close\" aria-label=\"Delete\" (click)='deleteRow(rowIndex)'\n                  class=\"form-control\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </ng-template>\n            </ngx-datatable-column>\n          </ngx-datatable>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-2\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"add()\">Add Line</button>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Sub-Total (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\">{{subTotal}}</label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Discount Value (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <input type=\"number\" min=\"0.00\" step=\"1\" [(ngModel)]=\"discount\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Total (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label>{{total}}</label>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Deposit (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <input type=\"number\" min=\"0.00\" step=\"1\" [(ngModel)]=\"deposit\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputAddress2\"></label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\" class=\"float-right\">Balance Due (HKD$):</label>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputAddress2\">{{balanceDue}}</label>\n          </div>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\" *ngIf=\"!this.quotation['sentDate']\"> Save and\n          Send Quotation</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"next()\" *ngIf=\"this.quotation['sentDate']\"> Resend\n          modified Quotation</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"confirmQuotation()\"\n          *ngIf=\"this.quotation['sentDate']\">Quotation Confirmed</button>\n\n        <ng-template #quotationSentMsgTemplate>\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Quotation Sent</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Quotation Sent\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide()\">OK</button>\n          </div>\n        </ng-template>\n\n      </div>\n    </accordion-group>\n  </accordion>\n</div>\n");

/***/ }),

/***/ "./src/app/views/newaccount/newaccount-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/newaccount/newaccount-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NewaccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountRoutingModule", function() { return NewaccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newaccount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newaccount.component */ "./src/app/views/newaccount/newaccount.component.ts");
/* harmony import */ var _newaccountCreate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newaccountCreate.component */ "./src/app/views/newaccount/newaccountCreate.component.ts");
/* harmony import */ var _newaccountBasic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newaccountBasic.component */ "./src/app/views/newaccount/newaccountBasic.component.ts");
/* harmony import */ var _newaccountQuotation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newaccountQuotation.component */ "./src/app/views/newaccount/newaccountQuotation.component.ts");
/* harmony import */ var _newaccountInvoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newaccountInvoice.component */ "./src/app/views/newaccount/newaccountInvoice.component.ts");
/* harmony import */ var _newaccountDocument_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newaccountDocument.component */ "./src/app/views/newaccount/newaccountDocument.component.ts");









var routes = [
    {
        path: '',
        component: _newaccount_component__WEBPACK_IMPORTED_MODULE_3__["NewaccountComponent"],
        data: {
            title: 'New account'
        },
    },
    {
        path: 'create',
        component: _newaccountBasic_component__WEBPACK_IMPORTED_MODULE_5__["NewaccountBasicComponent"],
        data: {
            title: 'Create Account /  0. Basic Company Info'
        },
        children: [
            {
                path: ':id',
                component: _newaccountBasic_component__WEBPACK_IMPORTED_MODULE_5__["NewaccountBasicComponent"],
                data: {
                    title: 'Create Account -> 0. Basic Company Info'
                }
            }
        ]
    },
    {
        path: 'invoice',
        component: _newaccountInvoice_component__WEBPACK_IMPORTED_MODULE_7__["NewaccountInvoiceComponent"],
        data: {
            title: 'Create Account / 2. Invoice'
        },
        children: [
            {
                path: ':id',
                component: _newaccountInvoice_component__WEBPACK_IMPORTED_MODULE_7__["NewaccountInvoiceComponent"],
                data: {
                    title: 'Create Account / 2. Invoice'
                }
            }
        ]
    },
    {
        path: 'quotation',
        component: _newaccountQuotation_component__WEBPACK_IMPORTED_MODULE_6__["NewaccountQuotationComponent"],
        data: {
            title: 'Create Account /  1. Quotation'
        },
        children: [
            {
                path: ':id',
                component: _newaccountQuotation_component__WEBPACK_IMPORTED_MODULE_6__["NewaccountQuotationComponent"],
                data: {
                    title: 'Create Account -> 1. Quotation'
                }
            }
        ]
    },
    {
        path: 'document',
        component: _newaccountDocument_component__WEBPACK_IMPORTED_MODULE_8__["NewaccountDocumentComponent"],
        data: {
            title: 'Create Account /  3. Document Upload'
        },
        children: [
            {
                path: ':id',
                component: _newaccountDocument_component__WEBPACK_IMPORTED_MODULE_8__["NewaccountDocumentComponent"],
                data: {
                    title: 'Create Account -> 3. Document Upload'
                }
            }
        ]
    },
    {
        path: 'detail',
        component: _newaccountCreate_component__WEBPACK_IMPORTED_MODULE_4__["NewaccountCreateComponent"],
        data: {
            title: 'Create Account -> 4. Enter account details'
        },
        children: [
            {
                path: ':id',
                component: _newaccountCreate_component__WEBPACK_IMPORTED_MODULE_4__["NewaccountCreateComponent"],
                data: {
                    title: 'Create Account -> 4. Enter account details'
                }
            }
        ]
    }
];
var NewaccountRoutingModule = /** @class */ (function () {
    function NewaccountRoutingModule() {
    }
    NewaccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NewaccountRoutingModule);
    return NewaccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/newaccount/newaccount.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/newaccount/newaccount.component.ts ***!
  \**********************************************************/
/*! exports provided: NewaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountComponent", function() { return NewaccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewaccountComponent = /** @class */ (function () {
    function NewaccountComponent(route, router) {
        this.route = route;
        this.router = router;
        this.noResult = true;
        this.tableRows = [{ 'Company Name': 'TCC Consulting Service Limited', 'Status': '3. Enter account details' }, { 'Company Name': 'Cloud Consulting Service Limited', 'Status': '2. Invoice' }];
        this.tableHeaders = [{ 'name': 'Company Name', 'prop': 'Company Name' }, { 'name': 'Status', 'prop': 'Status' }];
        console.log('constructing NewaccountComponent');
    }
    NewaccountComponent.prototype.continue = function (rowIndex) {
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
    NewaccountComponent.prototype.ngOnInit = function () {
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
        console.log(stringAccountList);
        this.accountList = JSON.parse(stringAccountList);
        if (!this.accountList) {
            this.accountList = [{ 'Company Name': 'TCC Consulting Service Limited', 'Status': '3. Upload Documents' }, { 'Company Name': 'Cloud Consulting Service Limited', 'Status': '2. Invoice' }];
        }
        this.tableRows = this.accountList;
    };
    NewaccountComponent.prototype.typeaheadNoResults = function (event) {
        var foundindex = -1;
        for (var i = 0; i < this.tableRows.length; i++) {
            if (this.tableRows[i]['Company Name'] === this.selected) {
                foundindex = i;
                break;
            }
        }
        if (foundindex >= 0) {
            this.selectedIndex = foundindex.toString();
        }
        this.noResult = (foundindex < 0);
    };
    NewaccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NewaccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newaccount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccount.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewaccountComponent);
    return NewaccountComponent;
}());



/***/ }),

/***/ "./src/app/views/newaccount/newaccount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/newaccount/newaccount.module.ts ***!
  \*******************************************************/
/*! exports provided: NewaccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountModule", function() { return NewaccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _newaccount_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newaccount.component */ "./src/app/views/newaccount/newaccount.component.ts");
/* harmony import */ var _newaccountCreate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./newaccountCreate.component */ "./src/app/views/newaccount/newaccountCreate.component.ts");
/* harmony import */ var _newaccountBasic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./newaccountBasic.component */ "./src/app/views/newaccount/newaccountBasic.component.ts");
/* harmony import */ var _newaccountQuotation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newaccountQuotation.component */ "./src/app/views/newaccount/newaccountQuotation.component.ts");
/* harmony import */ var _newaccountInvoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./newaccountInvoice.component */ "./src/app/views/newaccount/newaccountInvoice.component.ts");
/* harmony import */ var _newaccountDocument_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./newaccountDocument.component */ "./src/app/views/newaccount/newaccountDocument.component.ts");
/* harmony import */ var _newaccount_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./newaccount-routing.module */ "./src/app/views/newaccount/newaccount-routing.module.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");



















var NewaccountModule = /** @class */ (function () {
    function NewaccountModule() {
    }
    NewaccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _newaccount_routing_module__WEBPACK_IMPORTED_MODULE_17__["NewaccountRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_18__["AccordionModule"].forRoot(),
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_6__["TypeaheadModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_newaccount_component__WEBPACK_IMPORTED_MODULE_11__["NewaccountComponent"],
                _newaccountCreate_component__WEBPACK_IMPORTED_MODULE_12__["NewaccountCreateComponent"],
                _newaccountBasic_component__WEBPACK_IMPORTED_MODULE_13__["NewaccountBasicComponent"],
                _newaccountQuotation_component__WEBPACK_IMPORTED_MODULE_14__["NewaccountQuotationComponent"],
                _newaccountInvoice_component__WEBPACK_IMPORTED_MODULE_15__["NewaccountInvoiceComponent"],
                _newaccountDocument_component__WEBPACK_IMPORTED_MODULE_16__["NewaccountDocumentComponent"]
            ]
        })
    ], NewaccountModule);
    return NewaccountModule;
}());



/***/ }),

/***/ "./src/app/views/newaccount/newaccountBasic.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/newaccount/newaccountBasic.component.ts ***!
  \***************************************************************/
/*! exports provided: NewaccountBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountBasicComponent", function() { return NewaccountBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewaccountBasicComponent = /** @class */ (function () {
    function NewaccountBasicComponent(route, router) {
        this.route = route;
        this.router = router;
        this.accountInfo = {};
        this.accountList = [];
        console.log("constructing NewaccountBasicComponent");
    }
    NewaccountBasicComponent.prototype.next = function () {
        this.accountInfo['Status'] = '1. Quotation';
        var foundindex = -1;
        for (var i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i]['Company Name'] === this.accountInfo['Company Name']) {
                foundindex = i;
                break;
            }
        }
        if (foundindex >= 0) {
            this.accountList[foundindex] = this.accountInfo;
        }
        else {
            this.accountList.push(this.accountInfo);
        }
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.router.navigate(['newaccount', 'quotation', this.id]);
    };
    NewaccountBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
            }
            _this.id = route.params['id'];
            console.log("id: " + _this.id);
            var stringAccountList = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringAccountList);
            if (!_this.accountList) {
                _this.accountList = [{ "Company Name": "TCC Consulting Service Limited", "Status": "3. Enter account details" }, { "Company Name": "Cloud Consulting Service Limited", "Status": "2. Invoice" }];
            }
            var foundindex = -1;
            for (var i = 0; i < _this.accountList.length; i++) {
                console.log("Company Name:" + _this.accountList[i]['Company Name']);
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            console.log("found index:" + foundindex);
            if (foundindex > 0)
                _this.accountInfo = _this.accountList[foundindex];
            _this.accountInfo["Company Name"] = _this.id;
        });
    };
    NewaccountBasicComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NewaccountBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newaccountBasic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountBasic.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewaccountBasicComponent);
    return NewaccountBasicComponent;
}());



/***/ }),

/***/ "./src/app/views/newaccount/newaccountCreate.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/newaccount/newaccountCreate.component.ts ***!
  \****************************************************************/
/*! exports provided: NewaccountCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountCreateComponent", function() { return NewaccountCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewaccountCreateComponent = /** @class */ (function () {
    function NewaccountCreateComponent(route, router) {
        this.route = route;
        this.router = router;
        this.tableHeaders = [{ "name": "Name", "prop": "Name" }, { "name": "Option", "prop": "Option" }, { "name": "Appointed On", "prop": "Appointed On" }, { "name": "Resigned On", "prop": "Resigned On" }, { "name": "Salary", "prop": "Salary" }, { "name": "MPF", "prop": "MPF" }];
        this.tableHeadersSub = [{ "name": "Name of sub", "prop": "Name of sub" }, { "name": "Place of sub", "prop": "Place of sub" }, { "name": "% of holding sub", "prop": "% of holding sub" }, { "name": "Activity of sub", "prop": "Activity of sub" }];
        this.tableHeadersAsso = [{ "name": "Name of asso", "prop": "Name of asso" }, { "name": "Place of asso", "prop": "Place of asso" }, { "name": "% of holding asso", "prop": "% of holding asso" }, { "name": "Activity of asso", "prop": "Activity of asso" }];
        this.tableHeadersShareHolder = [{ "name": "Name", "prop": "Name" }, { "name": "CY", "prop": "CY" }, { "name": "LY", "prop": "LY" }];
        this.tableHeadersAmountdueCo = [{ "name": "Name", "prop": "Name" }, { "name": "CY", "prop": "CY" }, { "name": "LY", "prop": "LY" }];
        this.tableHeadersAmountdueSub = [{ "name": "Name", "prop": "Name" }, { "name": "CY", "prop": "CY" }, { "name": "LY", "prop": "LY" }];
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
        console.log("contructing NewaccountCreateComponent");
    }
    NewaccountCreateComponent.prototype.save = function () {
        this.accountDetail['directors'] = this.tableRows;
        this.accountDetail['sub'] = this.tableRowsSub;
        this.accountDetail['asso'] = this.tableRowsAsso;
        this.accountDetail['share-holder'] = this.tableRowsShareHolder;
        this.accountDetail['amount-due-co'] = this.tableRowsAmountdueCo;
        this.accountDetail['amount-due-sub'] = this.tableRowsAmountdueSub;
        this.accountInfo['accountDetail'] = this.accountDetail;
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.router.navigate(['newaccount']);
    };
    NewaccountCreateComponent.prototype.add = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.push({ "Name": "Double Click to Edit", "Option": "Double Click to Edit", "Appointed On": "Double Click to Edit", "Resigned On": "Double Click to Edit", "Salary": "Double Click to Edit", "MPF": "Double Click to Edit" });
        this.tableRows = temp;
    };
    NewaccountCreateComponent.prototype.deleteRow = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.splice(rowIndex, 1);
        this.tableRows = temp;
    };
    NewaccountCreateComponent.prototype.addSub = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsSub);
        temp.push({ "Name of sub": "Double Click to Edit", "Place of sub": "Double Click to Edit", "% of holding sub": "Double Click to Edit", "Activity of sub": "Double Click to Edit" });
        this.tableRowsSub = temp;
    };
    NewaccountCreateComponent.prototype.deleteRowSub = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsSub);
        temp.splice(rowIndex, 1);
        this.tableRowsSub = temp;
    };
    NewaccountCreateComponent.prototype.addAsso = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAsso);
        temp.push({ "Name of asso": "Double Click to Edit", "Place of asso": "Double Click to Edit", "% of holding asso": "Double Click to Edit", "Activity of asso": "Double Click to Edit" });
        this.tableRowsAsso = temp;
    };
    NewaccountCreateComponent.prototype.deleteRowAsso = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAsso);
        temp.splice(rowIndex, 1);
        this.tableRowsAsso = temp;
    };
    NewaccountCreateComponent.prototype.addShareHolder = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsShareHolder);
        temp.push({ "Name": "Double Click to Edit", "CY": "Double Click to Edit", "LY": "Double Click to Edit" });
        this.tableRowsShareHolder = temp;
    };
    NewaccountCreateComponent.prototype.deleteRowShareHolder = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsShareHolder);
        temp.splice(rowIndex, 1);
        this.tableRowsShareHolder = temp;
    };
    NewaccountCreateComponent.prototype.addAmountdueCo = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueCo);
        temp.push({ "Name": "Double Click to Edit", "CY": "Double Click to Edit", "LY": "Double Click to Edit" });
        this.tableRowsAmountdueCo = temp;
    };
    NewaccountCreateComponent.prototype.deleteRowAmountdueCo = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueCo);
        temp.splice(rowIndex, 1);
        this.tableRowsAmountdueCo = temp;
    };
    NewaccountCreateComponent.prototype.addAmountdueSub = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueSub);
        temp.push({ "Name": "Double Click to Edit", "CY": "Double Click to Edit", "LY": "Double Click to Edit" });
        this.tableRowsAmountdueSub = temp;
    };
    NewaccountCreateComponent.prototype.deleteRowAmountdueSub = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueSub);
        temp.splice(rowIndex, 1);
        this.tableRowsAmountdueSub = temp;
    };
    NewaccountCreateComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.tableRows[rowIndex][cell] = event.target.value;
        this.tableRows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
    };
    NewaccountCreateComponent.prototype.editCell = function (cell, rowIndex) {
        this.editing = {};
        this.editing[rowIndex + '-' + cell] = true;
    };
    NewaccountCreateComponent.prototype.updateValueSub = function (event, cell, rowIndex) {
        this.editingSub[rowIndex + '-' + cell] = false;
        this.tableRowsSub[rowIndex][cell] = event.target.value;
        this.tableRowsSub = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsSub);
    };
    NewaccountCreateComponent.prototype.editCellSub = function (cell, rowIndex) {
        this.editingSub = {};
        this.editingSub[rowIndex + '-' + cell] = true;
    };
    NewaccountCreateComponent.prototype.updateValueAsso = function (event, cell, rowIndex) {
        this.editingAsso[rowIndex + '-' + cell] = false;
        this.tableRowsAsso[rowIndex][cell] = event.target.value;
        this.tableRowsAsso = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAsso);
    };
    NewaccountCreateComponent.prototype.editCellAsso = function (cell, rowIndex) {
        this.editingAsso = {};
        this.editingAsso[rowIndex + '-' + cell] = true;
    };
    NewaccountCreateComponent.prototype.updateValueShareHolder = function (event, cell, rowIndex) {
        this.editingShareHolder[rowIndex + '-' + cell] = false;
        this.tableRowsShareHolder[rowIndex][cell] = event.target.value;
        this.tableRowsShareHolder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsShareHolder);
    };
    NewaccountCreateComponent.prototype.editCellShareHolder = function (cell, rowIndex) {
        this.editingShareHolder = {};
        this.editingShareHolder[rowIndex + '-' + cell] = true;
    };
    NewaccountCreateComponent.prototype.updateValueAmountdueCo = function (event, cell, rowIndex) {
        this.editingAmountdueCo[rowIndex + '-' + cell] = false;
        this.tableRowsAmountdueCo[rowIndex][cell] = event.target.value;
        this.tableRowsAmountdueCo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueCo);
    };
    NewaccountCreateComponent.prototype.editCellAmountdueCo = function (cell, rowIndex) {
        this.editingAmountdueCo = {};
        this.editingAmountdueCo[rowIndex + '-' + cell] = true;
    };
    NewaccountCreateComponent.prototype.updateValueAmountdueSub = function (event, cell, rowIndex) {
        this.editingAmountdueSub[rowIndex + '-' + cell] = false;
        this.tableRowsAmountdueSub[rowIndex][cell] = event.target.value;
        this.tableRowsAmountdueSub = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRowsAmountdueSub);
    };
    NewaccountCreateComponent.prototype.editCellAmountdueSub = function (cell, rowIndex) {
        this.editingAmountdueSub = {};
        this.editingAmountdueSub[rowIndex + '-' + cell] = true;
    };
    NewaccountCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
            }
            _this.id = route.params['id'];
            console.log("id: " + _this.id);
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = 0;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0)
                return;
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
    NewaccountCreateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NewaccountCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newaccountCreate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountCreate.component.html")).default,
            styles: ["\n      .input-group>.input-group-prepend {\n          flex: 0 0 20%;\n      } .input-group .input-group-text {\n          width: 100%;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewaccountCreateComponent);
    return NewaccountCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/newaccount/newaccountDocument.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/newaccount/newaccountDocument.component.ts ***!
  \******************************************************************/
/*! exports provided: NewaccountDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountDocumentComponent", function() { return NewaccountDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var NewaccountDocumentComponent = /** @class */ (function () {
    function NewaccountDocumentComponent(route, modalService, router) {
        this.route = route;
        this.modalService = modalService;
        this.router = router;
        this.document = {};
        this.accountInfo = {};
        this.accountList = [];
        this.discount = 0;
        this.deposit = 0;
        this.documentRequestList = [
            { "Chinese": "業務性質", "English": "Principal Activities", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "年結日", "English": "Proposed first year end", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "最近一年審計報告", "English": "Last year audit report", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "最近一年稅計算表", "English": "Last year tax computation", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "最近一年報稅表", "English": "Last year profits tax return", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "所有銀行月結單", "English": "All bank statements for the audit period", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "簽回附件的銀行詢証函", "English": "Sign and return back the bank confirmation", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "簽回附件的稅務代表委任書", "English": "Sign and return back the appointmnet letter of tax rep", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "簽回附件的核數師委任書", "English": "Sign and return back the engagement letters", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "所有董事及股東的身份證", "English": "Please provide the HKID of all directors & shareholders", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "請提供商業登記證", "English": "Please provide the BR of the Company", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "收支表，資產負債表，明細表", "English": "Current year profit and loss and balance sheet, and ledger", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "僱主填報的薪酬及退休金報稅表", "English": "All Employers' return (56B form)", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "租約", "English": "Tenancy agreement", "Asked": false, "Uploaded": false, "Checked": false },
            { "Chinese": "請提供以下文件", "English": "Statutory documents as per attachment", "Asked": false, "Uploaded": false, "Checked": false }
        ];
        console.log("constructing NewaccountDocumentComponent");
    }
    NewaccountDocumentComponent.prototype.confirmDocument = function () {
        this.accountInfo['documents'][0]['confirmed'] = true;
        this.accountInfo['documents'][0]['confirmed date'] = new Date();
        this.accountInfo['Status'] = '4. Enter Account Details';
        for (var i = 1; i < this.accountInfo['documents'].length; i++) {
            this.accountInfo['documents'][i]['confirmed'] = false;
        }
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.router.navigate(['newaccount', 'detail', this.id]);
    };
    NewaccountDocumentComponent.prototype.next = function () {
        this.document['documentRequestList'] = this.documentRequestList;
        var cnt = 0;
        for (var i = 0; i < this.documentRequestList.length; i++) {
            if (this.documentRequestList[i]['Asked']) {
                cnt++;
            }
        }
        this.document['sentDate'] = new Date();
        this.document['documentAskedCount'] = cnt;
        var documents = [];
        if (this.accountInfo['documents']) {
            this.accountInfo['documents'].unshift(this.document);
        }
        else {
            documents.push(this.document);
            this.accountInfo['documents'] = documents;
        }
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.modalRef = this.modalService.show(this.templateref);
    };
    Object.defineProperty(NewaccountDocumentComponent.prototype, "documentContentHeader", {
        get: function () {
            var returnString = "";
            if (this.document["sentDate"]) {
                returnString = "Document Upload Request - ( Sent on " + new Date(this.document["sentDate"]) + " )";
            }
            else {
                returnString = "Document Upload Request - New";
            }
            return returnString;
        },
        enumerable: true,
        configurable: true
    });
    NewaccountDocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
            }
            _this.id = route.params['id'];
            console.log("id: " + _this.id);
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = 0;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0)
                return;
            _this.accountInfo = _this.accountList[foundindex];
            _this.accountInfo['Display Name'] = _this.accountInfo["First Name"] + " " + _this.accountInfo["Last Name"];
            if (_this.accountInfo['documents'] && _this.accountInfo['documents'][_this.accountInfo['documents'].length - 1]) {
                _this.document = _this.accountInfo['documents'][0];
                _this.documentRequestList = _this.accountInfo['documents'][0].documentRequestList;
            }
        });
    };
    NewaccountDocumentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('documentSentMsgTemplate'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NewaccountDocumentComponent.prototype, "templateref", void 0);
    NewaccountDocumentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newaccountDocument.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountDocument.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewaccountDocumentComponent);
    return NewaccountDocumentComponent;
}());



/***/ }),

/***/ "./src/app/views/newaccount/newaccountInvoice.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/newaccount/newaccountInvoice.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewaccountInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountInvoiceComponent", function() { return NewaccountInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var NewaccountInvoiceComponent = /** @class */ (function () {
    function NewaccountInvoiceComponent(route, modalService, router) {
        this.route = route;
        this.modalService = modalService;
        this.router = router;
        this.invoice = {};
        this.accountInfo = {};
        this.accountList = [];
        this.discount = 0;
        this.deposit = 0;
        this.tableRows = [];
        this.lineOptions = ["Audit", "Tax Filing", "Tax Service", "NAR1", "Act as Co Sec", "RO Service", "Disbursement", "BR Fee", "Incorporation", "Share Transfer", "Deregistration", "Rental"];
        console.log("constructing NewaccountInvoiceComponent");
    }
    NewaccountInvoiceComponent.prototype.confirmInvoice = function () {
        this.accountInfo['invoices'][0]['confirmed'] = true;
        this.accountInfo['invoices'][0]['confirmed date'] = new Date();
        this.accountInfo['Status'] = '3. Document Upload';
        for (var i = 1; i < this.accountInfo['invoices'].length; i++) {
            this.accountInfo['invoices'][i]['confirmed'] = false;
        }
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.router.navigate(['newaccount', 'document', this.id]);
    };
    NewaccountInvoiceComponent.prototype.next = function () {
        this.invoice['discount'] = this.discount;
        this.invoice['deposit'] = this.deposit;
        this.invoice['lineItems'] = this.tableRows;
        this.invoice['sentDate'] = new Date();
        this.invoice['total'] = this.total;
        var invoices = [];
        if (this.accountInfo['invoices']) {
            this.accountInfo['invoices'].unshift(this.invoice);
        }
        else {
            invoices.push(this.invoice);
            this.accountInfo['invoices'] = invoices;
        }
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.modalRef = this.modalService.show(this.templateref);
    };
    NewaccountInvoiceComponent.prototype.add = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.push({ "Product": "Audit", "Description": "", "Amount": "0" });
        console.log(JSON.stringify(temp));
        this.tableRows = temp;
    };
    NewaccountInvoiceComponent.prototype.deleteRow = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.splice(rowIndex, 1);
        this.tableRows = temp;
    };
    ;
    Object.defineProperty(NewaccountInvoiceComponent.prototype, "invoiceContentHeader", {
        get: function () {
            var returnString = "";
            if (this.invoice["sentDate"]) {
                returnString = "Invoice Content - ( Sent on " + new Date(this.invoice["sentDate"]) + " )";
            }
            else {
                returnString = "Invoice Content - New";
            }
            return returnString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewaccountInvoiceComponent.prototype, "total", {
        get: function () {
            var total = 0;
            total = this.subTotal - this.discount;
            return total;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NewaccountInvoiceComponent.prototype, "balanceDue", {
        get: function () {
            var balanceDue = 0;
            balanceDue = this.total - this.deposit;
            return balanceDue;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NewaccountInvoiceComponent.prototype, "subTotal", {
        get: function () {
            var sum = 0;
            for (var i = 0; i < this.tableRows.length; i++) {
                sum += this.tableRows[i]['Amount'];
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    ;
    NewaccountInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
            }
            _this.id = route.params['id'];
            console.log("id: " + _this.id);
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = 0;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0)
                return;
            _this.accountInfo = _this.accountList[foundindex];
            _this.accountInfo['Display Name'] = _this.accountInfo["First Name"] + " " + _this.accountInfo["Last Name"];
            var tmp = new Date();
            var now = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
            var exp = new Date(tmp.getFullYear(), tmp.getMonth() + 1, tmp.getDate());
            _this.invoice["Invoice Date"] = now;
            _this.invoice["Expiry Date"] = exp;
            if (_this.accountInfo['invoices'] && _this.accountInfo['invoices'][0]) {
                _this.invoice = _this.accountInfo['invoices'][0];
                _this.tableRows = _this.accountInfo['invoices'][0]['lineItems'];
                _this.discount = _this.accountInfo['invoices'][0]['discount'];
                _this.deposit = _this.accountInfo['invoices'][0]['deposit'];
                _this.invoice["Expiry Date"] = new Date(_this.invoice["Expiry Date"]);
                _this.invoice["Invoice Date"] = new Date(_this.invoice["Invoice Date"]);
            }
            else {
                _this.tableRows = _this.accountInfo['quotations'][0]['lineItems'];
                _this.discount = _this.accountInfo['quotations'][0]['discount'];
                _this.deposit = _this.accountInfo['quotations'][0]['deposit'];
            }
        });
    };
    NewaccountInvoiceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('invoiceSentMsgTemplate'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NewaccountInvoiceComponent.prototype, "templateref", void 0);
    NewaccountInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newaccountInvoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountInvoice.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewaccountInvoiceComponent);
    return NewaccountInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/views/newaccount/newaccountQuotation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/newaccount/newaccountQuotation.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewaccountQuotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaccountQuotationComponent", function() { return NewaccountQuotationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var NewaccountQuotationComponent = /** @class */ (function () {
    function NewaccountQuotationComponent(route, modalService, router) {
        this.route = route;
        this.modalService = modalService;
        this.router = router;
        this.quotation = {};
        this.accountInfo = {};
        this.accountList = [];
        this.discount = 0;
        this.deposit = 0;
        this.tableRows = [];
        this.lineOptions = ["Audit", "Tax Filing", "Tax Service", "NAR1", "Act as Co Sec", "RO Service", "Disbursement", "BR Fee", "Incorporation", "Share Transfer", "Deregistration", "Rental"];
        console.log("constructing NewaccountQuotationComponent");
    }
    NewaccountQuotationComponent.prototype.confirmQuotation = function () {
        this.accountInfo['quotations'][0]['confirmed'] = true;
        this.accountInfo['quotations'][0]['confirmed date'] = new Date();
        this.accountInfo['Status'] = '2. Invoice';
        for (var i = 1; i < this.accountInfo['quotations'].length; i++) {
            this.accountInfo['quotations'][i]['confirmed'] = false;
        }
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.router.navigate(['newaccount', 'invoice', this.id]);
    };
    NewaccountQuotationComponent.prototype.next = function () {
        this.quotation['discount'] = this.discount;
        this.quotation['deposit'] = this.deposit;
        this.quotation['lineItems'] = this.tableRows;
        this.quotation['sentDate'] = new Date();
        this.quotation['total'] = this.total;
        var quotations = [];
        if (this.accountInfo['quotations']) {
            this.accountInfo['quotations'].unshift(this.quotation);
        }
        else {
            quotations.push(this.quotation);
            this.accountInfo['quotations'] = quotations;
        }
        localStorage.setItem('accountList', JSON.stringify(this.accountList));
        this.modalRef = this.modalService.show(this.templateref);
    };
    NewaccountQuotationComponent.prototype.add = function () {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.push({ "Product": "Audit", "Description": "", "Amount": "0" });
        console.log(JSON.stringify(temp));
        this.tableRows = temp;
    };
    NewaccountQuotationComponent.prototype.deleteRow = function (rowIndex) {
        var temp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tableRows);
        temp.splice(rowIndex, 1);
        this.tableRows = temp;
    };
    ;
    Object.defineProperty(NewaccountQuotationComponent.prototype, "quotationContentHeader", {
        get: function () {
            var returnString = "";
            if (this.quotation["sentDate"]) {
                returnString = "Quotation Content - ( Sent on " + new Date(this.quotation["sentDate"]) + " )";
            }
            else {
                returnString = "Quotation Content - New";
            }
            return returnString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewaccountQuotationComponent.prototype, "total", {
        get: function () {
            var total = 0;
            total = this.subTotal - this.discount;
            return total;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NewaccountQuotationComponent.prototype, "balanceDue", {
        get: function () {
            var balanceDue = 0;
            balanceDue = this.total - this.deposit;
            return balanceDue;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NewaccountQuotationComponent.prototype, "subTotal", {
        get: function () {
            var sum = 0;
            for (var i = 0; i < this.tableRows.length; i++) {
                sum += this.tableRows[i]['Amount'];
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    ;
    NewaccountQuotationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // generate random values for mainChart
        this.route.params.subscribe(function (params) {
            // this.id = +params['id']; // (+) converts string 'id' to a number
            var route = _this.route.snapshot;
            while (route.firstChild) {
                route = route.firstChild;
            }
            _this.id = route.params['id'];
            console.log("id: " + _this.id);
            var stringInput = localStorage.getItem('accountList');
            _this.accountList = JSON.parse(stringInput);
            if (!_this.accountList) {
                return;
            }
            var foundindex = 0;
            for (var i = 0; i < _this.accountList.length; i++) {
                if (_this.accountList[i]['Company Name'] === _this.id) {
                    foundindex = i;
                    break;
                }
            }
            if (foundindex < 0)
                return;
            _this.accountInfo = _this.accountList[foundindex];
            _this.accountInfo['Display Name'] = _this.accountInfo["First Name"] + " " + _this.accountInfo["Last Name"];
            var tmp = new Date();
            var now = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
            var exp = new Date(tmp.getFullYear(), tmp.getMonth() + 1, tmp.getDate());
            _this.quotation["Quotation Date"] = now;
            _this.quotation["Expiry Date"] = exp;
            if (_this.accountInfo['quotations'] && _this.accountInfo['quotations'][0]) {
                _this.quotation = _this.accountInfo['quotations'][0];
                _this.tableRows = _this.accountInfo['quotations'][0]['lineItems'];
                _this.discount = _this.accountInfo['quotations'][0]['discount'];
                _this.deposit = _this.accountInfo['quotations'][0]['deposit'];
                _this.quotation["Expiry Date"] = new Date(_this.quotation["Expiry Date"]);
                _this.quotation["Quotation Date"] = new Date(_this.quotation["Quotation Date"]);
            }
        });
    };
    NewaccountQuotationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('quotationSentMsgTemplate'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NewaccountQuotationComponent.prototype, "templateref", void 0);
    NewaccountQuotationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newaccountQuotation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/newaccount/newaccountQuotation.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewaccountQuotationComponent);
    return NewaccountQuotationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-newaccount-newaccount-module.js.map