import { Component, OnInit, Input, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None // глобыльный стиль
})
export class PostComponent implements   OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


 
  // @Input('MyPost') post: Post // MyPost приходит от родителя но наботаем с post
  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) inputRef: ElementRef; // {static: false}  в любом методе кроме ngOnInit
  
  removePost(){
    this.onRemove.emit(this.post.id)
    console.log('delete', this.post)
  }

  constructor() {
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit() {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
