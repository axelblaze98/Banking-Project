import { Component } from '@angular/core';

@Component({
    selector: 'navbarlogin',
    template: `
    <div class="cardz">
    <div class="boxes">
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="list">
              <a class="nav-link" href="#">Home</a>
            </li>
              <li class="list">
                <a class="nav-link" routerLink="/login">Login</a>
              </li>
              <li class="list">
                <a class="nav-link" routerLink="/openaccount">Open New Account</a>
              </li>
              <li class="list">
                  <a class="nav-link" routerLink="/register">Net Banking Registration</a>
              </li>
              <li class="list">
                <a class="nav-link" routerLink="/trackapp">Track Application Status</a>
              </li>
              <li class="list">
                  <a class="nav-link" routerLink="/contactus">Need Help?</a>
              </li>
            </ul>
        </div>
        </nav>
        </div>
      </div>
    `,
    styleUrls: ['./navbarlogin.component.css']

})

export class navBarLoginComponent {}