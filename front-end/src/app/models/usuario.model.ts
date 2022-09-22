import { IUsuario } from './../interfaces/IUsuario';

export class Usuario implements IUsuario
{
    id: number;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    fechaDeNacimiento: string;
    numeroDeTelefono: number;
    paisDeResidencia: string;
    contacto: boolean;

    constructor()
    {
        this.id = 0;
        this.nombre = "";
        this.apellido = "";
        this.correoElectronico = "";
        this.fechaDeNacimiento = "";
        this.numeroDeTelefono = 0;
        this.paisDeResidencia = "";
        this.contacto = false; 
    }
}