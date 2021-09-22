import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyecto.component.html',
  styleUrls: ['./registro-proyecto.component.css']
})
export class RegistroProyectoComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  persona: Persona;
  ngOnInit() {
    this.persona = new Persona;
  }

  registrar() {
    alert("Se registro el proyecto " + JSON.stringify(this.persona));
    this.personaService.registroProyectos(this.persona);
  }
}
