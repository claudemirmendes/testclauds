import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'
import {ClientResultModel} from './model/ClientResultModel'
import {ClientsListResultModel} from './model/ClientsListResultModel'
import {ClientDeleteResultModel} from './model/ClientDeleteResultModel'


@Injectable({
  providedIn: 'root'
})



export class ApiService {


  constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://teste.meuatendimento.com.br/ajax-publico/login', {
      email: email,
      senha: password
    });
  }

  registerClient(nome: string, email: string, token: string): Observable<ClientResultModel>{

    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': token
     })
   };
    return this.http.post<ClientResultModel>('https://teste.meuatendimento.com.br/api-cliente/cliente-salvar', {
      nome: nome,
      email: email
    },httpOptions);
  }

   getClients(token: string): Observable<ClientsListResultModel>{

    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': token
     })
   };
    return this.http.get<ClientsListResultModel>('https://api.meuatendimento.com.br/api-cliente/listar-por-data-criacao?data=2017-11-21&dataFim=2018-11-21&first=0&last=10',httpOptions);
  };


   deleteClient(id: integer, token: string): Observable<ClientDeleteResultModel>{

    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': token
     })
   };
    return this.http.post<ClientDeleteResultModel>('https://teste.meuatendimento.com.br/api-cliente/cliente-salvar',{id: id, deletado: true},httpOptions);
  };
  
}
