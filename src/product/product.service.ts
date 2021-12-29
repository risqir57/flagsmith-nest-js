import { Injectable } from '@nestjs/common';
import { FlagsmithKeyEnum } from '../flagsmith/enum/flagsmith.enum';
import { FlagsmithService } from '../flagsmith/flagsmith.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly flagsmithService: FlagsmithService) {}

  async create(createProductDto: CreateProductDto): Promise<any> {
    const data = await this.flagsmithService.getValue(
      FlagsmithKeyEnum.CREATE_PRODUCT,
    );

    return data;
  }

  async findAll(): Promise<any> {
    const data = await this.flagsmithService.getValue(
      FlagsmithKeyEnum.GET_PRODUCT,
    );

    const jsonData = JSON.parse(data as string);

    return jsonData;
  }

  async findOne(id: number): Promise<any> {
    const data = await this.flagsmithService.getValue(
      FlagsmithKeyEnum.GET_DETAIL_PRODUCT,
    );

    const jsonData = JSON.parse(data as string);

    return jsonData;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    const data = await this.flagsmithService.getValue(
      FlagsmithKeyEnum.UPDATE_PRODUCT,
    );

    return data;
  }

  async remove(id: number): Promise<any> {
    const data = await this.flagsmithService.getValue(
      FlagsmithKeyEnum.DELETE_PRODUCT,
    );

    return data;
  }
}
