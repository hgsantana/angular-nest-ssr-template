import { Controller, Get } from '@nestjs/common'
import { HealthResponse } from 'server/models/health-response.model'

@Controller('health')
export class HealthController {
  @Get()
  healthCheck(): HealthResponse {
    console.log('New healthCheck')
    return { api: 'OK' }
  }
}
