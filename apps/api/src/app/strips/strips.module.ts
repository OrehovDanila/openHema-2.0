import { Module } from '@nestjs/common';
import { StripsService } from './strips.service';
import { StripsController } from './strips.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StripsController],
  providers: [StripsService],
})
export class StripsModule {}
