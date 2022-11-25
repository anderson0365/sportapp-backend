import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { config } from '../config';
@Injectable()
export class MessageProducer {
    constructor(private readonly sqsService: SqsService) { }

    async sendMessage(body: any) {

        try {
            await this.sqsService.send(config.QUEUE, {
                id : "2",
                body: body,
              });
            console.log("enviado")
        } catch (error) {
            console.log('error in producing image!', error);
        }

    }
}
