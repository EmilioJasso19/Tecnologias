"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
class EmailNotification {
    constructor(email) {
        this.notificationHistory = [];
        this.email = email;
    }
    sendNotification(message) {
        console.log(`Sending notification via Email: ${message} to email address: ${this.email}`);
        this.notificationHistory.push({ msg: message, type: this.constructor.name });
    }
    getNotificationHistory() {
        return this.notificationHistory;
    }
}
exports.EmailNotification = EmailNotification;
