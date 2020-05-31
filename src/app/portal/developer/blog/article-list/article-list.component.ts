import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ArticleService } from '../../_shared/article.service';
import { SidebarService } from '../../../../services/sidebar.service';
import { count } from 'rxjs/operators';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  counter=1;
	public sidebarVisible: boolean = true;
	questions:any = [];

	


	public posts: Array<any> = new Array<any>();
	public showComment: boolean = false;
	fakeArray= new Array(1);

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef,public q_service:ArticleService) {

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
	getQuestions(x) {
		this.questions = [];
		this.q_service.getArticles(x).subscribe((data: {}) => {
		  console.log(data);
		  this.questions = data;
		  this.fakeArray= new Array(this.questions.totalPages)
		
		   
		});
	  }
	ngOnInit() {
		this.getQuestions(1)
	
		
		 
	}
	show(x){
		console.log(x);
		this.getQuestions(x)
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

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

	

	toggleComment() {
		this.showComment = !this.showComment;
	}

 
}
