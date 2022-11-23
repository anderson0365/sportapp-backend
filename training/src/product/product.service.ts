import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { PartnerEntity } from '../partner/partner.entity';
import { parentPort } from 'worker_threads';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
  private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findByPartnerId(partnerId: string): Promise<ProductEntity[]> {
    let partner = new PartnerEntity();
    partner.id = partnerId;
    const products: ProductEntity[] = await this.productRepository.find({where: {partner}});
    return products;
    }

    async create(partnerId: string, product: ProductEntity): Promise<ProductEntity> {
        let partner = new PartnerEntity();
        partner.id = partnerId;
        product.partner = partner;
        return await this.productRepository.save(product);
      }

}