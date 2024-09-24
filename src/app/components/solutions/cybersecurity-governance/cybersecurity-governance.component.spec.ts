import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecurityGovernanceComponent } from './cybersecurity-governance.component';

describe('CybersecurityGovernanceComponent', () => {
  let component: CybersecurityGovernanceComponent;
  let fixture: ComponentFixture<CybersecurityGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityGovernanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CybersecurityGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
