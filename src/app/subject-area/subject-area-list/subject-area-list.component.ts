import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject-area-list',
  templateUrl: './subject-area-list.component.html',
  styleUrls: ['./subject-area-list.component.css']
})
export class SubjectAreaListComponent implements OnInit {

  @Input() subjects: Array<Subject>;

  constructor() { }

  ngOnInit() {
    console.log("List of Subject Area: " + this.subjects);
  }

}
