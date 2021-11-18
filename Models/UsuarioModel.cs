using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class UsuarioInputModel{
        [Required(ErrorMessage = "La identificacion es requerida"), 
        MaxLength(30, ErrorMessage = "La identificacion puede tener maximo 30 caracteres") ,
        MinLength(5, ErrorMessage = "La identificacion debe tener almenos 5 caracteres")]
        public string identificacionUsuario {get; set;}

        [Required(ErrorMessage = "El tipo de identificacion es requerido")]
        public string tipoIdentificacionUsuario {get; set;}


        [Required(ErrorMessage = "El nombre es requerido"), 
        MaxLength(30, ErrorMessage = "El nombre puede tener maximo 30 caracteres"),
        MinLength(5, ErrorMessage = "El nombre de usuario debe tener almenos 5 caracteres")]
        public string nombreUsuario{get; set;}


        [Required(ErrorMessage = "El correo es requerido"), 
        MaxLength(30, ErrorMessage = "El correo puede tener maximo 30 caracteres"),
        MinLength(5, ErrorMessage = "El correo debe tener almenos 5 caracteres")]
        public string correoUsuario{get; set;}

        [Required(ErrorMessage = "El telefono es requerido"),
        MaxLength(30, ErrorMessage = "El telefono puede tener maximo 30 caracteres"), 
        MinLength(5, ErrorMessage = "El telefono debe tener almenos 5 caracteres")]
        public string telefonoUsuario{get; set;}


        public string tipoDeUsuario{get; set;}


        [Required(ErrorMessage = "La contraseña es requerida"),
        MaxLength(30, ErrorMessage = "La contraseña puede tener maximo 30 caracteres"), 
        MinLength(8, ErrorMessage = "La contraseña debe tener almenos 8 caracteres")]
        public string contraUsuario{get; set;}
    }

    public class UsuarioViewModel:UsuarioInputModel{
        public UsuarioViewModel(Usuario usuario)
        {
            identificacionUsuario = usuario.identificacionUsuario;
            tipoIdentificacionUsuario = usuario.tipoIdentificacionUsuario;
            nombreUsuario = usuario.nombreUsuario;
            correoUsuario = usuario.correoUsuario;
            telefonoUsuario = usuario.telefonoUsuario;
            tipoDeUsuario = usuario.tipoDeUsuario;
            contraUsuario = usuario.contraUsuario;
        }

        public UsuarioViewModel(){

        }
    }

    public class UsuarioUpdateModel: UsuarioInputModel{
    }
    
}