import { ActividadService } from './../../services/actividad/actividad.service';
import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad.model';
import { IActividad } from 'src/app/interfaces/IActividad';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  actividades: IActividad[] = [];

  constructor(private service: ActividadService) { }

  ngOnInit(): void {
    this.obtenerActividades();
  }

  obtenerActividades()
  {
    this.service.obtenerActividades().subscribe((data) => {
      this.actividades = data
    });
  }
}
