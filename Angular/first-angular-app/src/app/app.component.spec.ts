import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create the app', () => {
    expect(component).toBeTruthy();
  });

  xit(`should have as title 'first-angular-app'`, () => {
    expect(component.title).toEqual('first-angular-app');
  });

  xit('should initialize the form', () => {
    expect(component.form).toBeDefined();
    expect(component.form.controls['firstname']).toBeDefined();
    expect(component.form.controls['lastname']).toBeDefined();
  });

  it('should update firstname control when setFirstName is called', () => {
    expect(component.form.value.firstname).toBe('');
    component.setFirstName();
    expect(component.form.value.firstname).toBe(1);
    component.setFirstName();
    fixture.detectChanges();
    expect(component.form.value.firstname).toBe(2);
  });

  // xit('should increment firstNameTmp each time setFirstName is called', () => {
  //   expect(component.firstNameTmp).toBe(0);

  //   component.setFirstName();
  //   expect(component.firstNameTmp).toBe(1);

  //   component.setFirstName();
  //   expect(component.firstNameTmp).toBe(2);
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Hello, first-angular-app'
  //   );
  // });
});
