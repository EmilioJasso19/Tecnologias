import { INotification } from "./INotification";

export class PhoneNotification implements INotification {
    sendNotification(message: string): void {
        console.log(`Sending notification via phone: ${message}`);
    }
}