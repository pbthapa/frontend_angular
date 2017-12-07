import { Component, OnInit } from '@angular/core';
import { SubjectAreaService } from './subject-area.service';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subject-area',
  templateUrl: './subject-area.component.html',
  styleUrls: ['./subject-area.component.css']
})
export class SubjectAreaComponent implements OnInit {

  private subjectAreaList: Array<Subject> = [
    new Subject(1, "Core Java", true),
    new Subject(2, "Spring", true),
    new Subject(3, "Hibernate", false),
    new Subject(4, "Dot Net", true),
    new Subject(5, "Angular JS", true)
  ];

  constructor(private _subjectAreaService: SubjectAreaService) { 
  }

  ngOnInit() {
    this.getSubjectAreaList();
  }

  create(subject: Subject) {
    this.subjectAreaList.push(subject);
  }

  getSubjectAreaList() {
    this._subjectAreaService.getSubjectAreaList()
    .then(subjectAreaList => this.subjectAreaList = subjectAreaList);
  }
}
