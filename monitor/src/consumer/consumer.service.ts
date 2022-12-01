import { Injectable } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import { config } from '../config';


@Injectable()
export class MessageHandler {
    constructor() { }

    async handleMessage(message: AWS.SQS.Message) {
        const data: any = JSON.parse(message.Body) as {
            message: string;
        };
        console.log(data)


        // use the data and consume it the way you want // 

    }
}