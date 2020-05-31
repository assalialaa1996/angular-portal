import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
import { JobService } from '../../_shared/job.service'; 
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class JobCreateComponent implements OnInit {

   
  durationInSeconds = 5;
  @Input() questionData = { user: JSON.parse(localStorage.getItem('auth-user'))._id, content: {title:'',description:''}, requirements:'',responsabilities:'',name: JSON.parse(localStorage.getItem('auth-user')).user.name };
  
  public sidebarVisible: boolean = true;
  public backgroundColor = { columns: 2, colorCode: { 'Custom': ['#ffff00',  '#008000', '#800080', '#800000', '#808000', '#c0c0c0', '#000000','']}}
  
  public config: object = {
		items: [
			'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
			'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
			'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
			'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
			'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
			 '|', 'ClearFormat', 'SourceCode', '|']
	};
	
	public insertImageSettings: object = {
    saveUrl: "http://localhost:4000/api/job/file",
    path: "http://localhost:4000/public/",
	  saveformat: "base64"
	 }
  constructor(private _snackBar: MatSnackBar,private sidebarService: SidebarService, private cdr: ChangeDetectorRef, public j_service:JobService) {
		
   
	}

  toggleFullWidth() { 
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
  }
  
  ngOnInit() {
  }
  onSubmit(isValid: Boolean){
		if (isValid && this.questionData.responsabilities != '' && this.questionData.requirements != ''){
      this.addProduct();
		}
	}

  public onImageUploadSuccess = (args: any) => {
    if (args.e.currentTarget.getResponseHeader('name') != null) {
        args.file.name = args.e.currentTarget.getResponseHeader('name');
        let filename: any = document.querySelectorAll(".e-file-name")[0];
        filename.innerHTML = args.file.name.replace(document.querySelectorAll(".e-file-type")[0].innerHTML, '');
        filename.title = args.file.name;
    }
 

}

addProduct() {

  this.j_service.addJob(this.questionData).subscribe((result) => {
 
    this._snackBar.open("You'll be notified by responses", "OK", {
      duration: 2000,
    });
    this.questionData.content.description='';
    this.questionData.content.title='';
    this.questionData.requirements='';
    this.questionData.responsabilities='';
    
    
    
  }, (err) => {
    console.log(err);
  });
}






}
