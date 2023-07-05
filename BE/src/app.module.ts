import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoderequestModule } from './coderequest/coderequest.module';

@Module({
  imports: [UsersModule, CoderequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
