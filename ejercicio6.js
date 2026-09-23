class Vehiculo {
    constructor(marca, modelo, anio, kilometraje = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.kilometraje = kilometraje;
    }

    conducir(km) {
        this.kilometraje += km;
    }

    mostrarInfo() {
        return `${this.marca} ${this.modelo} (${this.anio}) - Kilometraje: ${this.kilometraje} km`;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, anio, puertas, tipo) {
        super(marca, modelo, anio);
        this.puertas = puertas;
        this.tipo = tipo; // sedan / SUV
    }

    abrirMaletero() {
        console.log(`Abriendo el maletero del auto ${this.marca}...`);
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Puertas: ${this.puertas}, Tipo: ${this.tipo}`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, anio, cilindrada, tipo) {
        super(marca, modelo, anio);
        this.cilindrada = cilindrada;
        this.tipo = tipo; // deportiva / turismo
    }

    hacerCaballito() {
        console.log(`¡La moto ${this.marca} está haciendo un caballito! 🏍️`);
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Cilindrada: ${this.cilindrada}cc, Tipo: ${this.tipo}`;
    }
}

const miAuto = new Auto("Toyota", "Corolla", 2022, 4, "Sedan");
console.log(miAuto.mostrarInfo());
miAuto.abrirMaletero();
