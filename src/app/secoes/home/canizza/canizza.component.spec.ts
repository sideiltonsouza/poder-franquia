import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanizzaComponent } from './canizza.component';

describe('CanizzaComponent', () => {
  let component: CanizzaComponent;
  let fixture: ComponentFixture<CanizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
