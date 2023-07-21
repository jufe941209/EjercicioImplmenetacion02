import { Canal } from "./canal.js"
import { Categoria } from "./categoria.js"

export class Stream {
    fecha:Date
    duracion:number
    
    canal:Canal
    categorias:Categoria[]

    constructor(fecha:Date,duracion:number,canal:Canal){

        this.fecha=fecha
        this.duracion=duracion
        this.canal=canal
        canal.agregarStream(this)
        this.categorias=[]
    }

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
        categoria.agregarStream(this)
    }

    mostrarDetalle(){
        console.log("STREAM")
        console.log(`Fecha: ${this.fecha}`)
        console.log(`Duracion: ${this.duracion}`)
    }
}