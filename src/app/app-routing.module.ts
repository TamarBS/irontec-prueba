import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
