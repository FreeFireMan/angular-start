import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>hello</h1>
    <app-user *ngFor="let u of users" [user]="u"></app-user>
  `,
  // styleUrls: ['./app.component.css']
  styles: [
    `h1 { background: chocolate}`,
      `div {
            margin-bottom: 10px;
            border: 1px solid brown;
            }`,
  ]
})

export class AppComponent {
  users: any[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe(result => this.users = result);
  }
}
