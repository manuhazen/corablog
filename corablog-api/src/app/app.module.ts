import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from '@corablog/blog';

@Module({
  imports: [BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
