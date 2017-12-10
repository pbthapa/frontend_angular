import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MultiChoiceComponent } from './multi-choice.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: MultiChoiceComponent, children: [
                        { path: 'multi-choice', component: MultiChoiceComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class MultiChoiceRoutingModule { }