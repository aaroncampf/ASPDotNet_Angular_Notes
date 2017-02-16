import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

import { Data } from '../Data';
import { Company } from '../models/company';


@Component({
    selector: 'CompanyComponent',
    templateUrl: 'app/Company/Company.html'
})
export class CompanyComponent {
    public Record: Company;

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

    public Save() {

    }
}
