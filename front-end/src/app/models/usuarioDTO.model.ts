export class UsuarioDTO 
{
    nombre: string;
    apellido: string;
    correoElectronico: string;
    fechaDeNacimiento: string;
    numeroDeTelefono: number;
    paisDeResidencia: string;
    contacto: boolean;

    constructor()
    {
        this.nombre = "";
        this.apellido = "";
        this.correoElectronico = "";
        this.fechaDeNacimiento = "";
        this.numeroDeTelefono = 0;
        this.paisDeResidencia = "";
        this.contacto = false; 
    }
}