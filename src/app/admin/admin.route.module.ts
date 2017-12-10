import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubjectAreaComponent } from './subject-area/subject-area.component';
import { SubjectAreaListComponent } from './subject-area/subject-area-list/subject-area-list.component';
import { MultiChoiceComponent } from './multi-choice/multi-choice.component';
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: AdminComponent, children: [
                        { path: 'subject', component: SubjectAreaComponent },
                        { path: 'multi-choice', component: MultiChoiceComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }