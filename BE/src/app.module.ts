import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoderequestModule } from './coderequest/coderequest.module';
import { MentorModule } from './mentor/mentor.module';
import { MenteeModule } from './mentee/mentee.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [UsersModule, CoderequestModule, MentorModule, MenteeModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
