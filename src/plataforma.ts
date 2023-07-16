import { Aplicacion } from "./aplicacion.js"
import { Canal } from "./canal.js"

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

}