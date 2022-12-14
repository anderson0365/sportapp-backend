import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import { config} from '../config';
import { MessageHandler } from './consumer.service';


AWS.config.update({
    region: config.AWS_REGION,
    accessKeyId: config.ACCESS_KEY_ID,
    secretAccessKey: config.SECRET_ACCESS_KEY,
});
@Module({
    imports: [
        SqsModule.register({
            consumers: [
                {
                    name: config.QUEUE, // name of the queue 
                    queueUrl: config.QUEUE_URL, // the url of the queue
                    region: config.AWS_REGION,
                },
            ],
            producers: [],
        }),
    ],
    controllers: [],
    providers: [MessageHandler],
})
export class ConsumerModule { }
