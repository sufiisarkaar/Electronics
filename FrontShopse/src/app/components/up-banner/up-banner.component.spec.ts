import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpBannerComponent } from './up-banner.component';

describe('UpBannerComponent', () => {
  let component: UpBannerComponent;
  let fixture: ComponentFixture<UpBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
