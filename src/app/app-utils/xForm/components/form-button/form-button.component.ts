import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../model/field.interface';
import { FieldConfig } from '../../model/field-config.interface';

@Component({
  selector: 'form-button',
  template: `
  <div style="padding-top: 10px;">
      <button [class]="config.cssClass" 
        [disabled]="config.disabled"
        type="submit">
        {{ config.label }}
      </button>
  </div>
  `
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
