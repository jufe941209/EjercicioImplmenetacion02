export class Categoria {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.streamings = [];
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    listarStreams() {
        console.log("Streams");
        this.streamings.forEach((stream) => {
            console.log(stream);
        });
    }
}
