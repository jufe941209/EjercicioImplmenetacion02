import { Plataforma } from "./plataforma.js"

export class Aplicacion {
nombre:string
imagen:string
descripcion:string
plataformas: Plataforma[]

constructor(nombre:string, imagen:string, descripcion:string){

    this.nombre=nombre
    this.imagen=imagen
    this.descripcion=descripcion
    this.plataformas = []
}

agregarPlataforma(plataforma:Plataforma){
    this.plataformas.push(plataforma)
    plataforma.agregarAplicacion(this)

}



}