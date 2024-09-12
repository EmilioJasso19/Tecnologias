import { DatabaseNotification } from "./DatabaseNotification";
import { EmailNotification } from "./EmailNotification";
import { NotificationManager } from "./NotificationManager";
import { PhoneNotification } from "./PhoneNotification";
import { LetterNotification } from "./LetterNotification";

const notificationManager = NotificationManager.getInstance();
const notificationManager2 = NotificationManager.getInstance();
 
const dbNotification = new DatabaseNotification();
const emailNotification = new EmailNotification();
const phoneNotification = new PhoneNotification();
const letterNotification = new LetterNotification();

notificationManager.sendNotification('New user registered!', dbNotification);
notificationManager.sendNotification('Welcome email to the new user', emailNotification);
notificationManager2.sendNotification('SMS to notify the new user', phoneNotification);
NotificationManager.getInstance().sendNotification('Letter to notify the new user', letterNotification);

console.log('Notification history:', notificationManager.getNotificationHistory());