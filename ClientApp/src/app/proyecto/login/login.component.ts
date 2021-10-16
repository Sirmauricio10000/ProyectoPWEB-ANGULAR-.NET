import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  usuario: string = "usuario";
  contra: string = "contra";
  abrirHomeEstudiante: boolean = false;
  abrirHomeFuncionario: boolean = false;
  cerrarLogin: boolean = true;

  ngOnInit() {
  }

  ingresar(){
    if(this.usuario==="estudiante" && this.contra==="estudiante"){
      this.abrirHomeEstudiante = !this.abrirHomeEstudiante;
      this.cerrarLogin = !this.cerrarLogin;
    } else if(this.usuario==="funcionario" && this.contra==="funcionario"){
      this.abrirHomeFuncionario = !this.abrirHomeFuncionario;
      this.cerrarLogin = !this.cerrarLogin;
    } else{
      alert("Usuario o contraseña incorrecto");
    }
    
  }

}
