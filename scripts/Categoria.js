export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.series = [];
    }
    obtenerCategoria() { return this.nombre; }
}
