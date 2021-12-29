import { Injectable, OnModuleInit } from '@nestjs/common';
import * as flagsmith from 'flagsmith-nodejs';

/**
 * @link https://docs.flagsmith.com/clients/node
 */
@Injectable()
export class FlagsmithService implements OnModuleInit {
  /**
   * onModuleInit
   * @description Init flagsmith package
   * @link https://docs.flagsmith.com/clients/node#available-options
   */
  async onModuleInit(): Promise<void> {
    flagsmith.init({
      // TODO: Change this id to yours
      environmentID: 'X7AF6HhD7zGDECjv2cx9j4',
      onError: (err: any) => {
        console.error('FlagsmithService:onModuleInit', JSON.stringify(err));
      },
    });
  }

  async isActive(key: string): Promise<boolean> {
    return await flagsmith.hasFeature(key);
  }

  async getValue(key: string): Promise<string | number | boolean> {
    return await flagsmith.getValue(key);
  }
}
