using LoymarkAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace LoymarkAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<UsuarioModel> Usuarios { get; set; }

        public DbSet<ActividadModel> Actividades { get; set; }
    }
}
