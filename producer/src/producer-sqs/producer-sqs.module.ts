import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';

import * as AWS from 'aws-sdk';
import { config } from '../config';
import { MessageProducer } from './producer-sqs.service';

AWS.config.update({
    region: config.AWS_REGION, // aws region
    accessKeyId: config.ACCESS_KEY_ID, // aws access key id
    secretAccessKey: config.SECRET_ACCESS_KEY, // aws secret access key
});


@Module({
    imports: [
        SqsModule.register({
            consumers: [],
            producers: [
                {
                    name: config.QUEUE, // name of the queue
                    queueUrl: config.QUEUE_URL, 
                    region: config.AWS_REGION, // url of the queue
                },
            ],
        }),
    ],
    controllers: [],
    providers: [MessageProducer],
    exports: [MessageProducer]
})
export class ProducerSqsModule {}
