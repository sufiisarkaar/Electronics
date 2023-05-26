import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownBannerComponent } from './down-banner.component';

describe('DownBannerComponent', () => {
  let component: DownBannerComponent;
  let fixture: ComponentFixture<DownBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
