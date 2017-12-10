import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: DashboardComponent, pathMatch: 'full' },
            { path: 'subject', loadChildren: '../subject-area/subject-area.module#SubjectAreaModule' },
            { path: 'multi-choice', loadChildren: '../multi-choice/multi-choice.module#MultiChoiceModule' }
        ]
    }
]

export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);