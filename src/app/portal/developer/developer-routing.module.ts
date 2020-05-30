import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { QuestionSingleComponent } from './question/question-single/question-single.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobSingleComponent } from './job/job-single/job-single.component';
import { JobSavedComponent } from './job/job-saved/job-saved.component';
import { ProfileComponent } from './profile/profile.component';
import { JobCreateComponent } from './job/job-create/job-create.component';



const routes: Routes = [ 
  {
    
 path: 'developer', component: IndexComponent,children: 
[
  {path: 'dashboard', component:DashboardComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'questions/all', component: QuestionListComponent},
  {path: 'questions/create', component:QuestionCreateComponent},
  {path: 'questions/respond', component:QuestionSingleComponent},
  {path: 'jobs/all', component:JobListComponent},
  {path: 'jobs/apply', component:JobSingleComponent},
  {path: 'jobs/saved', component:JobSavedComponent},
  {path: 'jobs/new', component: JobCreateComponent}
]}
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRoutingModule {}  
