import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
import { ArticleService } from '../../_shared/article.service'; 
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class ArticleCreateComponent implements OnInit {
  @Input() articleData = { user: JSON.parse(localStorage.getItem('auth-user'))._id, content: {title:'',description:'',body:''},name: JSON.parse(localStorage.getItem('auth-user')).user.name };
  
  public sidebarVisible: boolean = true;
  public backgroundColor = { columns: 2, colorCode: { 'Custom': ['#ffff00',  '#008000', '#800080', '#800000', '#808000', '#c0c0c0', '#000000','']}}
  
  public config: object = {
		items: [
			'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
			'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
			'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
			'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
			'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
			'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|']
	};
	
	public insertImageSettings: object = {
    saveUrl: "http://localhost:4000/api/article/file",
    path: "http://localhost:4000/public/",
	  saveformat: "base64"
	 }
  constructor(private _snackBar: MatSnackBar,private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private art_ser:ArticleService) {
		
   
	}

  toggleFullWidth() { 
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
  }
  ngOnInit() {
  }
  addArticle() {

    this.art_ser.addArticle(this.articleData).subscribe((result) => {
   
      this._snackBar.open("You'll be notified by responses", "OK", {
        duration: 2000,
      });
      this.articleData.content.description='';
      this.articleData.content.title='';
      this.articleData.content.body='';
     
      
      
      
    }, (err) => {
      console.log(err);
    });
  }

  onSubmit(isValid: Boolean){
		if (isValid && this.articleData.content.body != '' ){
      this.addArticle();
		}
	}

}
