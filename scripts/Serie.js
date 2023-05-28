import { Episodio } from "./Episodio.js";
export class Serie {
    constructor(nombre, imagen, //Serie
    //categorias:string[],                                   //Categoría
    categorias, nombreEp, resumen, duracion, //Episodio parametros
    plataforma, //Plataforma
    actores, //Actores
    director) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = [];
        this.episodios = [new Episodio(nombreEp, resumen, duracion, this)]; //Instancia directamente el episodio
        this.plataforma = plataforma;
        this.plataforma.agregarSerie(this);
        if (categorias) {
            this.categorias = [categorias];
        }
        else {
            this.categorias = [];
        }
        if (actores) {
            this.actores = [actores];
        }
        else {
            this.actores = [];
        }
        if (director) {
            this.director = [director];
        }
        else {
            this.director = [];
        }
    }
    /**
     * Get Methods
     */
    obtenerNombre() { return this.nombre; }
    obtenerImg() { return this.imagen; }
    obtenerActores() { return this.actores; }
    obtenerDirectores() { return this.director; }
    obtenerPlataformas() { return this.plataforma; }
    /**
     * Set Methods
     */
    modificarNombre(nombre) { this.nombre = nombre; }
    modificarImg(img) { this.imagen = img; }
    agregarEpisodio(new_episodio) { this.episodios.push(new_episodio); }
    agregarDirector(director) { this.director.push(director); }
    agregarActor(actor) { this.actores.push(actor); }
    agregarCategoria(categoria) { this.categorias.push(categoria); }
}
