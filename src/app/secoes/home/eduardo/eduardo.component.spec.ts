import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduardoComponent } from './eduardo.component';

describe('EduardoComponent', () => {
  let component: EduardoComponent;
  let fixture: ComponentFixture<EduardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduardoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
