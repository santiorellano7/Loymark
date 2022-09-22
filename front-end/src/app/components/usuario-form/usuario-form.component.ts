import { IUsuario } from './../../interfaces/IUsuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuario: IUsuario = new Usuario();
  usuarioForm!: FormGroup;
  paisSeleccionado!: number;

  paises = [
    {id: 1, name: 'Antigua y Barbuda', codigo: 'ATG'},
    {id: 2, name: 'Argentina', codigo: 'ARG'},
    {id: 3, name: 'Bahamas', codigo: 'BHS'},
    {id: 4, name: 'Barbados', codigo: 'BRB'},
    {id: 5, name: 'Belice', codigo: 'BLZ'},
    {id: 6, name: 'Bolivia', codigo: 'BOL'},
    {id: 7, name: 'Brasil', codigo: 'BRA'},
    {id: 8, name: 'Chile', codigo: 'CHL'},
    {id: 9, name: 'Colombia', codigo: 'COL'}, 
    {id: 10, name: 'Costa Rica', codigo: 'CRI'}, 
    {id: 11, name: 'Cuba', codigo: 'CUB'},
    {id: 12, name: 'Ecuador', codigo: 'ECU'}, 
    {id: 13, name: 'El Salvador', codigo: 'SLV'}, 
    {id: 14, name: 'Granada', codigo: 'GRD'},
    {id: 15, name: 'Guatemala', codigo: 'GTM'}, 
    {id: 16, name: 'Guyana', codigo: 'GUY'},
    {id: 17, name: 'Haití', codigo: 'HTI'},
    {id: 18, name: 'Honduras', codigo: 'HND'}, 
    {id: 19, name: 'Jamaica', codigo: 'JAM'}, 
    {id: 20, name: 'México', codigo: 'MEX'}, 
    {id: 21, name: 'Nicaragua', codigo: 'NIC'}, 
    {id: 22, name: 'Panamá', codigo: 'PAN'}, 
    {id: 23, name: 'Paraguay', codigo: 'PRY'}, 
    {id: 24, name: 'Perú', codigo: 'PER'}, 
    {id: 25, name: 'República Dominicana', codigo: 'DOM'}, 
    {id: 26, name: 'San Vicente y las Granadinas', codigo: 'VCT'}, 
    {id: 27, name: 'Santa Lucía', codigo: 'LCA'}, 
    {id: 28, name: 'Surinam', codigo: 'SUR'}, 
    {id: 29, name: 'Trinidad y Tobago', codigo: 'TTO'}, 
    {id: 30, name: 'Uruguay', codigo: 'URY'}, 
    {id: 31, name: 'Venezuela', codigo: 'VEN'},
    
  ];

  constructor(private service: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private datePipe: DatePipe) 
  {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params["id"];
      this.service.obtenerUsuarioPorId(id).subscribe((data:IUsuario) => {
        if (data != null)
        {
          this.usuario = data;
          this.usuario.fechaDeNacimiento = this.datePipe.transform(this.usuario.fechaDeNacimiento, 'yyyy-MM-dd')!;
          console.log(this.usuario);
        }
        else
        {
          this.usuario = new Usuario();
        }
      })
    })
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      fechaDeNacimiento: ['', Validators.required],
      numeroDeTelefono: ['', Validators.required],
      paisDeResidencia: ['', Validators.required],
      contacto: ['', Validators.required],
    });
  }

  onGuardar()
  {
    if (this.usuario.id > 0)
    {
      console.log(this.usuario)
      this.service.actualizarUsuario(this.usuario, this.usuario.id).subscribe({
        next: (data) => {alert("Usuario actualizado.")},
        error: (err) => {alert(err.error.title)}
      });
    }
    else
    {
      this.service.crearUsuario(this.usuario).subscribe({
        next: (data) => {alert("Usuario creado.")},
        error: (err) => {alert(err.error.title)}
      });
    }

    this.router.navigate(['usuarioList']);
  }

}
