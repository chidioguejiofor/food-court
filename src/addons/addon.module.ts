import { Module } from '@nestjs/common';
import { AddonsController } from './addons.controller';
import { AddonsService } from './addons.service';

@Module({
  imports: [],
  controllers: [AddonsController],
  providers: [AddonsService],
})
export class AddonModule {}
