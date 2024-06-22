import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersDocument, User } from './users.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UsersDocument}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
