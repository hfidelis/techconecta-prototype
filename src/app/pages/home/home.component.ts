import { Component, OnInit } from '@angular/core';
import { IconDefinition, faChevronDown, faSquarePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/models/Post.model';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faChevronDown: IconDefinition = faChevronDown;
  faSquarePlus: IconDefinition = faSquarePlus;
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;

  posts!: Array<Post>;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
  }

}
