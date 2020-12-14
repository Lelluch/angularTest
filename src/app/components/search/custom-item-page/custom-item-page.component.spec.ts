import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomItemPageComponent } from './custom-item-page.component';

describe('CustomItemPageComponent', () => {
  let component: CustomItemPageComponent;
  let fixture: ComponentFixture<CustomItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
