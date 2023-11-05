import { Module } from '@nestjs/common'
import { AngularUniversalModule } from '@nestjs/ng-universal'
import { join } from 'path'
import AppServerModule from '../src/main.server'
import { HealthController } from './controllers/health/health.controller'

const BROWSER_FOLDER =
  process.env['PORT'] === '8080'
    ? './browser'
    : 'dist/a16n10ssr-template/browser'
@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), BROWSER_FOLDER),
    }),
  ],
  controllers: [HealthController],
})
export class AppModule {}
