import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';

@Component({
  selector: 'app-question-single',
  templateUrl: './question-single.component.html',
  styleUrls: ['./question-single.component.css']
})
export class QuestionSingleComponent implements OnInit {
  public sidebarVisible: boolean = true;

  public config: object = {
		items: [
			'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
			'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
			'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
			'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
			'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
			'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|']
	};
	public htmlContent: string = "";

  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef) {
		
		this.htmlContent = "<h3 class='m-b-0'>hi,</h3><h4 class='m-t-0'>we are Wrraptheme.</h4><p></p>";
	}

  toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
  }
  
  ngOnInit() {
  }

}
