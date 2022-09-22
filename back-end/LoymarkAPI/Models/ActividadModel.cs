using System.ComponentModel.DataAnnotations;

namespace LoymarkAPI.Models
{
    public class ActividadModel
    {
        public int Id { get; set; }

        [Required]
        public DateTime FechaDeCreacion { get; set; }

        [Required]
        public int IdUsuario { get; set; }

        [Required]
        public string Actividad { get; set; }
    }
}
