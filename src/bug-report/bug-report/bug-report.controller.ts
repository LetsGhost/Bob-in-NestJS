import { Controller, Post, Get, Body, Patch, Param } from '@nestjs/common';
import { BugReportService } from './bug-report.service';

@Controller('bug-report')
export class BugReportController {
  constructor(private bugReportService: BugReportService) {}

  @Post()
  async create(@Body() createBugReportDto: any): Promise<any> {
    const result = await this.bugReportService.create(createBugReportDto);
    return result;
  }

  @Get()
  async findAll() {
    const result = await this.bugReportService.findAll();
    return result;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBugReportDto: any) {
    const result = await this.bugReportService.update(id, updateBugReportDto);
    return result;
  }
}
