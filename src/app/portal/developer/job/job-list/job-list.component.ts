import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
import { JobService } from '../../_shared/job.service'; 
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  public sidebarVisible: boolean = true;
  public  jobs :any = [];
  fakeArray: any[]; 
  counter=1;
  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, public j_service:JobService) { }

  ngOnInit() {
    this.getjobs(1);
  }
  toggleFullWidth() { 
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
  }
  getjobs(x){
    this.jobs = [];
		this.j_service.getJobs(x).subscribe((data: {}) => {
		  console.log(data);
		  this.jobs = data;
		  this.fakeArray= new Array(this.jobs.totalPages)
		
		   
		});

  }
  show(x){
		console.log(x);
		this.getjobs(x)
		this.counter=x;
		
	}
	next(){
		if(this.counter< this.fakeArray.length) this.counter++;
		this.show(this.counter)

	}
	previous(){
		if (this.counter>1)this.counter--;
		this.show(this.counter)

	}
}
