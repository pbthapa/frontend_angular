import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { TableComponent } from '../app-utils/xDatatable/table/table.component';
import { DataLoaderService } from '../app-utils/xDatatable/service/dataLoader.service';
import { HtmlBind } from '../app-utils/xDatatable/table/html-bind.directive';
import { TooltipModule } from 'ngx-tooltip';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.route.module';
import { SubjectAreaComponent } from './subject-area/subject-area.component';
import { SubjectAreaListComponent } from './subject-area/subject-area-list/subject-area-list.component';
import { SubjectAreaNewComponent } from './subject-area/subject-area-new/subject-area-new.component';
import { SubjectAreaEditComponent } from './subject-area/subject-area-edit/subject-area-edit.component';
import { SubjectAreaService } from './subject-area/service/subject-area.service';
import { MultiChoiceComponent } from './multi-choice/multi-choice.component';
import { HomeModule } from '../home/home.module';
import { AdminComponent } from './admin.component';
import { DynamicFormModule } from '../app-utils/xForm/dynamic-form.module';

@NgModule({
  declarations: [
    TableComponent,
    HtmlBind,
    SubjectAreaComponent,
    SubjectAreaListComponent,
    SubjectAreaNewComponent,
    SubjectAreaEditComponent,
    MultiChoiceComponent,
    AdminComponent
  ],
  imports: [    
    CommonModule,
    ReactiveFormsModule,
    HttpModule, 
    FormsModule,
    TooltipModule, 
    AdminRoutingModule,
    HomeModule,
    DynamicFormModule
  ],
  providers: [
    SubjectAreaService,
    DataLoaderService
  ],
  exports: [ 
    TableComponent
  ]
})
export class AdminModule { }