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
var router_1 = require('@angular/router');
var Data_1 = require('../Data');
var CompanyComponent = (function () {
    function CompanyComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) {
            var ID = +params['id']; // (+) converts string 'id' to a number   
            _this.Record = Data_1.Data.Companies.find(function (x) { return x.ID == ID; });
        });
    }
    CompanyComponent.prototype.Save = function () {
    };
    CompanyComponent = __decorate([
        core_1.Component({
            selector: 'CompanyComponent',
            templateUrl: 'app/Company/Company.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], CompanyComponent);
    return CompanyComponent;
}());
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=Company.js.map