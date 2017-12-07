import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-subject-area-new',
  templateUrl: './subject-area-new.component.html',
  styleUrls: ['./subject-area-new.component.css']
})
export class SubjectAreaNewComponent implements OnInit {

  private subjectForm: FormGroup;
  private subject: Subject;

  constructor(formBuilder: FormBuilder) { 
    this.subjectForm = formBuilder.group({
      'subject': [null, Validators.required],
      'active': ['true']
    });
  }

  ngOnInit() {
  }

  onSubmit(value): void {
    this.subject = new Subject(null, value.subject, value.active);
    console.log(`${this.subject.subject} is entered with ${this.subject.active} status`);
  }

}