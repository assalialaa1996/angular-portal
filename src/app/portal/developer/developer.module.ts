import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionSingleComponent } from './question/question-single/question-single.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from './_shared/layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input'; 
import { ProfileComponent } from './profile/profile.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobSingleComponent } from './job/job-single/job-single.component';
import { JobSavedComponent } from './job/job-saved/job-saved.component';
import { RouterModule } from '@angular/router';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [QuestionListComponent, QuestionSingleComponent, QuestionCreateComponent, IndexComponent, DashboardComponent, ProfileComponent, JobListComponent, JobSingleComponent, JobSavedComponent],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    LayoutModule,
    RouterModule,
    RichTextEditorAllModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgbModule
    
    

    
  ],
  exports: [
    IndexComponent,
    QuestionListComponent
  ]
})
export class DeveloperModule { }
