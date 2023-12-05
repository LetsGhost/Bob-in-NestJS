import { Injectable } from '@nestjs/common';
import { BugReport } from './bug-report.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class BugReportService {
  constructor(
    @InjectModel(BugReport.name) private bugReportModel: Model<BugReport>,
  ) {}

  async create(bugReport: BugReport): Promise<BugReport> {
    const createdBugReport = new this.bugReportModel(bugReport);
    return createdBugReport.save();
  }

  async findAll(): Promise<BugReport[]> {
    return this.bugReportModel.find().exec();
  }

  async findOne(id: string): Promise<BugReport> {
    return this.bugReportModel.findById(id);
  }

  async update(id: string, bugReport: BugReport): Promise<BugReport> {
    return this.bugReportModel.findByIdAndUpdate(id, bugReport, {
      new: true,
    });
  }
}
