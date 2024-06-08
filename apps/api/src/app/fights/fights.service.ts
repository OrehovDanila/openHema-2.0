import { Injectable } from '@nestjs/common';
import { Fight, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FightsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createFightDto: Prisma.FightCreateInput) : Promise<Fight> {
    return this.prisma.fight.create({
      data: createFightDto
    });
  }

  async findAll(): Promise<Fight[]> {
    return this.prisma.fight.findMany();
  }

  async findOne(where: Prisma.FightWhereUniqueInput ): Promise<Fight | null> {
    return this.prisma.fight.findUnique({
      where,
    });
  }

  async update(where: Prisma.FightWhereUniqueInput, updateFightDto: Prisma.FightUpdateInput) : Promise<Fight> {
    return this.prisma.fight.update({
      where,
      data: updateFightDto
    });
  }

  async remove(where: Prisma.FightWhereUniqueInput): Promise<Fight> {
    return this.prisma.fight.delete({where});
  }
}
