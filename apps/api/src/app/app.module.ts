import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NominationsModule } from './nominations/nominations.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { FightersModule } from './fighters/fighters.module';
import { FightsModule } from './fights/fights.module';
import { PoolsModule } from './pools/pools.module';
import { StripsModule } from './strips/strips.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NominationsModule,
    PrismaModule,
    FightersModule,
    FightsModule,
    PoolsModule,
    StripsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
