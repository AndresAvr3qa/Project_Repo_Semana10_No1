import { Plataforma } from "./Plataforma"

export class Plan{
    private nombre: string
    private precio: number
    private plataforma:Plataforma

    constructor(nombre:string, precio:number, plataforma:Plataforma){
        this.nombre = nombre
        this.precio = precio
        this.plataforma = plataforma //Un plan está ligado a una plataforma
        this.plataforma.agregarPlan(this)
    }


    /**
    * Get Methods
    */
    obtenerNombre(){ return this.nombre }
    obtenerPrecio(){ return this.precio }
  
       
    /**
    * Set Methods
    */
    modificarNombre(nombre:string){ return this.nombre = nombre }
    modificarPrecio(precio:number){ return this.precio = precio }

    







}