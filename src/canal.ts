
import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"
import { Streamer } from "./streamer.js"


export class Canal{
    nombre:string
    banner:string
    descripcion:string
    
    plataforma: Plataforma | undefined
    streamer :Streamer
    stremings:Stream[]

    constructor(nombre:string, banner:string, descripcion:string, streamer:Streamer){

        this.nombre=nombre
        this.banner=banner
        this.descripcion=descripcion
        this.streamer=streamer
        streamer.agregarCanal(this)
        this.stremings=[]
 
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma
     }

     agregarStream(streming:Stream){
        this.stremings.push(streming)
    }
  
    mostrarDetalle(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Banner: ${this.banner}`)
        console.log(`Descripción: ${this.descripcion}`)
        this.listarStreams()
    }

    mostrarStreamers(){
        return this.streamer  
    }

    listarStreams(){
        console.log("Streams")
        this.stremings.forEach((stream)=>{
           console.log(stream   )
        })
        
    }

    }



