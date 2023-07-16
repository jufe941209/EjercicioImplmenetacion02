import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";



let aplicacion = new Aplicacion("Aplicacion1","imagen.jpg","Esta es la aplicacion para observar todas las plataformas")

let Tiktok = new Plataforma("Tiktok","logo.png","creada por Mark, destinada a la diversion","Meta")

aplicacion.agregarPlataforma(Tiktok)

let German = new Streamer("Hola Soy German"," Canal de German Garmendia de juegos","www.holasoygerman.com")

let losFutboleros = new Canal("Los Futboleros","banner.png"," Este canal trata de un grupo que habla acerca de futbol",German)



Tiktok.agregarCanal(losFutboleros)

console.log(losFutboleros)


