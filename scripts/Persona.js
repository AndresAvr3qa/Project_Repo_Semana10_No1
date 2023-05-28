export class Persona {
    constructor(nombre, foto, descripcion, serie) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        if (serie) {
            this.serie = [serie];
        }
        else {
            this.serie = [];
        }
    }
    /**
     * Get Methods
     */
    obtenerNombre() { return this.nombre; }
    obtenerFoto() { return this.foto; }
    obtenerDescripcion() { return this.descripcion; }
    /**
     * Set Methods
     */
    modificarNombre(nombre) { this.nombre = nombre; }
    modificarFoto(foto) { this.foto = foto; }
    modificarDescripcionImg(descripcion) { this.descripcion = descripcion; }
}
