import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { Challenge } from '../challenge/challenge.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SponsorService {
  constructor(
    @InjectModel(Challenge.name) private challengeModel: Model<Challenge>,
  ) {}

  async create(createSponsorDto: CreateSponsorDto, challengeId: string) {
    const challenge: any = await this.challengeModel
      .findById(challengeId)
      .exec();
    if (!challenge) {
      throw new NotFoundException(`Challenge with id ${challengeId} not found`);
    }

    const sponsorId = uuidv4();
    challenge.sponsers.set(sponsorId, createSponsorDto);

    return challenge.save();
  }

  async findOne(challengeId: string, sponsorId: string) {
    const challenge: any = await this.challengeModel
    .findById(challengeId)
    .exec();

    return challenge.sponsers.get(sponsorId);
  }

  async update(
    updateSponsorDto: UpdateSponsorDto,
    challengeId: string,
    sponsorId: string,
  ) {
    this.challengeModel.findOneAndUpdate(
      {
      _id: challengeId,
      'sponsers._id': sponsorId
      },
      {
        $set: { 'sponsers.$': updateSponsorDto }
      },
      { new: true}
    ).exec();
  }

  async remove(challengeId: string, sponsorId: string) {
    return await this.challengeModel
      .findOneAndUpdate(
        { _id: challengeId },
        { $pull: { sponsors: { _id: sponsorId } } },
        { new: true }
      )
      .exec();
  }
}
