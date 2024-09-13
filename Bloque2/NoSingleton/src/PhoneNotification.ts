import { INotification } from "./INotification";

export class PhoneNotification implements INotification {
    private phoneNumber: string
    notificationHistory: { msg: string; type: string; }[] = [];

    constructor(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    sendNotification(message: string): void {
        console.log(`Sending notification via Phone: ${message} to ${this.phoneNumber}`)

        this.notificationHistory.push({msg: message, type: this.constructor.name})
    }

    public getNotificationHistory(): { msg: string, type: string }[] {
        return this.notificationHistory;
    }
}