import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioDto } from '../core/models/UsuarioDto';
import { RUTAAUTENTICACION } from '../core/models/Constantes';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  respuesta = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }

  public autenticacionUsuario(usuario: UsuarioDto): Observable<UsuarioDto> {
    return this.http.post<UsuarioDto>(environment.api + RUTAAUTENTICACION, usuario, this.respuesta);
  }
}
