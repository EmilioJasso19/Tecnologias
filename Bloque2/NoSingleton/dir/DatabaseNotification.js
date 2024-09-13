"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseNotification = void 0;
class DatabaseNotification {
    constructor(userID) {
        this.notificationHistory = [];
        this.userID = userID;
    }
    sendNotification(message) {
        console.log(`Sending notification via DB: ${message} to user: ${this.userID}`);
        this.notificationHistory.push({ msg: message, type: this.constructor.name });
    }
    getNotificationHistory() {
        return this.notificationHistory;
    }
}
exports.DatabaseNotification = DatabaseNotification;
