import { Module } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { SponsorController } from './sponsor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sponser, SponserDocument } from './sponser.schema';
import { Challenge, ChallengeDocument } from '../challenge/challenge.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Challenge.name, schema: ChallengeDocument },
      { name: Sponser.name, schema: SponserDocument },
    ]),
  ],
  controllers: [SponsorController],
  providers: [SponsorService],
})
export class SponsorModule {}
