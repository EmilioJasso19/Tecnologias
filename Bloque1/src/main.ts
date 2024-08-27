import {Product, EmailNotificationService, ShoppingCart, SMSNotificationService} from './index'

const notificationService1 = new EmailNotificationService();
const cart1 = new ShoppingCart(notificationService1);

const laptop = new Product(1, 'ASUS TUF F15', 7000)
const telefono = new Product(2, 'Chayomi', 3000)
const television = new Product(3, '!Smart TV', 10000)
console.log(television.applyDiscount(25))

cart1.addProduct(laptop, telefono, television)

cart1.checkout();

const notificationService2 = new SMSNotificationService('123-456-7890')
const cart2 = new ShoppingCart(notificationService2)

cart2.addProduct(telefono, television, laptop)
cart2.checkout()

