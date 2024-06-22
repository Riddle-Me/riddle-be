import { Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sponsor')
@Controller('challenge/:challengeId/sponsor')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  @Post()
  create(@Body() createSponsorDto: CreateSponsorDto, @Param('challengeId') challengeId: string) {
    return this.sponsorService.create(createSponsorDto, challengeId);
  }

  @Put(':id')
  updateSponsor(@Param('challengeId') challengeId: string, @Param('id') sponsorId: string, @Body() updateSponsorDto: UpdateSponsorDto) {
    return this.sponsorService.update(updateSponsorDto, challengeId, sponsorId);
  }

  @Delete(':id')
  remove(@Param('challengeId') challengeId: string, @Param('id') id: string) {
    return this.sponsorService.remove(challengeId, id);
  }
}
