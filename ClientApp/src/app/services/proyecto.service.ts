import { Injectable } from '@angular/core';
import { Proyecto } from '../proyecto/models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor() { }

  consultaProyectos(): Proyecto[] {
    return JSON.parse(localStorage.getItem('proyectos'));
  }

  registroProyectos(proyecto: Proyecto) {
    let proyectos: Proyecto[] = [];
    if (this.consultaProyectos() != null) {
      proyectos = this.consultaProyectos();
    }
    proyectos.push(proyecto);
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
  }

  eliminarProyectos(identificacion) {
    let items = JSON.parse(localStorage.getItem('proyectos'));
    items.forEach(function (item, index) {
      if (identificacion === item.identificacion) {
        items.splice(index, 1);
      }
    });
    localStorage.setItem('proyectos', JSON.stringify(items));
  }

  modificarProyectos(proyecto: Proyecto) {
    let items = JSON.parse(localStorage.getItem('proyectos'));
    items.forEach(function (item, index) {
      if (proyecto.identificacion === item.identificacion) {
        items.splice(index, 1, proyecto);
      }
    });
    localStorage.setItem('proyectos', JSON.stringify(items));
  }

  filtroPersona(idFiltro): Proyecto[] {

    let listaDePersonasFiltrada: Proyecto[] = [];
    let listaPersona = this.consultaProyectos();

    listaPersona.forEach(function (item) {
      if (idFiltro === item.identificacion) {
        listaDePersonasFiltrada.push(item);
      }
    });
    return listaDePersonasFiltrada;
  }
}
