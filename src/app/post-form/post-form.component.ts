import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', {static: true}) inputRef: ElementRef // if  ngOnInit {static: true}

  title = '';
  text = '';

  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      // console.log('post ', post)

      this.title = this.text = ''
    }
  }

  focusTitle(){
    this.inputRef.nativeElement.focus();
    // console.log(this.inputRef);
  }

  constructor() { }

  ngOnInit() {
  }

}
