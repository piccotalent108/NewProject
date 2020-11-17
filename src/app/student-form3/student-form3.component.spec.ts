import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentForm3Component } from './student-form3.component';

describe('StudentForm3Component', () => {
  let component: StudentForm3Component;
  let fixture: ComponentFixture<StudentForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
