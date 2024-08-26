// Clase Product
export class Product {
    private id: number;
    private name: string;
    private price: number;
    private discountPercentage: number = 0;

    constructor(id: number, name: string, price: number) {
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
    applyDiscount(percentage: number): number {
        this.discountPercentage = percentage;
        return this.getPriceWithDiscount();
    }

    // Método para obtener el precio con descuento aplicado
    getPriceWithDiscount(): number {
        return this.price * (1 - this.discountPercentage / 100);
    }
}

// Interfaz para un servicio de notificación
interface NotificationService {
    sendNotification(message: string): void;
}

// Clase de servicio de notificación
export class EmailNotificationService implements NotificationService {
    sendNotification(message: string): void {
        console.log(`Enviando Correo: ${message}`);
    }
}

// Clase de carrito de compras
export class ShoppingCart {
    private products: Product[] = [];
    private notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.notificationService = notificationService;
    }

    addProduct(...newProducts: Product[]) {
        newProducts.forEach((value) => this.products.push(value));
    }

    showProducts(): void {
        console.log("Compraste:");
        this.products.forEach((product, index) => {
            const priceWithDiscount = product.getPriceWithDiscount();
            if (product.getDiscountPercentage() > 0) {
                console.log(
                    `${index + 1}. ${product.getName()}, Precio original: $${product.getPrice()} MXN, Precio con descuento: $${priceWithDiscount.toFixed(
                        2
                    )} MXN`
                );
            } else {
                console.log(
                    `${index + 1}. ${product.getName()}, por: $${product
                        .getPrice()
                        .toFixed(2)}MXN`
                );
            }
        });
    }

    checkout() {
        this.notificationService.sendNotification("¡Compra realizada!");
        // Lógica para procesar el pago
        this.showProducts();
    }
}
