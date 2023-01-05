import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddonsController } from './addons/addons.controller';
import { AddonsService } from './addons/addons.service';

@Module({
  imports: [],
  controllers: [AppController, AddonsController],
  providers: [AppService, AddonsService],
})
export class AppModule {}
