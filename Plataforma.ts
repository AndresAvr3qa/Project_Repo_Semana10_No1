import { Plan } from "./Plan.js"
import { Serie } from "./Serie"

export class Plataforma{
    private nombre:string
    private webUrl:string
    private plan:Plan[]
    private series:Serie[]
    
    constructor(nombre:string, webUrl:string, serie?:Serie, plan?:Plan){
        this.nombre = nombre
        this.webUrl = webUrl
        if(serie){ this.series = [serie]}
        else{ this.series = []}
        if(plan){ this.plan = [plan] //*Opcional ya que pueden haber 0 o multiples planes
        }else{ this.plan = []}
    }


    /**
    * Get Methods
    */
    obtenerNombre(){ return this.nombre }
    obtenerWebUrl(){ return this.webUrl}
    obtenerSeries(){ return this.series }
    obtenerPlataformas(){ return this}
    

     
    /**
    * Set Methods
    */
    modificarNombre(nombre:string){ this.nombre = nombre}
    modificarWebUrl(webUrl:string){ this.webUrl = webUrl}
    agregarPlan(plan:Plan):void{ this.plan.push(plan)}
    agregarSerie(serie:Serie):void{ this.series.push(serie)}
    
    


}