import { Serie } from "./Serie.js"

export class Episodio{
    private nombre: string
    private resumen: string
    private duracion: number
    serie: Serie //1 episodio corresponde a 1 serie

    constructor(nombre:string, resumen:string, duracion:number, serie:Serie){
        this.nombre = nombre
        this.resumen = resumen
        this.duracion = duracion
        this.serie = serie
    }


     /**
     * Get Methods
     */

     obtenerNombre(){ return this.nombre }
     obtenerResume(){ return this.resumen }
     obtenerDuracion(){ return this.duracion}

     
     /**
      * Set Methods
      */
 
     modificarNombre(nombre:string){ this.nombre = nombre}
     modificarResumen(resumen:string){ this.resumen = resumen }
     modificarDuracion(duracion:number){ this.duracion = duracion}

 
}