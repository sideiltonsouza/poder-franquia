import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanonComponent } from './zanon.component';

describe('ZanonComponent', () => {
  let component: ZanonComponent;
  let fixture: ComponentFixture<ZanonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZanonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZanonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
