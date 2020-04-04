import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionSingleComponent } from './question-single/question-single.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProfileComponent } from './profile/profile.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobSingleComponent } from './job-single/job-single.component';
import { JobSavedComponent } from './job-saved/job-saved.component';

@NgModule({
  declarations: [QuestionListComponent, QuestionSingleComponent, QuestionCreateComponent, IndexComponent, DashboardComponent, ProfileComponent, JobListComponent, JobSingleComponent, JobSavedComponent],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    LayoutModule,
    NgxEchartsModule
  ],
  exports: [
    IndexComponent,
    QuestionListComponent
  ]
})
export class DeveloperModule { }
