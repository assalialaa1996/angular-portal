import { Component, OnInit, ChangeDetectorRef, Input, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
import { QuestionService } from '../../_shared/question.service'; 
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
  
})
export class QuestionCreateComponent implements OnInit {
  
  durationInSeconds = 5;
  @Input() questionData = { user: JSON.parse(localStorage.getItem('auth-user'))._id, title: '', content: {title:'',body:''}, tags: [''],name: JSON.parse(localStorage.getItem('auth-user')).user.name };
  
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
    saveUrl: "http://localhost:4000/api/question/file",
    path: "http://localhost:4000/public/",
	  saveformat: "base64"
	 }
  constructor(private _snackBar: MatSnackBar,private sidebarService: SidebarService, private cdr: ChangeDetectorRef, public q_service:QuestionService) {
		
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allTags.slice()));
	}

  toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
  }
  
  ngOnInit() {
  }
  onSubmit(isValid: Boolean){
		if (isValid && this.questionData.content.body != ''){
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
this.questionData.tags=this.tags
  this.q_service.addQuestion(this.questionData).subscribe((result) => {
 
    this._snackBar.open("You'll be notified by responses", "OK", {
      duration: 2000,
    });
    this.questionData.content.body=' ';
    this.questionData.content.title=' ';
    this.tags=[]
    
    
  }, (err) => {
    console.log(err);
  });
}

//Matchips
visible = true;
selectable = true;
removable = true;
addOnBlur = true;
separatorKeysCodes: number[] = [ENTER, COMMA];
tagCtrl = new FormControl();
filteredTags: Observable<string[]>;
tags: string[] = ['JS'];
allTags: string[] = ['JS', 'PHP', 'SQL', 'PYTHON', 'JAVA'];

@ViewChild('tagInput', {static: false}) tagInput: ElementRef<HTMLInputElement>;
@ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;



add(event: MatChipInputEvent): void {
  // Add fruit only when MatAutocomplete is not open
  // To make sure this does not conflict with OptionSelected Event
  if (!this.matAutocomplete.isOpen) {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }
}

remove(fruit: string): void {
  const index = this.tags.indexOf(fruit);

  if (index >= 0) {
    this.tags.splice(index, 1);
  }
}

selected(event: MatAutocompleteSelectedEvent): void {
  this.tags.push(event.option.viewValue);
  this.tagInput.nativeElement.value = '';
  this.tagCtrl.setValue(null);
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
}
}
