class Producto {
    constructor(id, nombre, precio, stock, categoria, descuento = 0) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.descuento = descuento; // Porcentaje
    }

    getPrecioConDescuento() {
        return this.precio * (1 - this.descuento / 100);
    }
}

class ItemCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getSubtotal() {
        return this.producto.getPrecioConDescuento() * this.cantidad;
    }
}

class Carrito {
    constructor(cliente) {
        this.items = [];
        this.cliente = cliente;
    }

    agregarProducto(producto, cantidad) {
        if (producto.stock < cantidad) {
            console.error("Stock insuficiente.");
            return;
        }
        this.items.push(new ItemCarrito(producto, cantidad));
    }

    calcularSubtotal() {
        return this.items.reduce((acc, item) => acc + item.getSubtotal(), 0);
    }

    generarOrden() {
        const subtotal = this.calcularSubtotal();
        const impuestos = subtotal * 0.21;
        const envio = subtotal < 5000 ? 500 : 0;
        const totalFinal = subtotal + impuestos + envio;

        return {
            cliente: this.cliente.nombre,
            subtotal,
            impuestos,
            envio,
            totalFinal,
            fecha: new Date()
        };
    }
}
