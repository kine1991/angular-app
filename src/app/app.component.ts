import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  ngOnInit() {
    setTimeout(() => {
      console.log('ngOnInit')
      // this.posts[0].title = "change"
    },5000)
  }


  // p: Promise<string> = new Promise<string> ( resolve => {
  //   setTimeout(() => {
  //     resolve('ggg')
  //   },4000)
  // })

  // date: Observable<Date> = new Observable(obs => {
  //   setInterval(() => {
  //     obs.next(new Date())
  //   }, 1000)
  // })

  // search = ''
  // searchField = 'title'

  // posts: Post[] = [
  //   {title: 'Beer', text: 'eeeeeee', id: 1},
  //   {title: 'ZZZZZZZZ', text: 'yyyyyyy', id: 1},
  //   {title: 'aaaaaaa', text: 'sssssss', id: 1},
  // ];

  // addPost(){
  //   this.posts.unshift({
  //     title: 'Add',
  //     text: 'dfdfdf'
  //   })
  // }

  // e: number = Math.E
  // str: string = 'hello world'
  // date: Date = new Date()
  // float = 0.42
  // obj = {
  //   a: 3,
  //   b: {
  //     c:7,
  //     d:9,
  //     s: {
  //       q: {
  //         t:90,
  //         e:6
  //       }
  //     }
  //   }
  // }

  // posts: Post[] = [
  //   {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
  //   {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы', id: 2}
  // ]

  // updatePosts(post: Post){
  //   console.log(post)
  //   this.posts .unshift(post);
  // }

  // removePost(id){
  //   this.posts = this.posts.filter(p => p.id !== id)
  // }



  // isVisible = true;
}
