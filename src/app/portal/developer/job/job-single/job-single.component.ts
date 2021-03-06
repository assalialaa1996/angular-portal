import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
import { JobService } from '../../_shared/job.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-job-single',
  templateUrl: './job-single.component.html',
  styleUrls: ['./job-single.component.css']
})
export class JobSingleComponent implements OnInit {
  job: {};
  sidebarVisible: boolean;

  constructor(private route: ActivatedRoute,private sidebarService: SidebarService, private cdr: ChangeDetectorRef, public j_service:JobService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getjob(id);
  }
  toggleFullWidth() { 
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
  }
  getjob(id){
    
		this.j_service.getJob(id).subscribe((data: {}) => {
		  console.log(data);
		  this.job = data;
		  
		
		   
		});

  }

}
