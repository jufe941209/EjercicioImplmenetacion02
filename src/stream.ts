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
        this.canal.agregarStream(this)
        this.categorias=[]
    }

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
        categoria.agregarStream(this)
    }


}