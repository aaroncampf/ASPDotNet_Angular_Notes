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
var Data_1 = require("../Data");
var ContactComponent = (function () {
    function ContactComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) {
            var CompanyID = +params['CompanyID'];
            var ContactID = +params['ContactID'];
            var Company = Data_1.Data.Companies.find(function (x) { return x.ID == CompanyID; });
            if (ContactID == 0) {
                _this.Record = { ID: Company.Contacts.length + 1 };
                Company.Contacts.push(_this.Record);
            }
            else {
                _this.Record = Company.Contacts.find(function (x) { return x.ID == ContactID; });
            }
        });
    }
    ContactComponent.prototype.Save = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'ContactComponent',
        templateUrl: 'app/Contact/Contact.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=Contact.js.map