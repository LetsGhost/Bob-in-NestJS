import { Controller } from '@nestjs/common';
import { RedisService } from './redis.service';
import { Get } from '@nestjs/common';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}
  @Get()
  async getResourceUsage(): Promise<any> {
    return await this.redisService.getResourceUsage();
  }
}
