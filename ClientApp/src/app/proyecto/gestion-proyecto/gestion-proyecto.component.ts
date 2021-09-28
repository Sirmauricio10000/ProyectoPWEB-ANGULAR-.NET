import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-gestion-proyecto',
  templateUrl: './gestion-proyecto.component.html',
  styleUrls: ['./gestion-proyecto.component.css']
})
export class GestionProyectoComponent implements OnInit {

  constructor(private personaService:PersonaService) { }

  persona: Persona;
  referenciaEliminar: string;

  ngOnInit() {
    this.persona = new Persona;
  }

  modificar(){
    alert("Se modifico el proyecto " + JSON.stringify(this.persona));
    this.personaService.modificarProyectos(this.persona);
  }

  eliminar(){
    alert("Se elimino el proyecto " + this.referenciaEliminar);
    this.personaService.eliminarProyectos(this.referenciaEliminar);
  }

}
