"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNotification = void 0;
class PhoneNotification {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    sendNotification(message) {
        console.log(`Sending notification via phone: ${message}`);
    }
}
exports.PhoneNotification = PhoneNotification;
