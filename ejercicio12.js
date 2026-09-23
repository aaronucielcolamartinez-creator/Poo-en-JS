// MODEL (Datos y lógica de negocio)
class TareaModel {
    constructor() {
        this.tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    }

    guardar() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }

    agregar(titulo) {
        this.tareas.push({ id: Date.now(), titulo, completada: false });
        this.guardar();
    }
}

// VIEW (Manipulación estricta del DOM)
class TareaView {
    constructor() {
        this.listaElement = document.getElementById("lista-tareas");
        this.inputElement = document.getElementById("nueva-tarea");
    }

    render(tareas, eventos) {
        this.listaElement.innerHTML = "";
        tareas.forEach(t => {
            const li = document.createElement("li");
            li.textContent = t.titulo;
            this.listaElement.appendChild(li);
        });
    }
}

// CONTROLLER (Puente)
class TareaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.render(this.model.tareas);
    }
}
