import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Challenge } from './challenge.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel(Challenge.name) private challengeModel: Model<Challenge>,
  ) {}

  create(createChallengeDto: CreateChallengeDto) {
    const challange = new this.challengeModel(createChallengeDto);
    return challange.save();
  }

  findAll() {
    return this.challengeModel.find().exec();
  }

  findOne(name: string) {
    return this.challengeModel.find({ name: name }).exec();
  }

  findById(id: string) {
    return this.challengeModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateChallengeDto: UpdateChallengeDto) {
    return await this.challengeModel
      .findOneAndUpdate({ _id: id }, updateChallengeDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.challengeModel.findOneAndDelete({ _id: id });
  }
}
