import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BugReportModule } from './bug-report/bug-report.module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    BugReportModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CacheModule.register(),
    RedisModule,
  ],
})
export class AppModule {}
