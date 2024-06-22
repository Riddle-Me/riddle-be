import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChallengeModule } from './challenge/challenge.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { WinnerModule } from './winner/winner.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule, ChallengeModule, SponsorModule, WinnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
