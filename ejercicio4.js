class ListaCompras {
    constructor() {
        this.items = [];
    }

    agregarItem(nombre, cantidad, precioUnitario) {
        this.items.push({ nombre, cantidad, precioUnitario });
    }

    eliminarItem(nombre) {
        const index = this.items.findIndex(item => item.nombre.toLowerCase() === nombre.toLowerCase());
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    calcularTotal() {
        return this.items.reduce((acc, item) => acc + (item.cantidad * item.precioUnitario), 0);
    }

    mostrarLista() {
        console.log("--- LISTA DE COMPRAS ---");
        this.items.forEach(item => {
            console.log(- ${item.nombre}: ${item.cantidad} x $${item.precioUnitario} = $${item.cantidad * item.precioUnitario});
        });
        console.log(TOTAL: $${this.calcularTotal()});
    }

    buscarItem(nombre) {
        const encontrado = this.items.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
        return encontrado ? encontrado : "no encontrado";
    }
}

const compras = new ListaCompras();
compras.agregarItem("Manzanas", 4, 250);
compras.agregarItem("Leche", 2, 800);
compras.mostrarLista();
