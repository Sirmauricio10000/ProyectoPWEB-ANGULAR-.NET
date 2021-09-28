import { Injectable } from '@angular/core';
import { Persona } from '../proyecto/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  consultaProyectos(): Persona[] {
    return JSON.parse(localStorage.getItem('proyectos'));
  }

  registroProyectos(persona: Persona) {
    let personas: Persona[] = [];
    if (this.consultaProyectos() != null) {
      personas = this.consultaProyectos();
    }
    personas.push(persona);
    localStorage.setItem('proyectos', JSON.stringify(personas));
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

  modificarProyectos(persona: Persona) {
    let items = JSON.parse(localStorage.getItem('proyectos'));
    items.forEach(function (item, index) {
      if (persona.identificacion === item.identificacion) {
        items.splice(index, 1, persona);
      }
    });
    localStorage.setItem('proyectos', JSON.stringify(items));
  }

  filtroPersona(idFiltro): Persona[] {

    let listaDePersonasFiltrada: Persona[] = [];
    let listaPersona = this.consultaProyectos();

    listaPersona.forEach(function (item) {
      if (idFiltro === item.identificacion) {
        listaDePersonasFiltrada.push(item);
      }
    });
    return listaDePersonasFiltrada;
  }
}
