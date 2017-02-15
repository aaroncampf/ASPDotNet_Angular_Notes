import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `

<p>Header</p>
<router-outlet></router-outlet>
<p>Footer</p>
`
})
export class AppComponent { }
