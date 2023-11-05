import { Routes } from '@angular/router'
import { HealthComponent } from './components/health/health.component'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HealthComponent,
  },
]
