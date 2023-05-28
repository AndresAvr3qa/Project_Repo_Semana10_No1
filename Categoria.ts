import { Serie } from "./Serie.js"

export class Categoria{
    private nombre:string
    series:Serie[]

    constructor(nombre:string){
        this.nombre = nombre
        this.series = []
    }


    obtenerCategoria(){ return this.nombre}


    /**
     * SETTER METHODS
     */


}