import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-subject-area-new',
  templateUrl: './subject-area-new.component.html',
  styleUrls: ['./subject-area-new.component.css']
})
export class SubjectAreaNewComponent implements OnInit {

  private subjectForm: FormGroup;
  private subject: Subject;
  
  @Output() createNewSubject = new EventEmitter();

  constructor(formBuilder: FormBuilder) { 
    this.subjectForm = formBuilder.group({
      'subject': [null, Validators.required],
      'active': ['true']
    });
  }

  ngOnInit() {
  }

  create(value): void {
    this.subject = new Subject(1, value.subject, value.active==null?'false': value.active);
    console.log(`${this.subject.subject} is entered with ${this.subject.active} status`);
    this.createNewSubject.emit(this.subject);
    this.subjectForm.reset();
  }

}