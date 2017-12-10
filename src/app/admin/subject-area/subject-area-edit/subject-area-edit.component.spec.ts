import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAreaEditComponent } from './subject-area-edit.component';

describe('SubjectAreaEditComponent', () => {
  let component: SubjectAreaEditComponent;
  let fixture: ComponentFixture<SubjectAreaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAreaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAreaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
