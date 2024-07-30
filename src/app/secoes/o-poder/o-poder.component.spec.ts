import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPoderComponent } from './o-poder.component';

describe('OPoderComponent', () => {
  let component: OPoderComponent;
  let fixture: ComponentFixture<OPoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OPoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OPoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
