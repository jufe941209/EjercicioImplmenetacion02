export class Canal {
    constructor(nombre, banner, descripcion, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.stremear = streamer;
        this.stremear.agregarCanal(this);
        this.streming = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(streming) {
        this.streming.push(streming);
    }
}
