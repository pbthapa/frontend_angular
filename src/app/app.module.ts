import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { SubjectAreaComponent } from './subject-area/subject-area.component';
import { SubjectAreaService } from './subject-area/subject-area.service';
import { SubjectAreaListComponent } from './subject-area/subject-area-list/subject-area-list.component';
import { SubjectAreaNewComponent } from './subject-area/subject-area-new/subject-area-new.component';
import { SubjectAreaEditComponent } from './subject-area/subject-area-edit/subject-area-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectAreaComponent,
    SubjectAreaListComponent,
    SubjectAreaNewComponent,
    SubjectAreaEditComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpModule
  ],
  providers: [
    SubjectAreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
