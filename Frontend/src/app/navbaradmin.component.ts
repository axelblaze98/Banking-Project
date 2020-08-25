import { Component } from '@angular/core';

@Component({
    selector: 'navbaradmin',
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
              <a class="nav-link" routerLink="/adminlogin">Login</a>
            </li>
            <li class="list">
              <a class="nav-link" routerLink="/adminregister">Register</a>
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
    styleUrls: ['./navbaradmin.component.css']
})

export class navBarAdminComponent {}
