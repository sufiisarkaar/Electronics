import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassComponent } from './sunglass.component';

describe('SunglassComponent', () => {
  let component: SunglassComponent;
  let fixture: ComponentFixture<SunglassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunglassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunglassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
