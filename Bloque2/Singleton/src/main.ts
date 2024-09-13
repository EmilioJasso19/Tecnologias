import { DatabaseNotification } from "./DatabaseNotification";
import { EmailNotification } from "./EmailNotification";
import { NotificationManager } from "./NotificationManager";
import { PhoneNotification } from "./PhoneNotification";
import { LetterNotification } from "./LetterNotification";

const notificationManager = NotificationManager.getInstance();
const notificationManager2 = NotificationManager.getInstance();
 
const dbNotification = new DatabaseNotification(1);
const emailNotification = new EmailNotification("cor@eo.mx");
const phoneNotification = new PhoneNotification("123");
const letterNotification = new LetterNotification();

notificationManager.sendNotification('new user registered', dbNotification);
notificationManager.sendNotification('comfirm your email', emailNotification);
notificationManager2.sendNotification('your activation code is 3256', phoneNotification);
NotificationManager.getInstance().sendNotification('why do you keepo using letters?', letterNotification);

console.log('Notification history:', notificationManager.getNotificationHistory());