/// <reference path="../models/company.ts" />
import { Component } from '@angular/core';
import { Data } from '../Data';
import { Company } from '../models/company';


@Component({
    selector: 'CompaniesComponent',
    template: `
<h1>Companies</h1>
  <ul>
    <li *ngFor="let hero of GetCompanies()">
      {{ hero.Name }}
    </li>
  </ul>
<h2>Companies</h2>
<table class="table">
	<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Case</th>
	</tr>
    <tbody *ngFor="let hero of GetCompanies()">  		
		<tr>
			<td>{{hero.ID}}</td>
			<td><a name="{{hero.Name}}">{{hero.Name}}</a></td>
			<td></td>
		</tr>
    </tbody>
</table>
`
})
export class CompaniesComponent {
    public GetCompanies(): Array<Company> {
        return Data.Companies;
    }
}
