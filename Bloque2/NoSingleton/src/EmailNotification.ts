import { INotification } from "./INotification";

export class EmailNotification implements INotification {
    notificationHistory: { msg: string; type: INotification; }[] = [];

    sendNotification(message: string): void {
        console.log(`Sending notification via Email: ${message}`)
        this.notificationHistory.push({msg: message, type: new EmailNotification})
    }

    public getNotificationHistory(): Array<{ msg: string, type: INotification }> {
        return this.notificationHistory;
    }
}
