
class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.energia = 100; 
    }

 
    jugar() {
        this.energia -= 20;
        if (this.energia < 0) this.energia = 0; // Validación de rango
    }

    comer() {
        this.energia += 10;
        if (this.energia > 100) this.energia = 100; // Validación de máximo
    }

    dormir() {
        this.energia = 100;
    }

    estado() {
        return `${this.nombre} (${this.tipo}) - Energía: ${this.energia}%`;
    }
}


const miMascota = new Mascota("Fido", "Perro");


function actualizarPantalla() {
    document.getElementById("info").innerText = miMascota.estado();
    const barra = document.getElementById("barra");
    barra.style.width = miMascota.energia + "%";
}


function hacerJugar() { miMascota.jugar(); actualizarPantalla(); }
function hacerComer() { miMascota.comer(); actualizarPantalla(); }
function hacerDormir() { miMascota.dormir(); actualizarPantalla(); }


actualizarPantalla();
