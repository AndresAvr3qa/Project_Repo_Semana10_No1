import { Serie } from "./Serie.js"

export class Persona{
    private nombre:string
    private foto:string
    private descripcion: string
    private serie:Serie[]

    constructor(nombre:string, foto:string, descripcion:string, serie?:Serie){
        this.nombre = nombre
        this.foto = foto
        this.descripcion = descripcion
        if(serie){this.serie = [serie]}
        else{this.serie =[]}
    }



    /**
     * Get Methods
     */

    obtenerNombre(){ return this.nombre }

    obtenerFoto(){ return this.foto }

    obtenerDescripcion(){ return this.descripcion}


    /**
     * Set Methods
     */

    modificarNombre(nombre:string){ this.nombre = nombre}
    modificarFoto(foto:string){this.foto = foto}
    modificarDescripcionImg(descripcion:string){this.descripcion = descripcion }


}