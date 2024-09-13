import { INotification } from "./INotification";

export class DatabaseNotification implements INotification {
    private userID: number;

    constructor(userID: number) {
        this.userID = userID;
    }

    sendNotification(message: string): void {
        console.log(`Saving user: ${this.userID}, ${message}`);
    }
}