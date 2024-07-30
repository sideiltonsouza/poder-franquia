import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltonComponent } from './wilton.component';

describe('WiltonComponent', () => {
  let component: WiltonComponent;
  let fixture: ComponentFixture<WiltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WiltonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WiltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
