import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWinnerDto } from './dto/create-winner.dto';
import { UpdateWinnerDto } from './dto/update-winner.dto';
import { Challenge } from '../challenge/challenge.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WinnerService {
  constructor(
    @InjectModel(Challenge.name) private challengeModel: Model<Challenge>,
  ) {}

  async create(createWinnerDto: CreateWinnerDto, challengeId: string) {
    const challenge: any = await this.challengeModel
      .findById(challengeId)
      .exec();
    if (!challenge) {
      throw new NotFoundException(`Challenge with id ${challengeId} not found`);
    }

    const winnerId = uuidv4();
    challenge.winners[winnerId] = createWinnerDto;

    return challenge.save();
  }

  async findAll(challengeId: string) {
    const challenge: any = await this.challengeModel
      .findById(challengeId)
      .exec();
    return challenge.winners;
  }

  async findOne(challengeId: string, winnerId: string) {
    const challenge: any = await this.challengeModel
      .findById(challengeId)
      .exec();
    return challenge.winners[winnerId];
  }

  async update(
    updateWinnerDto: UpdateWinnerDto,
    challengeId: string,
    winnerId: string,
  ) {
    const challenge: any = await this.challengeModel.findById(challengeId).exec();

    if (!challenge) {
      throw new NotFoundException(`Challenge with id ${challengeId} not found`);
    }

    const winners: any = challenge.winners;
    if (!winners[winnerId]) {
      throw new NotFoundException(`Winner with id ${winnerId} not found in the challenge`);
    }

    challenge.winners[winnerId] = {...winners[winnerId],  ...updateWinnerDto};
    await challenge.markModified('winners');
    await challenge.save();
    return challenge;
  }

  async remove(challengeId: string, winnerId: string) {
    return await this.challengeModel
      .findOneAndUpdate(
        { _id: challengeId },
        { $pull: { winners: { _id: winnerId } } },
        { new: true }
      )
      .exec();
  }
}

