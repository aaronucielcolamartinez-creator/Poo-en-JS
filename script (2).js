
class Calculadora {
    constructor() {
        // Inicializa el estado del objeto [5, 6]
        this.resultado = 0;
    }

    
    sumar(n) { this.resultado += n; return this; }
    restar(n) { this.resultado -= n; return this; }
    multiplicar(n) { this.resultado *= n; return this; }
    dividir(n) {
        if (n === 0) {
            alert("Error: No se puede dividir por cero");
        } else {
            this.resultado /= n;
        }
        return this; // Permite encadenar operaciones
    }
    reset() { this.resultado = 0; return this; }
}


const miCalc = new Calculadora();


function ejecutar(operacion) {
    const elementoInput = document.getElementById("numero");
    const n = parseFloat(elementoInput.value) || 0;


    if (operacion === 'sumar') miCalc.sumar(n);
    if (operacion === 'restar') miCalc.restar(n);
    if (operacion === 'multiplicar') miCalc.multiplicar(n);
    if (operacion === 'dividir') miCalc.dividir(n);
    if (operacion === 'reset') miCalc.reset();


    document.getElementById("pantalla").innerText = miCalc.resultado;
    

    elementoInput.value = "";
}