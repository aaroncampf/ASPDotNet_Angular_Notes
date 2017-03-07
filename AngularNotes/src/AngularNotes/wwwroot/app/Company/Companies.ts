/// <reference path="../models/company.ts" />
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';



import { Data } from '../Data';
import { Company } from '../models/company';

import 'rxjs/Rx';



@Component({
	selector: 'CompaniesComponent',
	template: `
<h1>Companies</h1>
<table class="table">
	<thead>
		<th>ID</th>
		<th>Name</th>
		<th>Address</th>
	</thead>
	<tbody>  		
		<tr *ngFor="let Company of Companies">
			<td>{{Company.id}}</td>
			<td><a href="Company/{{Company.id}}">{{Company.name}}</a></td>
			<td>{{Company.address}}</td>
		</tr>
	</tbody>
</table>

<a class="btn btn-primary" href="Company/-1">Add Company</a>
`
})
@Injectable()
export class CompaniesComponent implements OnInit {
	public Companies: Company[];

	constructor(private _http: Http) { }

	ngOnInit() {
		let Get: any = this._http.get('api/Company');
		let Json: any = Get.map(x => x.json());
		Json.subscribe(x => {
			this.Companies = x;
		});
	}
}
 