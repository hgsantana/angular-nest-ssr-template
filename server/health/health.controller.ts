import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  healthCheck() {
    console.log('New healthCheck');
    return { server: 'OK' };
  }
}
