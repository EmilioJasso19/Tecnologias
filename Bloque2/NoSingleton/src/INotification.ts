export interface INotification {
    notificationHistory: Array<{msg: string, type: INotification}>;
    sendNotification(message: string): void;
}
