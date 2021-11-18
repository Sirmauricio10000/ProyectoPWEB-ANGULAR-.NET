using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace ProyectoPWEB.Models
{
    public class CodigoInputModel
    {
        public string codigoRegistro {get;set;}
    }
        public class CodigoViewModel:CodigoInputModel
    {

        public int idCodigo {get;set;}
        public CodigoViewModel(Codigo codigo)
        {
            idCodigo = codigo.idCodigo;
            codigoRegistro = codigo.codigoRegistro;
        }
    }
}