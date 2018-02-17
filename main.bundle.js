webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n.titlebar{\n    text-align: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n}\n\n.button_text{\n    color:white;\n}\n\n.header_text{\n    font-size: 30px;\n}\n\n.filler{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.icon{\n    height: 16px;\n}\n\n.header-icon{\n    height: 40px;\n}\n\n.banner{\n    background-image: url(" + __webpack_require__("../../../../../src/assets/me.jpg") + ");\n    background-repeat: no-repeat;\n    background-position: 0in;\n    background-size: 100%;\n    background-attachment: scroll;\n    min-height: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <mat-toolbar class=\"titlebar\" color=\"primary\">\n    <button mat-button class=\"button-img\" color=\"primary\">\n      <img class=\"header-icon\" src=\"assets/TanmayWadhwaLOGO.png\">\n      <span class=\"button_text header_text\">\n       Tanmay Wadhwa\n      </span>\n    </button>\n    <span class=\"filler\"></span>\n    <a href=\"http://www.github.com/tanmaywadhwa\">\n    <button class=\"button-img\" mat-raised-button color=\"primary\">\n        <img class=\"icon\" src=\"assets/github-circle-white-transparent.svg\">\n        <span class=\"button_text\">\n          GitHub\n        </span>\n    </button>\n    </a>\n  </mat-toolbar>\n  <mat-card class=\"banner\"></mat-card>\n  <br>\n  \n  <body-component></body-component>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.home = 'Tanmay Wadhwa';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_blog_card_blog_card__ = __webpack_require__("../../../../../src/app/shared/blog_card/blog_card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__body_body_component__ = __webpack_require__("../../../../../src/app/body/body_component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_publication_card_publication_card__ = __webpack_require__("../../../../../src/app/shared/publication_card/publication_card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_publications_service__ = __webpack_require__("../../../../../src/app/services/publications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/shared/hero-detail/hero-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_blog_card_blog_card__["a" /* BlogCard */],
                __WEBPACK_IMPORTED_MODULE_7__body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_publication_card_publication_card__["a" /* PublicationCard */],
                __WEBPACK_IMPORTED_MODULE_11__shared_hero_detail_hero_detail_component__["a" /* HeroDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatTabsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_blog_service__["a" /* BlogService */],
                __WEBPACK_IMPORTED_MODULE_10__services_publications_service__["a" /* PublicationsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/body/body_component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    margin:0 4%;\n    /* padding:0 23px; */\n    max-width: 1000px;\n    min-width: 450px;\n    margin: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body_component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div>\n    <mat-tab-group  mat-stretch-tabs>\n        <mat-tab label=\"Blog\" >\n            <blog-card *ngFor=\"let blog of blogs\"\n            [blog] = \"blog\">\n            </blog-card>\n        </mat-tab>\n        <mat-tab label=\"Publications\">\n            <publication-card *ngFor=\"let publication of publications\" \n            [publication] = \"publication\">\n            </publication-card>\n        </mat-tab>\n        <mat-tab label=\"About Me\"></mat-tab>\n    </mat-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/body/body_component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_publications_service__ = __webpack_require__("../../../../../src/app/services/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyComponent = /** @class */ (function () {
    function BodyComponent(blogService, publicationService) {
        this.blogService = blogService;
        this.publicationService = publicationService;
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.getBlogs();
        this.getPublications();
    };
    BodyComponent.prototype.getBlogs = function () {
        var _this = this;
        this.blogService.getBlogs().subscribe(function (blogs) { return _this.blogs = blogs; });
        ;
    };
    BodyComponent.prototype.getPublications = function () {
        var _this = this;
        this.publicationService.getPublications().subscribe(function (publications) { return _this.publications = publications; });
        ;
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'body-component',
            template: __webpack_require__("../../../../../src/app/body/body_component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/body_component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__services_publications_service__["a" /* PublicationsService */]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/blog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blog; });
var Blog = /** @class */ (function () {
    function Blog() {
    }
    return Blog;
}());



/***/ }),

/***/ "../../../../../src/app/models/publication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Publication; });
var Publication = /** @class */ (function () {
    function Publication() {
    }
    return Publication;
}());



/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_blogs__ = __webpack_require__("../../../../../src/data/blogs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = /** @class */ (function () {
    function BlogService() {
    }
    BlogService.prototype.getBlogs = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__data_blogs__["a" /* BLOGS */]);
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/services/publications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_publications__ = __webpack_require__("../../../../../src/data/publications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationsService = /** @class */ (function () {
    function PublicationsService() {
    }
    PublicationsService.prototype.getPublications = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__data_publications__["a" /* PUBLICATIONS */]);
    };
    PublicationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PublicationsService);
    return PublicationsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/blog_card/blog_card.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filler{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\nmat-card{\n    margin:0 2% 1.5% 2%;\n    border-radius: 8px;\n}\n\nbutton{\n    background-color: #f5f5f5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/blog_card/blog_card.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<mat-card class=\"mat-elevation-z8\">\n    <mat-toolbar>\n        <span>{{blog.title}}</span>\n    </mat-toolbar>\n    <mat-card-content>\n        <p>{{blog.body}}</p>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n            <span class=\"filler\"></span>\n            <button mat-raised-button>Read More</button>\n    </mat-card-actions>\n    \n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/shared/blog_card/blog_card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_blog__ = __webpack_require__("../../../../../src/app/models/blog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogCard = /** @class */ (function () {
    function BlogCard() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_blog__["a" /* Blog */])
    ], BlogCard.prototype, "blog", void 0);
    BlogCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'blog-card',
            template: __webpack_require__("../../../../../src/app/shared/blog_card/blog_card.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/blog_card/blog_card.css")]
        })
    ], BlogCard);
    return BlogCard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  hero-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__("../../../../../src/app/shared/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/publication_card/publication_card.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filler{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\nmat-card{\n    margin:0 2% 1.5% 2%;\n    border-radius: 8px;\n}\n\nbutton{\n    background-color: #f5f5f5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/publication_card/publication_card.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<mat-card class=\"mat-elevation-z8\">\n    <mat-toolbar>\n        <span>{{publication.title}}</span>\n    </mat-toolbar>\n    <mat-card-content>\n        <p>{{publication.body}}</p>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n            <span class=\"filler\"></span>\n            <button mat-raised-button>Read More</button>\n    </mat-card-actions>\n    \n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/shared/publication_card/publication_card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_publication__ = __webpack_require__("../../../../../src/app/models/publication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationCard = /** @class */ (function () {
    function PublicationCard() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_publication__["a" /* Publication */])
    ], PublicationCard.prototype, "publication", void 0);
    PublicationCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'publication-card',
            template: __webpack_require__("../../../../../src/app/shared/publication_card/publication_card.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/publication_card/publication_card.css")]
        })
    ], PublicationCard);
    return PublicationCard;
}());



/***/ }),

/***/ "../../../../../src/assets/me.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "me.c19b95b7c4fce0375bba.jpg";

/***/ }),

/***/ "../../../../../src/data/blogs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOGS; });
var BLOGS = [
    { title: 'Test', body: 'Lorem Ipsum' },
    { title: 'Test', body: 'Lorem Ipsum' },
    { title: 'Test', body: 'Lorem Ipsum' },
];


/***/ }),

/***/ "../../../../../src/data/publications.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUBLICATIONS; });
var PUBLICATIONS = [
    { title: 'First', body: 'Publication 1' },
    { title: 'Second', body: 'Publication 2' },
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map