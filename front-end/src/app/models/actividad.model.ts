import { IActividad } from './../interfaces/IActividad';

export class Actividad implements IActividad
{
    fechaDeCreacion: Date;
    nombreUsuario: string;
    actividad: string;
    
    constructor()
    {
        this.fechaDeCreacion = new Date();
        this.nombreUsuario = "";
        this.actividad = ""; 
    }
}