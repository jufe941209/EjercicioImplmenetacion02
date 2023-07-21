import { Aplicacion } from "./aplicacion.js"
import { Canal } from "./canal.js"
import { Streamer } from "./streamer.js"

export class Plataforma{

        nombre:string
        logo:string
        descripcion:string
        patrocinador:string

        aplicacion: Aplicacion | undefined
        canales:Canal[]
       

        constructor(nombre:string,logo:string,descripcion:string,patrocinador:string){
            this.nombre=nombre
            this.logo=logo
            this.descripcion=descripcion
            this.patrocinador=patrocinador
            this.canales=[]
           
        }

        agregarAplicacion(aplicacion:Aplicacion){
           this.aplicacion = aplicacion
        }
        
        agregarCanal(canales:Canal){
           this.canales.push(canales)
            canales.agregarPlataforma(this)
            }
            
        mostrarDetalle(){
            console.log(`Nombre: ${this.nombre}`)
            console.log(`Logo: ${this.logo}`)
            console.log(`Descripción: ${this.descripcion}`)
            console.log(`Patrocinador: ${this.patrocinador}`)
            this.listarCanales()
        }

        listarCanales(){
            console.log("Canales")
            this.canales.forEach((canal)=>{
               console.log(canal)
            })
            
        }

        listarStremears(){
            console.log("Stremears")
            this.canales.forEach((canal)=>{
                console.log(canal.mostrarStreamers())
            })
        }
    
        
        }

       

    