import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyecto.component.html',
  styleUrls: ['./registro-proyecto.component.css']
})
export class RegistroProyectoComponent implements OnInit {

  constructor(private proyectoService: ProyectoService) { }

  proyecto: Proyecto;
  ngOnInit() {
    this.proyecto = new Proyecto;
  }

  registrar() {
    alert("Se registro el proyecto " + JSON.stringify(this.proyecto));
    this.proyectoService.post(this.proyecto);
  }
}
