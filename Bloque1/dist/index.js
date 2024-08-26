"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = exports.EmailNotificationService = exports.Product = void 0;
// Clase Product
class Product {
    constructor(id, name, price) {
        this.discountPercentage = 0;
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Getters
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDiscountPercentage() {
        return this.discountPercentage;
    }
    // Método para aplicar un descuento
    applyDiscount(percentage) {
        this.discountPercentage = percentage;
        return this.getPriceWithDiscount();
    }
    // Método para obtener el precio con descuento aplicado
    getPriceWithDiscount() {
        return this.price * (1 - this.discountPercentage / 100);
    }
}
exports.Product = Product;
// Clase de servicio de notificación
class EmailNotificationService {
    sendNotification(message) {
        console.log(`Sending email: ${message}`);
    }
}
exports.EmailNotificationService = EmailNotificationService;
// Clase de carrito de compras
class ShoppingCart {
    constructor(notificationService) {
        this.products = [];
        this.notificationService = notificationService;
    }
    addProduct(...newProducts) {
        newProducts.forEach((value) => this.products.push(value));
    }
    showProducts() {
        console.log("Compraste:");
        this.products.forEach((product, index) => {
            const priceWithDiscount = product.getPriceWithDiscount();
            if (product.getDiscountPercentage() > 0) {
                console.log(`${index + 1}. ${product.getName()}, Precio original: $${product.getPrice()} MXN, Precio con descuento: $${priceWithDiscount.toFixed(2)} MXN`);
            }
            else {
                console.log(`${index + 1}. ${product.getName()}, por: $${product
                    .getPrice()
                    .toFixed(2)}MXN`);
            }
        });
    }
    checkout() {
        // Lógica para procesar el pago
        this.notificationService.sendNotification("¡Compra realizada!");
        this.showProducts();
    }
}
exports.ShoppingCart = ShoppingCart;
