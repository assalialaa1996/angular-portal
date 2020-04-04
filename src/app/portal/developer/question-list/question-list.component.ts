import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { SidebarService } from '../../../services/sidebar.service';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

 
	public sidebarVisible: boolean = true;

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef) {

	}

	ngOnInit() {
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

	

}
