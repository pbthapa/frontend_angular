import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../app-utils/xForm/dynamic-form.component';
import { FieldConfig } from '../../app-utils/xForm/model/field-config.interface';
import { Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-multi-choice',
  template: `<div class="ui raised segment">
  <dynamic-form
    [config]="config"
    #form="dynamicForm"
    (submit)="submit($event)">
  </dynamic-form>
</div>`
})
export class MultiChoiceComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

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
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    $(".ui.modal").modal("show");
  }
}
