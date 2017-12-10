import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { SubjectAreaComponent } from '../subject-area/subject-area.component';
import { SubjectAreaService } from '../subject-area/subject-area.service';
import { SubjectAreaListComponent } from '../subject-area/subject-area-list/subject-area-list.component';
import { SubjectAreaNewComponent } from '../subject-area/subject-area-new/subject-area-new.component';
import { SubjectAreaEditComponent } from '../subject-area/subject-area-edit/subject-area-edit.component';
import { TableComponent } from '../app-utils/xDatatable/table/table.component';
import { DataLoaderService } from '../app-utils/xDatatable/service/dataLoader.service';
import { HtmlBind } from '../app-utils/xDatatable/table/html-bind.directive';
import { TooltipModule } from 'ngx-tooltip';
import { MultiChoiceRoutingModule } from './multi-choice.route.module';
import { CommonModule } from '@angular/common';
import { MultiChoiceComponent } from './multi-choice.component';

@NgModule({
  declarations: [
    MultiChoiceComponent,
    TableComponent,
    HtmlBind
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule, 
    FormsModule,
    TooltipModule, 
    MultiChoiceRoutingModule
  ],
  providers: [
  ],
  exports: [ 
    TableComponent
  ]
})
export class MultiChoiceModule { }