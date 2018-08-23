import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFinishComponent } from './course-finish.component';

describe('CourseFinishComponent', () => {
  let component: CourseFinishComponent;
  let fixture: ComponentFixture<CourseFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
