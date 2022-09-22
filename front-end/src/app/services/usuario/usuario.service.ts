import { UsuarioDTO } from '../../models/usuarioDTO.model';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { IUsuario } from 'src/app/interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.API_URL + "/usuario"
  selectedProduct: Usuario = new Usuario();

  constructor(private http: HttpClient) { }

  obtenerUsuarios() : Observable<IUsuario[]>
  {
    return this.http.get<IUsuario[]>(this.url + "/obtener");
  }

  obtenerUsuarioPorId(id: number) : Observable<IUsuario>
  {
    return this.http.get<IUsuario>(this.url + "/obtener/" + id);
  }

  crearUsuario(nuevoUsuario: UsuarioDTO) : Observable<any>
  {
    return this.http.post<UsuarioDTO>(this.url + "/crear", nuevoUsuario);
  }

  actualizarUsuario(usuarioActualizado: IUsuario, id: number)
  {
    return this.http.put<UsuarioDTO>(this.url + "/actualizar/" + id, usuarioActualizado);
  }

  eliminarUsuario(id: number)
  {
    return this.http.delete(this.url + "/eliminar/" + id.toString());
  }
}
