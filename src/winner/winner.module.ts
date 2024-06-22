import { Module } from '@nestjs/common';
import { WinnerService } from './winner.service';
import { WinnerController } from './winner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Challenge, ChallengeDocument } from '../challenge/challenge.schema';
import { Winner, WinnerDocument} from '../winner/winner.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Challenge.name, schema: ChallengeDocument },
      { name: Winner.name, schema: WinnerDocument },
    ]),
  ],
  controllers: [WinnerController],
  providers: [WinnerService],
})
export class WinnerModule {}
