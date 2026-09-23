class Circulo {
    constructor(x, y, radio, color) {
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = color;
    }

    dibujar(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    verificarClick(px, py) {
        const distancia = Math.sqrt((px - this.x) ** 2 + (py - this.y) ** 2);
        return distancia < this.radio;
    }
}

class Juego {
    constructor() {
        this.puntuacion = 0;
        this.vidas = 3;
        this.circuloActual = null;
    }

    iniciar() {
        console.log("Juego iniciado...");
    }
}
