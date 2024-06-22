import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(name: string) {
    return this.userModel.find({name: name}).exec();
  }

  findById(id: string) {
    return this.userModel.findOne({_id: id}).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    console.log(`is: ${id}, userDto: ${updateUserDto}`);
    //return await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true}).exec();
    return await this.userModel.findOneAndUpdate({_id: id}, updateUserDto, {new: true}).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
