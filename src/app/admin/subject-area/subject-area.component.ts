import { Component, OnInit, EventEmitter } from '@angular/core';
import { SubjectAreaService } from './service/subject-area.service';
import { Subject } from './model/subject.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TableOptions } from '../../app-utils/xDatatable/table/table.options';
import { ColumnConfig } from './table-column.config';

@Component({
  selector: 'app-subject-area',
  templateUrl: './subject-area.component.html'
})
export class SubjectAreaComponent implements OnInit {

  private subjectForm: FormGroup;

  // Table variables
  tableOptions: TableOptions = new TableOptions();
  refreshTable = new EventEmitter<any>();
  public tableRows: Array<Subject> = [];

  // formgroup to enable create/edit operation
  subForm: FormGroup;

  // data is input to the table component 
  public data;
  public pdata;

  private subjectAreaList: Array<Subject> = [
    new Subject(1, "Core Java", true),
    new Subject(2, "Spring", true),
    new Subject(3, "Hibernate", false),
    new Subject(4, "Dot Net", true),
    new Subject(5, "Angular JS", true)
  ];

  constructor(private formBuilder: FormBuilder, private _subjectAreaService: SubjectAreaService) {
    this.subjectForm = formBuilder.group({
      'subject': [null, Validators.required],
      'active': ['true']
    });
  }

  ngOnInit() {
    // Table Properties initialize
    this.tableOptions.rows = [];
    this.tableOptions.sort = true;

    // These are majority of data to be collected
    this.subForm = this.formBuilder.group({
      subject: ['', Validators.required],
      active: ['', Validators.required],
      subjectId: ['', Validators.required],
    });

    this.getSubjectAreaList();
  }

  addSubject(obj: Subject) {
    //temporary solution until saved in database
    obj.id = 1;
    if (obj.active === null) {
      obj.active = false;
    }
    this.subjectAreaList.push(obj);
    this.subjectForm.reset(this.getSubjectAreaList());
    this.refreshTable.emit();
  }

  getSubjectAreaList() {
    Promise.all([this.subjectAreaList])
    .then(response => {
      this.data = response[0];
      this.tableRows = this.data;
      this.setTableOption();
    });
    // this._subjectAreaService.getSubjectAreaList()
    // .then(subjectAreaList => this.subjectAreaList = subjectAreaList);
  }


  public setTableOption() {
    this.tableOptions.columns = ColumnConfig;
    this.tableOptions.rows = this.tableRows;
    this.tableOptions.serverSide = false;
    this.tableOptions.pagination = true;
    this.tableOptions.pageSize = 10;
    this.tableOptions.serverSide = false;
  }

  // Event for table Click
  onCompleteApplicationClick(event) {
    if (event.event === 'view') {
      console.log(event.event + " is clicked. i.e. view");
    }
    if (event.event === 'edit') {
      console.log(event.event + " is clicked. i.e. edit");
    }
    if (event.event === 'delete') {
      console.log(event.event + " is clicked. i.e. delete");
    }
    if (event.event === 'deactivate') {
      console.log(event.event + " is clicked. i.e. deactivate");
    }
  }
}
