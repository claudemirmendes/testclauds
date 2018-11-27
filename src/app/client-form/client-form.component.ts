import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private api: ApiService) { }

  submit(){
   const token_auth = localStorage.getItem('token_auth');
   this.api.registerClient(
      this.email,
      this.nome,
      token_auth
    )
      .subscribe(
        response => {
          if (response.id) {
            alert('Cliente Salvo com sucesso')
            window.location.reload()
          }
        },
        response => {
          alert(response.error.error);
        });
 };

 ngOnInit() {
  }
}
