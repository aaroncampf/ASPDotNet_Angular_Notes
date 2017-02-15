import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->

		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
			</button>

			<a class="navbar-brand" href="/">Home</a>
			<ul class="nav navbar-nav">
				<li><a href="Companies">Companies</a></li>
				<li><a href="AboutUs">Contact Us</a></li>
				<li>
				
				</li>
			</ul>
		</div>
		<!--<div class="pull-right">
			<div class="ui-widget">
				<label for="SearchItems" style="color:white">Search Items: </label>
				<input id="SearchItems" size="50">
			</div>
		</div>-->
	</div>
</nav>
<br /> <br /> 
<router-outlet></router-outlet>
<p>Footer</p>
`
})
export class AppComponent { }
