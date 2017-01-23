﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }      from '@angular/router';

import { AppComponent }   from './app.component';
import { CompaniesComponent } from './Company/Companies';
import { CompanyComponent } from './Company/Company';   





@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: "Companies", component: CompaniesComponent },
            { path: "Company", component: CompanyComponent },
            { path: "", component: AppComponent }
        ])
    ],
    declarations: [AppComponent, CompaniesComponent, CompanyComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }