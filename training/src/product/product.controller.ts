import { Controller, Get, UseInterceptors, UseGuards, Param, Post, Body } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';

@Controller('products')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @UseGuards(JwtAuthGuard)
    @Get(':partnerId')
    async findByPartnerId(@Param('partnerId') partnerId: string) {
      return await this.productService.findByPartnerId(partnerId);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':partnerId')
    async create(@Param('partnerId') partnerId: string, @Body() product: ProductEntity) {
      return await this.productService.create(partnerId, product);
    }

}