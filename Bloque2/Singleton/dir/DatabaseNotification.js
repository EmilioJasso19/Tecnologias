"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseNotification = void 0;
class DatabaseNotification {
    constructor(userID) {
        this.userID = userID;
    }
    sendNotification(message) {
        console.log(`Saving user: ${this.userID}, ${message}`);
    }
}
exports.DatabaseNotification = DatabaseNotification;
