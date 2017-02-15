"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n\t<div class=\"container\">\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t</button>\n\n\t\t\t<a class=\"navbar-brand\" href=\"/\">Home</a>\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a href=\"Companies\">Companies</a></li>\n\t\t\t\t<li><a href=\"AboutUs\">Contact Us</a></li>\n\t\t\t\t<li>\n\t\t\t\t\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<!--<div class=\"pull-right\">\n\t\t\t<div class=\"ui-widget\">\n\t\t\t\t<label for=\"SearchItems\" style=\"color:white\">Search Items: </label>\n\t\t\t\t<input id=\"SearchItems\" size=\"50\">\n\t\t\t</div>\n\t\t</div>-->\n\t</div>\n</nav>\n<br /> <br /> \n<router-outlet></router-outlet>\n<p>Footer</p>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map