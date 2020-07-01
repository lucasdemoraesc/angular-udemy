import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private url: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

  constructor(private http: HttpClient) { }

  public getEstados(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
