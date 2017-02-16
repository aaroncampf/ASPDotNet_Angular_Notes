import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }      from '@angular/router';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';

import { HttpModule }      from '@angular/http';


import { AppComponent }   from './app.component';
import { CompaniesComponent } from './Company/Companies';
import { CompanyComponent } from './Company/Company';
import { ContactComponent } from './Contact/Contact';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: "Companies", component: CompaniesComponent },
            { path: "Company/:id", component: CompanyComponent },
            { path: "Contact/:CompanyID/:ContactID", component: ContactComponent },
            { path: "", component: AppComponent }
        ])
    ],
    declarations: [AppComponent, CompaniesComponent, CompanyComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
