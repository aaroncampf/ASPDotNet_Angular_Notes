import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

import { Data } from '../Data';
import { Contact } from '../models/Contact';


@Component({
    selector: 'ContactComponent',
    templateUrl: 'app/Contact/Contact.html'
})
export class ContactComponent {
    public Record: Contact;

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {
            let CompanyID = +params['CompanyID'];
            let ContactID = +params['ContactID'];

            const Company = Data.Companies.find(x => x.ID == CompanyID);

            if (ContactID == 0) {
                this.Record = { ID: Company.Contacts.length + 1 } as Contact
                Company.Contacts.push(this.Record);
            }
            else {
                this.Record = Company.Contacts.find(x => x.ID == ContactID);
            }
        });
    }

    public Save() {

    }
}
