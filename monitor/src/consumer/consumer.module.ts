import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import { config} from '../config';
import { MessageHandler } from './consumer.service';

@Module({
    controllers: [],
    providers: [MessageHandler],
})
export class ConsumerModule { }
