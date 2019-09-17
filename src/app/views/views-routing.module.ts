import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { ViewsComponent } from './views.component';
import { PersonUpdateComponent } from './person/person-update/person-update.component';


const routes: Routes = [
    {
        path: '',
        component: ViewsComponent,
        children: [
            {
                path: 'person',
                component: PersonComponent
            },
            {
                path: 'person/:id',
                component: PersonUpdateComponent
            },
            {
                path: '',
                component: HomeComponent,
            },
            {
                pathMatch: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }
