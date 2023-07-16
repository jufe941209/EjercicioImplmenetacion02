export class Stream {
    constructor(fecha, duracion, canal) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        this.canal.agregarStream(this);
        this.categorias = [];
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
        categoria.agregarStream(this);
    }
}
