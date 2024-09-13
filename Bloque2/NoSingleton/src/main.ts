import { DatabaseNotification } from "./DatabaseNotification";
import { EmailNotification } from "./EmailNotification";
import { PhoneNotification } from "./PhoneNotification";

const dbNotification = new DatabaseNotification(1);
const emailNotification = new EmailNotification('henry@gay.com');
const phoneNotification = new PhoneNotification('123-456-7890');

dbNotification.sendNotification('new user registered')
emailNotification.sendNotification('confirm your email')
phoneNotification.sendNotification('this is your code verification: 6789')

let notificationGlobalHistory = [...dbNotification.getNotificationHistory(), ...emailNotification.getNotificationHistory(), ...phoneNotification.getNotificationHistory()]
console.log(notificationGlobalHistory)