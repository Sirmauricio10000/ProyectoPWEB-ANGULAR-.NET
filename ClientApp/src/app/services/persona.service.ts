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
}
