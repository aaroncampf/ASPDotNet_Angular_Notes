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
/// <reference path="../models/company.ts" />
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var core_2 = require('@angular/core');
var Data_1 = require('../Data');
var CompaniesComponent = (function () {
    function CompaniesComponent(_http) {
        this._http = _http;
    }
    CompaniesComponent.prototype.GetCompanies = function () {
        //TODO Get help at mentoship saturdays with using _http and .map
        //this._http.get('api/Company').map(
        return Data_1.Data.Companies;
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            selector: 'CompaniesComponent',
            template: "\n<h1>Companies</h1>\n<table class=\"table\">\n\t<tr>\n\t\t<th>ID</th>\n\t\t<th>Name</th>\n\t\t<th>Address</th>\n\t</tr>\n\t<tbody *ngFor=\"let Company of GetCompanies()\">  \t\t\n\t\t<tr>\n\t\t\t<td>{{Company.ID}}</td>\n\t\t\t<td><a href=\"Company/{{Company.ID}}\">{{Company.Name}}</a></td>\n\t\t\t<td>{{Company.Address}}</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<a class=\"btn btn-primary\" href=\"Company/0\">Add Company</a>\n"
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=Companies.js.map