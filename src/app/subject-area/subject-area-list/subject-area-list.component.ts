import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Subject } from '../subject.model';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TableColumnConf } from '../../app-utils/xDataTable/table/column.conf.datatable';
import { ColumnConfig } from './table-column.config';
import { TableOptions } from './../../app-utils/xDatatable/table/table.options';

@Component({
  selector: 'app-subject-area-list',
  templateUrl: './subject-area-list.component.html',
  styleUrls: ['./subject-area-list.component.css']
})
export class SubjectAreaListComponent implements OnInit {

  @Input() subjects: Array<Subject>;

  // Table variables
  tableOptions: TableOptions = new TableOptions();
  refreshTable = new EventEmitter<any>();
  public tableRows: Array<Subject> = [];

  // formgroup to enable create/edit operation
  subForm: FormGroup;

  // data is input to the table component 
  public data;
  public pdata;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("List of Subject Area: " + this.subjects);
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

  // Get all department list
  getSubjectAreaList() {
    Promise.all([this.subjects])
      .then(response => {
        this.data = response[0];
        this.tableRows = this.data;
        this.setTableOption();
      });
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
    }
    if (event.event === 'edit') {
    }
    if (event.event === 'delete') {
    }
    if (event.event === 'deactivate') {
    }
  }

}
