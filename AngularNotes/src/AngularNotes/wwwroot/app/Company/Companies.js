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
var Data_1 = require('../Data');
var CompaniesComponent = (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.GetCompanies = function () {
        return Data_1.Data.Companies;
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            selector: 'CompaniesComponent',
            template: "\n<h1>Companies</h1>\n  <ul>\n    <li *ngFor=\"let hero of GetCompanies()\">\n      {{ hero.Name }}\n    </li>\n  </ul>\n\t<h2>Companies</h2>\n\t<table class=\"table\">\n\t\t<tr>\n\t\t\t<th>ID</th>\n\t\t\t<th>Name</th>\n\t\t\t<th>Case</th>\n\t\t</tr>\n        <tbody *ngFor=\"let hero of GetCompanies()\">  \t\t\n\t\t<tr>\n\t\t\t<td>{{hero.ID}}</td>\n\t\t\t<td><a name=\"{{hero.Name}}\">{{hero.Name}}</a></td>\n\t\t\t<td></td>\n\t\t</tr>\n    </tbody>\n\t</table>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=Companies.js.map