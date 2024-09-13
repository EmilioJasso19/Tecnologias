import { INotification } from "./INotification";

export class PhoneNotification implements INotification {
    private phoneNumber: string;

    constructor(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }
    
    sendNotification(message: string): void {
        console.log(`Sending notification via phone: ${message}`);
    }
}