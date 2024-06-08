import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FightsService } from './fights.service';
import { Prisma } from '@prisma/client';

@Controller('fights')
export class FightsController {
  constructor(private readonly fightsService: FightsService) {}

  @Post()
  create(@Body() {score1, score2, fighter1Id, fighter2Id, poolID}: {score1:number, score2: number, fighter1Id: number, fighter2Id: number, poolID: number}) {
    const pool:Prisma.PoolCreateNestedOneWithoutFightsInput = {connect: {id:+poolID}};
    const createFightDto = {
      score1,
      score2,
      fighter1Id,
      fighter2Id,
      pool
    }
    return this.fightsService.create(createFightDto);
  }

  @Get()
  findAll() {
    return this.fightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fightsService.findOne({id:+id});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFightDto: Prisma.FightUpdateInput) {
    return this.fightsService.update({id:+id}, updateFightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightsService.remove({id:+id});
  }
}
