import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WinnerService } from './winner.service';
import { CreateWinnerDto } from './dto/create-winner.dto';
import { UpdateWinnerDto } from './dto/update-winner.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('winner')
@Controller('challenge/:challengeId/winner')
export class WinnerController {
  constructor(private readonly winnerService: WinnerService) {}

  @Post()
  create(@Body() createWinnerDto: CreateWinnerDto, @Param('challengeId') challengeId: string) {
    return this.winnerService.create(createWinnerDto, challengeId);
  }

  @Get()
  findAll(@Param('challengeId') challengeId: string) {
    return this.winnerService.findAll(challengeId);
  }

  @Get(':id')
  findOne(@Param('challengeId') challengeId: string, @Param('id') id: string) {
    return this.winnerService.findOne(challengeId, id);
  }

  @Put(':id')
  update(@Param('challengeId') challengeId: string, @Param('id') id: string, @Body() updateWinnerDto: UpdateWinnerDto) {
    return this.winnerService.update(updateWinnerDto, challengeId, id);
  }

  @Delete(':id')
  remove(@Param('challengeId') challengeId: string, @Param('id') id: string) {
    return this.winnerService.remove(challengeId, id);
  }
}
