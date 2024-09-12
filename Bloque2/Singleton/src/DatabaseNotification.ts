import { INotification } from "./INotification";

export class DatabaseNotification implements INotification {
    sendNotification(message: string): void {
        console.log(`Saving notification in database: ${message}`);
    }
}