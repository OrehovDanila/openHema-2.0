import { Injectable } from '@nestjs/common';
import { Strip, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StripsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createStripDto: Prisma.StripCreateInput) : Promise<Strip> {
    return this.prisma.strip.create({
      data: createStripDto
    });
  }

  async findAll(): Promise<Strip[]> {
    return this.prisma.strip.findMany();
  }

  async findOne(where: Prisma.StripWhereUniqueInput ): Promise<Strip | null> {
    return this.prisma.strip.findUnique({
      where,
    });
  }

  async update(where: Prisma.StripWhereUniqueInput, updateStripDto: Prisma.StripUpdateInput) : Promise<Strip> {
    return this.prisma.strip.update({
      where,
      data: updateStripDto
    });
  }

  async remove(where: Prisma.StripWhereUniqueInput): Promise<Strip> {
    return this.prisma.strip.delete({where});
  }
}
