import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePlusComponent } from './title-plus.component';

describe('TitlePlusComponent', () => {
  let component: TitlePlusComponent;
  let fixture: ComponentFixture<TitlePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitlePlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
