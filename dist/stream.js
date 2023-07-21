export class Stream {
    constructor(fecha, duracion, canal) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        canal.agregarStream(this);
        this.categorias = [];
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
        categoria.agregarStream(this);
    }
    mostrarDetalle() {
        console.log("STREAM");
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Duracion: ${this.duracion}`);
    }
}
