import { Injectable } from '@angular/core';
import { Usuario } from '../proyecto/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  consultaUsuarios(): Usuario[] {
    return JSON.parse(localStorage.getItem('usuarios'));
  }
  
  registroUsuarios(usuario: Usuario) {
    let usuarios: Usuario[] = [];
    if (this.consultaUsuarios() != null) {
      usuarios = this.consultaUsuarios();
    }
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
