"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNotification = void 0;
class PhoneNotification {
    constructor(phoneNumber) {
        this.notificationHistory = [];
        this.phoneNumber = phoneNumber;
    }
    sendNotification(message) {
        console.log(`Sending notification via Phone: ${message} to ${this.phoneNumber}`);
        this.notificationHistory.push({ msg: message, type: this.constructor.name });
    }
    getNotificationHistory() {
        return this.notificationHistory;
    }
}
exports.PhoneNotification = PhoneNotification;
