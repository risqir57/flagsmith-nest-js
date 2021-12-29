import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { FlagsmithModule } from '../flagsmith/flagsmith.module';

@Module({
  imports: [FlagsmithModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
