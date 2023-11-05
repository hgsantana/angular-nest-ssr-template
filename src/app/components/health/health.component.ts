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
  serverStatus = 'loading'
  constructor(api: ApiService) {
    api.checkHealth().subscribe({
      next: (health) => {
        this.serverStatus = health.server
      },
      error: (err) => {
        console.error(err)
        this.serverStatus = 'OFF'
      },
    })
  }
}
