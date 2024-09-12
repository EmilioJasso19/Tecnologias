import { DatabaseNotification } from "./DatabaseNotification";
import { EmailNotification } from "./EmailNotification";
import { PhoneNotification } from "./PhoneNotification";

const dbNotification = new DatabaseNotification();
const emailNotification = new EmailNotification();
const phoneNotification = new PhoneNotification();

dbNotification.sendNotification('new user registered')
emailNotification.sendNotification('confirm your email')
phoneNotification.sendNotification('this is your code verification: 6789')

let notificationGlobalHistory = [...dbNotification.getNotificationHistory(), ...emailNotification.getNotificationHistory(), ...phoneNotification.getNotificationHistory()]
console.log(notificationGlobalHistory)