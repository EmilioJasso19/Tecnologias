export interface INotification {
    notificationHistory: {msg: string, type: string}[];
    sendNotification(message: string): void;
}
