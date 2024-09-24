import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecurityManagedComponent } from './cybersecurity-managed.component';

describe('CybersecurityManagedComponent', () => {
  let component: CybersecurityManagedComponent;
  let fixture: ComponentFixture<CybersecurityManagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityManagedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CybersecurityManagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
