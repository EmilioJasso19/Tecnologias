"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
class EmailNotification {
    constructor(email) {
        this.email = email;
    }
    sendNotification(message) {
        console.log(`Sending notification via email: ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
