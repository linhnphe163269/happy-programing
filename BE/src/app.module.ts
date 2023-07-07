import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SkillsModule } from './skills/skills.module';
import { CodeRequestModule } from './code-request/code-request.module';

@Module({
  imports: [UsersModule, AuthModule, SkillsModule, CodeRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
