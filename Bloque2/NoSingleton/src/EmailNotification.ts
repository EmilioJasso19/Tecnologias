import { INotification } from "./INotification";

export class EmailNotification implements INotification {
    private email: string;
    notificationHistory: { msg: string; type: string; }[] = [];

    constructor(email: string) {
        this.email = email;
    }
    sendNotification(message: string): void {
        console.log(`Sending notification via Email: ${message} to email address: ${this.email}`)
        this.notificationHistory.push({msg: message, type: this.constructor.name})
    }

    public getNotificationHistory(): Array<{ msg: string, type: string }> {
        return this.notificationHistory;
    }
}
