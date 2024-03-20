import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  enviarPedido(pedidoData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/softexpert/conta/dividir', pedidoData);
  }
}
