import { Canal } from "./canal.js"

export class Streamer{
    nickname: string
    descripcion: string
    redesSociales: string
    
    canales:Canal[]

    constructor(nickname:string, descripcion:string, redesSociales:string){

        this.nickname=nickname
        this.descripcion=descripcion
        this.redesSociales=redesSociales
        this.canales=[]
    }


    agregarCanal(canales:Canal){
        this.canales.push(canales)
 
    }

    mostrarDetalle(){
        console.log(`Nickname: ${this.nickname}`)
        console.log(`Descripción: ${this.descripcion}`)
        console.log(`Redes Sociales: ${this.redesSociales}`)
        //this.listarStreams()
    }

}
