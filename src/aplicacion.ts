import { Plataforma } from "./plataforma.js"

export class Aplicacion {
nombre:string
imagen:string
descripcion:string
plataformas: Plataforma[]

constructor(nombre:string, imagen:string, descripcion:string, plataforma?:Plataforma){

    this.nombre=nombre
    this.imagen=imagen
    this.descripcion=descripcion

        if(plataforma){
            this.plataformas=[plataforma]
            plataforma.agregarAplicacion(this)
}else {
    this.plataformas= []
}
}

agregarPlataforma(plataforma:Plataforma){
    this.plataformas.push(plataforma)
    plataforma.agregarAplicacion(this)

}

listarPlataformas() {
    console.log("Plataformas")
    this.plataformas.forEach((plataforma)=>{
        console.log(plataforma)
    }) 
}

}
