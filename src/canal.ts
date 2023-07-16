
import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"
import { Streamer } from "./streamer.js"


export class Canal{
    nombre:string
    banner:string
    descripcion:string
    plataforma: Plataforma | undefined
    stremear :Streamer
    streming:Stream[]

    constructor(nombre:string, banner:string, descripcion:string, streamer:Streamer){

        this.nombre=nombre
        this.banner=banner
        this.descripcion=descripcion
        this.stremear=streamer
        this.stremear.agregarCanal(this)
        this.streming=[]

    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma
     }

     agregarStream(streming:Stream){
        this.streming.push(streming)
    }
  
}