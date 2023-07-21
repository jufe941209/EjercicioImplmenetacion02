export class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    agregarCanal(canales) {
        this.canales.push(canales);
        canales.agregarPlataforma(this);
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Logo: ${this.logo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Patrocinador: ${this.patrocinador}`);
        this.listarCanales();
    }
    listarCanales() {
        console.log("Canales");
        this.canales.forEach((canal) => {
            console.log(canal);
        });
    }
    listarStremears() {
        console.log("Stremears");
        this.canales.forEach((canal) => {
            console.log(canal.mostrarStreamers());
        });
    }
}
