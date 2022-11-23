import { HttpModule } from "@nestjs/axios";
import { JwtService } from "@nestjs/jwt";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity]), HttpModule],
    providers: [ProductService, JwtService],
    controllers: [ProductController],
  })
  export class ProductModule {}