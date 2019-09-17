import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './views/person/person.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './views/views.module#ViewsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
