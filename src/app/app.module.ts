import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { SubjectAreaComponent } from './subject-area/subject-area.component';
import { SubjectAreaService } from './subject-area/subject-area.service';
import { SubjectAreaListComponent } from './subject-area/subject-area-list/subject-area-list.component';
import { SubjectAreaNewComponent } from './subject-area/subject-area-new/subject-area-new.component';
import { SubjectAreaEditComponent } from './subject-area/subject-area-edit/subject-area-edit.component';
import { MultiChoiceComponent } from './multi-choice/multi-choice.component';
import { TableComponent } from './app-utils/xDataTable/table/table.component';
import { DataLoaderService } from './app-utils/xDataTable/service/dataLoader.service';
import { HtmlBind } from './app-utils/xDataTable/table/html-bind.directive';
import { TooltipModule } from 'ngx-tooltip';


@NgModule({
  declarations: [
    AppComponent,
    SubjectAreaComponent,
    SubjectAreaListComponent,
    SubjectAreaNewComponent,
    SubjectAreaEditComponent,
    MultiChoiceComponent,
    TableComponent,
    HtmlBind
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpModule, FormsModule, TooltipModule
  ],
  providers: [
    SubjectAreaService, DataLoaderService
  ],
  exports: [TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
