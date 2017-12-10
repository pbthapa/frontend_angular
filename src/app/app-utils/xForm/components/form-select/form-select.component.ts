import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field.interface';
import { FieldConfig } from '../../model/field-config.interface';

@Component({
  selector: 'form-select',
  template: `
    <div 
      class="field required"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name" [class]="config.cssClass">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
