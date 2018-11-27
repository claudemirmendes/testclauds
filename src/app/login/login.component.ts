import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.data.token) {
            localStorage.setItem('token_auth',r.data.token );
            this.router.navigateByUrl('/index');
          }
        },
        r => {
          alert(r.error.error);
        });
  }



  ngOnInit() {
  }

}
