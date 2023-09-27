import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { IconDefinition, faEye, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { User } from 'src/app/models/User.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post!: Post;
  faEye: IconDefinition = faEye;
  faCalendarDays: IconDefinition = faCalendarDays;
  faUser: IconDefinition = faUser;
  user$?: Observable<User>;

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.user$ = this.postService.getUserById(this.post.creatorId)
  }

  pageRedirect(id: number): void {
    this.router.navigate([`/posts/${id}`])
  }


}
