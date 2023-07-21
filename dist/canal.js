export class Canal {
    constructor(nombre, banner, descripcion, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        streamer.agregarCanal(this);
        this.stremings = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(streming) {
        this.stremings.push(streming);
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Banner: ${this.banner}`);
        console.log(`Descripción: ${this.descripcion}`);
        this.listarStreams();
    }
    mostrarStreamers() {
        return this.streamer;
    }
    listarStreams() {
        console.log("Streams");
        this.stremings.forEach((stream) => {
            console.log(stream);
        });
    }
}
