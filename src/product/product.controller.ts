import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FlagsmithService } from '../flagsmith/flagsmith.service';
import { FlagsmithKeyEnum } from '../flagsmith/enum/flagsmith.enum';
import { BaseResponseDto } from '../common/dto/base-response.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly flagsmithService: FlagsmithService,
  ) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<BaseResponseDto<any>> {
    const isActionActive = await this.flagsmithService.isActive(
      FlagsmithKeyEnum.CREATE_PRODUCT,
    );

    if (!isActionActive) throw new NotFoundException('Route is not found');

    const data = await this.productService.create(createProductDto);
    return BaseResponseDto.successResponse(data, 'Create Product');
  }

  @Get()
  async findAll(): Promise<BaseResponseDto<any>> {
    const isActionActive = await this.flagsmithService.isActive(
      FlagsmithKeyEnum.GET_PRODUCT,
    );

    if (!isActionActive) throw new NotFoundException('Route is not found');

    const data = await this.productService.findAll();
    return BaseResponseDto.successResponse(
      data,
      'Success get product list, json value from flagsmith',
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BaseResponseDto<any>> {
    const isActionActive = await this.flagsmithService.isActive(
      FlagsmithKeyEnum.GET_DETAIL_PRODUCT,
    );

    if (!isActionActive) throw new NotFoundException('Route is not found');

    const data = await this.productService.findOne(+id);
    return BaseResponseDto.successResponse(
      data,
      'Success get product detail, json value from flagsmith',
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<BaseResponseDto<any>> {
    const isActionActive = await this.flagsmithService.isActive(
      FlagsmithKeyEnum.CREATE_PRODUCT,
    );

    if (!isActionActive) throw new NotFoundException('Route is not found');
    const data = await this.productService.update(+id, updateProductDto);
    return BaseResponseDto.successResponse(
      data,
      'Success get value from flagsmith',
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<BaseResponseDto<any>> {
    const isActionActive = await this.flagsmithService.isActive(
      FlagsmithKeyEnum.DELETE_PRODUCT,
    );

    if (!isActionActive) throw new NotFoundException('Route is not found');

    const data = await this.productService.remove(+id);
    return BaseResponseDto.successResponse(
      data,
      'Success get value from flagsmith',
    );
  }
}
