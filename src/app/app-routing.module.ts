import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  DepartmentListComponent,
  UserListComponent,
  PageNotFoundComponent,
];
