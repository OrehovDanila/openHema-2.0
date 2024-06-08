import { Injectable } from '@nestjs/common';
import { Pool, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PoolsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createPoolDto: Prisma.PoolCreateInput) : Promise<Pool> {
    return this.prisma.pool.create({
      data: createPoolDto
    });
  }

  async findAll(): Promise<Pool[]> {
    return this.prisma.pool.findMany();
  }

  async findOne(where: Prisma.PoolWhereUniqueInput ): Promise<Pool | null> {
    return this.prisma.pool.findUnique({
      where,
    });
  }

  async update(where: Prisma.PoolWhereUniqueInput, updatePoolDto: Prisma.PoolUpdateInput) : Promise<Pool> {
    return this.prisma.pool.update({
      where,
      data: updatePoolDto
    });
  }

  async remove(where: Prisma.PoolWhereUniqueInput): Promise<Pool> {
    return this.prisma.pool.delete({where});
  }
}
