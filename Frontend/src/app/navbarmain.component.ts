import { Component, Input } from '@angular/core';
@Component({
    selector: 'navbarmain',
    template: `
    <div class="cardz">
    <nav class="navbar navbar-expand-lg bg-warning">
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="list">
            <a class="nav-link" href="">Home</a>
          </li>
            <li class="list">
              <a class="nav-link" routerLink="/faqmain">FAQ's</a>
            </li>
            <li class="list">
              <a class="nav-link" routerLink="/aboutus">About Us</a>
            </li>
            <li class="list">
                <a class="nav-link" href="https://www.lntinfotech.com">Our Partners</a>
            </li>
            <li class="list">
              <a class="nav-link" routerLink="/contactus">Contact Us</a>
            </li>
          </ul>
      </div>
      </nav>
      </div>
    `,
    styleUrls: ['./navbarmain.component.css']
  }) 
  export class navBarMainComponent {}