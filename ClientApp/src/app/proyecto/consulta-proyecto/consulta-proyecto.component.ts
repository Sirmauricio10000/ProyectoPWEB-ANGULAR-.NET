import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-consulta-proyecto',
  templateUrl: './consulta-proyecto.component.html',
  styleUrls: ['./consulta-proyecto.component.css']
})
export class ConsultaProyectoComponent implements OnInit {

  constructor(private personaService:PersonaService) { }

  personas:Persona[];
  identificacionFiltro:string;
  
  ngOnInit() {
    this.personas = this.personaService.consultaProyectos();
  }

  filtroPersona(){
    this.personas = this.personaService.filtroPersona(this.identificacionFiltro);
  }
}
