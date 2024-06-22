import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { SponserDocument, Sponser } from '../sponsor/sponser.schema';
import { ChallengeDocument, Challenge } from '../challenge/challenge.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Challenge.name, schema: ChallengeDocument },
      { name: Sponser.name, schema: SponserDocument },
    ]),
  ],
  controllers: [ChallengeController],
  providers: [ChallengeService],
})
export class ChallengeModule {}
