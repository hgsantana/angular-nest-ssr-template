import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  enableProdMode,
} from '@angular/core'
import { provideRouter } from '@angular/router'

import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common'
import { provideHttpClient } from '@angular/common/http'
import pt from '@angular/common/locales/pt'
import { provideClientHydration } from '@angular/platform-browser'
import { environment } from 'src/environments/environment'
import { routes } from './app.routes'

registerLocaleData(pt)

if (environment.production) {
  enableProdMode()
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt_BR' },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'dd/MM/yyyy' },
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
}
