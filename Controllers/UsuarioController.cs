using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProyectoPWEB.Models;

namespace ProyectoPWEB.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private IConfiguration _configuration;

        private readonly UsuarioService usuarioService;

        public UsuarioController(ProyectoContext context)
        {
            usuarioService = new UsuarioService(context);
        }

        [HttpPost]
        public ActionResult<Usuario> Guardar(UsuarioInputModel usuarioInput)
        {
            var usuario = MapearUsuario(usuarioInput);
            var respuesta = usuarioService.Guardar(usuario);
            if (respuesta.Error)
            {
                ModelState.AddModelError("Guardar Persona", respuesta.Mensaje);
                var problemDetails =
                    new ValidationProblemDetails(ModelState)
                    { Status = StatusCodes.Status400BadRequest };
                return BadRequest(problemDetails);
            }
            return Ok(usuario);
        }

        private Usuario MapearUsuario(UsuarioInputModel usuarioInput)
        {
            var usuario =
                new Usuario {
                    userName = usuarioInput.userName,
                    userType = usuarioInput.userType,
                    password = usuarioInput.password,
                    persona = usuarioInput.persona,
                };
            return usuario;
        }

        private Usuario MapearUsuarioUpdate(UsuarioUpdateModel usuarioUpdate)
        {
            var usuario =
                new Usuario {
                    userName = usuarioUpdate.userName,
                    userType = usuarioUpdate.userType,
                    password = usuarioUpdate.password,
                    persona = usuarioUpdate.persona,
                };
            return usuario;
        }

        [HttpGet]
        public IEnumerable<UsuarioViewModel> Gets()
        {
            var usuarios = usuarioService.ConsultarTodos().Select(p => new UsuarioViewModel(p));
            return usuarios;
        }

        [HttpPut]
        public ActionResult<string> Put(UsuarioUpdateModel usuarioUpdate)
        {
            Usuario usuario = MapearUsuarioUpdate(usuarioUpdate);
            var response = usuarioService.Actualizar(usuario);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Usuario);
        }
    }
}
