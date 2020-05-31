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
import { ArticleCreateComponent } from './blog/article-create/article-create.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { ArticleViewComponent } from './blog/article-view/article-view.component';



const routes: Routes = [ 
  {
    
 path: 'developer', component: IndexComponent,children: 
[
  {path: 'dashboard', component:DashboardComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'questions/all', component: QuestionListComponent},
  {path: 'questions/create', component:QuestionCreateComponent},
  {path: 'questions/respond/:id', component:QuestionSingleComponent},
  {path: 'jobs/all', component:JobListComponent},
  {path: 'jobs/view/:id', component:JobSingleComponent},
  {path: 'jobs/saved', component:JobSavedComponent},
  {path: 'jobs/new', component: JobCreateComponent},
  {path: 'blog/new',component: ArticleCreateComponent},
  {path: 'blog/all',component: ArticleListComponent},
  {path: 'blog/:id',component: ArticleViewComponent}
]}
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRoutingModule {}  
