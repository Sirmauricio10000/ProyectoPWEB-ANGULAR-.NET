using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class ProyectoInputModel
    {
        public string tituloProyecto {get; set;}
        public string cedulaInvestigadorPrincipal {get; set;}
        public string nombreInvestigadorPrincipal {get; set;}
        public string cedulaInvestigadorSecundario {get; set;}
        public string nombreInvestigadorSecundario {get; set;}
        public string grupoDeInvestigacion {get; set;}
        public string areaProyecto {get; set;}
        public string lineaDeInvestigacion {get; set;}
        public string tipoProyecto {get; set;}
        public string fechaPresentacion {get; set;}
        public string linkProyecto {get; set;}
        public string estadoProyecto {get; set;}
        public string comentariosProyecto {get; set;}
    }

        public class ProyectoViewModel:ProyectoInputModel
    {
        public int codigoProyecto {get; set;}

        public ProyectoViewModel(Proyecto proyecto)
        {
            codigoProyecto = proyecto.codigoProyecto;
            tituloProyecto = proyecto.tituloProyecto;
            cedulaInvestigadorPrincipal = proyecto.cedulaInvestigadorPrincipal;
            nombreInvestigadorPrincipal = proyecto.nombreInvestigadorPrincipal;
            cedulaInvestigadorSecundario = proyecto.cedulaInvestigadorSecundario;
            nombreInvestigadorSecundario = proyecto.nombreInvestigadorSecundario;
            grupoDeInvestigacion = proyecto.grupoDeInvestigacion;
            areaProyecto = proyecto.areaProyecto;
            lineaDeInvestigacion = proyecto.lineaDeInvestigacion;
            tipoProyecto = proyecto.tipoProyecto;
            fechaPresentacion = proyecto.fechaPresentacion;
            linkProyecto = proyecto.linkProyecto;
            estadoProyecto = proyecto.estadoProyecto;
            comentariosProyecto = proyecto.comentariosProyecto;
        }
    }

    
}