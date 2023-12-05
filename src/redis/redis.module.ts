import { Module } from '@nestjs/common';
import { RedisService } from './redis/redis.service';
import { RedisController } from './redis/redis.controller';

@Module({
  providers: [RedisService],
  controllers: [RedisController]
})
export class RedisModule {}
