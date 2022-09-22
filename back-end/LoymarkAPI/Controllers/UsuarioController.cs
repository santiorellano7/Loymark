using AutoMapper;
using LoymarkAPI.DTOs;
using LoymarkAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LoymarkAPI.Controllers
{
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public UsuarioController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet("obtener")]
        public async Task<ActionResult<List<UsuarioModel>>> Get() 
        {
            try
            {
                return await context.Usuarios.ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("obtener/{id:int}")]
        public async Task<ActionResult<UsuarioModel>> Get(int id)
        {
            try
            {
                return await context.Usuarios.FindAsync(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("crear")]
        public async Task<ActionResult> Post(UsuarioDTO usuario) 
        {
            try
            {
                var usuarioNuevo = mapper.Map<UsuarioModel>(usuario);

                context.Add(usuarioNuevo);
                await context.SaveChangesAsync();

                await this.InsertarActividad(usuarioNuevo.Id, "Creación de Usuario.");

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("actualizar/{id:int}")]
        public async Task<ActionResult> Put(UsuarioModel usuario, int id)
        {
            try
            {
                var existe = await context.Usuarios.AnyAsync(a => a.Id == id);

                if (!existe)
                {
                    return NotFound();
                }

                var usuarioModificado = mapper.Map<UsuarioModel>(usuario);
                context.Update(usuarioModificado);
                await context.SaveChangesAsync();

                await this.InsertarActividad(usuarioModificado.Id, "Actualización de Usuario.");

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("eliminar/{id:int}")]
        public async Task<ActionResult> Delete(int id) 
        {
            try
            {
                var existe = await context.Usuarios.AnyAsync(a => a.Id == id);
            
                if (!existe) 
                {
                    return NotFound();
                }
            
                context.Remove(new UsuarioModel { Id = id });
                await context.SaveChangesAsync();

                await this.InsertarActividad(id, "Eliminación de Usuario.");

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private async Task<ActionResult> InsertarActividad(int idUsuario, string actividad)
        {
            var nuevaActividad = new ActividadModel()
            {
                FechaDeCreacion = DateTime.Now,
                IdUsuario = idUsuario,
                Actividad = actividad
            };

            context.Add(nuevaActividad);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}
