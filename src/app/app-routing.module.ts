import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExecutivesComponent } from './components/executives/executives.component';
import { ExecutiveGroupsComponent } from './components/executive-groups/executive-groups.component';
import { ExecutiveDetailsComponent } from './components/executive-details/executive-details.component';
import { AppNavigation } from './constants/constants';
import { ExecutiveAddComponent } from './components/executive-add/executive-add.component';
import { ExecutiveGroupAddComponent } from './components/executive-group-add/executive-group-add.component';
import { ExecutiveGroupEditComponent } from './components/executive-group-edit/executive-group-edit.component';

const routes: Routes = [
  { path: '', component: ExecutivesComponent },
  { path: AppNavigation.allExecutives, component: ExecutivesComponent },
  { path: AppNavigation.addExecutive, component: ExecutiveAddComponent },
  { path: AppNavigation.executiveDetails + "/:id", component: ExecutiveDetailsComponent },
  { path: AppNavigation.editExecutive + "/:id", component: ExecutiveAddComponent },
  { path: AppNavigation.executiveGroups, component: ExecutiveGroupsComponent },
  { path: AppNavigation.addGroup, component: ExecutiveGroupAddComponent },
  { path: AppNavigation.editGroup + "/:id", component: ExecutiveGroupEditComponent },
  { path: '**', component: ExecutivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
