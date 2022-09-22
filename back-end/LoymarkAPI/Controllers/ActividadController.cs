using LoymarkAPI.DTOs;
using LoymarkAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace LoymarkAPI.Controllers
{
    [ApiController]
    [Route("api/actividad")]
    public class ActividadController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public ActividadController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet("obtener")]
        public async Task<ActionResult<List<ActividadDTO>>> Get()
        {
            var consultaJoin = from actividad in context.Actividades
                         join usuario in context.Usuarios on actividad.IdUsuario equals usuario.Id
                         select new { fechaDeCreacion = actividad.FechaDeCreacion, nombreUsuario = usuario.Nombre + " " + usuario.Apellido, actividad = actividad.Actividad };

            var consultaJoinList = consultaJoin.ToList().OrderByDescending(x => x.fechaDeCreacion);

            List<ActividadDTO> listaDeActividadesPorUsuario = new List<ActividadDTO>();

            foreach (var r in consultaJoinList)
            {
                ActividadDTO actividadPorUsuario = new ActividadDTO();
                actividadPorUsuario.FechaDeCreacion = r.fechaDeCreacion;
                actividadPorUsuario.NombreUsuario = r.nombreUsuario;
                actividadPorUsuario.Actividad = r.actividad;
                listaDeActividadesPorUsuario.Add(actividadPorUsuario);
            }

            return listaDeActividadesPorUsuario;
        }
    }
}
