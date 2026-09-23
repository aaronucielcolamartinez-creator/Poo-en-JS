class CuentaBancaria {
    #saldo;
    #pin;

    constructor(saldoInicial, pin) {
        this.#saldo = saldoInicial > 0 ? saldoInicial : 0;
        this.#pin = pin;
    }

    #verificarPin(pinIngresado) {
        return this.#pin === pinIngresado;
    }

    depositar(cantidad, pin) {
        if (!this.#verificarPin(pin)) throw new Error("PIN incorrecto");
        if (cantidad <= 0) throw new Error("La cantidad debe ser mayor a 0");
        this.#saldo += cantidad;
        return `Depósito exitoso. Saldo actual: $${this.#saldo}`;
    }

    retirar(cantidad, pin) {
        if (!this.#verificarPin(pin)) throw new Error("PIN incorrecto");
        if (cantidad <= 0) throw new Error("Cantidad inválida");
        if (cantidad > this.#saldo) throw new Error("Saldo insuficiente");
        this.#saldo -= cantidad;
        return `Retiro exitoso. Saldo actual: $${this.#saldo}`;
    }

    consultarSaldo(pin) {
        if (!this.#verificarPin(pin)) throw new Error("PIN incorrecto");
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria(5000, "1234");
console.log(cuenta.consultarSaldo("1234")); // 5000
