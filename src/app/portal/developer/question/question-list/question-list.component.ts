import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuestionService } from '../../_shared/question.service';
import { SidebarService } from '../../../../services/sidebar.service';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

 
	public sidebarVisible: boolean = true;
	questions:any = [];

	


	public posts: Array<any> = new Array<any>();
	public showComment: boolean = false;
	fakeArray= new Array(1);

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef,public q_service:QuestionService) {

		this.posts = [
			{
				class: "green",
				date: "20-04-2018 - Today",
				header: "Hello, 'Im a single div responsive timeline without media Queries!",
				user: "Elisse Joson",
				location: "San Francisco, CA",
				message: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card."
			},
			{
				class: "blue",
				date: "19-04-2018 - Yesterday",
				header: "Oeehhh, that's awesome.. Me too!",
				user: "Katherine Lumaad",
				location: "Oakland, CA",
				message: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card."
			},
			{
				class: "warning",
				date: "21-02-2018",
				header: "An Engineer Explains Why You Should Always Order the Larger Pizza",
				user: "Gary Camara",
				location: "San Francisco, CA",
				message: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card."
			}
		]

	}
	getQuestions() {
		this.questions = [];
		this.q_service.getQuestions().subscribe((data: {}) => {
		  console.log(data);
		  this.questions = data;
		  this.fakeArray= new Array(this.questions.totalPages)
		
		   
		});
	  }
	ngOnInit() {
		this.getQuestions()
	
		
		 
	}
	show(x){
		console.log(x);
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

	

	toggleComment() {
		this.showComment = !this.showComment;
	}

	

}
