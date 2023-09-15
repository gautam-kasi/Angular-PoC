import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablayout',
  templateUrl: './tablayout.component.html',
  styleUrls: ['./tablayout.component.scss'],
})
export class TablayoutComponent {
  constructor(private router: Router) {}
  isLoginPage(): boolean {
    // Check the current route to determine if it's the login page
    return this.router.url === '/login';
  }
}
