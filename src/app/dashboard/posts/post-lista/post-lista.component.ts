import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './post-lista.component.html',
  styleUrl: './post-lista.component.scss'
})
export class PostListaComponent {

  posts: Post[] = [];

  constructor(private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.postService.getAllPosts()
    .subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }

  irDetallePost(id: number): void{
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }

}
