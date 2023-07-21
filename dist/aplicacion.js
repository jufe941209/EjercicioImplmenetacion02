export class Aplicacion {
    constructor(nombre, imagen, descripcion, plataforma) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        if (plataforma) {
            this.plataformas = [plataforma];
            plataforma.agregarAplicacion(this);
        }
        else {
            this.plataformas = [];
        }
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
        plataforma.agregarAplicacion(this);
    }
    listarPlataformas() {
        console.log("Plataformas");
        this.plataformas.forEach((plataforma) => {
            console.log(plataforma);
        });
    }
}
