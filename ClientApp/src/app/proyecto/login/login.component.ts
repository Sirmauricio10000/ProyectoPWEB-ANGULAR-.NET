import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  usuario: string;
  contra: string;
  usuarios: Usuario[];
  abrirHomeEstudiante: boolean = false;
  abrirHomeFuncionario: boolean = false;
  cerrarLogin: boolean = true;
  existe: boolean = false;

  ngOnInit() {
  }

  ingresar(){
    this.usuarioService.get().subscribe(result => {
      this.usuarios = result;
    })
    if (this.usuarios.length == 0) alert("Error: No hay usuarios Registrados");
    else{
      this.usuarios.forEach(key => {
        if(key.identificacionUsuario==this.usuario && key.contraUsuario==this.contra && key.tipoDeUsuario=="estudiante")
        {
          this.abrirHomeEstudiante = !this.abrirHomeEstudiante;
          this.cerrarLogin = !this.cerrarLogin;
          alert("Bienvenido " + key.nombreUsuario.toUpperCase()); this.existe = true;
        } else if (key.identificacionUsuario==this.usuario && key.contraUsuario==this.contra && key.tipoDeUsuario=="administrador"){
          this.abrirHomeFuncionario = !this.abrirHomeFuncionario;
          this.cerrarLogin = !this.cerrarLogin;
          alert("Bienvenido " + key.nombreUsuario.toUpperCase()); this.existe = true;
        }
      });
    }

    if (this.existe === false) alert("Usuario o Contraseña Incorrecto")
  }
}
