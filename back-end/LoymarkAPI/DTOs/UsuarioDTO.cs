using System.ComponentModel.DataAnnotations;

namespace LoymarkAPI.DTOs
{
    public class UsuarioDTO
    {
        public int Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "El nombre no puede estar vacío.")]
        public string Nombre { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "El apellido no puede estar vacío.")]
        public string Apellido { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "El correo electrónico no puede estar vacío.")]
        public string CorreoElectronico { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "La fecha no puede estar vacía.")]
        public DateTime FechaDeNacimiento { get; set; }

        public Int64 NumeroDeTelefono { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "El País no puede estar vacío.")]
        public string PaisDeResidencia { get; set; }

        [Required]
        public bool Contacto { get; set; }
    }
}
