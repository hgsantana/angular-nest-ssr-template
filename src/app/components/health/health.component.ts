import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent {
  apiStatus = 'loading'
  constructor(api: ApiService) {
    api.checkHealth().subscribe({
      next: (health) => {
        this.apiStatus = health.api
      },
      error: (err) => {
        console.error(err)
        this.apiStatus = 'OFF'
      },
    })
  }
}
