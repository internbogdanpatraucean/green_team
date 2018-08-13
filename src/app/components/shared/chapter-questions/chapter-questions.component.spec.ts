import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterQuestionsComponent } from './chapter-questions.component';

describe('ChapterQuestionsComponent', () => {
  let component: ChapterQuestionsComponent;
  let fixture: ComponentFixture<ChapterQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
