import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuxaua-angular-16';
  constructor(private router: Router) {}

  navigateToOther() {
    this.router.navigate(['/principal']);
  }
}
