import { INotification } from "./INotification";

export class DatabaseNotification implements INotification {
    private userID: number;
    notificationHistory: { msg: string; type: string; }[];

    public constructor(userID: number) {
        this.userID = userID;
        this.notificationHistory = [];
    }

    public sendNotification(message: string): void {
        console.log(`Sending notification via DB: ${message} to user: ${this.userID}`)
        this.notificationHistory.push({msg: message, type: this.constructor.name})
    }

    public getNotificationHistory(): Array<{ msg: string, type: string }> {
        return this.notificationHistory;
    }
}