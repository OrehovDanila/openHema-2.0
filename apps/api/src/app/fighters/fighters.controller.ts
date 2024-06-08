import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FightersService } from './fighters.service';

@Controller('fighters')
export class FightersController {
  constructor(private readonly fightersService: FightersService) {}

  @Post()
  create(@Body() createFighterDto: { name:string, club:string, rating: number }) {
    return this.fightersService.create(createFighterDto);
  }

  @Get()
  findAll() {
    return this.fightersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fightersService.findOne({id: Number(id)});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFighterDto: Prisma.FighterUpdateInput) {
    return this.fightersService.update({id:+id}, updateFighterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightersService.remove({id:+id});
  }
}
