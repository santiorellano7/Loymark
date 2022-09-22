import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { IUsuario } from './../../interfaces/IUsuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios : IUsuario[] = [];

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios()
  {
    this.service.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data;
    })
  }

  onEditar(id: number)
  {
    this.router.navigate(['usuarioList', id]);
  }

  onEliminar(id: number)
  {
    this.service.eliminarUsuario(id).subscribe((data) => {});
  }

  onCrear()
  {
    this.router.navigate(['usuarioList', 0]);
  }
}
