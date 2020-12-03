import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodingPageComponent } from './loding-page.component';

describe('LodingPageComponent', () => {
  let component: LodingPageComponent;
  let fixture: ComponentFixture<LodingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
