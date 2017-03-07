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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var CompanyComponent = (function () {
    /*
    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {
            let ID = +params['id']; // (+) converts string 'id' to a number

            if (ID == 0) {
                this.Record = { ID: Data.Companies.length + 1 } as Company
                Data.Companies.push(this.Record);
            }
            else {
                this.Record = Data.Companies.find(x => x.ID == ID);
            }
        });
    }
    */
    function CompanyComponent(route, _http) {
        var _this = this;
        this.route = route;
        this._http = _http;
        route.params.subscribe(function (params) {
            var ID = +params['id']; // (+) converts string 'id' to a number  
            //let Get: any = this._http.get(`api/Company/Find?id=${ID}`);
            var Get = _this._http.get("api/Company/" + ID);
            var Json = Get.map(function (x) { return x.json(); });
            Json.subscribe(function (x) {
                _this.Record = x;
            });
        });
    }
    CompanyComponent.prototype.Save = function () {
        var body = JSON.stringify(this.Record);
        this._http.post('api/Company', body);
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    core_1.Component({
        selector: 'CompanyComponent',
        templateUrl: 'app/Company/Company.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=Company.js.map