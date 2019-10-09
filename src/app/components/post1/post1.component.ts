import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/app.component';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.scss']
})
export class Post1Component implements OnInit {

  post: Post

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,

    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id)
      console.log(1)
      this.post = this.postsService.getById(+params.id)
      // console.log(this.postsService.getById(params.id))
      console.log(2)
    })
  }

  loadPost(){
    this.router.navigate(['/posts', 44])
  }

}
