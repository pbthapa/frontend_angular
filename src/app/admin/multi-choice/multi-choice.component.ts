import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { DynamicFormComponent } from '../../app-utils/xForm/dynamic-form.component';
import { FieldConfig } from '../../app-utils/xForm/model/field-config.interface';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TableOptions } from '../../app-utils/xDatatable/table/table.options';
import { ColumnConfig } from './table-column.config';

declare var $: any;

@Component({
  selector: 'app-multi-choice',
  template: `<div class="ui raised segment">
  <dynamic-form
    [config]="config"
    #form="dynamicForm"
    (submit)="submit($event)">
  </dynamic-form>
<xtable [options]="tableOptions" (event)="onCompleteApplicationClick($event)" 
[refresh]="refreshTable"></xtable>
</div>
`
})
export class MultiChoiceComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    // Table variables
    tableOptions: TableOptions = new TableOptions();
    refreshTable = new EventEmitter<any>();
    public tableRows: any = [];
    private choiceQuestions: any[] = [];
  
    // formgroup to enable create/edit operation
    subForm: FormGroup;
  
    // data is input to the table component 
    public data;
    public pdata;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required],
      cssClass: 'ui selection dropdown'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      disabled: true,
      cssClass: 'ui positive right floated button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', '');
  }

  submit(value: { [name: string]: any }) {
    this.choiceQuestions.push({ 'custName': value['name'], 'favFood': value['food']});
    this.refreshTable.emit(this.getMultiChoiceList());
    this.form.setValue('name', '');
    this.form.setValue('food', '');
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Table Properties initialize
    this.tableOptions.rows = [];
    this.tableOptions.sort = true;

    // These are majority of data to be collected
    this.subForm = this.formBuilder.group({
      custName: ['', Validators.required],
      favFood: ['', Validators.required]
    });    
    this.getMultiChoiceList();
  }

  // Get all multi-choice list
  getMultiChoiceList() {
    Promise.all([this.choiceQuestions])
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

  showModal(): void {
    $(".ui.modal").modal("show");
  }
}
