import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectAreaComponent } from './subject-area.component';
import { SubjectAreaListComponent } from './subject-area-list/subject-area-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: SubjectAreaComponent, children: [
                        { path: 'subject', component: SubjectAreaComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class SubjectAreaRoutingModule { }