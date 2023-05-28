export class Episodio {
    constructor(nombre, resumen, duracion, serie) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        this.serie = serie;
    }
    /**
    * Get Methods
    */
    obtenerNombre() { return this.nombre; }
    obtenerResume() { return this.resumen; }
    obtenerDuracion() { return this.duracion; }
    /**
     * Set Methods
     */
    modificarNombre(nombre) { this.nombre = nombre; }
    modificarResumen(resumen) { this.resumen = resumen; }
    modificarDuracion(duracion) { this.duracion = duracion; }
}
