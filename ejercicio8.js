class Tarea {
    constructor(id, titulo, descripcion, prioridad, fechaLimite) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad; // alta, media, baja
        this.completada = false;
        this.fechaCreacion = new Date();
        this.fechaLimite = fechaLimite;
    }

    completar() {
        this.completada = !this.completada;
    }

    getInfo() {
        return `[${this.completada ? "X" : " "}] ${this.titulo} (${this.prioridad}) - Límite: ${this.fechaLimite}`;
    }
}

class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    agregar(titulo, desc, prioridad, fechaLimite) {
        const id = Date.now();
        const nueva = new Tarea(id, titulo, desc, prioridad, fechaLimite);
        this.tareas.push(nueva);
    }

    eliminar(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
    }

    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) tarea.completar();
    }

    mostrarTodas() {
        this.tareas.forEach(t => console.log(t.getInfo()));
    }
}

const gestor = new GestorTareas();
gestor.agregar("Estudiar POO", "Repasar clases y objetos", "alta", "2026-06-20");
gestor.mostrarTodas();
