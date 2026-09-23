class Libro {
    constructor(id, titulo, autor, anio) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.prestado = false;
        this.prestadoA = null;
    }

    prestar(persona) {
        if (this.prestado) {
            return `El libro "${this.titulo}" ya está prestado.`;
        }
        this.prestado = true;
        this.prestadoA = persona;
        return `Libro prestado exitosamente a ${persona}.`;
    }

    devolver() {
        this.prestado = false;
        this.prestadoA = null;
    }

    getInfo() {
        const estado = this.prestado ? `Prestado a: ${this.prestadoA}` : "Disponible";
        return `[ID: ${this.id}] ${this.titulo} - ${this.autor} (${this.anio}) | Estado: ${estado}`;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(titulo, autor, anio) {
        const id = this.libros.length + 1;
        const nuevoLibro = new Libro(id, titulo, autor, anio);
        this.libros.push(nuevoLibro);
    }

    buscarPorId(id) {
        return this.libros.find(libro => libro.id === id) || null;
    }

    prestarLibro(id, persona) {
        const libro = this.buscarPorId(id);
        if (libro) {
            console.log(libro.prestar(persona));
        } else {
            console.log("Libro no encontrado.");
        }
    }

    devolverLibro(id) {
        const libro = this.buscarPorId(id);
        if (libro) {
            libro.devolver();
            console.log(`El libro "${libro.titulo}" ha sido devuelto.`);
        }
    }

    mostrarCatalogo() {
        console.log("=== CATÁLOGO DE BIBLIOTECA ===");
        this.libros.forEach(libro => console.log(libro.getInfo()));
    }
}

const biblioteca = new Biblioteca();
biblioteca.agregarLibro("Cien años de soledad", "Gabriel García Márquez", 1967);
biblioteca.agregarLibro("El Principito", "Antoine de Saint-Exupéry", 1943);
biblioteca.mostrarCatalogo();
biblioteca.prestarLibro(1, "Carlos");
biblioteca.mostrarCatalogo();
