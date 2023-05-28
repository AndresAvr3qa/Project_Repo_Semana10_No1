export class Plataforma {
    constructor(nombre, webUrl, serie, plan) {
        this.nombre = nombre;
        this.webUrl = webUrl;
        if (serie) {
            this.series = [serie];
        }
        else {
            this.series = [];
        }
        if (plan) {
            this.plan = [plan]; //*Opcional ya que pueden haber 0 o multiples planes
        }
        else {
            this.plan = [];
        }
    }
    /**
    * Get Methods
    */
    obtenerNombre() { return this.nombre; }
    obtenerWebUrl() { return this.webUrl; }
    obtenerSeries() { return this.series; }
    obtenerPlataformas() { return this; }
    /**
    * Set Methods
    */
    modificarNombre(nombre) { this.nombre = nombre; }
    modificarWebUrl(webUrl) { this.webUrl = webUrl; }
    agregarPlan(plan) { this.plan.push(plan); }
    agregarSerie(serie) { this.series.push(serie); }
}
