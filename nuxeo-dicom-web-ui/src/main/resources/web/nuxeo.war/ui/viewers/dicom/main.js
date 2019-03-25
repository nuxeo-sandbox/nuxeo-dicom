(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; height: 100%\">\n    <app-dwv></app-dwv>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dwv_dwv_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dwv/dwv.module */ "./src/app/dwv/dwv.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_dwv_dwv_module__WEBPACK_IMPORTED_MODULE_1__["DwvModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dwv/dwv.component.css":
/*!***************************************!*\
  !*** ./src/app/dwv/dwv.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dwv {\n  font-family: Arial, Helvetica, sans-serif;\n  height: 90%; }\n\n.button-row {\n  text-align: center;\n  padding: 5px;;\n}\n\n.mat-raised-button {\n  margin: 0.1em;\n}\n\n.legend {\n  text-align: center;\n  font-size: 8pt;\n  margin: 1em;\n}\n\n/* Layers */\n\n.layerContainer {\n    position: relative; padding: 0;\n    margin: auto; text-align: center; }\n\n.imageLayer {\n    position: absolute;\n    left: 0px; }\n\n.drawDiv {\n    position: absolute; pointer-events: none; }\n\n/* drag&drop */\n\n.dropBox {\n    border: 5px dashed #ccc;\n    margin: auto;\n    text-align: center; vertical-align: middle;\n    background: white; color: grey;  }\n\n.dropBox.hover { border: 5px dashed #cc0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHd2L2R3di5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0VBQ3pDLFdBQVcsRUFBRTs7QUFFZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQSxXQUFXOztBQUNYO0lBQ0ksa0JBQWtCLEVBQUUsVUFBVTtJQUM5QixZQUFZLEVBQUUsa0JBQWtCLEVBQUU7O0FBQ3RDO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVMsRUFBRTs7QUFDZjtJQUNJLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFOztBQUU5QyxjQUFjOztBQUNkO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0IsRUFBRSxzQkFBc0I7SUFDMUMsaUJBQWlCLEVBQUUsV0FBVyxHQUFHOztBQUNyQyxpQkFBaUIsdUJBQXVCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9kd3YvZHd2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZHd2IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogOTAlOyB9XG5cbi5idXR0b24tcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7O1xufVxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjFlbTtcbn1cbi5sZWdlbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBtYXJnaW46IDFlbTtcbn1cblxuLyogTGF5ZXJzICovXG4ubGF5ZXJDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmltYWdlTGF5ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7IH1cbi5kcmF3RGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi8qIGRyYWcmZHJvcCAqL1xuLmRyb3BCb3gge1xuICAgIGJvcmRlcjogNXB4IGRhc2hlZCAjY2NjO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7IGNvbG9yOiBncmV5OyAgfVxuLmRyb3BCb3guaG92ZXIgeyBib3JkZXI6IDVweCBkYXNoZWQgI2NjMDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/dwv/dwv.component.html":
/*!****************************************!*\
  !*** ./src/app/dwv/dwv.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dwv\">\n  <mat-progress-bar mode=\"determinate\" value=\"{{ loadProgress }}\"></mat-progress-bar>\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"menu\" [disabled]=\"!dataLoaded\">{{ selectedTool }}\n      <mat-icon>arrow_drop_down</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" yPosition=\"below\">\n      <button *ngFor=\"let tool of tools\" mat-menu-item (value)=\"tool\" (click)=\"onChangeTool(tool)\">{{ tool }}</button>\n    </mat-menu>\n\n    <button mat-raised-button color=\"primary\" (click)=\"onReset()\" [disabled]=\"!dataLoaded\">Reset</button>\n    <button mat-raised-button color=\"primary\" (click)=\"openTagsDialog()\" [disabled]=\"!dataLoaded\">Tags</button>\n  </div>\n  <div class=\"layerContainer\">\n    <div class=\"dropBox\">Drag and drop data here.</div>\n    <canvas class=\"imageLayer\">Only for HTML5 compatible browsers...</canvas>\n    <div class=\"drawDiv\"></div>\n  </div>\n  <div class=\"legend\">\n    <p>Powered by <a href=\"https://github.com/ivmartel/dwv\" title=\"dwv on github\">dwv</a> {{ versions.dwv }}\n    and Angular {{ versions.angular }}</p></div>\n</div>\n"

/***/ }),

/***/ "./src/app/dwv/dwv.component.ts":
/*!**************************************!*\
  !*** ./src/app/dwv/dwv.component.ts ***!
  \**************************************/
/*! exports provided: DwvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DwvComponent", function() { return DwvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dwv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dwv */ "./node_modules/dwv/dist/dwv.min.js");
/* harmony import */ var dwv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dwv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tags_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags-dialog.component */ "./src/app/dwv/tags-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// gui overrides
// decode query
dwv__WEBPACK_IMPORTED_MODULE_1__["utils"].decodeQuery = dwv__WEBPACK_IMPORTED_MODULE_1__["utils"].base.decodeQuery;
// progress
dwv__WEBPACK_IMPORTED_MODULE_1__["gui"].displayProgress = function () { };
// get element
dwv__WEBPACK_IMPORTED_MODULE_1__["gui"].getElement = dwv__WEBPACK_IMPORTED_MODULE_1__["gui"].base.getElement;
// refresh element
dwv__WEBPACK_IMPORTED_MODULE_1__["gui"].refreshElement = dwv__WEBPACK_IMPORTED_MODULE_1__["gui"].base.refreshElement;
// Image decoders (for web workers)
dwv__WEBPACK_IMPORTED_MODULE_1__["image"].decoderScripts = {
    'jpeg2000': 'assets/dwv/decoders/pdfjs/decode-jpeg2000.js',
    'jpeg-lossless': 'assets/dwv/decoders/rii-mango/decode-jpegloss.js',
    'jpeg-baseline': 'assets/dwv/decoders/pdfjs/decode-jpegbaseline.js'
};
var DwvComponent = /** @class */ (function () {
    function DwvComponent(dialog) {
        this.dialog = dialog;
        this.tools = ['Scroll', 'ZoomAndPan', 'WindowLevel', 'Draw'];
        this.selectedTool = 'Select Tool';
        this.loadProgress = 0;
        this.dataLoaded = false;
        this.versions = {
            'dwv': dwv__WEBPACK_IMPORTED_MODULE_1__["getVersion"](),
            'angular': _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full
        };
    }
    DwvComponent.prototype.ngOnInit = function () {
        // create app
        this.dwvApp = new dwv__WEBPACK_IMPORTED_MODULE_1__["App"]();
        // initialise app
        this.dwvApp.init({
            'containerDivId': 'dwv',
            'tools': this.tools,
            'shapes': ['Ruler'],
            'isMobile': false
        });
        // progress
        var self = this;
        this.dwvApp.addEventListener('load-progress', function (event) {
            self.loadProgress = event.loaded;
        });
        this.dwvApp.addEventListener('load-end', function (event) {
            // set data loaded flag
            self.dataLoaded = true;
            // set dicom tags
            self.tags = self.dwvApp.getTags();
            // set the selected tool
            if (self.dwvApp.isMonoSliceData() && self.dwvApp.getImage().getNumberOfFrames() === 1) {
                self.selectedTool = 'ZoomAndPan';
            }
            else {
                self.selectedTool = 'Scroll';
            }
        });
        // load dicom data
        if (document.referrer !== document.location.href) {
            console.log(document.referrer);
            console.log(document.location.href);
            var parts = document.referrer.split('\?');
            var loadUrl = parts[0] + 'dicom?' + parts[1];
            this.dwvApp.loadURLs([loadUrl]);
        }
    };
    DwvComponent.prototype.onChangeTool = function (tool) {
        if (this.dwvApp) {
            this.selectedTool = tool;
            this.dwvApp.onChangeTool({ currentTarget: { value: tool } });
        }
    };
    DwvComponent.prototype.onReset = function () {
        if (this.dwvApp) {
            this.dwvApp.onDisplayReset();
        }
    };
    DwvComponent.prototype.openTagsDialog = function () {
        this.dialog.open(_tags_dialog_component__WEBPACK_IMPORTED_MODULE_3__["TagsDialogComponent"], {
            width: '90%',
            height: '90%',
            data: { title: 'DICOM Tags', value: this.tags }
        });
    };
    DwvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dwv',
            template: __webpack_require__(/*! ./dwv.component.html */ "./src/app/dwv/dwv.component.html"),
            styles: [__webpack_require__(/*! ./dwv.component.css */ "./src/app/dwv/dwv.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DwvComponent);
    return DwvComponent;
}());



/***/ }),

/***/ "./src/app/dwv/dwv.module.ts":
/*!***********************************!*\
  !*** ./src/app/dwv/dwv.module.ts ***!
  \***********************************/
/*! exports provided: DwvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DwvModule", function() { return DwvModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _dwv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dwv.component */ "./src/app/dwv/dwv.component.ts");
/* harmony import */ var _tags_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags-dialog.component */ "./src/app/dwv/tags-dialog.component.ts");
/* harmony import */ var _tags_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tags-table.component */ "./src/app/dwv/tags-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DwvModule = /** @class */ (function () {
    function DwvModule() {
    }
    DwvModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dwv_component__WEBPACK_IMPORTED_MODULE_5__["DwvComponent"],
                _tags_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TagsDialogComponent"],
                _tags_table_component__WEBPACK_IMPORTED_MODULE_7__["TagsTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            entryComponents: [
                _tags_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TagsDialogComponent"]
            ],
            exports: [
                _dwv_component__WEBPACK_IMPORTED_MODULE_5__["DwvComponent"]
            ]
        })
    ], DwvModule);
    return DwvModule;
}());



/***/ }),

/***/ "./src/app/dwv/tags-dialog.component.html":
/*!************************************************!*\
  !*** ./src/app/dwv/tags-dialog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    <app-dwv-tags-table [data]=\"data.value\"></app-dwv-tags-table>\n</div>\n"

/***/ }),

/***/ "./src/app/dwv/tags-dialog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dwv/tags-dialog.component.ts ***!
  \**********************************************/
/*! exports provided: TagsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsDialogComponent", function() { return TagsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TagsDialogComponent = /** @class */ (function () {
    function TagsDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TagsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dwv-tags-dialog',
            template: __webpack_require__(/*! ./tags-dialog.component.html */ "./src/app/dwv/tags-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TagsDialogComponent);
    return TagsDialogComponent;
}());



/***/ }),

/***/ "./src/app/dwv/tags-table.component.html":
/*!***********************************************!*\
  !*** ./src/app/dwv/tags-table.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n              \n    <table style=\"width: 100%\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z4\">\n        <!-- name column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n        <!-- value column -->\n        <ng-container matColumnDef=\"value\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Value </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\n        </ng-container>\n        <!-- row template -->\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/dwv/tags-table.component.ts":
/*!*********************************************!*\
  !*** ./src/app/dwv/tags-table.component.ts ***!
  \*********************************************/
/*! exports provided: TagsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsTableComponent", function() { return TagsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsTableComponent = /** @class */ (function () {
    function TagsTableComponent() {
        this.displayedColumns = ['name', 'value'];
    }
    TagsTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TagsTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TagsTableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TagsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TagsTableComponent.prototype, "sort", void 0);
    TagsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dwv-tags-table',
            template: __webpack_require__(/*! ./tags-table.component.html */ "./src/app/dwv/tags-table.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TagsTableComponent);
    return TagsTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dbrown/software/dwv-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map