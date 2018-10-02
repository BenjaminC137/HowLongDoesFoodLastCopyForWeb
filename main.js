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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<app-home></app-home>\n<footer>© 2018</footer>"

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

//import { HomeComponent } from '.home/;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _food_details_food_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-details/food-details.component */ "./src/app/food-details/food-details.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _new_item_form_new_item_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-item-form/new-item-form.component */ "./src/app/new-item-form/new-item-form.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
                _food_details_food_details_component__WEBPACK_IMPORTED_MODULE_6__["FoodDetailsComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"],
                _new_item_form_new_item_form_component__WEBPACK_IMPORTED_MODULE_8__["NewItemFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/food-details/food-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/food-details/food-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/food-details/food-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/food-details/food-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div> Food: {{food.name}} ID: {{food.id}} How long does this last in the fridge? {{food.expirationDays}}\n\n\t<img src=\"{{food.fullImagePath}}\"\nalt=\"{{food.name}}\">\n\t</div>\n"

/***/ }),

/***/ "./src/app/food-details/food-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/food-details/food-details.component.ts ***!
  \********************************************************/
/*! exports provided: FoodDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailsComponent", function() { return FoodDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoodDetailsComponent = /** @class */ (function () {
    function FoodDetailsComponent() {
    }
    FoodDetailsComponent.prototype.ngOnInit = function () {
    };
    FoodDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-details',
            template: __webpack_require__(/*! ./food-details.component.html */ "./src/app/food-details/food-details.component.html"),
            styles: [__webpack_require__(/*! ./food-details.component.css */ "./src/app/food-details/food-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FoodDetailsComponent);
    return FoodDetailsComponent;
}());



/***/ }),

/***/ "./src/app/food-properties.ts":
/*!************************************!*\
  !*** ./src/app/food-properties.ts ***!
  \************************************/
/*! exports provided: FoodProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodProperties", function() { return FoodProperties; });
var FoodProperties = /** @class */ (function () {
    function FoodProperties() {
    }
    return FoodProperties;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 16px\">\nWelcome to <b>How Long Does Food Last! </b>\n\t<br>\n\t<br>\n\t<b>What is this?</b>\n\t<br>\n\tThis jar of jelly \"Expires 1999/01/01\". Well, how long will it last after I open it?! We are a community based voting forum where you can look up how long any item of food lasts before you have to toss it.\n</p>\n<div class=\"card-deck\">\n\n<app-item class=\"card rounded-image\" style=\"min-width: 18rem\"\n*ngFor=\"let item of homeItems\" [item]=\"item\"></app-item>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.show = false;
        this.buttonName = 'Show';
        // title = 'HowLongDoesFoodLast';
        this.homeItems = [
            {
                id: 1,
                item: 'Chicken',
                expirationDays: 3,
                fullImagePath: './assets/chicken.png',
                submissionCount: 80
            },
            {
                id: 2,
                item: 'Ground beef',
                expirationDays: 7,
                fullImagePath: './assets/beef.jpg',
                submissionCount: 1
            },
            {
                id: 3,
                item: 'Mayonaise',
                expirationDays: 71,
                fullImagePath: './assets/mayo.jpg',
                submissionCount: 2
            },
            {
                id: 4,
                item: 'Apples',
                expirationDays: 42,
                fullImagePath: './assets/apples.png',
                submissionCount: 2
            },
            {
                id: 5,
                item: 'Bread',
                expirationDays: 5,
                fullImagePath: './assets/bread.jpg',
                submissionCount: 1
            },
            {
                id: 6,
                item: 'Tomato Sauce',
                expirationDays: 20,
                fullImagePath: './assets/tomato-sauce.jpg',
                submissionCount: 9
            }
        ];
    }
    //	foodproperties = 'FoodProperties';
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"img-fluid card-img-top rounded-image\"src=\"{{item.fullImagePath}}\"\nalt=\"{{item.item}}\">\n<h3 class=\"card-title\" style=\"padding-top: 5px; padding-right: 5px\">{{item.item}}</h3>\n<div class=\"card-body\" style=\"padding: 0px;\"></div>\n\n<ul class=\"list-group list-group-flush\">\n\t<li class=\"list-group-item\">\n\t\tHow long does this last in the fridge?\n\t\t<br>\n\t\t<h1>{{item.expirationDays}} days</h1>\n\t</li>\n    <li class=\"list-group-item\">\n\n\n\n  <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#{{item.id}}comments\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    comments\n  </a>\n\n<div class=\"collapse\" id=\"{{item.id}}comments\">\n  <div class=\"card card-body\">\n    \"I think you can go a few days longer as long as it doesn't smell bad.\" -Johnny Appleseed\n\t  <br>\n\t  <br>\n\t  \t<button (click) = \"addComment()\" class=\"btn-primary\">Add comment</button>\n  </div>\n</div>\n\t</li>\n\t<li class=\"list-group-item\">\n\n\t<!--\t<button (click) = \"item.submissionCount = item.submissionCount + 1\" class=\"btn\" style=\"border-radius: 5px\">Vote!</button>-->\n\t<button (click) = \"clickVote()\" class=\"btn\">I agree with {{item.expirationDays}} days!</button>\n\n\t</li>\n\t<li class=\"list-group-item\">votes: {{item.submissionCount}}</li>\n</ul>\n<div class=\"card-footer\" style=\"text-align: center\">\n\t  <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#{{item.id}}vote\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n    Vote!\n  </a>\n\t<div class=\"collapse\" id=\"{{item.id}}vote\">\n\t  <div class=\"card card-body\">\n\t\t  <label>How many days will this last?</label>\n\t\t  <input type=\"text\" placeholder=\"365\"/>\n\t\t<button (click) = \"clickVote()\" class=\"btn-primary\">Submit Vote!</button>\n\t\t  \n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food-properties */ "./src/app/food-properties.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.clickVote = function () {
        this.item.submissionCount = this.item.submissionCount + 1;
    };
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.addComment = function () {
        this.item.submissionCount = this.item.submissionCount + 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _food_properties__WEBPACK_IMPORTED_MODULE_1__["FoodProperties"])
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/items/items.component.css":
/*!*******************************************!*\
  !*** ./src/app/items/items.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\n<div class=\"card rounded-image\" style=\"width: 18rem;\">\n <img class=\"img-fluid rounded image\"src=\"{{food.fullImagePath}}\"\nalt=\"{{food.name}}\">\n  <div class=\"card-body img\">\n    <h3 class=\"card-title\">{{food.name}}</h3>\n    <p class=\"card-text\">Food: {{food.name}} ID: {{food.id}} How long does this last in the fridge? {{food.expirationDays}}</p>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">{{food.expirationDays}} days</li>\n    <li class=\"list-group-item\">item ID: {{food.id}}</li>\n    <li class=\"list-group-item\">comments</li>\n  </ul>\n  <div class=\"card-body\">\n    <a href=\"#\" class=\"card-link\">Card link</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n  </div>\n</div>\n\n\n<div class=\"card rounded-image\" style=\"width: 18rem;\">\n <img class=\"img-fluid rounded image\"src=\"{{food.fullImagePath}}\"\nalt=\"{{food.name}}\">\n  <div class=\"card-body img\">\n    <h3 class=\"card-title\">{{food.name}}</h3>\n    <p class=\"card-text\">Food: {{food.name}} ID: {{food.id}} How long does this last in the fridge? {{food.expirationDays}}</p>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">{{food.expirationDays}} days</li>\n    <li class=\"list-group-item\">item ID: {{food.id}}</li>\n    <li class=\"list-group-item\">comments</li>\n  </ul>\n  <div class=\"card-body\">\n    <a href=\"#\" class=\"card-link\">Card link</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Item } from './item';
var ItemsComponent = /** @class */ (function () {
    //this.item = ItemProperties[];
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html{\n    background-color:#ffffff;\n    color: #8C7965;\n    font-family: sans-serif;\n    font-size: 14px;\n\tmargin: 10px;\n}\nh1,h2,h3,h4 {\n        color: #00878F;\n        text-align: right;\n}\nh2{\n    color: #E47128;\n\tpadding: 10px;\n    text-transform: uppercase;\n}\n.carousel-indicators{\n\tmargin-bottom: 0px;\n}\na{\n    text-decoration: none;\n/*    color: #E5AD24;*/\n\tmargin: 1px;\n}\na:hover{\n\tcolor: #00878F;\n\ttext-decoration: none;\n}\n/*\n.container{\n}\n*/\nbody{\n\tbackground-color: none;\n    margin: 10px;\n\tpadding: 15px;\n    font-size: 12px;\n\tcolor: #8C7965;\n    border: 12px hidden;\n    border-radius: 25px;\n    font-family: 'Helvetica Neue', 'Helvetica', 'Open Sans';\n}\nbody p{\n\tbackground-color: rgba(255,255,255, .3);\n\tpadding: 5px;\n\tborder-style: hidden;\n\tborder-radius: 5px;\n\tbox-shadow: 2px 2px 10px rgba(0,0,0, .04);\n\tfont-size: 10px;\n}\n.custom-toggler.navbar-toggler {\n    border-color: #E5AD24 !important;\n}\n.custom-toggler .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#E5AD24' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n}\n.custom-toggler.navbar-toggler:hover {\n    border-color: #E47128 !important;\n}\n.custom-toggler.navbar-toggler:focus {\n    outline-color: #E5AD24;\n\toutline-width: 3px;\n}\n.navColors {\n\tcolor: #E5AD24;\n\tmargin: 1vw;\n\tbackground-color: rgba(236, 241, 241, .9);\n\t\tborder-radius: 15px;\n\n\nbackground-image: url(data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://ww…p='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E);\n}\n.sticky-nav{\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 10px;\n}\n.sticky-top{\n\ttop: 10px;\n}\n.navColors a:hover{\n\tcolor: #E47128 !important; }\n:focus{\n\toutline-color: #E5AD24;\n\t\toutline-width: 3px;\n}\n.removePadding{\n\tpadding: 0;\n}\nfooter{\n\n}\n.top{\n\tposition: fixed;\n\tbottom: 20px;\n\tright: 20px;\n\tborder-style: hidden;\n\tbackground-color: rgb(0, 135, 143);\n\tborder-radius: 22px;\n\tfont-size: 30px;\n\tpadding: 11px;\n\n}\n.top:hover{\n\tcolor: #E47128;\n}\n#topButton{\n\tposition: fixed;\n\tbottom: 5px;\n\tright: 5px;\n}\n.button a:hover:{\n\tcolor: aliceblue;\n}\n.btn-primary {\n\tbackground-color: #00878F;\n\tcolor: #E5AD24;\n\tborder: none;\n}\n.btn{\n\tcolor: #E5AD24;\n\tbackground: none;\n\tfont-size: 20px;\n\tpadding: 0px;\n\tmargin: 0px;\n\tborder: none;\n}\n.btn:hover{\n\tcolor: #E47128\n}\n.btn-primary:focus{\n\toutline-color: #E5AD24;\n\t\toutline-width: 3px;\n}\n.btn-primary:hover, .btn-primary:focus, .btn-primary.active, .open>.dropdown-toggle.btn-primary{\n\tbackground-color: #00878F;\n}\n.btn-primary:active{\n\tbackground-color: #62AEB2;\n}\n.btn-primary:focus{\n\toutline-width: 3px;\n\toutline color: #E5AD24;\n}\n.image-lock{\n\t height: inherit; width: auto;\n\talign-content: center;\n\talign-items:center;\n}\n.rounded-image{\n\tborder-style: hidden;\n\tborder-radius: 20px;\n}\n@include media-breakpoint-up(sm) {\n}\n@include media-breakpoint-up(md) {\n\t.top{\n\n\t}\n}\n@include media-breakpoint-up(lg) {\n}\n@include media-breakpoint-up(xl) {\n}\n@media (min-width: 576px) {\n\t.top{\n\t\tbottom: 10px;\n\t\tright: 10px;\n\t\tborder-radius: 17px;\n\t\tfont-size: 20px;\n\t\tpadding: 7px;\n\t}\n}\n.boxBack{\n\tbackground-color: black;\n}\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"fixed-top navbar navbar-expand-lg navColors\">\n\t<a class=\"\" style=\"color: #E47128\" routerLink=\"/home\" routerLinkActive=\"active\">\n\t\t<img src=\"assets/chicken.png\"width=\"55px\" class=\"d-inline-block align-top\" alt=\"ball\" title=\"ball\"> How Long Does Food Last?</a>\n<!--  <a class=\"navbar-brand\" href=\"#\">How Long Does Food Last?</a>-->\n  <button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n\t\t  \n<!--          <a class=\"nav-link\" href=\"#\" (click)=\"tab = 1\">Description</a>-->\n\t\t  <a href=\"#\" (click)=\"toggle()\" id=\"add\" class=\"nav-link\">Add food</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"milk\" placeholder=\"milk\" aria-label=\"milk\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n  <div  *ngIf=\"show\">\n\t<app-new-item-form></app-new-item-form>\n  </div>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Home } from '../home';
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.show = false;
        this.buttonName = 'Show';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/new-item-form/new-item-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/new-item-form/new-item-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-item-form/new-item-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/new-item-form/new-item-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" style=\"text-align: center; display: inline-block\">\n<fieldset>\n<legend>Add Food Item</legend>\n<label>Email: <br><input type=\"text\" name=\"email\" placeholder=\"benjamin@food.com\"/></label>\n<br>\n<label>Name of Item: <br><input type=\"text\" name=\"item\" placeholder=\"Milk\"/></label>\n\t<br>\n<label>Estimated number of days until expiration (optional): <br><input type=\"text\" name=\"days\" optional placeholder=\"14\"/></label>\n\t<br>\n\t<button class=\"btn-primary\" style=\"border-style: solid; border-color:  white; border-radius: 2px; border-width: thin \">Add</button>\n</fieldset>\n</div>\n"

/***/ }),

/***/ "./src/app/new-item-form/new-item-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/new-item-form/new-item-form.component.ts ***!
  \**********************************************************/
/*! exports provided: NewItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemFormComponent", function() { return NewItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food-properties */ "./src/app/food-properties.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewItemFormComponent = /** @class */ (function () {
    function NewItemFormComponent() {
    }
    NewItemFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _food_properties__WEBPACK_IMPORTED_MODULE_1__["FoodProperties"])
    ], NewItemFormComponent.prototype, "item", void 0);
    NewItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-item-form',
            template: __webpack_require__(/*! ./new-item-form.component.html */ "./src/app/new-item-form/new-item-form.component.html"),
            styles: [__webpack_require__(/*! ./new-item-form.component.css */ "./src/app/new-item-form/new-item-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewItemFormComponent);
    return NewItemFormComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /Users/benjaminsalasek/Documents/GitHub/HowLongDoesFoodLast/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map