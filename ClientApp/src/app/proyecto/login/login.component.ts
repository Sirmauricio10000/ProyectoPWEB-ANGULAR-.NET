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
  abrirHome: boolean = false;
  cerrarLogin: boolean = true;

  ngOnInit() {
  }

  ingresar(){
    if(this.usuario==="estudiante" && this.contra==="estudiante"){
      this.abrirHome = !this.abrirHome;
      this.cerrarLogin = !this.cerrarLogin;
    } else if(this.usuario==="funcionario" && this.contra==="funcionario"){
      this.abrirHome = !this.abrirHome;
      this.cerrarLogin = !this.cerrarLogin;
    }
    
  }

}
