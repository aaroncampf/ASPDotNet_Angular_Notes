import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Http, Response } from '@angular/http';

//import { Data } from '../Data';
import { Company } from '../models/company';


@Component({
    selector: 'CompanyComponent',
    templateUrl: 'app/Company/Company.html'
})
export class CompanyComponent {
    public Record: Company;

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

    constructor(private route: ActivatedRoute, private _http: Http) {
        route.params.subscribe(params => {
            let ID = +params['id']; // (+) converts string 'id' to a number  

            let Get: any = this._http.get(`api/Company/${ID}`);
            let Json: any = Get.map(x => x.json());
            Json.subscribe(x => {
                this.Record = x;
            });
        });
    }
    public Save() {
        let body = JSON.stringify(this.Record);
        this._http.post('api/Company', body);
    }
}
