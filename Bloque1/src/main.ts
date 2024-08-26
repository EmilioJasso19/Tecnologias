import {Product, EmailNotificationService, ShoppingCart} from './index'


const notificationService = new EmailNotificationService();
const cart = new ShoppingCart(notificationService);

const laptop = new Product(1, 'ASUS TUF F15', 7000)
const telefono = new Product(2, 'Chayomi', 3000)
const television = new Product(3, '!Smart TV', 10000)
console.log(television.applyDiscount(25))

cart.addProduct(laptop, telefono, television)

cart.checkout();