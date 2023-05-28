import { Categoria } from "./Categoria.js"
import { Episodio } from "./Episodio.js"
import { Persona } from "./Persona.js"
import { Plataforma } from "./Plataforma.js"

export class Serie {
    private nombre: string
    private imagen: string
    private episodios : Episodio[] //1 Serie puede tener muchos episodios, o al menos 1 [Composición]
    private director: Persona[]
    private actores: Persona[]
    private plataforma: Plataforma
    private categorias:Categoria[]


    constructor(nombre:string, imagen:string,                           //Serie
                //categorias:string[],                                   //Categoría
                categorias:Categoria,
                nombreEp:string, resumen:string, duracion:number,       //Episodio parametros
                plataforma:Plataforma,                                  //Plataforma
                actores?:Persona,                                       //Actores
                director?:Persona,                                      //Director
                ){
        this.nombre = nombre
        this.imagen = imagen
        this.categorias = []
        this.episodios = [new Episodio(nombreEp,resumen,duracion, this)] //Instancia directamente el episodio
        this.plataforma = plataforma
        this.plataforma.agregarSerie(this)
        if(categorias){ this.categorias = [categorias]}else{ this.categorias=[]}
        if(actores){ this.actores = [actores] }else{ this.actores =[]}
        if(director){ this.director = [director]}else{ this.director = []}  
    }


    /**
     * Get Methods
     */

    obtenerNombre(){ return this.nombre }
    obtenerImg(){ return this.imagen }
    obtenerActores(){ return this.actores}
    obtenerDirectores(){ return this.director}
    obtenerPlataformas(){ return this.plataforma}


    /**
     * Set Methods
     */

    modificarNombre(nombre:string){ this.nombre = nombre}

    modificarImg(img:string){this.imagen = img}

    agregarEpisodio(new_episodio:Episodio){ this.episodios.push(new_episodio)}

    agregarDirector(director:Persona){ this.director.push(director)}

    agregarActor(actor:Persona){ this.actores.push(actor)}

    agregarCategoria(categoria:Categoria){ this.categorias.push(categoria)}




}


