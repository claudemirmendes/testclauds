import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients_list: Array<any>;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
   const token_auth = localStorage.getItem('token_auth');
   this.api.getClients(
      token_auth
    )
      .subscribe(
        response => {
         this.clients_list = response
        },
        response => {
          alert(response.error.error);
        });
   };

   delete(client: client){
     const token_auth = localStorage.getItem('token_auth');
     this.api.deleteClient(
        client.id,
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
 }
 
}
