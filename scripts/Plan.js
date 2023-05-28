export class Plan {
    constructor(nombre, precio, plataforma) {
        this.nombre = nombre;
        this.precio = precio;
        this.plataforma = plataforma; //Un plan está ligado a una plataforma
        this.plataforma.agregarPlan(this);
    }
    /**
    * Get Methods
    */
    obtenerNombre() { return this.nombre; }
    obtenerPrecio() { return this.precio; }
    /**
    * Set Methods
    */
    modificarNombre(nombre) { return this.nombre = nombre; }
    modificarPrecio(precio) { return this.precio = precio; }
}
