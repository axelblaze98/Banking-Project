import { Component } from '@angular/core';

@Component({
    selector: 'navbaraccount',
    template: `
    <div class="cardz">
    <div class="boxes">
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="list">
              <a class="nav-link" routerLink="/accountmainpage" routerLinkActive="active">Dashboard</a>
            </li>
              <li class="list">
                <a class="nav-link" routerLink="/userprofile" routerLinkActive="active">User Profile</a>
              </li>
              <li class="list">
                <a class="nav-link" href="#">Transaction History</a>
              </li>
              <li class="list">
                  <a class="nav-link" href="#">Change Password</a>
              </li>
              <li class="list">
                <a class="nav-link" routerLink="/addbeneficiary" routerLinkActive="active">Add Beneficiary</a>
              </li>
              <li class="list">
                  <a class="nav-link" routerLink="/fundtransfer" routerLinkActive="active">Fund Transfer</a>
              </li>
              <li class="list">
              <a routerLink=""><button type="button" class="btn btn-primary">Logout</button>
              </a>
              </li>
            </ul>
        </div>
        </nav>
        </div>
      </div>
  
    `,
    styleUrls: ['./navbaraccount.component.css']
})

export class navBarAccountComponent {}
