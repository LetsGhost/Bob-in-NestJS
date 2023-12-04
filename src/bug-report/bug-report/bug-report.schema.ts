import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BugReport extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  tags: string[];

  @Prop()
  tag: string;

  @Prop()
  status: string;

  @Prop()
  priority: string;

  @Prop()
  reportedBy: string;

  @Prop()
  createdAt: Date;
}

export const BugReportSchema = SchemaFactory.createForClass(BugReport);
