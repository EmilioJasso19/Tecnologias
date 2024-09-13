import { INotification } from "./INotification";

export class EmailNotification implements INotification {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }
    
    sendNotification(message: string): void {
        console.log(`Sending notification via email: ${message}`);
    }
}
