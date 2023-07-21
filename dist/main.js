import { Aplicacion } from "./aplicacion.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";
//Creacion de una aplicación y a esta aplicación se le agregan las diferentes plataformas
let aplicacion = new Aplicacion("Aplicacion1", "imagen.jpg", "Esta es la aplicacion para observar todas las plataformas");
let German = new Streamer("Hola Soy German", " Canal de German Garmendia de juegos", "www.holasoygerman.com");
let Ibai = new Streamer("Ibai", "este es el canal de Ibai", "www.ibai.com");
let epaColombia = new Streamer("Epa Colombia", " este es un canal donde se habla de procedimientos para el cabello y tambien de entretenimiento", "www.epacolombia.com");
let holasoygerman = new Canal("Hola soy German", "banner.png", "Este canal habla acerca de juegos y humor", German);
let ibai = new Canal("Ibai", "ibai.jpg", " Canal de Ibai dedicado a hablar sobre futbol", Ibai);
let epa = new Canal("Epa Colombia", "epa_Colombia.jpg", "canal de instagram de la epa colombia", epaColombia);
let Tiktok = new Plataforma("Tiktok", "logo.png", "creada por Mark, destinada a la diversion", "Meta");
let Twitch = new Plataforma("Twitch", "twitch.jpg", "Plataforma donde solo se realizan streamings", "Coca-Cola");
let Youtube = new Plataforma("Youtube", "youtube.png", "Plataforma donde su funcion central es subir videos, pero tambien se puede realizar streamings", "Meta");
aplicacion.agregarPlataforma(Tiktok);
aplicacion.agregarPlataforma(Twitch);
aplicacion.agregarPlataforma(Youtube);
//Agregar canales a las plataformas
Tiktok.agregarCanal(holasoygerman);
Tiktok.agregarCanal(ibai);
Twitch.agregarCanal(ibai);
Twitch.agregarCanal(epa);
Youtube.agregarCanal(holasoygerman);
Youtube.agregarCanal(epa);
//Creación de los Streamings
let deadByDaylight = new Stream(new Date(4 / 4 / 2023), 15, holasoygerman);
let champions = new Stream(new Date(15 / 8 / 2023), 90, ibai);
let keratinas = new Stream(new Date(10 / 7 / 2023), 10, epa);
//creacion de categorias
let juegos = new Categoria("Juegos", "En este tipo de Streamings se desarrollan y se juega en vivo y directo", "Terror.jpg");
let deportes = new Categoria("Deportes", "En esta categoria se habla o se miran ciertos deportes en vivo", "deportes.jpg");
let belleza = new Categoria("Belleza", "En esta categoria se hacen tutoriales, o se habla de belleza en vivo", "belleza.jpg");
deadByDaylight.agregarCategoria(juegos);
champions.agregarCategoria(deportes);
keratinas.agregarCategoria(belleza);
console.log(deadByDaylight.mostrarDetalle());
