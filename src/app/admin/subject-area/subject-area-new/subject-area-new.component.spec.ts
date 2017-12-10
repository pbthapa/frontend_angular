import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAreaNewComponent } from './subject-area-new.component';

describe('SubjectAreaNewComponent', () => {
  let component: SubjectAreaNewComponent;
  let fixture: ComponentFixture<SubjectAreaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAreaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAreaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
