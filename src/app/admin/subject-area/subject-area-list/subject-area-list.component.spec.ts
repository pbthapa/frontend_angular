import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAreaListComponent } from './subject-area-list.component';

describe('SubjectAreaListComponent', () => {
  let component: SubjectAreaListComponent;
  let fixture: ComponentFixture<SubjectAreaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAreaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
