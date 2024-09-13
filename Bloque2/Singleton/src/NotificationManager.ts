import {INotification} from './INotification'

export class NotificationManager {
    private static instance: NotificationManager;
    private notificationHistory: { msg: string, type: string }[] = [];

    private constructor() {}

    public static getInstance(): NotificationManager {
        if (!NotificationManager.instance) {
            NotificationManager.instance = new NotificationManager();
            console.log('Me creé por primera vez')
        }
        console.log('Ya habia sido creado')
        return NotificationManager.instance;
    }

    public sendNotification(message: string, notifier: INotification): void {
        notifier.sendNotification(message);
        this.notificationHistory.push({msg: message, type: notifier.constructor.name});
    }

    public getNotificationHistory(): { msg: string, type: string }[] {
        return this.notificationHistory;
    }
}
