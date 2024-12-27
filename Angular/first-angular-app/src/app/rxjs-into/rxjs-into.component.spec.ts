import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntoComponent } from './rxjs-into.component';

describe('RxjsIntoComponent', () => {
  let component: RxjsIntoComponent;
  let fixture: ComponentFixture<RxjsIntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsIntoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsIntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
