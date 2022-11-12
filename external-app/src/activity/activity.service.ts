import { Injectable } from '@nestjs/common';
import { ActivityDto } from './dto/activity.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class ActivityService {

    activity_descriptions = [
        'Subida a “La Loma del Diablo”',
        'Bajada a “La Loma del Diablo”',
        'Trayecto “Los Palos Verdes”',
        'Carrera Sprint: Los picos de Doña Juana',
        'Trayecto “La Selva”',
        'Carrera Sprint: Segovia',
        'La ida a “Los Llanos”',
        'Un día en la Ciudad',
        'La gran parada',
        'Reto “La Colina”',
        'Reto “Los Llanos”',
        'La ida a “Los Pinos de Santa Clara”',
        'La ida a “Santa Clara de Oso”',
        'Subida “Las Palmas”',
        'Bajada “Las Palmas”'
    ]

    getAllActivities(): ActivityDto[] {
        const result = []
        for (let i = 0; i < 10; i++) {
            result.push(
                new ActivityDto(
                    this.activity_descriptions[Math.floor(Math.random() * this.activity_descriptions.length)],
                    faker.date.between('2021-01-01T00:00:00.000Z', '2022-11-01T00:00:00.000Z'))
            )
        }

        result.sort((a, b) => {
            let fa = a.date,
                fb = b.date;
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        });

        return result;
    }
}
