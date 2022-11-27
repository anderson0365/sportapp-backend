import { Injectable } from '@nestjs/common';
import { NotificationDto } from './dtos/notification.dto';

@Injectable()
export class MonitorService {

    public notifications = [
        "Frec. Cardiaca elevada",
        "Saturación de oxigeno baja",
        "Accidente cerca a tu lugar de entreno",
        "Temperatura corporal baja",
        "Frec. Respiratoria baja"
    ]
    public getNotifications(notifacionNumber: number){
        let notificationsToSent : NotificationDto[] = [];

        if (notifacionNumber == 0) {
            return notificationsToSent
        }
        let randomNotifications = this.getRandom(this.notifications, notifacionNumber)

        for (let notification of randomNotifications){
            notificationsToSent.push(new NotificationDto(notification, new Date().toISOString().
            replace(/T/, ' ').      // replace T with a space
            replace(/\..+/, '')))
        }

        console.log(notificationsToSent)
        return notificationsToSent
    }

    public getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
}
