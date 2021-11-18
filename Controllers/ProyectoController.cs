using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProyectoPWEB.Models;
using Datos;


namespace ProyectoPWEB.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProyectoController : ControllerBase
    {
        private IConfiguration _configuration;

        private readonly ProyectoService proyectoService;

        public ProyectoController(ProyectoContext context )
        {
            proyectoService = new ProyectoService(context);
        }

        
        [HttpPost]
        public ActionResult<Proyecto> Guardar(ProyectoInputModel proyectoInput)
        {
            var proyecto = new Proyecto();
            proyecto.tituloProyecto = proyectoInput.tituloProyecto;
            proyecto.cedulaInvestigadorPrincipal =
                proyectoInput.cedulaInvestigadorPrincipal;
            proyecto.nombreInvestigadorPrincipal =
                proyectoInput.nombreInvestigadorPrincipal;
            proyecto.cedulaInvestigadorSecundario =
                proyectoInput.cedulaInvestigadorSecundario;
            proyecto.nombreInvestigadorSecundario =
                proyectoInput.nombreInvestigadorSecundario;
            proyecto.grupoDeInvestigacion = proyectoInput.grupoDeInvestigacion;
            proyecto.areaProyecto = proyectoInput.areaProyecto;
            proyecto.lineaDeInvestigacion = proyectoInput.lineaDeInvestigacion;
            proyecto.tipoProyecto = proyectoInput.tipoProyecto;
            proyecto.fechaPresentacion = proyectoInput.fechaPresentacion;
            proyecto.linkProyecto = proyectoInput.linkProyecto;
            proyecto.estadoProyecto = proyectoInput.estadoProyecto;
            proyecto.comentariosProyecto = proyectoInput.comentariosProyecto;

            var respuesta = proyectoService.Guardar(proyecto);
            if (respuesta.Error)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(proyecto);
        }

        private Proyecto MapearProyecto(ProyectoViewModel proyectoView)
        {
            var proyecto = new Proyecto();
            proyecto.codigoProyecto = proyectoView.codigoProyecto;
            proyecto.tituloProyecto = proyectoView.tituloProyecto;
            proyecto.cedulaInvestigadorPrincipal =
                proyectoView.cedulaInvestigadorPrincipal;
            proyecto.nombreInvestigadorPrincipal =
                proyectoView.nombreInvestigadorPrincipal;
            proyecto.cedulaInvestigadorSecundario =
                proyectoView.cedulaInvestigadorSecundario;
            proyecto.nombreInvestigadorSecundario =
                proyectoView.nombreInvestigadorSecundario;
            proyecto.grupoDeInvestigacion = proyectoView.grupoDeInvestigacion;
            proyecto.areaProyecto = proyectoView.areaProyecto;
            proyecto.lineaDeInvestigacion = proyectoView.lineaDeInvestigacion;
            proyecto.tipoProyecto = proyectoView.tipoProyecto;
            proyecto.fechaPresentacion = proyectoView.fechaPresentacion;
            proyecto.linkProyecto = proyectoView.linkProyecto;
            proyecto.estadoProyecto = proyectoView.estadoProyecto;
            proyecto.comentariosProyecto = proyectoView.comentariosProyecto;
            return proyecto;
        }

        [HttpGet]
        public IEnumerable<ProyectoViewModel> Gets()
        {
            var personas = proyectoService.ConsultarTodos().Select(p => new ProyectoViewModel(p));
            return personas;
        }
        
    }
}
