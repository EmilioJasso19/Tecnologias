import { INotification } from "./INotification";

export class PhoneNotification implements INotification {
    notificationHistory: { msg: string; type: INotification; }[] = [];

    sendNotification(message: string): void {
        console.log(`Sending notification via Phone: ${message}`)

        this.notificationHistory.push({msg: message, type: new PhoneNotification})
    }

    public getNotificationHistory(): Array<{ msg: string, type: INotification }> {
        return this.notificationHistory;
    }
}