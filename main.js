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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-card/item-card.component */ "./src/app/item-card/item-card.component.ts");
/* harmony import */ var _contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-page/contacts-page.component */ "./src/app/contacts-page/contacts-page.component.ts");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");









var routes = [
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'detail/:id', component: _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__["ItemCardComponent"] },
    { path: 'contacts', component: _contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactsPageComponent"] },
    { path: 'shopingCart', component: _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShopingCartComponent"] },
    { path: 'delivery', component: _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_7__["DeliveryComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container{\npadding-top: 20px;\nmargin-bottom: 220px; \n}\n.nav-link{\n    font-size: 25px;\n}\n.navbar{\n    position: fixed;\n    z-index: 9999;\n    width: 100%;\n   }\n.shopingCart{\n    font-size: 35px;\n    position: relative;\n    color: yellow\n   \n}\n.shopingCartItemsQuantity{\n    position: absolute;\n    background-color:red;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    text-align: center;\nline-height: 22px;\nfont-size: 18px;\n    color: white\n    \n\n}\n.shopingCartActive{\n    color: greenyellow;\n    \n}\n.footer {\nheight: 100px;\nline-height: 25px;\ndisplay: flex;\njustify-content: space-around;\nalign-items: center;\nposition: absolute; \nbottom: 0; \nwidth: 100%;\n\n}\n.fa {\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    margin: 5px 2px;\n    color: white\n  }\n.fa:hover {\n      opacity: 0.7;\n      color: chartreuse\n  }\n.footerInfo{\n      font-size: 25px;\n      color: white;\n      font-weight: bold;\n      text-align: center\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0dBQ1o7QUFDSDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEI7O0FBRUo7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCLGlCQUFpQjtBQUNqQixlQUFlO0lBQ1g7OztBQUdKO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsV0FBVzs7QUFFWDtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZjtFQUNGO0FBRUE7TUFDSSxZQUFZO01BQ1o7RUFDSjtBQUNBO01BQ0ksZUFBZTtNQUNmLFlBQVk7TUFDWixpQkFBaUI7TUFDakI7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVye1xucGFkZGluZy10b3A6IDIwcHg7XG5tYXJnaW4tYm90dG9tOiAyMjBweDsgXG59XG4ubmF2LWxpbmt7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLm5hdmJhcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgIH1cbi5zaG9waW5nQ2FydHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB5ZWxsb3dcbiAgIFxufVxuLnNob3BpbmdDYXJ0SXRlbXNRdWFudGl0eXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5saW5lLWhlaWdodDogMjJweDtcbmZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGVcbiAgICBcblxufVxuLnNob3BpbmdDYXJ0QWN0aXZle1xuICAgIGNvbG9yOiBncmVlbnllbGxvdztcbiAgICBcbn1cbi5mb290ZXIge1xuaGVpZ2h0OiAxMDBweDtcbmxpbmUtaGVpZ2h0OiAyNXB4O1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbnBvc2l0aW9uOiBhYnNvbHV0ZTsgXG5ib3R0b206IDA7IFxud2lkdGg6IDEwMCU7XG5cbn1cbi5mYSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiA1cHggMnB4O1xuICAgIGNvbG9yOiB3aGl0ZVxuICB9XG4gIFxuICAuZmE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgY29sb3I6IGNoYXJ0cmV1c2VcbiAgfVxuICAuZm9vdGVySW5mb3tcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img alt=\"logo\" style=\"width: 200px; height: 50px; vertical-align: 0px\"\n      src=\"../assets/headerLogo.png\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n    aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" [class.active]=\"currentPage === 'home'\">\n        <a class=\"nav-link\" routerLink=\"/\">Головна <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"currentPage === 'contacts'\">\n        <a class=\"nav-link\" routerLink=\"/contacts\">Контакти</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"currentPage === 'delivery'\">\n        <a class=\"nav-link\" routerLink=\"/delivery\">Доставка</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"currentPage === 'payment'\">\n        <a class=\"nav-link\" routerLink=\"/payment\">Оплата</a>\n      </li>\n    </ul>\n  </div>\n  <a class=\"nav-link shopingCart\" [class.shopingCartActive]=\"currentPage ==='shopingCart'\" routerLink=\"/shopingCart\">\n    <i class=\"fas fa-shopping-cart\"></i>\n    <span *ngIf =\"allItemsQuantity>0\" class=\"shopingCartItemsQuantity\">{{allItemsQuantity}}</span>\n  </a>\n\n</nav>\n<div class=\"container\">\n  <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n</div>\n<div class=\"footer bg-dark\">\n  <p class=\"footerInfo\">Звяжіться з нами: <br><i class=\"fas fa-phone-volume\"></i> +30944010562</p>\n  <p class=\"footerInfo\">© 2019. Інтернет-магазин Huawei</p>\n\n\n  <div class=\"social footerInfo\"><a href=\"#\" class=\"fa fa-facebook\"></a>\n    <a href=\"#\" class=\"fa fa-skype\"></a>\n    <a href=\"#\" class=\"fa fa-twitter\"></a>\n    <a href=\"#\" class=\"fa fa-google\"></a>\n    <a href=\"#\" class=\"fa fa-linkedin\"></a>\n    <a href=\"#\" class=\"fa fa-youtube\"></a>\n    <a href=\"#\" class=\"fa fa-instagram\"></a></div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.service */ "./src/app/card.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, cardService) {
        this.router = router;
        this.cardService = cardService;
        this.invisible = false;
        this.allItemsQuantity = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () { return _this.checkActiveLinkMenu(); });
        this.cardService.changeChartQuantity.subscribe(function () { return _this.shopingCartItemsQuantity(); });
        this.shopingCartItemsQuantity();
    };
    AppComponent.prototype.checkActiveLinkMenu = function () {
        switch (this.router.url.includes('')) {
            case this.router.url.includes('home'):
                this.currentPage = 'home';
                break;
            case this.router.url.includes('contacts'):
                this.currentPage = 'contacts';
                break;
            case this.router.url.includes('shopingCart'):
                this.currentPage = 'shopingCart';
                break;
            case this.router.url.includes('delivery'):
                this.currentPage = 'delivery';
                break;
            case this.router.url.includes('payment'):
                this.currentPage = 'payment';
                break;
        }
    };
    AppComponent.prototype.shopingCartItemsQuantity = function () {
        var products = JSON.parse(localStorage.getItem('products'));
        this.allItemsQuantity = products.reduce(function (total, el) { return total += el.quantity; }, 0);
    };
    AppComponent.prototype.onActivate = function (event) {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts-page/contacts-page.component */ "./src/app/contacts-page/contacts-page.component.ts");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-card/item-card.component */ "./src/app/item-card/item-card.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _filter_product_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter-product.pipe */ "./src/app/filter-product.pipe.ts");
/* harmony import */ var _card_search_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card/search.pipe */ "./src/app/card/search.pipe.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _card_search_pipe__WEBPACK_IMPORTED_MODULE_15__["Searchpipe"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
                _contacts_page_contacts_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactsPageComponent"],
                _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_10__["ShopingCartComponent"],
                _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_11__["ItemCardComponent"],
                _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"],
                _filter_product_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterProductPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card.service.ts":
/*!*********************************!*\
  !*** ./src/app/card.service.ts ***!
  \*********************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data */ "./src/app/mock-data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CardService = /** @class */ (function () {
    function CardService() {
        this.changeChartQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    CardService.prototype.getProducts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["data"]);
    };
    CardService.prototype.getProductById = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["data"].find(function (x) { return x.id === id; }));
    };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n  <div class=\"card clearfix\" class=\"hovered\" (mouseenter)=\"mouseenterCard()\" (mouseleave)=\"mouseleaveCard()\" style=\"width: 14rem;\">\n    <div class=\"imageWrapper \">\n      <img src= \"{{card.image}}\" class=\"card-img-top\" alt=\"card.image\">\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{card.name}}</h5>\n      <p class=\"card-price\">{{card.price}} грн.</p>\n\n      <div class=\"buttons\">\n        <button *ngIf=\"buyItem\" (click)=\"addToChart(card)\" class=\"btn btn-success btn-sm buy\" >\n          <i class=\"fas fa-shopping-cart\"></i> Купити\n        </button>\n        <button *ngIf=\"itemInCart\" class=\"btn btn-warning btn-sm buy\" >\n          У кошику\n        </button>\n        <button routerLink=\"/detail/{{card.id}}\" class=\"btn btn-primary btn-sm\">Детальніше</button>\n      </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");




var CardComponent = /** @class */ (function () {
    function CardComponent(router, cardService) {
        this.router = router;
        this.cardService = cardService;
        this.itemInCart = false;
        this.buyItem = true;
        this.ishovered = false;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.checkIsProductInChart();
    };
    CardComponent.prototype.mouseenterCard = function () {
        this.ishovered = true;
    };
    CardComponent.prototype.mouseleaveCard = function () {
        this.ishovered = false;
    };
    CardComponent.prototype.checkIsProductInChart = function () {
        var _this = this;
        var products = JSON.parse(localStorage.getItem('products'));
        products.forEach(function (prod) {
            if (prod.id === _this.card.id) {
                _this.itemInCart = true;
                _this.buyItem = false;
            }
        });
    };
    CardComponent.prototype.addToChart = function (item) {
        var products = JSON.parse(localStorage.getItem('products'));
        if (products) {
            if (products.find(function (x) { return x.id === item.id; }))
                return;
            products.push(item);
            localStorage.setItem('products', JSON.stringify(products));
        }
        else {
            localStorage.setItem('products', JSON.stringify([item]));
        }
        this.cardService.changeChartQuantity.next();
        this.router.navigateByUrl('shopingCart');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./сard.component.css */ "./src/app/card/сard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card/search.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/card/search.pipe.ts ***!
  \*************************************/
/*! exports provided: Searchpipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searchpipe", function() { return Searchpipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Searchpipe = /** @class */ (function () {
    function Searchpipe() {
    }
    Searchpipe.prototype.transform = function (cards, value) {
        return cards.filter(function (card) { return card.name.toLowerCase().includes(value.toLowerCase()); });
    };
    Searchpipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], Searchpipe);
    return Searchpipe;
}());



/***/ }),

/***/ "./src/app/card/сard.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/сard.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    margin-top: 5px;\n}\n\n.imageWrapper{\n   max-height: 300px;\n   min-height: 300px;\n   padding: 20px;\n}\n\n.buttons{\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-price{\n    font-size: 20px;\n}\n\n.card-title{\n    font-size: 20px;\n}\n\n.hovered{\n    margin: 15px 0;\n}\n\n.hovered:hover{\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\n    transition: 0,7s all;\n}\n\n.buy{\n    color: white\n}\n\n.card-img-top{\n    max-height: 290px;\n\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC/RgWFyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtHQUNHLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsYUFBYTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtBQUNKOztBQUNBO0lBQ0ksaUJBQWlCOzs7QUFHckIiLCJmaWxlIjoic3JjL2FwcC9jYXJkL9GBYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pbWFnZVdyYXBwZXJ7XG4gICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgcGFkZGluZzogMjBweDtcbn1cblxuLmJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkLXByaWNle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaG92ZXJlZHtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmhvdmVyZWQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgdHJhbnNpdGlvbjogMCw3cyBhbGw7XG59XG5cbi5idXl7XG4gICAgY29sb3I6IHdoaXRlXG59XG4uY2FyZC1pbWctdG9we1xuICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xuXG4gICAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contacts-page/contacts-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/contacts-page/contacts-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    margin-top: 70px;\n}\n.wrapper{\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 100px;\n}\n.worksTime{\n    margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMtcGFnZS9jb250YWN0cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG4ud3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4ud29ya3NUaW1le1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/contacts-page/contacts-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/contacts-page/contacts-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <h2><b>Консультації та замовлення за телефонами:</b></h2>\n\n <h4><b>Телефон:</b>+3803222230767, +380934013562, +380673345218</h4>\n <h4><b>Факс:</b>+3803222230768</h4>\n <hr>\n <h4><b>Адреса:</b> м. Львів проспект Свободи 54, 2 поверх.</h4>\n <div class=\"wrapper\"> \n   <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9295428404475!2d24.023690515709596!3d49.84378137939632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add72ff30f615%3A0x1fbd01994ed9d120!2z0L_RgNC-0YHQv9C10LrRgiDQodCy0L7QsdC-0LTQuCwgNTQsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1556617850257!5m2!1suk!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n  <div class=\"worksTime\">\n      <h4><b>Графік роботи:</b></h4>\n      <h4>Понеділок-П'ятниця з 10:00 до 21:00 <br> \n      Субота  з 11:00 до 17:00 <br> \n      Неділя - вихідний.</h4>\n  </div>\n  \n  \n  </div>\n\n"

/***/ }),

/***/ "./src/app/contacts-page/contacts-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contacts-page/contacts-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageComponent", function() { return ContactsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsPageComponent = /** @class */ (function () {
    function ContactsPageComponent() {
    }
    ContactsPageComponent.prototype.ngOnInit = function () {
    };
    ContactsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts-page',
            template: __webpack_require__(/*! ./contacts-page.component.html */ "./src/app/contacts-page/contacts-page.component.html"),
            styles: [__webpack_require__(/*! ./contacts-page.component.css */ "./src/app/contacts-page/contacts-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsPageComponent);
    return ContactsPageComponent;
}());



/***/ }),

/***/ "./src/app/delivery/delivery.component.css":
/*!*************************************************!*\
  !*** ./src/app/delivery/delivery.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deliveryText{\n    margin-top: 10px\n}\nh2{\n  margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsaXZlcnlUZXh0e1xuICAgIG1hcmdpbi10b3A6IDEwcHhcbn1cbmgye1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delivery/delivery.component.html":
/*!**************************************************!*\
  !*** ./src/app/delivery/delivery.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ДОСТАВКА</h2>\n<img width=\"200px\" src=\"https://storage1.censor.net/images/2/8/2/9/282904110359a47e310a9301e13d4ed3/original.jpg\" alt=\"novaPoshta\">\n\n<p class=\"deliveryText\">Доставка у відділення «Нова пошта»\n  За допомогою доставки «Нова пошта», Ви можете отримати товар навіть у найвіддаленіших куточках України.\n  В середньому, доставка займає 1-3 дні, під час замовлення наші менеджери узгодять з Вами дату доставки перед відправкою товару.\n  Звертаємо Вашу увагу на те, що вартість доставки однієї одиниці товару може варіюватися в залежності від ваги і габаритів.\n  Вартість доставки цікавить Вас товару, Ви можете дізнатися у нашого менеджера при оформленні замовлення або на сторінці товару, попередньо вказавши місто, в який необхідна доставка.\n  Підйом габаритних вантажів від 30 до 100 кг оплачується окремо. Вартість підйому: 20-60 грн / поверх в залежності від розмірів, ваги товару і складності підйому.</p>\n\n  <img width=\"200px\" src=\"https://photo.deshevshe.net.ua/image/wysiwyg_editors/000/000/004/%D1%8B%D1%8B%D1%8B.jpg?1506079369\" alt=\"uhrPoshta\">\n  <p class=\"deliveryText\">Доставка в дім в межах всієї України\n    Вартість адресної доставки товару компанією Міст Експрес може варіюватися в залежності від ваги і габаритів (від 35 до 300 грн.).\n    Вартість доставки цікавить Вас товару, Ви можете дізнатися у нашого менеджера при оформленні замовлення або на сторінці товару, попередньо вказавши місто, в який необхідна доставка.</p>\n  \n    <img width=\"200px\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAACPCAMAAADz2vGdAAAAyVBMVEX///8NOZb/AAAANZXj6PMAKJAAH44AL5IAK5H/7++0vtn/pqbGzuPr7/cALZIIN5V9j8Geq84AJI8AGIxBW6UXQJr09fqbpckAMpP/4eH/xMT/y8vO0+SSncVMZKkAHI2IlMAyUKDW3OsAAIjb4e6mstP/YGBXbq7/+Pi7xN3u8vj/3Nzl5/A3VKH/vb3/09MkR5xqf7j/hIT/Li5ofrj/bW3/GRl1iL0ADIr/Ozv/q6v/Rkb/kZH/UVFfcq9GYKf/jo7/d3f/m5tH6G69AAAOLElEQVR4nO2de2PathrGzTG+lIFFTCDuxjWFUbJmI1u2dLfkbN//Qx0syZb06pWwHcBtjp6/WlsI+4csvzcpnufk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk9HVq0J893PujXNHqebkbtH1Bp9Oki+vO9IE7wwcm1k6N3R3UvdpGaZz5pEPlZ0kaXC9vq3yp/Vrevdf1GlaNdJX6mKK56QPbBP1AMJPa9GCnwdB4Af1tFGcdIOInwf1GNBoG6JcalF6xT/3wH13vXgusrmYxQZUantJBhLdPllKjXgDPmgD378OMQLyccdC5KpoNE/xbcQXF537VAf9zCmh19BSht9eJr/D2VzHePnqSGvUCeBYHvN6mPt4dY5yudqzh0HCVR679PTKEfzgZump61h5PJv8abz83EMm2UqOKgGf63ACvInimT1JDwN5/dcDfnxBeFd0bgJHgFmu+DvAHWv1BKgEevKSGvuTLGNHLaAr442864e9OTPCIxqabVCbVUjPDDNEhe6lVFcC342PDl14Fm3maAvb+0AH/clJ+R2UakSqxUnvjoPOlVhUATwPb7FtehM/etY0Be8gQ/uO0BI9oZLzMsK+3nobG5iOp2XHAu8Xx6SFHxY2/5oC/1QH/9vHUEC0amIllD3pzk81xUNgVzY4C7ieV+JIOdxmaA/b+1gn/e3KMZt2m5rsL9OYdM5dUeikeA9yNqswPhz4LX+MVgH9CTLULeht9M+BO0IOtdxCcDEOaUY4AnuyrvN8O0/qq+MQrALfsbdiQKaYtlcloziX/HEcAPyXVQAW74hOvAfwOGcKXC0loKCSRDLjLd7YHO95YelUA254aWZmIh7wGsPezDvhy3obRrkUu1NtYfo1OfCMa2gFHlV5wB0dZzOqvAvwRGcIX8zasV+6/qI1fbCNYDkZYAS+NvkoWJZEI/USPFS9TExwY3+iA/zw9SlyP1tdNupbbds0mXUedsW2ABwQdwCRJg/nTcrjthDH9HUn4SXT4OsDeLzrhH89BE5F1UHYSOcjrzazvJjkYYQOMD+CkU0bYu1er3MuLl9JXD2M53ov8Qmg8uNSPyCRxUoxmmWI9TCSS2xrDFqyt5FpbAE+wAexHMzkh4vX2CRnLR2b315JWWhe+fPpaDtUz/akDvpC3sbdb/OlUNJ3aXnF52EA0tQDGzJZopUxFB00ePhji0bl0MyQ8ksRrzduY2EdlJ5LcZYubTAFnYshZACOPTIKlp5BAiDhXGzDmbfxcDdHr1IV8wf+lB3ViDqSxpokIRpgBD/TgUmZM/5nUADCW27iEt7EGNimBU0ZQjiR4VwQAJ7F4zs2A9RmCEFvGGVUDwG15G7fgle4/g5SQsG6BpeS/bOFvIeZrM2DdLAx38KKOqglgzNv4qfY319YUXGr2CGwxMUeA2SNaQttUDHYL4BWcgvWAx3E1AYx5G7/X/+q6giSiIUReBMlgqD2daoB7xm5LwNqcrwThqqoRYCy3cX5vAybhkyW0Kwo0ACfpTKDfIflPRsC38ISISNZQM8CIt3H+9NxShwRDkjFrCWaIw5N9A34cyVszAtaio4aCCbuaAW7F24C2bbzR4DBfAw49pKGUYjIChj+KFPKtoYaAMW/j3Om5BzBcD/NoF6TLWDwChjXDrg74uezWCFiLjsZT9LrsagjY+14HfG5vY6sD9q7VFz2bJZGD8DZ94TAYAcMXI0mgk1xFTQG34G0AbvSdDl58lEEXOCR5Ol0DfF92+4UCxpJH5y1V09zfHHB3oR7LrQOYywjXekKa7Eu32jxFwIhnjBZoHVFTwP/ofH9t8PU1pMV6cnBwWOeuAHDA6GDVAI/LuzS/5CDgoIEZ3BRwC+XCA1j/QatHoDPnTzxQw0vr1u6A60GiMtpjBKydwCvgjqghYOQd91eDb68jra5nkR9da84cdO9o5eUEfjgtczxGwLAjLe1XSc0Af9eClabdLwUM80jRDDzZ/HUGI48iOm92lWE5u6FK1q5mgH/X+Z69DHAHp1GWlQDuALm+RmYIz4MBeOE0mIM9WlBZqYyvqEaAW/GUoXHA82q3MQj1QluDjToYnRelJ2bA0PDukLS+odYIcCuxHvhSL0xZLaioMhmzVtCIFjloM+CNllOWzOeqagL4L53vBWojoFlaZG/sCfoCJEz5R8uiXzNgaGQfFNeeJBoAxnyMC8TboWNVhBPWOgZJC/5egoEMMZ1akp5IlhVdRNdFjhVqABjJGJ3Zx6CCoUlz4kFSGcKFoTiRnLAA1uJpOeFHD2rzWaudFaoPuK2cJ8yhl2a/bY4oG2kzeFnbYwE8iJHkdLJXHbr1PPXRJSJM9QG3EEejgs9r+ZqyFL4LcxcORlHbYyudesDKK/xgLgLD/Yfo8GQF5sqT2oDbiARTwXuNSzvAXFIlkjyaRVDW9tgA3+LrmrIguZ5tNpubZz+goTuSKNVUsmoDbq1yCvpiQWnJwlySkFh2rGFcGM/ImSF0CHfoAvA4COLS1zOub64NGPMxLjKAtVCESAybC9FE+YOWYCsLTq2AB2HFAuxYql9VVBdwa9Wr2kwr5dBNVYGkUzbR7rMsSbdXuF9VXEIQ6caF4YvtgNupiEAvVCqmNM0R8myqfbx4UR1ZBDOvtsiImKLx9QC3VNOTy/yMI4G2AqIY5DAgLGaYI4C7WAk1IlNZYD3AyIr7vxsjqyfIgQTSdeIQpBnCm0B/r4z2HFuI2K84DWOreb2agNvyMXJphqy8bgufI2RSExjcLRcaHV1Ke1VhJ4ODDN5GLcBtVQbn0nK8Y6mSFJ8j5FKyCRzkZTDi+GLwWTXCgbYYIFcdwK3u2wNrSaW8cJ5xRuwIpYUH10qUwYgK2xnMKpkS/h7zNuoARnyMcyfihGC8UQ3NYkunImUFPgwJlcGIKhtybCptGKFsZlWoBmBkN4NLrS/ydH9Y3aenj/gaaikZNLfKYESlLWX64wqL30iEoKsBuI1EnBBMkEnVZR66QIZkyudhtJMk/ES1TZHutkcnYhKPEVu4OmBkR5kL+Ri5NIIqYGRZEdij4wkCjvmMWXVbr97YtlT68LEImyGqA8b2RPq2Lqbm6sJJUJ1hkftI1WJT+AuQmN9nVcDeZJlg8WHWWxQ+4HmNyoD/1fleysfItV6kgaIF2EQGnk9T9fxwpJ4PPvPnufcZnBgZ826DWZQie/+RLEifTGmjPuw++IACvnyxn6pJHwpk0KfwPCjmXWsdcDt6cKxnRbvHcZpkwqgmWRKQ+cYYDvbutO77aOP33+qqAubtaTKdPa6CME0PD0mY7rdvan/bL0aTT7e73e62ax65Tk5OTk5OTl+IPr47uYqu7zS1eaNtCaupf6U44d7nFCi0FfO9VZ0RsLbm27Bh+dvWBQE3WSjw9euCgBut+f7qdXbAJEq4/i+n4LMDJvtlqcPBKyZWnLLj/+OJ/vXN9v5+df1IT06udOXtpjfKoR5PcGtti/tb38zzTh9ae3rODRi82eIgPiilB6ejmIrVsXef8z9ldFAWZDPPG/hBDPXh0OxmoRwK0ixHPEnVlilPbXdf8hho/leDAv/Ga0VnB6yuH2KrvtimB2OWTGHrXzaBiLiTxdAbIOs48i34tdUHZDHJqzPUgwmjeZPKnS4vR1VSe4CHDFVGGyyVBFDUrQ6YprAgYFbiOZTzqSRtJwTaGuA+u3u2elytosoXgFQHnBf+AMCsOkktawne6hShzsEl4KJmiG5Jty4suiyKCNumrQAchAcFGuD8cMrWIeTFcBwwbXzQKF9dPuU/GqGd4uVBF9DZrYhOsd/sXgHM98hny+P42tosnS+H+5Tu/MsBB/1PB3GLTwBOdoej6w1tIwBH+VGqPNk0Lzp9pp1aVoR91YA7pNgxeSQB3u5YWXFGxzdf8pjMqaHco78EB8xsZ16DKADzqmy6AkcAVmq1+WeSLS133tRfq3siXc6To6tjGGByz+qJiE/vni3IU/dXLADTTLQJMD1uAMyq6iK1jKYFtQK4WLq/YOY/XVAO/vxiJcB9FXDUu+XyeFEiIa1npluZIrhiXupDD4INQpsA7kTc+8g3KqT189ifYrqwzv+SW3HR/Q9kwIWBwegkqhnVZIooRIjHl//FLdlmki5nB1MzSQZMxiz6wwGrJX6VANOvkACXfzHV44ATtG7wonr/zcnF109aHA2ujJ+jLEFDO+BkdzcYdPt0nhWAScLL5/I/IRYg887bkg0wkcMQ3GJNlaI3O2Duf/gdBbCygyCt3CdRkz3vvhJZXWW+iTkz/9mCcn/P3/h04jgCWFK8Qc00tgWpv5I7fVuyucrbbsgN4fzG79h69GycLye6G4b5bF0dsAj2xPIIXjNPORvnpmD3iby9arci4D4r5Umu8oYxy+i+CEPmN5MgXI0XEV1hXxkwCctwpT8svil/MPiCfhKkKz+M0IU0X7cKO7jIGMW52yuiadtITMN348LMyj0Q+sc4jgAu81BpnMMs7GB+MMjnpUERC6ZeDXca35LQpKcA/IlvlkunYXVZbb6KwQ44e7phQ/WmRx99GA+mfyh491mJgb65nDaatpcC7j1GjQWEd8qCuXBazQ4upQXcd+wK5MOjJrsUf8nSC09e1JTRM5skmDV8uxK7zGSj2SsB8z2b+nup00X7Xt1p1fsQqlosul64oAFxynQS0f+EH9ieG1d+GGdZFgWj+TTfmIqe/MAAs67ypOfsM/0XWCgyGS2UrxrxPYUmsyxlnS7mTTaK/6I1GWg6cGO6U1oUr5/p1cN8O+wxk7X8iPqfiXxYCPmqotPZ4/z5qdd6VM3JycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJ6cvX/wBEp0OJVn1MXwAAAABJRU5ErkJggg==\" alt=\"uhrPoshta\">\n    <p>Meest Express постоянно работает над тем, чтобы быть ближе к своим клиентам. Для удобства пользования сервисами доставки Meest открыл и активно развивает сеть пунктов приема-выдачи посылок в формате мини-отделений. Мини-отделение Meest - это Ваше собственное почтовое отделение в ближайшем магазине, супермаркете, салоне красоты, барбершопе, АЗС, станции ТО и тому подобное.</p>"

/***/ }),

/***/ "./src/app/delivery/delivery.component.ts":
/*!************************************************!*\
  !*** ./src/app/delivery/delivery.component.ts ***!
  \************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryComponent = /** @class */ (function () {
    function DeliveryComponent() {
    }
    DeliveryComponent.prototype.ngOnInit = function () {
    };
    DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__(/*! ./delivery.component.html */ "./src/app/delivery/delivery.component.html"),
            styles: [__webpack_require__(/*! ./delivery.component.css */ "./src/app/delivery/delivery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryComponent);
    return DeliveryComponent;
}());



/***/ }),

/***/ "./src/app/filter-product.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/filter-product.pipe.ts ***!
  \****************************************/
/*! exports provided: FilterProductPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProductPipe", function() { return FilterProductPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterProductPipe = /** @class */ (function () {
    function FilterProductPipe() {
    }
    FilterProductPipe.prototype.transform = function (arr, showMobile, showTablet, showCover, showGlass) {
        var items = [];
        if (showMobile)
            items = items.concat(arr.filter(function (x) { return x.type === 'Мобільний телефон'; }));
        if (showTablet)
            items = items.concat(arr.filter(function (x) { return x.type === 'Планшет'; }));
        if (showCover)
            items = items.concat(arr.filter(function (x) { return x.type === 'Чохол'; }));
        if (showGlass)
            items = items.concat(arr.filter(function (x) { return x.type === 'Захисне скло'; }));
        return items;
    };
    FilterProductPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterProduct'
        })
    ], FilterProductPipe);
    return FilterProductPipe;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchFormLabel, .cardItemTitle{\n    font-size: 30px;\n    margin-top: 25px;\n}\n.h-200{\n    max-height: 25%;\n}\n#carouselExampleIndicators{\n    max-width: 80%;\n    margin: 90px auto 15px;\n}\n.filterProducts{\n    display: flex;\n}\n.serchWrap{\n    margin-top: 20px;\n}\n.noItem{\n    font-size: 45px;\n    font-weight: bold;\n    text-align: center;\n  \n    color: dimgrey\n\n}\nh2{\n    margin: 25px 0 25px;\n}\n.filters{\n    margin-bottom: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7SUFFbEI7O0FBRUo7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEZvcm1MYWJlbCwgLmNhcmRJdGVtVGl0bGV7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uaC0yMDB7XG4gICAgbWF4LWhlaWdodDogMjUlO1xufVxuI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnN7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiA5MHB4IGF1dG8gMTVweDtcbn1cblxuLmZpbHRlclByb2R1Y3Rze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZXJjaFdyYXB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ub0l0ZW17XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgY29sb3I6IGRpbWdyZXlcblxufVxuaDJ7XG4gICAgbWFyZ2luOiAyNXB4IDAgMjVweDtcbn1cbi5maWx0ZXJze1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"https://static.beeline.ru/upload/contents/346/Huawei_Mate_20lite_717x351_new_v2.jpg\" class=\"d-block w-100 h-200\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://static.beeline.ru/upload/contents/346/HuaweiPsmart_Preview_717x351.jpg\" class=\"d-block w-100 h-200\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://static.beeline.ru/upload/contents/346/Huawei_Preview_717x351.jpg\" class=\"d-block w-100 h-200\" alt=\"...\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  \n<div class=\"form-group serchWrap\">\n    <h2>Пошук по назві товару</h2>\n    <input class=\"form-control col-sm-9\" id=\"exampleInput\" [(ngModel)]=\"searchstr\" placeholder=\"Пошук товару\">\n  </div>\n\n\n\n <h2>Каталог товарів</h2>\n <div class=\"itemsWrap\">\n    <div class=\"filters\">\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <button class=\"btn btn-info\" data-toggle=\"button\" (click)=\"allproducts()\">Усі товари</button>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"checkbox\" [(ngModel)]=\"showMobile\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\" checked>\n    <label class=\"custom-control-label\" for=\"customRadioInline2\"><i class=\"fas fa-mobile-alt\"></i> Мобільні телефони</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"checkbox\" [(ngModel)]=\"showTablet\" id=\"customRadioInline3\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline3\"><i class=\"fas fa-tablet-alt\"></i> Планшети</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"checkbox\" [(ngModel)]=\"showCover\" id=\"customRadioInline4\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline4\">Чохли</label>\n  </div>\n  <div class=\"custom-control custom-radio custom-control-inline\">\n    <input type=\"checkbox\" [(ngModel)]=\"showGlass\" id=\"customRadioInline5\" name=\"customRadioInline1\" class=\"custom-control-input\">\n    <label class=\"custom-control-label\" for=\"customRadioInline5\">Захисне скло</label>\n  </div>\n</div>\n<div class=\"row all filter\" #rowItem>\n  <app-card *ngFor=\"let card of showCard | search: searchstr | filterProduct: showMobile : showTablet : showCover : showGlass | paginate: { itemsPerPage: 8, currentPage: p }\" [card]=\"card\"></app-card>  \n  \n  <div class=\"noItem\"*ngIf=\"!(showCard | search: searchstr).length\">Товар не знайдено</div> \n</div>\n</div>\n<pagination-controls (pageChange)=\"p = $event\" maxSize=\"8\"\ndirectionLinks=\"true\"\nautoHide=\"true\"\nresponsive=\"true\"\npreviousLabel=\"Попередня\"\nnextLabel=\"Наступна\"\nscreenReaderPaginationLabel=\"Pagination\"\nscreenReaderPageLabel=\"page\"\nscreenReaderCurrentLabel=\"You're on page\">></pagination-controls>\n\n  \n\n\n\n    \n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(cardService) {
        this.cardService = cardService;
        this.cards = [];
        this.searchstr = "";
        this.itemInCart = false;
        this.buyItem = true;
        this.showMobile = true;
        this.showTablet = true;
        this.showCover = true;
        this.showGlass = true;
        this.p = 1;
        this.collection = this.showCard;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    HomePageComponent.prototype.getProducts = function () {
        var _this = this;
        this.subsProducts = this.cardService.getProducts()
            .subscribe(function (data) { _this.cards = data; _this.showCard = data; });
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
        this.subsProducts.unsubscribe();
    };
    HomePageComponent.prototype.allproducts = function () {
        this.showMobile = true;
        this.showTablet = true;
        this.showCover = true;
        this.showGlass = true;
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/item-card/item-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/item-card/item-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.cardDetailsWrapper{\n    display: flex;\n\n}\n.cardImage{\n    width: inherit\n}\n.buy{\n    margin-top: 20px;\n}\n.itemCardWrapper {\n    margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1jYXJkL2l0ZW0tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tY2FyZC9pdGVtLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmREZXRhaWxzV3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG4uY2FyZEltYWdle1xuICAgIHdpZHRoOiBpbmhlcml0XG59XG4uYnV5e1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaXRlbUNhcmRXcmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/item-card/item-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/item-card/item-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"itemCardWrapper\" *ngIf=\"card\">\n      <h1>{{card.type}} {{card.name}}</h1> \n      <div class=\"cardDetailsWrapper\">\n        <div class=\"imageWrapper col-md-4\">\n<img [src]=\"card.image\" alt=\"card.image\" class=\" cardImage\">\n\n\n        </div>\n        \n    \n     <div class=\"cardDetails col-md-8\">\n       <h2>Характеристики: </h2>\n        <p> {{card.text}}</p>\n        <h2 class=\"card-price\">Ціна: {{card.price}} грн.</h2>\n  <button *ngIf=\"buyItem\" (click)=\"addToChart(card)\" class=\"btn btn-success btn-lg buy\" >\n            <i class=\"fas fa-shopping-cart\"></i> Купити товар\n          </button>\n          <button *ngIf=\"itemInCart\" class=\"btn btn-warning btn-lg buy\" >\n            Товар у кошику\n          </button>\n     </div>\n        \n      </div>\n    \n      <div class=\"fullCardDetailText\">\n          <h2>Опис товару: </h2>\n          <p> {{card.detail}}</p>\n      </div>\n     \n    \n      <iframe width=\"868\" height=\"488\" [src]=\"url\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n   \n   \n      "

/***/ }),

/***/ "./src/app/item-card/item-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/item-card/item-card.component.ts ***!
  \**************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");






var ItemCardComponent = /** @class */ (function () {
    function ItemCardComponent(cardService, router, sanitizer, routerUrl) {
        this.cardService = cardService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.routerUrl = routerUrl;
        this.itemInCart = false;
        this.buyItem = true;
    }
    Object.defineProperty(ItemCardComponent.prototype, "url", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.card.video);
        },
        enumerable: true,
        configurable: true
    });
    ItemCardComponent.prototype.ngOnInit = function () {
        this.getCard();
        this.checkIsProductInChart();
    };
    ItemCardComponent.prototype.checkIsProductInChart = function () {
        var _this = this;
        var products = JSON.parse(localStorage.getItem('products'));
        products.forEach(function (prod) {
            if (prod.id === _this.card.id) {
                _this.itemInCart = true;
                _this.buyItem = false;
            }
        });
    };
    ItemCardComponent.prototype.getCard = function () {
        var _this = this;
        var id = +this.router.snapshot.paramMap.get('id');
        this.subsCard = this.cardService.getProductById(id)
            .subscribe(function (data) { return _this.card = data; });
    };
    ItemCardComponent.prototype.addToChart = function (item) {
        var products = JSON.parse(localStorage.getItem('products'));
        if (products) {
            products.push(item);
            localStorage.setItem('products', JSON.stringify(products));
        }
        else {
            localStorage.setItem('products', JSON.stringify([item]));
        }
        this.cardService.changeChartQuantity.next();
        this.routerUrl.navigateByUrl('shopingCart');
    };
    ItemCardComponent.prototype.ngOnDestroy = function () {
        this.subsCard.unsubscribe();
    };
    ItemCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-card',
            template: __webpack_require__(/*! ./item-card.component.html */ "./src/app/item-card/item-card.component.html"),
            styles: [__webpack_require__(/*! ./item-card.component.css */ "./src/app/item-card/item-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemCardComponent);
    return ItemCardComponent;
}());



/***/ }),

/***/ "./src/app/mock-data.ts":
/*!******************************!*\
  !*** ./src/app/mock-data.ts ***!
  \******************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [
    { id: 0,
        name: 'Huawei P Smart 2019 3/64GB',
        text: "E\u043A\u0440\u0430\u043D (6.21\", IPS, 2340x1080) / HiSilicon Kirin 710 (4 \u044F\u0434\u0440\u0430 2.2 \u0413\u0413\u0446 + 4 \u044F\u0434\u0440\u0430 1.7 \u0413\u0413\u0446) / \u0434\u0432\u0456 \u043E\u0441\u043D\u043E\u0432\u043D\u0456 \u043A\u0430\u043C\u0435\u0440\u0438: 13 \u041C\u043F + 2 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430: 8 \u041C\u043F / RAM 3 \u0413\u0411 / 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 + microSD (\u0434\u043E 512 \u0413\u0411) / 3G / LTE / GPS / GLONASS / \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 2 SIM-\u043A\u0430\u0440\u0442\u043E\u043A (Nano-SIM) / Android 9.0 (Pie) / 3400 \u043C\u0410\u00B7\u0433\u043E\u0434",
        image: 'https://i2.rozetka.ua/goods/9396113/huawei_p_smart_2019_blue_images_9396113293.jpg',
        price: 5999,
        type: 'Мобільний телефон',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 1, name: 'Huawei P smart+ Black',
        text: "\u042D\u043A\u0440\u0430\u043D (6.3\", IPS, 2340x1080)/ HiSilicon Kirin 710 (2.2 \u0413\u0413\u0446 + 1.7 \u0413\u0413\u0446)/ \u0434\u0432\u043E\u0439\u043D\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: 16 \u041C\u043F + 2 \u041C\u043F, \u0434\u0432\u043E\u0439\u043D\u0430\u044F \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: 24 \u041C\u043F + 2 \u041C\u043F/ RAM 4 \u0413\u0411/ 64 \u0413\u0411 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 + microSD (\u0434\u043E 256 \u0413\u0411)/ 3G/ LTE/ A-GPS/ \u0413\u041B\u041E\u041D\u0410\u0421\u0421/ BDS/ \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 2\u0445 SIM-\u043A\u0430\u0440\u0442 (Nano-SIM)/ Android 8.1 (Oreo)/ 3340 \u043C\u0410*\u0447",
        image: 'https://i2.rozetka.ua/goods/7926542/huawei_p_smart_plus_black_images_7926542781.jpg',
        price: 6999,
        type: 'Мобільний телефон',
        detail: "HUAWEI P smart+ - \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0443 \u0437 \u0431\u0435\u0437\u0440\u0430\u043C\u043A\u043E\u0432\u0438\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C, \u0434\u0432\u043E\u043C\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u043C\u0438 \u0456 \u0434\u0432\u043E\u043C\u0430 \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043A\u0430\u043C\u0435\u0440\u0430\u043C\u0438. \u041E\u0434\u043D\u0430 \u0437 \u0433\u043E\u043B\u043E\u0432\u043D\u0438\u0445 \u0444\u0456\u0448\u043E\u043A \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0443 \u0442\u043E\u043D\u043A\u0438\u0445 \u0440\u0430\u043C\u043A\u0430\u0445 \u0434\u0438\u0441\u043F\u043B\u0435\u044F, \u044F\u043A\u0438\u0439 \u0437\u0430\u0439\u043C\u0430\u0454 \u043C\u0430\u0439\u0436\u0435 \u0432\u0441\u044E \u043B\u0438\u0446\u044C\u043E\u0432\u0443 \u043F\u0430\u043D\u0435\u043B\u044C. \u041C\u0430\u0442\u0440\u0438\u0446\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0430 \u0437\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E IPS, \u0430 \u0457\u0457 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0430 \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 2340\u04451080. \u0414\u0456\u0430\u0433\u043E\u043D\u0430\u043B\u044C \u0434\u0438\u0441\u043F\u043B\u0435\u044F \u0432\u0456\u0434\u043D\u043E\u0441\u043D\u043E \u0432\u0435\u043B\u0438\u043A\u0430 - 6,3 \u0434\u044E\u0439\u043C\u0430, \u0430\u043B\u0435 \u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0442\u043E\u043D\u043A\u0438\u0445 \u0440\u0430\u043C\u043E\u043A \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u0437\u0440\u0443\u0447\u043D\u043E \u043B\u044F\u0433\u0430\u0454 \u0432 \u0440\u0443\u043A\u0443. \u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043F\u0440\u0430\u0446\u044E\u0454 \u043F\u0456\u0434 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F\u043C Android 8, \u0430 \u0437\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440 Kirin 710 \u0437 8 \u044F\u0434\u0440\u0430\u043C\u0438 \u0456 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u044E \u0447\u0430\u0441\u0442\u043E\u0442\u043E\u044E 2,2 \u0413\u0413\u0446. \u0404\u043C\u043D\u0456\u0441\u0442\u044C \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 3340 \u043C\u0410\u0433, \u0447\u043E\u0433\u043E \u043F\u0440\u0438 \u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u043C\u0443 \u043D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u0456 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0454 \u043C\u0430\u0439\u0436\u0435 \u043D\u0430 \u0434\u0432\u0430 \u0434\u043D\u0456. P smart+ - \u0446\u0435 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u0431\u043B\u043E\u043A\u0443 \u0437 \u0434\u0432\u043E\u0445 \u043A\u0430\u043C\u0435\u0440, \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0430 \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0448\u043E\u0457 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 16, \u0430 \u0434\u0440\u0443\u0433\u0438\u0439 - 2 \u041C\u041F. \u0424\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430 \u0442\u0430\u043A\u043E\u0436 \u043D\u0435\u043F\u0440\u043E\u0441\u0442\u0430 \u0456 \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437 \u0434\u0432\u043E\u0445 \u043C\u043E\u0434\u0443\u043B\u0456\u0432 - \u043D\u0430 24 \u0456 2 \u041C\u041F. \u0422\u0430\u043A \u0449\u043E \u0437\u0430 \u044F\u043A\u0456\u0441\u0442\u044C \u0441\u0435\u043B\u0444\u0456 \u043C\u043E\u0436\u043D\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u0438.",
        video: '//www.youtube.com/embed/662k-0R6tdI',
        quantity: 1,
    },
    { id: 2, name: 'Huawei Y6 2019 Brown Faux Leather',
        text: "\u042D\u043A\u0440\u0430\u043D (6.09\", LTPS, 1560x720)/ MediaTek MT6761 (2.0 \u0413\u0413\u0446)/ \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: 13 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: 8 \u041C\u043F/ RAM 2 \u0413\u0411/ 32 \u0413\u0411 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 + microSD (\u0434\u043E 512 \u0413\u0411)/ 3G/ LTE/ GPS/ \u0413\u041B\u041E\u041D\u0410\u0421\u0421/ \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 2\u0445 SIM-\u043A\u0430\u0440\u0442 (Nano-SIM)/ Android 9.0 (Pie) / 3020 \u043C\u0410*\u0447\n    \u0414\u043E\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435: https://rozetka.com.ua/ua/search/?class=0&text=huawei\u00A7ion_id=80003",
        image: 'https://i2.rozetka.ua/goods/11573607/huawei_y6_2019_brown_faux_leather_images_11573607608.jpg',
        price: 4199,
        type: 'Мобільний телефон',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/Xpdk0X3xqek',
        quantity: 1,
    },
    { id: 3, name: 'Huawei P30 6/128GB Aurora',
        text: "\u042D\u043A\u0440\u0430\u043D (6.1\", OLED, 2340x1080)/ HiSilicon Kirin 980 (2 x 2.6 \u0413\u0413\u0446 + 2 x 1.92 \u0413\u0413\u0446 + 4 x 1.8 \u0413\u0413\u0446)/ \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0442\u0440\u043E\u0439\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: 40 \u041C\u043F+16 \u041C\u043F+8 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: 32 \u041C\u043F/ RAM 6 \u0413\u0411/ 128 \u0413\u0411 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438/ 3G/ LTE/ GPS/ A-GPS/ GLONASS/ BDS/ \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 2\u0445 SIM-\u043A\u0430\u0440\u0442 (Nano-SIM)/ Android 9.0 (EMUI 9.1)/ 3650 \u043C\u0410*\u0447\n  \u0414\u043E\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435: https://rozetka.com.ua/ua/search/?class=0&text=huawei\u00A7ion_id=80003",
        image: 'https://i2.rozetka.ua/goods/11462172/huawei_p30_blue_images_11462172554.jpg',
        price: 22999,
        type: 'Мобільний телефон',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/txJV5pH5z1I',
        quantity: 1,
    },
    { id: 4, name: 'Huawei P20 4/64GB Midnight Blue',
        text: "\u0415\u043A\u0440\u0430\u043D (5.8\", IPS, 2244x1080) / HiSilicon Kirin 970 (4 \u044F\u0434\u0440\u0430 2.36 \u0413\u0413\u0446 + 4 \u044F\u0434\u0440\u0430 1.8 \u0413\u0413\u0446) / \u0434\u0432\u0456 \u043E\u0441\u043D\u043E\u0432\u043D\u0456 \u043A\u0430\u043C\u0435\u0440\u0438: 20 \u041C\u043F + 12 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430: 24 \u041C\u043F / RAM 4 \u0413\u0411 / 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 / 3G / LTE / GPS / GLONASS / \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 2 SIM-\u043A\u0430\u0440\u0442\u043E\u043A (Nano-SIM) / Android 8.1 (Oreo) / 3400 \u043C\u0410\u00B7\u0433\u043E\u0434",
        image: 'https://i1.rozetka.ua/goods/4627038/huawei_p20_pro_6_128gb_twilight_images_4627038056.jpg',
        price: 12999,
        type: 'Мобільний телефон',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/X8WbQKF9gnY',
        quantity: 1,
    },
    { id: 5, name: 'Huawei P30 Pro 8/256GB Black',
        text: "\u0415\u043A\u0440\u0430\u043D (6.47\", OLED, 2340x1080) / HiSilicon Kirin 980 (2 x 2.6 \u0413\u0413\u0446 + 2 x 1.92 \u0413\u0413\u0446 + 4 x 1.8 \u0413\u0413\u0446) / \u043E\u0441\u043D\u043E\u0432\u043D\u0430 \u043F\u043E\u0442\u0440\u0456\u0439\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430: 40 \u041C\u043F + 20 \u041C\u043F + 8 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430: 32 \u041C\u043F / RAM 8 \u0413\u0411 / 256 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 / 3G / LTE / GPS / A-GPS / GLONASS / BDS / \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 2 SIM-\u043A\u0430\u0440\u0442\u043E\u043A (Nano-SIM) / Android 9.0 (EMUI 9.1) / 4200 \u043C\u0410\u00B7\u0433\u043E\u0434",
        image: 'https://i1.rozetka.ua/goods/11475344/huawei_p30_pro_8_256_black_images_11475344342.jpg',
        price: 32999,
        type: 'Мобільний телефон',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/txJV5pH5z1I',
        quantity: 1,
    },
    { id: 6, name: 'Huawei Y6 2018 Black',
        text: "\u0415\u043A\u0440\u0430\u043D 9.6\" IPS (1280x800) MultiTouch / Qualcomm Snapdragon 425 (1.4 \u0413\u0413\u0446) / RAM 2 \u0413\u0411 / 16 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 + microSD / Wi-Fi / Bluetooth / \u043E\u0441\u043D\u043E\u0432\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430 5 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 2 \u041C\u043F / GPS / Android 7.0 (Nougat) / 460 \u0433 / \u0441\u0456\u0440\u0438\u0439",
        image: 'https://i2.rozetka.ua/goods/4627051/huawei_p20_lite_4_64gb_black_images_4627051424.jpg',
        price: 3499,
        type: 'Мобільний телефон',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 7, name: 'Huawei MediaPad T3 10 WiFi Grey',
        text: "\u0415\u043A\u0440\u0430\u043D (6.1\", OLED, 2240x1080) / HiSilicon Kirin 970 (4 \u044F\u0434\u0440\u0430 2.36 \u0413\u0413\u0446 + 4 \u044F\u0434\u0440\u0430 1.8 \u0413\u0413\u0446) / \u0442\u0440\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u0456 \u043A\u0430\u043C\u0435\u0440\u0438: 40 \u041C\u043F + 20 \u041C\u043F + 8 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430: 24 \u041C\u043F / RAM 6 \u0413\u0411 / 128 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 / 3G / LTE / GPS / GLONASS / \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 2 SIM-\u043A\u0430\u0440\u0442\u043E\u043A (Nano-SIM) / Android 8.1 (Oreo) / 4000 \u043C\u0410\u00B7\u0433\u043E\u0434",
        image: 'https://i2.rozetka.ua/goods/6243009/huawei_mediapad_t3_10_grey_images_6243009806.jpg',
        price: 4499,
        type: 'Планшет',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/m1Om-70FRVc',
        quantity: 1,
    },
    { id: 8, name: 'Huawei MediaPad M5 Lite 10" 3/32GB LTE Grey',
        text: "\u0415\u043A\u0440\u0430\u043D 10.1\" IPS (1920x1200) MultiTouch / HiSilicon Kirin 659 (2.36 \u0413\u0413\u0446 + 1.7 \u0413\u0413\u0446) / RAM 3 \u0413\u0411 / 32 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 + microSD / 3G / LTE / Wi-Fi / Bluetooth 4.2 / \u043E\u0441\u043D\u043E\u0432\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430 8 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 8 \u041C\u043F / GPS / \u0413\u041B\u041E\u041D\u0410\u0421\u0421 / \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 2 SIM-\u043A\u0430\u0440\u0442\u043E\u043A / Android 8.0 (EMUI) / 475 \u0433 / \u0441\u0456\u0440\u0438\u0439",
        image: 'https://i2.rozetka.ua/goods/7611003/huawei_mediapad_m5_lite_10_3_32_grey_images_7611003948.jpg',
        price: 9999,
        type: 'Планшет',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/y6mqHps5kqY https://youtu.be/hL4vhmcxHWM',
        quantity: 1,
    },
    { id: 9, name: 'Huawei MediaPad T3 7" (BG2-U01) 1GB/8GB Gold',
        text: "\u0415\u043A\u0440\u0430\u043D 7.0\" IPS (1024x600) MultiTouch / Spreadtrum SC7731G (1.3 \u0413\u0413\u0446) / RAM 1 \u0413\u0411 / 8 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 + microSD / 3G / Wi-Fi / Bluetooth / \u043E\u0441\u043D\u043E\u0432\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430 2 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 2 \u041C\u043F / GPS / Android 7.0 (Nougat) / 275 \u0433 / \u0437\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u0438\u0439",
        image: 'https://i1.rozetka.ua/goods/10370396/huawei_bg2_u01_gold_images_10370396000.jpg',
        price: 2999,
        type: 'Планшет',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 10, name: 'Huawei MediaPad T3 10" LTE Gold (AGS-L09 gold)',
        text: "\u0415\u043A\u0440\u0430\u043D 10.1\" IPS (1920x1200) MultiTouch / HiSilicon Kirin 659 (2.36 \u0413\u0413\u0446 + 1.7 \u0413\u0413\u0446) / RAM 3 \u0413\u0411 / 32 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456 + microSD / 3G / LTE / Wi-Fi / Bluetooth 4.2 / \u043E\u0441\u043D\u043E\u0432\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430 5 \u041C\u043F, \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 2 \u041C\u043F / GPS / \u0413\u041B\u041E\u041D\u0410\u0421\u0421 / \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 2 SIM-\u043A\u0430\u0440\u0442\u043E\u043A / Android 8.0 (EMUI) / 465 \u0433 / \u0447\u043E\u0440\u043D\u0438\u0439",
        image: 'https://i2.rozetka.ua/goods/8045741/56922747_images_8045741511.jpg',
        price: 7444,
        type: 'Планшет',
        detail: "HUAWEI P Smart 2019 - \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 P Smart. \u0423 \u0446\u044C\u043E\u043C\u0443 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0438\u0439 \u0434\u043E 6,21-\u0434\u044E\u0439\u043C\u0430 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0437 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u043E\u044E \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E 2340x1080, \u043F\u043E\u0437\u0431\u0443\u0432\u0441\u044F \"\u043C\u043E\u043D\u043E\u0431\u0440\u043E\u0432\u0438\" \u0456 \u043E\u0431\u0437\u0430\u0432\u0456\u0432\u0441\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0454\u044E NFC \u0434\u043B\u044F \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0414\u0438\u0437\u0430\u0439\u043D \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0432 \u043A\u0430\u043F\u0456\u0442\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0456\u043D, \u043A\u0440\u0456\u043C \u0437\u043B\u0435\u0433\u043A\u0430 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0445 \u043A\u043E\u043B\u0456\u0440\u043D\u0438\u0445 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u0456 \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u0442\u0443\u043F\u0443 \u043D\u0430\u0434 \u0434\u0438\u0441\u043F\u043B\u0435\u0454\u043C. \u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u043C\u0456\u043D\u0438 \u0454 \u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456, \u0441\u0435\u0440\u0435\u0434 \u044F\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430 Kirin 710 \u0456 64 \u0413\u0411 \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0457 \u043F\u0430\u043C'\u044F\u0442\u0456, \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435, 3 \u0413\u0411. HUAWEI P Smart 2019 \u0434\u043E\u0431\u0440\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0421\u0435\u043B\u0444\u0456, \u0437\u0430\u0432\u0434\u044F\u043A\u0438 24-\u043C\u0435\u0433\u0430\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u044E \u0444\u0440\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0430\u043C\u0435\u0440\u0456. \u0423 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0454\u043C\u043D\u0456\u0441\u0442\u044E 3400 \u043C\u0410\u0433, \u044F\u043A\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0442\u0438 \u043D\u0430 1-2 \u0434\u043D\u044F, \u0432 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456 \u0432\u0456\u0434 \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 11, name: 'Чохол ColorWay TPU матова для Huawei P Smart',
        text: "\u041F\u0430\u043D\u0435\u043B\u044C ColorWay TPU \u043C\u0430\u0442\u043E\u0432\u0430 \u0434\u043B\u044F Huawei P Smart (2019)/Honor 10 Lite Black (CW-CTMH10L-BK)",
        image: 'https://i2.rozetka.ua/goods/10915749/colorway_cw_ctmh10l_bk_images_10915749435.jpg',
        price: 149,
        type: 'Чохол',
        detail: "\u0422\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u041F\u0430\u043D\u0435\u043B\u044C ColorWay TPU \u043C\u0430\u0442\u043E\u0432\u0430 \u0434\u043B\u044F Huawei P Smart (2019)/Honor 10 Lite Black (CW-CTMH10L-BK)",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 12, name: 'Чохол Huawei для Huawei P30 Pro Transparent',
        text: "\u041F\u0430\u043D\u0435\u043B\u044C Huawei \u0434\u043B\u044F Huawei P30 Pro Transparent (51993024)",
        image: 'https://i1.rozetka.ua/goods/11489948/huawei_51993024_images_11489948930.jpg',
        price: 569,
        type: 'Чохол',
        detail: "\u041F\u0430\u043D\u0435\u043B\u044C Huawei, \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 Huawei P30 Pro, \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0432\u0456\u0434 \u0437\u043D\u043E\u0441\u0443 \u0442\u0430 \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u044C, \u0443 \u0442\u0430\u043A\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u044E\u0447\u0438 \u0442\u0435\u0440\u043C\u0456\u043D \u0439\u043E\u0433\u043E \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u0457 \u0442\u0430 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u044E\u0447\u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0435 \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 13, name: 'Чохол Armorstandart Glitter Huawei P Smart 2019',
        text: "\u0411\u0430\u043C\u043F\u0435\u0440 Armorstandart Air Glitter \u0434\u043B\u044F Huawei P Smart 2019 Sapphire Black (ARM53990)",
        image: 'https://i2.rozetka.ua/goods/11599103/armorstandart_arm53990_images_11599103859.jpg',
        price: 167,
        type: 'Чохол',
        detail: "\u0427\u043E\u0445\u043E\u043B-\u041D\u0430\u043A\u043B\u0430\u0434\u043A\u0430 ArmorStandart Huawei P Smart 2019 , \u0432\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0437 \u0432\u0438\u0441\u043E\u043A\u043E\u044F\u043A\u0456\u0441\u043D\u0438\u0445, \u043C\u0456\u0446\u043D\u0438\u0445, \u0456 \u0434\u043E\u0432\u0433\u043E\u0432\u0456\u0447\u043D\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432, \u044F\u043A\u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0430\u0442\u044C \u0432\u0430\u0448\u043E\u043C\u0443 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0443 \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u043F\u0438\u043B\u0443, \u0431\u0440\u0443\u0434\u0443, \u043F\u043E\u0442\u0435\u0440\u0442\u043E\u0441\u0442\u0435\u0439 \u0456 \u043F\u043E\u0434\u0440\u044F\u043F\u0438\u043D, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0432\u0431\u0435\u0440\u0435\u0436\u0435 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u043F\u0440\u0438 \u043F\u0430\u0434\u0456\u043D\u043D\u0456. \u0427\u043E\u0445\u043E\u043B \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u0442\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0449\u043E\u0431 \u0412\u0438 \u043C\u043E\u0433\u043B\u0438 \u043B\u0435\u0433\u043A\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u0412\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0432\u0441\u0456 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u0456 \u0440\u043E\u0437'\u0454\u043C\u0438. \u041A\u0440\u0456\u043C \u0446\u044C\u043E\u0433\u043E, \u0447\u043E\u0445\u043E\u043B-\u043D\u0430\u043A\u043B\u0430\u0434\u043A\u0430 ArmorStandart Huawei P Smart 2019 \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u043D\u0438\u043C \u0456 \u0441\u0442\u0438\u043B\u044C\u043D\u0438\u043C \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u043C \u0432\u0438\u0433\u043B\u044F\u0434\u043E\u043C, \u0449\u043E \u0434\u043E\u0434\u0430\u0454 \u043F\u0440\u0438\u0432\u0430\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456 \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E \u0456 \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0438\u0442\u044C \u0439\u043E\u0433\u043E \u0435\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u0456 \u0444\u043E\u0440\u043C\u0438.",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 14, name: 'Чохол Love Mei Powerful для Huawei P30 Pro',
        text: "\u041F\u0430\u043D\u0435\u043B\u044C Love Mei Powerful \u0434\u043B\u044F Huawei P30 Pro Black (BC_703462)",
        image: 'https://i2.rozetka.ua/goods/11976951/love_mei_bc_703462_images_11976951060.jpg',
        price: 999,
        type: 'Чохол',
        detail: "\n\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440, \u0437\u0434\u0430\u0442\u043D\u0438\u0439 \u043F\u043E \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u044C\u043E\u043C\u0443 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0456\u0434 \u0443\u0434\u0430\u0440\u0443, \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u0433\u043E \u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0430\u0431\u043E \u043D\u0430\u0432\u0456\u0442\u044C \u0432\u0456\u0434 \u0432\u043E\u0434\u0438. \u0427\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u044C \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0443\u043C\u043E\u0432\u0430\u0445: \u043C\u043E\u0436\u043D\u0430 \u0431\u0435\u0437\u0431\u043E\u044F\u0437\u043D\u043E \u0432\u0437\u044F\u0442\u0438 \u0430\u043F\u0430\u0440\u0430\u0442 \u043D\u0430 \u0431\u0435\u0440\u0435\u0433 \u0432\u043E\u0434\u043E\u0439\u043C\u0438 \u0430\u0431\u043E \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u044E \u0456 \u0431\u0443\u0442\u0438 \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u0438\u043C, \u0449\u043E \u0432\u0456\u043D \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0432\u0456\u0434 \u043F\u0456\u0449\u0438\u043D\u043E\u043A \u0430\u0431\u043E \u0440\u0456\u0434\u0438\u043D\u0438. \u041C\u043E\u0436\u043D\u0430 \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0445\u0432\u0438\u043B\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u0437\u0430 \u043D\u044C\u043E\u0433\u043E \u043F\u0440\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u0443 \u0432 \u0433\u043E\u0440\u0430\u0445, \u043D\u0430 \u043B\u0438\u0436\u0430\u0445, \u0447\u043E\u0432\u043D\u0456. \u0412 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0447\u043E\u0445\u043B\u0430 LOVE MEI Powerful \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0437 \u041F\u0430\u0442\u0435\u043D\u0442\u0456\u0440\u043E\u0432\u0430\u043D\u043D\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443 \u043F\u043E\u043B\u0456\u043C\u0435\u0440\u0443 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443, \u043F\u043E\u043B\u0456\u0443\u0440\u0435\u0442\u0430\u043D\u0443 \u0442\u0430 \u0433\u0443\u043C\u0438. \u041F\u043E \u043A\u0440\u0430\u044F\u0445 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043E\u0442\u0432\u043E\u0440\u0438 \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u043E\u0457 \u0444\u043E\u0440\u043C\u0438, \u0449\u043E \u043F\u043E\u043C'\u044F\u043A\u0448\u0443\u044E\u0442\u044C \u0456 \u0430\u043C\u043E\u0440\u0442\u0438\u0437\u0443\u044E\u0447\u0456 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u0440\u0438 \u0443\u0434\u0430\u0440\u0456. \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0430 \u0434\u043B\u044F \u043F\u043E\u043C'\u044F\u043A\u0448\u0435\u043D\u043D\u044F \u0443\u0434\u0430\u0440\u0456\u0432 \u0456 \u0432\u0456\u0434\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0442\u0435\u043F\u043B\u0430 \u0432\u0456\u0434 \u043F\u0440\u0430\u0446\u044E\u044E\u0447\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443. \u0421\u0430\u043C\u0435 \u0442\u0430\u043A\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F \u0432\u0438\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0437 \u0432\u0438\u0441\u043E\u0442\u0438 1,8 \u043C\u0435\u0442\u0440\u0430 \u0431\u0435\u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u044C. \u0417\u0456\u0431\u0440\u0430\u0442\u0438 \u0442\u0430\u043A\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u043D\u0435 \u0441\u043A\u043B\u0430\u0434\u0435 \u0442\u0440\u0443\u0434\u043D\u043E\u0449\u0456\u0432. \u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0432\u0456\u0434\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0433\u0432\u0438\u043D\u0442\u0438 \u0456 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0432\u0430\u0448 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0443 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438, \u0432\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043E\u0457 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443. \u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F, \u0449\u043E\u0431 \u0432\u0441\u0435 \u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438 \u0456 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0443\u0432\u0430\u043B\u0438\u0441\u044F \u043D\u0430 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456, \u0430 \u0434\u0430\u043B\u0456 \u043D\u0430\u043A\u0440\u0438\u0442\u0438 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0431\u0430\u043C\u043F\u0435\u0440\u0430 \u0456\u0437 \u0437\u0430\u043F\u043E\u0431\u0456\u0436\u043D\u0438\u043C \u0441\u043A\u043B\u043E\u043C \u0456 \u0437\u0430\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u043D\u0430\u0437\u0430\u0434 6 \u0431\u043E\u043B\u0442\u0456\u0432 \u043D\u0430 \u0432\u0441\u0456 \u0431\u043E\u043A\u0438. \u041A\u043B\u0430\u0432\u0456\u0448\u0456, \u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u0456 \u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443, \u0437\u0440\u0443\u0447\u043D\u0456 \u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456. \u0412\u043E\u043D\u0438 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u044E\u0442\u044C \u043F\u0456\u0434\u0441\u0442\u0443\u043F \u0434\u043E \u0432\u0441\u0456\u0445 \u043E\u0442\u0432\u043E\u0440\u0456\u0432 \u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0432\u0430\u0448\u043E\u0433\u043E \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430. \u0423 \u043D\u0430\u0431\u043E\u0440\u0456, \u043A\u0440\u0456\u043C \u0441\u0430\u043C\u043E\u0433\u043E \u0431\u0430\u043C\u043F\u0435\u0440\u0430, \u0442\u0430\u043A\u043E\u0436 \u0434\u043E\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0432\u0438\u043A\u0440\u0443\u0442\u043A\u0430 \u0434\u043B\u044F \u0437\u0431\u0456\u0440\u043A\u0438 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0447\u043E\u0445\u043B\u0430 \u043D\u0430 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456, \u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043D\u043D\u0438\u043A \u0437\u0440\u0430\u0437\u043A\u0430 \u041C2, 2 \u0433\u0432\u0438\u043D\u0442\u0430 \u043D\u0430 \u0437\u0430\u043F\u0430\u0441, \u0448\u043C\u0430\u0442\u043E\u043A \u0442\u043A\u0430\u043D\u0438\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443 \u0434\u043B\u044F \u0442\u0443\u0440\u0431\u043E\u0442\u0438 \u043F\u0440\u043E \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0441\u043A\u043B\u0456 \u043C\u0430\u0440\u043A\u0438 Gorilla Glass, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0440\u0435\u043C\u0456\u043D\u0435\u0446\u044C, \u044F\u043A\u0438\u0439 \u043E\u0434\u044F\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0443\u043A\u0443 \u0456 \u0437\u0430\u0445\u0438\u0441\u043D\u0435 \u0441\u043A\u043B\u043E. \u041E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456: \u0423\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0435\u043A\u0440\u0430\u043D\u0443 \u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0440\u043E\u0437'\u0454\u043C\u0456\u0432 \u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0437 \u0430\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u043E\u0433\u043E \u0441\u043F\u043B\u0430\u0432\u0443 \u041D\u0430\u0434\u0456\u0439\u043D\u0438\u0439 \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u0443\u0434\u0430\u0440\u0456\u0432, \u043F\u043E\u0434\u0440\u044F\u043F\u0438\u043D, \u043F\u0438\u043B\u0443 \u0456 \u0432\u043E\u043B\u043E\u0433\u0438 \u0421\u0442\u0438\u043B\u044C\u043D\u0438\u0439 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u0432\u0438\u0433\u043B\u044F\u0434 \u0427\u0438 \u043D\u0435 \u0437\u043D\u0438\u0436\u0443\u0454 \u0447\u0443\u0442\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0435\u043A\u0440\u0430\u043D\u0430",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 15, name: 'Захисне скло 2E 3D для Huawei P Smart+',
        text: "\u0417\u0430\u0445\u0438\u0441\u043D\u0435 \u0441\u043A\u043B\u043E 2E 3D \u0434\u043B\u044F Huawei P Smart+ Black FG (2E-TGHW-PSMP-3D-BB)",
        image: 'https://i2.rozetka.ua/goods/7789946/2e_tghw_psmp_3d_bb_images_7789946736.jpg',
        price: 299,
        type: 'Захисне скло',
        detail: "\n\u0423\u0434\u0430\u0440\u043E\u043F\u0440\u043E\u0447\u043D\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E  \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C\u044E 9H \u0441  \u043E\u043B\u0435\u043E\u0444\u043E\u0431\u043D\u044B\u043C \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435\u043C \u043D\u0430 \u043A\u043B\u0435\u0439\u043A\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435. \u0417\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0432\u0430\u0448\u0435 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043E\u0442 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u0438 \u043F\u044B\u043B\u0438.\n\n",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 16, name: 'Захисне скло DENGOS для Huawei P30',
        text: "\u041F\u0430\u043D\u0435\u043B\u044C Love Mei Powerful \u0434\u043B\u044F Huawei P30 Pro Black (BC_703462)",
        image: 'https://i2.rozetka.ua/goods/12089771/copy_dengos_tgfgp_02_5cca8540449db_images_12089771880.jpg',
        price: 199,
        type: 'Захисне скло',
        detail: "\n\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0435 \u0437\u0430\u0445\u0438\u0441\u043D\u0435 \u0441\u043A\u043B\u043E DENGOS Full Glue Privacy Tempered Glass \u2014 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0435\u043A\u0440\u0430\u043D\u0443 \u0432\u0430\u0448\u043E\u0433\u043E \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0432\u0456\u0434 \u043F\u043E\u0434\u0440\u044F\u043F\u0438\u043D, \u0442\u0440\u0456\u0449\u0438\u043D \u0456 \u0432\u0456\u0434\u043A\u043E\u043B\u0456\u0432, \u0449\u043E \u0432\u0438\u043D\u0438\u043A\u0430\u044E\u0442\u044C \u043F\u0456\u0434 \u0447\u0430\u0441 \u043F\u043E\u0431\u0443\u0442\u043E\u0432\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 17, name: 'Захисне скло ArmorStandart для Huawei P Smart',
        text: "\u041F\u0430\u043D\u0435\u043B\u044C Love Mei Powerful \u0434\u043B\u044F Huawei P30 Pro Black (BC_703462)",
        image: 'https://i2.rozetka.ua/goods/11236066/armorstandart_arm52284_gfg_wt_images_11236066794.jpg',
        price: 180,
        type: 'Захисне скло',
        detail: "\n\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440, \u0437\u0434\u0430\u0442\u043D\u0438\u0439 \u043F\u043E \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u044C\u043E\u043C\u0443 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0456\u0434 \u0443\u0434\u0430\u0440\u0443, \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u0433\u043E \u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0430\u0431\u043E \u043D\u0430\u0432\u0456\u0442\u044C \u0432\u0456\u0434 \u0432\u043E\u0434\u0438. \u0427\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u044C \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0443\u043C\u043E\u0432\u0430\u0445: \u043C\u043E\u0436\u043D\u0430 \u0431\u0435\u0437\u0431\u043E\u044F\u0437\u043D\u043E \u0432\u0437\u044F\u0442\u0438 \u0430\u043F\u0430\u0440\u0430\u0442 \u043D\u0430 \u0431\u0435\u0440\u0435\u0433 \u0432\u043E\u0434\u043E\u0439\u043C\u0438 \u0430\u0431\u043E \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u044E \u0456 \u0431\u0443\u0442\u0438 \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u0438\u043C, \u0449\u043E \u0432\u0456\u043D \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0432\u0456\u0434 \u043F\u0456\u0449\u0438\u043D\u043E\u043A \u0430\u0431\u043E \u0440\u0456\u0434\u0438\u043D\u0438. \u041C\u043E\u0436\u043D\u0430 \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0445\u0432\u0438\u043B\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u0437\u0430 \u043D\u044C\u043E\u0433\u043E \u043F\u0440\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u0443 \u0432 \u0433\u043E\u0440\u0430\u0445, \u043D\u0430 \u043B\u0438\u0436\u0430\u0445, \u0447\u043E\u0432\u043D\u0456. \u0412 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0447\u043E\u0445\u043B\u0430 LOVE MEI Powerful \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0437 \u041F\u0430\u0442\u0435\u043D\u0442\u0456\u0440\u043E\u0432\u0430\u043D\u043D\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443 \u043F\u043E\u043B\u0456\u043C\u0435\u0440\u0443 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443, \u043F\u043E\u043B\u0456\u0443\u0440\u0435\u0442\u0430\u043D\u0443 \u0442\u0430 \u0433\u0443\u043C\u0438. \u041F\u043E \u043A\u0440\u0430\u044F\u0445 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043E\u0442\u0432\u043E\u0440\u0438 \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u043E\u0457 \u0444\u043E\u0440\u043C\u0438, \u0449\u043E \u043F\u043E\u043C'\u044F\u043A\u0448\u0443\u044E\u0442\u044C \u0456 \u0430\u043C\u043E\u0440\u0442\u0438\u0437\u0443\u044E\u0447\u0456 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u0440\u0438 \u0443\u0434\u0430\u0440\u0456. \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0430 \u0434\u043B\u044F \u043F\u043E\u043C'\u044F\u043A\u0448\u0435\u043D\u043D\u044F \u0443\u0434\u0430\u0440\u0456\u0432 \u0456 \u0432\u0456\u0434\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0442\u0435\u043F\u043B\u0430 \u0432\u0456\u0434 \u043F\u0440\u0430\u0446\u044E\u044E\u0447\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443. \u0421\u0430\u043C\u0435 \u0442\u0430\u043A\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F \u0432\u0438\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0437 \u0432\u0438\u0441\u043E\u0442\u0438 1,8 \u043C\u0435\u0442\u0440\u0430 \u0431\u0435\u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u044C. \u0417\u0456\u0431\u0440\u0430\u0442\u0438 \u0442\u0430\u043A\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u043D\u0435 \u0441\u043A\u043B\u0430\u0434\u0435 \u0442\u0440\u0443\u0434\u043D\u043E\u0449\u0456\u0432. \u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0432\u0456\u0434\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0433\u0432\u0438\u043D\u0442\u0438 \u0456 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0432\u0430\u0448 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0443 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438, \u0432\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043E\u0457 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443. \u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F, \u0449\u043E\u0431 \u0432\u0441\u0435 \u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438 \u0456 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0443\u0432\u0430\u043B\u0438\u0441\u044F \u043D\u0430 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456, \u0430 \u0434\u0430\u043B\u0456 \u043D\u0430\u043A\u0440\u0438\u0442\u0438 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0431\u0430\u043C\u043F\u0435\u0440\u0430 \u0456\u0437 \u0437\u0430\u043F\u043E\u0431\u0456\u0436\u043D\u0438\u043C \u0441\u043A\u043B\u043E\u043C \u0456 \u0437\u0430\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u043D\u0430\u0437\u0430\u0434 6 \u0431\u043E\u043B\u0442\u0456\u0432 \u043D\u0430 \u0432\u0441\u0456 \u0431\u043E\u043A\u0438. \u041A\u043B\u0430\u0432\u0456\u0448\u0456, \u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u0456 \u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443, \u0437\u0440\u0443\u0447\u043D\u0456 \u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456. \u0412\u043E\u043D\u0438 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u044E\u0442\u044C \u043F\u0456\u0434\u0441\u0442\u0443\u043F \u0434\u043E \u0432\u0441\u0456\u0445 \u043E\u0442\u0432\u043E\u0440\u0456\u0432 \u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0432\u0430\u0448\u043E\u0433\u043E \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430. \u0423 \u043D\u0430\u0431\u043E\u0440\u0456, \u043A\u0440\u0456\u043C \u0441\u0430\u043C\u043E\u0433\u043E \u0431\u0430\u043C\u043F\u0435\u0440\u0430, \u0442\u0430\u043A\u043E\u0436 \u0434\u043E\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0432\u0438\u043A\u0440\u0443\u0442\u043A\u0430 \u0434\u043B\u044F \u0437\u0431\u0456\u0440\u043A\u0438 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0447\u043E\u0445\u043B\u0430 \u043D\u0430 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456, \u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043D\u043D\u0438\u043A \u0437\u0440\u0430\u0437\u043A\u0430 \u041C2, 2 \u0433\u0432\u0438\u043D\u0442\u0430 \u043D\u0430 \u0437\u0430\u043F\u0430\u0441, \u0448\u043C\u0430\u0442\u043E\u043A \u0442\u043A\u0430\u043D\u0438\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443 \u0434\u043B\u044F \u0442\u0443\u0440\u0431\u043E\u0442\u0438 \u043F\u0440\u043E \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0441\u043A\u043B\u0456 \u043C\u0430\u0440\u043A\u0438 Gorilla Glass, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0440\u0435\u043C\u0456\u043D\u0435\u0446\u044C, \u044F\u043A\u0438\u0439 \u043E\u0434\u044F\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0443\u043A\u0443 \u0456 \u0437\u0430\u0445\u0438\u0441\u043D\u0435 \u0441\u043A\u043B\u043E. \u041E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456: \u0423\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0435\u043A\u0440\u0430\u043D\u0443 \u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0440\u043E\u0437'\u0454\u043C\u0456\u0432 \u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0437 \u0430\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u043E\u0433\u043E \u0441\u043F\u043B\u0430\u0432\u0443 \u041D\u0430\u0434\u0456\u0439\u043D\u0438\u0439 \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u0443\u0434\u0430\u0440\u0456\u0432, \u043F\u043E\u0434\u0440\u044F\u043F\u0438\u043D, \u043F\u0438\u043B\u0443 \u0456 \u0432\u043E\u043B\u043E\u0433\u0438 \u0421\u0442\u0438\u043B\u044C\u043D\u0438\u0439 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u0432\u0438\u0433\u043B\u044F\u0434 \u0427\u0438 \u043D\u0435 \u0437\u043D\u0438\u0436\u0443\u0454 \u0447\u0443\u0442\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0435\u043A\u0440\u0430\u043D\u0430",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
    { id: 18, name: 'Захисне скло BeCover для Huawei MediaPad',
        text: "\u041F\u0430\u043D\u0435\u043B\u044C Love Mei Powerful \u0434\u043B\u044F Huawei P30 Pro Black (BC_703462)",
        image: 'https://i2.rozetka.ua/goods/7903696/copy_becover_bc_702619_5bbc734ec9d50_images_7903696587.jpg',
        price: 215,
        type: 'Захисне скло',
        detail: "\n\u041C\u0435\u0442\u0430\u043B\u0435\u0432\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440, \u0437\u0434\u0430\u0442\u043D\u0438\u0439 \u043F\u043E \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u044C\u043E\u043C\u0443 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0456\u0434 \u0443\u0434\u0430\u0440\u0443, \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u0433\u043E \u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0430\u0431\u043E \u043D\u0430\u0432\u0456\u0442\u044C \u0432\u0456\u0434 \u0432\u043E\u0434\u0438. \u0427\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u044C \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0443\u043C\u043E\u0432\u0430\u0445: \u043C\u043E\u0436\u043D\u0430 \u0431\u0435\u0437\u0431\u043E\u044F\u0437\u043D\u043E \u0432\u0437\u044F\u0442\u0438 \u0430\u043F\u0430\u0440\u0430\u0442 \u043D\u0430 \u0431\u0435\u0440\u0435\u0433 \u0432\u043E\u0434\u043E\u0439\u043C\u0438 \u0430\u0431\u043E \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u044E \u0456 \u0431\u0443\u0442\u0438 \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u0438\u043C, \u0449\u043E \u0432\u0456\u043D \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0432\u0456\u0434 \u043F\u0456\u0449\u0438\u043D\u043E\u043A \u0430\u0431\u043E \u0440\u0456\u0434\u0438\u043D\u0438. \u041C\u043E\u0436\u043D\u0430 \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0445\u0432\u0438\u043B\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u0437\u0430 \u043D\u044C\u043E\u0433\u043E \u043F\u0440\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u0443 \u0432 \u0433\u043E\u0440\u0430\u0445, \u043D\u0430 \u043B\u0438\u0436\u0430\u0445, \u0447\u043E\u0432\u043D\u0456. \u0412 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0431\u0440\u043E\u043D\u044C\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0447\u043E\u0445\u043B\u0430 LOVE MEI Powerful \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0437 \u041F\u0430\u0442\u0435\u043D\u0442\u0456\u0440\u043E\u0432\u0430\u043D\u043D\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443 \u043F\u043E\u043B\u0456\u043C\u0435\u0440\u0443 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443, \u043F\u043E\u043B\u0456\u0443\u0440\u0435\u0442\u0430\u043D\u0443 \u0442\u0430 \u0433\u0443\u043C\u0438. \u041F\u043E \u043A\u0440\u0430\u044F\u0445 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043E\u0442\u0432\u043E\u0440\u0438 \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u043E\u0457 \u0444\u043E\u0440\u043C\u0438, \u0449\u043E \u043F\u043E\u043C'\u044F\u043A\u0448\u0443\u044E\u0442\u044C \u0456 \u0430\u043C\u043E\u0440\u0442\u0438\u0437\u0443\u044E\u0447\u0456 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u0440\u0438 \u0443\u0434\u0430\u0440\u0456. \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0430 \u0434\u043B\u044F \u043F\u043E\u043C'\u044F\u043A\u0448\u0435\u043D\u043D\u044F \u0443\u0434\u0430\u0440\u0456\u0432 \u0456 \u0432\u0456\u0434\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0442\u0435\u043F\u043B\u0430 \u0432\u0456\u0434 \u043F\u0440\u0430\u0446\u044E\u044E\u0447\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443. \u0421\u0430\u043C\u0435 \u0442\u0430\u043A\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F \u0432\u0438\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u0430\u0434\u0456\u043D\u043D\u044F \u0437 \u0432\u0438\u0441\u043E\u0442\u0438 1,8 \u043C\u0435\u0442\u0440\u0430 \u0431\u0435\u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u044C. \u0417\u0456\u0431\u0440\u0430\u0442\u0438 \u0442\u0430\u043A\u0438\u0439 \u0431\u0430\u043C\u043F\u0435\u0440 \u043D\u0435 \u0441\u043A\u043B\u0430\u0434\u0435 \u0442\u0440\u0443\u0434\u043D\u043E\u0449\u0456\u0432. \u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0432\u0456\u0434\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0433\u0432\u0438\u043D\u0442\u0438 \u0456 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0432\u0430\u0448 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0443 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438, \u0432\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043E\u0457 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443. \u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F, \u0449\u043E\u0431 \u0432\u0441\u0435 \u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438 \u0456 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0443\u0432\u0430\u043B\u0438\u0441\u044F \u043D\u0430 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456, \u0430 \u0434\u0430\u043B\u0456 \u043D\u0430\u043A\u0440\u0438\u0442\u0438 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0431\u0430\u043C\u043F\u0435\u0440\u0430 \u0456\u0437 \u0437\u0430\u043F\u043E\u0431\u0456\u0436\u043D\u0438\u043C \u0441\u043A\u043B\u043E\u043C \u0456 \u0437\u0430\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u043D\u0430\u0437\u0430\u0434 6 \u0431\u043E\u043B\u0442\u0456\u0432 \u043D\u0430 \u0432\u0441\u0456 \u0431\u043E\u043A\u0438. \u041A\u043B\u0430\u0432\u0456\u0448\u0456, \u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u0456 \u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0437 \u0441\u0438\u043B\u0456\u043A\u043E\u043D\u0443, \u0437\u0440\u0443\u0447\u043D\u0456 \u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456. \u0412\u043E\u043D\u0438 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u044E\u0442\u044C \u043F\u0456\u0434\u0441\u0442\u0443\u043F \u0434\u043E \u0432\u0441\u0456\u0445 \u043E\u0442\u0432\u043E\u0440\u0456\u0432 \u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0432\u0430\u0448\u043E\u0433\u043E \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430. \u0423 \u043D\u0430\u0431\u043E\u0440\u0456, \u043A\u0440\u0456\u043C \u0441\u0430\u043C\u043E\u0433\u043E \u0431\u0430\u043C\u043F\u0435\u0440\u0430, \u0442\u0430\u043A\u043E\u0436 \u0434\u043E\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0432\u0438\u043A\u0440\u0443\u0442\u043A\u0430 \u0434\u043B\u044F \u0437\u0431\u0456\u0440\u043A\u0438 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0447\u043E\u0445\u043B\u0430 \u043D\u0430 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0456, \u0448\u0435\u0441\u0442\u0438\u0433\u0440\u0430\u043D\u043D\u0438\u043A \u0437\u0440\u0430\u0437\u043A\u0430 \u041C2, 2 \u0433\u0432\u0438\u043D\u0442\u0430 \u043D\u0430 \u0437\u0430\u043F\u0430\u0441, \u0448\u043C\u0430\u0442\u043E\u043A \u0442\u043A\u0430\u043D\u0438\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443 \u0434\u043B\u044F \u0442\u0443\u0440\u0431\u043E\u0442\u0438 \u043F\u0440\u043E \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0441\u043A\u043B\u0456 \u043C\u0430\u0440\u043A\u0438 Gorilla Glass, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0440\u0435\u043C\u0456\u043D\u0435\u0446\u044C, \u044F\u043A\u0438\u0439 \u043E\u0434\u044F\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0443\u043A\u0443 \u0456 \u0437\u0430\u0445\u0438\u0441\u043D\u0435 \u0441\u043A\u043B\u043E. \u041E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456: \u0423\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0435\u043A\u0440\u0430\u043D\u0443 \u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0440\u043E\u0437'\u0454\u043C\u0456\u0432 \u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0437 \u0430\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u043E\u0433\u043E \u0441\u043F\u043B\u0430\u0432\u0443 \u041D\u0430\u0434\u0456\u0439\u043D\u0438\u0439 \u0437\u0430\u0445\u0438\u0441\u0442 \u0432\u0456\u0434 \u0443\u0434\u0430\u0440\u0456\u0432, \u043F\u043E\u0434\u0440\u044F\u043F\u0438\u043D, \u043F\u0438\u043B\u0443 \u0456 \u0432\u043E\u043B\u043E\u0433\u0438 \u0421\u0442\u0438\u043B\u044C\u043D\u0438\u0439 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u0432\u0438\u0433\u043B\u044F\u0434 \u0427\u0438 \u043D\u0435 \u0437\u043D\u0438\u0436\u0443\u0454 \u0447\u0443\u0442\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0435\u043A\u0440\u0430\u043D\u0430",
        video: '//www.youtube.com/embed/y6mqHps5kqY',
        quantity: 1,
    },
];


/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    margin-top: 70px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ОПЛАТА</h2>\n<img width=\"200px\" src=\"https://deshevshe.ua/images/privat.jpg\" alt=\"privatBank\"><img width=\"200px\" src=\"https://deshevshe.ua/images/visa-master-card.jpg\" alt=\"privatBank\">\n<p style=\"margin-top: 15px\">У нашому магазині доступна оплата карткою Visa / MasterCard будь-якого українського банку, використовуючи систему безпечних платежів ПриватБанку Комісія системи - 3%. Остаточна вартість товару відображається автоматично при виборі способу оплати \"За допомогою Visa / MasterCard\".\n  Якщо Ви володар платіжної картки ПриватБанку доступна оплата через систему миттєвих платежів Приват24. Комісія системи - 3%. Остаточна вартість товару відображається автоматично при виборі способу оплати \"За допомогою Приват24\"\n  Оплачене замовлення може отримати тільки власник карти з посвідченням особи.\n  \n   \n  \n  Кредит від ПАТ «Альфа-Банк»\n  \n  В нашому інтернет-магазині, Ви можете оформити розстрочку!\n  Тепер Вам не потрібно звертатись в Банк для того, щоб взяти кредит на товар.\n  Що необхідно зробити:\n  1. Вибрати товар\n  2. Проінформувати працівника магазину про бажання придбати товар у кредит від ПАТ «Альфа-Банк»\n  3. Отримати лист на ел. пошту із ссилкою на заповнення On-line заявки, ОБОВЯЗКОВО!\n  Після заповнення On-line заявки отримати рішення по кредиту!\n  На наступний робочий день з Вами зв’яжеться кур’єр Банку для підписання кредитного договору!\n  \n  Розстрочка на 4 місяці - без переплат!\n  \n  Умови кредитування:\n   Офіційне працевлаштування (обов’язково)\n   Вік від 21 до 70 років\n   Перший внесок - відсутній\n   Сума кредиту від 1 000 - 70 000 грн.\n   Термін кредитування - 8-36 місяців\n   Річна відсоткова ставка - 0,01%\n   Разова комісія - відсутня\n   Страхівка – відсутня\n   Щомісячна комісія складає - з 1 по 4 місяць - 0%; починаючи з 5 місяця – 3,5%\n   Досрокове погашеня без додаткових комісій\n   Виписка по рахунку ( СМС –інформування ) 50 грн./міс.\n  Обов’язково до зустрічі з кур’єром підготувати:\n   Оригінал паспорту та коду</p>"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopingCardWrapper{\n    margin-top: 70px;\n    min-height: 100%;\n    height: 100%;\n  \n}\n#exampleModal{\n    z-index: 10000;\n}\n.emptyShopingCart{\n    font-size: 45px;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 20px;\n    color: dimgrey\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGluZy1jYXJ0L3Nob3BpbmctY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2hvcGluZy1jYXJ0L3Nob3BpbmctY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3BpbmdDYXJkV3JhcHBlcntcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBcbn1cbiNleGFtcGxlTW9kYWx7XG4gICAgei1pbmRleDogMTAwMDA7XG59XG5cbi5lbXB0eVNob3BpbmdDYXJ0e1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogZGltZ3JleVxuICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shopingCardWrapper\">\n<button *ngIf=\"!emptyShopingCart\" type=\"button\" class=\"btn btn-primary\" routerLink=\"/\" style=\"margin-bottom: 15px\">Продовжити покупки</button>\n<table *ngIf=\"!emptyShopingCart\" border=\"1\" class=\"table table-hover table-dark\" style=\"text-align:center\">\n  <thead >\n    <tr>\n      <th>Категорія</th>\n      <th>Назва товару</th>\n      <th>Кількість</th>\n      <th>Ціна</th>\n      <th>Сума</th>\n      <th>Видалити товар</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of items\" >\n      <td>{{item.type}}</td>\n      <td>{{item.name}}</td>\n      <td>\n        <input type=\"number\" min=\"1\" [(ngModel)]=\"item.quantity\" (ngModelChange)=\"getTotal();getChartQuantity()\" style=\"text-align:center; width: 70px\">\n      </td>\n      <td>{{item.price}}</td>\n      <td>{{getTotalItem(item)}}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteItem(item.id)\">Видалити</button>\n      </td>\n    </tr>\n  </tbody>\n  \n </table>\n <div *ngIf=\"emptyShopingCart\" class=\"emptyShopingCart\"> <i class=\"fas fa-shopping-cart\"></i> Кошик порожній</div>\n <h2 *ngIf=\"!emptyShopingCart\">\n   Разом до оплати: {{sum}} <i class=\"fas fa-hryvnia\" style=\"font-size: 25px\"></i>\n </h2>\n\n\n\n\n <button *ngIf=\"!emptyShopingCart\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#exampleModal\">Оформити замовлення</button>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Оформлення замовлення</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Прізвище та і'мя</label>\n            <input type=\"text\" class=\"form-control\" id=\"recipient-name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Мобільний телефон</label>\n            <input type=\"text\" class=\"form-control\" id=\"recipient-phone\">\n          </div>\n                <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Елктронна пошта</label>\n            <input type=\"text\" class=\"form-control\" id=\"recipient-email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Адреса доставки</label>\n            <input type=\"text\" class=\"form-control\" id=\"recipient-adress\">\n          </div>\n          <fieldset class=\"form-group\">\n            <div class=\"row\">\n              <legend class=\"col-form-label col-sm-2 pt-0\">Оплата</legend>\n              <div class=\"col-sm-10\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n                  <label class=\"form-check-label\" for=\"gridRadios1\">\n                Готівкою\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"gridRadios2\">\n                    Платіжною картою\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"option3\" >\n                  <label class=\"form-check-label\" for=\"gridRadios3\">\n                    Кредит\n                  </label>\n                </div>\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputState\">Доставка</label>\n            <select id=\"inputState\" class=\"form-control\">\n              <option selected>Самовивіз</option>\n              <option selected>Нова пошта</option>\n              <option selected>Укрпошта</option>\n              <option selected>Міст експрес</option>\n            </select>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Скасувати замовлення</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Надіслати замовлення</button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.ts ***!
  \********************************************************/
/*! exports provided: ShopingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingCartComponent", function() { return ShopingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card.service */ "./src/app/card.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var ShopingCartComponent = /** @class */ (function () {
    function ShopingCartComponent(cardService, router, sanitizer) {
        this.cardService = cardService;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    ShopingCartComponent.prototype.ngOnInit = function () {
        this.getData();
        this.checkShopingCart();
    };
    ShopingCartComponent.prototype.checkShopingCart = function () {
        var products = JSON.parse(localStorage.getItem('products'));
        if (products.length === 0) {
            this.emptyShopingCart = true;
        }
        else
            (this.emptyShopingCart = false);
    };
    ShopingCartComponent.prototype.getData = function () {
        this.items = JSON.parse(localStorage.getItem('products'));
        this.getTotal();
    };
    ShopingCartComponent.prototype.getTotalItem = function (item) {
        return item.quantity * item.price;
    };
    ShopingCartComponent.prototype.deleteItem = function (id) {
        this.items = this.items.filter(function (x) { return x.id !== id; });
        this.getTotal();
        localStorage.setItem('products', JSON.stringify(this.items));
        this.cardService.changeChartQuantity.next();
        this.checkShopingCart();
    };
    ShopingCartComponent.prototype.getTotal = function () {
        this.sum = this.items.reduce(function (total, el) { return total += el.quantity * el.price; }, 0);
    };
    ShopingCartComponent.prototype.getChartQuantity = function () {
        localStorage.setItem('products', JSON.stringify(this.items));
        this.cardService.changeChartQuantity.next();
    };
    ShopingCartComponent.prototype.ngOnDestroy = function () {
    };
    ShopingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoping-cart',
            template: __webpack_require__(/*! ./shoping-cart.component.html */ "./src/app/shoping-cart/shoping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shoping-cart.component.css */ "./src/app/shoping-cart/shoping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ShopingCartComponent);
    return ShopingCartComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Frontend\Logos\Final\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map