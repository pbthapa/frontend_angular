import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAreaComponent } from './subject-area.component';

describe('SubjectAreaComponent', () => {
  let component: SubjectAreaComponent;
  let fixture: ComponentFixture<SubjectAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
