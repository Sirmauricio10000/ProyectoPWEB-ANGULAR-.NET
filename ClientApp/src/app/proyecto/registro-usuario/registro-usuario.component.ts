import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(private personaService: UsuarioService, private router: Router) { }

  usuario: Usuario;
  ngOnInit() {
    this.usuario = new Usuario;
  }

  registrar() {
    alert("Se registro el proyecto " + JSON.stringify(this.usuario));
    this.personaService.registroUsuarios(this.usuario);
  }

  regresar() {
    this.router.navigate([""]);
  }
}
