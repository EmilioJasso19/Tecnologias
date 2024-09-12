import { INotification } from "./INotification";

export class EmailNotification implements INotification {
    sendNotification(message: string): void {
        console.log(`Sending notification via email: ${message}`);
    }
}
