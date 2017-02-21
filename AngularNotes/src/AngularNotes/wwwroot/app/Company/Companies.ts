/// <reference path="../models/company.ts" />
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';



import { Data } from '../Data';
import { Company } from '../models/company';




@Component({
	selector: 'CompaniesComponent',
	template: `
<h1>Companies</h1>
<table class="table">
	<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Address</th>
	</tr>
	<tbody *ngFor="let Company of GetCompanies()">  		
		<tr>
			<td>{{Company.ID}}</td>
			<td><a href="Company/{{Company.ID}}">{{Company.Name}}</a></td>
			<td>{{Company.Address}}</td>
		</tr>
	</tbody>
</table>

<a class="btn btn-primary" href="Company/0">Add Company</a>
`
})
@Injectable()
export class CompaniesComponent {
	constructor(private _http: Http) { }

	public GetCompanies(): Company[] {
	   //TODO Get help at mentoship saturdays with using _http and .map

        //this._http.get('api/Company').map(

		return Data.Companies;
	}
}
