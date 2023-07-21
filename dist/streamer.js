export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
    }
    agregarCanal(canales) {
        this.canales.push(canales);
    }
    mostrarDetalle() {
        console.log(`Nickname: ${this.nickname}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Redes Sociales: ${this.redesSociales}`);
        //this.listarStreams()
    }
}
