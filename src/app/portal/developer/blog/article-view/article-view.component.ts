import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
import { ArticleService } from '../../_shared/article.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  article: {};
  sidebarVisible: boolean;

  constructor(private route: ActivatedRoute,private sidebarService: SidebarService, private cdr: ChangeDetectorRef, public art_service:ArticleService) { }
 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getarticle(id);
  }
  toggleFullWidth() { 
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
  }
  getarticle(id){
    
		this.art_service.getArticle(id).subscribe((data: {}) => {
		  console.log(data);
		  this.article = data;
		  
		
		   
		});

  }
 
}
