import { Injectable } from '@nestjs/common';
import { Fighter, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FightersService {
  constructor(private readonly prisma: PrismaService){}

  async create(createFighterDto: Prisma.FighterCreateInput) : Promise<Fighter> {
    return this.prisma.fighter.create({
      data: createFighterDto
    });
  }

  async findAll(): Promise<Fighter[]> {
    return this.prisma.fighter.findMany();
  }

  async findOne( where: Prisma.FighterWhereUniqueInput ): Promise<Fighter | null> {
    return this.prisma.fighter.findUnique({
      where,
    });
  }

  async update(where: Prisma.FighterWhereUniqueInput, updateFighterDto: Prisma.FighterUpdateInput) : Promise<Fighter> {
    return this.prisma.fighter.update({
      where,
      data: updateFighterDto
    });
  }

  async remove(where: Prisma.FighterWhereUniqueInput): Promise<Fighter> {
    return this.prisma.fighter.delete({where});
  }
}
