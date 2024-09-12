import { INotification } from "./INotification";

export class DatabaseNotification implements INotification {
    notificationHistory: { msg: string; type: INotification; }[] = [];
    sendNotification(message: string): void {
        console.log(`Sending notification via DB: ${message}`)
        this.notificationHistory.push({msg: message, type: new DatabaseNotification})
    }

    public getNotificationHistory(): Array<{ msg: string, type: INotification }> {
        return this.notificationHistory;
    }
}