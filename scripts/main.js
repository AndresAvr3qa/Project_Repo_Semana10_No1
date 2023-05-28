/**
 * AUTHOR: CARLOS ANDRES AVILA REYES
 *
 * EJERCICIO MODULARIZACIÓN SEMANA 10
 *
 * GRUPO 3
 */
console.log("Series App");
import { Serie } from './Serie.js';
import { Persona } from './Persona.js';
import { Plataforma } from './Plataforma.js';
import { Plan } from './Plan.js';
import { Categoria } from './Categoria.js';
/**
 * PLATAFORMAS
 */
const plataforma1 = new Plataforma("Metflix", "https://metflix.com");
const plataforma2 = new Plataforma("HVO", "https//:hvo.com");
const plataforma3 = new Plataforma("PelisPLus", "https://ppsplus.com");
const planBasic = new Plan("Plan basic basic", 15000, plataforma1);
const planGold = new Plan("Gold PLan", 45000, plataforma2);
/**
 * DIRECTORES
 */
const director1 = new Persona("Steven Spielberg", "url:https://foto.steven.png", "Famous director");
const director2 = new Persona("Jing Joe", "url:https://foto.jing.png", "Korean Famous director");
const director3 = new Persona("Pepe M", "url:https://foto.pepe.png", "no hay descripcion");
/**
 * ACTORES
 */
const actor1 = new Persona("Actor Name 1", "url:https://foto.actor1.png", "Male famous actor");
const actor2 = new Persona("Actor Name 2", "url:https://foto.actor2.png", "Female famous actress");
const actor3 = new Persona("Actor Name 3", "url:https://foto.actor3.png", "Female famous actress");
const actor4 = new Persona("Actor Name 4", "url:https://foto.actor4.png", "nn");
/**
 * CATEGORIAS
 */
const dramaCategoria = new Categoria("Drama");
const accionCategoria = new Categoria("Acción");
const suspensoCategoria = new Categoria("Suspenso");
const ficcionCategoria = new Categoria("Ficción");
/**
 * SERIES
 */
const serie1 = new Serie("Lord of The Rings", "url:https://img.turl.lor.jpg", dramaCategoria, "Episodio 1: La guerra", "Frodo le declara la guerra a todos", 120, plataforma1, actor1, director1);
const serie2 = new Serie("the boyz", "url:https://img.turl.boyz.jpg", accionCategoria, "Episodio 1: The team", "El equipo de anthieroes se reúne", 60, plataforma1, actor3, director1);
const serie3 = new Serie("Squid Games", "url:https://img.turl.sqg.jpg", suspensoCategoria, "Episodio 1: El drama empieza", "Jong es contactado por...", 39, plataforma2, actor3, director3);
const serie4 = new Serie("La serie de prueba", "url:https://img.turl.serieprueba.jpg", ficcionCategoria, "Episodio 1: test test", "es una prueba...", 22, plataforma3, actor4, director2);
serie1.agregarActor(actor2);
serie1.agregarActor(actor3);
serie1.agregarActor(actor4);
/**
 * CONSULTAS:
 */
/**
 * #1. Listado de Series por plataforma
 */
console.log("#1  MOSTRAR LISTADO DE SERIES");
console.log(plataforma1.obtenerSeries());
console.log(plataforma2.obtenerSeries());
console.log(plataforma3.obtenerSeries());
console.log("......................................................");
/**
 * #2 Mostrar Detalle de serie
 */
console.log("#2  MOSTRAR DETALLES DE UNA SERIE > Serie #4: Serie de Prueba");
console.log(serie4);
console.log("......................................................");
/**
 * #3  MOSTRAR CATEGORIAS
 */
//tbd
/**
 * #4  Listado Directors y Actores de una serie
 */
console.log("#4  MOSTRAR LISTADO DE ACTORES Y DIRECTORES POR SERIE");
console.log("Listado Actores");
console.log(serie4.obtenerActores());
console.log("Listado Directores");
console.log(serie3.obtenerDirectores());
console.log("......................................................");
/**
 * #5 MOSTRAR DETALLE DE DIRECTOR O ACTOR
*/
console.log("#5  MOSTRAR DETALLE DE ACTORES Y DIRECTORES POR SERIE");
console.log("Detalle Actor");
console.log(actor1);
console.log("Detalle Director");
console.log(director1);
console.log("......................................................");
/**
 * #6 MOSTRAR LISTADO PLATAFORMAS
*/
//console.log("#6  MOSTRAR LISTADO PLATAFORMAS")
//tbd
//console.log("......................................................")
/**
 * #7  MOSTRAR DETALLE DE UNA PLATAFORMA
 */
console.log("#7  MOSTRAR DETALLE PLATAFORMA");
console.log(plataforma1);
console.log("......................................................");
/**
 * #8. Crear nueva serie
 *
 */
function crearNuevaSerie(nombreSerie, img, categoria, nombreEpisodio, resumen, duracion, plataforma, actor, director) {
    return new Serie(nombreSerie, img, categoria, nombreEpisodio, resumen, duracion, plataforma, actor, director);
}
console.log(crearNuevaSerie("Tansformers", "https://transformers.com", new Categoria("Ficción"), "Pueblo Paleta", "Inicio Viaje", 22, plataforma3, actor2, director3));
/**
 * #9. Crear Nueva Categoría
 */
function crearNuevaCategoria(nombre) { new Categoria(nombre); }
/**
 * #10. Crear un nuevo actor y agrega Actor a serie
 * @param nombre
 * @param fotoUrl
 * @param description
 * @param serie
 */
function crearNuevoActor(nombre, fotoUrl, description, serie) {
    serie.agregarActor(new Persona(nombre, fotoUrl, description, serie));
}
crearNuevoActor("Robinson D", "https://robinson.photo.com", "descripcion test text test", serie1);
console.log(serie1);
/**
 * #11. Crear un nuevo director y Agrega director a una serie
 */
function crearNuevodirector(nombre, fotoUrl, description, serie) {
    serie.agregarDirector(new Persona(nombre, fotoUrl, description, serie));
}
crearNuevodirector("Jk Director 2", "https://jkl.photo.com", "jk director descripcion test text test", serie3);
console.log(serie3);
/**
 * #12. Agregar Serie
 */
plataforma1.agregarSerie(serie1);
/*const serie1 = new Serie("The boyz", "url:https://img.turl.boyz.jpg", //Datos Serie
                        new Categoria("SuperHeroes"),
                       "El inicio", "HomeLander conoce a los simpson", 150) //Datos Episodio

serie1.agregarDirector(new Persona("Steven Spilberg", "url:https://img.turl.spielbergfoto.png","Oscar Awards", serie1))
serie1.agregarActor(new Persona("Actor 1","url:https://img.turl.actor1foto.png", "Oscar Awards", serie1))
serie1.agregarActor(new Persona("Actor 2","url:https://img.turl.actor2foto.png", "None", serie1))
serie1.agregarActor(new Persona("Actor 3","url:https://img.turl.actor3foto.png", "No experience", serie1))
serie1.agregarActor(new Persona("Actor 4","url:https://img.turl.actor4foto.png", "Famous", serie1))
serie1.agregarActor(new Persona("Actor 5","url:https://img.turl.actor5foto.png", "dd Famous", serie1))
*/
/*serie1.agregarEpisodio(new Episodio("La venganza", "Escuadrón random", 90, serie1))
serie1.agregarEpisodio(new Episodio("Sunset", "Atardecer en la ciudad", 75, serie1))
serie1.agregarCategoria(new Categoria("Violence"))*/
//serie1.agregarPlataforma(new Plataforma("Metflix", "https://www.metflix.com"))
//serie1.agregarPlataforma(new Plataforma("Hvo", "https://www.hvo.com"))
/*const plataforma1 = new Plataforma("tuBe", "www.tube.com", serie1)
const planBasic = new Plan("Basic basic", 35000, plataforma1)
const planSilver = new Plan("Plan Silver", 70000, plataforma1)



console.log(serie1)
console.log(plataforma1)*/
