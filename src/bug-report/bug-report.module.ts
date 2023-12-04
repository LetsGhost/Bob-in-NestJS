import { Module } from '@nestjs/common';
import { BugReportService } from './bug-report/bug-report.service';
import { BugReportController } from './bug-report/bug-report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BugReportSchema } from './bug-report/bug-report.schema';

@Module({
  providers: [BugReportService],
  controllers: [BugReportController],
  imports: [
    MongooseModule.forFeature([{ name: 'BugReport', schema: BugReportSchema }]),
  ],
})
export class BugReportModule {}
