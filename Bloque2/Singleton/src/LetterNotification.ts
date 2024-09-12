import { INotification } from "./INotification";

export class LetterNotification implements INotification {
    sendNotification(message: string): void {
        console.log(`Sending notification via letter: ${message}`)
    }

}