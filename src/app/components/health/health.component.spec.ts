import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HealthComponent } from './health.component'

describe('HealthComponent', () => {
  let component: HealthComponent
  let fixture: ComponentFixture<HealthComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HealthComponent, HttpClientTestingModule],
    })
    fixture = TestBed.createComponent(HealthComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
