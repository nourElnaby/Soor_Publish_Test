import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecurityAwarenessComponent } from './cybersecurity-awareness.component';

describe('CybersecurityAwarenessComponent', () => {
  let component: CybersecurityAwarenessComponent;
  let fixture: ComponentFixture<CybersecurityAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityAwarenessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CybersecurityAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
