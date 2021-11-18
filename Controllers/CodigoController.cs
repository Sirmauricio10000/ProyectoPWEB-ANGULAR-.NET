using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProyectoPWEB.Models;

namespace ProyectoPWEB.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CodigoController : ControllerBase
    {
    
        private IConfiguration _configuration;

        private readonly CodigoService codigoService;

        public CodigoController(ProyectoContext context )
        {
            codigoService = new CodigoService(context);
        }

        
        [HttpPost]
        public ActionResult<Codigo> Guardar(CodigoInputModel codigoInput)
        {
            var codigo = MapearCodigo(codigoInput);
            var respuesta = codigoService.Guardar(codigo);
            if (respuesta.Error)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(codigo);
        }

        private Codigo MapearCodigo(CodigoInputModel codigoInput)
        {
            var codigo = new Codigo{
                codigoRegistro = codigoInput.codigoRegistro
            };
            return codigo;
        }

        [HttpGet]
        public IEnumerable<CodigoViewModel> Gets()
        {
            var codigos = codigoService.ConsultarTodos().Select(p => new CodigoViewModel(p));
            return codigos;
        }
        
    }
}