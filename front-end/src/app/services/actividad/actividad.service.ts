import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IActividad } from 'src/app/interfaces/IActividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private url: string = environment.API_URL + "/actividad"
  
  constructor(private http: HttpClient) { }

  obtenerActividades() : Observable<IActividad[]>
  {
    return this.http.get<IActividad[]>(this.url + "/obtener");
  }
}
