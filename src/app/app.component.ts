import { Component, OnInit } from '@angular/core';

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

  e: number = Math.E
  str: string = 'hello world'
  date: Date = new Date()
  float = 0.42
  obj = {
    a: 3,
    b: {
      c:7,
      d:9,
      s: {
        q: {
          t:90,
          e:6
        }
      }
    }
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('ngOnInit')
      // this.posts[0].title = "change"
    },5000)
  }
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
