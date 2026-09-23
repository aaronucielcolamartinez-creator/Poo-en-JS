
class Persona {

    constructor(nombre, edad, ciudad) {
        this.nombre = nombre; 
        this.edad = edad;
        this.ciudad = ciudad;
    }

    
    presentarse() {
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
    }
}


const persona1 = new Persona("Ana", 28, "Mendoza");
const persona2 = new Persona("Luis", 35, "San Rafael");
const persona3 = new Persona("María", 22, "Godoy Cruz");


console.log(persona1.presentarse());
console.log(persona2.presentarse());
console.log(persona3.presentarse());
